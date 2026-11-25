// DigiStep365 global pages: text size, one step at a time, start over, show all steps, listen.
// Without JavaScript every step is visible, so the page works and can be indexed as plain text.
(() => {
  const KEY = 'digistep365.global.v1';
  let st = {};
  try { st = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { st = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch { /* private mode */ } };
  const root = document.documentElement;
  const setSize = (s) => {
    root.dataset.size = s;
    document.querySelectorAll('[data-size]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === s)));
  };
  setSize(st.size || 'normal');
  document.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-size]');
    if (b) { st.size = b.dataset.size; save(); setSize(st.size); }
  });

  const list = document.querySelector('[data-steps]');
  if (!list) return;
  const steps = [...list.children];
  const bar = document.querySelector('.bar');
  const tools = document.querySelector('.tools');
  const prev = bar.querySelector('[data-prev]');
  const next = bar.querySelector('[data-next]');
  const finish = document.querySelector('[data-finish]');
  const allBtn = tools.querySelector('[data-all]');
  const id = location.pathname;
  st.pos = st.pos || {};
  let i = Math.min(st.pos[id] || 0, steps.length - 1);
  let all = false;
  bar.hidden = false; tools.hidden = false;
  document.body.classList.add('js-one');

  function show(focus) {
    steps.forEach((s, k) => s.classList.toggle('is-on', k === i));
    prev.disabled = i === 0;
    const last = i === steps.length - 1;
    next.textContent = last ? next.dataset.doneLabel : next.dataset.nextLabel;
    st.pos[id] = i; save();
    if (focus) { const h = steps[i].querySelector('h2'); h.tabIndex = -1; h.focus(); }
  }
  prev.addEventListener('click', () => { if (i > 0) { i--; finish.hidden = true; show(true); } });
  next.addEventListener('click', () => {
    if (i < steps.length - 1) { i++; show(true); return; }
    finish.hidden = false; st.pos[id] = 0; save(); finish.tabIndex = -1; finish.focus();
  });
  tools.querySelector('[data-restart]').addEventListener('click', () => { i = 0; finish.hidden = true; if (all) allBtn.click(); show(true); });
  allBtn.addEventListener('click', () => {
    all = !all;
    allBtn.setAttribute('aria-pressed', String(all));
    document.body.classList.toggle('js-one', !all);
    bar.hidden = all;
  });
  bar.querySelector('[data-listen]').addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const s = steps[i];
    const text = [s.querySelector('.step__no'), s.querySelector('h2'), s.querySelector('.step__hint')].filter(Boolean).map((n) => n.textContent).join('. ');
    const u = new SpeechSynthesisUtterance(text);
    u.lang = ({ en: 'en-US', es: 'es-ES', pt: 'pt-BR' })[document.documentElement.lang] || document.documentElement.lang; u.rate = 0.9;
    speechSynthesis.speak(u);
  });
  list.addEventListener('click', (e) => {
    if (!e.target.closest('[data-hit]') || all) return;
    if (!e.target.closest('.step').classList.contains('is-on')) return;
    next.click();
  });
  document.addEventListener('keydown', (e) => {
    if (all) return;
    if (e.key === 'ArrowRight') next.click();
    if (e.key === 'ArrowLeft') prev.click();
  });
  show(false);
})();

// Optional analytics: loaded only when a GA4 ID is configured AND the visitor accepts.
(() => {
  const id = document.querySelector('meta[name="ga4-id"]')?.content;
  if (!id) return;
  const KEY = 'digistep365.consent';
  const get = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const set = (v) => { try { localStorage.setItem(KEY, v); } catch { /* ignore */ } };
  const load = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, { anonymize_ip: true });
    const s = document.createElement('script');
    s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(s);
  };
  const banner = document.querySelector('[data-consent]');
  const choice = get();
  if (choice === 'yes') load();
  else if (!choice && banner) banner.hidden = false;
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-consent-yes]')) { set('yes'); banner.hidden = true; load(); }
    if (e.target.closest('[data-consent-no]')) { set('no'); banner.hidden = true; }
    if (e.target.closest('[data-consent-reset]')) { try { localStorage.removeItem(KEY); } catch { /* ignore */ } location.reload(); }
  });
})();
