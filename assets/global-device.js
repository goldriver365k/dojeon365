// DigiStep365 global pages: "My phone" picker (series → model → One UI) and support badges, in the page language.
// Optional: nothing is forced. Saved only in this browser. The site never guesses the model.
import { SERIES, MODELS, ONEUI, BASE_ONEUI, modelOf, supportFor } from '../data/devices.js?v=20261126.1027';
import { metaOf } from '../data/galaxy/meta.js?v=20261126.1027';
import { DEVICE_STRINGS } from '../i18n/device-strings.js?v=20261126.1027';

const LANG = document.documentElement.lang in DEVICE_STRINGS ? document.documentElement.lang : 'en';
const D = DEVICE_STRINGS[LANG];
const KEY = 'digistep365.global.v1';
const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } };
const write = (st) => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch { /* private mode */ } };
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const modelName = (m) => D.other[m.id] ?? D.words.reduce((s, [a, b]) => s.replaceAll(a, b), m.name);
const seriesName = (s) => D.seriesNames[s.id] ?? s.en;

function label(d) {
  if (!d || (!d.model && !d.series && !d.oneui)) return '';
  const m = modelOf(d.model);
  const s = SERIES.find((x) => x.id === d.series);
  return `${m ? modelName(m) : s ? D.seriesUnknown(seriesName(s)) : D.modelUnknown} · ${d.oneui ? `One UI ${d.oneui}` : D.versionUnknown}`;
}

function support(id, d) {
  const s = supportFor(metaOf(id), d);
  if (!s) return null;
  const meta = metaOf(id).support ?? {};
  const tooOld = meta.minOneUI && d.oneui && Number.parseFloat(d.oneui) < Number.parseFloat(meta.minOneUI);
  const text = s.level === 'no' && tooOld ? D.text.min(meta.minOneUI) : D.text[s.level];
  return { level: s.level, label: D.level[s.level], text };
}

function render() {
  const d = read().device ?? null;
  const main = document.querySelector('[data-lesson]');
  const box = document.querySelector('[data-support]');
  if (main && box) {
    const s = support(main.dataset.lesson, d);
    box.hidden = !s;
    if (s) { box.className = `support support--${s.level}`; box.innerHTML = `<strong>${s.label}</strong> ${D.on} ${esc(label(d))}: ${esc(s.text)}. <a href="/${LANG}/galaxy/#my-phone">${D.change}</a>`; }
  }
  document.querySelectorAll('a[data-id]').forEach((a) => {
    a.querySelector('.sup')?.remove();
    const s = support(a.dataset.id, d);
    if (s) a.querySelector('span')?.insertAdjacentHTML('beforebegin', `<em class="sup sup--${s.level}" title="${esc(s.text)}">${s.label}</em>`);
  });
  const now = document.querySelector('[data-device-now]');
  if (now) now.textContent = label(d) || D.none;
}

function picker() {
  const form = document.querySelector('[data-device-form]');
  if (!form) return;
  const [series, model, oneui] = ['series', 'model', 'oneui'].map((n) => form.elements[n]);
  const d = read().device ?? {};
  series.innerHTML = `<option value="">${D.dontKnow}</option>${SERIES.map((s) => `<option value="${s.id}">${esc(seriesName(s))}</option>`).join('')}`;
  oneui.innerHTML = `<option value="">${D.dontKnow}</option>${ONEUI.map((o) => `<option value="${o.v}">One UI ${o.v} (Android ${o.android})${o.v === BASE_ONEUI ? ` — ${D.baseVersion}` : ''}</option>`).join('')}`;
  const fillModels = () => {
    const list = MODELS.filter((m) => m.series === series.value);
    model.disabled = !list.length;
    model.innerHTML = `<option value="">${list.length ? D.dontKnowWhich : D.chooseSeries}</option>${list.map((m) => `<option value="${m.id}">${esc(modelName(m))}${m.code ? ` (${m.code}…)` : ''}</option>`).join('')}`;
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
    form.querySelector('[data-saved]').textContent = D.saved;
  });
  form.querySelector('[data-clear]').addEventListener('click', () => {
    const next = read(); next.device = null; write(next);
    series.value = ''; fillModels(); oneui.value = '';
    render();
    form.querySelector('[data-saved]').textContent = D.cleared;
  });
}

picker();
render();

// 수업 화면의 ‘바꾸기’ 링크(#my-phone)로 왔으면 고르기 상자를 펼쳐 둔다
const pick = document.querySelector('[data-device-pick]');
const openPick = () => { if (pick && location.hash === '#my-phone') { pick.open = true; pick.scrollIntoView({ block: 'start' }); } };
openPick();
window.addEventListener('hashchange', openPick);
