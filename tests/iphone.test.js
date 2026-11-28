// 아이폰 사용법(국내·해외 공통): 목차·단계 원고·기종 자료·공개 조건·페이지
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { CHAPTERS } from '../data/iphone/outline.mjs';
import { STEPS } from '../data/iphone/steps-essential.mjs';
import { IPHONE_MODELS, IOS_VERSIONS, SERIES, iosFor, modelById } from '../data/iphone/models.js';
import { loadCatalog, publishProblems, isPublic, iphoneCourse, progress, REQUIRES } from '../scripts/build-iphone.mjs';
import { hasCourse } from '../i18n/regions.js';

const TWO_KO = /(열고|누르고|적고|고르고|켜고|끄고|밀고|들어가|선택하고)\s|\s후\s|→/;
const TWO_EN = /,\s*then\s|\bthen tap\b|\band then\b|\band tap\b/i;
const rows = CHAPTERS.map(([key, ko, en, t]) => ({ key, ko, en, rows: t.trim().split('\n').map((r) => { const [s, k, e] = r.split('|'); return { slug: s.replace(/^\*/, ''), ko: k, en: e, ess: s.startsWith('*') }; }) }));
const all = rows.flatMap((c) => c.rows);

test('22개 대분류·440개 사용법(지시서 개수 그대로), 주소·제목 중복 없음, 필수 100개', () => {
  assert.deepEqual(rows.map((c) => c.rows.length), [25, 15, 12, 20, 15, 30, 25, 20, 18, 20, 15, 15, 15, 15, 20, 20, 30, 20, 20, 20, 30, 20]);
  assert.equal(all.length, 440);
  for (const k of ['slug', 'ko', 'en']) assert.equal(new Set(all.map((x) => x[k])).size, 440, k);
  assert.ok(all.every((x) => /^[a-z0-9-]+$/.test(x.slug) && x.ko && x.en));
  assert.equal(all.filter((x) => x.ess).length, 100);
});

test('작업지시서의 시니어 필수 25가지가 모두 필수 수업으로 있다', () => {
  const must = ['power-on', 'power-off', 'make-call', 'answer-call', 'send-message', 'take-photo', 'send-photo', 'save-photo-from-message', 'text-size', 'zoom', 'ringtone-volume', 'facetime-call', 'siri-voice', 'dictation', 'flashlight', 'set-alarm', 'wifi-connect', 'install-app', 'screenshot', 'emergency-sos', 'medical-id', 'find-my', 'assistive-access', 'assistivetouch', 'voiceover', 'speak-screen', 'scam-prevention'];
  for (const s of must) assert.ok(all.find((x) => x.slug === s && x.ess), s);
});

test('필수 100개 모두 단계 원고(한국어·영어)가 있고, 한 카드에 한 동작', () => {
  for (const x of all.filter((y) => y.ess)) {
    const src = STEPS[x.slug]; assert.ok(src, x.slug);
    const sets = Array.isArray(src) ? [src] : [src.face, src.home];
    for (const steps of sets) {
      assert.ok(steps.length >= 1, x.slug);
      for (const [ko, en] of steps) {
        assert.ok(ko && en, `${x.slug}: 글 없음`);
        assert.doesNotMatch(ko, TWO_KO, `${x.slug}: ${ko}`);
        assert.doesNotMatch(en, TWO_EN, `${x.slug}: ${en}`);
      }
    }
  }
});

test('기종 자료: 기종별 차이(홈 버튼·Face ID·동작 버튼·카메라 컨트롤·USB-C·Apple Intelligence)와 iOS 범위', () => {
  assert.equal(new Set(IPHONE_MODELS.map((m) => m.id)).size, IPHONE_MODELS.length);
  for (const m of IPHONE_MODELS) {
    assert.ok(SERIES.some(([k]) => k === m.series), m.id);
    assert.ok(iosFor(m).length >= 1, m.id);
    assert.ok(m.home !== m.faceId, `${m.id}: 홈 버튼과 Face ID 중 하나`);
  }
  for (const s of ['se', 'x', '11', '12', '13', '14', '15', '16', '17']) assert.ok(IPHONE_MODELS.some((m) => m.series === s), s);
  const m = modelById;
  assert.ok(m('se3').home && m('se3').touchId && !m('se3').faceId);
  assert.ok(m('15-pro').actionButton && !m('15').actionButton && m('15').port === 'usb-c' && m('14').port === 'lightning');
  assert.ok(m('16').cameraControl && !m('16e').cameraControl && m('16e').actionButton);
  assert.ok(m('15-pro').ai && !m('15').ai && m('16e').ai);
  assert.ok(!iosFor(m('xr')).includes('26') && iosFor(m('11')).includes('26'));
  assert.deepEqual(IOS_VERSIONS.map((x) => x.v), ['15', '16', '17', '18', '26']);
});

