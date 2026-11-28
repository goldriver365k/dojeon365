// 아이폰 수업 작성 도구: 메뉴 이름(영어)만 적으면 한국어·영어 단계 글과 단계별 재현 화면을 함께 만든다.
// 결과: { steps: [[ko, en, tko, ten, shot]], screens: [spec(+t,a)] } — steps-essential.mjs / screens-essential.mjs와 같은 모양
import { KO_SCREEN } from './ko-screen.js';

/** 화면 이름 → 메뉴 줄. 쉼표로 줄, | 로 묶음, #머리말, ~끄기 스위치, ^켜기 스위치, 이름=값, !파란 버튼, *빨간 버튼, @아이콘 묶음 */
export const MENUS = {
  'Settings': '@Airplane Mode, @Wi-Fi=Home, @Bluetooth=On, @Cellular, @Battery | @General, @Accessibility, @Camera, @Control Center, @Display & Brightness',
  'Settings 2': '@Accessibility, @Camera, @Display & Brightness, @Siri | @Notifications, @Sounds & Haptics, @Focus, @Screen Time | @Face ID & Passcode, @Emergency SOS, @Privacy & Security',
  'Settings 3': '@Home Screen & App Library, @Search, @StandBy, @Wallpaper | @Notifications, @Focus | @App Store, @Wallet & Apple Pay | @Apps',
  'General': '@About, @Software Update | AirDrop, AutoFill & Passwords, Background App Refresh, Date & Time, Keyboard, Language & Region | @iPhone Storage | Transfer or Reset iPhone, !Shut Down',
  'Apps': 'Calendar, Camera, Contacts, FaceTime, Health, Maps, Messages, Notes, Phone, Photos, Safari, Weather',
  'Accessibility': '#VISION, @VoiceOver, @Zoom, @Display & Text Size, @Motion, @Spoken Content | #PHYSICAL AND MOTOR, @Touch, @Side Button, @Voice Control | #HEARING, @Hearing Devices, @Sound Recognition, @Audio & Visual, @Live Captions | #GENERAL, @Assistive Access, @Guided Access, @Accessibility Shortcut',
  'Display & Text Size': '~Bold Text, Larger Text=Off, ~Button Shapes, ~Increase Contrast | Color Filters=Off, ~Reduce White Point, ~Smart Invert',
  'Display & Brightness': '#APPEARANCE, Light, Dark | ^True Tone | Night Shift, Auto-Lock=30 seconds, ^Raise to Wake | Text Size, ~Bold Text | #DISPLAY, Display Zoom=Default',
  'Sounds & Haptics': '~Silent Mode | #RINGTONE AND ALERTS, ^Change with Buttons | Ringtone=Reflection, Text Tone=Note, Haptics | Headphone Safety, ^System Haptics',
  'Battery': '~Battery Percentage, ~Low Power Mode | Battery Health & Charging',
  'Battery Health & Charging': 'Maximum Capacity=92%, Peak Performance Capability | Charging=Optimized',
  'Face ID & Passcode': '#USE FACE ID FOR, ^iPhone Unlock, ^Apple Pay, ^Password AutoFill | Set Up an Alternate Appearance, ~Face ID with a Mask | !Turn Passcode Off, !Change Passcode | Stolen Device Protection=Off | #ALLOW ACCESS WHEN LOCKED, ^Notification Center, ^Control Center | ~Erase Data',
  'Touch ID & Passcode': '#USE TOUCH ID FOR, ^iPhone Unlock, ^Apple Pay | #FINGERPRINTS, Finger 1, !Add a Fingerprint... | !Turn Passcode Off, !Change Passcode',
  'Privacy & Security': '@Location Services=On, @Tracking | Safety Check | App Privacy Report | Stolen Device Protection=Off',
  'Wi-Fi': '^Wi-Fi | #NETWORKS, Home, Cafe Free WiFi, Neighbor 5G | Ask to Join Networks=Notify',
  'Bluetooth': '^Bluetooth | #MY DEVICES, Buds Pro=Connected, My Car=Not Connected | #OTHER DEVICES',
  'Cellular': '^Cellular Data | Data Roaming=Off | Add eSIM | Personal Hotspot=Off | Low Data Mode=Off | #CELLULAR DATA',
  'Control Center': '^Access Within Apps | Edit Controls',
  'Notifications': 'Notification Display=Count | Show Previews=Always | Scheduled Summary=Off | #NOTIFICATION STYLE, Calendar, Messages, Phone',
  'Focus': 'Do Not Disturb, Personal, Sleep, Work | ^Share Across Devices',
  'Screen Time': 'See All App & Website Activity | App Limits, Downtime, Communication Limits | Lock Screen Time Settings',
  'Camera': 'Formats, Record Video=1080p at 30 fps | ^Grid, ~Level, ~Mirror Front Camera | Preserve Settings | ^Scene Detection',
  'Siri': 'Talk to Siri=Off, ^Press Side Button for Siri | Language=English, Siri Voice=American | ~Allow Siri When Locked | Siri & Dictation History | Announce Calls=Never, Announce Notifications=Off',
  'Phone': '#ALLOW PHONE TO ACCESS, Contacts, Siri & Search | Call Blocking & Identification, Blocked Contacts | ~Silence Unknown Callers | ^Live Voicemail',
  'Messages': '^iMessage | ~Send Read Receipts | Blocked Contacts | ^Filter Unknown Senders | Keep Messages=Forever',
  'Safari': 'Search Engine=Google | Clear History and Website Data | ^Block Pop-ups | Page Zoom | Downloads=iCloud Drive',
  'Photos': '^iCloud Photos | ~Shared Albums | ^Use Face ID | Duplicates=On',
  'Keyboard': 'Keyboards=2 | Text Replacement, One-Handed Keyboard=Off | ^Auto-Correction, ^Auto-Capitalization, ^Enable Dictation',
  'Keyboards': 'Korean, English (US) | Add New Keyboard...',
  'Touch': 'AssistiveTouch=Off, Haptic Touch | ~Reachability, Touch Accommodations=Off | ^Tap to Wake | Back Tap=Off | Call Audio Routing=Automatic',
  'Zoom': '~Zoom | ~Follow Focus | Zoom Region=Window Zoom',
  'Spoken Content': '~Speak Selection, ~Speak Screen | Voices | Speaking Rate',
  'Hearing Devices': '#MFI HEARING DEVICES, Searching... | ~Hearing Aid Compatibility',
  'Audio & Visual': '~Mono Audio | ~LED Flash for Alerts | Background Sounds=Off | Headphone Accommodations',
  'Live Captions': '~Live Captions',
  'Side Button': 'Click Speed=Default | Press and Hold to Speak=Siri',
  'Voice Control': '~Voice Control | Language=English (U.S.)',
  'Motion': '~Reduce Motion | ^Auto-Play Message Effects',
  'Emergency SOS': '^Call with Hold and Release, ^Call with 5 Button Presses, ~Call Quietly | Emergency Contacts | ^Crash Detection',
  'Wallpaper': 'Add New Wallpaper | Customize',
  'Home Screen & App Library': '#NEWLY DOWNLOADED APPS, Add to Home Screen, App Library Only | ^Show in App Library',
  'App Store': '^App Downloads, ^App Updates | ^Automatic Downloads | Video Autoplay=On',
  'Wallet & Apple Pay': 'Add Card | ^Double-Click Side Button | Express Transit Card=None',
  'Apple Account': 'Personal Information, Sign-In & Security, Payment & Shipping, Subscriptions | @iCloud, @Family, @Find My | Media & Purchases | !Sign Out',
  'Sign-In & Security': 'Email & Phone Numbers | Change Password | Two-Factor Authentication=On | Account Recovery | Legacy Contact',
  'iCloud': '#SAVED TO ICLOUD, Photos=On, iCloud Drive=On, iCloud Backup=On | Manage Account Storage | iCloud+ Features',
  'Transfer or Reset iPhone': 'Prepare for New iPhone | Reset | *Erase All Content and Settings',
  'Reset': 'Reset All Settings, Reset Network Settings, Reset Keyboard Dictionary, Reset Home Screen Layout, Reset Location & Privacy',
  'Location Services': '^Location Services | Share My Location | Camera=While Using, Maps=While Using, Weather=Always',
  'Tracking': '~Allow Apps to Request to Track',
  'Find My': 'Find My iPhone=On | ^Share My Location',
  'Find My iPhone': '^Find My iPhone | ^Find My network | ^Send Last Location',
  'Date & Time': '^24-Hour Time | ^Set Automatically | Time Zone=Seoul',
  'Language & Region': 'iPhone Language=English | Region=South Korea',
};

