// DigiStep365 관리자 편집 화면.
// - 언어별 자료: /admin/data/<언어>.json (빌드가 만듦)
// - 저장 안 한 변경: 이 브라우저 localStorage (언어마다 따로)
// - 저장: ① edits.json 내려받기  ② GitHub API로 i18n/<언어>/edits.json 커밋(토큰은 sessionStorage에만)
// 화면에 넣는 글은 모두 textContent로 넣는다(HTML로 해석하지 않음).

const $ = (sel, root = document) => root.querySelector(sel);
const root = $('[data-editor]');
const KEY_PENDING = (code) => `digistep365.admin.pending.${code}`;
const KEY_SETTINGS = 'digistep365.admin.settings';
const KEY_TOKEN = 'digistep365.admin.token';

const store = {
  get(k, fallback, s = localStorage) { try { const v = s.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set(k, v, s = localStorage) { try { s.setItem(k, JSON.stringify(v)); } catch { /* 저장 불가(사생활 보호 모드 등) */ } },
  del(k, s = localStorage) { try { s.removeItem(k); } catch { /* */ } },
};

/** 작은 DOM 도우미: h('p', {class:'x'}, '글', child) */
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'value') el.value = v;
    else if (k === 'checked') el.checked = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  return el;
}

const state = { code: null, data: null, pending: emptyEdits(), selected: null, cache: {} };
function emptyEdits() { return { lessons: {}, reviewed: {} }; }
const lessonById = (id) => state.data.lessons.find((l) => l.id === id);
const pendingCount = () => new Set([...Object.keys(state.pending.lessons), ...Object.keys(state.pending.reviewed)]).size;
const isPending = (id) => Boolean(state.pending.lessons[id] || id in state.pending.reviewed);

/** 한 단계에 문장이 여러 개인지 대략 살핀다(마침표·물음표 뒤에 다른 글이 이어지면). */
function manySentences(text) {
  return /[.!?。！？।](\s+|$)\S/u.test(text.replace(/(e\.g|i\.e|z\.B|z\.\s?B|p\.\s?ej|etc|vs|Nr|No|Dr|St|S\.\s?A)\./gi, '$1'));
}

async function loadLanguage(code) {
  setMsg('');
  if (!state.cache[code]) {
    const res = await fetch(`/admin/data/${encodeURIComponent(code)}.json`, { cache: 'no-store' });
    if (!res.ok) { setMsg(`자료를 불러오지 못했습니다(${res.status}).`, true); return; }
    state.cache[code] = await res.json();
  }
  state.code = code;
  state.data = state.cache[code];
  state.pending = store.get(KEY_PENDING(code), emptyEdits());
  state.selected = null;
  const settings = store.get(KEY_SETTINGS, {});
  store.set(KEY_SETTINGS, { ...settings, lang: code });
  renderList();
  renderForm();
  renderPending();
}

/* ---------- 목록 ---------- */
function renderList() {
  const filter = $('[data-filter]').value;
  const q = $('[data-search]').value.trim().toLowerCase();
  const list = $('[data-list]');
  list.replaceChildren();
  let n = 0;
  let lastCat = null;
  for (const l of state.data.lessons) {
    const reviewed = effectiveReviewed(l);
    if (filter === 'draft' && reviewed) continue;
    if (filter === 'reviewed' && !reviewed) continue;
    if (filter === 'edited' && !l.edited) continue;
    if (filter === 'pending' && !isPending(l.id)) continue;
    if (q && !`${l.title} ${l.id} ${l.slug}`.toLowerCase().includes(q)) continue;
    if (l.cat !== lastCat) { list.append(h('li', { class: 'edit__cat' }, `${String(l.ch).padStart(2, '0')} ${l.cat}`)); lastCat = l.cat; }
    const badges = [reviewed ? h('em', { class: 'b b--ok' }, '검수') : h('em', { class: 'b' }, '초안'), l.edited ? h('em', { class: 'b b--ed' }, '고침') : null, isPending(l.id) ? h('em', { class: 'b b--pend' }, '저장 안 함') : null];
    list.append(h('li', {}, h('button', { type: 'button', class: `edit__item${state.selected === l.id ? ' is-on' : ''}`, 'aria-current': state.selected === l.id ? 'true' : null, onclick: () => { state.selected = l.id; renderList(); renderForm(); if (matchMedia('(max-width: 760px)').matches) $('[data-form]').scrollIntoView({ block: 'start' }); } },
      h('span', {}, currentTitle(l)), h('small', {}, l.id), h('span', { class: 'edit__badges' }, badges))));
    n++;
  }
  $('[data-count]').textContent = `${n}개 수업`;
}

