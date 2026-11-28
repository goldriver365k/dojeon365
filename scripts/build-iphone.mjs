// 아이폰 사용법(국내·해외 공통) — data/iphone/catalog.json → 과정 페이지·관리자 화면
//
// 원칙(작업지시서 2026-11-28)
// - 한국어 사이트와 모든 해외 사이트에 적용한다(i18n/regions.js). 언어별 글이 있는 언어부터 페이지를 만든다(지금: 한국어·영어).
// - 교육 그림은 실제 아이폰에서 캡처한 화면만 쓴다(그 언어로 설정한 아이폰). 코드로 그린 화면·AI 생성 화면은 쓰지 않는다.
//   실제 캡처 이미지·이미지 기록(기종·iOS·국가·언어·출처·캡처일·검수일·사용 권한)·검수가 모두 있는 수업만 공개한다.
// - 공개 전 수업은 목차에 ‘준비 중’으로만 보이고 수업 페이지·사이트맵이 없다. 과정 첫 화면(내 아이폰 선택)은 늘 있다.
//   공개 수업이 하나도 없으면 과정 첫 화면은 검색에서 빼 둔다(noindex, 사이트맵 제외).
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { CHAPTERS as OUTLINE } from '../data/iphone/outline.mjs';
import { STEPS as STEPS_ESS } from '../data/iphone/steps-essential.mjs';
import { SCREENS as SCREENS_ESS } from '../data/iphone/screens-essential.mjs';
import { MORE_STEPS, MORE_SCREENS } from '../data/iphone/more.mjs';
import { KO_SCREEN } from '../data/iphone/ko-screen.js';
import { renderIphone, setIpLang, setIpModel } from '../assets/iphone-screens.js';
import { IPHONE_MODELS, IOS_VERSIONS, SERIES, FEATURE_LABELS, PORT_LABELS, MODELS_LAST_CHECKED } from '../data/iphone/models.js';
import { STATUS, PUBLIC_STATUS, adminPage } from './build-kakaotalk.mjs';

/** 필수 100개 + 필수 외 원고 */
const STEPS = { ...STEPS_ESS, ...MORE_STEPS };
const SCREENS = { ...SCREENS_ESS, ...MORE_SCREENS };

export const CATALOG_FILE = new URL('../data/iphone/catalog.json', import.meta.url);
const ROOT = new URL('../', import.meta.url);
/* ---------- 다른 언어: data/iphone/i18n/<lang>.txt (번호|번역, keys.txt와 같은 번호) ---------- */
const I18N_DIR = new URL('../data/iphone/i18n/', import.meta.url);
const IPI = {};
function loadI18n() {
  if (!existsSync(new URL('keys.txt', I18N_DIR))) return;
  const split = (x) => [x.slice(0, x.indexOf('|')), x.slice(x.indexOf('|') + 1)];
  const keys = new Map(readFileSync(new URL('keys.txt', I18N_DIR), 'utf8').trim().split('\n').map(split)); const en = new Map(readFileSync(new URL('en.txt', I18N_DIR), 'utf8').trim().split('\n').map(split));
  const enWords = new Set([...en].filter(([n]) => keys.get(n) === '#w').map(([, v]) => v));
  // 화면 글자 줄(=English|번역)은 영어 낱말에 | 가 들어 있을 수 있어, 알려진 영어 낱말이 되는 자리에서 나눈다
  const splitWord = (x) => { for (let i = x.indexOf('|'); i > 0; i = x.indexOf('|', i + 1)) if (enWords.has(x.slice(1, i))) return [x.slice(0, i), x.slice(i + 1)]; return split(x); };
  const lines = (f) => readFileSync(new URL(f, I18N_DIR), 'utf8').trim().split('\n').map((x) => (x.startsWith('=') ? splitWord(x) : split(x)));
  for (const f of readdirSync(I18N_DIR)) {
    const lang = f.replace(/\.txt$/, ''); if (['keys', 'en'].includes(lang) || !f.endsWith('.txt')) continue;
    const map = new Map(); const words = {};
    for (const [n, v] of lines(f)) {
      if (n.startsWith('=')) { if (v.trim()) words[n.slice(1)] = v; continue; } // 화면 글자: =English|번역
      const k = keys.get(n); const e = en.get(n); if (!k || !v.trim()) continue;
      if (k === '#w') words[e] = v; else if (k === '#s') map.set(`#s|${e}`, v); else map.set(k, v);
    }
    IPI[lang] = { map, words };
  }
}
loadI18n();
export const IP_LANGS = Object.keys(IPI);
export const LANGS = ['ko', 'en', ...IP_LANGS];
const fmt = (t, o) => String(t).replace(/\{(\w)\}/g, (_, k) => o[k] ?? '');
const TPL = { tap: /^Tap (.+)\.$/, on: /^Turn on (.+)\.$/, off: /^Turn off (.+)\.$/, choose: /^Choose (.+)\.$/ };
/** 다른 언어 번역 꺼내기 — 없으면 null */
export function ipTr(lang) {
  const t = IPI[lang]; if (!t) return null;
  const get = (k) => t.map.get(k) ?? null;
  const word = (w) => t.words[w] ?? w;
  const step = (en) => {
    const whole = get(`#s|${en}`); if (whole) return whole;
    for (const [k, r] of Object.entries(TPL)) { const m = en.match(r); if (m) { const tpl = get(`@${k}`); return tpl ? fmt(tpl, { x: word(m[1]) }) : null; } }
    return get(`#s|${en}`);
  };
  return { get, word, step, words: t.words };
}
export const loadCatalog = (file = CATALOG_FILE) => (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : { chapters: [] });
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const two = (n) => String(n).padStart(2, '0');

