/**
 * 편한자판 시니어 교육 플랫폼 — 화면 코드
 *
 * 주소(해시)
 *   #/                         홈(카테고리 5개)
 *   #/galaxy                   갤럭시 휴대폰 사용방법: 22개 목차, 이어서 하기, 검색
 *   #/galaxy/01                목차 01의 세부 수업 목록
 *   #/lesson/<수업id>/start    실제 휴대폰 실습 안내(필요한 수업만)
 *   #/lesson/<수업id>/<n>      카드 n번째(1부터)
 *   #/lesson/<수업id>/done     완료 화면
 *   #/soon/<카테고리id>        준비 중 카테고리
 *
 * 진행 상황과 글씨 크기는 이 기기의 localStorage 에만 저장한다(서버로 보내지 않음).
 */
import { CATEGORIES } from '../data/categories.js';
import { CHAPTERS, GROUPS, findLesson, allLessons } from '../data/galaxy/index.js';
import { BASE } from '../data/galaxy/helpers.js';
import { renderScreen } from './screens.js';

const STORE_KEY = 'dojeon365.galaxy.v1';
const app = document.getElementById('app');

/* ---------- 저장 ---------- */

function load() {
  try {
    const v = JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}');
    return { lessons: {}, current: null, font: 'normal', mode: {}, ...v };
  } catch {
    return { lessons: {}, current: null, font: 'normal', mode: {} };
  }
}
let store = load();
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch { /* 저장할 수 없는 환경에서도 수업은 진행된다 */ }
}

