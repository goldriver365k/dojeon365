// Builds the global (English) static pages: /en/, /en/galaxy/, /en/galaxy/<slug>/, sitemap.xml, robots.txt
// Real URLs per page (not hash routes) so search engines can index each lesson once it is reviewed.
// Run: node scripts/build-global.mjs   (output is committed; Netlify keeps deploying the folder as is)
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { CHAPTERS } from '../data/galaxy/index.js';
import { metaOf } from '../data/galaxy/meta.js';
import { BASE } from '../data/galaxy/helpers.js';
import { SITE_URL, LANGUAGES } from '../i18n/languages.js';
import { UI } from '../i18n/en/ui.js';
import * as EN from '../i18n/en/galaxy.js';
import { renderScreen, setTranslator } from '../assets/screens.js';
import { tr } from '../i18n/en/screen-terms.js';

setTranslator(tr);
const HANGUL = /[\uac00-\ud7a3\u3131-\u318e]/;
const stats = { pictures: 0, steps: 0 };

/** Practice picture for one step, in English. Returns '' when any word in it is still Korean (never show a half-translated picture). */
function picture(card) {
  stats.steps++;
  if (card.photo) return '';
  const pic = renderScreen(card.screen, card.target, card.action);
  const texts = [...pic.svg.matchAll(/>([^<>]+)</g)].map((m) => m[1]);
  if (texts.some((t) => HANGUL.test(t))) return '';
  stats.pictures++;
  const t = pic.target;
  const name = card.target && !HANGUL.test(tr(card.target)) ? tr(card.target) : '';
  const alt = t ? `Picture of the phone screen. ${name ? `‘${name}’ is` : 'The spot to use is'} marked with a red box.` : 'Picture of the phone screen.';
  let svg = pic.svg;
  if (t && card.done === 'practice') {
    // tap the marked spot in the picture to go to the next step (keyboard users use the Next button)
    svg = svg.replace('</svg>', `<rect class="hit" data-hit x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="transparent"/></svg>`);
  }
  return `<figure class="pic${card.done === 'practice' && t ? ' pic--practice' : ''}" role="img" aria-label="${esc(alt)}">${svg.replace('aria-hidden="true"', 'aria-hidden="true" class="pic__svg"')}</figure>`;
}

const VERSION = readFileSync(new URL('../assets/version.js', import.meta.url), 'utf8').match(/'([\d.]+)'/)[1];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const two = (n) => String(n).padStart(2, '0');
const LANG = 'en';
const status = (id) => EN.LESSONS[id]?.status ?? 'draft';

export function globalLessons() {
  return CHAPTERS.map((ch) => ({
    ch,
    lessons: ch.lessons.filter((l) => metaOf(l.id).region !== 'KR').map((l) => ({ l, t: EN.TITLES[l.id], en: EN.LESSONS[l.id] })),
  }));
}