/** 과정 이름·부제·법적 안내(언어별) */
export const IP_TEXT = {
  ko: { title: '아이폰 사용법', sub: '처음부터 하나씩 쉽게 배우는 아이폰', slogan: 'Learn. Step by Step.', disclaimer: 'DigiStep365는 독립적인 무료 교육 홈페이지이며 Apple Inc.와 제휴하거나 후원·보증을 받지 않습니다. Apple과 iPhone은 Apple Inc.의 상표입니다.' },
  en: { title: 'How to Use iPhone', sub: 'Easy Step-by-Step Lessons', slogan: 'Learn. Step by Step.', disclaimer: 'DigiStep365 is an independent educational website and is not affiliated with, sponsored, or endorsed by Apple Inc. Apple and iPhone are trademarks of Apple Inc.' },
};
/** 화면 문구(언어별) */
export const UI = {
  ko: {
    pick: '내 아이폰 선택', pickLead: '기종과 iOS 버전을 고르면 내 아이폰에 맞는 수업을 먼저 보여 드려요. 고르지 않아도 모든 수업을 볼 수 있어요.',
    model: '아이폰 모델', ios: 'iOS 버전', unknownModel: '내 아이폰 기종을 모르겠습니다', unknownIos: 'iOS 버전을 모르겠습니다', common: '공통 사용법으로 시작하기',
    save: '이대로 저장', change: '바꾸기', region: '지금 보는 홈페이지', regionKo: '한국어 · 대한민국', howModel: '내 아이폰 모델 확인하는 방법', howIos: 'iOS 버전 확인하는 방법',
    prep: '준비 중', lessons: '{n}개', ready: '공개된 수업 {n}개 / 전체 {t}개',
    notice: '실제 아이폰 화면을 캡처하고 검수한 수업부터 차례로 공개합니다. 그림 없이 짐작으로 만든 화면은 쓰지 않아요.',
    noticeOpen: '모든 수업을 공개했어요. 그림은 아이폰 화면을 보고 그린 것이라 실제 화면과 조금 다를 수 있어요.',
    essential: '어르신 필수', features: '이 기종에 있는 것', noFeature: '이 기종에 없는 것', models: '기종 자료 확인일', steps: '{n}단계',
    home: '처음 화면', all: '모든 수업', choose: '고르세요', noJs: '선택 기능은 자바스크립트가 필요해요. 아래 목차는 그대로 볼 수 있어요.',
  },
  en: {
    pick: 'Choose your iPhone', pickLead: 'Pick your model and iOS version to see the lessons that fit your iPhone first. You can also skip this and see every lesson.',
    model: 'iPhone model', ios: 'iOS version', unknownModel: "I don't know my iPhone model", unknownIos: "I don't know my iOS version", common: 'Start with lessons for all iPhones',
    save: 'Save', change: 'Change', region: 'This website', regionKo: 'English · International', howModel: 'How to find your iPhone model', howIos: 'How to find your iOS version',
    prep: 'Coming soon', lessons: '{n}', ready: '{n} of {t} lessons published',
    notice: 'Lessons are published one by one after real iPhone screens are captured and checked. We never use made-up screens.',
    noticeOpen: 'All lessons are published. The pictures are drawings of the iPhone screen, so they may differ slightly from your iPhone.',
    essential: 'Essential', features: 'This model has', noFeature: 'This model does not have', models: 'Model list checked', steps: '{n} steps',
    home: 'Home', all: 'All lessons', choose: 'Choose', noJs: 'Choosing needs JavaScript. You can still read the lesson list below.',
  },
};

export const UI_EN = UI.en;
/** 다른 언어의 과정 이름·화면 문구(번역 파일에서) */
for (const lang of IP_LANGS) {
  const t = ipTr(lang); const title = t.get('@title');
  if (!title) continue;
  IP_TEXT[lang] = { title, sub: t.get('@sub') ?? IP_TEXT.en.sub, slogan: IP_TEXT.en.slogan, disclaimer: t.get('@disclaimer') ?? IP_TEXT.en.disclaimer };
  UI[lang] = Object.fromEntries(Object.entries(UI.en).map(([k, v]) => [k, t.get(`@ui.${k}`) ?? v]));
}

