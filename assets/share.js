// DigiStep365 footer: share icons (KakaoTalk, Facebook, WhatsApp, copy link, QR code, phone share) and the copyright year.
// Nothing is sent anywhere until the visitor taps a button. No third-party script is loaded
// (KakaoTalk uses the phone's share sheet when available; otherwise the link is copied to paste into KakaoTalk).
(() => {
  const root = document.querySelector('[data-share-root]');
  if (!root) return;
  const url = root.dataset.shareUrl || 'https://digistep365.com/';
  const text = root.dataset.shareText || 'DigiStep365';
  const toastEl = document.querySelector('[data-toast]');
  const dialog = document.querySelector('[data-qr]');

  // ⓒ year always follows the visitor's clock
  document.querySelectorAll('[data-year]').forEach((n) => { n.textContent = String(new Date().getFullYear()); });

  let toastTimer;
  const toast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { toastEl.hidden = true; }, 4000);
  };
  const copy = async (msg) => {
    try { await navigator.clipboard.writeText(url); toast(msg); return true; } catch { /* fall back */ }
    const t = document.createElement('textarea');
    t.value = url; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    t.remove();
    toast(ok ? msg : url);
    return ok;
  };
  const open = (href) => {
    // ('noopener' would make window.open return null even when it worked, so cut the link to this page by hand)
    const w = window.open(href, '_blank', 'width=600,height=640');
    if (w) { try { w.opener = null; } catch { /* cross-origin */ } } else location.href = href; // popup blocked: go there in this tab
  };
  const nativeShare = async () => {
    if (!navigator.share) return false;
    try { await navigator.share({ title: 'DigiStep365', text, url }); } catch { /* cancelled */ }
    return true;
  };
  const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));

  const actions = {
    kakao: async () => { if (isMobile() && (await nativeShare())) return; copy(root.dataset.msgKakao); },
    facebook: () => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`),
    whatsapp: () => open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`),
    copy: () => copy(root.dataset.msgCopied),
    qr: () => { if (dialog?.showModal) dialog.showModal(); else open('/assets/qr-digistep365.svg'); },
    more: async () => { if (!(await nativeShare())) copy(root.dataset.msgCopied); },
  };
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-share]');
    if (b && actions[b.dataset.share]) actions[b.dataset.share]();
  });
  dialog?.addEventListener('click', (e) => {
    if (e.target.closest('[data-qr-close]') || e.target === dialog) dialog.close();
  });
})();
