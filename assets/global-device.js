// DigiStep365 global pages: "My phone" picker (series → model → One UI) and support badges.
// Optional: nothing is forced. Saved only in this browser. The site never guesses the model.
import { SERIES, MODELS, ONEUI, BASE_ONEUI, modelOf, supportFor } from '../data/devices.js?v=20261125.2111';
import { metaOf } from '../data/galaxy/meta.js?v=20261125.2111';

const KEY = 'digistep365.global.v1';
const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } };
const write = (st) => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch { /* private mode */ } };

const EN_WORDS = [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']];
const EN_OTHER = {
  's-old': 'Other S series (S22 and earlier, FE)', 'a-old': 'Other A series', 'm-any': 'A Galaxy M series phone', 'f-any': 'A Galaxy F series phone',
  'note-old': 'Other Note phones', 'xcover-old': 'Other XCover phones', etc: 'A Galaxy phone not in this list',
};
const modelName = (m) => EN_OTHER[m.id] ?? EN_WORDS.reduce((s, [a, b]) => s.replaceAll(a, b), m.name);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function label(d) {
  if (!d || (!d.model && !d.series && !d.oneui)) return '';
  const m = modelOf(d.model);
  const s = SERIES.find((x) => x.id === d.series);
  return `${m ? modelName(m) : s ? `${s.en} (model unknown)` : 'Model unknown'} · ${d.oneui ? `One UI ${d.oneui}` : 'One UI version unknown'}`;
}

const LEVEL = { ok: 'Supported', diff: 'Check needed', check: 'Check needed', no: 'Not supported' };
function support(id, d) {
  const s = supportFor(metaOf(id), d);
  if (!s) return null;
  const meta = metaOf(id).support ?? {};
  const text = s.level === 'ok' ? 'Checked against the official manual'
    : s.level === 'diff' ? 'Menu names may differ on this One UI version'
      : s.level === 'check' ? 'Not checked for this model yet'
        : meta.minOneUI && d.oneui && Number.parseFloat(d.oneui) < Number.parseFloat(meta.minOneUI) ? `Needs One UI ${meta.minOneUI} or later` : 'Not supported on this model';
  return { level: s.level, label: LEVEL[s.level], text };
}

function render() {
  const st = read();
  const d = st.device ?? null;
  // lesson page
  const main = document.querySelector('[data-lesson]');
  const box = document.querySelector('[data-support]');
  if (main && box) {
    const s = support(main.dataset.lesson, d);
    box.hidden = !s;
    if (s) { box.className = `support support--${s.level}`; box.innerHTML = `<strong>${s.label}</strong> on ${esc(label(d))}: ${esc(s.text)}. <a href="/en/galaxy/#my-phone">Change</a>`; }
  }
  // lesson list badges
  document.querySelectorAll('a[data-id]').forEach((a) => {
    a.querySelector('.sup')?.remove();
    const s = support(a.dataset.id, d);
    if (s) a.querySelector('span')?.insertAdjacentHTML('beforebegin', `<em class="sup sup--${s.level}" title="${esc(s.text)}">${s.label}</em>`);
  });
  const now = document.querySelector('[data-device-now]');
  if (now) now.textContent = label(d) || 'Not chosen · showing common instructions';
}

function picker() {
  const form = document.querySelector('[data-device-form]');
  if (!form) return;
  const [series, model, oneui] = ['series', 'model', 'oneui'].map((n) => form.elements[n]);
  const st = read();
  const d = st.device ?? {};
  series.innerHTML = `<option value="">I don’t know</option>${SERIES.map((s) => `<option value="${s.id}">${esc(s.en)}</option>`).join('')}`;
  oneui.innerHTML = `<option value="">I don’t know</option>${ONEUI.map((o) => `<option value="${o.v}">One UI ${o.v} (Android ${o.android})${o.v === BASE_ONEUI ? ' — lessons written for this' : ''}</option>`).join('')}`;
  const fillModels = () => {
    const list = MODELS.filter((m) => m.series === series.value);
    model.disabled = !list.length;
    model.innerHTML = `<option value="">${list.length ? 'I don’t know which one' : 'Choose a series first'}</option>${list.map((m) => `<option value="${m.id}">${esc(modelName(m))}${m.code ? ` (${m.code}…)` : ''}</option>`).join('')}`;
  };
  series.value = d.series ?? '';
  fillModels();
  model.value = d.model ?? '';
  oneui.value = d.oneui ?? '';
  series.addEventListener('change', fillModels);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const next = read();
    next.device = series.value || oneui.value ? { series: series.value || null, model: model.value || null, oneui: oneui.value || null } : null;
    write(next);
    render();
    form.querySelector('[data-saved]').textContent = 'Saved. Each lesson now shows whether it works on your phone.';
  });
  form.querySelector('[data-clear]').addEventListener('click', () => {
    const next = read(); next.device = null; write(next);
    series.value = ''; fillModels(); oneui.value = '';
    render();
    form.querySelector('[data-saved]').textContent = 'Cleared. Showing common instructions.';
  });
}

picker();
render();