/* ---------- 도구 ---------- */

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const two = (n) => String(n).padStart(2, '0');
const norm = (s) => String(s ?? '').toLowerCase().replace(/[\s·‘’'".,!?~()/-]+/g, '');

const ICON = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  done: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  speak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  chev: '<svg viewBox="0 0 24 24" aria-hidden="true" class="chev"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>',
};

/* ---------- 글씨 크기 ---------- */

const FONT_LABEL = { normal: '보통', large: '크게', xlarge: '아주 크게' };
function applyFont() { document.documentElement.dataset.font = store.font in FONT_LABEL ? store.font : 'normal'; }
function fontControl() {
  return `<div class="font-ctl" role="group" aria-label="글씨 크기">
    <span class="font-ctl__label" aria-hidden="true">글씨</span>
    ${Object.entries(FONT_LABEL).map(([k, v]) => `<button type="button" class="font-ctl__btn" data-font="${k}" aria-pressed="${store.font === k}">${v}</button>`).join('')}
  </div>`;
}

function topbar({ back, backLabel = '뒤로', title = '' } = {}) {
  return `<header class="topbar">
    ${back ? `<a class="topbar__back" href="${back}">${ICON.prev}<span>${esc(backLabel)}</span></a>` : `<a class="topbar__brand" href="#/">${ICON.home}<span>편한자판 교실</span></a>`}
    ${title ? `<span class="topbar__title">${esc(title)}</span>` : ''}
    ${fontControl()}
  </header>`;
}

/* ---------- 화면: 홈 ---------- */

function viewHome() {
  document.title = '편한자판 시니어 교육';
  return `${topbar()}
  <main class="page" id="main">
    <h1 class="page__title">무엇을 배워 볼까요?</h1>
    <p class="lead">천천히, 한 번에 한 가지씩 따라 하면 됩니다.</p>
    <ul class="cat-list">
      ${CATEGORIES.map((c, i) => `<li>
        <a class="cat ${c.ready ? '' : 'cat--soon'}" href="${c.ready ? c.href : `#/soon/${c.id}`}">
          <span class="cat__num" aria-hidden="true">${i + 1}</span>
          <span class="cat__body"><span class="cat__title">${esc(c.title)}</span><span class="cat__desc">${esc(c.desc)}</span>${c.ready ? '' : '<span class="badge badge--soon">준비 중</span>'}</span>
          ${ICON.chev}
        </a></li>`).join('')}
    </ul>
  </main>`;
}

function viewSoon(id) {
  const c = CATEGORIES.find((x) => x.id === id);
  document.title = `${c?.title ?? '준비 중'} | 편한자판 시니어 교육`;
  return `${topbar({ back: '#/', backLabel: '홈으로' })}
  <main class="page" id="main">
    <h1 class="page__title">${esc(c?.title ?? '준비 중')}</h1>
    <p class="lead">이 교실은 준비하고 있어요. 먼저 ‘갤럭시 휴대폰 사용방법’을 배워 보세요.</p>
    <a class="btn btn--primary btn--block" href="#/galaxy">갤럭시 휴대폰 사용방법 열기 ${ICON.next}</a>
  </main>`;
}

/* ---------- 화면: 22개 목차 ---------- */

function lessonState(id) { return store.lessons[id] ?? { card: 0, done: false }; }

function resumeBox() {
  const cur = store.current;
  if (!cur) return '';
  const found = findLesson(cur.id);
  if (!found) return '';
  const { lesson, chapter } = found;
  const n = Math.min(cur.card, lesson.cards.length - 1) + 1;
  return `<section class="resume" aria-labelledby="resume-h">
    <h2 id="resume-h" class="resume__h">이어서 하기</h2>
    <a class="resume__link" href="#/lesson/${lesson.id}/${n}">
      <span class="resume__chapter">${two(chapter.num)}. ${esc(chapter.title)}</span>
      <span class="resume__title">${esc(lesson.title)}</span>
      <span class="resume__step">${lesson.cards.length}단계 중 ${n}단계부터</span>
      ${ICON.chev}
    </a>
  </section>`;
}

const EXAMPLES = ['글씨가 작아요', '소리가 안 나요', '사진 보내기', '전화 걸기', '와이파이'];

function viewGalaxy() {
  document.title = '갤럭시 휴대폰 사용방법 | 편한자판 시니어 교육';
  const done = (ch) => ch.lessons.filter((l) => lessonState(l.id).done).length;
  return `${topbar({ back: '#/', backLabel: '홈으로' })}
  <main class="page" id="main">
    <h1 class="page__title">갤럭시 휴대폰 사용방법</h1>
    <p class="lead">22개 목차 중 배우고 싶은 것을 누르세요.</p>
    ${resumeBox()}
    <section class="search" aria-labelledby="search-h">
      <h2 id="search-h" class="search__h">무엇이 궁금하세요?</h2>
      <form class="search__form" role="search" data-search>
        <label class="sr-only" for="q">찾고 싶은 내용</label>
        <input id="q" name="q" type="search" class="search__input" placeholder="예: 글씨가 작아요" autocomplete="off" enterkeyhint="search">
        <button type="submit" class="btn btn--primary search__btn">${ICON.search}<span>찾기</span></button>
      </form>
      <div class="chips" aria-label="자주 찾는 말">${EXAMPLES.map((e) => `<button type="button" class="chip" data-example="${esc(e)}">${esc(e)}</button>`).join('')}</div>
      <div class="search__results" id="results" aria-live="polite"></div>
    </section>
    ${GROUPS.map((g) => `<section class="toc-group" aria-labelledby="g-${g.id}">
      <h2 class="toc-group__h" id="g-${g.id}">${esc(g.title)}</h2>
      <ol class="toc">
        ${CHAPTERS.filter((ch) => ch.group === g.id).map((ch) => `<li>
          <a class="toc__row" href="#/galaxy/${two(ch.num)}">
            <span class="toc__num">${two(ch.num)}</span>
            <span class="toc__body"><span class="toc__title">${esc(ch.title)}</span>
              <span class="toc__meta">수업 ${ch.lessons.length}개${done(ch) ? ` · ${done(ch)}개 마침` : ''}</span></span>
            ${ICON.chev}
          </a></li>`).join('')}
      </ol>
    </section>`).join('')}
  </main>`;
}

/* ---------- 검색 ---------- */

let INDEX = null;
function searchIndex() {
  if (INDEX) return INDEX;
  INDEX = allLessons().map(({ lesson, chapter }) => ({
    lesson, chapter,
    title: norm(lesson.title),
    keys: lesson.q.map(norm),
    chapterTitle: norm(chapter.title),
    all: norm([lesson.title, chapter.title, ...lesson.q, ...lesson.cards.map((c) => c.text)].join(' ')),
  }));
  return INDEX;
}

/** 생활 속 표현으로 수업 찾기. 점수 높은 순서로 돌려준다. */
export function search(query) {
  const q = norm(query);
  if (!q) return [];
  const tokens = String(query).split(/\s+/).map(norm).filter((t) => t.length >= 2);
  const scored = [];
  for (const e of searchIndex()) {
    let s = 0;
    if (e.title.includes(q)) s += 10;
    if (e.keys.some((k) => k.includes(q) || (q.length >= 3 && q.includes(k) && k.length >= 3))) s += 8;
    if (e.chapterTitle.includes(q)) s += 4;
    if (!s && e.all.includes(q)) s += 2;
    if (!s && tokens.length > 1 && tokens.every((t) => e.all.includes(t))) s += 2;
    if (s) scored.push({ ...e, s });
  }
  return scored.sort((a, b) => b.s - a.s || a.chapter.num - b.chapter.num).slice(0, 12);
}

function showResults(query) {
  const box = document.getElementById('results');
  if (!box) return;
  const list = search(query);
  if (!query.trim()) { box.innerHTML = ''; return; }
  box.innerHTML = list.length
    ? `<p class="search__count">‘${esc(query)}’ 수업 ${list.length}개</p><ul class="lesson-list">${list.map(({ lesson, chapter }) => lessonRow(lesson, chapter, true)).join('')}</ul>`
    : `<p class="search__count">‘${esc(query)}’에 맞는 수업을 찾지 못했어요. 다른 말로 찾아보거나 아래 목차를 눌러 보세요.</p>`;
}

/* ---------- 화면: 세부 수업 목록 ---------- */

function lessonHref(lesson) {
  return lesson.intro ? `#/lesson/${lesson.id}/start` : `#/lesson/${lesson.id}/1`;
}

function lessonRow(lesson, chapter, withChapter = false) {
  const st = lessonState(lesson.id);
  const status = st.done ? '<span class="badge badge--done">마침</span>' : store.current?.id === lesson.id ? '<span class="badge badge--doing">하던 중</span>' : '';
  return `<li><a class="lesson-row" href="${lessonHref(lesson)}">
    <span class="lesson-row__body">
      ${withChapter ? `<span class="lesson-row__chapter">${two(chapter.num)}. ${esc(chapter.title)}</span>` : ''}
      <span class="lesson-row__title">${esc(lesson.title)}</span>
      <span class="lesson-row__meta">${lesson.cards.length}단계${lesson.models ? ` · <span class="badge badge--model">${esc(lesson.models)}</span>` : ''} ${status}</span>
    </span>${ICON.chev}</a></li>`;
}

function viewChapter(num) {
  const ch = CHAPTERS.find((c) => c.num === Number(num));
  if (!ch) return viewNotFound();
  document.title = `${two(ch.num)}. ${ch.title} | 갤럭시 휴대폰 사용방법`;
  const group = GROUPS.find((g) => g.id === ch.group);
  return `${topbar({ back: '#/galaxy', backLabel: '목차로' })}
  <main class="page" id="main">
    <p class="eyebrow">${esc(group?.title ?? '')} · 목차 ${two(ch.num)}</p>
    <h1 class="page__title">${two(ch.num)}. ${esc(ch.title)}</h1>
    <p class="lead">배울 수업을 누르세요. 첫 단계부터 시작해요.</p>
    <ul class="lesson-list">${ch.lessons.map((l) => lessonRow(l, ch)).join('')}</ul>
  </main>`;
}

/* ---------- 화면: 실제 휴대폰 실습 안내 ---------- */

function viewIntro(lesson, chapter) {
  const i = lesson.intro;
  document.title = `${lesson.title} | 시작하기 전에`;
  const pic = renderScreen(i.screen, i.target);
  return `${topbar({ back: `#/galaxy/${two(chapter.num)}`, backLabel: '수업 목록' })}
  <main class="page" id="main">
    <h1 class="page__title">${esc(lesson.title)}</h1>
    <section class="intro">
      <h2 class="intro__h" tabindex="-1" id="instr">${esc(i.title)}</h2>
      <p class="intro__text">${esc(i.text)}</p>
      <figure class="stage stage--small"><div class="stage__frame"><div class="stage__pic" role="img" aria-label="${esc(i.alt)}">${pic.svg}</div></div></figure>
      <p class="intro__text">${esc(i.after)}</p>
    </section>
    <div class="intro__choices">
      <a class="btn btn--primary btn--block" href="#/lesson/${lesson.id}/1" data-mode="real">실제 휴대폰으로 따라 하기 ${ICON.next}</a>
      <a class="btn btn--block" href="#/lesson/${lesson.id}/1" data-mode="practice">연습 화면으로만 배우기 ${ICON.next}</a>
    </div>
  </main>`;
}

/* ---------- 화면: 카드 ---------- */

let speaking = false;
function stopSpeak() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  speaking = false;
}

function cardFigure(card) {
  if (card.photo) {
    const t = card.photo.target;
    return `<div class="stage__frame"><div class="stage__pic stage__pic--photo" role="img" aria-label="${esc(card.photo.alt ?? card.alt)}">
      <img src="${esc(card.photo.src)}" alt="" />
      ${t ? `<span class="photo-ring" style="left:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%"></span>` : ''}
    </div>${t && card.action !== 'self' ? `<button type="button" class="hit" style="left:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%" aria-label="연습: ${esc(card.target)} 누르기"></button>` : ''}</div>`;
  }
  const pic = renderScreen(card.screen, card.target, card.action);
  const t = pic.target;
  const pct = (v, total) => `${(v / total) * 100}%`;
  const practice = card.done === 'practice' && t;
  const verb = card.action === 'hold' ? '길게 누르기' : card.action.startsWith('swipe') ? '밀기' : '누르기';
  return `<div class="stage__frame"><div class="stage__pic" role="img" aria-label="${esc(card.alt)}">${pic.svg}</div>
    ${practice ? `<button type="button" class="hit hit--${card.action}" style="left:${pct(t.x, pic.width)};top:${pct(t.y, pic.height)};width:${pct(t.w, pic.width)};height:${pct(t.h, pic.height)}" aria-label="연습: ${esc(card.target)} ${verb}"></button>` : ''}</div>`;
}

function practiceHint(card) {
  if (card.done !== 'practice') return '실제 휴대폰에서 직접 해 보고 ‘다음’을 누르세요.';
  if (card.action === 'hold') return '연습: 빨간 테두리 안을 손가락으로 길게 눌러 보세요.';
  if (card.action.startsWith('swipe')) return '연습: 화살표 방향으로 그림을 밀어 보세요.';
  return '연습: 그림에서 빨간 테두리 안을 눌러 보세요.';
}

function viewCard(lesson, chapter, idx) {
  const cards = lesson.cards;
  const card = cards[idx];
  const total = cards.length;
  const isLast = idx === total - 1;
  const real = store.mode[lesson.id] === 'real';
  const doneLabel = (real && card.realDoneLabel) || card.doneLabel || '완료';
  document.title = `${idx + 1}/${total} ${lesson.title} | 갤럭시 휴대폰 사용방법`;
  return `<div class="lesson">
  <header class="lesson__top">
    <a class="lesson__close" href="#/galaxy/${two(chapter.num)}">${ICON.close}<span>닫기</span></a>
    <span class="lesson__chapter">${two(chapter.num)}. ${esc(chapter.title)}</span>
    ${fontControl()}
  </header>
  <main class="lesson__main" id="main">
    <h1 class="lesson__title">${esc(lesson.title)}</h1>
    ${lesson.models ? `<p class="badge badge--model">${esc(lesson.models)}</p>` : ''}
    <p class="step" aria-hidden="true"><span class="step__text">${total}단계 중 <strong>${idx + 1}단계</strong></span>
      <span class="step__bar"><span style="width:${((idx + 1) / total) * 100}%"></span></span></p>
    <h2 class="instr" id="instr" tabindex="-1"><span class="sr-only">${total}단계 중 ${idx + 1}단계. </span>${esc(card.text)}</h2>
    ${card.hint ? `<p class="hint">${esc(card.hint)}</p>` : ''}
    ${card.note ? `<p class="note"><strong>기종에 따라 달라요</strong> ${esc(card.note)}</p>` : ''}
    <figure class="stage" data-action="${esc(card.action)}">
      ${cardFigure(card)}
      <figcaption class="stage__cap">${esc(practiceHint(card))}</figcaption>
    </figure>
    <p class="feedback" id="feedback" role="status" aria-live="polite"></p>
    <button type="button" class="btn btn--speak" data-speak>${ICON.speak}<span>음성으로 듣기</span></button>
    <details class="meta">
      <summary>이 수업의 기준과 출처</summary>
      <dl>
        <dt>기준 기종</dt><dd>${esc(lesson.model ?? BASE.model)}</dd>
        <dt>확인한 소프트웨어</dt><dd>${esc(lesson.software ?? BASE.software)}</dd>
        <dt>확인한 날짜</dt><dd>${esc(lesson.checked ?? BASE.checked)}</dd>
        ${lesson.models ? `<dt>지원 기종</dt><dd>${esc(lesson.models)}</dd>` : ''}
        ${lesson.check ? `<dt>확인 상태</dt><dd>${esc(lesson.check)}</dd>` : ''}
      </dl>
      <ul class="meta__src">${lesson.src.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul>
    </details>
  </main>
  <nav class="navbar" aria-label="단계 이동">
    ${idx === 0
      ? `<a class="btn btn--nav" href="#/galaxy/${two(chapter.num)}">${ICON.prev}<span>목록</span></a>`
      : `<a class="btn btn--nav" href="#/lesson/${lesson.id}/${idx}" data-nav="prev">${ICON.prev}<span>이전</span></a>`}
    ${isLast
      ? `<a class="btn btn--nav btn--primary" href="#/lesson/${lesson.id}/done" data-nav="done">${ICON.done}<span>${esc(doneLabel)}</span></a>`
      : `<a class="btn btn--nav btn--primary" href="#/lesson/${lesson.id}/${idx + 2}" data-nav="next"><span>다음</span>${ICON.next}</a>`}
  </nav>
  </div>`;
}

function viewDone(lesson, chapter) {
  document.title = `수업을 마쳤어요 | ${lesson.title}`;
  const list = chapter.lessons;
  const nextLesson = list[list.findIndex((l) => l.id === lesson.id) + 1];
  return `${topbar({ back: `#/galaxy/${two(chapter.num)}`, backLabel: '수업 목록' })}
  <main class="page page--done" id="main">
    <div class="done-mark" aria-hidden="true">${ICON.done}</div>
    <h1 class="page__title" tabindex="-1" id="instr">수업을 마쳤어요</h1>
    <p class="lead">‘${esc(lesson.title)}’ ${lesson.cards.length}단계를 모두 따라 했어요.</p>
    <div class="done-actions">
      <a class="btn btn--block" href="${lessonHref(lesson)}" data-again>다시 배우기</a>
      <a class="btn btn--primary btn--block" href="#/galaxy/${two(chapter.num)}">수업 목록으로</a>
      ${nextLesson ? `<a class="btn btn--block btn--ghost" href="${lessonHref(nextLesson)}">다음 수업: ${esc(nextLesson.title)} ${ICON.next}</a>` : ''}
    </div>
  </main>`;
}

function viewNotFound() {
  document.title = '찾을 수 없어요';
  return `${topbar({ back: '#/galaxy', backLabel: '목차로' })}<main class="page" id="main"><h1 class="page__title">화면을 찾을 수 없어요</h1><a class="btn btn--primary btn--block" href="#/galaxy">목차로 가기</a></main>`;
}

/* ---------- 진행 기록 ---------- */

function enterCard(lesson, idx) {
  const card = lesson.cards[idx];
  // 카드에 resumeAt 이 있으면 다시 들어올 때 그 카드부터(예: 전원을 끄기 직전 → 다시 켠 뒤 확인 카드)
  const resume = Number.isInteger(card.resumeAt) ? card.resumeAt : idx;
  store.lessons[lesson.id] = { ...lessonState(lesson.id), card: resume, done: false };
  store.current = { id: lesson.id, card: resume };
  save();
}

function finishLesson(lesson) {
  store.lessons[lesson.id] = { card: 0, done: true, at: new Date().toISOString().slice(0, 10) };
  if (store.current?.id === lesson.id) store.current = null;
  save();
}

/* ---------- 라우터 ---------- */

let currentCard = null;

function route() {
  stopSpeak();
  clearTimeout(advanceTimer);
  currentCard = null;
  const h = location.hash.replace(/^#/, '') || '/';
  const parts = h.split('/').filter(Boolean);
  let html;
  let focusInstr = false;
  if (parts.length === 0) html = viewHome();
  else if (parts[0] === 'soon') html = viewSoon(parts[1]);
  else if (parts[0] === 'galaxy' && !parts[1]) html = viewGalaxy();
  else if (parts[0] === 'galaxy') html = viewChapter(parts[1]);
  else if (parts[0] === 'lesson') {
    const found = findLesson(parts[1]);
    if (!found) html = viewNotFound();
    else {
      const { lesson, chapter } = found;
      if (parts[2] === 'start' && lesson.intro) { html = viewIntro(lesson, chapter); focusInstr = true; }
      else if (parts[2] === 'done') { finishLesson(lesson); html = viewDone(lesson, chapter); focusInstr = true; }
      else {
        const idx = Math.min(Math.max(Number(parts[2]) || 1, 1), lesson.cards.length) - 1;
        enterCard(lesson, idx);
        currentCard = { lesson, chapter, idx, card: lesson.cards[idx] };
        html = viewCard(lesson, chapter, idx);
        focusInstr = true;
      }
    }
  } else html = viewNotFound();
  app.innerHTML = html;
  document.body.dataset.route = location.hash || '#/';
  window.scrollTo(0, 0);
  const target = focusInstr ? document.getElementById('instr') : null;
  if (target) target.focus({ preventScroll: true });
  else if (route.started) {
    const h1 = document.querySelector('#main h1');
    if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
  }
  route.started = true;
}

/* ---------- 연습 화면 동작 ---------- */

let advanceTimer = 0;
function feedback(msg, kind) {
  const el = document.getElementById('feedback');
  if (!el) return;
  el.textContent = msg;
  el.className = `feedback feedback--${kind}`;
}

function practiceSuccess() {
  if (!currentCard) return;
  const { lesson, idx } = currentCard;
  const stage = document.querySelector('.stage');
  stage?.classList.add('stage--ok');
  const isLast = idx === lesson.cards.length - 1;
  feedback(isLast ? '잘하셨어요! 아래 ‘완료’를 누르세요.' : '잘하셨어요! 다음 단계로 넘어가요.', 'ok');
  if (!isLast) advanceTimer = setTimeout(() => { location.hash = `#/lesson/${lesson.id}/${idx + 2}`; }, 1100);
  else document.querySelector('[data-nav="done"]')?.classList.add('btn--pulse');
}

function practiceMiss(msg) {
  const stage = document.querySelector('.stage');
  if (!stage) return;
  stage.classList.remove('stage--miss');
  void stage.offsetWidth; // 애니메이션 다시 시작
  stage.classList.add('stage--miss');
  feedback(msg, 'miss');
}

const dirOf = (dx, dy) => (Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
let pointerStart = null;
let holdTimer = 0;

function onPointerDown(e) {
  if (!currentCard) return;
  const stage = e.target.closest('.stage');
  if (!stage || currentCard.card.done !== 'practice') return;
  const action = currentCard.card.action;
  pointerStart = { x: e.clientX, y: e.clientY, onHit: Boolean(e.target.closest('.hit')), t: Date.now() };
  if (action === 'hold' && pointerStart.onHit) {
    e.target.closest('.hit').classList.add('hit--holding');
    holdTimer = setTimeout(() => { pointerStart = null; practiceSuccess(); }, 1000);
  }
  if (action.startsWith('swipe')) e.preventDefault();
}

function onPointerUp(e) {
  if (!currentCard || !pointerStart) return;
  const { card } = currentCard;
  clearTimeout(holdTimer);
  document.querySelector('.hit--holding')?.classList.remove('hit--holding');
  const dx = e.clientX - pointerStart.x;
  const dy = e.clientY - pointerStart.y;
  const moved = Math.hypot(dx, dy);
  const start = pointerStart;
  pointerStart = null;
  if (card.action.startsWith('swipe')) {
    const want = card.action.slice(6);
    if (moved >= 40 && dirOf(dx, dy) === want) practiceSuccess();
    else if (moved >= 40) practiceMiss('방향이 달라요. 빨간 화살표 방향으로 밀어 보세요.');
    else practiceMiss('손가락을 댄 채로 화살표 방향으로 쭉 밀어 보세요.');
    return;
  }
  if (card.action === 'hold') {
    if (start.onHit) practiceMiss('조금 더 길게, 1초 정도 누르고 있어 보세요.');
    else practiceMiss('그곳이 아니에요. 빨간 테두리 안을 길게 눌러 보세요.');
    return;
  }
  if (moved < 30) {
    if (start.onHit) practiceSuccess();
    else practiceMiss('그곳이 아니에요. 빨간 테두리 안을 눌러 보세요.');
  }
}

/* ---------- 이벤트 ---------- */

function speakCurrent(btn) {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    feedback('이 기기에서는 음성 듣기를 쓸 수 없어요.', 'miss');
    return;
  }
  if (speaking) { stopSpeak(); btn.querySelector('span').textContent = '음성으로 듣기'; return; }
  const instr = document.getElementById('instr');
  const hint = document.querySelector('.hint');
  const text = [instr?.textContent, hint?.textContent].filter(Boolean).join(' ');
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  u.rate = 0.9;
  const ko = window.speechSynthesis.getVoices().find((v) => v.lang?.startsWith('ko'));
  if (ko) u.voice = ko;
  u.onend = () => { speaking = false; btn.querySelector('span').textContent = '음성으로 듣기'; };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
  speaking = true;
  btn.querySelector('span').textContent = '듣기 멈추기';
}

app.addEventListener('click', (e) => {
  const fontBtn = e.target.closest('.font-ctl__btn');
  if (fontBtn) {
    store.font = fontBtn.dataset.font;
    save();
    applyFont();
    document.querySelectorAll('.font-ctl__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.font === store.font)));
    return;
  }
  const speakBtn = e.target.closest('[data-speak]');
  if (speakBtn) { speakCurrent(speakBtn); return; }
  const ex = e.target.closest('[data-example]');
  if (ex) {
    const input = document.getElementById('q');
    input.value = ex.dataset.example;
    showResults(input.value);
    return;
  }
  const mode = e.target.closest('[data-mode]');
  if (mode) {
    const id = location.hash.split('/')[2];
    store.mode[id] = mode.dataset.mode;
    save();
  }
  // 키보드로 연습 대상(버튼)을 누른 경우: 밀기·길게 누르기도 성공으로 처리
  const hit = e.target.closest('.hit');
  if (hit && e.detail === 0 && currentCard) practiceSuccess();
});

app.addEventListener('submit', (e) => {
  if (!e.target.matches('[data-search]')) return;
  e.preventDefault();
  showResults(e.target.q.value);
});
app.addEventListener('input', (e) => { if (e.target.id === 'q' && !e.target.value) showResults(''); });
app.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointercancel', () => { pointerStart = null; clearTimeout(holdTimer); });
window.addEventListener('hashchange', route);
document.addEventListener('keydown', (e) => {
  if (!currentCard || e.target.matches('input, textarea')) return;
  if (e.key === 'ArrowRight') document.querySelector('[data-nav="next"], [data-nav="done"]')?.click();
  if (e.key === 'ArrowLeft') document.querySelector('[data-nav="prev"]')?.click();
});

applyFont();
route();
