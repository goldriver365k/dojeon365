// 내 아이폰 선택 — 기종·iOS 버전을 고르면 기능 표시와 수업 목록(기종에 없는 수업은 흐리게)을 바꾼다.
// 선택은 이 기기 브라우저에만 저장(localStorage). 고르지 않아도 모든 수업을 볼 수 있다.
(() => {
  const root = document.querySelector('[data-iphone-pick]');
  if (!root) return;
  const KEY = 'digistep365.iphone.v1';
  const models = JSON.parse(root.dataset.models);
  const order = JSON.parse(root.dataset.ios);
  const L = JSON.parse(root.dataset.labels);
  const ko = root.dataset.lang === 'ko';
  const $m = root.querySelector('[data-ip-model]');
  const $i = root.querySelector('[data-ip-ios]');
  const $out = root.querySelector('[data-ip-out]');
  const get = () => { try { return JSON.parse(localStorage.getItem(KEY)) ?? {}; } catch { return {}; } };
  const set = (v) => { try { if (v) localStorage.setItem(KEY, JSON.stringify(v)); else localStorage.removeItem(KEY); } catch { /* 저장 안 돼도 화면은 동작 */ } };
  const idx = (v) => order.indexOf(v);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /** 이 수업을 고른 기종·버전에서 쓸 수 있나? (모르면 true) */
  function fits(req, m, ios) {
    if (!m) return true;
    if (req.feature && !m.f.includes(req.feature)) return false;
    if (req.port && m.port !== req.port) return false;
    if (req.only && !req.only.includes(m.id)) return false;
    const v = ios && ios !== 'unknown' ? ios : m.max;
    if (req.ios && idx(v) < idx(req.ios)) return false;
    return true;
  }
  function apply() {
    const s = get();
    const m = models.find((x) => x.id === s.model) ?? null;
    // iOS 목록: 고른 기종에서 쓸 수 있는 버전만
    for (const o of $i.options) if (o.value && o.value !== 'unknown') o.disabled = !!m && (idx(o.value) < idx(m.min) || idx(o.value) > idx(m.max));
    $m.value = s.model ?? '';
    $i.value = s.ios ?? '';
    if (m) {
      const all = Object.keys(L).filter((k) => !k.startsWith('port:') && !['has', 'hasnot', 'choose'].includes(k));
      const has = m.f.map((k) => L[k]).concat(L[`port:${m.port}`] ?? []);
      const not = all.filter((k) => !m.f.includes(k)).map((k) => L[k]);
      $out.innerHTML = `<p><b>${esc(m.n)}</b>${s.ios && s.ios !== 'unknown' ? ` · iOS ${esc(s.ios)}` : ''}</p><p>${esc(L.has)}: ${has.map(esc).join(', ')}</p><p class="hint">${esc(L.hasnot)}: ${not.map(esc).join(', ')}</p>`;
    } else $out.textContent = '';
    for (const li of document.querySelectorAll('[data-ip-req]')) {
      const ok = fits(JSON.parse(li.dataset.ipReq || '{}'), m, s.ios);
      li.classList.toggle('is-na', !ok);
      li.title = ok ? '' : ko ? '고른 기종·버전에는 이 기능이 없어요' : 'Not available on the iPhone you chose';
    }
  }
  $m.addEventListener('change', () => {
    if ($m.value === 'unknown') { root.querySelector('#how-model').open = true; set({ ...get(), model: '' }); apply(); return; }
    const m = models.find((x) => x.id === $m.value);
    const s = get();
    const ios = m && s.ios && s.ios !== 'unknown' && (idx(s.ios) < idx(m.min) || idx(s.ios) > idx(m.max)) ? '' : s.ios;
    set({ model: $m.value, ios: ios ?? '' }); apply();
  });
  $i.addEventListener('change', () => {
    if ($i.value === 'unknown') root.querySelector('#how-ios').open = true;
    set({ ...get(), ios: $i.value }); apply();
  });
  root.querySelector('[data-ip-common]').addEventListener('click', () => { set(null); apply(); document.querySelector('.cat')?.scrollIntoView({ behavior: 'smooth' }); });
  apply();
})();
