import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { findLesson } from '../data/galaxy/index.js';
import { metaOf } from '../data/galaxy/meta.js';
import * as EN from '../i18n/en/galaxy.js';
import { globalLessons } from '../scripts/build-global.mjs';
import { LANGUAGES } from '../i18n/languages.js';
import { REVIEWED } from '../i18n/en/review.js';
import { SITE_CONFIG } from '../i18n/site-config.js';

test('해외용 수업마다 영어 제목·주소가 있고 한국 전용 수업은 빠진다', () => {
  const slugs = new Set();
  for (const { lessons } of globalLessons()) for (const { l, t } of lessons) {
    assert.ok(t, `영어 제목 없음: ${l.id}`);
    assert.match(t[0], /^[a-z0-9-]+$/, t[0]);
    assert.ok(!slugs.has(t[0]), `주소 중복: ${t[0]}`); slugs.add(t[0]);
  }
  const extra = new Set((EN.EXTRA ?? []).map((x) => x.id));
  for (const id of Object.keys(EN.TITLES)) {
    if (extra.has(id)) { assert.ok(!findLesson(id), `해외용 새 수업 id가 국내 수업과 겹침: ${id}`); continue; }
    assert.ok(findLesson(id), `없는 수업: ${id}`);
    assert.notEqual(metaOf(id).region, 'KR', `한국 전용 수업이 해외용에 있음: ${id}`);
  }
});

test('영어 단계 수는 한국어 카드 수와 같고, 한 단계에 문장 하나', () => {
  for (const [id, en] of Object.entries(EN.LESSONS)) {
    if (!findLesson(id)) { assert.ok((EN.EXTRA ?? []).some((x) => x.id === id), `원본 없는 수업: ${id}`); continue; }
    assert.equal(en.steps.length, findLesson(id).lesson.cards.length, id);
    assert.ok(en.desc && en.desc.length <= 160, `설명 길이: ${id}`);
    for (const [text] of en.steps) assert.ok(!/\. [A-Z]/.test(text), `한 단계에 두 문장: ${id} — ${text}`);
  }
});

