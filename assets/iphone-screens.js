// 아이폰 화면 재현 그림(코드로 그림) — 교육용. Apple 아이콘·로고 그림을 복제하지 않고 색과 단순한 모양으로만 나타낸다.
// renderIphone(spec, target, action) → { svg, width, height, targets, target }
// 화면 글자는 영어 원문을 키로 쓰고, setIpLang('ko')이면 한국어 아이폰 메뉴 이름으로 그린다(누를 곳 이름은 영어 키 그대로).
const W = 360; const H = 760;
const C = { ink: '#000', sub: '#8e8e93', line: '#c6c6c8', bg: '#f2f2f7', blue: '#007aff', green: '#34c759', red: '#ff3b30', orange: '#ff9500', gray: '#8e8e93', key: '#fff', kbd: '#d1d3d9' };
let DICT = null; let LANG = 'en'; let MODEL = 'face';
/** 화면 언어(ko/en)와 사전, 기종 모양(face = Face ID, home = 홈 버튼) */
export function setIpLang(lang, dict = null) { LANG = lang ?? 'en'; DICT = dict; }
export function setIpModel(m) { MODEL = m === 'home' ? 'home' : 'face'; }
const tr = (s) => (LANG !== 'en' && DICT && DICT[s] != null ? DICT[s] : String(s ?? ''));
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cw = (ch) => (/[ᄀ-ᅟ⺀-꓏가-힣豈-﫿＀-｠]/.test(ch) ? 1.8 : 1);
const width = (t) => [...String(t)].reduce((a, ch) => a + cw(ch), 0);
const fit = (s, n) => { const t = tr(s); if (width(t) <= n) return t; let o = ''; for (const ch of t) { if (width(o + ch) > n - 1) break; o += ch; } return `${o}…`; };
function wrap(s, max) {
  const t = tr(s); const out = []; let line = '';
  for (const w of t.split(' ')) { if (width(`${line} ${w}`.trim()) > max && line) { out.push(line); line = w; } else line = `${line} ${w}`.trim(); }
  if (line) out.push(line);
  return out;
}
function canvas() {
  const parts = []; const targets = {};
  return {
    add(s) { parts.push(s); },
    reg(n, x, y, w, h) { if (n && !targets[n]) targets[n] = { x, y, w, h }; },
    rect(x, y, w, h, fill, r = 0, extra = '') { parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`); },
    text(x, y, s, { size = 16, fill = C.ink, weight = 400, anchor = 'start', raw = false } = {}) { parts.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${esc(raw ? s : tr(s))}</text>`); },
    out() { return { body: parts.join(''), targets }; },
  };
}

/* ---------- 앱 아이콘(단순한 모양, 원본 그림 아님) ---------- */
const APP = {
  Phone: ['#34c759', 'phone'], Messages: ['#34c759', 'bubble'], Camera: ['#8e8e93', 'camera'], Photos: ['#fff', 'petals'], Settings: ['#8e8e93', 'gear'],
  Safari: ['#1e90ff', 'compass'], Clock: ['#1c1c1e', 'clock'], Weather: ['#3a8ee6', 'sun'], Notes: ['#fff', 'notes'], Contacts: ['#a2a2a7', 'person'],
  FaceTime: ['#34c759', 'video'], 'App Store': ['#1e90ff', 'store'], Maps: ['#6cc24a', 'map'], Health: ['#fff', 'heart'], 'Find My': ['#34c759', 'radar'],
  Calculator: ['#1c1c1e', 'calc'], Magnifier: ['#1c1c1e', 'lens'], Calendar: ['#fff', 'cal'], Mail: ['#1e90ff', 'mail'], Wallet: ['#1c1c1e', 'cards'],
  Music: ['#fc3c44', 'note'], Files: ['#1e90ff', 'folder'], Reminders: ['#fff', 'list'], 'Voice Memos': ['#1c1c1e', 'wave'],
};
function glyph(x, y, s, kind, bg) {
  const k = s / 60; const ink = ['#fff', '#ffffff'].includes(bg) ? '#555' : '#fff';
  const g = {
    phone: `<path d="M${x + 20 * k} ${y + 16 * k} l7 -2 l5 11 l-5 4 q4 9 12 13 l4 -5 l11 5 l-2 7 q-24 4 -32 -33z" fill="#fff"/>`,
    bubble: `<ellipse cx="${x + 30 * k}" cy="${y + 28 * k}" rx="${20 * k}" ry="${16 * k}" fill="#fff"/><path d="M${x + 16 * k} ${y + 40 * k} l-4 9 l12 -5z" fill="#fff"/>`,
    camera: `<rect x="${x + 12 * k}" y="${y + 20 * k}" width="${36 * k}" height="${26 * k}" rx="${5 * k}" fill="#3a3a3c"/><circle cx="${x + 30 * k}" cy="${y + 33 * k}" r="${8 * k}" fill="#8e8e93" stroke="#fff" stroke-width="${2 * k}"/>`,
    petals: ['#ff9500', '#ffcc00', '#34c759', '#5ac8fa', '#007aff', '#af52de', '#ff2d55', '#ff3b30'].map((col, i) => { const a = (i * Math.PI) / 4; return `<ellipse cx="${x + 30 * k + Math.cos(a) * 11 * k}" cy="${y + 30 * k + Math.sin(a) * 11 * k}" rx="${9 * k}" ry="${5 * k}" fill="${col}" opacity=".85" transform="rotate(${i * 45} ${x + 30 * k + Math.cos(a) * 11 * k} ${y + 30 * k + Math.sin(a) * 11 * k})"/>`; }).join(''),
    gear: `<circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${17 * k}" fill="none" stroke="#fff" stroke-width="${6 * k}" stroke-dasharray="${5 * k} ${3 * k}"/><circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${8 * k}" fill="none" stroke="#fff" stroke-width="${3 * k}"/>`,
    compass: `<circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${20 * k}" fill="#fff"/><path d="M${x + 38 * k} ${y + 22 * k} l-5 12 l-11 4 l5 -12z" fill="#ff3b30"/>`,
    clock: `<circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${21 * k}" fill="#fff"/><path d="M${x + 30 * k} ${y + 16 * k} v14 h10" stroke="#000" stroke-width="${2.5 * k}" fill="none"/>`,
    sun: `<circle cx="${x + 24 * k}" cy="${y + 24 * k}" r="${9 * k}" fill="#ffd60a"/><ellipse cx="${x + 34 * k}" cy="${y + 38 * k}" rx="${16 * k}" ry="${9 * k}" fill="#fff"/>`,
    notes: `<rect x="${x}" y="${y}" width="${s}" height="${16 * k}" fill="#ffd60a"/>${[26, 34, 42, 50].map((yy) => `<line x1="${x + 10 * k}" y1="${y + yy * k}" x2="${x + 50 * k}" y2="${y + yy * k}" stroke="#d1d1d6" stroke-width="${1.5 * k}"/>`).join('')}`,
    person: `<circle cx="${x + 30 * k}" cy="${y + 24 * k}" r="${10 * k}" fill="#fff"/><path d="M${x + 12 * k} ${y + 50 * k} q18 -24 36 0z" fill="#fff"/>`,
    video: `<rect x="${x + 10 * k}" y="${y + 20 * k}" width="${26 * k}" height="${20 * k}" rx="${4 * k}" fill="#fff"/><path d="M${x + 38 * k} ${y + 30 * k} l12 -8 v16z" fill="#fff"/>`,
    store: `<path d="M${x + 20 * k} ${y + 44 * k} l10 -26 l10 26 M${x + 16 * k} ${y + 36 * k} h28" stroke="#fff" stroke-width="${4 * k}" fill="none" stroke-linecap="round"/>`,
    map: `<path d="M${x} ${y + 40 * k} L${x + s} ${y + 18 * k}" stroke="#ffd60a" stroke-width="${7 * k}"/><circle cx="${x + 40 * k}" cy="${y + 22 * k}" r="${7 * k}" fill="#ff3b30"/>`,
    heart: `<path d="M${x + 30 * k} ${y + 46 * k} l-15 -15 a8 8 0 0 1 15 -11 a8 8 0 0 1 15 11z" fill="#ff2d55"/>`,
    radar: `<circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${18 * k}" fill="none" stroke="#fff" stroke-width="${3 * k}"/><circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${9 * k}" fill="none" stroke="#fff" stroke-width="${3 * k}"/><circle cx="${x + 30 * k}" cy="${y + 30 * k}" r="${3 * k}" fill="#fff"/>`,
    calc: `${[0, 1, 2].map((r) => [0, 1, 2].map((cc) => `<circle cx="${x + (18 + cc * 12) * k}" cy="${y + (18 + r * 12) * k}" r="${4.5 * k}" fill="${cc === 2 ? '#ff9500' : '#a5a5a5'}"/>`).join('')).join('')}`,
    lens: `<circle cx="${x + 26 * k}" cy="${y + 26 * k}" r="${12 * k}" fill="none" stroke="#fff" stroke-width="${4 * k}"/><line x1="${x + 35 * k}" y1="${y + 35 * k}" x2="${x + 46 * k}" y2="${y + 46 * k}" stroke="#fff" stroke-width="${5 * k}" stroke-linecap="round"/>`,
    cal: `<text x="${x + 30 * k}" y="${y + 18 * k}" font-size="${10 * k}" fill="#ff3b30" text-anchor="middle" font-weight="700">${LANG === 'ko' ? '화요일' : 'TUE'}</text><text x="${x + 30 * k}" y="${y + 46 * k}" font-size="${26 * k}" fill="#000" text-anchor="middle">9</text>`,
    mail: `<rect x="${x + 12 * k}" y="${y + 18 * k}" width="${36 * k}" height="${24 * k}" rx="${3 * k}" fill="#fff"/><path d="M${x + 12 * k} ${y + 18 * k} l18 14 l18 -14" stroke="#1e90ff" stroke-width="${2 * k}" fill="none"/>`,
    cards: ['#ff9500', '#34c759', '#007aff'].map((col, i) => `<rect x="${x + 12 * k}" y="${y + (16 + i * 8) * k}" width="${36 * k}" height="${14 * k}" rx="${3 * k}" fill="${col}"/>`).join(''),
    note: `<path d="M${x + 24 * k} ${y + 44 * k} v-26 l16 -4 v24" stroke="#fff" stroke-width="${4 * k}" fill="none"/><circle cx="${x + 20 * k}" cy="${y + 44 * k}" r="${5 * k}" fill="#fff"/>`,
    folder: `<path d="M${x + 10 * k} ${y + 20 * k} h14 l4 5 h22 v22 h-40z" fill="#fff"/>`,
    list: `${[20, 32, 44].map((yy, i) => `<circle cx="${x + 16 * k}" cy="${y + yy * k}" r="${4 * k}" fill="${['#ff9500', '#007aff', '#ff3b30'][i]}"/><line x1="${x + 25 * k}" y1="${y + yy * k}" x2="${x + 48 * k}" y2="${y + yy * k}" stroke="#c7c7cc" stroke-width="${2 * k}"/>`).join('')}`,
    wave: `${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x + (14 + i * 6) * k}" y="${y + (30 - [6, 12, 18, 10, 14, 5][i]) * k}" width="${3 * k}" height="${[12, 24, 36, 20, 28, 10][i] * k}" rx="${1.5 * k}" fill="#ff3b30"/>`).join('')}`,
  }[kind] ?? '';
  return g;
}
function appIcon(c, x, y, name, s = 60, label = true) {
  const [bg, kind] = APP[name] ?? ['#8e8e93', 'gear'];
  c.add(`<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * 0.225}" fill="${bg}" ${bg === '#fff' ? 'stroke="#e5e5ea"' : ''}/>${glyph(x, y, s, kind, bg)}`);
  if (label) c.text(x + s / 2, y + s + 15, fit(name, 9), { size: 11.5, fill: c.dark ? '#fff' : '#fff', anchor: 'middle', raw: true });
  c.reg(name, x - 4, y - 4, s + 8, s + 22);
}
/** 설정 행 아이콘(색 사각형 + 흰 표시) */
const ROWICON = {
  General: '#8e8e93', Accessibility: '#007aff', 'Display & Brightness': '#007aff', 'Sounds & Haptics': '#ff2d55', Battery: '#34c759', 'Face ID & Passcode': '#34c759', 'Touch ID & Passcode': '#ff2d55',
  'Wi-Fi': '#007aff', Bluetooth: '#007aff', 'Control Center': '#8e8e93', Siri: '#1c1c1e', 'Emergency SOS': '#ff3b30', Privacy: '#007aff', 'App Store': '#007aff', Focus: '#5856d6', 'Screen Time': '#5856d6', Notifications: '#ff3b30', Cellular: '#34c759', 'Airplane Mode': '#ff9500', Wallpaper: '#5ac8fa', 'Home Screen & App Library': '#5856d6', Camera: '#8e8e93', 'Action Button': '#007aff',
  About: '#8e8e93', 'Software Update': '#8e8e93', 'iPhone Storage': '#8e8e93', iCloud: '#5ac8fa', Touch: '#007aff', Zoom: '#007aff', VoiceOver: '#007aff', 'Spoken Content': '#007aff', 'Assistive Access': '#1c1c1e', 'Display & Text Size': '#007aff',
};
function rowIcon(c, x, y, label) { const col = ROWICON[label] ?? '#8e8e93'; c.rect(x, y, 30, 30, col, 7); c.add(`<circle cx="${x + 15}" cy="${y + 15}" r="6" fill="none" stroke="#fff" stroke-width="2.4"/>`); }