function head({ title, desc, path, index, crumbs }) {
  const url = `${SITE_URL}${path}`;
  const ld = crumbs && {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` })),
  };
  return `<!doctype html>
<html lang="${LANG}" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; base-uri 'none'; form-action 'none'">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${index ? '' : '<meta name="robots" content="noindex, follow">\n'}<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${url}">
<link rel="alternate" hreflang="x-default" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${UI.brand}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/icon-512.png">
<meta property="og:locale" content="en_US">
<link rel="icon" href="/assets/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/global.css?v=${VERSION}">
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` : ''}<script src="/assets/global.js?v=${VERSION}" defer></script>
<script type="module" src="/assets/global-device.js?v=${VERSION}"></script>
</head>`;
}

function header() {
  return `<header class="top">
  <a class="brand" href="/en/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small>${UI.subtitle}</small></span></a>
  <div class="size" role="group" aria-label="${UI.textSize}">${Object.entries(UI.sizes).map(([k, v]) => `<button type="button" data-size="${k}" aria-pressed="${k === 'normal'}">${v}</button>`).join('')}</div>
</header>`;
}

function footer(draft) {
  return `<footer class="foot">
  ${draft ? `<p class="draft">${UI.draft}</p>` : ''}
  <p>${UI.disclaimer}</p>
  <p class="langs">Languages: ${LANGUAGES.filter((l) => l.code !== 'ko').map((l) => l.code === LANG ? `<b>${esc(l.name)}</b>` : `<span title="${UI.soon}">${esc(l.name)}</span>`).join(' · ')} · <a href="/" hreflang="ko" lang="ko">한국어</a></p>
  <p>© ${UI.brand} · ${UI.slogan}</p>
</footer>`;
}

const crumbNav = (crumbs) => `<nav class="crumbs" aria-label="Breadcrumb"><ol>${crumbs.map(([n, p], i) => i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;

function sourceLinks(lesson) {
  return lesson.src.map((s) => {
    const page = s.url.match(/#page=(\d+)/)?.[1];
    const label = page ? `Samsung Galaxy S26 series user manual (Korean edition, Rev.1.0), page ${page}` : `Samsung support page (${new URL(s.url).host})`;
    return `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(label)}</a></li>`;
  }).join('');
}

function lessonPage(ch, l, t, en, all) {
  const path = `/en/galaxy/${t[0]}/`;
  const cat = EN.CATEGORIES[ch.num][0];
  const crumbs = [[UI.home, '/en/'], [UI.galaxy, '/en/galaxy/'], [cat, `/en/galaxy/#c${two(ch.num)}`], [t[1], path]];
  const n = en.steps.length;
  const sibling = all.filter((x) => x.en);
  const at = sibling.findIndex((x) => x.l.id === l.id);
  const nextLesson = sibling[at + 1];
  const draft = status(l.id) !== 'reviewed';
  return `${head({ title: `${t[1]} on a Samsung Galaxy phone | ${UI.brand}`, desc: en.desc, path, index: !draft, crumbs })}
<body>
${header()}
<main class="page" id="main" data-lesson="${l.id}">
${crumbNav(crumbs)}
<h1>${esc(t[1])}</h1>
<p class="lead">${esc(en.desc)}</p>
<p class="based">${UI.basedOn}</p>
<p class="support" data-support hidden></p>
<div class="tools" hidden>
  <button type="button" class="btn" data-restart>${UI.restart}</button>
  <button type="button" class="btn" data-all aria-pressed="false">${UI.all}</button>
</div>
<ol class="steps" data-steps>
${en.steps.map(([text, hint, note], i) => `<li class="step" id="step-${i + 1}">
  <p class="step__no">${UI.stepOf(i + 1, n)}</p>
  <h2 class="step__text">${esc(text)}</h2>
  ${hint ? `<p class="step__hint">${esc(hint)}</p>` : ''}
  ${note ? `<p class="step__note"><strong>Good to know</strong> ${esc(note)}</p>` : ''}
  ${picture(l.cards[i])}
</li>`).join('\n')}
</ol>
<p class="finish" data-finish hidden>Well done! You finished this lesson.${nextLesson ? ` Next: <a href="/en/galaxy/${nextLesson.t[0]}/">${esc(nextLesson.t[1])}</a>` : ''}</p>
<details class="meta"><summary>Sources and checks</summary>
  <p>Reference model: Galaxy S26 (SM-S942N) · ${esc(BASE.software)} · ${UI.reviewed}: ${esc(BASE.checked)}</p>
  <ul>${sourceLinks(l)}</ul>
</details>
</main>
<nav class="bar" aria-label="Steps" hidden>
  <button type="button" class="btn" data-prev>${UI.prev}</button>
  <button type="button" class="btn" data-listen>${UI.listen}</button>
  <button type="button" class="btn btn--primary" data-next data-next-label="${UI.next}" data-done-label="${UI.done}">${UI.next}</button>
</nav>
${footer(draft)}
</body>
</html>
`;
}