test('검수 전 페이지는 noindex, 사이트맵에 없음, 면책 문구 있음', () => {
  const sitemap = readFileSync('sitemap.xml', 'utf8');
  for (const [id, en] of Object.entries(EN.LESSONS)) {
    const f = `en/galaxy/${EN.TITLES[id][0]}/index.html`;
    assert.ok(existsSync(f), f);
    const html = readFileSync(f, 'utf8');
    assert.match(html, /<link rel="canonical" href="https:\/\/digistep365\.com\/en\/galaxy\//);
    assert.match(html, /hreflang="x-default"/);
    assert.match(html, /Not affiliated with, sponsored, or endorsed by Samsung Electronics/);
    if (!REVIEWED[id]) {
      assert.match(html, /<meta name="robots" content="noindex/);
      assert.ok(!sitemap.includes(`/en/galaxy/${EN.TITLES[id][0]}/`), id);
    }
  }
  assert.equal(LANGUAGES.length, 20);
});

test('국내 앱 그림은 번역 장치의 영향을 받지 않는다', async () => {
  const S = await import('../assets/screens.js');
  S.setTranslator(null);
  const c = findLesson('g03-font').lesson.cards[2];
  assert.match(S.renderScreen(c.screen, c.target, c.action).svg, /글자 크기와 스타일/);
});

test('분석 도구는 ID가 없으면 아예 불러오지 않고, 개인정보 안내가 있다', () => {
  const html = readFileSync('en/galaxy/change-font-size/index.html', 'utf8');
  if (!SITE_CONFIG.ga4Id && !SITE_CONFIG.gtmId) assert.ok(!html.includes('googletagmanager'), 'ID 없이 GA를 불러옴');
  assert.doesNotMatch(html, /<script[^>]+googletagmanager/, '구글 스크립트는 동의 후에만 analytics.js가 불러옴');
  assert.match(html, /href="\/en\/privacy\/"/);
  assert.ok(existsSync('en/privacy/index.html'));
});

test('검수 기록은 있는 수업만, 검수한 사람·날짜·기기 포함', () => {
  for (const [id, r] of Object.entries(REVIEWED)) {
    assert.ok(EN.LESSONS[id], id);
    assert.ok(r.by && /^\d{4}-\d{2}-\d{2}$/.test(r.date) && r.device, id);
  }
});

test('영어 연습 그림에 한글이 남지 않는다(남으면 그림을 빼고 글로만)', () => {
  for (const id of Object.keys(EN.LESSONS)) {
    const html = readFileSync(`en/galaxy/${EN.TITLES[id][0]}/index.html`, 'utf8');
    const pics = html.match(/<figure class="pic[\s\S]*?<\/figure>/g) ?? [];
    for (const p of pics) assert.ok(!/[\uac00-\ud7a3]/.test(p.replace(/aria-label="[^"]*"/, '')), id);
  }
});

const { LOCALES } = await import('../scripts/build-global.mjs');
const OTHER = Object.fromEntries(Object.entries(LOCALES).filter(([c]) => c !== 'en').map(([c, L]) => [c, { html: c, disclaimer: L.UI.disclaimer }]));
for (const [code, cfg] of Object.entries(OTHER)) test(`${code}: 단계 수 일치, 한 단계 한 문장, noindex, 면책 문구, 영어와 hreflang 연결`, async () => {
  const ES = await import(`../i18n/${code}/galaxy.js`);
  const { REVIEWED: ESR } = await import(`../i18n/${code}/review.js`);
  for (const [id, es] of Object.entries(ES.LESSONS)) {
    if (!findLesson(id)) { assert.ok(EN.LESSONS[id] && EN.LESSONS[id].steps.length === es.steps.length, `해외용 새 수업 단계 수: ${id}`); continue; }
    assert.equal(es.steps.length, findLesson(id).lesson.cards.length, id);
    assert.notEqual(metaOf(id).region, 'KR', id);
    for (const [text] of es.steps) assert.ok(!/\. [A-ZÁÉÍÓÚÂÊÔÃÕÇ¡¿]/.test(text), `${id} — ${text}`);
    const html = readFileSync(`${code.toLowerCase()}/galaxy/${ES.TITLES[id][0]}/index.html`, 'utf8');
    assert.match(html, new RegExp(`<html lang="${cfg.html}"`));
    if (!ESR[id]) assert.match(html, /<meta name="robots" content="noindex/);
    assert.ok(html.includes(cfg.disclaimer), `${code} 면책 문구`);
    assert.ok(html.includes(`hreflang="en" href="https://digistep365.com/en/galaxy/${EN.TITLES[id][0]}/"`), `${code}→en ${id}`);
    const en = readFileSync(`en/galaxy/${EN.TITLES[id][0]}/index.html`, 'utf8');
    assert.ok(en.includes(`hreflang="${code}" href="https://digistep365.com/${code.toLowerCase()}/galaxy/${ES.TITLES[id][0]}/"`), `en→${code} ${id}`);
  }
  assert.ok(!existsSync(`${code}/`) || code === code.toLowerCase() || !existsSync(`${code}/galaxy/`), `${code}: 대문자 폴더가 남아 있음(넷리파이가 소문자로 이동시킴)`);
  const slugs = Object.values(ES.TITLES).map((t) => t[0]);
  assert.equal(new Set(slugs).size, slugs.length, `${code} 주소 중복`);
});

test('국내 사이트: 수업마다 검색용 정적 페이지가 있고 사이트맵에 들어 있다', async () => {
  const { KO_COURSES, koLessonPath, howTo } = await import('../scripts/build-ko.mjs');
  const sitemap = readFileSync('sitemap.xml', 'utf8');
  let n = 0;
  for (const c of KO_COURSES) for (const ch of c.chapters) for (const l of ch.lessons) {
    const p = koLessonPath(c.key, l.id);
    const html = readFileSync(`.${p}index.html`, 'utf8');
    assert.doesNotMatch(html, /name="robots" content="noindex/, p);
    assert.match(html, /<link rel="canonical" href="https:\/\/digistep365\.com\/learn\//);
    assert.ok(html.includes(`/#/lesson/${l.id}/`), `${p} → 연습 화면 링크`);
    assert.ok(sitemap.includes(`https://digistep365.com${p}</loc>`), `${p} 사이트맵`);
    n++;
  }
  assert.ok(n > 300);
  assert.equal(howTo('충전하기'), '충전하는 방법');
  assert.equal(howTo('앨범 만들기'), '앨범 만드는 방법');
});

test('해외 수업 제목은 검색어 말투(언어별)이고 한국어 페이지와 hreflang으로 연결된다', () => {
  const html = readFileSync(`en/galaxy/${EN.TITLES['g03-font'][0]}/index.html`, 'utf8');
  assert.match(html, /<title>How to make text bigger on a Samsung Galaxy phone \| DigiStep365<\/title>/);
  assert.match(html, /hreflang="ko" href="https:\/\/digistep365\.com\/learn\/galaxy\/g03-font\/"/);
});

test('해외 갤럭시: 모든 언어에서 모든 단계에 그림이 있고, 따옴표 이름 하나만 그림에 맞춘다', async () => {
  const { build, quotedName } = await import('../scripts/build-global.mjs');
  assert.equal(quotedName('Tap ‘Connect’.'), 'Connect');
  assert.equal(quotedName('Touchez l’écran puis «Connexion».'), 'Connexion');
  assert.equal(quotedName('Tap ‘A’ then ‘B’.'), null);
  const r = await build();
  for (const [code, s] of Object.entries(r)) {
    if (s && typeof s === 'object' && 'pictures' in s) assert.equal(s.pictures, s.steps, code);
  }
});