test('실제 화면 캡처가 없는 수업은 공개하지 않는다(코드로 그린 화면·출처 없는 화면 불가)', () => {
  const cat = loadCatalog();
  const lessons = cat.chapters.flatMap((c) => c.lessons);
  assert.equal(lessons.length, 440);
  assert.equal(lessons.filter((l) => isPublic(l, 'ko') || isPublic(l, 'en')).length, 0, '지금 공개된 수업 없음');
  const l = lessons.find((x) => x.slug === 'text-size');
  const done = { ...l, status: 'published', iphoneModel: 'iPhone 16', ios: '26.1', lastChecked: '2026-11-28', reviewedBy: 'x' };
  assert.ok(publishProblems(done, 'ko').some((p) => p.includes('실제 화면 이미지 없음')));
  const drawn = { ...done, steps: done.steps.map((s) => ({ ...s, image: { screen: { v: 'settings' }, alt: 'x' }, imageMeta: { ...s.imageMeta, source: '원본 화면 기준 재현(검수 필수)', reviewed: '2026-11-28', privacyChecked: true } })) };
  assert.ok(publishProblems(drawn, 'ko').some((p) => p.includes('실제 캡처')), '재현 화면은 출처 조건에서 막힘');
  const p = progress(cat);
  assert.equal(p.withText, 100);
  assert.equal(p.images.ko + p.images.en, 0);
  assert.ok(REQUIRES['camera-control'].feature === 'cameraControl' && REQUIRES['assistive-access'].ios === '17');
});

test('국가 설정: 아이폰은 한국·해외 모두, 카카오톡은 한국만, WhatsApp은 해외만', () => {
  assert.ok(hasCourse('ko', 'iphone') && hasCourse('en', 'iphone') && hasCourse('es', 'iphone'));
  assert.ok(hasCourse('ko', 'kakaotalk') && !hasCourse('ko', 'whatsapp') && !hasCourse('en', 'kakaotalk'));
});

test('과정 첫 화면: 한국어·영어에 내 아이폰 선택(모를 때·공통 사용법·확인 방법), 공개 수업이 없으면 검색 제외', () => {
  for (const [f, lang] of [['learn/iphone/index.html', 'ko'], ['en/iphone/index.html', 'en']]) {
    assert.ok(existsSync(f), f);
    const h = readFileSync(f, 'utf8');
    const c = iphoneCourse(lang);
    assert.match(h, /data-iphone-pick/);
    assert.match(h, /data-ip-model/); assert.match(h, /data-ip-ios/); assert.match(h, /data-ip-common/);
    assert.match(h, /value="unknown"/);
    assert.match(h, /id="how-model"/); assert.match(h, /id="how-ios"/);
    assert.match(h, /not affiliated with, sponsored, or endorsed by Apple Inc|Apple Inc\.와 제휴하거나/);
    assert.equal((h.match(/class="cat" id="c\d\d"/g) ?? []).length, 22);
    if (!c.count) assert.match(h, /<meta name="robots" content="noindex, follow">/);
  }
  const sm = readFileSync('sitemap.xml', 'utf8');
  if (!iphoneCourse('ko').count) assert.doesNotMatch(sm, /\/learn\/iphone\//);
  if (!iphoneCourse('en').count) assert.doesNotMatch(sm, /\/en\/iphone\//);
  assert.ok(!existsSync('es/iphone'), '스페인어 글이 생기기 전에는 스페인어 아이폰 페이지 없음');
  assert.match(readFileSync('en/index.html', 'utf8'), /href="\/en\/iphone\/"/);
  assert.match(readFileSync('index.html', 'utf8'), /href="\/learn\/iphone\/"/);
  assert.match(readFileSync('admin/iphone/index.html', 'utf8'), /data-course="iphone"/);
});