function galaxyIndex(groups) {
  const path = '/en/galaxy/';
  const crumbs = [[UI.home, '/en/'], [UI.galaxy, path]];
  const ready = groups.reduce((a, g) => a + g.lessons.filter((x) => x.en).length, 0);
  const total = groups.reduce((a, g) => a + g.lessons.length, 0);
  const byGroup = Object.entries(EN.GROUPS);
  return `${head({ title: `Samsung Galaxy phone lessons for beginners | ${UI.brand}`, desc: 'Easy step-by-step lessons for Samsung Galaxy phones: buttons, touch, bigger text, calls, messages, camera, safety and more. One action per step.', path, index: false, crumbs })}
<body>
${header()}
<main class="page" id="main">
${crumbNav(crumbs)}
<h1>Galaxy phone lessons</h1>
<p class="lead">Choose a topic. Each lesson shows one action at a time. ${ready} of ${total} lessons are available in English so far.</p>
<section class="device" id="my-phone" aria-labelledby="dev-h">
  <h2 id="dev-h">My phone</h2>
  <p class="device__now" data-device-now>Not chosen · showing common instructions</p>
  <details class="device__how" open>
    <summary>First, find your phone’s model and software version</summary>
    <ol>
      <li>Tap the <b>Settings</b> app.</li>
      <li>Tap <b>About phone</b> at the very bottom.</li>
      <li>Check the <b>model name</b> at the top (for example, Galaxy S26 · SM-S942N).</li>
      <li>Tap <b>Software information</b>.</li>
      <li>Check the <b>One UI version</b> (for example, 9.0).</li>
    </ol>
    <p>On some models the menu is called ‘About device’. You can also type ‘About phone’ in the Settings search.</p>
    <a href="/en/galaxy/check-model-and-one-ui-version/">Practice these steps</a>
  </details>
  <form class="device__form" data-device-form>
    <label>Series <select name="series"></select></label>
    <label>Model <select name="model"></select></label>
    <label>One UI version <select name="oneui"></select></label>
    <div class="device__btns"><button type="submit" class="btn btn--primary">Save my phone</button><button type="button" class="btn" data-clear>Use common instructions</button></div>
    <p class="device__saved" data-saved role="status"></p>
  </form>
  <p class="device__note">Choosing is optional. It is saved only in this browser, and we never guess your model.</p>
</section>
${byGroup.map(([gid, gname]) => `<section class="group"><h2>${gname}</h2>
${groups.filter((g) => g.ch.group === gid).map(({ ch, lessons }) => `<section class="cat" id="c${two(ch.num)}">
  <h3><span class="num">${two(ch.num)}</span> ${esc(EN.CATEGORIES[ch.num][0])}</h3>
  <p class="cat__desc">${esc(EN.CATEGORIES[ch.num][1])}</p>
  <ul class="lessons">${lessons.length ? lessons.map(({ l, t, en }) => en ? `<li><a href="/en/galaxy/${t[0]}/" data-id="${l.id}">${esc(t[1])}<span>${en.steps.length} steps</span></a></li>` : `<li class="soon">${esc(t[1])}<span>${UI.soon}</span></li>`).join('') : `<li class="soon">${UI.soon}</li>`}</ul>
</section>`).join('\n')}
</section>`).join('\n')}
</main>
${footer(true)}
</body>
</html>
`;
}

function homePage() {
  return `${head({ title: `${UI.brand} — ${UI.subtitle}`, desc: 'Free, step-by-step smartphone lessons for beginners and older adults. Learn your Samsung Galaxy phone one action at a time. No sign-up needed.', path: '/en/', index: false, crumbs: null })}
<body>
${header()}
<main class="page" id="main">
<p class="eyebrow">${UI.slogan}</p>
<h1>Easy smartphone lessons, one step at a time</h1>
<p class="lead">Free lessons for people who are new to smartphones. Big text, one action per step, and no sign-up.</p>
<a class="btn btn--primary btn--block" href="/en/galaxy/">Start Galaxy lessons</a>
<ul class="points">
  <li><b>One action per step</b> — read it, do it, then tap Next.</li>
  <li><b>Big, clear text</b> — choose Normal, Large or Extra large at the top.</li>
  <li><b>Listen</b> — have each step read aloud.</li>
  <li><b>Private</b> — no account and no tracking of your lessons.</li>
</ul>
</main>
${footer(true)}
</body>
</html>
`;
}

