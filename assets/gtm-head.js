// Google Tag Manager with Consent Mode (Korean site).
// Runs before gtm.js: analytics cookies stay OFF until the visitor taps "좋아요" (then analytics.js grants them).
// Before consent Google receives only cookieless pings. Ads storage is never granted.
(() => {
  let choice = null;
  try { choice = localStorage.getItem('digistep365.consent'); } catch { /* private mode */ }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: choice === 'yes' ? 'granted' : 'denied',
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    wait_for_update: 500,
  });
  window.gtag('js', new Date());
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  window.__dsGtmHead = true;
})();