/* ---------- 현재 값(저장 안 한 변경 포함) ---------- */
const currentTitle = (l) => state.pending.lessons[l.id]?.title ?? l.title;
const currentDesc = (l) => state.pending.lessons[l.id]?.desc ?? l.desc;
const currentStep = (l, i) => state.pending.lessons[l.id]?.steps?.[i] ?? l.steps[i];
function effectiveReviewed(l) {
  if (l.id in state.pending.reviewed) return state.pending.reviewed[l.id];
  return l.reviewed;
}

/** 입력값을 원래 값과 비교해 저장 안 한 변경을 갱신한다. */
function updatePending(l, patch) {
  const cur = state.pending.lessons[l.id] ?? {};
  const next = { ...cur, ...patch, steps: { ...(cur.steps ?? {}), ...(patch.steps ?? {}) } };
  if (next.title === l.title) delete next.title;
  if (next.desc === l.desc) delete next.desc;
  for (const [i, s] of Object.entries(next.steps)) if (s.every((v, k) => v === (l.steps[i][k] ?? ''))) delete next.steps[i];
  if (!Object.keys(next.steps).length) delete next.steps;
  if (Object.keys(next).length) state.pending.lessons[l.id] = next;
  else delete state.pending.lessons[l.id];
  savePending();
}
function savePending() {
  if (pendingCount()) store.set(KEY_PENDING(state.code), state.pending);
  else store.del(KEY_PENDING(state.code));
  renderPending();
}

/* ---------- 편집 칸 ---------- */
function renderForm() {
  const box = $('[data-form]');
  box.replaceChildren();
  const l = state.selected && lessonById(state.selected);
  if (!l) { box.append(h('p', {}, '목록에서 수업을 고르세요.')); return; }
  const dir = state.data.dir;
  const field = (label, el, help) => h('label', { class: 'edit__field' }, h('span', {}, label), el, help ? h('small', {}, help) : null);
  const markDirty = () => { renderList(); };

  const title = h('input', { value: currentTitle(l), dir, maxlength: 120, oninput: (e) => { updatePending(l, { title: e.target.value.trim() || l.title }); markDirty(); } });
  const desc = h('textarea', { rows: 2, dir, maxlength: 300, oninput: (e) => { updatePending(l, { desc: e.target.value.trim() || l.desc }); } });
  desc.value = currentDesc(l);

  box.append(
    h('h2', {}, currentTitle(l)),
    h('p', { class: 'edit__meta' }, `${l.id} · 주소 ${l.path} `, h('a', { href: l.path, target: '_blank', rel: 'noopener' }, '사이트에서 보기'), l.extra ? ' · 해외용 새 수업(한국어 원문 없음)' : ''),
    field('제목', title),
    field('설명(검색 결과에 보이는 한두 문장)', desc),
  );

  const steps = h('ol', { class: 'edit__steps' });
  l.steps.forEach((_, i) => {
    const [t, hint, note] = currentStep(l, i);
    const warn = h('small', { class: 'edit__warn', hidden: !manySentences(t) }, '한 단계에는 한 문장만 쓰는 것이 원칙입니다.');
    const read = () => [ta.value.trim(), tb.value.trim(), tc.value.trim()];
    const onInput = () => {
      const v = read();
      warn.hidden = !manySentences(v[0]);
      if (!v[0]) { ta.setCustomValidity('본문은 비울 수 없습니다.'); return; }
      ta.setCustomValidity('');
      updatePending(l, { steps: { [i]: v } });
      markDirty();
    };
    const ta = h('textarea', { rows: 2, dir, maxlength: 400, required: true, oninput: onInput, 'aria-label': `${i + 1}단계 본문` });
    const tb = h('textarea', { rows: 2, dir, maxlength: 400, oninput: onInput, 'aria-label': `${i + 1}단계 도움말` });
    const tc = h('textarea', { rows: 1, dir, maxlength: 400, oninput: onInput, 'aria-label': `${i + 1}단계 알아두기` });
    ta.value = t; tb.value = hint ?? ''; tc.value = note ?? '';
    steps.append(h('li', { class: 'edit__step' },
      h('p', { class: 'edit__ref' }, l.ko[i] ? [h('b', {}, '한국어 '), l.ko[i]] : null),
      state.data.lessons && l.en?.[i] ? h('p', { class: 'edit__ref' }, h('b', {}, '영어 '), l.en[i]) : null,
      field('본문(한 문장)', ta), warn, field('도움말(선택)', tb), field('알아두기(선택)', tc)));
  });
  box.append(h('h3', {}, `단계 ${l.steps.length}개`), steps);

  // 검수 기록
  const rv = effectiveReviewed(l);
  const today = new Date().toISOString().slice(0, 10);
  const by = h('input', { value: rv?.by ?? '', maxlength: 80, autocomplete: 'name' });
  const date = h('input', { type: 'date', value: rv?.date ?? today });
  const device = h('input', { value: rv?.device ?? '', maxlength: 80, placeholder: '예: Galaxy S26 · One UI 9.0' });
  const ok = h('input', { type: 'checkbox', checked: Boolean(rv) });
  const note = h('small', {});
  const syncReview = () => {
    const on = ok.checked;
    [by, date, device].forEach((x) => { x.disabled = !on; });
    if (on && (!by.value.trim() || !date.value)) { note.textContent = '검수자 이름과 날짜를 적어야 검수 완료로 저장됩니다.'; delete state.pending.reviewed[l.id]; savePending(); renderList(); return; }
    note.textContent = on ? '이 수업은 다음 빌드부터 검색에 노출되고 사이트맵에 들어갑니다.' : '';
    const want = on ? { by: by.value.trim(), date: date.value, device: device.value.trim() } : null;
    const same = (a, b) => (a === null && b === null) || (a && b && a.by === b.by && a.date === b.date && (a.device ?? '') === (b.device ?? ''));
    if (same(want, l.reviewed)) delete state.pending.reviewed[l.id];
    else state.pending.reviewed[l.id] = want;
    savePending();
    renderList();
  };
  [ok, by, date, device].forEach((x) => x.addEventListener(x === ok ? 'change' : 'input', syncReview));
  [by, date, device].forEach((x) => { x.disabled = !rv; });
  box.append(h('fieldset', { class: 'edit__review' }, h('legend', {}, '원어민 검수'),
    h('label', { class: 'edit__check' }, ok, ' 실제 갤럭시에서 모든 단계를 확인했습니다(검수 완료)'),
    h('label', { class: 'edit__field' }, h('span', {}, '검수자'), by),
    h('label', { class: 'edit__field' }, h('span', {}, '날짜'), date),
    h('label', { class: 'edit__field' }, h('span', {}, '확인한 기기'), device), note,
    l.inRepo ? h('small', {}, '저장소 review.js에도 검수 기록이 있습니다. 체크를 풀면 그 기록을 취소합니다.') : null));

  if (isPending(l.id)) box.append(h('p', {}, h('button', { type: 'button', class: 'btn', onclick: () => { delete state.pending.lessons[l.id]; delete state.pending.reviewed[l.id]; savePending(); renderList(); renderForm(); } }, '이 수업의 변경 되돌리기')));
}