/* ---------- 공통 틀 ---------- */
function statusBar(c, { dark = false, time = '9:41', charging = false } = {}) {
  const f = dark ? '#fff' : '#000';
  if (MODEL === 'face') c.rect(W / 2 - 60, 11, 120, 34, '#000', 17);
  c.text(MODEL === 'face' ? 46 : 20, 34, time, { size: 16, weight: 600, fill: f, anchor: MODEL === 'face' ? 'middle' : 'start', raw: true });
  const bx = W - 44;
  c.add(`<g fill="${f}">${[0, 1, 2, 3].map((i) => `<rect x="${bx - 52 + i * 5}" y="${30 - i * 3}" width="3.5" height="${4 + i * 3}" rx="1"/>`).join('')}<path d="M${bx - 22} 24 a12 12 0 0 1 16 0 l-2.4 2.6 a8.5 8.5 0 0 0 -11.2 0z M${bx - 17.5} 29 a5 5 0 0 1 7 0 l-3.5 3.6z"/><rect x="${bx}" y="23" width="25" height="12" rx="3.5" fill="none" stroke="${f}" stroke-opacity=".5"/><rect x="${bx + 2}" y="25" width="${charging ? 13 : 19}" height="8" rx="2"/><rect x="${bx + 26}" y="27" width="1.6" height="4" rx=".8"/></g>`);
  if (charging) c.add(`<path d="M${bx + 13} 22 l-4 7 h3 l-2 6 l5 -8 h-3z" fill="${C.green}"/>`);
  c.reg('Battery icon', bx - 6, 14, 40, 30); c.reg('Top right corner', W - 110, 0, 110, 50); c.reg('Top middle', W / 2 - 70, 0, 140, 50);
}
function homeIndicator(c, dark = false) { if (MODEL === 'face') { c.rect(W / 2 - 67, H - 13, 134, 5, dark ? '#fff' : '#000', 2.5); c.reg('Home indicator', W / 2 - 90, H - 40, 180, 40); } }
function navBar(c, { title, back, right, large = false, bg = C.bg }) {
  c.rect(0, 0, W, large ? 118 : 96, bg);
  statusBar(c);
  if (back) { c.add(`<path d="M18 63 l-8 -8 l8 -8" stroke="${C.blue}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`); c.text(26, 61, fit(back, title && !large ? 8 : 14), { size: 17, fill: C.blue, raw: true }); c.reg(back, 4, 42, 110, 34); c.reg('Back', 4, 42, 110, 34); }
  if (right) { c.text(W - 16, 61, right, { size: 17, fill: C.blue, anchor: 'end', weight: 600 }); c.reg(right, W - 110, 42, 106, 34); }
  if (title && !large) c.text(W / 2 + (back ? 18 : 0), 61, fit(title, back || right ? 15 : 20), { size: 17, weight: 600, anchor: 'middle', raw: true });
  if (title && large) c.text(16, 108, fit(title, 18), { size: 32, weight: 700, raw: true });
  return large ? 126 : 96;
}
function toggle(c, x, y, on) { c.rect(x, y, 51, 31, on ? C.green : '#e9e9eb', 15.5); c.add(`<circle cx="${on ? x + 35.5 : x + 15.5}" cy="${y + 15.5}" r="13.5" fill="#fff" filter="url(#sh)"/>`); }
function tabBar(c, items, on) {
  c.rect(0, H - 84, W, 84, '#f9f9f9'); c.add(`<line x1="0" y1="${H - 84}" x2="${W}" y2="${H - 84}" stroke="${C.line}"/>`);
  const w = W / items.length;
  items.forEach((t, i) => { const x = w * i + w / 2; const col = i === on ? C.blue : C.gray; c.add(`<circle cx="${x}" cy="${H - 62}" r="9" fill="none" stroke="${col}" stroke-width="2.2"/>`); c.text(x, H - 38, fit(t, 9), { size: 10.5, fill: col, anchor: 'middle', weight: 500, raw: true }); c.reg(t, w * i, H - 84, w, 52); });
  homeIndicator(c);
}
const dim = (c, a = 0.4) => c.rect(0, 0, W, H, `rgba(0,0,0,${a})`);