/** 기종·iOS에 따라 없는 기능: 수업 → 필요 조건 */
export const REQUIRES = {
  'action-button': { feature: 'actionButton' }, 'camera-control': { feature: 'cameraControl' }, 'visual-intelligence': { feature: 'ai', ios: '18' },
  'face-id-setup': { feature: 'faceId' }, 'face-id-mask': { feature: 'faceId', ios: '15' }, 'alternate-appearance': { feature: 'faceId' }, 'face-id-apps': { feature: 'faceId' },
  'touch-id-setup': { feature: 'touchId' }, 'touch-id-add': { feature: 'touchId' }, 'magsafe-charging': { feature: 'magsafe' }, 'usb-c-charging': { port: 'usb-c' }, 'lightning-charging': { port: 'lightning' },
  'charge-other-device': { port: 'usb-c' }, 'satellite-sos': { feature: 'satellite' }, 'always-on': { only: ['14-pro', '14-pro-max', '15-pro', '15-pro-max', '16-pro', '16-pro-max', '17', '17-pro', '17-pro-max', 'air'] },
  'ai-turn-on': { feature: 'ai', ios: '18' }, 'writing-tools': { feature: 'ai', ios: '18' }, 'ai-summary': { feature: 'ai', ios: '18' }, 'notification-summary': { feature: 'ai', ios: '18' }, 'clean-up': { feature: 'ai', ios: '18' },
  'image-playground': { feature: 'ai', ios: '18' }, genmoji: { feature: 'ai', ios: '18' }, 'chatgpt-extension': { feature: 'ai', ios: '18' }, 'live-translation': { feature: 'ai', ios: '26' }, 'ai-privacy': { feature: 'ai', ios: '18' },
  'assistive-access': { ios: '17' }, 'assistive-access-exit': { ios: '17' }, 'contact-poster': { ios: '17' }, namedrop: { ios: '17' }, 'check-in': { ios: '17' }, 'live-voicemail': { ios: '17' }, 'stolen-device': { ios: '17' },
  'edit-message': { ios: '16' }, 'undo-send': { ios: '16' }, 'lock-app': { ios: '18' }, 'hide-app': { ios: '18' }, 'passwords-app': { ios: '18' }, 'larger-icons': { ios: '18' }, 'personal-voice': { ios: '17' }, 'eye-tracking': { ios: '18' },
  'duplicates': { ios: '16' }, 'copy-subject': { ios: '16' }, 'charge-limit': { only: ['15', '15-plus', '15-pro', '15-pro-max', '16', '16-plus', '16-pro', '16-pro-max', '16e', '17', 'air', '17-pro', '17-pro-max'] },
  'silent-mode': {}, 'wallet-pass': {},
};
/** 데이터 손실·안전 주의가 필요한 수업 */
export const CAUTION = {
  ko: { 'erase-iphone': '아이폰을 초기화하면 사진·연락처·앱이 모두 지워져요. 먼저 백업했는지 꼭 확인하세요.', 'sign-out': 'Apple 계정을 바꾸거나 로그아웃하면 iCloud 사진·연락처가 이 아이폰에서 사라질 수 있어요.', 'delete-photo': '지운 사진은 30일 뒤 완전히 사라져요.', 'icloud-backup': '백업과 복원 중에는 와이파이와 충전기를 연결해 두세요.', 'restore-backup': '복원하면 지금 아이폰의 내용이 백업 내용으로 바뀌어요.', 'pay-in-store': '결제는 실제로 돈이 나가요. 연습할 때는 결제 버튼을 누르지 마세요.', 'share-location': '위치 공유는 믿는 가족에게만 하세요.', 'emergency-sos': '실제로 버튼을 눌러 연습하지 마세요. 진짜 긴급 전화가 걸려요.', 'erase-remotely': '원격으로 지우면 아이폰의 모든 내용이 지워져요.' },
  en: { 'erase-iphone': 'Erasing removes all photos, contacts and apps. Make sure you have a backup first.', 'sign-out': 'Signing out or changing your Apple Account can remove iCloud photos and contacts from this iPhone.', 'delete-photo': 'Deleted photos are removed for good after 30 days.', 'icloud-backup': 'Keep Wi-Fi and the charger connected while backing up or restoring.', 'restore-backup': 'Restoring replaces what is on your iPhone now with the backup.', 'pay-in-store': 'Payments spend real money. Do not tap Pay while practising.', 'share-location': 'Share your location only with family you trust.', 'emergency-sos': 'Never press the buttons to practise. It calls emergency services for real.', 'erase-remotely': 'Erasing remotely deletes everything on the iPhone.' },
};
export const CAUTION_EN = CAUTION.en;
export const SOURCES = [
  { label: 'Apple iPhone 사용 설명서', url: 'https://support.apple.com/ko-kr/guide/iphone/welcome/ios' },
  { label: 'iPhone User Guide', url: 'https://support.apple.com/guide/iphone/welcome/ios' },
];
const ASSIST = [{ label: '보조 접근 사용 설명서', url: 'https://support.apple.com/guide/assistive-access-iphone/welcome/ios' }];
/** 이미지 출처 중 공개할 수 있는 것(재현·생성 화면은 공개 불가) */
export const IMAGE_SOURCES = ['직접 캡처(교육용 아이폰)', 'Xcode iOS 시뮬레이터 캡처', '사용 권한을 받은 Apple 공식 이미지'];
/** 운영자 결정(2026-11-28 “직접 실제와 같이 만들어라”): 코드로 그린 재현 화면으로 공개하고, 수업마다 안내 문구를 단다 */
export const DRAWN_SOURCE = '원본 화면 기준 재현(운영자 승인)';
export const OPERATOR = 'Operator decision (drawn screens, before comparing with a real iPhone)';
export const IP_NOTE = {
  ko: '이 그림은 아이폰 화면을 보고 그린 그림이에요. 실제 아이폰과 메뉴 이름·위치가 조금 다를 수 있어요.',
  en: 'These pictures are drawings of the iPhone screen. Menu names and positions may differ slightly from your iPhone.',
};

