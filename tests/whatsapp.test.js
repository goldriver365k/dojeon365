import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { loadCatalog, publishProblems, isPublic, draw, TWO_EN, WA_TEXT, waCourse, loadLang, translateLesson } from '../scripts/build-whatsapp.mjs';
import { LESSONS_EN } from '../data/whatsapp/lessons-en.mjs';
import { LANGUAGES } from '../i18n/languages.js';
import { hasCourse, regionOf } from '../i18n/regions.js';

const cat = loadCatalog();
const all = cat.chapters.flatMap((c) => c.lessons);

test('WhatsApp 목록: 15개 대분류·160개 사용법, 필수 50개, 주소(slug) 중복 없음', () => {
  assert.equal(cat.chapters.length, 15);
  assert.deepEqual(cat.chapters.map((c) => c.lessons.length), [10, 10, 15, 12, 8, 10, 12, 10, 8, 10, 12, 12, 10, 6, 15]);
  assert.equal(all.length, 160);
  assert.equal(all.filter((l) => l.essential).length, 50);
  assert.equal(new Set(all.map((l) => l.slug)).size, 160);
  for (const l of all) { assert.match(l.slug, /^[a-z0-9-]+$/); assert.ok(l.sources.some((s) => s.url.startsWith('https://faq.whatsapp.com'))); }
  assert.equal(cat.meta.official.play, 'https://play.google.com/store/apps/details?id=com.whatsapp');
  assert.equal(cat.meta.korea, false);
});

test('영어 필수 50개: 모든 단계 한 동작, 누를 곳이 화면에 있음, 화면은 재현(검수 필요)', () => {
  assert.equal(Object.keys(LESSONS_EN).length, 50);
  let steps = 0;
  for (const l of all.filter((x) => x.essential)) {
    assert.ok(l.steps.length >= 1, l.id);
    l.steps.forEach((s, i) => {
      steps++;
      assert.doesNotMatch(s.text, TWO_EN, `${l.id} ${i + 1}: ${s.text}`);
      assert.ok(s.image.screen && s.image.alt, `${l.id} ${i + 1}`);
      if (s.targetLabel) assert.ok(draw(s.image.screen, s.targetLabel).target, `${l.id} ${i + 1}: ${s.targetLabel}`);
      const pressed = s.text.match(/^Tap “([^”]+)”/)?.[1];
      if (pressed) assert.ok(s.targetLabel, `${l.id} ${i + 1}: tap “${pressed}” but no red circle`);
      assert.match(s.imageMeta.source, /review required/);
    });
  }
  assert.ok(steps >= 180, `${steps} cards`);
});

test('검수·공개하지 않은 수업은 공개하지 않는다(지금 공개 0 → 해외 사이트에 WhatsApp 페이지·링크·사이트맵 없음)', () => {
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko')) {
    const pub = waCourse(code, cat).count;
    const dir = `${code.toLowerCase()}/whatsapp`;
    assert.equal(existsSync(dir), pub > 0, code);
    if (!pub) assert.doesNotMatch(readFileSync(`${code.toLowerCase()}/index.html`, 'utf8'), /\/whatsapp\//, code);
  }
  const sm = readFileSync('sitemap.xml', 'utf8');
  const pubEn = all.filter((l) => isPublic(l, 'en')).length;
  assert.equal((sm.match(/\/en\/whatsapp\//g) ?? []).length > 0, pubEn > 0);
  const l = all.find((x) => x.essential);
  assert.ok(publishProblems({ ...l, status: 'published', appVersion: '2.25', lastChecked: '2026-11-28', reviewedBy: 'x', steps: l.steps.map((s) => ({ ...s, imageMeta: { ...s.imageMeta, reviewed: '2026-11-28' } })) }, 'en').length === 0, '검수 기록이 다 있으면 공개 가능');
  const noFile = LANGUAGES.find((x) => x.code !== 'ko' && x.code !== 'en' && !loadLang(x.code));
  if (noFile) assert.ok(publishProblems({ ...l, status: 'published', appVersion: '2.25', lastChecked: '2026-11-28', reviewedBy: 'x' }, noFile.code).some((p) => p.includes('not translated')), '번역 없으면 그 언어는 공개 안 함');
});

test('번역 파일이 있는 언어는 빠진 문장 없이 160개 모두 공개, 화면 글자도 그 언어', () => {
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko' && x.code !== 'en')) {
    const d = loadLang(code); if (!d) continue;
    assert.equal(d.missing, 0, `${code} missing`);
    assert.equal(waCourse(code, cat).count, all.length, code);
    for (const l of all) { const t = translateLesson(l, code); assert.ok(t, `${code} ${l.id}`); for (const s of t.steps) assert.doesNotMatch(s, /\{x\}/, code); }
    assert.ok(existsSync(`${code.toLowerCase()}/whatsapp/index.html`), code);
  }
});

test('국가 설정: 한국 사이트는 카카오톡·WhatsApp 없음 / 해외는 WhatsApp·카카오톡 없음', () => {
  assert.equal(regionOf('ko'), 'KR');
  assert.ok(hasCourse('ko', 'kakaotalk') && !hasCourse('ko', 'whatsapp'));
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko')) assert.ok(hasCourse(code, 'whatsapp') && !hasCourse(code, 'kakaotalk'), code);
  for (const p of ['index.html', 'learn/index.html', 'learn/galaxy/index.html', 'learn/kakaotalk/index.html']) {
    if (!existsSync(p)) continue;
    const h = readFileSync(p, 'utf8');
    assert.doesNotMatch(h, /\/whatsapp\/|How to Use WhatsApp|WhatsApp 사용법/, p);
  }
  assert.ok(!readdirSync('learn').includes('whatsapp'));
});

test('19개 언어 이름·부제·독립 교육 안내 문구, 관리자 화면', () => {
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko')) { const t = WA_TEXT[code]; assert.ok(t && t.length === 3 && t.every(Boolean), code); assert.match(t[2], /WhatsApp/); assert.match(t[2], /Meta/); }
  assert.equal(WA_TEXT.en[2], 'DigiStep365 is an independent educational website and is not affiliated with, sponsored, or endorsed by WhatsApp or Meta.');
  const admin = readFileSync('admin/whatsapp/index.html', 'utf8');
  assert.match(admin, /data-course="whatsapp"/);
  assert.match(admin, /noindex, nofollow/);
  assert.match(admin, /언어별 진행률/);
});
