// 국내(한국어) 사이트의 검색용 정적 페이지를 만든다.
//   /learn/                       모든 과정 한눈에
//   /learn/<과정>/                 과정의 목차와 수업 목록
//   /learn/<과정>/<수업id>/         수업 내용(단계 글·연습 그림) + 연습 화면으로 따라 하기 버튼
// 국내 앱은 #/ 주소라 구글이 수업마다 따로 수집하지 못한다. 이 페이지들이 수업마다 실제 주소를 준다.
// 국내 사이트는 운영 중이므로 검색 노출(index)한다. build-global.mjs가 불러 같이 만든다.
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { CATEGORIES } from '../data/categories.js';
import { CHAPTERS as GALAXY, GROUPS } from '../data/galaxy/index.js';
import * as DIGITAL from '../data/digital/index.js';
import * as AI from '../data/ai/index.js';
import * as SCAM from '../data/scam/index.js';
import * as CREATIVE from '../data/creative/index.js';
import * as CAREER from '../data/career/index.js';
import { BASE } from '../data/galaxy/helpers.js';
import { renderScreen, setTranslator } from '../assets/screens.js';
import { SITE_URL, BRAND_TAGLINE } from '../i18n/languages.js';
import { SITE_CONFIG } from '../i18n/site-config.js';

const GA = SITE_CONFIG.ga4Id;
const GSC = SITE_CONFIG.searchConsole;
/** 국내 페이지 보안 정책: 분석 ID가 있을 때만 구글 주소를 연다 */
export const koCsp = (base) => base
  .replace("img-src 'self' data:", `img-src 'self' data:${GA ? ' https://www.google-analytics.com https://www.googletagmanager.com' : ''}`)
  .replace("script-src 'self'", `script-src 'self'${GA ? ' https://www.googletagmanager.com' : ''}`)
  .replace(/connect-src '[a-z]+'/, (m) => (GA ? "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com" : m));
/** 검색 등록·분석용 머리 태그(값이 없으면 빈 문자열) */
export const koSeoMeta = () => `${GSC ? `<meta name="google-site-verification" content="${esc(GSC)}">\n` : ''}${GA ? `<meta name="ga4-id" content="${esc(GA)}">\n` : ''}`;
/** 방문 통계 동의 상자(분석 ID가 있을 때만) */
export const koConsent = () => (GA ? `<div class="consent" data-consent hidden role="region" aria-label="방문 통계 동의"><p>수업을 더 좋게 만들려고 구글 애널리틱스로 방문 수를 세도 될까요? 저희는 회원 정보나 개인 정보를 모으지 않아요. <a href="/privacy/">자세히</a></p><div><button type="button" class="btn btn--primary" data-consent-yes>좋아요</button><button type="button" class="btn" data-consent-no>괜찮아요</button></div></div>
<script src="/assets/analytics.js?v=${VERSION_REF.v}" defer></script>` : '');

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const two = (n) => String(n).padStart(2, '0');
const HANGUL = /[가-힣]/;

/** 과정 목록: 홈 카테고리 순서. key = 국내 앱 주소(#/<key>) */
const COURSE_DATA = { galaxy: { CHAPTERS: GALAXY }, scam: SCAM, digital: DIGITAL, ai: AI, creative: CREATIVE, career: CAREER };
export const KO_COURSES = CATEGORIES.map((c) => {
  const key = c.href.replace('#/', '');
  return { key, title: c.title, desc: c.desc, chapters: COURSE_DATA[key].CHAPTERS, lead: COURSE_DATA[key].COURSE?.lead ?? '' };
});

/** 갤럭시 수업의 국내 정적 페이지 주소(해외 페이지의 hreflang ko에 쓴다) */
export const koLessonPath = (course, id) => `/learn/${course}/${id}/`;

