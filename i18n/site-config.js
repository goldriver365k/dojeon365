// Site-wide search/analytics settings (Korean site + global pages).
// Leave a value empty to keep that service OFF (nothing is added, nothing is loaded).
//
// Two ways to set them (either works):
//   1) Type the values below and commit.
//   2) Netlify → Site configuration → Environment variables:
//        GA4_ID                    e.g. G-XXXXXXXXXX
//        GOOGLE_SITE_VERIFICATION  the content="..." value of Search Console's HTML tag
//        GTM_ID                    e.g. GTM-XXXXXXX (Google Tag Manager container)
//      then redeploy. Environment variables win over the values below.
const RAW = {
  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. Loaded only after the visitor taps "Accept".
  ga4Id: '',
  // Google Tag Manager container ID, e.g. 'GTM-XXXXXXX'. Also loaded only after "Accept".
  // If both are set, GTM is used and the GA4 tag should be set up inside GTM.
  gtmId: 'GTM-KQXTB99T',
  // Google Search Console HTML-tag verification code (the content="..." value only).
  searchConsole: '',
};

const env = (typeof process !== 'undefined' && process.env) || {};
/** Accepts the bare code, or the whole <meta ...> tag pasted from Search Console. */
export function cleanVerification(v) {
  const s = String(v ?? '').trim();
  const m = s.match(/content\s*=\s*["']([^"']+)["']/i);
  const code = (m ? m[1] : s).trim();
  return /^[A-Za-z0-9_-]{10,100}$/.test(code) ? code : '';
}
/** Only a real GA4 measurement ID (G-…) is used; anything else keeps analytics off. */
export function cleanGa4(v) {
  const s = String(v ?? '').trim().toUpperCase();
  return /^G-[A-Z0-9]{4,20}$/.test(s) ? s : '';
}

/** Only a real GTM container ID (GTM-…) is used. Accepts the pasted <script> snippet too. */
export function cleanGtm(v) {
  const m = String(v ?? '').toUpperCase().match(/GTM-[A-Z0-9]{4,12}/);
  return m ? m[0] : '';
}

export const SITE_CONFIG = {
  gtmId: cleanGtm(env.GTM_ID || RAW.gtmId),
  ga4Id: cleanGa4(env.GA4_ID || RAW.ga4Id),
  searchConsole: cleanVerification(env.GOOGLE_SITE_VERIFICATION || RAW.searchConsole),
};