const parseOutline = () => OUTLINE.map(([key, ko, en, rows], i) => ({
  key, num: i + 1, title: ko, titleEn: en,
  rows: rows.trim().split('\n').map((r) => { const [s, k, e] = r.split('|'); return { slug: s.replace(/^\*/, ''), ko: k, en: e, essential: s.startsWith('*') }; }),
}));
const blankMeta = (lang) => ({ source: '', iphoneModel: '', ios: '', country: lang === 'ko' ? 'KR' : 'ALL', lang, captured: '', reviewed: '', license: '', privacyChecked: false });
const toSteps = (rows, screens, today) => rows.map(([ko, en, tko, ten, shot], i) => {
  const sc = screens?.[i];
  const meta = (lang) => (sc ? { ...blankMeta(lang), source: DRAWN_SOURCE, iphoneModel: sc.model === 'home' ? 'iPhone SE (3rd generation) — drawing' : 'iPhone 16 — drawing', ios: '26', captured: today, reviewed: today, license: '자체 제작 그림(DigiStep365)', privacyChecked: true } : blankMeta(lang));
  const { t, a, ...spec } = sc ?? {};
  return {
    text: ko, textEn: en, targetLabel: tko, targetEn: ten, targetKey: sc ? (t ?? ten) : '', action: a ?? 'tap', shot, voice: '', hint: '',
    image: { src: '', alt: `${sc ? '아이폰 화면 그림' : ''}${tko ? `, ‘${tko}’에 빨간 원` : ''}. ${ko}`.replace(/^, /, '').slice(0, 160), ...(sc ? { screen: spec } : {}) }, imageMeta: meta('ko'),
    imageEn: { src: '', alt: `${sc ? 'iPhone screen drawing' : ''}${ten ? ` with “${ten}” circled in red` : ''}. ${en}`.slice(0, 160), ...(sc ? { screen: spec } : {}) }, imageMetaEn: meta('en'),
  };
});

/** 목차(outline)와 단계 원고(steps)로 catalog를 만들거나 채운다. 사람이 고친 수업(edited)·이미지가 있는 수업은 덮어쓰지 않는다. */
export function fill(catalog = loadCatalog()) {
  const old = new Map(catalog.chapters.flatMap((c) => c.lessons).map((l) => [l.id, l]));
  const chapters = parseOutline().map((ch) => ({
    key: ch.key, num: ch.num, title: ch.title, titleEn: ch.titleEn,
    lessons: ch.rows.map((r) => {
      const id = `i${two(ch.num)}-${r.slug}`;
      const prev = old.get(id);
      const src = STEPS[r.slug];
      const hasImg = prev?.steps?.some((s) => s.image?.src || s.imageEn?.src) || prev?.stepsHome?.some((s) => s.image?.src || s.imageEn?.src);
      if (prev && (prev.edited || hasImg || PUBLIC_STATUS.includes(prev.status))) return prev;
      const face = src ? (Array.isArray(src) ? src : src.face) : null;
      const home = src && !Array.isArray(src) ? src.home : null;
      const sc = SCREENS[r.slug]; const scFace = sc ? (Array.isArray(sc) ? sc : sc.face) : null; const scHome = sc && !Array.isArray(sc) ? sc.home : null;
      const today = new Date().toISOString().slice(0, 10);
      const drawn = Boolean(face && scFace && scFace.length === face.length);
      return {
        id, slug: r.slug, title: r.ko, titleEn: r.en, essential: r.essential,
        status: drawn ? 'published' : face ? 'image' : 'draft', requires: REQUIRES[r.slug] ?? {},
        steps: face ? toSteps(face, drawn ? scFace : null, today) : [], ...(home ? { stepsHome: toSteps(home, drawn ? scHome : null, today) } : {}),
        ...(drawn ? { approvedWithoutCompare: true } : {}),
        caution: CAUTION.ko[r.slug] ?? '', cautionEn: CAUTION.en[r.slug] ?? '',
        sources: /assistive-access/.test(r.slug) ? [...SOURCES, ...ASSIST] : SOURCES,
        iphoneModel: drawn ? 'iPhone 16 (drawing)' : '', ios: drawn ? '26' : '', lastChecked: drawn ? today : '', reviewedBy: drawn ? OPERATOR : '', menuPath: '', needsUpdate: false, changes: '',
      };
    }),
  }));
  return { ...catalog, updated: catalog.updated ?? '', chapters };
}

