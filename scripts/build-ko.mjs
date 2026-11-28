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
import { renderKakao } from '../assets/kakao-screens.js';
import { SITE_URL, BRAND_TAGLINE, LANGUAGES } from '../i18n/languages.js';
import { siteFooter, CONTACT_EMAIL, SITE_HOME, TERMS_DATE } from '../i18n/footer.js';
import { TOPIC, DESC_TAIL, COURSE_SEO, HUB_SEO, HOME_SEO } from '../i18n/ko-seo.js';
import { metaOf } from '../data/galaxy/meta.js';
import { kakaoCourse, DISCLAIMER as KAKAO_DISCLAIMER } from './build-kakaotalk.mjs';
import { iphoneCourse, landingMain, lessonMain, lessonDesc as ipLessonDesc, IP_TEXT } from './build-iphone.mjs';
import { SITE_CONFIG } from '../i18n/site-config.js';

const GA = SITE_CONFIG.ga4Id;
const GTM = SITE_CONFIG.gtmId;
const AN = Boolean(GA || GTM); // 방문 통계(GA4 또는 GTM) 켜짐
const GSC = SITE_CONFIG.searchConsole;
const NAVER = SITE_CONFIG.naverVerification;
/** 국내 페이지 보안 정책: 분석 ID가 있을 때만 구글 주소를 연다 */
export const koCsp = (base) => base
  .replace("img-src 'self' data:", `img-src 'self' data:${AN ? ' https://www.google-analytics.com https://www.googletagmanager.com' : ''}`)
  .replace("script-src 'self'", `script-src 'self'${AN ? ' https://www.googletagmanager.com' : ''}`)
  .replace(/connect-src '[a-z]+'/, (m) => (AN ? "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com" : m));
/** 검색 등록·분석용 머리 태그(값이 없으면 빈 문자열) */
/** GTM은 머리에 바로 넣는다(동의 모드: 동의 전엔 쿠키 없이) — 구글 태그 확인 도구가 찾을 수 있게 */
const gtmHead = () => (GTM ? `<script src="/assets/gtm-head.js?v=${VERSION_REF.v}"></script>\n<script async src="https://www.googletagmanager.com/gtm.js?id=${esc(GTM)}"></script>\n` : '');
export const koSeoMeta = () => `${gtmHead()}${GSC ? `<meta name="google-site-verification" content="${esc(GSC)}">\n` : ''}${NAVER ? `<meta name="naver-site-verification" content="${esc(NAVER)}">\n` : ''}${SITE_CONFIG.bingVerification ? `<meta name="msvalidate.01" content="${esc(SITE_CONFIG.bingVerification)}">\n` : ''}${GTM ? `<meta name="gtm-id" content="${esc(GTM)}">\n` : GA ? `<meta name="ga4-id" content="${esc(GA)}">\n` : ''}`;
/** 방문 통계 동의 상자(분석 ID가 있을 때만) */
export const koConsent = () => (AN ? `<div class="consent" data-consent hidden role="region" aria-label="방문 통계 동의"><p>수업을 더 좋게 만들려고 방문 통계 쿠키(구글 애널리틱스)를 써도 될까요? 거절해도 쿠키 없이 대략적인 방문 수만 세요. 회원 정보나 개인 정보는 모으지 않아요. <a href="/privacy/">자세히</a></p><div><button type="button" class="btn btn--primary" data-consent-yes>좋아요</button><button type="button" class="btn" data-consent-no>괜찮아요</button></div></div>
<script src="/assets/analytics.js?v=${VERSION_REF.v}" defer></script>` : '');

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const two = (n) => String(n).padStart(2, '0');
const HANGUL = /[가-힣]/;