/** 검색 결과에 보이는 제목: 사람들이 실제로 치는 말에 가깝게 */
/** ‘충전하기’ → ‘충전하는 방법’, ‘만들기’ → ‘만드는 방법’ (검색어 말투) */
export function howTo(title) {
  const t = title.trim();
  if (!/[가-힣]기$/.test(t) || t.length < 2) return `${t} 방법`;
  const stem = t.slice(0, -1);
  const last = stem.charCodeAt(stem.length - 1) - 0xac00;
  const fixed = last >= 0 && last <= 11171 && last % 28 === 8 ? stem.slice(0, -1) + String.fromCharCode(0xac00 + last - 8) : stem; // ㄹ 받침은 빠진다
  return `${fixed}는 방법`;
}
function lessonTitle(course, lesson) {
  if (course.key === 'galaxy') return `갤럭시 ${howTo(lesson.title)} — 그림으로 쉽게 | DigiStep365`;
  return `${lesson.title} — ${course.title} | DigiStep365`;
}
function lessonDesc(course, lesson) {
  const words = (lesson.q ?? []).filter((w) => w !== lesson.title).slice(0, 3);
  const base = `${lesson.title}${course.key === 'galaxy' ? '을(를) 갤럭시 휴대폰에서' : ''} ${lesson.cards.length}단계 그림으로 따라 해요.`;
  const more = words.length ? ` ${words.join('·')}도 함께 알려 드려요.` : '';
  return `${base}${more} 어르신도 혼자 배우는 무료 휴대폰 수업.`.replace('을(를)', josa(lesson.title)).slice(0, 158);
}
/** 받침에 맞춰 ‘을/를’ */
function josa(word) {
  const ch = word.trim().slice(-1);
  const code = ch.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return '을(를)';
  return code % 28 ? '을' : '를';
}