/** 이 언어로 공개하려면 갖춰야 할 것 — 빈 배열이면 공개 가능 */
export function publishProblems(l, lang = 'ko', { root = ROOT } = {}) {
  if (lang !== 'ko' && lang !== 'en') {
    const t = ipTr(lang); if (!t) return [`${lang} 번역 파일 없음`];
    const p = publishProblems(l, 'en', { root });
    if (!t.get(`#t:${l.slug}`)) p.push(`${lang} 제목 번역 없음`);
    for (const [pre, steps] of [['', l.steps ?? []], ['홈 버튼 기종 ', l.stepsHome ?? []]]) steps.forEach((s, i) => { if (!t.step(s.textEn)) p.push(`${pre}${i + 1}단계 ${lang} 번역 없음`); });
    return p;
  }
  const p = [];
  if (!PUBLIC_STATUS.includes(l.status)) p.push(`상태가 ‘${STATUS[l.status] ?? l.status}’`);
  for (const [k, label] of [['iphoneModel', '아이폰 모델'], ['ios', 'iOS 버전'], ['lastChecked', '마지막 확인 날짜'], ['reviewedBy', '검수자']]) if (!String(l[k] ?? '').trim()) p.push(`${label} 없음`);
  if (!l.sources?.length) p.push('공식 참고 자료 없음');
  if (lang === 'en' && !String(l.titleEn ?? '').trim()) p.push('영어 제목 없음');
  const sets = [['', l.steps ?? []], ...(l.stepsHome ? [['홈 버튼 기종 ', l.stepsHome]] : [])];
  if (!sets[0][1].length) p.push('단계 없음');
  for (const [pre, steps] of sets) steps.forEach((s, i) => {
    const n = `${pre}${i + 1}단계`;
    const text = lang === 'en' ? s.textEn : s.text;
    const img = (lang === 'en' ? s.imageEn : s.image) ?? {};
    const m = (lang === 'en' ? s.imageMetaEn : s.imageMeta) ?? {};
    if (!String(text ?? '').trim()) p.push(`${n} 설명 없음`);
    const drawnOk = l.approvedWithoutCompare === true && !img.src && img.screen && m.source === DRAWN_SOURCE;
    if (drawnOk) { if (!String(img.alt ?? '').trim()) p.push(`${n} 이미지 설명(alt) 없음`); if (m.privacyChecked !== true) p.push(`${n} 개인정보 노출 확인 안 됨`); return; }
    if (!img.src) p.push(`${n} 실제 화면 이미지 없음(${lang})`);
    else if (!new RegExp(`^images/iphone/${lang}/[\\w./-]+\\.(png|jpe?g|webp)$`, 'i').test(img.src)) p.push(`${n} 이미지 경로가 images/iphone/${lang}/ 밖`);
    else if (!existsSync(new URL(img.src, root))) p.push(`${n} 이미지 파일 없음(${img.src})`);
    if (!String(img.alt ?? '').trim()) p.push(`${n} 이미지 설명(alt) 없음`);
    if (!IMAGE_SOURCES.includes(m.source)) p.push(`${n} 이미지 출처가 실제 캡처·권한 받은 공식 이미지가 아님`);
    for (const [k, label] of [['iphoneModel', '기종'], ['ios', 'iOS'], ['lang', '언어'], ['captured', '캡처 날짜'], ['reviewed', '검수 날짜'], ['license', '사용 권한']]) if (!String(m[k] ?? '').trim()) p.push(`${n} 이미지 ${label} 없음`);
    if (m.lang && m.lang !== lang) p.push(`${n} 화면 언어(${m.lang})가 ${lang}이 아님`);
    if (m.privacyChecked !== true) p.push(`${n} 개인정보 노출 확인 안 됨`);
  });
  return p;
}
export const isPublic = (l, lang, opt) => publishProblems(l, lang, opt).length === 0;