/* ---------- 저장 ---------- */
function renderPending() {
  const n = pendingCount();
  $('[data-pending]').textContent = n ? `${state.data.name}: 저장 안 한 변경이 ${n}개 수업에 있습니다(이 브라우저에만 임시 저장됨).` : '저장 안 한 변경이 없습니다.';
  for (const sel of ['[data-download]', '[data-discard]', '[data-commit]']) $(sel).disabled = !n;
}

/** 기존 edits.json에 저장 안 한 변경을 합친다. */
function merge(existing, pending) {
  const out = { lessons: { ...(existing?.lessons ?? {}) }, reviewed: { ...(existing?.reviewed ?? {}) } };
  for (const [id, e] of Object.entries(pending.lessons)) {
    const old = out.lessons[id] ?? {};
    out.lessons[id] = { ...old, ...e, ...(old.steps || e.steps ? { steps: { ...(old.steps ?? {}), ...(e.steps ?? {}) } } : {}) };
  }
  for (const [id, r] of Object.entries(pending.reviewed)) out.reviewed[id] = r;
  return out;
}
const pretty = (o) => `${JSON.stringify(o, null, 2)}\n`;

async function publishedEdits() {
  try {
    const res = await fetch(`/${state.data.file}`, { cache: 'no-store' });
    return res.ok ? await res.json() : emptyEdits();
  } catch { return emptyEdits(); }
}

async function download() {
  const merged = merge(await publishedEdits(), state.pending);
  const url = URL.createObjectURL(new Blob([pretty(merged)], { type: 'application/json' }));
  const a = h('a', { href: url, download: 'edits.json' });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setMsg(`edits.json을 내려받았습니다. 저장소의 ${state.data.file} 자리에 넣고 커밋하면 반영됩니다.`);
}

const b64encode = (str) => { const bytes = new TextEncoder().encode(str); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(bin); };
const b64decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), (c) => c.charCodeAt(0)));

