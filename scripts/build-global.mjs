// Builds the global (DigiStep365) static pages for every language in LOCALES:
//   /<lang>/, /<lang>/galaxy/, /<lang>/galaxy/<slug>/, /<lang>/privacy/  +  /admin/, sitemap.xml, robots.txt
// Real URLs per page (not hash routes), hreflang links between languages that have the same lesson.
// Run: node scripts/build-global.mjs   (output is committed; Netlify keeps deploying the folder as is)
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { CHAPTERS } from '../data/galaxy/index.js';
import { metaOf } from '../data/galaxy/meta.js';
import { BASE } from '../data/galaxy/helpers.js';
import { SITE_URL, LANGUAGES, BRAND_TAGLINE } from '../i18n/languages.js';
import { SITE_CONFIG } from '../i18n/site-config.js';
import { renderScreen, setTranslator } from '../assets/screens.js';
import { existsSync } from 'node:fs';
import { deviceSection } from '../i18n/device-strings.js';
import { applyEdits } from '../i18n/edits.js';

/** Languages built here: every language in i18n/languages.js (except ko) that has a folder i18n/<code>/ with ui.js. en is x-default. */
const CODES = LANGUAGES.map((l) => l.code).filter((c) => c !== 'ko' && existsSync(new URL(`../i18n/${c}/ui.js`, import.meta.url)));
export const LOCALES = Object.fromEntries(await Promise.all(CODES.map(async (code) => {
  const imp = (f) => import(`../i18n/${code}/${f}.js`);
  const [ui, G, rv, terms] = await Promise.all([imp('ui'), imp('galaxy'), imp('review'), imp('screen-terms')]);
  const meta = LANGUAGES.find((l) => l.code === code);
  // 관리자 화면에서 고친 내용(i18n/<code>/edits.json)을 덮어쓴다
  const editsFile = new URL(`../i18n/${code}/edits.json`, import.meta.url);
  const raw = existsSync(editsFile) ? JSON.parse(readFileSync(editsFile, 'utf8')) : {};
  const ed = applyEdits(G, rv.REVIEWED, raw);
  return [code, { code, name: meta.name, og: meta.og, speech: meta.speech, dir: meta.dir, wrap: meta.wrap, UI: ui.UI, G: ed.G, REVIEWED: ed.REVIEWED, REPO_REVIEWED: rv.REVIEWED, EDITED: new Set(ed.edited), tr: terms.tr }];
})));
const enG = LOCALES.en.G;
const DEFAULT = 'en';

const HANGUL = /[가-힣ㄱ-ㆎ]/;
const VERSION = readFileSync(new URL('../assets/version.js', import.meta.url), 'utf8').match(/'([\d.]+)'/)[1];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const two = (n) => String(n).padStart(2, '0');
const GA = SITE_CONFIG.ga4Id.trim();

/** Lessons of the global site: Korean lessons minus Korea-only ones, plus global-only lessons (English master list). */
function masterLessons() {
  const extra = enG.EXTRA ?? [];
  return CHAPTERS.map((ch) => ({
    ch,
    lessons: [
      ...ch.lessons.filter((l) => metaOf(l.id).region !== 'KR'),
      ...extra.filter((x) => x.chapter === ch.num).map((x) => ({ id: x.id, cards: [], src: x.src, extra: true })),
    ],
  }));
}

/** For one language: every global lesson with its title [slug, title] and steps (if translated). */
export function globalLessons(lang = DEFAULT) {
  const { G } = LOCALES[lang];
  return masterLessons().map(({ ch, lessons }) => ({
    ch,
    lessons: lessons.map((l) => ({ l, t: G.TITLES[l.id], en: G.LESSONS[l.id] })),
  }));
}

/** Paths of a lesson in every language that has it (for hreflang). */
function lessonAlternates(id) {
  const out = {};
  for (const [code, L] of Object.entries(LOCALES)) if (L.G.LESSONS[id] && L.G.TITLES[id]) out[code] = `/${code}/galaxy/${L.G.TITLES[id][0]}/`;
  return out;
}
const allLangs = (suffix) => Object.fromEntries(Object.keys(LOCALES).map((c) => [c, `/${c}/${suffix}`]));

