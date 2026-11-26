// DigiStep365 optional analytics (Korean site + global pages).
// Added to a page only when a GTM container or GA4 ID is configured, and loaded only after the visitor taps "Accept".
(() => {
  const gtm = document.querySelector('meta[name="gtm-id"]')?.content;
  const id = document.querySelector('meta[name="ga4-id"]')?.content;
  if (!gtm && !id) return;
  const KEY = 'digistep365.consent';
  const get = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const set = (v) => { try { localStorage.setItem(KEY, v); } catch { /* ignore */ } };
  let loaded = false;
  const load = () => {
    if (loaded) return; loaded = true;
    if (window.__dsGtmHead) {
      // GTM is already on the page (Consent Mode): just allow analytics cookies.
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
      return;
    }
    window.dataLayer = window.dataLayer || [];
    if (gtm) {
      // Google Tag Manager: set up the GA4 tag (and others) inside the GTM container.
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      // Korean practice app uses #/ addresses: GTM's "History change" trigger sees these; this event is a fallback.
      window.addEventListener('hashchange', () => window.dataLayer.push({ event: 'virtual_page_view', page_location: location.href, page_title: document.title }));
      const g = document.createElement('script');
      g.async = true; g.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtm)}`;
      document.head.appendChild(g);
      return;
    }
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
  if (window.__dsGtmHead) window.addEventListener('hashchange', () => window.dataLayer.push({ event: 'virtual_page_view', page_location: location.href, page_title: document.title }));
  else if (!choice && banner) banner.hidden = false;
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-consent-yes]')) { set('yes'); banner.hidden = true; load(); }
    if (e.target.closest('[data-consent-no]')) { set('no'); banner.hidden = true; }
    if (e.target.closest('[data-consent-reset]')) { try { localStorage.removeItem(KEY); } catch { /* ignore */ } location.reload(); }
  });
})();
