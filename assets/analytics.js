// DigiStep365 optional analytics (Korean site + global pages).
// Added to a page only when a GA4 ID is configured, and loaded only after the visitor taps "Accept".
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
    // Korean practice app uses #/ addresses: count each screen as a page view.
    window.addEventListener('hashchange', () => window.gtag('event', 'page_view', { page_location: location.href, page_title: document.title }));
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