/** 과정 목록: 홈 카테고리 순서. key = 국내 앱 주소(#/<key>) */
// 카카오톡 사용법: 실제 화면·검수를 마친 ‘공개’ 수업만 정적 페이지·사이트맵에 넣는다(없으면 과정 자체를 뺀다)
const KAKAO = kakaoCourse({ onlyPublic: true });
const COURSE_DATA = { galaxy: { CHAPTERS: GALAXY }, kakaotalk: KAKAO, scam: SCAM, digital: DIGITAL, ai: AI, creative: CREATIVE, career: CAREER };
// 아이폰 사용법은 별도 자료(build-iphone.mjs)로 만들므로 여기서는 뺀다
export const KO_COURSES = CATEGORIES.filter((c) => c.href.startsWith('#/')).map((c) => {
  const key = c.href.replace('#/', '');
  return { key, title: c.title, desc: c.desc, chapters: COURSE_DATA[key].CHAPTERS, lead: COURSE_DATA[key].COURSE?.lead ?? '' };
}).filter((c) => c.chapters.length);

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
/** 문제 해결 수업(‘~할 때’)은 ‘해결 방법’으로 */
const galaxyHow = (t) => (/때$/.test(t.trim()) ? `${t.trim()} 해결 방법` : howTo(t));
/** 목차 주제 검색어(갤럭시 제외) — 수업 제목에 이미 들어 있으면 붙이지 않는다 */
const topicOf = (course, ch) => TOPIC[course.key]?.[ch.num] ?? '';
const coreWord = (topic) => topic.split(/[ ·(]/)[0];
function lessonTitle(course, lesson, ch) {
  if (course.key === 'galaxy') return `갤럭시 ${galaxyHow(lesson.title)} — 그림으로 쉽게 | DigiStep365`;
  if (course.key === 'kakaotalk') return `${/^카카오/.test(lesson.title) ? '' : '카카오톡 '}${galaxyHow(lesson.title)} — 그림으로 쉽게 | DigiStep365`;
  const topic = topicOf(course, ch);
  if (!topic || lesson.title.includes(coreWord(topic))) return `${lesson.title} — ${course.title} | DigiStep365`;
  return `${topic}: ${lesson.title} | DigiStep365`;
}
/** 기종·One UI 검색어는 실제로 기종 제한이 있는 수업에만 */
function supportNote(lesson) {
  const s = metaOf(lesson.id)?.support;
  if (!s) return '';
  if (s.minOneUI) return ` One UI ${s.minOneUI} 이상 갤럭시에서 쓸 수 있어요.`;
  if (s.only?.every((m) => m.endsWith('u'))) return ' 갤럭시 S 울트라(Ultra) 기종에서 쓸 수 있어요.';
  if (s.onlyText) return ` ${s.onlyText.replace('설명서 기준 ', '')}해요.`;
  return '';
}
function lessonDesc(course, lesson, ch) {
  const words = (lesson.q ?? []).filter((w) => w !== lesson.title && !lesson.title.includes(w)).slice(0, 3);
  const n = lesson.cards.length;
  const subject = `${lesson.title}${josa(lesson.title)}`;
  const kakao = /카카오톡|카톡/.test(`${lesson.title} ${ch.title}`) ? '카카오톡 사용법 — ' : '';
  const base = course.key === 'kakaotalk'
    ? `카카오톡 사용법 — 갤럭시에서 ${/때$/.test(lesson.title) ? `${lesson.title} 해결하는 방법을` : subject} ${n}단계 그림으로 따라 해요.`
    : course.key === 'galaxy'
    ? `${kakao}갤럭시 스마트폰에서 ${/때$/.test(lesson.title) ? `${lesson.title} 해결하는 방법을` : subject} ${n}단계 그림으로 따라 해요.`
    : `${topicOf(course, ch) && !lesson.title.includes(coreWord(topicOf(course, ch))) ? `${topicOf(course, ch)} — ` : ''}${subject} ${n}단계 그림으로 따라 해요.`;
  const more = words.length ? ` ${words.join('·')}도 함께 알려 드려요.` : '';
  let out = `${base}${supportNote(lesson)}${more} ${DESC_TAIL[course.key]}`;
  if (out.length < 80) out += ` 어르신·초보를 위한 무료 ${course.title} 수업이에요.`;
  return out.length <= 158 ? out : `${base}${supportNote(lesson)} ${DESC_TAIL[course.key]}`.slice(0, 158);
}
/** 받침에 맞춰 ‘을/를’ */
function josa(word) {
  const ch = word.trim().slice(-1);
  const code = ch.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return '을(를)';
  return code % 28 ? '을' : '를';
}

function head({ title, desc, path, crumbs, alternates, ld: extra, index = true }) {
  const url = `${SITE_URL}${path}`;
  const crumbLd = crumbs && { '@type': 'BreadcrumbList', itemListElement: crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` })) };
  const nodes = [crumbLd, ...[extra ?? []].flat()].filter(Boolean);
  const ld = nodes.length ? { '@context': 'https://schema.org', '@graph': nodes } : null;
  const alts = alternates ?? {};
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="speech-lang" content="ko-KR">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${koCsp("default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'")}">
${koSeoMeta()}${index ? '' : '<meta name="robots" content="noindex, follow">\n'}<title>${esc(title)}</title>
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
<link rel="stylesheet" href="/assets/footer.css?v=${VERSION_REF.v}">
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` : ''}<script src="/assets/global.js?v=${VERSION_REF.v}" defer></script>
<script src="/assets/share.js?v=${VERSION_REF.v}" defer></script>
</head>`;
}
const VERSION_REF = { v: '' };

const header = () => `<header class="top">
  <a class="brand" href="/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${BRAND_TAGLINE}</small></span></a>
  <div class="size" role="group" aria-label="글씨 크기">${[['normal', '보통'], ['large', '크게'], ['xlarge', '아주 크게']].map(([k, v]) => `<button type="button" class="size--${k}" data-size="${k}" aria-pressed="${k === 'normal'}" aria-label="${v}" title="${v}"><span aria-hidden="true">가</span></button>`).join('')}</div>
</header>`;
/** 하단(국내): 브랜드·공유 아이콘·안내 문구·문의·정책·언어·저작권 */
export const koFooter = ({ extra = '' } = {}) => siteFooter({
  lang: 'ko', extra, privacyHref: '/privacy/', termsHref: '/terms/', shareUrl: SITE_HOME,
  langLinks: LANGUAGES.filter((x) => x.code !== 'ko').map((x) => `<a href="/${x.code.toLowerCase()}/" hreflang="${x.code}" lang="${x.code}">${esc(x.name)}</a>`).join(' · '),
});
const footer = (course) => `${course === 'kakaotalk' ? koFooter({ extra: `<p class="draft brand-note">${esc(KAKAO_DISCLAIMER)}</p>` }) : koFooter()}
${koConsent()}`;
const crumbNav = (crumbs) => `<nav class="crumbs" aria-label="현재 위치"><ol>${crumbs.map(([n, p], i) => i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;

function picture(card) {
  // 실제 화면 이미지(카카오톡): 그림은 그대로, 누를 곳에만 빨간 원
  if (card?.photo) {
    const t = card.photo.target;
    return `<figure class="pic pic--photo" role="img" aria-label="${esc(card.photo.alt ?? card.alt)}"><img src="${esc(card.photo.src)}" alt="" ${card.photo.w ? `width="${card.photo.w}" height="${card.photo.h}"` : ''} loading="lazy">${t ? `<svg class="pic__ring" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="${t.x + t.w / 2}" cy="${t.y + t.h / 2}" rx="${t.w / 2}" ry="${t.h / 2}" fill="none" stroke="#d7263d" stroke-width="6" vector-effect="non-scaling-stroke"/></svg>` : ''}</figure>`;
  }
  if (card?.k) {
    const kp = renderKakao(card.k, card.target, card.action);
    return `<figure class="pic" role="img" aria-label="${esc(card.alt ?? '카카오톡 화면 그림')}">${kp.svg.replace('aria-hidden="true"', 'aria-hidden="true" class="pic__svg"')}</figure>`;
  }
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
  const desc = lessonDesc(course, lesson, ch);
  const topic = course.key === 'galaxy' ? '갤럭시 스마트폰 사용법' : course.key === 'kakaotalk' ? '카카오톡 사용법' : topicOf(course, ch) || course.title;
  const ld = { '@type': 'LearningResource', name: course.key === 'galaxy' ? `갤럭시 ${lesson.title}` : lesson.title, description: desc, url: `${SITE_URL}${path}`, inLanguage: 'ko', isAccessibleForFree: true, educationalLevel: '초급', learningResourceType: '단계별 그림 안내', teaches: topic, audience: { '@type': 'Audience', audienceType: '스마트폰 초보·어르신' }, isPartOf: { '@type': 'Course', name: course.title, url: `${SITE_URL}/learn/${course.key}/` }, provider: { '@type': 'Organization', name: 'DigiStep365', url: `${SITE_URL}/` } };
  return `${head({ title: lessonTitle(course, lesson, ch), desc, path, crumbs, alternates, ld })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>${esc(course.key === 'galaxy' ? `갤럭시 ${lesson.title}` : lesson.title)}</h1>
<p class="lead">${esc(topic)} · ${esc(`${two(ch.num)} ${chapterTitle(ch)}`)} · ${lesson.cards.length}단계 · 그림을 보며 한 단계씩 따라 하세요.</p>
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
<p class="based">${course.key === 'kakaotalk' ? `기준: ${esc(lesson.model)} · ${esc(lesson.software)}. 카카오톡 업데이트에 따라 메뉴 위치가 바뀔 수 있어요.${lesson.check ? ` ${esc(lesson.check)}` : ''}` : course.key === 'galaxy' ? `기준: ${esc(BASE.model)} · ${esc(BASE.software)}. 기종과 버전에 따라 메뉴 이름이 조금 다를 수 있어요.` : '연습 화면은 실제 앱과 조금 다를 수 있어요. 돈이 나가거나 비밀번호가 필요한 일은 연습 화면에서만 해요.'}</p>
<a class="btn btn--primary btn--block" href="${appLesson(lesson)}">연습 화면으로 따라 하기</a>
${next ? `<p class="finish">다음 수업: <a href="${koLessonPath(course.key, next.id)}">${esc(next.title)}</a></p>` : ''}
<section class="popular"><h2>같은 목차의 수업</h2><ul class="lessons">${siblings.filter((x) => x.id !== lesson.id).map((x) => `<li><a href="${koLessonPath(course.key, x.id)}">${esc(x.title)}<span>${x.cards.length}단계</span></a></li>`).join('')}</ul></section>
</main>
${footer(course.key)}
</body>
</html>
`;
}

function coursePage(course) {
  const path = `/learn/${course.key}/`;
  const crumbs = [['처음 화면', '/'], ['모든 수업', '/learn/'], [course.title, path]];
  const total = course.chapters.reduce((a, c) => a + c.lessons.length, 0);
  const S = COURSE_SEO[course.key];
  const title = S.title(total);
  const desc = S.desc(total);
  const ld = { '@type': 'Course', name: course.title, description: desc, url: `${SITE_URL}${path}`, inLanguage: 'ko', isAccessibleForFree: true, educationalLevel: '초급', audience: { '@type': 'Audience', audienceType: '스마트폰 초보·어르신' }, provider: { '@type': 'Organization', name: 'DigiStep365', url: `${SITE_URL}/` }, numberOfLessons: total, hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT10M' }, offers: { '@type': 'Offer', price: 0, priceCurrency: 'KRW', category: 'Free' } };
  const groups = course.key === 'galaxy' ? GROUPS : [{ id: null, title: '' }];
  return `${head({ title, desc, path, crumbs, alternates: course.key === 'galaxy' ? allAlts('galaxy/') : null, ld })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>${esc(course.title)}</h1>
<p class="lead">${esc(course.lead || course.desc)}</p>
<a class="btn btn--primary btn--block" href="/#/${course.key}">연습 화면으로 시작하기</a>
<section class="seo-intro"><h2>${esc(S.h2)}</h2><p>${esc(S.intro(total, course.chapters.length))}</p></section>
${groups.map((g) => `${g.title ? `<section class="group"><h2>${esc(g.title)}</h2>` : '<section class="group">'}
${course.chapters.filter((ch) => !g.id || ch.group === g.id).map((ch) => `<section class="cat" id="c${two(ch.num)}">
  <h3><span class="num">${two(ch.num)}</span> ${esc(chapterTitle(ch))}</h3>
  ${ch.desc ? `<p class="cat__desc">${esc(ch.desc)}</p>` : ''}
  <ul class="lessons">${ch.lessons.map((l) => `<li><a href="${koLessonPath(course.key, l.id)}">${esc(l.title)}<span>${l.cards.length}단계</span></a></li>`).join('')}</ul>
</section>`).join('\n')}
</section>`).join('\n')}
</main>
${footer(course.key)}
</body>
</html>
`;
}

function hubPage() {
  const path = '/learn/';
  const crumbs = [['처음 화면', '/'], ['모든 수업', path]];
  const total = KO_COURSES.reduce((a, c) => a + c.chapters.reduce((b, ch) => b + ch.lessons.length, 0), 0);
  const ld = { '@type': 'ItemList', name: '어르신 무료 스마트폰 교육 과정', itemListElement: KO_COURSES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/learn/${c.key}/`, name: c.title })) };
  return `${head({ title: HUB_SEO.title(total), desc: HUB_SEO.desc(total), path, crumbs, ld })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>모든 수업 한눈에</h1>
<p class="lead">수업 ${total}개를 글과 그림으로 볼 수 있어요. 따라 하기는 ‘연습 화면’에서 한 단계씩 해요.</p>
<a class="btn btn--primary btn--block" href="/">연습 화면 처음으로</a>
<section class="seo-intro"><h2>${esc(HUB_SEO.h2)}</h2><p>${esc(HUB_SEO.intro)}</p></section>
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

/** 같은 내용의 19개 언어 주소(hreflang 상호 연결용) */
const allAlts = (suffix) => Object.fromEntries(LANGUAGES.filter((x) => x.code !== 'ko').map((x) => [x.code, `/${x.code.toLowerCase()}/${suffix}`]));

/** 정책 페이지 공통 틀 */
function policyPage({ path, title, h1, desc, sections, en }) {
  const crumbs = [['처음 화면', '/'], [h1, path]];
  return `${head({ title: `${title} | DigiStep365`, desc, path, crumbs, alternates: allAlts(en.replace(/^\/en\//, '')) })}
<body>
${header()}
<main class="page policy" id="main">
${crumbNav(crumbs)}
<h1>${h1}</h1>
${sections.map(([h, body]) => `<h2>${h}</h2>\n${body}`).join('\n')}
<p class="based">시행일: ${TERMS_DATE}</p>
</main>
${footer()}
</body>
</html>
`;
}
const mail = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

function privacyPage() {
  const analytics = GTM
    ? '<p>수업을 더 좋게 만들기 위해 구글 태그 관리자(Google Tag Manager)와 구글 애널리틱스(Google Analytics 4)로 방문 통계를 냅니다.</p><ul><li><b>‘좋아요’를 누른 경우:</b> 방문 통계 쿠키(무작위 식별값), 본 페이지 주소와 제목, 들어온 경로, 기기·브라우저 종류, 화면 크기, 대략적인 지역(국가·도시 수준)</li><li><b>‘괜찮아요’를 누르거나 고르지 않은 경우:</b> 쿠키를 쓰지 않고, 쿠키 없는 집계 신호(페이지 주소, 기기 종류 등)만 구글에 보내져 대략적인 방문 수를 셉니다.</li><li>광고용 저장(ad_storage)·광고 개인화는 항상 사용하지 않습니다.</li></ul>'
    : GA ? '<p>‘좋아요’를 누른 분에 한해 구글 애널리틱스로 방문 수와 많이 본 수업을 셉니다. ‘괜찮아요’를 누르면 아무것도 불러오지 않습니다.</p>' : '<p>현재 방문 통계 도구를 쓰지 않습니다.</p>';
  return policyPage({
    path: '/privacy/', title: '개인정보처리방침', h1: '개인정보처리방침', en: '/en/privacy/',
    desc: 'DigiStep365 개인정보처리방침: 회원 가입 없이 이용하며, 수업 진도는 내 브라우저에만 저장됩니다. 방문 통계·문의 메일 처리, 위탁, 이용자 권리와 연락처를 안내합니다.',
    sections: [
      ['1. 기본 원칙', '<p>DigiStep365(이하 ‘사이트’)는 회원 가입 없이 이용하는 무료 교육 사이트입니다. 이름, 전화번호, 주민등록번호 같은 개인정보를 입력받지 않으며, 「개인정보 보호법」 등 관련 법령을 지킵니다.</p>'],
      ['2. 처리하는 정보와 목적', `<p><b>① 내 기기(브라우저)에만 저장되는 정보</b> — 글씨 크기, 수업 진도, 고른 휴대폰 기종·버전, 방문 통계 동의 여부. 사이트를 편하게 쓰기 위한 것으로, 이 정보는 운영자에게 전송되지 않습니다.</p>
<p><b>② 방문 통계</b></p>${analytics}
<p><b>③ 문의 메일</b> — 이메일로 문의하시면 보내신 이메일 주소와 내용을 답변하는 데에만 씁니다.</p>
<p><b>④ 접속 기록</b> — 웹사이트를 전송하는 호스팅 서버(Netlify)가 보안과 안정적인 운영을 위해 IP 주소, 접속 시각, 요청한 주소 같은 기본 접속 기록을 자동으로 남길 수 있습니다.</p>`],
      ['3. 보유 및 파기', '<ul><li>기기에 저장된 정보: 브라우저의 ‘사이트 데이터 삭제’로 언제든 바로 지울 수 있습니다.</li><li>방문 통계: 구글 애널리틱스의 데이터 보존 설정(최대 14개월)에 따라 자동 삭제됩니다.</li><li>문의 메일: 답변을 마친 뒤 1년 이내에 삭제합니다(법령상 보관 의무가 있으면 그 기간).</li><li>접속 기록: 호스팅 업체의 보관 정책에 따라 자동 삭제됩니다.</li></ul>'],
      ['4. 제3자 제공', '<p>개인정보를 다른 사람이나 회사에 제공하지 않습니다. 법령에 따라 요구되는 경우는 예외입니다.</p>'],
      ['5. 처리 위탁 및 국외 이전', '<p>사이트 운영을 위해 아래 업체의 서비스를 씁니다. 각 업체는 미국 등 국외에서 정보를 처리할 수 있습니다.</p><ul><li><b>Google LLC</b> — 방문 통계(구글 태그 관리자·구글 애널리틱스). 방문할 때 인터넷으로 전송.</li><li><b>Netlify, Inc.</b> — 웹사이트 호스팅·전송(접속 기록). 방문할 때 인터넷으로 전송.</li></ul><p>방문 통계를 원하지 않으면 동의 상자에서 ‘괜찮아요’를 누르거나 아래 ‘선택 다시 하기’로 바꿀 수 있습니다.</p>'],
      ['6. 공유 버튼', '<p>하단의 카카오톡·페이스북·WhatsApp 버튼은 누를 때만 해당 서비스(카카오, Meta, WhatsApp)를 엽니다. 사이트가 그 서비스에 정보를 보내지 않으며, 열린 뒤에는 각 서비스의 개인정보처리방침이 적용됩니다. ‘주소 복사’, ‘QR코드’, ‘공유하기’는 내 기기 안에서만 동작합니다.</p>'],
      ['7. 쿠키 설정과 거부', `<p>처음 방문하면 방문 통계 동의 상자가 나옵니다. 언제든 선택을 바꿀 수 있고, 브라우저 설정에서 쿠키를 지우거나 막을 수도 있습니다(막아도 수업은 모두 볼 수 있습니다).</p>${AN ? '<p><button type="button" class="btn" data-consent-reset>방문 통계 선택 다시 하기</button></p>' : ''}`],
      ['8. 이용자의 권리', `<p>개인정보의 열람·정정·삭제·처리정지를 요구할 수 있습니다. ${mail}로 알려 주시면 지체 없이 처리합니다.</p>`],
      ['9. 안전성 확보 조치', '<p>필요한 최소한의 정보만 다루고, 모든 접속을 암호화(HTTPS)하며, 외부 스크립트를 제한하는 보안 정책(CSP)을 적용합니다.</p>'],
      ['10. 개인정보 보호책임자 및 문의', `<p>개인정보 보호책임자: DigiStep365 운영자 · 이메일 ${mail}</p><p>개인정보 침해에 대한 신고·상담은 개인정보침해신고센터(국번 없이 118, privacy.kisa.or.kr), 개인정보분쟁조정위원회(1833-6972, kopico.go.kr)에도 하실 수 있습니다.</p>`],
      ['11. 연습 화면 이용 시 주의', '<p>연습 화면은 실제 은행·앱이 아닌 그림입니다. 진짜 비밀번호, 카드 번호, 주민등록번호를 절대 넣지 마세요.</p>'],
      ['12. 변경 안내', '<p>이 방침이 바뀌면 이 페이지에 시행일과 함께 알립니다.</p>'],
    ],
  });
}

function termsPage() {
  return policyPage({
    path: '/terms/', title: '이용약관', h1: '이용약관', en: '/en/terms/',
    desc: 'DigiStep365 이용약관: 무료 독립 디지털 교육 사이트의 이용 조건, 연습 화면 주의사항, 콘텐츠 권리와 문의 방법을 안내합니다.',
    sections: [
      ['제1조 (목적)', '<p>이 약관은 DigiStep365(이하 ‘사이트’)가 제공하는 무료 디지털 교육 서비스의 이용 조건을 정합니다.</p>'],
      ['제2조 (서비스 내용)', '<p>사이트는 휴대폰과 생활 디지털 서비스 사용법을 그림·글·연습 화면으로 알려 드립니다. 회원 가입 없이 누구나 무료로 이용할 수 있습니다.</p>'],
      ['제3조 (공식 서비스가 아님)', '<p>사이트는 독립적인 교육 플랫폼이며 삼성전자 및 수업에 나오는 제품·서비스 회사의 공식 서비스가 아니고, 그 회사들과 제휴 관계가 없습니다. Galaxy 등 상표는 각 소유자의 것입니다. 기종과 소프트웨어 버전에 따라 메뉴와 사용 방법이 다를 수 있으니 중요한 설정은 공식 설명서나 고객센터로 확인해 주세요.</p>'],
      ['제4조 (연습 화면)', '<p>연습 화면은 실제 앱을 흉내 낸 그림입니다. 진짜 비밀번호, 카드 번호, 주민등록번호, 인증번호를 절대 넣지 마세요.</p>'],
      ['제5조 (이용자의 책임과 판단)', '<p>사이트는 내용이 정확하도록 노력하지만, 모든 내용이 완전하거나 항상 최신임을 보장하지는 않습니다. 돈·금융·보안과 관련된 일은 반드시 해당 기관이나 회사에 직접 확인해 주세요. 사이트는 법령이 허용하는 범위에서, 수업 내용을 따라 하다 생긴 손해에 대해 책임지지 않습니다. 다만 사이트의 고의 또는 중대한 과실로 인한 손해는 예외입니다.</p>'],
      ['제6조 (콘텐츠의 권리)', '<p>사이트의 글, 그림, 디자인의 저작권은 DigiStep365에 있습니다. 링크 공유와 개인 학습·무료 교육용 인쇄는 자유롭게 하실 수 있습니다. 영리 목적으로 복제·배포하려면 미리 허락을 받아 주세요.</p>'],
      ['제7조 (금지 행위)', '<p>사이트 운영을 방해하는 행위(자동화 도구로 과도하게 접속, 보안 우회 등)와 사이트 내용을 사칭·변조해 다른 사람을 속이는 행위를 해서는 안 됩니다.</p>'],
      ['제8조 (서비스 변경·중단)', '<p>사이트는 내용을 고치거나 수업을 추가·삭제할 수 있으며, 점검이나 불가피한 사유로 잠시 중단될 수 있습니다.</p>'],
      ['제9조 (약관 변경과 문의)', `<p>약관이 바뀌면 이 페이지에 시행일과 함께 알립니다. 문의: ${mail}</p>`],
    ],
  });
}

/* ---------- 아이폰 사용법(국내·해외 공통): 과정 첫 화면 + 공개 수업 ---------- */
const IP_UI = { stepOf: (i, n) => `${i}단계 / ${n}`, restart: '처음부터 다시 보기', all: '전체 단계 보기', finished: '수업을 마쳤어요!', nextLesson: '다음 수업:', sources: '기준과 참고 자료', reviewed: '마지막 확인', prev: '이전', listen: '듣기', next: '다음', done: '완료', stepsNav: '단계 이동' };
const ipFooter = () => `${koFooter({ extra: `<p class="draft brand-note">${esc(IP_TEXT.ko.disclaimer)}</p>` })}\n${koConsent()}`;
function ipKoLanding(ip, enOpen) {
  const path = '/learn/iphone/';
  const crumbs = [['처음 화면', '/'], ['모든 수업', '/learn/'], [ip.text.title, path]];
  const alternates = ip.count && enOpen('') ? { en: '/en/iphone/' } : {};
  const desc = `${ip.text.title}: ${ip.text.sub}. 아이폰 전원 켜기, 전화·문자, 사진, 글자 크게, Siri까지 ${ip.total}가지 사용법을 실제 화면으로 한 단계씩 배워요.`.slice(0, 158);
  return `${head({ title: `${ip.text.title} — ${ip.text.sub} | DigiStep365`, desc, path, crumbs, alternates, index: ip.count > 0 })}
<body>
${header()}
<main class="page" id="main">
${landingMain(ip, { href: (l) => `/learn/iphone/${l.slug}/`, crumbs: crumbNav(crumbs) })}
</main>
${ipFooter()}
</body>
</html>
`;
}
function ipKoLesson(ip, ch, item, enOpen) {
  const path = `/learn/iphone/${item.slug}/`;
  const crumbs = [['처음 화면', '/'], ['모든 수업', '/learn/'], [ip.text.title, '/learn/iphone/'], [ch.title, `/learn/iphone/#c${two(ch.num)}`], [item.title, path]];
  const open = ch.lessons.filter((x) => x.open); const nx = open[open.findIndex((x) => x.id === item.id) + 1];
  const alternates = enOpen(item.slug) ? { en: `/en/iphone/${item.slug}/` } : {};
  const desc = ipLessonDesc(ip, item);
  const ld = { '@type': 'LearningResource', name: `아이폰 ${item.title}`, description: desc, url: `${SITE_URL}${path}`, inLanguage: 'ko', isAccessibleForFree: true, learningResourceType: '단계별 실제 화면 안내', teaches: '아이폰 사용법', provider: { '@type': 'Organization', name: 'DigiStep365', url: `${SITE_URL}/` } };
  return `${head({ title: `아이폰 ${item.title} — 실제 화면으로 쉽게 | DigiStep365`, desc, path, crumbs, alternates, ld })}
<body>
${header()}
<main class="page" id="main">
${lessonMain(ip, item, { crumbs: crumbNav(crumbs), ui: IP_UI, next: nx ? { href: `/learn/iphone/${nx.slug}/`, title: nx.title } : null })}
${ipFooter()}
</body>
</html>
`;
}

/** 국내 첫 화면(index.html)에 검색 등록 태그·보안 정책·자바스크립트 없이도 읽히는 과정 목록을 넣는다(앱이 뜨면 앱 화면으로 바뀐다) */
export function updateKoIndex() {
  const f = new URL('../index.html', import.meta.url);
  let html = readFileSync(f, 'utf8');
  const total = KO_COURSES.reduce((a, c) => a + c.chapters.reduce((b, ch) => b + ch.lessons.length, 0), 0);
  const homeLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'DigiStep365', alternateName: ['디지스텝365', '도전, 디지털세상'], url: `${SITE_URL}/`, inLanguage: 'ko', description: HOME_SEO.desc, publisher: { '@id': `${SITE_URL}/#org` } },
    { '@type': 'EducationalOrganization', '@id': `${SITE_URL}/#org`, name: 'DigiStep365', url: `${SITE_URL}/`, logo: `${SITE_URL}/assets/icon-512.png`, slogan: '누구나 쉽게, 매일 한 걸음씩.', email: CONTACT_EMAIL, description: '어르신과 스마트폰 초보를 위한 무료 디지털 교육 플랫폼' },
    { '@type': 'ItemList', name: '교육 과정', itemListElement: KO_COURSES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/learn/${c.key}/`, name: c.title })) },
  ] };
  const seo = `<!-- seo:start (build-ko.mjs가 만듦) -->\n${koSeoMeta()}<script type="application/ld+json">${JSON.stringify(homeLd)}</script>\n<!-- seo:end -->`;
  // 첫 화면 hreflang: 한국어 + 19개 언어 첫 화면(서로 연결), x-default = 영어
  const homeAlts = [['ko', '/'], ...Object.entries(allAlts('')), ['x-default', '/en/']].map(([c, u]) => `<link rel="alternate" hreflang="${c}" href="${SITE_URL}${u}">`).join('\n');
  html = html.replace(/(<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n?)+/, `${homeAlts}\n`);
  // 검색 제목·설명(첫 화면)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(HOME_SEO.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(HOME_SEO.desc)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(HOME_SEO.ogTitle)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(HOME_SEO.ogDesc)}">`);
  html = html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->|(?=<meta name="theme-color")/, `${seo}\n`).replace(/\n\n<meta name="theme-color"/, '\n<meta name="theme-color"');
  html = html.replace(/(<meta http-equiv="Content-Security-Policy" content=")([^"]+)(")/, (m, a, c, b) => a + koCsp(c.replace(/ https:\/\/[^ ;]+/g, '').replace("connect-src 'self'", "connect-src 'none'")) + b);
  const ssr = `<div id="app"><!-- ssr:start -->
<div class="ssr"><h1>DigiStep365 어르신 무료 스마트폰 교육</h1>
<p>스마트폰 사용법을 처음 배우는 50대·60대·70대와 어르신을 위해 갤럭시 사용법, 카카오톡·키오스크, 챗GPT, 보이스피싱 예방까지 수업 ${total}개를 그림을 보며 한 단계씩 따라 해요.</p>
<h2>배울 수 있는 과정</h2>
<ul>${KO_COURSES.map((c) => `<li><a href="/learn/${c.key}/">${esc(c.title)}</a> — ${esc(c.desc)} (수업 ${c.chapters.reduce((a, ch) => a + ch.lessons.length, 0)}개)</li>`).join('')}<li><a href="/learn/iphone/">아이폰 사용법</a> — 처음부터 하나씩 쉽게 배우는 아이폰</li></ul>
<noscript><p>연습 화면은 자바스크립트를 켜야 볼 수 있어요. 위 과정을 누르면 수업을 글과 그림으로 볼 수 있어요.</p></noscript></div>
<!-- ssr:end --></div>`;
  html = html.replace(/<div id="app">(?:<!-- ssr:start -->[\s\S]*?<!-- ssr:end -->|<noscript>[\s\S]*?<\/noscript>)<\/div>/, ssr);
  // 하단(Footer)과 그 스타일·공유 스크립트
  const assets = `<!-- foot-assets:start -->\n<link rel="stylesheet" href="/assets/footer.css?v=${VERSION_REF.v}">\n<script src="/assets/share.js?v=${VERSION_REF.v}" defer></script>\n<!-- foot-assets:end -->`;
  html = /<!-- foot-assets:start -->/.test(html) ? html.replace(/<!-- foot-assets:start -->[\s\S]*?<!-- foot-assets:end -->/, assets) : html.replace('</head>', `${assets}\n</head>`);
  const foot = `<!-- foot:start -->\n${koFooter()}\n<!-- foot:end -->`;
  html = /<!-- foot:start -->/.test(html) ? html.replace(/<!-- foot:start -->[\s\S]*?<!-- foot:end -->/, foot) : html.replace(/(<p class="site-links">[\s\S]*?<\/p>)/, `$1\n${foot}`);
  html = html.replace(/\n?<!-- consent:start -->[\s\S]*?<!-- consent:end -->/, '').replace('</body>', `${AN ? `<!-- consent:start -->\n${koConsent()}\n<!-- consent:end -->\n` : ''}</body>`);
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
  out('/privacy/', privacyPage()); paths.push({ path: '/privacy/' });
  out('/terms/', termsPage()); paths.push({ path: '/terms/' });
  updateKoIndex();
  // 아이폰 사용법: 과정 첫 화면은 늘, 수업은 공개된 것만. 공개 수업이 없으면 첫 화면은 검색 제외(사이트맵에도 넣지 않음)
  const ip = { ...iphoneCourse('ko'), version };
  const ipEn = iphoneCourse('en');
  const enOpen = (slug) => (slug ? ipEn.chapters.some((c) => c.lessons.some((l) => l.slug === slug && l.open)) : ipEn.count > 0);
  out('/learn/iphone/', ipKoLanding(ip, enOpen)); if (ip.count) paths.push({ path: '/learn/iphone/', alts: enOpen('') ? { en: '/en/iphone/' } : {} });
  for (const ch of ip.chapters) for (const item of ch.lessons) if (item.open) { out(`/learn/iphone/${item.slug}/`, ipKoLesson(ip, ch, item, enOpen)); paths.push({ path: `/learn/iphone/${item.slug}/`, alts: enOpen(item.slug) ? { en: `/en/iphone/${item.slug}/` } : {} }); }
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