/** 한 언어의 과정 자료: 목차 전체(준비 중 포함) + 공개 수업 */
export function iphoneCourse(lang, catalog = loadCatalog()) {
  const chapters = catalog.chapters.map((ch) => ({
    key: ch.key, num: ch.num, title: lang === 'ko' ? ch.title : lang === 'en' ? ch.titleEn : (ipTr(lang)?.get(`#ch:${ch.key}`) ?? ch.titleEn),
    lessons: ch.lessons.map((l) => ({ id: l.id, slug: l.slug, title: lang === 'ko' ? l.title : lang === 'en' ? l.titleEn : (ipTr(lang)?.get(`#t:${l.slug}`) ?? l.titleEn), essential: l.essential, requires: l.requires ?? {}, open: isPublic(l, lang), steps: (l.steps ?? []).length, src: l })),
  }));
  const all = chapters.flatMap((c) => c.lessons);
  return { lang, text: IP_TEXT[lang], chapters, total: all.length, count: all.filter((l) => l.open).length, withText: all.filter((l) => l.steps).length };
}

/** 진행 현황(관리자·보고용) */
export function progress(catalog = loadCatalog()) {
  const all = catalog.chapters.flatMap((c) => c.lessons);
  const steps = all.flatMap((l) => [...(l.steps ?? []), ...(l.stepsHome ?? [])]);
  return {
    chapters: catalog.chapters.length, lessons: all.length, essential: all.filter((l) => l.essential).length,
    withText: all.filter((l) => l.steps?.length).length, cards: steps.length,
    images: Object.fromEntries(LANGS.map((g) => [g, steps.filter((s) => (g === 'en' ? s.imageEn : s.image)?.src).length])),
    reviewed: all.filter((l) => l.reviewedBy && l.lastChecked).length,
    published: Object.fromEntries(LANGS.map((g) => [g, all.filter((l) => isPublic(l, g)).length])),
    byStatus: Object.fromEntries(Object.keys(STATUS).map((k) => [k, all.filter((l) => l.status === k).length])),
    models: IPHONE_MODELS.length, ios: IOS_VERSIONS.map((x) => x.v),
  };
}

/* ---------- 과정 첫 화면(내 아이폰 선택 + 목차) ---------- */
function picker(lang) {
  const u = UI[lang];
  const name = (m) => (lang === 'ko' ? m.ko : m.name);
  const groups = SERIES.map(([k, ko, en]) => `<optgroup label="${esc(lang === 'ko' ? ko : en)}">${IPHONE_MODELS.filter((m) => m.series === k).sort((a, b) => b.year - a.year).map((m) => `<option value="${m.id}">${esc(name(m))}</option>`).join('')}</optgroup>`).join('');
  const data = IPHONE_MODELS.map((m) => ({ id: m.id, n: name(m), min: m.minIos, max: m.maxIos, f: Object.keys(FEATURE_LABELS).filter((k) => m[k]), port: m.port }));
  const t = ipTr(lang);
  const labels = { ...Object.fromEntries(Object.entries(FEATURE_LABELS).map(([k, v]) => [k, t?.get(`@feat.${k}`) ?? v[lang === 'ko' ? 0 : 1]])), ...Object.fromEntries(Object.entries(PORT_LABELS).map(([k, v]) => [`port:${k}`, t?.get(`@port.${k}`) ?? v[lang === 'ko' ? 0 : 1]])) };
  const howSteps = (slug) => (STEPS[slug] ?? []).map((s) => `<li>${esc(lang === 'ko' ? s[0] : lang === 'en' ? s[1] : (t?.step(s[1]) ?? s[1]))}</li>`).join('');
  return `<section class="iphone-pick" data-iphone-pick data-lang="${lang}" data-ios='${esc(JSON.stringify(IOS_VERSIONS.map((x) => x.v)))}' data-models='${esc(JSON.stringify(data))}' data-labels='${esc(JSON.stringify({ ...labels, has: u.features, hasnot: u.noFeature, choose: u.choose }))}'>
<h2>${u.pick}</h2>
<p>${u.pickLead}</p>
<p class="iphone-pick__region">${u.region}: <b>${u.regionKo}</b></p>
<noscript><p class="step__note">${u.noJs}</p></noscript>
<div class="iphone-pick__row"><label for="ip-model">${u.model}</label><select id="ip-model" data-ip-model><option value="">${u.choose}</option>${groups}<option value="unknown">${u.unknownModel}</option></select></div>
<div class="iphone-pick__row"><label for="ip-ios">${u.ios}</label><select id="ip-ios" data-ip-ios><option value="">${u.choose}</option>${IOS_VERSIONS.map((x) => `<option value="${x.v}">iOS ${x.v}</option>`).join('')}<option value="unknown">${u.unknownIos}</option></select></div>
<div class="iphone-pick__out" data-ip-out aria-live="polite"></div>
<p><button type="button" class="btn btn--block" data-ip-common>${u.common}</button></p>
<details class="iphone-how" id="how-model"><summary>${u.howModel}</summary><ol>${howSteps('check-model')}</ol></details>
<details class="iphone-how" id="how-ios"><summary>${u.howIos}</summary><ol>${howSteps('check-ios-version')}</ol></details>
<p class="iphone-pick__meta">${u.models}: ${MODELS_LAST_CHECKED}</p>
</section>`;
}