export const KO_MORE = {};
export const addKo = (m) => Object.assign(KO_MORE, m);
export const K = (en) => KO_MORE[en] ?? KO_SCREEN[en] ?? en;
/** 받침에 맞춰 을/를 */
export function eul(word) {
  const ch = String(word).trim().replace(/[)\]’”'"…]+$/, '').slice(-1); const code = ch.charCodeAt(0) - 0xac00;
  if (code >= 0 && code <= 11171) return code % 28 ? '을' : '를';
  if (/[0-9]/.test(ch)) return '을';
  return /[lmnLMN]$/.test(ch) ? '을' : '를';
}

function parse(menu) {
  return menu.split('|').map((g) => {
    const out = { rows: [] };
    for (let r of g.split(',').map((x) => x.trim()).filter(Boolean)) {
      if (r.startsWith('#')) { out.header = r.slice(1); continue; }
      if (r.startsWith('@')) { out.icons = true; r = r.slice(1); }
      if (r.startsWith('~')) out.rows.push({ label: r.slice(1), toggle: false });
      else if (r.startsWith('^')) out.rows.push({ label: r.slice(1), toggle: true });
      else if (r.startsWith('!')) out.rows.push({ label: r.slice(1), blue: true });
      else if (r.startsWith('*')) out.rows.push({ label: r.slice(1), red: true });
      else if (r.includes('=')) { const [a, b] = r.split('='); out.rows.push({ label: a, value: b }); } else out.rows.push(r);
    }
    return out;
  });
}
const labelOf = (r) => (typeof r === 'string' ? r : r.label);
const SETTINGS_PAGES = ['Settings', 'Settings 2', 'Settings 3'];