function head({ title, desc, path, crumbs, alternates }) {
  const url = `${SITE_URL}${path}`;
  const ld = crumbs && { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` })) };
  const alts = alternates ?? {};
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="speech-lang" content="ko-KR">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${koCsp("default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'")}">
${koSeoMeta()}<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${Object.keys(alts).length ? `<link rel="alternate" hreflang="ko" href="${url}">\n${Object.entries(alts).map(([c, p]) => `<link rel="alternate" hreflang="${c}" href="${SITE_URL}${p}">`).join('\n')}\n${alts.en ? `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${alts.en}">\n` : ''}` : ''}<meta property="og:type" content="article">
<meta property="og:site_name" content="DigiStep365">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/icon-512.png">
<meta property="og:locale" content="ko_KR">
<link rel="icon" href="/assets/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/global.css?v=${VERSION_REF.v}">
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` : ''}<script src="/assets/global.js?v=${VERSION_REF.v}" defer></script>
</head>`;
}
const VERSION_REF = { v: '' };

const header = () => `<header class="top">
  <a class="brand" href="/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${BRAND_TAGLINE}</small></span></a>
  <div class="size" role="group" aria-label="글씨 크기">${[['normal', '보통'], ['large', '크게'], ['xlarge', '아주 크게']].map(([k, v]) => `<button type="button" class="size--${k}" data-size="${k}" aria-pressed="${k === 'normal'}" aria-label="${v}" title="${v}"><span aria-hidden="true">가</span></button>`).join('')}</div>
</header>`;
const footer = () => `<footer class="foot">
  <p>DigiStep365(편한자판 시니어 교육)는 갤럭시를 처음 쓰는 어르신이 혼자서도 한 단계씩 따라 하는 무료 휴대폰 수업입니다. 삼성전자와 관계없는 독립 교육 사이트입니다. Galaxy는 삼성전자의 상표입니다.</p>
  <p><a href="/">처음 화면</a> · <a href="/learn/">모든 수업 한눈에</a> · <a href="/privacy/">개인정보 안내</a> · <a href="/en/" hreflang="en" lang="en">English</a></p>
</footer>
${koConsent()}`;
const crumbNav = (crumbs) => `<nav class="crumbs" aria-label="현재 위치"><ol>${crumbs.map(([n, p], i) => i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;

function picture(card) {
  if (!card?.screen) return '';
  const pic = renderScreen(card.screen, card.target, card.action);
  return `<figure class="pic" role="img" aria-label="${esc(card.alt ?? '휴대폰 화면 그림')}">${pic.svg.replace('aria-hidden="true"', 'aria-hidden="true" class="pic__svg"')}</figure>`;
}

const appLesson = (lesson) => (lesson.intro ? `/#/lesson/${lesson.id}/start` : `/#/lesson/${lesson.id}/1`);
const chapterTitle = (ch) => ch.title;

function lessonPage(course, ch, lesson, siblings, alternates) {
  const path = koLessonPath(course.key, lesson.id);
  const crumbs = [['처음 화면', '/'], ['모든 수업', '/learn/'], [course.title, `/learn/${course.key}/`], [lesson.title, path]];
  const idx = siblings.findIndex((x) => x.id === lesson.id);
  const next = siblings[idx + 1];
  const words = (lesson.q ?? []).filter((w) => w !== lesson.title);
  return `${head({ title: lessonTitle(course, lesson), desc: lessonDesc(course, lesson), path, crumbs, alternates })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>${esc(course.key === 'galaxy' ? `갤럭시 ${lesson.title}` : lesson.title)}</h1>
<p class="lead">${esc(`${two(ch.num)} ${chapterTitle(ch)}`)} · ${lesson.cards.length}단계 · 그림을 보며 한 단계씩 따라 하세요.</p>
<a class="btn btn--primary btn--block" href="${appLesson(lesson)}">연습 화면으로 따라 하기</a>
${words.length ? `<p class="ko-words"><b>이렇게도 찾아요</b> ${words.map((w) => `<span>${esc(w)}</span>`).join('')}</p>` : ''}
<ol class="steps ko-steps">
${lesson.cards.map((c, i) => `<li class="step">
  <p class="step__no">${i + 1}단계 / ${lesson.cards.length}</p>
  <h2 class="step__text">${esc(c.text)}</h2>
  ${c.hint ? `<p class="step__hint">${esc(c.hint)}</p>` : ''}
  ${picture(c)}
</li>`).join('\n')}
</ol>
${lesson.caution ? `<p class="step__note"><strong>주의</strong> ${esc(lesson.caution)}</p>` : ''}
<p class="based">${course.key === 'galaxy' ? `기준: ${esc(BASE.model)} · ${esc(BASE.software)}. 기종과 버전에 따라 메뉴 이름이 조금 다를 수 있어요.` : '연습 화면은 실제 앱과 조금 다를 수 있어요. 돈이 나가거나 비밀번호가 필요한 일은 연습 화면에서만 해요.'}</p>
<a class="btn btn--primary btn--block" href="${appLesson(lesson)}">연습 화면으로 따라 하기</a>
${next ? `<p class="finish">다음 수업: <a href="${koLessonPath(course.key, next.id)}">${esc(next.title)}</a></p>` : ''}
<section class="popular"><h2>같은 목차의 수업</h2><ul class="lessons">${siblings.filter((x) => x.id !== lesson.id).map((x) => `<li><a href="${koLessonPath(course.key, x.id)}">${esc(x.title)}<span>${x.cards.length}단계</span></a></li>`).join('')}</ul></section>
</main>
${footer()}
</body>
</html>
`;
}

function coursePage(course) {
  const path = `/learn/${course.key}/`;
  const crumbs = [['처음 화면', '/'], ['모든 수업', '/learn/'], [course.title, path]];
  const total = course.chapters.reduce((a, c) => a + c.lessons.length, 0);
  const title = course.key === 'galaxy' ? `갤럭시 휴대폰 사용법 ${total}가지 — 그림으로 쉽게 | DigiStep365` : `${course.title} — 수업 ${total}개 | DigiStep365`;
  const desc = `${course.title}: ${course.desc}. 수업 ${total}개를 그림으로 한 단계씩 따라 해요. 어르신도 혼자 배우는 무료 수업.`.slice(0, 158);
  const groups = course.key === 'galaxy' ? GROUPS : [{ id: null, title: '' }];
  return `${head({ title, desc, path, crumbs, alternates: course.key === 'galaxy' ? { en: '/en/galaxy/' } : null })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>${esc(course.title)}</h1>
<p class="lead">${esc(course.lead || course.desc)}</p>
<a class="btn btn--primary btn--block" href="/#/${course.key}">연습 화면으로 시작하기</a>
${groups.map((g) => `${g.title ? `<section class="group"><h2>${esc(g.title)}</h2>` : '<section class="group">'}
${course.chapters.filter((ch) => !g.id || ch.group === g.id).map((ch) => `<section class="cat" id="c${two(ch.num)}">
  <h3><span class="num">${two(ch.num)}</span> ${esc(chapterTitle(ch))}</h3>
  ${ch.desc ? `<p class="cat__desc">${esc(ch.desc)}</p>` : ''}
  <ul class="lessons">${ch.lessons.map((l) => `<li><a href="${koLessonPath(course.key, l.id)}">${esc(l.title)}<span>${l.cards.length}단계</span></a></li>`).join('')}</ul>
</section>`).join('\n')}
</section>`).join('\n')}
</main>
${footer()}
</body>
</html>
`;
}

function hubPage() {
  const path = '/learn/';
  const crumbs = [['처음 화면', '/'], ['모든 수업', path]];
  const total = KO_COURSES.reduce((a, c) => a + c.chapters.reduce((b, ch) => b + ch.lessons.length, 0), 0);
  return `${head({ title: `어르신 휴대폰 교실 — 모든 수업 ${total}개 한눈에 | DigiStep365`, desc: `갤럭시 사용법, 전화 사기 예방, 키오스크·은행 앱 연습, AI, 창작, 재취업까지 무료 수업 ${total}개. 그림을 보며 한 단계씩 따라 해요.`, path, crumbs, alternates: { en: '/en/' } })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>모든 수업 한눈에</h1>
<p class="lead">수업 ${total}개를 글과 그림으로 볼 수 있어요. 따라 하기는 ‘연습 화면’에서 한 단계씩 해요.</p>
<a class="btn btn--primary btn--block" href="/">연습 화면 처음으로</a>
${KO_COURSES.map((c) => `<section class="cat">
  <h3><a href="/learn/${c.key}/">${esc(c.title)}</a></h3>
  <p class="cat__desc">${esc(c.desc)} · 수업 ${c.chapters.reduce((a, ch) => a + ch.lessons.length, 0)}개</p>
  <ul class="lessons">${c.chapters.slice(0, 6).map((ch) => `<li><a href="/learn/${c.key}/#c${two(ch.num)}">${esc(chapterTitle(ch))}<span>${ch.lessons.length}개</span></a></li>`).join('')}${c.chapters.length > 6 ? `<li><a href="/learn/${c.key}/">목차 ${c.chapters.length}개 모두 보기<span>›</span></a></li>` : ''}</ul>
</section>`).join('\n')}
</main>
${footer()}
</body>
</html>
`;
}

function privacyPage() {
  const path = '/privacy/';
  const crumbs = [['처음 화면', '/'], ['개인정보 안내', path]];
  return `${head({ title: '개인정보 안내 | DigiStep365', desc: 'DigiStep365는 회원 가입이 없고, 수업 진도는 내 휴대폰 브라우저에만 저장돼요. 방문 통계는 동의한 경우에만 사용해요.', path, crumbs, alternates: { en: '/en/privacy/' } })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>개인정보 안내</h1>
<p>DigiStep365는 회원 가입이 없어요. 이름·전화번호 같은 개인 정보를 받지 않아요.</p>
<p>글씨 크기와 수업 진도는 지금 쓰는 휴대폰(브라우저)에만 저장되고, 저희 서버로 보내지 않아요.</p>
<p>${GA ? '수업을 더 좋게 만들려고, ‘좋아요’를 누른 분에 한해 구글 애널리틱스로 방문 수와 많이 본 수업을 세요. ‘괜찮아요’를 누르면 아무것도 불러오지 않아요.' : '방문 통계 도구를 쓰지 않아요.'}</p>
${GA ? '<p><button type="button" class="btn" data-consent-reset>방문 통계 선택 다시 하기</button></p>' : ''}
<p>연습 화면은 실제 은행·앱이 아니에요. 비밀번호나 카드 번호를 넣지 마세요.</p>
</main>
${footer()}
</body>
</html>
`;
}

/** 국내 첫 화면(index.html)에 검색 등록 태그·보안 정책·자바스크립트 없이도 읽히는 과정 목록을 넣는다(앱이 뜨면 앱 화면으로 바뀐다) */
export function updateKoIndex() {
  const f = new URL('../index.html', import.meta.url);
  let html = readFileSync(f, 'utf8');
  const total = KO_COURSES.reduce((a, c) => a + c.chapters.reduce((b, ch) => b + ch.lessons.length, 0), 0);
  const seo = `<!-- seo:start (build-ko.mjs가 만듦) -->\n${koSeoMeta()}<!-- seo:end -->`;
  html = html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->|(?=<meta name="theme-color")/, `${seo}\n`).replace(/\n\n<meta name="theme-color"/, '\n<meta name="theme-color"');
  html = html.replace(/(<meta http-equiv="Content-Security-Policy" content=")([^"]+)(")/, (m, a, c, b) => a + koCsp(c.replace(/ https:\/\/[^ ;]+/g, '').replace("connect-src 'self'", "connect-src 'none'")) + b);
  const ssr = `<div id="app"><!-- ssr:start -->
<div class="ssr"><h1>DigiStep365 어르신 무료 휴대폰 교실</h1>
<p>갤럭시 사용법부터 전화 사기 예방까지, 수업 ${total}개를 그림을 보며 한 단계씩 따라 해요.</p>
<ul>${KO_COURSES.map((c) => `<li><a href="/learn/${c.key}/">${esc(c.title)}</a> — ${esc(c.desc)} (수업 ${c.chapters.reduce((a, ch) => a + ch.lessons.length, 0)}개)</li>`).join('')}</ul>
<noscript><p>연습 화면은 자바스크립트를 켜야 볼 수 있어요. 위 과정을 누르면 수업을 글과 그림으로 볼 수 있어요.</p></noscript></div>
<!-- ssr:end --></div>`;
  html = html.replace(/<div id="app">(?:<!-- ssr:start -->[\s\S]*?<!-- ssr:end -->|<noscript>[\s\S]*?<\/noscript>)<\/div>/, ssr);
  html = html.replace(/\n?<!-- consent:start -->[\s\S]*?<!-- consent:end -->/, '').replace('</body>', `${GA ? `<!-- consent:start -->\n${koConsent()}\n<!-- consent:end -->\n` : ''}</body>`);
  writeFileSync(f, html);
}

/**
 * 국내 정적 페이지를 모두 만든다.
 * @param {{version:string, alternatesFor:(id:string)=>Record<string,string>}} opt  alternatesFor: 갤럭시 수업의 해외 언어 주소
 * @returns {string[]} 만든 페이지 주소(사이트맵용)
 */
export function buildKo({ version, alternatesFor }) {
  VERSION_REF.v = version;
  setTranslator(null);
  const root = new URL('../learn/', import.meta.url);
  rmSync(root, { recursive: true, force: true });
  const out = (p, html) => { const f = new URL(`..${p}index.html`, import.meta.url); mkdirSync(new URL('.', f), { recursive: true }); writeFileSync(f, html); };
  const paths = [];
  out('/learn/', hubPage()); paths.push({ path: '/learn/' });
  out('/privacy/', privacyPage());
  updateKoIndex();
  for (const course of KO_COURSES) {
    out(`/learn/${course.key}/`, coursePage(course)); paths.push({ path: `/learn/${course.key}/` });
    for (const ch of course.chapters) {
      for (const l of ch.lessons) {
        const alts = course.key === 'galaxy' ? alternatesFor(l.id) : {};
        const html = lessonPage(course, ch, l, ch.lessons, alts);
        if (HANGUL.test(l.title)) { out(koLessonPath(course.key, l.id), html); paths.push({ path: koLessonPath(course.key, l.id), alts }); }
      }
    }
  }
  return paths;
}