/* ---------- 화면 종류 ---------- */
const HOME_APPS = ['FaceTime', 'Calendar', 'Photos', 'Camera', 'Mail', 'Clock', 'Weather', 'Notes', 'Reminders', 'Contacts', 'App Store', 'Maps', 'Health', 'Wallet', 'Settings', 'Find My', 'Calculator', 'Magnifier', 'Files', 'Voice Memos'];
const V = {
  // 홈 화면: 앱 4줄 × 5칸, 아래 고정 앱 4개
  home(c, s) {
    c.add(`<defs><linearGradient id="wp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d6bd8"/><stop offset=".55" stop-color="#7a5bd6"/><stop offset="1" stop-color="#e3739a"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#wp)"/>`);
    statusBar(c, { dark: true, charging: s.charging });
    const apps = s.apps ?? (s.page2 ? ['Music', 'Files', 'Voice Memos', 'Calculator', 'Magnifier'] : HOME_APPS);
    apps.forEach((a, i) => appIcon(c, 22 + (i % 4) * 82, (MODEL === 'face' ? 74 : 54) + Math.floor(i / 4) * 92, a));
    c.add(`<g fill="#fff">${[0, 1].map((i) => `<circle cx="${W / 2 - 6 + i * 12}" cy="${H - 150}" r="3.5" opacity="${(s.page2 ? i === 1 : i === 0) ? 1 : 0.4}"/>`).join('')}</g>`);
    c.rect(12, H - 128, W - 24, 100, 'rgba(255,255,255,.28)', 30);
    ['Phone', 'Safari', 'Messages', 'Music'].forEach((a, i) => { const [bg, kind] = APP[a]; const x = 30 + i * 80; const y = H - 108; c.add(`<rect x="${x}" y="${y}" width="60" height="60" rx="13.5" fill="${bg}"/>${glyph(x, y, 60, kind, bg)}`); c.reg(a, x - 4, y - 4, 68, 68); });
    if (s.menu) { dim(c, 0.25); const y = 300; c.rect(40, y, 230, 150, 'rgba(250,250,250,.96)', 14); s.menu.forEach((m, i) => { c.text(58, y + 32 + i * 46, m, { size: 16.5, fill: /Remove|Delete/.test(m) ? C.red : C.ink }); if (i) c.add(`<line x1="40" y1="${y + 8 + i * 46}" x2="270" y2="${y + 8 + i * 46}" stroke="#d1d1d6"/>`); c.reg(m, 40, y + 6 + i * 46, 230, 46); }); appIcon(c, 40, y - 90, s.menuApp ?? 'Weather'); }
    if (s.thumb) { c.rect(16, H - 260, 110, 210, '#fff', 10, 'stroke="#fff" stroke-width="4"'); c.rect(20, H - 256, 102, 202, '#7a5bd6', 8); c.reg('Screenshot', 16, H - 260, 110, 210); }
    if (s.volume) { c.rect(10, 170, 8, 120, 'rgba(255,255,255,.5)', 4); c.rect(10, 230, 8, 60, '#fff', 4); }
    if (s.assist) { c.add(`<circle cx="${W - 40}" cy="420" r="26" fill="rgba(60,60,60,.75)"/><circle cx="${W - 40}" cy="420" r="17" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="3"/>`); c.reg('AssistiveTouch button', W - 70, 390, 60, 60); }
    if (s.zoom) c.add(`<rect x="40" y="200" width="280" height="200" rx="14" fill="none" stroke="#fff" stroke-width="4"/><rect x="44" y="204" width="272" height="192" rx="12" fill="rgba(255,255,255,.12)"/>`);
    if (MODEL === 'face') homeIndicator(c, true); else c.reg('Bottom edge', 0, H - 26, W, 26);
    if (s.banner) { c.rect(10, 52, W - 20, 70, 'rgba(250,250,250,.96)', 18); appIcon(c, 22, 64, s.banner.app, 38, false); c.text(72, 82, s.banner.app, { size: 14, weight: 600 }); c.text(72, 104, fit(s.banner.text, 28), { size: 14, fill: '#3c3c43', raw: true }); c.reg('Notification', 10, 52, W - 20, 70); }
    if (s.siri) { c.add(`<circle cx="${W / 2}" cy="${H - 60}" r="26" fill="url(#wp)" stroke="#fff" stroke-width="3"/>`); c.reg('Siri', W / 2 - 30, H - 90, 60, 60); }
    if (s.speak) { c.rect(60, 120, 240, 54, 'rgba(40,40,40,.85)', 14); ['‹‹', '▶', '››', '×'].forEach((t, i) => c.text(90 + i * 60, 155, t, { size: 20, fill: '#fff', anchor: 'middle', raw: true })); c.reg('Speak Screen controller', 60, 120, 240, 54); }
  },
  // 설정형 목록
  list(c, s) {
    c.rect(0, 0, W, H, C.bg);
    let y = navBar(c, { title: s.title, back: s.back, right: s.right, large: s.large });
    if (s.search) { c.rect(16, y, W - 32, 36, '#e3e3e8', 10); c.text(40, y + 24, s.search, { size: 16, fill: C.sub }); c.reg(s.search, 16, y, W - 32, 36); c.reg('Search', 16, y, W - 32, 36); y += 50; }
    if (s.profile) { c.rect(16, y, W - 32, 70, '#fff', 12); c.add(`<circle cx="50" cy="${y + 35}" r="22" fill="#a2a2a7"/>`); c.text(84, y + 32, s.profile, { size: 18, weight: 600, raw: true }); c.text(84, y + 52, 'Apple Account, iCloud and more', { size: 13, fill: C.sub }); c.reg(s.profile, 16, y, W - 32, 70); c.reg('Your name', 16, y, W - 32, 70); y += 86; }
    if (s.slider) { c.rect(16, y, W - 32, 120, '#fff', 12); c.text(36, y + 40, 'A', { size: 14, raw: true }); c.text(W - 36, y + 46, 'A', { size: 26, raw: true, anchor: 'end' }); c.rect(60, y + 36, W - 120, 4, '#d1d1d6', 2); const p = s.slider; c.rect(60, y + 36, (W - 120) * p, 4, C.blue, 2); c.add(`<circle cx="${60 + (W - 120) * p}" cy="${y + 38}" r="13" fill="#fff" filter="url(#sh)"/>`); c.reg('Text size slider', 40, y + 14, W - 80, 50); c.text(W / 2, y + 96, fit(s.sliderNote ?? 'Apps that support Dynamic Type will adjust to your preferred reading size below.', 40), { size: 12.5, fill: C.sub, anchor: 'middle', raw: true }); y += 136; }
    for (const g of s.groups ?? []) {
      if (g.header) { c.text(32, y + 14, g.header, { size: 13, fill: C.sub }); y += 22; }
      const rows = g.rows; const h = 46;
      c.rect(16, y, W - 32, rows.length * h, '#fff', 12);
      rows.forEach((r0, i) => {
        const r = typeof r0 === 'string' ? { label: r0, chev: true } : r0;
        const ry = y + i * h; const icon = g.icons ? 70 : 32;
        if (g.icons) rowIcon(c, 28, ry + 8, r.label);
        if (r.check) c.add(`<path d="M${W - 50} ${ry + 23} l6 6 l11 -12" stroke="${C.blue}" stroke-width="2.6" fill="none"/>`);
        c.text(icon, ry + 29, fit(r.label, r.value || r.toggle !== undefined ? 22 : 30), { size: 16.5, fill: r.red ? C.red : r.blue ? C.blue : C.ink, raw: true });
        if (r.value) c.text(W - (r.chev === false ? 32 : 46), ry + 29, fit(r.value, 12), { size: 16, fill: C.sub, anchor: 'end', raw: true });
        if (r.toggle !== undefined) toggle(c, W - 83, ry + 8, r.toggle);
        else if (r.chev !== false && !r.check && !r.red && !r.blue) c.add(`<path d="M${W - 34} ${ry + 17} l6 6 l-6 6" stroke="#c4c4c6" stroke-width="2.2" fill="none"/>`);
        if (i) c.add(`<line x1="${icon}" y1="${ry}" x2="${W - 16}" y2="${ry}" stroke="#e5e5ea"/>`);
        c.reg(r.label, 16, ry, W - 32, h);
      });
      y += rows.length * h;
      if (g.footer) { const ls = wrap(g.footer, 42); ls.forEach((l, i) => c.text(32, y + 20 + i * 17, l, { size: 13, fill: C.sub, raw: true })); y += ls.length * 17 + 12; }
      y += 22;
    }
    if (s.keyboard) keyboard(c, s.keyboard);
    homeIndicator(c);
  },
  // 경고창(가운데)
  alert(c, s) {
    V[s.base?.v ?? 'list'](c, s.base ?? { groups: [] }); dim(c);
    const lines = s.message ? wrap(s.message, 30) : [];
    const h = 90 + lines.length * 19 + (s.input ? 46 : 0) + (s.buttons.length > 2 ? s.buttons.length * 44 : 44);
    const y0 = (H - h) / 2; const x0 = 45; const w = W - 90;
    c.rect(x0, y0, w, h, 'rgba(242,242,247,.97)', 14);
    c.text(W / 2, y0 + 36, fit(s.title, 26), { size: 17, weight: 600, anchor: 'middle', raw: true });
    lines.forEach((l, i) => c.text(W / 2, y0 + 60 + i * 19, l, { size: 13.5, anchor: 'middle', raw: true }));
    let by = y0 + 72 + lines.length * 19;
    if (s.input) { c.rect(x0 + 16, by, w - 32, 32, '#fff', 6); c.text(x0 + 26, by + 21, s.input, { size: 14, fill: C.sub }); c.reg(s.input, x0 + 16, by, w - 32, 32); by += 46; }
    c.add(`<line x1="${x0}" y1="${by}" x2="${x0 + w}" y2="${by}" stroke="#c6c6c8"/>`);
    if (s.buttons.length === 2) {
      s.buttons.forEach((b, i) => { c.text(x0 + w / 4 + (i * w) / 2, by + 28, b, { size: 17, fill: /Delete|Block|Remove|Erase/.test(b) ? C.red : C.blue, weight: i ? 600 : 400, anchor: 'middle' }); c.reg(b, x0 + (i * w) / 2, by, w / 2, 44); });
      c.add(`<line x1="${W / 2}" y1="${by}" x2="${W / 2}" y2="${by + 44}" stroke="#c6c6c8"/>`);
    } else s.buttons.forEach((b, i) => { c.text(W / 2, by + 28 + i * 44, b, { size: 17, fill: /Delete|Block|Remove/.test(b) ? C.red : C.blue, anchor: 'middle' }); if (i) c.add(`<line x1="${x0}" y1="${by + i * 44}" x2="${x0 + w}" y2="${by + i * 44}" stroke="#c6c6c8"/>`); c.reg(b, x0, by + i * 44, w, 44); });
  },
  // 아래에서 올라오는 선택 창
  sheet(c, s) {
    V[s.base?.v ?? 'list'](c, s.base ?? { groups: [] }); dim(c);
    const n = s.buttons.length; let y = H - 30 - 58 - n * 56 - (s.title ? 50 : 0);
    c.rect(10, y, W - 20, n * 56 + (s.title ? 50 : 0), 'rgba(242,242,247,.97)', 14);
    if (s.title) { c.text(W / 2, y + 30, fit(s.title, 34), { size: 13, fill: C.sub, anchor: 'middle', raw: true }); y += 50; }
    s.buttons.forEach((b, i) => { if (i || s.title) c.add(`<line x1="10" y1="${y + i * 56}" x2="${W - 10}" y2="${y + i * 56}" stroke="#c6c6c8"/>`); c.text(W / 2, y + i * 56 + 35, b, { size: 19, fill: /Delete|Block|Remove|Erase/.test(b) ? C.red : C.blue, anchor: 'middle' }); c.reg(b, 10, y + i * 56, W - 20, 56); });
    c.rect(10, H - 82, W - 20, 56, '#fff', 14); c.text(W / 2, H - 46, 'Cancel', { size: 19, fill: C.blue, weight: 600, anchor: 'middle' }); c.reg('Cancel', 10, H - 82, W - 20, 56);
  },
  // 잠금 화면
  lock(c, s) {
    c.add(`<defs><linearGradient id="lk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3a7a"/><stop offset="1" stop-color="#6f4fb8"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#lk)"/>`);
    statusBar(c, { dark: true });
    c.add(`<path d="M${W / 2 - 7} 76 v-5 a7 7 0 0 1 14 0 ${s.open ? 'v-1' : 'v5'}" stroke="#fff" stroke-width="2.2" fill="none"/><rect x="${W / 2 - 9}" y="76" width="18" height="13" rx="3" fill="#fff"/>`);
    c.text(W / 2, 128, s.date ?? 'Tuesday, September 9', { size: 19, fill: '#fff', anchor: 'middle', weight: 500 });
    c.text(W / 2, 214, '9:41', { size: 92, fill: '#fff', anchor: 'middle', weight: 700, raw: true });
    if (s.call) { c.text(W / 2, 300, s.call, { size: 30, fill: '#fff', anchor: 'middle', raw: true }); c.text(W / 2, 330, 'mobile', { size: 16, fill: '#ddd', anchor: 'middle' }); c.rect(40, H - 170, W - 80, 64, 'rgba(255,255,255,.25)', 32); c.add(`<circle cx="74" cy="${H - 138}" r="27" fill="${C.green}"/>`); c.text(W / 2 + 18, H - 132, 'slide to answer', { size: 18, fill: '#fff', anchor: 'middle' }); c.reg('slide to answer', 40, H - 170, W - 80, 64); }
    else {
      [['Flashlight', 52], ['Camera', W - 52]].forEach(([n, x]) => { c.add(`<circle cx="${x}" cy="${H - 88}" r="25" fill="rgba(0,0,0,.35)"/><circle cx="${x}" cy="${H - 88}" r="7" fill="none" stroke="#fff" stroke-width="2"/>`); c.reg(n, x - 28, H - 116, 56, 56); });
      c.text(W / 2, H - 40, MODEL === 'face' ? 'Swipe up to open' : 'Press home to open', { size: 14, fill: '#fff', anchor: 'middle' });
    }
    homeIndicator(c, true);
  },
  // 검은 화면(꺼짐·로고)
  black(c, s) {
    c.rect(0, 0, W, H, '#000');
    if (s.logo) {
      // 시작 화면의 사과 로고(단순한 사과 실루엣: 위아래 오목, 오른쪽 한입 베어 문 자리, 위에 잎)
      const x = W / 2; const y = H / 2;
      c.add(`<path d="M${x} ${y - 22} C${x - 8} ${y - 30} ${x - 37} ${y - 32} ${x - 37} ${y - 2} C${x - 37} ${y + 24} ${x - 22} ${y + 43} ${x - 12} ${y + 43} C${x - 6} ${y + 43} ${x - 4} ${y + 39} ${x} ${y + 39} C${x + 4} ${y + 39} ${x + 6} ${y + 43} ${x + 12} ${y + 43} C${x + 22} ${y + 43} ${x + 33} ${y + 27} ${x + 36} ${y + 17} C${x + 23} ${y + 11} ${x + 21} ${y - 11} ${x + 32} ${y - 19} C${x + 26} ${y - 28} ${x + 9} ${y - 30} ${x} ${y - 22}Z" fill="#fff"/><path d="M${x + 1} ${y - 27} C${x} ${y - 39} ${x + 9} ${y - 48} ${x + 19} ${y - 50} C${x + 19} ${y - 39} ${x + 11} ${y - 29} ${x + 1} ${y - 27}Z" fill="#fff"/>`);
    }
    if (s.text) c.text(W / 2, H - 120, s.text, { size: 15, fill: '#888', anchor: 'middle' });
  },
  // 전원 끄기 화면
  power(c) {
    c.add(`<defs><linearGradient id="pw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2b30"/><stop offset="1" stop-color="#151518"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#pw)"/>`);
    statusBar(c, { dark: true });
    const sl = (y, label, col, key) => { c.rect(30, y, W - 60, 64, 'rgba(255,255,255,.18)', 32); c.add(`<circle cx="62" cy="${y + 32}" r="27" fill="${col}"/>`); c.text(W / 2 + 22, y + 39, label, { size: 18, fill: '#fff', anchor: 'middle' }); c.reg(key, 30, y, W - 60, 64); };
    sl(80, 'slide to power off', '#fff', 'slide to power off');
    c.add('<path d="M62 100 v12 M54 104 a11 11 0 1 0 16 0" stroke="#ff3b30" stroke-width="3" fill="none" stroke-linecap="round"/>');
    sl(H - 290, 'Medical ID', '#fff', 'Medical ID'); sl(H - 210, 'Emergency SOS', C.red, 'Emergency SOS');
    c.text(W / 2, H - 70, 'Cancel', { size: 17, fill: '#fff', anchor: 'middle' }); c.reg('Cancel', W / 2 - 60, H - 96, 120, 40);
  },
  // 휴대폰 앞모습과 버튼
  device(c, s) {
    c.rect(0, 0, W, H, '#f2f2f7');
    const x = 90; const y = 70; const w = 180; const h = 380;
    c.rect(x, y, w, h, '#1c1c1e', 34); c.rect(x + 8, y + 8, w - 16, h - 16, '#3d6bd8', 28);
    if (MODEL === 'face') c.rect(x + w / 2 - 28, y + 16, 56, 15, '#000', 8); else { c.rect(x + 8, y + 50, w - 16, h - 120, '#3d6bd8', 0); c.add(`<circle cx="${x + w / 2}" cy="${y + h - 32}" r="20" fill="#1c1c1e" stroke="#555" stroke-width="2"/>`); c.reg('Home button', x + w / 2 - 26, y + h - 58, 52, 52); }
    const btn = (bx, by, bw, bh, key) => { c.rect(bx, by, bw, bh, '#48484a', 2); if (key) c.reg(key, bx - 14, by - 6, bw + 28, bh + 12); };
    btn(x + w, y + 110, 6, 70, 'Side button');
    btn(x - 6, y + 60, 6, 26, MODEL === 'face' ? 'Action button' : 'Ring/Silent switch'); btn(x - 6, y + 110, 6, 44, 'Volume up'); btn(x - 6, y + 164, 6, 44, 'Volume down');
    if (s.port) { c.rect(x + w / 2 - 18, y + h - 2, 36, 6, '#48484a', 3); c.reg('Charging port', x + w / 2 - 40, y + h - 16, 80, 30); }
    if (s.cable) c.add(`<path d="M${W / 2} ${y + h + 6} v40 q0 40 60 60" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M${W / 2} ${y + h + 6} v40 q0 40 60 60" stroke="#c7c7cc" stroke-width="2" fill="none"/><rect x="${W / 2 + 40}" y="${y + h + 96}" width="70" height="56" rx="10" fill="#fff" stroke="#c7c7cc"/>`);
    if (s.bolt) c.add(`<path d="M${W / 2 + 4} ${y + 160} l-22 40 h18 l-8 36 l26 -46 h-18z" fill="#fff"/>`);
    if (s.caption) wrap(s.caption, 36).forEach((l, i) => c.text(W / 2, y + h + (s.cable ? 190 : 60) + i * 22, l, { size: 16, anchor: 'middle', raw: true }));
  },
  // 제어 센터
  control(c, s) {
    c.add(`<rect width="${W}" height="${H}" fill="#2c3550"/><rect width="${W}" height="${H}" fill="rgba(20,20,30,.55)"/>`);
    statusBar(c, { dark: true });
    const tile = (x, y, w, h, r = 22) => c.rect(x, y, w, h, 'rgba(255,255,255,.16)', r);
    tile(24, 80, 150, 150);
    [['Airplane Mode', 62, 118, s.airplane ? C.orange : 'rgba(255,255,255,.3)'], ['Cellular Data', 136, 118, C.green], ['Wi-Fi', 62, 192, C.blue], ['Bluetooth', 136, 192, C.blue]].forEach(([n, x, y, col]) => { c.add(`<circle cx="${x}" cy="${y}" r="26" fill="${col}"/>`); c.reg(n, x - 30, y - 30, 60, 60); });
    tile(186, 80, 150, 150); c.text(206, 140, 'Not Playing', { size: 14, fill: '#fff' });
    tile(24, 242, 150, 66); c.add('<circle cx="58" cy="275" r="18" fill="rgba(255,255,255,.3)"/>'); c.text(86, 281, 'Focus', { size: 15, fill: '#fff', weight: 600 }); c.reg('Focus', 24, 242, 150, 66);
    tile(186, 242, 66, 150); c.rect(186, 312, 66, 80, '#fff', 0); c.add('<circle cx="219" cy="365" r="8" fill="#ffcc00"/>'); c.reg('Brightness', 186, 242, 66, 150);
    tile(270, 242, 66, 150); c.rect(270, 340, 66, 52, '#fff', 0); c.reg('Volume', 270, 242, 66, 150);
    tile(24, 320, 66, 66); c.add('<circle cx="57" cy="353" r="9" fill="none" stroke="#fff" stroke-width="2.4"/>'); c.reg('Orientation Lock', 24, 320, 66, 66);
    tile(108, 320, 66, 66); c.reg('Screen Mirroring', 108, 320, 66, 66);
    [['Flashlight', 24], ['Timer', 108], ['Calculator', 192], ['Camera', 276]].forEach(([n, x]) => { c.rect(x, 404, 60, 60, n === 'Flashlight' && s.flash ? '#fff' : 'rgba(255,255,255,.16)', 18); c.add(n === 'Flashlight' ? `<rect x="${x + 25}" y="420" width="10" height="28" rx="3" fill="${s.flash ? '#000' : '#fff'}"/>` : `<circle cx="${x + 30}" cy="434" r="9" fill="none" stroke="#fff" stroke-width="2.4"/>`); c.reg(n, x, 404, 60, 60); });
    c.rect(24, 480, 60, 60, s.silent ? C.red : 'rgba(255,255,255,.16)', 18); c.add('<path d="M46 516 v-12 a8 8 0 0 1 16 0 v12 l3 3 h-22z" fill="#fff"/>'); c.reg('Silent Mode', 24, 480, 60, 60);
    if (s.focus) { dim(c, 0.3); c.rect(24, 220, W - 48, 230, 'rgba(60,60,70,.95)', 22); ['Do Not Disturb', 'Personal', 'Sleep', 'Work'].forEach((t, i) => { c.rect(40, 236 + i * 52, W - 80, 44, 'rgba(255,255,255,.12)', 12); c.text(60, 264 + i * 52, t, { size: 16, fill: '#fff' }); c.reg(t, 40, 236 + i * 52, W - 80, 44); }); }
    homeIndicator(c, true);
  },
  // 알림 센터
  notif(c) {
    c.add(`<rect width="${W}" height="${H}" fill="#2a3c6e"/>`); statusBar(c, { dark: true });
    c.text(W / 2, 170, '9:41', { size: 80, fill: '#fff', anchor: 'middle', weight: 700, raw: true });
    [['Messages', 'Maria', 'Dinner at 7?'], ['Calendar', 'Doctor', 'Tomorrow 10:00']].forEach(([a, t, m], i) => { const y = 240 + i * 82; c.rect(12, y, W - 24, 72, 'rgba(250,250,250,.9)', 18); appIcon(c, 24, y + 16, a, 38, false); c.text(74, y + 32, t, { size: 15, weight: 600, raw: true }); c.text(74, y + 54, m, { size: 14, fill: '#3c3c43' }); c.reg(`${a} notification`, 12, y, W - 24, 72); c.reg('Notification', 12, y, W - 24, 72); });
    homeIndicator(c, true);
  },
  // 앱 전환 화면
  switcher(c) {
    c.add(`<rect width="${W}" height="${H}" fill="#3b4566"/>`);
    [['Safari', 40, 150], ['Messages', 100, 200], ['Photos', 160, 250]].forEach(([a, x, y]) => { c.rect(x, y, 180, 360, '#fff', 26); c.rect(x, y, 180, 50, '#f2f2f7', 26); appIcon(c, x + 6, y - 44, a, 34, false); c.text(x + 46, y - 22, a, { size: 14, fill: '#fff', weight: 600 }); c.reg(a, x, y, 180, 360); });
    homeIndicator(c, true);
  },
  // 키패드
  keypad(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    c.text(W / 2, 160, s.number ?? '', { size: 36, anchor: 'middle', raw: true });
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    keys.forEach((k, i) => { const x = 82 + (i % 3) * 98; const y = 230 + Math.floor(i / 3) * 90; c.add(`<circle cx="${x}" cy="${y}" r="38" fill="#e5e5ea"/>`); c.text(x, y + 12, k, { size: 34, anchor: 'middle', raw: true }); c.reg(k, x - 38, y - 38, 76, 76); });
    c.add(`<circle cx="180" cy="${230 + 4 * 90}" r="38" fill="${C.green}"/>`); c.add(`<path d="M168 ${226 + 4 * 90} l5 -2 l4 8 l-4 3 q3 6 9 9 l3 -4 l8 4 l-1 5 q-18 3 -24 -23z" fill="#fff"/>`); c.reg('Call', 142, 192 + 4 * 90, 76, 76);
    tabBar(c, ['Favorites', 'Recents', 'Contacts', 'Keypad', 'Voicemail'], 3);
  },
  // 걸려 오는 전화(잠금 해제 상태)
  incoming(c, s) {
    c.add(`<rect width="${W}" height="${H}" fill="#4a4f63"/>`); statusBar(c, { dark: true });
    c.text(W / 2, 150, s.name ?? 'Maria', { size: 34, fill: '#fff', anchor: 'middle', raw: true }); c.text(W / 2, 182, 'mobile', { size: 17, fill: '#ddd', anchor: 'middle' });
    [['Decline', 80, C.red], ['Accept', W - 80, C.green]].forEach(([n, x, col]) => { c.add(`<circle cx="${x}" cy="${H - 150}" r="38" fill="${col}"/>`); c.text(x, H - 92, n, { size: 15, fill: '#fff', anchor: 'middle' }); c.reg(n, x - 42, H - 192, 84, 110); });
    homeIndicator(c, true);
  },
  // 통화 중
  call(c, s) {
    c.add(`<rect width="${W}" height="${H}" fill="#3e4458"/>`); statusBar(c, { dark: true });
    c.text(W / 2, 140, s.name ?? 'Maria', { size: 32, fill: '#fff', anchor: 'middle', raw: true }); c.text(W / 2, 170, '00:12', { size: 17, fill: '#ddd', anchor: 'middle', raw: true });
    if (s.keypad) {
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].forEach((k, i) => { const x = 82 + (i % 3) * 98; const y = 240 + Math.floor(i / 3) * 86; c.add(`<circle cx="${x}" cy="${y}" r="36" fill="rgba(255,255,255,.25)"/>`); c.text(x, y + 12, k, { size: 32, fill: '#fff', anchor: 'middle', raw: true }); c.reg(k, x - 36, y - 36, 72, 72); });
      c.text(W - 60, H - 108, 'Hide', { size: 17, fill: '#fff', anchor: 'middle' }); c.reg('Hide', W - 110, H - 136, 100, 44);
    } else {
      [['Speaker', 'Speaker'], ['FaceTime', 'FaceTime'], ['Mute', 'Mute'], ['Add', 'Add'], ['End', null], ['Keypad', 'Keypad']].forEach(([n, key], i) => {
        const x = 82 + (i % 3) * 98; const y = 290 + Math.floor(i / 3) * 120;
        if (n === 'End') { c.add(`<circle cx="${x}" cy="${y}" r="36" fill="${C.red}"/>`); c.text(x, y + 56, 'End', { size: 14, fill: '#fff', anchor: 'middle' }); c.reg('End', x - 40, y - 40, 80, 100); return; }
        c.add(`<circle cx="${x}" cy="${y}" r="36" fill="${s.on === n ? '#fff' : 'rgba(255,255,255,.25)'}"/>`); c.text(x, y + 56, n, { size: 14, fill: '#fff', anchor: 'middle' }); c.reg(key, x - 40, y - 40, 80, 100);
      });
    }
    homeIndicator(c, true);
  },
  // 최근 통화
  recents(c) {
    c.rect(0, 0, W, H, '#fff'); let y = navBar(c, { title: 'Recents', large: true, bg: '#fff' });
    [['Maria', 'mobile', '9:12'], ['John', 'mobile', 'Yesterday'], ['+82 10 1234 5678', 'unknown', 'Monday']].forEach(([n, t, d], i) => { c.text(20, y + 26, n, { size: 17, weight: 600, raw: true, fill: i === 2 ? C.red : C.ink }); c.text(20, y + 46, t, { size: 14, fill: C.sub }); c.text(W - 60, y + 34, d, { size: 15, fill: C.sub, anchor: 'end' }); c.add(`<circle cx="${W - 30}" cy="${y + 30}" r="11" fill="none" stroke="${C.blue}" stroke-width="2"/><text x="${W - 30}" y="${y + 35}" font-size="13" fill="${C.blue}" text-anchor="middle">i</text>`); c.reg(i === 2 ? 'info button' : `${n} info`, W - 50, y + 8, 44, 44); c.reg(n, 0, y, W - 60, 60); c.add(`<line x1="20" y1="${y + 60}" x2="${W}" y2="${y + 60}" stroke="#e5e5ea"/>`); y += 60; });
    tabBar(c, ['Favorites', 'Recents', 'Contacts', 'Keypad', 'Voicemail'], 1);
  },
  // 연락처 카드
  contact(c, s) {
    c.rect(0, 0, W, H, C.bg); navBar(c, { back: s.back ?? 'Contacts', right: s.edit ? 'Done' : 'Edit' });
    c.add(`<circle cx="${W / 2}" cy="150" r="46" fill="#a2a2a7"/>`); c.text(W / 2, 228, s.name ?? 'Maria', { size: 26, weight: 600, anchor: 'middle', raw: true }); c.reg('Contact name', W / 2 - 100, 200, 200, 40);
    ['message', 'call', 'video', 'mail'].forEach((t, i) => { c.rect(22 + i * 82, 252, 70, 58, '#fff', 12); c.text(57 + i * 82, 296, t, { size: 12, fill: C.blue, anchor: 'middle' }); });
    c.rect(16, 330, W - 32, 64, '#fff', 12); c.text(32, 354, 'mobile', { size: 13 }); c.text(32, 378, s.number ?? '010-1234-5678', { size: 17, fill: C.blue, raw: true });
    const rows = s.rows ?? ['Send Message', 'Share Contact', 'Add to Favorites'];
    c.rect(16, 410, W - 32, rows.length * 46, '#fff', 12); rows.forEach((r, i) => { c.text(32, 440 + i * 46, r, { size: 16.5, fill: C.blue }); c.reg(r, 16, 410 + i * 46, W - 32, 46); });
    if (s.block) { c.rect(16, 420 + rows.length * 46, W - 32, 46, '#fff', 12); c.text(32, 450 + rows.length * 46, 'Block this Caller', { size: 16.5, fill: C.red }); c.reg('Block this Caller', 16, 420 + rows.length * 46, W - 32, 46); }
    homeIndicator(c);
  },
  // 새 연락처
  newContact(c, s) {
    c.rect(0, 0, W, H, C.bg); statusBar(c);
    c.text(20, 66, 'Cancel', { size: 17, fill: C.blue }); c.text(W / 2, 66, 'New Contact', { size: 17, weight: 600, anchor: 'middle' }); c.text(W - 20, 66, 'Done', { size: 17, fill: C.blue, weight: 600, anchor: 'end' }); c.reg('Done', W - 90, 44, 86, 36);
    c.add(`<circle cx="${W / 2}" cy="150" r="46" fill="#c7c7cc"/>`); c.text(W / 2, 222, 'Add Photo', { size: 15, fill: C.blue, anchor: 'middle' });
    c.rect(16, 246, W - 32, 138, '#fff', 12); [['First name', s.first], ['Last name', ''], ['Company', '']].forEach(([p, v], i) => { c.text(32, 276 + i * 46, v || p, { size: 17, fill: v ? C.ink : '#c7c7cc', raw: !!v }); if (i) c.add(`<line x1="32" y1="${246 + i * 46}" x2="${W - 16}" y2="${246 + i * 46}" stroke="#e5e5ea"/>`); c.reg(p, 16, 246 + i * 46, W - 32, 46); });
    c.rect(16, 400, W - 32, 46, '#fff', 12); c.add(`<circle cx="40" cy="423" r="11" fill="${C.green}"/><path d="M34 423 h12 M40 417 v12" stroke="#fff" stroke-width="2.4"/>`); c.text(62, 429, s.phone || 'add phone', { size: 17, raw: !!s.phone }); c.reg('add phone', 16, 400, W - 32, 46);
    if (s.keyboard) keyboard(c, s.keyboard);
    homeIndicator(c);
  },
  // 연락처 목록
  contacts(c, s) {
    c.rect(0, 0, W, H, '#fff'); let y = navBar(c, { title: 'Contacts', large: true, bg: '#fff' });
    c.text(W - 20, 61, '＋', { size: 26, fill: C.blue, anchor: 'end', raw: true }); c.reg('＋', W - 56, 40, 52, 40);
    c.rect(16, y, W - 32, 36, '#e3e3e8', 10); c.text(40, y + 24, s.query || 'Search', { size: 16, fill: s.query ? C.ink : C.sub, raw: !!s.query }); c.reg('Search', 16, y, W - 32, 36); y += 54;
    (s.names ?? ['Anna', 'John', 'Maria', 'Tom']).forEach((n) => { c.text(20, y + 28, n, { size: 17, raw: true }); c.reg(n, 0, y, W, 44); c.add(`<line x1="20" y1="${y + 44}" x2="${W}" y2="${y + 44}" stroke="#e5e5ea"/>`); y += 44; });
    if (s.keyboard) keyboard(c, s.keyboard);
    homeIndicator(c);
  },
  // 메시지 목록
  messages(c) {
    c.rect(0, 0, W, H, '#fff'); let y = navBar(c, { title: 'Messages', large: true, bg: '#fff', back: 'Edit' });
    c.add(`<path d="M${W - 40} 52 h12 v12 M${W - 24} 48 l-12 12" stroke="${C.blue}" stroke-width="2.4" fill="none"/>`); c.reg('Compose', W - 56, 38, 52, 40);
    c.rect(16, y, W - 32, 36, '#e3e3e8', 10); c.text(40, y + 24, 'Search', { size: 16, fill: C.sub }); y += 50;
    [['Maria', 'Dinner at 7?', true], ['John', 'See you tomorrow', false], ['Family', 'Photo', false]].forEach(([n, m, unread]) => { if (unread) c.add(`<circle cx="12" cy="${y + 34}" r="5" fill="${C.blue}"/>`); c.add(`<circle cx="48" cy="${y + 34}" r="24" fill="#a2a2a7"/>`); c.text(84, y + 28, n, { size: 17, weight: 600, raw: true }); c.text(84, y + 50, m, { size: 15, fill: C.sub }); c.reg(n, 0, y, W, 72); c.add(`<line x1="84" y1="${y + 72}" x2="${W}" y2="${y + 72}" stroke="#e5e5ea"/>`); y += 72; });
    homeIndicator(c);
  },
  // 대화 화면
  chat(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    c.add(`<path d="M18 63 l-8 -8 l8 -8" stroke="${C.blue}" stroke-width="3" fill="none"/>`); c.reg('Back', 0, 40, 60, 40);
    if (s.compose) { c.text(W / 2, 64, 'New Message', { size: 17, weight: 600, anchor: 'middle' }); c.text(W - 18, 64, 'Cancel', { size: 17, fill: C.blue, anchor: 'end' }); c.add(`<line x1="0" y1="86" x2="${W}" y2="86" stroke="#e5e5ea"/>`); c.text(18, 114, 'To:', { size: 16, fill: C.sub }); if (s.to) c.text(26 + width(tr('To:')) * 8.5, 114, s.to, { size: 16, fill: C.blue, raw: true }); c.reg('To', 0, 90, W, 40); c.add(`<line x1="0" y1="130" x2="${W}" y2="130" stroke="#e5e5ea"/>`); }
    else { c.add(`<circle cx="${W / 2}" cy="66" r="18" fill="#a2a2a7"/>`); c.text(W / 2, 100, s.name ?? 'Maria', { size: 12, anchor: 'middle', raw: true }); }
    let y = s.compose ? 150 : 130;
    for (const m of s.msgs ?? (s.compose ? [] : [{ t: 'Dinner at 7?' }, { t: 'Yes, see you!', me: true }])) {
      if (m.photo) { const x = m.me ? W - 196 : 14; c.rect(x, y, 180, 140, '#7aa7e0', 16); c.add(`<circle cx="${x + 130}" cy="${y + 40}" r="16" fill="#ffd60a"/><path d="M${x} ${y + 140} l60 -60 l40 40 l30 -24 l50 44z" fill="#4c8a3f"/>`); c.reg('Photo', x, y, 180, 140); y += 154; continue; }
      const lines = wrap(m.t, 24); const bw = Math.min(240, Math.max(...lines.map((l) => width(l))) * 8.4 + 28); const bh = lines.length * 21 + 16; const x = m.me ? W - bw - 12 : 12;
      c.rect(x, y, bw, bh, m.me ? C.blue : '#e9e9eb', 18); lines.forEach((l, i) => c.text(x + 14, y + 25 + i * 21, l, { size: 16, fill: m.me ? '#fff' : '#000', raw: true })); c.reg(m.key ?? (m.me ? 'Sent message' : 'Message bubble'), x, y, bw, bh); y += bh + 10;
    }
    if (s.menu) { dim(c, 0.25); const my = 200; c.rect(30, my - 56, 260, 48, '#fff', 24); ['♥', '👍', '👎', '😂', '‼', '?'].forEach((e, i) => c.text(56 + i * 42, my - 24, e, { size: 20, anchor: 'middle', raw: true })); c.rect(60, my + 70, 220, s.menu.length * 46, 'rgba(250,250,250,.97)', 14); s.menu.forEach((m, i) => { c.text(78, my + 100 + i * 46, m, { size: 16.5, fill: /Delete/.test(m) ? C.red : C.ink }); c.reg(m, 60, my + 70 + i * 46, 220, 46); }); c.rect(60, my - 4, 220, 60, C.blue, 18); c.text(76, my + 30, 'Dinner at 7?', { size: 16, fill: '#fff' }); }
    const kb = s.keyboard ? 290 : 0; const iy = H - 64 - kb - (s.suggest ? 44 : 0) - (s.apps ? 230 : 0);
    if (s.select) { c.rect(0, H - 90, W, 90, '#f9f9f9'); c.add(`<path d="M24 ${H - 64} h14 l-1.5 16 h-11z" stroke="${C.blue}" stroke-width="2" fill="none"/>`); c.reg('Delete', 0, H - 90, 70, 60); homeIndicator(c); return; }
    c.add(`<circle cx="26" cy="${iy + 20}" r="16" fill="#e9e9eb"/><path d="M19 ${iy + 20} h14 M26 ${iy + 13} v14" stroke="#555" stroke-width="2.2"/>`); c.reg('＋', 6, iy, 42, 40);
    c.rect(52, iy, W - 64, 40, '#fff', 20, 'stroke="#d1d1d6"'); c.text(68, iy + 26, s.text ? fit(s.text, 28) : 'iMessage', { size: 16, fill: s.text ? C.ink : '#b0b0b5', raw: !!s.text }); c.reg('Message field', 52, iy, W - 64, 40);
    if (s.text || s.attached) { c.add(`<circle cx="${W - 32}" cy="${iy + 20}" r="15" fill="${C.blue}"/><path d="M${W - 32} ${iy + 28} v-15 M${W - 38} ${iy + 19} l6 -6 l6 6" stroke="#fff" stroke-width="2.4" fill="none"/>`); c.reg('Send', W - 52, iy, 44, 40); }
    else { c.add(`<rect x="${W - 36}" y="${iy + 10}" width="7" height="13" rx="3.5" fill="#b0b0b5"/>`); }
    if (s.attached) { c.rect(64, iy - 108, 90, 100, '#7aa7e0', 12); }
    if (s.suggest) { c.rect(0, H - kb - 44 - 0, W, 44, '#d1d3d9'); c.text(W / 2, H - kb - 16, s.suggest, { size: 17, anchor: 'middle', weight: 600 }); c.reg('Code suggestion', 40, H - kb - 44, W - 80, 44); }
    if (s.apps) { c.rect(0, H - 230, W, 230, '#f2f2f7'); ['Camera', 'Photos', 'Stickers', 'Audio', 'Location'].forEach((a, i) => { c.add(`<circle cx="40" cy="${H - 206 + i * 42}" r="15" fill="${['#8e8e93', '#ff9500', '#5ac8fa', '#ff2d55', '#34c759'][i]}"/>`); c.text(68, H - 200 + i * 42, a, { size: 17 }); c.reg(a, 0, H - 228 + i * 42, W, 42); }); }
    if (s.keyboard) keyboard(c, s.keyboard); else homeIndicator(c);
  },
  // 사진 고르기 / 보관함
  photos(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    if (s.picker) { c.text(W / 2, 64, 'Photos', { size: 17, weight: 600, anchor: 'middle' }); }
    else { c.text(16, 100, 'Library', { size: 32, weight: 700 }); }
    const y0 = s.picker ? 90 : 120; const cols = ['#7aa7e0', '#e0a87a', '#8ac47a', '#c47ab8', '#e0d07a', '#7ac4c0', '#a07ae0', '#e07a7a', '#7ae0a0'];
    for (let i = 0; i < 15; i++) { const x = (i % 3) * 120; const y = y0 + Math.floor(i / 3) * 120; c.rect(x + 1, y + 1, 118, 118, cols[i % 9]); if (s.video && i === 1) { c.text(x + 110, y + 112, '0:24', { size: 12, fill: '#fff', anchor: 'end', raw: true }); c.reg('Video', x, y, 120, 120); } if (i === 0) c.reg('Photo', x, y, 120, 120); }
    if (s.collections) { c.rect(0, 420, W, 300, '#fff'); c.text(16, 452, 'Utilities', { size: 20, weight: 700 }); ['Hidden', 'Recently Deleted', 'Duplicates'].forEach((t, i) => { c.text(20, 492 + i * 46, t, { size: 17 }); c.reg(t, 0, 470 + i * 46, W, 46); }); }
    if (!s.picker && !s.collections) tabBar(c, ['Library', 'Collections'], 0); else homeIndicator(c);
  },
  // 사진 한 장 보기
  photo(c, s) {
    c.rect(0, 0, W, H, s.dark ? '#000' : '#fff'); statusBar(c, { dark: s.dark });
    c.add(`<path d="M18 63 l-8 -8 l8 -8" stroke="${C.blue}" stroke-width="3" fill="none"/>`);
    const z = s.zoom ? 1.6 : 1; const ph = 300 * z; const py = (H - ph) / 2;
    c.add(`<clipPath id="pc"><rect x="0" y="100" width="${W}" height="${H - 200}"/></clipPath><g clip-path="url(#pc)"><rect x="${(W - W * z) / 2}" y="${py}" width="${W * z}" height="${ph}" fill="#7aa7e0"/><circle cx="${W / 2 + 90 * z}" cy="${py + 70 * z}" r="${28 * z}" fill="#ffd60a"/><path d="M${(W - W * z) / 2} ${py + ph} l${120 * z} ${-130 * z} l${80 * z} ${80 * z} l${60 * z} ${-50 * z} l${100 * z} ${100 * z}z" fill="#4c8a3f"/></g>`);
    if (s.play) { c.add(`<circle cx="${W / 2}" cy="${H / 2}" r="32" fill="rgba(0,0,0,.45)"/><path d="M${W / 2 - 9} ${H / 2 - 16} l26 16 l-26 16z" fill="#fff"/>`); c.reg('Play', W / 2 - 36, H / 2 - 36, 72, 72); }
    const ty = H - 70;
    [['Share', 36], ['Favorite', 130], ['Info', 230], ['Delete', W - 36]].forEach(([n, x]) => { c.add(n === 'Delete' ? `<path d="M${x - 8} ${ty - 6} h16 l-1.5 18 h-13z M${x - 10} ${ty - 9} h20" stroke="${C.blue}" stroke-width="2" fill="none"/>` : n === 'Share' ? `<rect x="${x - 9}" y="${ty - 4}" width="18" height="16" rx="2" fill="none" stroke="${C.blue}" stroke-width="2"/><path d="M${x} ${ty + 4} v-16 M${x - 5} ${ty - 7} l5 -5 l5 5" stroke="${C.blue}" stroke-width="2" fill="none"/>` : `<circle cx="${x}" cy="${ty + 2}" r="10" fill="none" stroke="${C.blue}" stroke-width="2"/>`); c.reg(n, x - 26, ty - 22, 52, 48); });
    if (s.recover) { c.text(W / 2, ty + 8, 'Recover', { size: 17, fill: C.blue, anchor: 'middle', weight: 600 }); c.reg('Recover', W / 2 - 60, ty - 20, 120, 44); }
    homeIndicator(c, s.dark);
  },
  // 공유 창
  share(c, s) {
    V.photo(c, {}); dim(c, 0.3);
    c.rect(0, 250, W, H - 250, '#f2f2f7', 14);
    c.text(20, 290, s.title ?? '1 Photo Selected', { size: 15, weight: 600 });
    ['AirDrop', 'Messages', 'Mail', 'Notes'].forEach((a, i) => { const x = 22 + i * 84; c.rect(x, 316, 60, 60, ['#1e90ff', '#34c759', '#1e90ff', '#ffd60a'][i], 13.5); c.text(x + 30, 394, a, { size: 12, anchor: 'middle' }); c.reg(a, x - 6, 310, 72, 92); });
    const rows = s.rows ?? ['Copy', 'Save Image', 'Add to Shared Album', 'Print'];
    c.rect(16, 420, W - 32, rows.length * 48, '#fff', 12); rows.forEach((r, i) => { c.text(32, 451 + i * 48, r, { size: 17 }); if (i) c.add(`<line x1="32" y1="${420 + i * 48}" x2="${W - 16}" y2="${420 + i * 48}" stroke="#e5e5ea"/>`); c.reg(r, 16, 420 + i * 48, W - 32, 48); });
    if (s.airdrop) { c.rect(0, 250, W, H - 250, '#f2f2f7', 14); c.text(W / 2, 290, 'AirDrop', { size: 17, weight: 600, anchor: 'middle' }); [['Maria’s iPhone', 90], ['John’s iPad', 270]].forEach(([n, x]) => { c.add(`<circle cx="${x}" cy="380" r="40" fill="#a2a2a7"/>`); c.text(x, 446, n, { size: 14, anchor: 'middle', raw: true }); c.reg(n, x - 50, 330, 100, 130); c.reg('Device', x - 50, 330, 100, 130); }); }
    homeIndicator(c);
  },
  // 카메라
  camera(c, s) {
    c.rect(0, 0, W, H, '#000'); statusBar(c, { dark: true });
    c.add(`<rect x="0" y="110" width="${W}" height="${H - 300}" fill="${s.front ? '#c9a58a' : '#5d7f6a'}"/>`);
    if (s.front) c.add(`<circle cx="${W / 2}" cy="320" r="70" fill="#e8c4a6"/>`); else c.add(`<path d="M0 ${H - 190} l100 -120 l80 70 l70 -50 l110 100z" fill="#3f5a48"/><circle cx="270" cy="200" r="30" fill="#f4e38a"/>`);
    if (s.zoom) c.add(`<rect x="0" y="110" width="${W}" height="${H - 300}" fill="rgba(255,255,255,.05)"/>`);
    if (s.recording) { c.rect(W / 2 - 40, 60, 80, 28, C.red, 6); c.text(W / 2, 80, '00:05', { size: 16, fill: '#fff', anchor: 'middle', raw: true }); }
    ['0.5', '1×', '2'].forEach((z, i) => { const x = W / 2 - 50 + i * 50; c.add(`<circle cx="${x}" cy="${H - 222}" r="16" fill="rgba(0,0,0,.5)"/>`); c.text(x, H - 217, z, { size: 12, fill: i === 1 ? '#ffd60a' : '#fff', anchor: 'middle', raw: true }); });
    const modes = ['TIME-LAPSE', 'SLO-MO', 'VIDEO', 'PHOTO', 'PORTRAIT', 'PANO']; const on = s.video ? 2 : 3;
    modes.forEach((m, i) => { const x = W / 2 + (i - on) * 82; c.text(x, H - 170, m, { size: 13, fill: i === on ? '#ffd60a' : '#fff', anchor: 'middle', weight: 600 }); c.reg(m, x - 40, H - 190, 80, 30); });
    if (s.video) { c.add(`<circle cx="${W / 2}" cy="${H - 100}" r="36" fill="none" stroke="#fff" stroke-width="5"/>${s.recording ? `<rect x="${W / 2 - 14}" y="${H - 114}" width="28" height="28" rx="5" fill="${C.red}"/>` : `<circle cx="${W / 2}" cy="${H - 100}" r="28" fill="${C.red}"/>`}`); c.reg(s.recording ? 'Stop' : 'Record', W / 2 - 40, H - 140, 80, 80); }
    else { c.add(`<circle cx="${W / 2}" cy="${H - 100}" r="36" fill="none" stroke="#fff" stroke-width="5"/><circle cx="${W / 2}" cy="${H - 100}" r="29" fill="#fff"/>`); c.reg('Shutter', W / 2 - 40, H - 140, 80, 80); }
    c.rect(36, H - 124, 48, 48, '#7aa7e0', 8); c.reg('Thumbnail', 30, H - 130, 60, 60);
    c.add(`<circle cx="${W - 60}" cy="${H - 100}" r="24" fill="rgba(255,255,255,.2)"/><path d="M${W - 70} ${H - 104} a10 10 0 0 1 18 -3 M${W - 50} ${H - 96} a10 10 0 0 1 -18 3" stroke="#fff" stroke-width="2.2" fill="none"/>`); c.reg('Switch camera', W - 88, H - 128, 56, 56);
    homeIndicator(c, true);
  },
  // 자판이 있는 메모 화면(글쓰기 연습)
  type(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    c.text(W - 18, 64, 'Done', { size: 17, fill: '#c69200', anchor: 'end', weight: 600 });
    wrap(s.text ?? 'Hello', 30).forEach((l, i) => c.text(20, 130 + i * 26, l, { size: 19, raw: true }));
    c.reg('Text field', 0, 100, W, 200);
    if (s.menu) { c.rect(40, 70, 280, 40, '#2c2c2e', 10); s.menu.forEach((m, i) => { c.text(70 + i * 90, 96, m, { size: 15, fill: '#fff', anchor: 'middle' }); c.reg(m, 30 + i * 90, 70, 90, 40); }); c.rect(18, 112, 80, 28, 'rgba(0,122,255,.25)', 4); }
    keyboard(c, s.keyboard ?? {});
  },
  // Safari
  safari(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    if (s.page) { c.text(20, 120, 'Easy Lessons', { size: 28, weight: 700, raw: true }); [150, 176, 202, 228, 254].forEach((y) => c.rect(20, y, W - 40 - (y % 3) * 30, 12, '#e5e5ea', 6)); c.rect(20, 290, W - 40, 180, '#cfe0f5', 12); }
    else { c.text(W / 2, 200, 'Favorites', { size: 22, weight: 700, anchor: 'middle' }); }
    const by = s.keyboard ? H - 290 - 56 : H - 112;
    c.rect(12, by, W - 24, 46, '#f2f2f7', 14, 'stroke="#d1d1d6"');
    c.text(s.page ? 50 : W / 2, by + 29, s.query ? tr(s.query) : (s.page ? 'digistep365.com' : 'Search or enter website name'), { size: 15, fill: s.query ? C.ink : '#555', anchor: s.page ? 'start' : 'middle', raw: !!s.query || !!s.page }); c.reg('Search or enter website name', 12, by, W - 24, 46); c.reg('Address bar', 12, by, W - 24, 46);
    if (s.page) { c.text(26, by + 30, 'ᴬA', { size: 15, raw: true }); c.reg('Page Menu', 12, by, 40, 46); }
    if (!s.keyboard) { [['Back', 30], ['Forward', 100], ['Share', 180], ['Bookmarks', 260], ['Tabs', 330]].forEach(([n, x]) => { c.add(n === 'Back' ? `<path d="M${x + 4} ${H - 52} l-9 -9 l9 -9" stroke="${C.blue}" stroke-width="2.6" fill="none"/>` : n === 'Forward' ? `<path d="M${x - 4} ${H - 52} l9 -9 l-9 -9" stroke="#c7c7cc" stroke-width="2.6" fill="none"/>` : `<rect x="${x - 9}" y="${H - 70}" width="18" height="18" rx="3" fill="none" stroke="${C.blue}" stroke-width="2"/>`); c.reg(n, x - 26, H - 80, 52, 50); }); homeIndicator(c); }
    if (s.menu) { c.rect(16, by - 160, 250, 150, 'rgba(250,250,250,.98)', 14, 'filter="url(#sh)"'); c.text(40, by - 120, 'A', { size: 16, fill: C.blue, raw: true }); c.text(141, by - 120, '100%', { size: 16, anchor: 'middle', raw: true }); c.text(240, by - 116, 'A', { size: 26, fill: C.blue, anchor: 'end', raw: true }); c.reg('A', 200, by - 150, 66, 50); ['Show Reader', 'Translate'].forEach((t, i) => c.text(40, by - 74 + i * 40, t, { size: 16 })); }
    if (s.keyboard) keyboard(c, { go: true, ...s.keyboard });
  },
  // 시계
  clock(c, s) {
    c.rect(0, 0, W, H, '#000'); statusBar(c, { dark: true });
    const tab = { alarms: 1, add: 1, timer: 3 }[s.mode ?? 'alarms'] ?? 1;
    if (s.mode === 'add') {
      c.rect(0, 50, W, H - 50, '#1c1c1e', 14); c.text(20, 92, 'Cancel', { size: 17, fill: C.orange }); c.text(W / 2, 92, 'Add Alarm', { size: 17, fill: '#fff', weight: 600, anchor: 'middle' }); c.text(W - 20, 92, 'Save', { size: 17, fill: C.orange, weight: 600, anchor: 'end' }); c.reg('Save', W - 90, 70, 86, 36);
      c.rect(20, 210, W - 40, 40, '#3a3a3c', 8); [['06', 130], ['30', 200]].forEach(([t, x]) => { c.text(x, 242, t, { size: 30, fill: '#fff', anchor: 'middle', raw: true }); [-1, 1].forEach((d) => c.text(x, 242 + d * 44, String((+t + d + 60) % 60).padStart(2, '0'), { size: 22, fill: '#666', anchor: 'middle', raw: true })); }); c.reg('Time wheels', 60, 160, 240, 140);
      c.rect(16, 340, W - 32, 184, '#2c2c2e', 12); ['Repeat', 'Label', 'Sound', 'Snooze'].forEach((r, i) => c.text(32, 370 + i * 46, r, { size: 17, fill: '#fff' }));
      return;
    }
    if (s.mode === 'timer') {
      [['0 hours', 80], ['5 min', 180], ['0 sec', 280]].forEach(([t, x]) => c.text(x, 250, t, { size: 22, fill: '#fff', anchor: 'middle' })); c.reg('Timer wheels', 30, 180, 300, 120);
      [['Cancel', 70, '#333'], ['Start', W - 70, '#0f3e1f']].forEach(([n, x, col]) => { c.add(`<circle cx="${x}" cy="380" r="40" fill="${col}"/>`); c.text(x, 386, n, { size: 16, fill: n === 'Start' ? C.green : '#fff', anchor: 'middle' }); c.reg(n, x - 44, 336, 88, 88); });
    } else {
      c.text(20, 66, 'Edit', { size: 17, fill: C.orange }); c.text(W - 20, 68, '＋', { size: 26, fill: C.orange, anchor: 'end', raw: true }); c.reg('＋', W - 56, 40, 52, 40); c.text(16, 120, 'Alarms', { size: 34, fill: '#fff', weight: 700 });
      [['6:30', true], ['8:00', false]].forEach(([t, on], i) => { const y = 150 + i * 96; c.text(20, y + 56, t, { size: 52, fill: on ? '#fff' : '#666', weight: 300, raw: true }); c.text(20, y + 80, 'Alarm', { size: 15, fill: on ? '#fff' : '#666' }); toggle(c, W - 72, y + 34, on); c.reg(`Alarm ${t}`, 0, y, W, 96); });
    }
    c.rect(0, H - 84, W, 84, '#1c1c1e'); ['World Clock', 'Alarms', 'Stopwatch', 'Timers'].forEach((t, i) => { const x = W / 8 + (i * W) / 4; c.text(x, H - 38, t, { size: 10.5, fill: i === tab ? C.orange : C.gray, anchor: 'middle' }); c.add(`<circle cx="${x}" cy="${H - 62}" r="9" fill="none" stroke="${i === tab ? C.orange : C.gray}" stroke-width="2.2"/>`); c.reg(t, (i * W) / 4, H - 84, W / 4, 52); });
    homeIndicator(c, true);
  },
  // App Store
  store(c, s) {
    c.rect(0, 0, W, H, '#fff'); statusBar(c);
    if (s.account) { c.text(W / 2, 64, 'Account', { size: 17, weight: 600, anchor: 'middle' }); c.text(W - 18, 64, 'Done', { size: 17, fill: C.blue, weight: 600, anchor: 'end' }); c.text(16, 140, 'Upcoming Automatic Updates', { size: 18, weight: 700 }); c.text(W - 18, 140, 'Update All', { size: 16, fill: C.blue, anchor: 'end' }); c.reg('Update All', W - 120, 116, 116, 36); ['Weather Pro', 'Bus Times'].forEach((n, i) => { c.rect(16, 170 + i * 80, 60, 60, ['#5ac8fa', '#ff9500'][i], 13); c.text(90, 205 + i * 80, n, { size: 17, raw: true }); c.rect(W - 96, 186 + i * 80, 76, 30, '#eef1f6', 15); c.text(W - 58, 206 + i * 80, 'Update', { size: 14, fill: C.blue, anchor: 'middle', weight: 700 }); }); homeIndicator(c); return; }
    if (s.results) { c.rect(16, 80, W - 32, 36, '#e3e3e8', 10); c.text(40, 104, s.query ?? 'Big Clock', { size: 16, raw: true }); [['Big Clock', '#ff9500'], ['Clock Widget', '#5856d6']].forEach(([n, col], i) => { const y = 140 + i * 86; c.rect(16, y, 64, 64, col, 14); c.text(94, y + 28, n, { size: 17, weight: 600, raw: true }); c.text(94, y + 50, 'Utilities', { size: 14, fill: C.sub }); c.rect(W - 88, y + 18, 70, 30, '#eef1f6', 15); c.text(W - 53, y + 38, 'Get', { size: 15, fill: C.blue, anchor: 'middle', weight: 700 }); if (!i) c.reg('Get', W - 92, y + 12, 78, 42); }); }
    else { c.text(16, 110, 'Today', { size: 32, weight: 700 }); c.add(`<circle cx="${W - 36}" cy="100" r="18" fill="#a2a2a7"/>`); c.reg('Account', W - 60, 76, 48, 48); c.rect(16, 140, W - 32, 360, '#5ac8fa', 18); }
    if (s.searchTab && !s.results) { c.rect(0, 50, W, 420, '#fff'); c.text(16, 110, 'Search', { size: 32, weight: 700 }); c.rect(16, 130, W - 32, 36, '#e3e3e8', 10); c.text(40, 154, s.query || 'Games, Apps, Stories and More', { size: 15, fill: s.query ? C.ink : C.sub, raw: !!s.query }); c.reg('Search field', 16, 130, W - 32, 36); }
    if (s.keyboard) { keyboard(c, s.keyboard); return; }
    tabBar(c, ['Today', 'Games', 'Apps', 'Arcade', 'Search'], s.searchTab || s.results ? 4 : 0);
    if (s.confirm) { dim(c); c.rect(0, H - 300, W, 300, '#fff', 14); c.text(W / 2, H - 250, 'App Store', { size: 17, weight: 600, anchor: 'middle' }); c.text(W / 2, H - 200, 'Big Clock', { size: 16, anchor: 'middle', raw: true }); c.text(W / 2, H - 100, MODEL === 'face' ? 'Double Click to Install' : 'Pay with Touch ID', { size: 17, anchor: 'middle', weight: 600 }); c.reg('Confirm', 0, H - 140, W, 80); }
  },
  // 단순 앱 화면(날씨·메모·지도·나의 찾기·건강·돋보기·Siri 등)
  app(c, s) {
    const dark = ['Magnifier', 'Siri'].includes(s.app);
    c.rect(0, 0, W, H, s.app === 'Weather' ? '#4a7fd0' : dark ? '#000' : '#fff'); statusBar(c, { dark: dark || s.app === 'Weather' });
    const ink = dark || s.app === 'Weather' ? '#fff' : C.ink;
    if (s.title) c.text(16, 110, fit(s.title, 18), { size: 32, weight: 700, fill: ink, raw: true });
    if (s.avatar) { c.add(`<circle cx="${W - 36}" cy="100" r="18" fill="#a2a2a7"/>`); c.reg('Profile', W - 60, 76, 48, 48); }
    if (s.big) c.text(W / 2, 220, s.big, { size: 80, weight: 200, fill: ink, anchor: 'middle', raw: true });
    let y = s.title ? 140 : 280;
    for (const r of s.rows ?? []) { const row = typeof r === 'string' ? { label: r } : r; if (row.card) { c.rect(16, y, W - 32, 56, dark ? '#1c1c1e' : row.card === true ? '#f2f2f7' : row.card, 12); } c.text(row.card ? 32 : 20, y + 34, fit(row.label, 30), { size: 17, fill: row.blue ? C.blue : row.red ? C.red : ink, weight: row.bold ? 600 : 400, raw: true }); if (row.value) c.text(W - 30, y + 34, row.value, { size: 16, fill: C.sub, anchor: 'end' }); if (row.toggle !== undefined) toggle(c, W - 83, y + 12, row.toggle); c.reg(row.key ?? row.label, 0, y, W, 56); y += 64; }
    if (s.slider) { c.rect(40, H - 180, W - 80, 4, '#555', 2); c.add(`<circle cx="${W / 2}" cy="${H - 178}" r="12" fill="#fff"/>`); c.reg('Zoom slider', 30, H - 200, W - 60, 44); }
    if (s.face) { c.add(`<circle cx="${W / 2}" cy="300" r="110" fill="none" stroke="${C.green}" stroke-width="6" stroke-dasharray="6 6"/><circle cx="${W / 2}" cy="300" r="80" fill="#c9a58a"/>`); }
    if (s.finger) { c.add(`<circle cx="${W / 2}" cy="320" r="90" fill="none" stroke="#ff2d55" stroke-width="5"/>${[20, 35, 50, 65].map((r) => `<path d="M${W / 2 - r} 330 a${r} ${r + 10} 0 0 1 ${2 * r} 0" stroke="#ff2d55" stroke-width="4" fill="none"/>`).join('')}`); }
    if (s.dots) { c.text(W / 2, 200, 'Enter Passcode', { size: 20, anchor: 'middle' }); for (let i = 0; i < 6; i++) c.add(`<circle cx="${W / 2 - 75 + i * 30}" cy="250" r="8" fill="${i < s.dots ? '#000' : 'none'}" stroke="#000" stroke-width="1.5"/>`); }
    if (s.orb) { c.add(`<circle cx="${W / 2}" cy="${H - 120}" r="40" fill="url(#orb)"/><defs><radialGradient id="orb"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#5ac8fa"/><stop offset="1" stop-color="#af52de"/></radialGradient></defs>`); c.reg('Siri', W / 2 - 44, H - 164, 88, 88); }
    if (s.bubble) wrap(s.bubble, 28).forEach((l, i) => c.text(W / 2, 200 + i * 30, l, { size: 22, fill: ink, anchor: 'middle', raw: true }));
    if (s.fab) { c.add(`<path d="M${W - 44} ${H - 70} l12 -12 l6 6 l-12 12z" fill="#c69200"/>`); c.reg(s.fab, W - 70, H - 96, 60, 60); }
    if (s.search) { c.rect(16, H - 150, W - 32, 44, '#e3e3e8', 12); c.text(40, H - 122, s.search, { size: 16, fill: C.sub }); c.reg(s.search, 16, H - 150, W - 32, 44); }
    if (s.tabs) tabBar(c, s.tabs, s.tab ?? 0);
    if (s.keyboard) keyboard(c, s.keyboard); else if (!s.tabs) homeIndicator(c, dark);
  },
};

