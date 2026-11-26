import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { cleanVerification, cleanGa4, cleanGtm, SITE_CONFIG } from '../i18n/site-config.js';
import { KO_COURSES } from '../scripts/build-ko.mjs';

const SITE = 'https://digistep365.com';
const read = (p) => readFileSync(new URL(`..${p}index.html`, import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''));

test('robots.txt: 구글 로봇 허용, 관리자만 막고, 사이트맵 주소를 알린다', () => {
  const r = readFileSync(new URL('../robots.txt', import.meta.url), 'utf8');
  assert.match(r, /^User-agent: \*$/m);
  assert.match(r, /^Allow: \/$/m);
  assert.deepEqual(r.match(/^Disallow: .*$/gm), ['Disallow: /admin/']);
  assert.match(r, /^Sitemap: https:\/\/digistep365\.com\/sitemap\.xml$/m);
});

test('사이트맵: 국내 모든 수업(전 과정)과 첫 화면, 날짜(lastmod)가 있고 파일이 실제로 있다', () => {
  const lessons = KO_COURSES.flatMap((c) => c.chapters.flatMap((ch) => ch.lessons.map((l) => `/learn/${c.key}/${l.id}/`)));
  assert.ok(lessons.length > 300);
  for (const p of ['/', '/learn/', ...KO_COURSES.map((c) => `/learn/${c.key}/`), ...lessons]) assert.ok(locs.includes(p), p);
  assert.equal(new Set(locs).size, locs.length, '중복 주소 없음');
  assert.equal((sitemap.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) ?? []).length, locs.length);
  for (const p of locs) assert.ok(existsSync(new URL(`..${p}index.html`, import.meta.url)), p);
  assert.ok(!locs.some((p) => p.startsWith('/admin')));
});

test('사이트맵의 모든 페이지: 고유한 제목·설명, 자기 주소 canonical, 색인 허용, 본문이 HTML에 있다', () => {
  const titles = new Map();
  const descs = new Map();
  for (const p of locs) {
    const html = read(p);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const desc = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title && desc, p);
    assert.ok(desc.length >= 30 && desc.length <= 170, `${p} 설명 길이 ${desc.length}`);
    assert.ok(!titles.has(title), `제목 중복: ${p} = ${titles.get(title)}`); titles.set(title, p);
    assert.ok(!descs.has(desc), `설명 중복: ${p} = ${descs.get(desc)}`); descs.set(desc, p);
    assert.match(html, new RegExp(`<link rel="canonical" href="${SITE}${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`), p);
    assert.doesNotMatch(html, /noindex/, p);
    if (p.startsWith('/learn/') && p.split('/').length === 5) assert.match(html, /<li class="step">[\s\S]*<h2 class="step__text">[^<]{5,}/, `${p} 단계 글이 HTML에 있음`);
  }
});

test('국내 갤럭시 수업 ↔ 해외 언어 hreflang이 서로 연결된다(x-default 포함)', () => {
  const ko = read('/learn/galaxy/g01-charge/');
  const alts = [...ko.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
  assert.ok(alts.length >= 20, `hreflang ${alts.length}개`);
  assert.ok(alts.some(([, c]) => c === 'x-default'));
  const en = alts.find(([, c]) => c === 'en')[2].replace(SITE, '');
  assert.match(read(en), /hreflang="ko" href="https:\/\/digistep365\.com\/learn\/galaxy\/g01-charge\/"/);
});

test('첫 화면은 자바스크립트 없이도 과정 링크가 읽히고, 방문 통계는 설정대로(동의 후에만) 붙는다', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  for (const c of KO_COURSES) assert.ok(html.includes(`<a href="/learn/${c.key}/">`), c.key);
  assert.match(html, /<h1>[^<]+<\/h1>/);
  const on = SITE_CONFIG.gtmId || SITE_CONFIG.ga4Id;
  assert.equal(/data-consent/.test(html), Boolean(on));
  assert.equal(html.includes(`content="${SITE_CONFIG.gtmId}"`), Boolean(SITE_CONFIG.gtmId));
  assert.doesNotMatch(html, /<script[^>]+googletagmanager/, '구글 스크립트를 직접 넣지 않음(동의 후 analytics.js가 불러옴)');
  assert.equal(/google-site-verification/.test(html), Boolean(SITE_CONFIG.searchConsole));
});

test('Search Console 코드·GA4 ID 정리: 태그째 붙여 넣어도 되고, 엉뚱한 값은 끈다', () => {
  assert.equal(cleanVerification('<meta name="google-site-verification" content="abcDEF1234567890_-xyz" />'), 'abcDEF1234567890_-xyz');
  assert.equal(cleanVerification(' abcDEF1234567890 '), 'abcDEF1234567890');
  assert.equal(cleanVerification('"><script>'), '');
  assert.equal(cleanGa4(' g-abc123xyz '), 'G-ABC123XYZ');
  assert.equal(cleanGa4('UA-12345-1'), '');
  assert.equal(cleanGtm('<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-KQXTB99T"></script>'), 'GTM-KQXTB99T');
  assert.equal(cleanGtm('G-ABC123'), '');
});