async function commit() {
  const repo = $('[data-repo]').value.trim();
  const branch = $('[data-branch]').value.trim();
  const token = $('[data-token]').value.trim();
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || !branch) { setMsg('저장소(소유자/이름)와 브랜치를 확인하세요.', true); return; }
  if (!token) { setMsg('개인 액세스 토큰을 넣으세요. 없으면 파일 내려받기를 쓰세요.', true); return; }
  store.set(KEY_SETTINGS, { ...store.get(KEY_SETTINGS, {}), repo, branch });
  store.set(KEY_TOKEN, token, sessionStorage);
  const api = `https://api.github.com/repos/${repo}/contents/${state.data.file}`;
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  const btn = $('[data-commit]');
  btn.disabled = true;
  setMsg('GitHub에 저장하는 중…');
  try {
    let sha;
    let existing = emptyEdits();
    const get = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers, cache: 'no-store' });
    if (get.ok) { const j = await get.json(); sha = j.sha; existing = JSON.parse(b64decode(j.content)); }
    else if (get.status !== 404) throw new Error(explain(get.status));
    const merged = merge(existing, state.pending);
    const n = pendingCount();
    const put = await fetch(api, {
      method: 'PUT', headers,
      body: JSON.stringify({ message: `관리자 편집: ${state.data.name} 수업 ${n}개 수정·검수`, content: b64encode(pretty(merged)), branch, ...(sha ? { sha } : {}) }),
    });
    if (!put.ok) throw new Error(explain(put.status));
    applyLocally();
    setMsg(`저장했습니다(${n}개 수업). 사이트가 다시 만들어져 1~3분 뒤 반영됩니다.`);
  } catch (e) {
    setMsg(`저장하지 못했습니다: ${e.message} 변경 내용은 이 브라우저에 그대로 남아 있습니다.`, true);
  } finally {
    renderPending();
  }
}
function explain(status) {
  if (status === 401) return '토큰이 올바르지 않거나 만료되었습니다.';
  if (status === 403) return '이 토큰에 저장소 쓰기 권한(Contents: Read and write)이 없습니다.';
  if (status === 404) return '저장소나 브랜치를 찾지 못했습니다.';
  if (status === 409) return '다른 사람이 먼저 저장했습니다. 다시 시도하세요.';
  if (status === 422) return 'GitHub가 요청을 거절했습니다(브랜치 이름을 확인하세요).';
  return `GitHub 오류 ${status}.`;
}

/** 저장에 성공하면 화면 자료에 반영하고 저장 안 한 변경을 비운다. */
function applyLocally() {
  for (const [id, e] of Object.entries(state.pending.lessons)) {
    const l = lessonById(id);
    if (!l) continue;
    if (e.title) l.title = e.title;
    if (e.desc) l.desc = e.desc;
    for (const [i, s] of Object.entries(e.steps ?? {})) l.steps[i] = s;
    l.edited = true;
  }
  for (const [id, r] of Object.entries(state.pending.reviewed)) { const l = lessonById(id); if (l) l.reviewed = r; }
  state.pending = emptyEdits();
  savePending();
  renderList();
  renderForm();
}

function setMsg(text, bad = false) {
  const m = $('[data-msg]');
  m.textContent = text;
  m.classList.toggle('is-bad', bad);
}

/* ---------- 시작 ---------- */
if (root) {
  const settings = store.get(KEY_SETTINGS, {});
  if (settings.repo) $('[data-repo]').value = settings.repo;
  if (settings.branch) $('[data-branch]').value = settings.branch;
  $('[data-token]').value = store.get(KEY_TOKEN, '', sessionStorage);
  const langSel = $('[data-lang]');
  if (settings.lang && [...langSel.options].some((o) => o.value === settings.lang)) langSel.value = settings.lang;
  langSel.addEventListener('change', () => {
    if (pendingCount() && !confirm('이 언어에 저장 안 한 변경이 있습니다. 이 브라우저에 그대로 남겨 두고 다른 언어로 넘어갈까요?')) { langSel.value = state.code; return; }
    loadLanguage(langSel.value);
  });
  $('[data-filter]').addEventListener('change', renderList);
  $('[data-search]').addEventListener('input', renderList);
  $('[data-download]').addEventListener('click', download);
  $('[data-commit]').addEventListener('click', commit);
  $('[data-discard]').addEventListener('click', () => {
    if (!confirm(`${state.data.name}의 저장 안 한 변경을 모두 버릴까요?`)) return;
    state.pending = emptyEdits(); savePending(); renderList(); renderForm(); setMsg('변경을 버렸습니다.');
  });
  loadLanguage(langSel.value);
}

export { merge, manySentences };