/* ---------- 자판 ---------- */
function keyboard(c, k = {}) {
  const y0 = H - 290;
  c.rect(0, y0, W, 290, C.kbd);
  if (k.emoji) { const em = ['😀', '😂', '😍', '👍', '🙏', '❤️', '🎉', '😢', '🌸', '☀️', '🍚', '👏']; em.forEach((e, i) => c.text(36 + (i % 6) * 58, y0 + 50 + Math.floor(i / 6) * 56, e, { size: 30, anchor: 'middle', raw: true })); c.reg('Emoji', 20, y0 + 20, 70, 50); c.rect(10, y0 + 214, 56, 42, '#adb3bc', 6); c.text(38, y0 + 241, 'ABC', { size: 15, anchor: 'middle', raw: true }); c.reg('ABC', 10, y0 + 214, 56, 42); return; }
  if (k.dictation) { c.text(W / 2, y0 + 110, '…', { size: 40, anchor: 'middle', raw: true }); }
  const ko = LANG === 'ko';
  const rows = ko ? [['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'], ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'], ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']] : [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
  if (!k.dictation) rows.forEach((r, ri) => { const kw = 32; const gap = 4; const tot = r.length * kw + (r.length - 1) * gap; const x0 = (W - tot) / 2; r.forEach((ch, i) => { c.rect(x0 + i * (kw + gap), y0 + 10 + ri * 54, kw, 44, '#fff', 6); c.text(x0 + i * (kw + gap) + kw / 2, y0 + 40 + ri * 54, ch, { size: 20, anchor: 'middle', raw: true }); }); });
  c.rect(W - 48, y0 + 118, 42, 44, '#adb3bc', 6); c.text(W - 27, y0 + 146, '⌫', { size: 18, anchor: 'middle', raw: true }); c.reg('⌫', W - 48, y0 + 118, 42, 44);
  c.rect(6, y0 + 172, 46, 44, '#adb3bc', 6); c.text(29, y0 + 199, '123', { size: 15, anchor: 'middle', raw: true }); c.reg('123', 6, y0 + 172, 46, 44);
  c.rect(56, y0 + 172, 42, 44, '#adb3bc', 6); c.text(77, y0 + 201, '☺', { size: 20, anchor: 'middle', raw: true }); c.reg('Emoji', 56, y0 + 172, 42, 44);
  c.rect(102, y0 + 172, W - 210, 44, '#fff', 6); c.text(102 + (W - 210) / 2, y0 + 199, k.go ? 'space' : 'space', { size: 15, anchor: 'middle' });
  c.rect(W - 104, y0 + 172, 98, 44, k.go ? C.blue : '#adb3bc', 6); c.text(W - 55, y0 + 199, k.go ? 'go' : 'return', { size: 15, fill: k.go ? '#fff' : '#000', anchor: 'middle' }); c.reg(k.go ? 'go' : 'return', W - 104, y0 + 172, 98, 44);
  c.add(`<rect x="${W - 40}" y="${y0 + 236}" width="9" height="16" rx="4.5" fill="${k.dictation ? C.blue : '#555'}"/>`); c.reg('microphone', W - 60, y0 + 226, 50, 50);
  c.add(`<circle cx="30" cy="${y0 + 244}" r="10" fill="none" stroke="#555" stroke-width="2"/>`);
}

