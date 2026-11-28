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
    if (p.startsWith('/learn/') && p.split('/').length === 5) assert.match(html, /<li class="step"[^>]*>[\s\S]*<h2 class="step__text">[^<]{5,}/, `${p} 단계 글이 HTML에 있음`);
  }
});

test('국내 갤럭시 수업 ↔ 해외 언어 hreflang이 서로 연결된다(x-default 포함)', () => {
  const ko = read('/learn/galaxy/g01-charge/');
  const alts = [...ko.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
  assert.ok(alts.length >= 20, `hreflang ${alts.length}개`);
  assert.ok(alts.some(([, c]) => c === 'x-default'));
  for (const [, c, href] of alts) assert.equal(href, href.toLowerCase(), `${c}: 주소에 대문자가 있으면 넷리파이가 301 이동시켜 canonical·hreflang이 어긋남`);
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
  if (SITE_CONFIG.gtmId) {
    // GTM은 머리에 바로(구글 태그 확인 도구가 찾도록), 단 동의 모드 기본값(쿠키 거부)이 먼저 실행된다
    const a = html.indexOf('/assets/gtm-head.js'); const b = html.indexOf(`gtm.js?id=${SITE_CONFIG.gtmId}`);
    assert.ok(a > 0 && b > a && b < html.indexOf('</head>'), '동의 모드 → gtm.js 순서로 head 안에');
    assert.ok(html.indexOf('Content-Security-Policy') < a, '보안 정책이 스크립트보다 먼저');
    const js = readFileSync(new URL('../assets/gtm-head.js', import.meta.url), 'utf8');
    assert.match(js, /analytics_storage: choice === 'yes' \? 'granted' : 'denied'/);
    assert.match(js, /ad_storage: 'denied'/);
  } else assert.doesNotMatch(html, /<script[^>]+googletagmanager/);
  assert.equal(/google-site-verification/.test(html), Boolean(SITE_CONFIG.searchConsole));
  assert.equal(html.includes(`<meta name="naver-site-verification" content="${SITE_CONFIG.naverVerification}">`), Boolean(SITE_CONFIG.naverVerification));
  assert.ok(html.indexOf('naver-site-verification') < html.indexOf('</head>'));
});

test('Search Console 코드·GA4 ID 정리: 태그째 붙여 넣어도 되고, 엉뚱한 값은 끈다', () => {
  assert.equal(cleanVerification('<meta name="google-site-verification" content="abcDEF1234567890_-xyz" />'), 'abcDEF1234567890_-xyz');
  assert.equal(cleanVerification(' abcDEF1234567890 '), 'abcDEF1234567890');
  assert.equal(cleanVerification('<meta name="naver-site-verification" content="8b2d92ad32e6f8c8243d9b37802356810afd4e33" />'), '8b2d92ad32e6f8c8243d9b37802356810afd4e33');
  assert.equal(cleanVerification('"><script>'), '');
  assert.equal(cleanGa4(' g-abc123xyz '), 'G-ABC123XYZ');
  assert.equal(cleanGa4('UA-12345-1'), '');
  assert.equal(cleanGtm('<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-KQXTB99T"></script>'), 'GTM-KQXTB99T');
  assert.equal(cleanGtm('G-ABC123'), '');
});

test('검색어: 핵심 검색어가 실제 내용과 맞는 페이지의 제목·설명에 들어 있다(meta keywords 없음)', () => {
  const td = (p) => { const h = read(p); return `${h.match(/<title>([^<]+)/)[1]} ${h.match(/<meta name="description" content="([^"]+)"/)[1]}`; };
  const expect = {
    '/': ['스마트폰', '어르신', '갤럭시 사용법', '카카오톡', '키오스크', '챗GPT', '보이스피싱', '50대'],
    '/learn/': ['시니어 스마트폰 교육', '무료 스마트폰 교육', '재취업', '창업'],
    '/learn/galaxy/': ['갤럭시 사용법', '삼성 스마트폰', '사용설명서', '휴대폰 사용법'],
    '/learn/scam/': ['보이스피싱 예방', '스미싱'],
    '/learn/digital/': ['키오스크 사용법', '모바일뱅킹'],
    '/learn/ai/': ['챗GPT', 'Gemini', 'AI 교육'],
    '/learn/creative/': ['스마트폰 사진 잘 찍는 법', '영상'],
    '/learn/career/': ['시니어 재취업', '창업', '노인일자리'],
    '/learn/galaxy/g13-install/': ['카카오톡 사용법'],
    '/learn/ai/a03-first/': ['챗GPT'],
  };
  for (const [p, words] of Object.entries(expect)) { const t = td(p); for (const w of words) assert.ok(t.includes(w), `${p}: ${w}`); }
  for (const p of locs) assert.doesNotMatch(read(p), /<meta name="keywords"/, p);
});

test('기종·One UI 검색어는 실제로 기종 제한이 있는 수업에만 쓴다', () => {
  for (const p of locs.filter((x) => x.startsWith('/learn/galaxy/g'))) {
    const d = read(p).match(/<meta name="description" content="([^"]+)"/)[1];
    const id = p.split('/')[3];
    const limited = ['g06-translate', 'g15-find', 'g19-circle', 'g19-interpret', 'g19-write', 'g19-transcribe', 'g19-photo', 'g21-spen'].includes(id);
    assert.equal(/One UI \d|울트라|S24 시리즈/.test(d), limited, `${p}: ${d}`);
  }
});

test('구조화 데이터: 첫 화면 WebSite·기관, 과정 Course, 수업 LearningResource, 모든 페이지 H2 있음', () => {
  const ld = (p) => [...read(p).matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]);
  assert.ok(['WebSite', 'EducationalOrganization'].every((t) => ld('/').includes(t)));
  for (const c of KO_COURSES) assert.ok(ld(`/learn/${c.key}/`).includes('Course'), c.key);
  for (const p of locs.filter((x) => x.split('/').length === 5)) { assert.ok(ld(p).includes('LearningResource'), p); }
  for (const p of locs) assert.match(read(p), /<h2[\s>]/, `${p} H2`);
});

test('첫 화면·정책·갤럭시 목록은 19개 언어와 hreflang으로 서로 연결된다', () => {
  for (const [p, sub] of [['/', ''], ['/learn/galaxy/', 'galaxy/'], ['/privacy/', 'privacy/'], ['/terms/', 'terms/']]) {
    const h = read(p);
    for (const code of ['en', 'ja', 'zh-Hans', 'ar']) {
      const href = `${SITE}/${code.toLowerCase()}/${sub}`;
      assert.ok(h.includes(`hreflang="${code}" href="${href}"`), `${p} → ${code}`);
      assert.ok(read(`/${code.toLowerCase()}/${sub}`).includes(`href="${SITE}${p}"`), `${code} → ${p}`);
    }
  }
});