/** 목록 화면 하나(제목·뒤로·줄) — label이 꼭 보이게 */
export function listScreen(title, label, back, edit, menu) {
  let key = title;
  if (title === 'Settings') key = SETTINGS_PAGES.find((p) => parse(MENUS[p]).some((g) => g.rows.some((r) => labelOf(r) === label))) ?? 'Settings';
  let groups = menu ? parse(menu) : MENUS[key] ? parse(MENUS[key]) : [];
  if (label && !groups.some((g) => g.rows.some((r) => labelOf(r) === label))) groups = [{ rows: [label] }, ...groups];
  // 화면 높이에 맞게 줄 수 제한(라벨이 든 묶음은 남김)
  let n = 0; groups = groups.filter((g) => { const keep = n < 12 || g.rows.some((r) => labelOf(r) === label); if (keep) n += g.rows.length + 1; return keep; });
  if (edit) groups = groups.map((g) => ({ ...g, rows: g.rows.map((r) => (labelOf(r) === label ? { ...(typeof r === 'string' ? { label: r } : r), ...edit } : r)) }));
  const isTop = key.startsWith('Settings');
  return { v: 'list', title: isTop ? 'Settings' : title, large: key === 'Settings', profile: key === 'Settings' ? 'Maria Kim' : undefined, back: isTop ? undefined : back, groups };
}

