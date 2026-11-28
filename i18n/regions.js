// Country (region) settings — kept separate from language settings.
// Korean site (ko) = Korea: Galaxy + iPhone + KakaoTalk (+ Korean life courses). Every global language site = GLOBAL: Galaxy + iPhone + WhatsApp.
// iPhone lessons are for every region; a language shows them once that language's lesson text exists (build-iphone.mjs).
// A visitor's language choice never changes the region's courses: the Korean site never shows WhatsApp lessons,
// and global sites never show KakaoTalk lessons. (A Korean-language version for overseas visitors is not built.)
export const REGION_OF = { ko: 'KR' };
export const regionOf = (lang) => REGION_OF[lang] ?? 'GLOBAL';
export const COURSES_BY_REGION = {
  KR: ['galaxy', 'iphone', 'kakaotalk', 'scam', 'digital', 'ai', 'creative', 'career'],
  GLOBAL: ['galaxy', 'iphone', 'whatsapp'],
};
export const hasCourse = (lang, course) => COURSES_BY_REGION[regionOf(lang)].includes(course);