function adminPage(groups, rows) {
  const total = rows.length;
  const done = rows.filter((r) => r.en).length;
  const reviewed = rows.filter((r) => r.status === 'reviewed').length;
  const pics = rows.reduce((a, r) => a + r.pics, 0);
  const steps = rows.reduce((a, r) => a + r.steps, 0);
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; script-src 'none'">
<title>콘텐츠 현황 | DigiStep365 관리</title><link rel="stylesheet" href="/assets/global.css?v=${VERSION}"></head>
<body><main class="page admin">
<h1>콘텐츠 현황(읽기 전용)</h1>
<p class="lead">빌드할 때 자동으로 만들어지는 현황표입니다. 내용 수정은 저장소의 <code>i18n/</code>·<code>data/</code> 파일에서 합니다. 검색엔진에는 노출되지 않습니다.</p>
<table class="sum"><tbody>
<tr><th>해외용 갤럭시 수업</th><td>${total}개 (한국 전용 제외)</td></tr>
<tr><th>영어 단계 작성</th><td>${done} / ${total}</td></tr>
<tr><th>영어 검수 완료(검색 노출)</th><td>${reviewed} / ${total}</td></tr>
<tr><th>영어 연습 그림</th><td>${pics} / ${steps}단계 (${Math.round((pics / steps) * 100)}%)</td></tr>
<tr><th>기준</th><td>${esc(BASE.model)} · ${esc(BASE.software)} · 확인 ${esc(BASE.checked)}</td></tr>
</tbody></table>
<h2>언어</h2>
<table><thead><tr><th>코드</th><th>언어</th><th>상태</th></tr></thead><tbody>
${LANGUAGES.map((l) => `<tr><td>${l.code}</td><td>${esc(l.name)}</td><td>${l.status === 'live' ? '운영' : l.status === 'draft' ? '초안(noindex)' : '예정'}</td></tr>`).join('')}
</tbody></table>
<h2>수업별 상태</h2>
<table class="rows"><thead><tr><th>분류</th><th>수업</th><th>상태</th><th>그림</th><th>층·지원 조건</th></tr></thead><tbody>
${rows.map((r) => `<tr><td>${two(r.ch)}</td><td>${r.en ? `<a href="/en/galaxy/${r.slug}/">${esc(r.title)}</a>` : esc(r.title)}<br><small>${r.id}</small></td><td>${r.en ? (r.status === 'reviewed' ? '검수 완료' : '초안') : '미작성'}</td><td>${r.pics}/${r.steps}</td><td>${esc(r.layer)}${r.support ? ` · ${esc(r.support)}` : ''}</td></tr>`).join('')}
</tbody></table>
</main></body></html>
`;
}

export function build() {
  const groups = globalLessons();
  rmSync(new URL('../en/', import.meta.url), { recursive: true, force: true });
  const out = (p, html) => { const f = new URL(`..${p}index.html`, import.meta.url); mkdirSync(new URL('.', f), { recursive: true }); writeFileSync(f, html); };
  out('/en/', homePage());
  out('/en/galaxy/', galaxyIndex(groups));
  const urls = [];
  let pages = 0;
  const rows = [];
  for (const { ch, lessons } of groups) {
    for (const x of lessons) {
      if (!x.en) continue;
      const before = stats.pictures;
      out(`/en/galaxy/${x.t[0]}/`, lessonPage(ch, x.l, x.t, x.en, lessons));
      pages++;
      const m = metaOf(x.l.id);
      rows.push({ ch: ch.num, id: x.l.id, slug: x.t[0], title: x.t[1], en: true, status: status(x.l.id), pics: stats.pictures - before, steps: x.en.steps.length, layer: m.layer ?? 'A', support: m.support ? JSON.stringify({ minOneUI: m.support.minOneUI, only: m.support.only?.join(',') }).replace(/"/g, '') : '' });
      if (status(x.l.id) === 'reviewed') urls.push(`/en/galaxy/${x.t[0]}/`);
    }
  }
  writeFileSync(new URL('../sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<!-- Only reviewed pages are listed. Draft translations are noindex and stay out of the sitemap. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc><xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${u}"/></url>`).join('\n')}
</urlset>
`);
  out('/admin/', adminPage(groups, rows));
  writeFileSync(new URL('../robots.txt', import.meta.url), `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  return { pages, indexed: urls.length, total: groups.reduce((a, g) => a + g.lessons.length, 0), ...stats };
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(build());