export function renderIphone(spec = { v: 'home' }, target, action) {
  const c = canvas();
  const keep = MODEL; if (spec.model) MODEL = spec.model;
  (V[spec.v] ?? V.home)(c, spec);
  MODEL = keep;
  c.reg('Screen', 0, 50, W, H - 100);
  const { body, targets } = c.out();
  const t = target ? targets[target] : null;
  let mark = '';
  if (t) {
    const r = Math.min(t.w, t.h) / 2;
    mark += `<rect class="target-ring" x="${t.x + 2}" y="${t.y + 2}" width="${t.w - 4}" height="${t.h - 4}" rx="${Math.min(r, 24)}" fill="none" stroke="#D7263D" stroke-width="5"/>`;
    const above = t.y > 160;
    const by = above ? t.y - 44 : t.y + t.h + 8;
    const label = tr(action === 'hold' ? 'Hold' : action === 'swipe' ? 'Swipe' : 'Tap');
    const lw = Math.max(68, width(label) * 11 + 24);
    const bx = Math.min(Math.max(t.x + t.w / 2 - lw / 2, 6), W - lw - 6);
    mark += `<g class="target-tag"><rect x="${bx}" y="${by}" width="${lw}" height="34" rx="17" fill="#D7263D"/><text x="${bx + lw / 2}" y="${by + 23}" font-size="16" font-weight="800" fill="#fff" text-anchor="middle">${esc(label)}</text><path d="M${bx + lw / 2 - 8} ${above ? by + 34 : by} l8 ${above ? 9 : -9} l8 ${above ? -9 : 9}z" fill="#D7263D"/></g>`;
  }
  const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" font-family="-apple-system, 'SF Pro Text', 'Apple SD Gothic Neo', Pretendard Variable, 'Noto Sans KR', sans-serif"><defs><filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity=".25"/></filter></defs>${body}${mark}</svg>`;
  return { svg, width: W, height: H, targets, target: t };
}
export const IP_VIEWS = Object.keys(V);