/* ---------- page parts (use the current language L) ---------- */
let L = LOCALES[DEFAULT];
const stats = {};

function picture(card) {
  const st = stats[L.code];
  st.steps++;
  if (!card || card.photo) return '';
  const pic = renderScreen(card.screen, card.target, card.action);
  const texts = [...pic.svg.matchAll(/>([^<>]+)</g)].map((m) => m[1]);
  if (texts.some((t) => HANGUL.test(t))) return ''; // never show a half-translated picture
  st.pictures++;
  const t = pic.target;
  const name = card.target && !HANGUL.test(L.tr(card.target)) ? L.tr(card.target) : '';
  const alt = L.UI.pictureAlt(Boolean(t), name);
  let svg = pic.svg;
  if (t && card.done === 'practice') {
    svg = svg.replace('</svg>', `<rect class="hit" data-hit x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="transparent"/></svg>`);
  }
  return `<figure class="pic${card.done === 'practice' && t ? ' pic--practice' : ''}" role="img" aria-label="${esc(alt)}">${svg.replace('aria-hidden="true"', 'aria-hidden="true" class="pic__svg"')}</figure>`;
}

function head({ title, desc, path, index, crumbs, alternates }) {
  const { UI } = L;
  const url = `${SITE_URL}${path}`;
  const ld = crumbs && {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` })),
  };
  const alts = alternates ?? { [L.code]: path };
  const xdef = alts[DEFAULT] ?? path;
  return `<!doctype html>
<html lang="${L.code}" dir="${LANGUAGES.find((x) => x.code === L.code)?.dir ?? 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="speech-lang" content="${L.speech ?? L.code}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:${GA ? ' https://www.google-analytics.com https://www.googletagmanager.com' : ''}; style-src 'self'; script-src 'self'${GA ? ' https://www.googletagmanager.com' : ''}; connect-src 'self'${GA ? ' https://*.google-analytics.com https://*.analytics.google.com' : ''}; base-uri 'none'; form-action 'none'">
${GA ? `<meta name="ga4-id" content="${esc(GA)}">\n` : ''}${SITE_CONFIG.searchConsole ? `<meta name="google-site-verification" content="${esc(SITE_CONFIG.searchConsole)}">\n` : ''}<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${index ? '' : '<meta name="robots" content="noindex, follow">\n'}<link rel="canonical" href="${url}">
${Object.entries(alts).map(([c, p]) => `<link rel="alternate" hreflang="${c}" href="${SITE_URL}${p}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}${xdef}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${UI.brand}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/icon-512.png">
<meta property="og:locale" content="${L.og}">
<link rel="icon" href="/assets/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/global.css?v=${VERSION}">
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` : ''}<script src="/assets/global.js?v=${VERSION}" defer></script>
${UI.devicePicker ? `<script type="module" src="/assets/global-device.js?v=${VERSION}"></script>\n` : ''}</head>`;
}

function header() {
  const { UI } = L;
  return `<header class="top">
  <a class="brand" href="/${L.code}/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${BRAND_TAGLINE}</small></span></a>
  <div class="size" role="group" aria-label="${UI.textSize}">${Object.entries(UI.sizes).map(([k, v]) => `<button type="button" data-size="${k}" aria-pressed="${k === 'normal'}">${v}</button>`).join('')}</div>
</header>`;
}

function footer(draft, alternates = {}) {
  const { UI } = L;
  const langs = LANGUAGES.filter((x) => x.code !== 'ko').map((x) => {
    if (x.code === L.code) return `<b>${esc(x.name)}</b>`;
    const p = alternates[x.code];
    return p ? `<a href="${p}" hreflang="${x.code}" lang="${x.code}">${esc(x.name)}</a>` : `<span lang="${x.code}">${esc(x.name)}</span>`;
  });
  return `<footer class="foot">
  ${draft ? `<p class="draft">${UI.draft}</p>` : ''}
  <p>${UI.disclaimer}</p>
  <p class="langs">${UI.languages}: ${langs.join(' · ')} · <a href="/" hreflang="ko" lang="ko">한국어</a></p>
  <p><a href="/${L.code}/privacy/">${UI.privacy}</a> · © ${UI.brand} · ${UI.slogan}</p>
</footer>
${GA ? `<div class="consent" data-consent hidden role="region" aria-label="${UI.consentLabel}"><p>${UI.consent}</p><div><button type="button" class="btn btn--primary" data-consent-yes>${UI.consentYes}</button><button type="button" class="btn" data-consent-no>${UI.consentNo}</button></div></div>` : ''}`;
}

const crumbNav = (crumbs) => `<nav class="crumbs" aria-label="${L.UI.breadcrumb}"><ol>${crumbs.map(([n, p], i) => i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;

function sourceLinks(lesson) {
  const { UI } = L;
  return lesson.src.map((s) => {
    const page = s.url.match(/#page=(\d+)/)?.[1];
    const host = new URL(s.url).host;
    const label = page ? UI.manualSrc(page) : host.includes('samsung') ? UI.supportSrc(host) : UI.otherSrc(host);
    return `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(label)}</a></li>`;
  }).join('');
}

const status = (id) => (L.REVIEWED[id] ? 'reviewed' : 'draft');

function lessonPage(ch, l, t, en, all) {
  const { UI, G } = L;
  const base = `/${L.code}/galaxy/`;
  const path = `${base}${t[0]}/`;
  const crumbs = [[UI.home, `/${L.code}/`], [UI.galaxy, base], [G.CATEGORIES[ch.num][0], `${base}#c${two(ch.num)}`], [t[1], path]];
  const n = en.steps.length;
  const sibling = all.filter((x) => x.en);
  const nextLesson = sibling[sibling.findIndex((x) => x.l.id === l.id) + 1];
  const draft = status(l.id) !== 'reviewed';
  const alternates = lessonAlternates(l.id);
  return `${head({ title: `${UI.lessonTitle(t[1])} | ${UI.brand}`, desc: en.desc, path, index: !draft, crumbs, alternates })}
<body>
${header()}
<main class="page" id="main" data-lesson="${l.id}">
${crumbNav(crumbs)}
<h1>${esc(t[1])}</h1>
<p class="lead">${esc(en.desc)}</p>
<p class="based">${UI.basedOn}</p>
${en.check ? `<p class="step__note">${esc(en.check)}</p>` : ''}
${UI.devicePicker ? '<p class="support" data-support hidden></p>' : ''}
<div class="tools" hidden>
  <button type="button" class="btn" data-restart>${UI.restart}</button>
  <button type="button" class="btn" data-all aria-pressed="false">${UI.all}</button>
</div>
<ol class="steps" data-steps>
${en.steps.map(([text, hint, note], i) => `<li class="step" id="step-${i + 1}">
  <p class="step__no">${UI.stepOf(i + 1, n)}</p>
  <h2 class="step__text">${esc(text)}</h2>
  ${hint ? `<p class="step__hint">${esc(hint)}</p>` : ''}
  ${note ? `<p class="step__note"><strong>${UI.goodToKnow}</strong> ${esc(note)}</p>` : ''}
  ${picture(l.cards[i])}
</li>`).join('\n')}
</ol>
<p class="finish" data-finish hidden>${UI.finished}${nextLesson ? ` ${UI.nextLesson} <a href="${base}${nextLesson.t[0]}/">${esc(nextLesson.t[1])}</a>` : ''}</p>
<details class="meta"><summary>${UI.sources}</summary>
  <p>${UI.refModel}: ${l.extra ? '—' : `Galaxy S26 (SM-S942N) · ${esc(BASE.software)}`} · ${UI.reviewed}: ${esc(en.checked ?? BASE.checked)}</p>
  <ul>${sourceLinks(l)}</ul>
</details>
</main>
<nav class="bar" aria-label="${UI.stepsNav}" hidden>
  <button type="button" class="btn" data-prev>${UI.prev}</button>
  <button type="button" class="btn" data-listen>${UI.listen}</button>
  <button type="button" class="btn btn--primary" data-next data-next-label="${UI.next}" data-done-label="${UI.done}">${UI.next}</button>
</nav>
${footer(draft, alternates)}
</body>
</html>
`;
}


function galaxyIndex(groups) {
  const { UI, G } = L;
  const base = `/${L.code}/galaxy/`;
  const crumbs = [[UI.home, `/${L.code}/`], [UI.galaxy, base]];
  const ready = groups.reduce((a, g) => a + g.lessons.filter((x) => x.en && x.t).length, 0);
  const total = groups.reduce((a, g) => a + g.lessons.length, 0);
  const alternates = allLangs('galaxy/');
  return `${head({ title: `${UI.indexTitle} | ${UI.brand}`, desc: UI.indexDesc, path: base, index: false, crumbs, alternates })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>${UI.indexH1}</h1>
<p class="lead">${UI.indexLead(ready, total)}</p>
${UI.devicePicker ? deviceSection(L.code, G.TITLES['g18-version'] && G.LESSONS['g18-version'] ? `${base}${G.TITLES['g18-version'][0]}/` : null) : ''}
${Object.entries(G.GROUPS).map(([gid, gname]) => `<section class="group"><h2>${gname}</h2>
${groups.filter((g) => g.ch.group === gid).map(({ ch, lessons }) => {
    const shown = lessons.filter((x) => x.t && (x.en || G.LIST_UNTRANSLATED));
    const hidden = lessons.length - shown.length;
    return `<section class="cat" id="c${two(ch.num)}">
  <h3><span class="num">${two(ch.num)}</span> ${esc(G.CATEGORIES[ch.num][0])}</h3>
  <p class="cat__desc">${esc(G.CATEGORIES[ch.num][1])}</p>
  <ul class="lessons">${shown.map(({ l, t, en }) => en ? `<li><a href="${base}${t[0]}/" data-id="${l.id}">${esc(t[1])}<span>${UI.steps(en.steps.length)}</span></a></li>` : `<li class="soon">${esc(t[1])}<span>${UI.soon}</span></li>`).join('')}${hidden ? `<li class="soon">${UI.moreSoon(hidden)}</li>` : ''}${lessons.length ? '' : `<li class="soon">${UI.soon}</li>`}</ul>
</section>`;
  }).join('\n')}
</section>`).join('\n')}
</main>
${footer(true, alternates)}
</body>
</html>
`;
}

function homePage() {
  const { UI } = L;
  const alternates = allLangs('');
  return `${head({ title: `${UI.brand} — ${BRAND_TAGLINE}`, desc: UI.homeDesc, path: `/${L.code}/`, index: false, crumbs: null, alternates })}
<body>
${header()}
<main class="page" id="main">
<p class="eyebrow">${UI.slogan}</p>
<h1>${UI.homeH1}</h1>
<p class="lead">${UI.homeLead}</p>
<a class="btn btn--primary btn--block" href="/${L.code}/galaxy/">${UI.homeCta}</a>
<ul class="points">
${UI.homePoints.map(([b, t]) => `  <li><b>${b}</b> — ${t}</li>`).join('\n')}
</ul>
</main>
${footer(true, alternates)}
</body>
</html>
`;
}

function privacyPage() {
  const { UI } = L;
  const alternates = allLangs('privacy/');
  const path = `/${L.code}/privacy/`;
  return `${head({ title: `${UI.privacy} | ${UI.brand}`, desc: UI.privacyDesc, path, index: false, crumbs: [[UI.home, `/${L.code}/`], [UI.privacy, path]], alternates })}
<body>
${header()}
<main class="page" id="main">
<h1>${UI.privacy}</h1>
<p class="lead">${UI.privacyLead}</p>
<h2>${UI.privacySavedH}</h2>
<p>${UI.privacySaved}</p>
<h2>${UI.privacyAnalyticsH}</h2>
<p>${GA ? UI.privacyAnalyticsOn : UI.privacyAnalyticsOff}</p>
${GA ? `<p><button type="button" class="btn" data-consent-reset>${UI.privacyReset}</button></p>` : ''}
<h2>${UI.privacyLinksH}</h2>
<p>${UI.privacyLinks}</p>
</main>
${footer(false, alternates)}
</body>
</html>
`;
}

function adminPage(rows) {
  const codes = Object.keys(LOCALES);
  const total = rows.length;
  const count = (c, f) => rows.filter((r) => f(r.langs[c])).length;
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; script-src 'none'">
<title>콘텐츠 현황 | DigiStep365 관리</title><link rel="stylesheet" href="/assets/global.css?v=${VERSION}"></head>
<body><main class="page admin">
<a class="brand admin__brand" href="/admin/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${BRAND_TAGLINE}</small></span></a>
<h1>콘텐츠 현황</h1>
<p class="lead">빌드할 때 자동으로 만들어지는 현황표입니다. 검색엔진에는 노출되지 않습니다.</p>
<p><a class="btn btn--primary" href="/admin/edit/">수업 편집·검수하기</a></p>
<table class="sum"><thead><tr><th>항목</th>${codes.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>
<tr><th>해외용 갤럭시 수업(한국 전용 제외)</th>${codes.map(() => `<td>${total}</td>`).join('')}</tr>
<tr><th>단계 작성</th>${codes.map((c) => `<td>${count(c, (x) => x)} / ${total}</td>`).join('')}</tr>
<tr><th>검수 완료(검색 노출)</th>${codes.map((c) => `<td>${count(c, (x) => x?.status === 'reviewed')}</td>`).join('')}</tr>
<tr><th>관리자 화면에서 고친 수업</th>${codes.map((c) => `<td>${LOCALES[c].EDITED.size}</td>`).join('')}</tr>
<tr><th>연습 그림</th>${codes.map((c) => `<td>${stats[c].pictures} / ${stats[c].steps}</td>`).join('')}</tr>
</tbody></table>
<p>기준: ${esc(BASE.model)} · ${esc(BASE.software)} · 확인 ${esc(BASE.checked)}</p>
<h2>언어</h2>
<table><thead><tr><th>코드</th><th>언어</th><th>상태</th></tr></thead><tbody>
${LANGUAGES.map((x) => `<tr><td>${x.code}</td><td lang="${x.code}"${x.dir ? ` dir="${x.dir}"` : ''}>${esc(x.name)}</td><td>${x.status === 'live' ? '운영' : x.status === 'draft' ? '초안(noindex)' : '예정'}</td></tr>`).join('')}
</tbody></table>
<h2>수업별 상태</h2>
<table class="rows"><thead><tr><th>분류</th><th>수업</th>${codes.map((c) => `<th>${c}</th>`).join('')}<th>층·지원 조건</th></tr></thead><tbody>
${rows.map((r) => `<tr><td>${two(r.ch)}</td><td>${esc(r.title)}<br><small>${r.id}${r.extra ? ' · 해외용 새 수업' : ''}</small></td>${codes.map((c) => {
    const x = r.langs[c];
    if (!x) return '<td>미작성</td>';
    const rv = LOCALES[c].REVIEWED[r.id];
    return `<td><a href="${x.path}">${x.status === 'reviewed' ? '검수 완료' : '초안'}</a>${rv ? `<br><small>${esc(rv.by)} · ${esc(rv.date)}</small>` : ''}<br><small>그림 ${x.pics}/${x.steps}</small></td>`;
  }).join('')}<td>${esc(r.layer)}${r.support ? ` · ${esc(r.support)}` : ''}</td></tr>`).join('')}
</tbody></table>
</main></body></html>
`;
}

/** 관리자 편집 화면(정적 껍데기). 내용은 /admin/data/<언어>.json을 읽어 assets/admin-edit.js가 그린다. */
function editPage() {
  const langs = Object.values(LOCALES).map((x) => `<option value="${x.code}">${esc(x.name)} (${x.code})</option>`).join('');
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self' https://api.github.com; img-src 'self' data:">
<title>수업 편집 | DigiStep365 관리</title><link rel="stylesheet" href="/assets/global.css?v=${VERSION}"></head>
<body><main class="page admin edit" data-editor>
<a class="brand admin__brand" href="/admin/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${BRAND_TAGLINE}</small></span></a>
<p><a href="/admin/">← 콘텐츠 현황</a></p>
<h1>수업 편집·검수</h1>
<p class="lead">해외용 수업의 제목·설명·단계 문장을 고치고, 원어민 검수를 기록합니다. 고친 내용은 이 브라우저에 임시 저장되며, <b>GitHub에 저장</b>하면 사이트가 다시 만들어져 1~3분 뒤 반영됩니다.</p>
<details class="edit__help"><summary>사용 방법과 주의</summary>
<ol>
<li>언어와 수업을 고릅니다. 한국어 원문과 영어 기준 문장을 보면서 그 언어 문장을 고칩니다.</li>
<li>한 단계에는 한 문장만 씁니다. 단계 수와 주소는 바꿀 수 없습니다(연습 그림·링크와 짝이 맞아야 함).</li>
<li>실제 그 언어로 설정한 갤럭시에서 모든 단계를 확인했다면 <b>검수 완료</b>를 체크하고 검수자·날짜·기기를 적습니다. 검수 완료된 수업만 검색에 노출됩니다(<a href="/docs/review-checklist-en.md" target="_blank">검수 기준</a>).</li>
<li><b>GitHub에 저장</b>: 저장소 쓰기 권한이 있는 개인 액세스 토큰이 필요합니다(Contents: Read and write). 토큰은 이 탭에만 기억되고 다른 곳으로 보내지 않습니다.</li>
<li>토큰이 없으면 <b>파일 내려받기</b>로 <code>edits.json</code>을 받아 저장소의 <code>i18n/&lt;언어&gt;/edits.json</code>에 넣으면 됩니다.</li>
</ol></details>
<noscript><p class="step__note">이 화면은 자바스크립트가 필요합니다.</p></noscript>
<div class="edit__bar">
  <label>언어 <select data-lang>${langs}</select></label>
  <label>보기 <select data-filter><option value="all">전체</option><option value="draft">초안</option><option value="reviewed">검수 완료</option><option value="edited">고친 수업</option><option value="pending">저장 안 한 변경</option></select></label>
  <label>찾기 <input type="search" data-search placeholder="제목·id"></label>
</div>
<div class="edit__grid">
  <nav class="edit__list" aria-label="수업 목록"><p data-count></p><ul data-list></ul></nav>
  <section class="edit__form" data-form aria-live="polite"><p>목록에서 수업을 고르세요.</p></section>
</div>
<section class="edit__save">
  <h2>저장</h2>
  <p data-pending>저장 안 한 변경이 없습니다.</p>
  <div class="edit__actions">
    <button type="button" class="btn" data-download>파일 내려받기(edits.json)</button>
    <button type="button" class="btn" data-discard>이 언어의 변경 버리기</button>
  </div>
  <fieldset class="edit__gh"><legend>GitHub에 저장</legend>
    <label>저장소 <input data-repo value="goldriver365k/dojeon365" autocomplete="off"></label>
    <label>배포 브랜치 <input data-branch value="claude/wizardly-dirac-fd5679" autocomplete="off"></label>
    <label>개인 액세스 토큰 <input type="password" data-token autocomplete="off" placeholder="github_pat_…"></label>
    <button type="button" class="btn btn--primary" data-commit>GitHub에 저장</button>
  </fieldset>
  <p class="edit__msg" data-msg role="status"></p>
</section>
</main>
<script type="module" src="/assets/admin-edit.js?v=${VERSION}"></script>
</body></html>
`;
}

/** 편집 화면이 읽는 언어별 자료: 지금 반영된 제목·설명·단계, 한국어 원문, 영어 기준, 검수 상태. */
function editData(code) {
  const X = LOCALES[code];
  const lessons = [];
  for (const { ch, lessons: ls } of masterLessons()) {
    for (const l of ls) {
      const t = X.G.TITLES[l.id];
      const e = X.G.LESSONS[l.id];
      if (!t || !e) continue;
      lessons.push({
        id: l.id, ch: ch.num, cat: X.G.CATEGORIES[ch.num][0], slug: t[0], path: `/${code}/galaxy/${t[0]}/`,
        title: t[1], desc: e.desc, steps: e.steps.map((s) => [s[0] ?? '', s[1] ?? '', s[2] ?? '']),
        ko: l.cards.map((c) => c.text ?? ''), en: code === 'en' ? null : (enG.LESSONS[l.id]?.steps ?? []).map((s) => s[0]),
        reviewed: X.REVIEWED[l.id] ?? null, inRepo: Boolean(X.REPO_REVIEWED[l.id]), edited: X.EDITED.has(l.id), extra: Boolean(l.extra),
      });
    }
  }
  return { code, name: X.name, dir: X.dir ?? 'ltr', file: `i18n/${code}/edits.json`, version: VERSION, lessons };
}

export function build() {
  const out = (p, html) => { const f = new URL(`..${p}index.html`, import.meta.url); mkdirSync(new URL('.', f), { recursive: true }); writeFileSync(f, html); };
  const rowsById = new Map();
  const sitemap = [];
  const result = {};
  for (const code of Object.keys(LOCALES)) {
    L = LOCALES[code];
    stats[code] = { pictures: 0, steps: 0 };
    setTranslator(L.tr, { locale: code, ...(L.wrap ?? {}) });
    rmSync(new URL(`../${code}/`, import.meta.url), { recursive: true, force: true });
    const groups = globalLessons(code);
    out(`/${code}/`, homePage());
    out(`/${code}/galaxy/`, galaxyIndex(groups));
    out(`/${code}/privacy/`, privacyPage());
    let pages = 0;
    for (const { ch, lessons } of groups) {
      for (const x of lessons) {
        const m = metaOf(x.l.id);
        if (!rowsById.has(x.l.id)) {
          rowsById.set(x.l.id, { ch: ch.num, id: x.l.id, extra: x.l.extra, title: enG.TITLES[x.l.id]?.[1] ?? x.l.id, layer: x.l.extra ? 'A' : m.layer ?? 'A', support: m.support ? JSON.stringify({ minOneUI: m.support.minOneUI, only: m.support.only?.join(',') }).replace(/"/g, '') : '', langs: {} });
        }
        if (!x.en || !x.t) continue;
        const before = stats[code].pictures;
        const beforeSteps = stats[code].steps;
        const path = `/${code}/galaxy/${x.t[0]}/`;
        out(path, lessonPage(ch, x.l, x.t, x.en, lessons));
        pages++;
        rowsById.get(x.l.id).langs[code] = { path, status: status(x.l.id), pics: stats[code].pictures - before, steps: stats[code].steps - beforeSteps };
        if (status(x.l.id) === 'reviewed') sitemap.push({ path, id: x.l.id });
      }
    }
    result[code] = { pages, ...stats[code] };
  }
  setTranslator(null);
  const reviewedAlt = (id) => Object.entries(lessonAlternates(id)).filter(([c]) => LOCALES[c].REVIEWED[id]);
  writeFileSync(new URL('../sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<!-- Only reviewed pages are listed. Draft translations are noindex and stay out of the sitemap. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.map(({ path, id }) => `  <url><loc>${SITE_URL}${path}</loc>${reviewedAlt(id).map(([c, p]) => `<xhtml:link rel="alternate" hreflang="${c}" href="${SITE_URL}${p}"/>`).join('')}</url>`).join('\n')}
</urlset>
`);
  out('/admin/', adminPage([...rowsById.values()]));
  out('/admin/edit/', editPage());
  mkdirSync(new URL('../admin/data/', import.meta.url), { recursive: true });
  for (const code of Object.keys(LOCALES)) writeFileSync(new URL(`../admin/data/${code}.json`, import.meta.url), JSON.stringify(editData(code)));
  writeFileSync(new URL('../robots.txt', import.meta.url), `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  return { ...result, indexed: sitemap.length, total: rowsById.size };
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(build());