/* ---------- 단계 만들기 ---------- */
const HOME1 = ['FaceTime', 'Calendar', 'Photos', 'Camera', 'Mail', 'Clock', 'Weather', 'Notes', 'Reminders', 'Contacts', 'App Store', 'Maps', 'Health', 'Wallet', 'Settings', 'Find My', 'Calculator', 'Magnifier', 'Files', 'Voice Memos'];
const DOCK = ['Phone', 'Safari', 'Messages', 'Music'];
/** 앱 열기 */
export const open = (app) => (ctx) => {
  ctx.prev = app;
  const sc = HOME1.includes(app) || DOCK.includes(app) ? { v: 'home' } : { v: 'home', page2: true, apps: ['Music', 'Files', 'Voice Memos', 'Calculator', 'Magnifier', 'Shortcuts', 'Translate', 'Tips'].includes(app) ? ['Music', 'Files', 'Voice Memos', 'Calculator', 'Magnifier', 'Shortcuts', 'Translate', 'Tips'] : ['Music', 'Files', 'Voice Memos', app] };
  return [`‘${K(app)}’${eul(K(app))} 누르세요.`, `Tap ${app}.`, K(app), app, 'Home Screen', sc, null];
};
/** 목록에서 누르기 */
export const go = (title, label, menu) => (ctx) => { const sc = listScreen(title, label, ctx.prev, null, menu); ctx.prev = title === 'Settings' ? 'Settings' : title; ctx.last = title; return [`‘${K(label)}’${eul(K(label))} 누르세요.`, `Tap ${label}.`, K(label), label, title, sc, null]; };
/** 스위치 켜기·끄기 */
export const on = (title, label, menu) => (ctx) => { const sc = listScreen(title, label, ctx.prev, { toggle: true }, menu); return [`‘${K(label)}’${eul(K(label))} 켜세요.`, `Turn on ${label}.`, K(label), label, title, sc, null]; };
export const off = (title, label, menu) => (ctx) => { const sc = listScreen(title, label, ctx.prev, { toggle: false }, menu); return [`‘${K(label)}’${eul(K(label))} 끄세요.`, `Turn off ${label}.`, K(label), label, title, sc, null]; };
/** 목록에서 하나 고르기(체크) */
export const pick = (title, label, options) => (ctx) => {
  const sc = { v: 'list', title, back: ctx.prev, groups: [{ rows: (options ?? [label]).map((o) => (o === label ? { label: o, check: true } : { label: o, chev: false })) }] };
  return [`‘${K(label)}’${eul(K(label))} 고르세요.`, `Choose ${label}.`, K(label), label, title, sc, null];
};
/** 다른 화면에서 누르기(문장 직접) */
export const tap = (sc, label, ko, en, a) => () => [ko ?? `‘${K(label)}’${eul(K(label))} 누르세요.`, en ?? `Tap ${label}.`, K(label), label, sc.v, sc, a ? { a } : null];
/** 설명 단계(누를 곳이 없거나 다른 곳) */
export const say = (ko, en, sc, t, a) => () => [ko, en, '', '', sc?.v ?? '', { ...(sc ?? { v: 'home' }) }, t ? { t, a } : a ? { a } : null];

/** 수업 하나: L('slug', 단계들...) */
export function L(...ops) {
  const ctx = { prev: 'Settings' }; const steps = []; const screens = [];
  for (const op of ops) {
    const [ko, en, tko, ten, shot, sc, x] = op(ctx);
    steps.push([ko, en, tko, ten, shot]);
    screens.push({ ...sc, ...(x?.t ? { t: x.t } : {}), ...(x?.a ? { a: x.a } : {}) });
  }
  return { steps, screens };
}
/** 홈 버튼 기종 그림으로(Touch ID 등) */
export const homeModel = (x) => ({ ...x, screens: x.screens.map((s) => ({ ...s, model: 'home' })) });
/** 설정 › a › b … 로 들어가는 단계 묶음 */
export const path = (...labels) => { const ops = [open('Settings')]; let parent = 'Settings'; for (const l of labels) { ops.push(go(parent, l)); parent = l; } return ops; };