/** 과정 첫 화면 본문. href(lesson) = 공개 수업 주소 */
export function landingMain(course, { href, crumbs }) {
  const u = UI[course.lang];
  return `${crumbs}
<p class="eyebrow" lang="en">${esc(course.text.slogan)}</p>
<h1>${esc(course.text.title)}</h1>
<p class="lead">${esc(course.text.sub)}</p>
<p class="step__note">${course.count ? u.noticeOpen : u.notice}</p>
<p class="iphone-count">${fmt(u.ready, { n: course.count, t: course.total })}</p>
${picker(course.lang)}
${course.chapters.map((ch) => `<section class="cat" id="c${two(ch.num)}"><h3><span class="num">${two(ch.num)}</span> ${esc(ch.title)} <small>${fmt(u.lessons, { n: ch.lessons.length })}</small></h3>
<ul class="lessons">${ch.lessons.map((l) => `<li data-ip-req='${esc(JSON.stringify(l.requires))}'>${l.open ? `<a href="${href(l)}">${esc(l.title)}<span>${fmt(u.steps, { n: l.steps })}</span></a>` : `<span class="lessons__soon"><b class="lessons__t">${esc(l.title)}${l.essential ? ` <em>${u.essential}</em>` : ''}</b><span>${u.prep}</span></span>`}</li>`).join('')}</ul></section>`).join('\n')}
<script src="/assets/iphone-device.js?v=${course.version ?? ''}" defer></script>`;
}

/** 관리자 화면 */
export function buildIphone({ version, brandTagline }) {
  const catalog = fill();
  writeFileSync(CATALOG_FILE, `${JSON.stringify(catalog, null, 1)}\n`);
  const p = progress(catalog);
  const lead = '아이폰 사용법(국내·해외 공통) — 목차·수업·단계 카드·<b>실제 아이폰 화면 캡처</b>·기종·iOS·언어별 이미지·검수 기록을 관리합니다. 실제 캡처 이미지와 기록이 모두 갖춰지고 상태가 ‘공개’인 수업만 그 언어 홈페이지에 나옵니다. 코드로 그린 화면·AI 생성 화면은 공개 조건을 통과하지 못합니다.';
  const extra = `<section class="kbox"><h2>진행 현황</h2><table class="wa-progress"><tbody>
<tr><th>대분류 / 사용법</th><td>${p.chapters} / ${p.lessons} (어르신 필수 ${p.essential})</td></tr>
<tr><th>단계 원고(한국어·영어)</th><td>${p.withText}개 수업 · 카드 ${p.cards}장</td></tr>
<tr><th>실제 화면 이미지</th><td>한국어 ${p.images.ko}장 · 영어 ${p.images.en}장</td></tr>
<tr><th>공개</th><td>한국어 ${p.published.ko}개 · 영어 ${p.published.en}개</td></tr>
<tr><th>기종 / iOS</th><td>${p.models}개 기종 · iOS ${p.ios.join(', ')}</td></tr>
</tbody></table>
<p class="hint">이미지 경로: <code>images/iphone/ko/…</code>, <code>images/iphone/en/…</code> · 출처는 ${IMAGE_SOURCES.map(esc).join(' / ')} 중 하나여야 공개됩니다.</p></section>`;
  const html = adminPage({ version, brandTagline, course: 'iphone', heading: '아이폰 사용법 관리 (국내·해외 공통)', lead, extra });
  const f = new URL('../admin/iphone/index.html', import.meta.url);
  mkdirSync(new URL('.', f), { recursive: true });
  writeFileSync(f, html);
  return p;
}

/* ---------- 수업 페이지 본문(공개 수업만; 한국어·영어 공통) ---------- */
const drawing = (img, st, lang, model) => {
  setIpLang(lang, lang === 'ko' ? KO_SCREEN : lang === 'en' ? null : ipTr(lang)?.words); setIpModel(model);
  const r = renderIphone(img.screen, st.targetKey || undefined, st.action);
  setIpLang('en'); setIpModel('face');
  return `<figure class="pic" role="img" aria-label="${esc(img.alt)}">${r.svg.replace('aria-hidden="true"', 'aria-hidden="true" class="pic__svg"')}</figure>`;
};
const photo = (img) => {
  const t = img.target;
  return `<figure class="pic pic--photo" role="img" aria-label="${esc(img.alt)}"><img src="/${esc(img.src)}" alt="" loading="lazy">${t ? `<svg class="pic__ring" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="${t.x + t.w / 2}" cy="${t.y + t.h / 2}" rx="${t.w / 2}" ry="${t.h / 2}" fill="none" stroke="#d7263d" stroke-width="6" vector-effect="non-scaling-stroke"/></svg>` : ''}</figure>`;
};
export const HOME_VARIANT = { ko: '홈 버튼이 있는 아이폰(SE·8 이전)', en: 'iPhone with a Home button (SE, 8 and earlier)' };
/**
 * @param course iphoneCourse(lang)  @param item course lesson ({ src: catalog lesson })
 * @param ctx { crumbs, ui: { stepOf, restart, all, finished, nextLesson, sources, reviewed, prev, listen, next, done, stepsNav }, next: { href, title } | null }
 */
export function lessonMain(course, item, { crumbs, ui, next }) {
  const l = item.src; const lang = course.lang; const en = lang === 'en'; const t = ipTr(lang);
  const view = (s) => {
    if (t) { const text = t.step(s.textEn) ?? s.textEn; return { text, img: { ...s.imageEn, alt: fmt(t.get('@alt') ?? '{x}', { x: text }) }, hint: '', targetKey: s.targetKey, action: s.action }; }
    return { text: en ? s.textEn : s.text, img: en ? s.imageEn : s.image, hint: s.hint, targetKey: s.targetKey, action: s.action };
  };
  const steps = l.steps.map(view); const n = steps.length;
  const card = (st, i, total, model = 'face') => `<li class="step" id="step-${i + 1}">
  <p class="step__no">${ui.stepOf(i + 1, total)}</p>
  <h2 class="step__text">${esc(st.text)}</h2>
  ${st.hint ? `<p class="step__hint">${esc(st.hint)}</p>` : ''}
  ${st.img.src ? photo(st.img) : drawing(st.img, st, course.lang, st.img.screen?.model ?? model)}
</li>`;
  const caution = t ? (l.cautionEn ? t.get(`#c:${l.slug}`) ?? l.cautionEn : '') : en ? l.cautionEn : l.caution;
  return `${crumbs}
<h1>${esc(item.title)}</h1>
${l.approvedWithoutCompare ? `<p class="step__note">${esc(t ? t.get('@note') ?? IP_NOTE.en : IP_NOTE[lang])}</p>` : ''}
<ol class="steps" data-steps>
${steps.map((st, i) => card(st, i, n)).join('\n')}
</ol>
${l.stepsHome ? `<details class="iphone-how"><summary>${esc(t ? t.get('@homeVariant') ?? HOME_VARIANT.en : HOME_VARIANT[lang])}</summary><ol class="steps">${l.stepsHome.map(view).map((st, i, a) => card(st, i, a.length, 'home')).join('')}</ol></details>` : ''}
<div class="tools" hidden>
  <button type="button" class="btn" data-restart>${ui.restart}</button>
  <button type="button" class="btn" data-all aria-pressed="false">${ui.all}</button>
</div>
${caution ? `<p class="step__note">${esc(caution)}</p>` : ''}
<p class="finish" data-finish hidden>${ui.finished}${next ? ` ${ui.nextLesson} <a href="${next.href}">${esc(next.title)}</a>` : ''}</p>
<details class="meta"><summary>${ui.sources}</summary>
  <p>${esc(l.iphoneModel)} · iOS ${esc(l.ios)} · ${ui.reviewed}: ${esc(l.lastChecked)}</p>
  <ul>${(l.sources ?? []).map((x) => `<li><a href="${esc(x.url)}" rel="noopener" target="_blank">${esc(x.label)}</a></li>`).join('')}</ul>
</details>
</main>
<nav class="bar" aria-label="${ui.stepsNav}" hidden>
  <button type="button" class="btn" data-prev>${ui.prev}</button>
  <button type="button" class="btn" data-listen>${ui.listen}</button>
  <button type="button" class="btn btn--primary" data-next data-next-label="${ui.next}" data-done-label="${ui.done}">${ui.next}</button>
</nav>`;
}
/** 공개 수업의 설명(검색용) */
/** 검색 설명: HTML로 바뀐 뒤(&amp; 등)에도 160자 이하 */
const fitDesc = (d) => { let o = d.slice(0, 155); while (esc(o).length > 158) o = o.slice(0, -1); return o; };
export const lessonDesc = (course, item) => fitDesc(`${item.title} — ${course.text.title}. ${course.lang === 'ko' || course.lang === 'en' ? '' : `${course.text.sub}. `}${(course.lang === 'ko' ? item.src.steps.map((s) => s.text) : course.lang === 'en' ? item.src.steps.map((s) => s.textEn) : item.src.steps.map((s) => ipTr(course.lang)?.step(s.textEn) ?? s.textEn)).join(' ')}`.replace(/\s+/g, ' '));
