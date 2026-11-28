// DigiStep365 WhatsApp (Android) lesson screens — reconstructed screens drawn in code (SVG).
// - Layout follows WhatsApp for Android on a Galaxy phone (Chats / Updates / Communities / Calls tabs, green new-chat button,
//   chat room with beige wallpaper, light-green own bubbles, input bar, attach sheet, Settings lists).
// - Fictional names, chats and numbers only. No WhatsApp or Meta logos.
// - Every visible word goes through tr() so each language can draw its own screen text (setWaTranslator).
// - These are NOT captured screens: every lesson stays unpublished until it is compared with the real app and approved.
// renderWhatsApp(spec, target, action) → { svg, width, height, targets, target }
const W = 360;
const H = 640;
const C = {
  green: '#25D366', teal: '#008069', dark: '#111B21', sub: '#667781', line: '#E9EDEF', bg: '#FFFFFF',
  wall: '#EFEAE2', mine: '#D9FDD3', unread: '#25D366', gray: '#F0F2F5', red: '#E53935', dim: 'rgba(0,0,0,.5)', blue: '#53BDEB',
};
const AV = ['#F6B26B', '#93C47D', '#76A5AF', '#8E7CC3', '#E06666', '#6FA8DC', '#C27BA0', '#E5B94E'];

let TR = (s) => s;
let RTL = false;
/** Translate drawn words (labels stay English for targets). dir: 'rtl' mirrors the layout for Arabic. */
export function setWaTranslator(fn, { dir = 'ltr' } = {}) { TR = fn ?? ((s) => s); RTL = dir === 'rtl'; }
const tr = (s) => TR(String(s ?? ''));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function canvas() {
  const parts = []; const targets = {};
  return {
    add(s) { parts.push(s); },
    reg(n, x, y, w, h) { if (n && !targets[n]) targets[n] = { x, y, w, h }; },
    regLast(n, x, y, w, h) { if (n) targets[n] = { x, y, w, h }; },
    rect(x, y, w, h, fill, r = 0, extra = '') { parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`); },
    text(x, y, s, { size = 15, fill = C.dark, weight = 500, anchor = 'start', raw = false } = {}) {
      // RTL: the whole screen is mirrored; each text is flipped back around its own x and its anchor swapped
      const a = RTL ? ({ start: 'end', end: 'start' }[anchor] ?? anchor) : anchor;
      const flip = RTL ? ` transform="matrix(-1 0 0 1 ${2 * x} 0)"` : '';
      parts.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${a}"${flip}>${esc(raw ? s : tr(s))}</text>`);
    },
    out() { return { body: parts.join(''), targets }; },
  };
}
// Width in "Latin letters": CJK and Hangul count double, Thai vowel/tone marks count zero
const cw = (ch) => (/[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/.test(ch) ? 0 : /[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/.test(ch) ? 2 : 1);
const width = (t) => [...t].reduce((a, ch) => a + cw(ch), 0);
const fit = (s, n) => { const t = tr(s); if (width(t) <= n) return t; let o = ''; for (const ch of t) { if (width(o + ch) > n - 1) break; o += ch; } return `${o}…`; };
// Word pieces: languages without spaces (Thai, Japanese, Chinese) are split into words by Intl.Segmenter
const SEG = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: 'word' }) : null;
const pieces = (t) => (SEG ? [...SEG.segment(t)].map((x) => x.segment) : t.split(/(\s+)/));
function wrap(s, max) {
  const t = tr(s); const out = []; let line = '';
  for (const p of pieces(t)) {
    if (width(line + p) > max && line.trim()) { out.push(line.trim()); line = p.trimStart(); } else line += p;
    while (width(line) > max) { let a = ''; for (const ch of line) { if (width(a + ch) > max) break; a += ch; } out.push(a); line = line.slice(a.length); }
  }
  if (line.trim()) out.push(line.trim());
  return out;
}


const I = {
  search: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><circle cx="${x - 2}" cy="${y - 2}" r="7"/><line x1="${x + 3}" y1="${y + 3}" x2="${x + 8}" y2="${y + 8}"/></g>`,
  camera: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2.1" fill="none"><rect x="${x - 10}" y="${y - 7}" width="20" height="15" rx="3"/><circle cx="${x}" cy="${y + 0.5}" r="4.2"/></g>`,
  dots: (x, y, f = C.dark) => `<g fill="${f}"><circle cx="${x}" cy="${y - 7}" r="2.2"/><circle cx="${x}" cy="${y}" r="2.2"/><circle cx="${x}" cy="${y + 7}" r="2.2"/></g>`,
  back: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2.3" fill="none" stroke-linecap="round"><line x1="${x - 8}" y1="${y}" x2="${x + 8}" y2="${y}"/><polyline points="${x - 1},${y - 7} ${x - 8},${y} ${x - 1},${y + 7}"/></g>`,
  close: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2.3" stroke-linecap="round"><line x1="${x - 7}" y1="${y - 7}" x2="${x + 7}" y2="${y + 7}"/><line x1="${x + 7}" y1="${y - 7}" x2="${x - 7}" y2="${y + 7}"/></g>`,
  phone: (x, y, f = C.dark) => `<path d="M${x - 7} ${y - 8} l4 -1 l3 6 l-3 2 q2 5 6 7 l2 -3 l6 3 l-1 4 q-12 2 -17 -18z" fill="${f}"/>`,
  video: (x, y, f = C.dark) => `<g fill="${f}"><rect x="${x - 10}" y="${y - 6}" width="14" height="12" rx="2"/><path d="M${x + 5} ${y - 2} l6 -4 v12 l-6 -4z"/></g>`,
  mic: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><rect x="${x - 4}" y="${y - 10}" width="8" height="13" rx="4"/><path d="M${x - 8} ${y} a8 8 0 0 0 16 0"/><line x1="${x}" y1="${y + 8}" x2="${x}" y2="${y + 11}"/></g>`,
  send: (x, y, f = '#fff') => `<path d="M${x - 8} ${y - 8} l18 8 l-18 8 l3 -8z" fill="${f}"/>`,
  clip: (x, y, f = C.sub) => `<path d="M${x + 5} ${y - 7} l-9 9 a3 3 0 0 0 4 4 l9 -9 a5 5 0 0 0 -7 -7 l-9 9 a7 7 0 0 0 10 10 l7 -7" stroke="${f}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  smile: (x, y, f = C.sub) => `<g stroke="${f}" stroke-width="2" fill="none"><circle cx="${x}" cy="${y}" r="9"/><path d="M${x - 4} ${y + 2} q4 4 8 0"/></g><circle cx="${x - 3}" cy="${y - 3}" r="1.3" fill="${f}"/><circle cx="${x + 3}" cy="${y - 3}" r="1.3" fill="${f}"/>`,
  chat: (x, y, f = C.dark) => `<path d="M${x - 10} ${y - 2} a10 9 0 1 1 5 8 l-6 2 l2 -5 a10 9 0 0 1 -1 -5z" fill="none" stroke="${f}" stroke-width="2.1"/>`,
  newchat: (x, y, f = '#fff') => `<path d="M${x - 9} ${y - 2} a9 8 0 1 1 4 7 l-5 2 l2 -5 a9 8 0 0 1 -1 -4z" fill="none" stroke="${f}" stroke-width="2.2"/><line x1="${x}" y1="${y - 6}" x2="${x}" y2="${y + 2}" stroke="${f}" stroke-width="2.2"/><line x1="${x - 4}" y1="${y - 2}" x2="${x + 4}" y2="${y - 2}" stroke="${f}" stroke-width="2.2"/>`,
  updates: (x, y, f = C.dark) => `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${f}" stroke-width="2.1" stroke-dasharray="10 3"/><circle cx="${x}" cy="${y}" r="4" fill="${f}"/>`,
  people: (x, y, f = C.dark) => `<g fill="${f}"><circle cx="${x - 4}" cy="${y - 4}" r="4"/><circle cx="${x + 6}" cy="${y - 3}" r="3"/><path d="M${x - 12} ${y + 9} q8 -12 16 0z"/><path d="M${x + 2} ${y + 9} q5 -9 11 0z"/></g>`,
  star: (x, y, f = C.dark) => `<path d="M${x} ${y - 9} l2.6 6 6.4 .6 -4.9 4.3 1.5 6.3 -5.6 -3.4 -5.6 3.4 1.5 -6.3 -4.9 -4.3 6.4 -.6z" fill="none" stroke="${f}" stroke-width="1.8"/>`,
  trash: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2" fill="none"><path d="M${x - 7} ${y - 5} h14 l-1.5 14 h-11z"/><line x1="${x - 9}" y1="${y - 6}" x2="${x + 9}" y2="${y - 6}"/></g>`,
  reply: (x, y, f = C.dark) => `<path d="M${x + 8} ${y + 7} q0 -10 -12 -10 h-4 l5 -5 m-5 5 l5 5" stroke="${f}" stroke-width="2.1" fill="none" stroke-linecap="round"/>`,
  fwd: (x, y, f = C.dark) => `<path d="M${x - 8} ${y + 7} q0 -10 12 -10 h4 l-5 -5 m5 5 l-5 5" stroke="${f}" stroke-width="2.1" fill="none" stroke-linecap="round"/>`,
  copy: (x, y, f = C.dark) => `<g stroke="${f}" stroke-width="2" fill="none"><rect x="${x - 7}" y="${y - 4}" width="11" height="13" rx="2"/><path d="M${x - 3} ${y - 4} v-4 h11 v13 h-4"/></g>`,
  pencil: (x, y, f = C.dark) => `<path d="M${x - 8} ${y + 8} l2 -6 l10 -10 l4 4 l-10 10z" stroke="${f}" stroke-width="2" fill="none"/>`,
  down: (x, y, f = '#fff') => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><line x1="${x}" y1="${y - 9}" x2="${x}" y2="${y + 4}"/><polyline points="${x - 6},${y - 2} ${x},${y + 4} ${x + 6},${y - 2}"/><line x1="${x - 9}" y1="${y + 9}" x2="${x + 9}" y2="${y + 9}"/></g>`,
  share: (x, y, f = '#fff') => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M${x - 8} ${y} v8 h16 v-8"/><line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 3}"/><polyline points="${x - 5},${y - 5} ${x},${y - 10} ${x + 5},${y - 5}"/></g>`,
  qr: (x, y, f = C.dark) => `<g fill="none" stroke="${f}" stroke-width="2"><rect x="${x - 9}" y="${y - 9}" width="7" height="7"/><rect x="${x + 2}" y="${y - 9}" width="7" height="7"/><rect x="${x - 9}" y="${y + 2}" width="7" height="7"/></g><rect x="${x + 3}" y="${y + 3}" width="5" height="5" fill="${f}"/>`,
  pin: (x, y, f = C.sub) => `<path d="M${x - 3} ${y - 8} h6 l-1 6 l4 4 h-12 l4 -4z M${x} ${y + 2} v7" stroke="${f}" stroke-width="1.8" fill="none"/>`,
  lock: (x, y, f = C.sub) => `<g stroke="${f}" stroke-width="2" fill="none"><rect x="${x - 7}" y="${y - 2}" width="14" height="11" rx="2"/><path d="M${x - 4} ${y - 2} v-3 a4 4 0 0 1 8 0 v3"/></g>`,
};
/** attach sheet item icon: coloured circle + simple glyph */
const ATTACH_COLOR = { Gallery: '#BF59CF', Camera: '#FF2E74', Location: '#1FA855', Contact: '#009DE2', Document: '#7F66FF', Audio: '#FA6533', Poll: '#02A698', Event: '#FF2E74', 'AI images': '#5157AE' };
function attachIcon(c, x, y, name) {
  const col = ATTACH_COLOR[name] ?? '#7F66FF';
  const g = { Gallery: `<rect x="${x - 9}" y="${y - 7}" width="18" height="14" rx="2" fill="none" stroke="#fff" stroke-width="2"/><path d="M${x - 7} ${y + 5} l5 -6 l4 4 l3 -3 l3 5z" fill="#fff"/>`, Camera: I.camera(x, y, '#fff'), Location: `<path d="M${x} ${y + 9} l-6 -9 a7 7 0 1 1 12 0z" fill="#fff"/>`, Contact: `<circle cx="${x}" cy="${y - 4}" r="4" fill="#fff"/><path d="M${x - 8} ${y + 9} q8 -12 16 0z" fill="#fff"/>`, Document: `<path d="M${x - 6} ${y - 9} h8 l5 5 v13 h-13z" fill="#fff"/>`, Audio: `<path d="M${x - 3} ${y + 6} v-14 l9 -2 v13" stroke="#fff" stroke-width="2" fill="none"/><circle cx="${x - 5}" cy="${y + 6}" r="3" fill="#fff"/>`, Poll: `<g fill="#fff"><rect x="${x - 8}" y="${y - 6}" width="12" height="3"/><rect x="${x - 8}" y="${y - 1}" width="16" height="3"/><rect x="${x - 8}" y="${y + 4}" width="8" height="3"/></g>`, Event: `<rect x="${x - 8}" y="${y - 7}" width="16" height="15" rx="2" fill="none" stroke="#fff" stroke-width="2"/>` }[name] ?? `<circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`;
  c.add(`<circle cx="${x}" cy="${y}" r="24" fill="${col}"/>${g}`);
}
function avatar(c, x, y, name, size = 48) {
  const col = AV[[...String(name)].reduce((a, ch) => a + ch.charCodeAt(0), 0) % AV.length];
  c.add(`<circle cx="${x + size / 2}" cy="${y + size / 2}" r="${size / 2}" fill="${col}"/><circle cx="${x + size / 2}" cy="${y + size * 0.4}" r="${size * 0.17}" fill="#fff" opacity=".9"/><path d="M${x + size * 0.22} ${y + size * 0.84} q${size * 0.28} ${-size * 0.38} ${size * 0.56} 0z" fill="#fff" opacity=".9"/>`);
}
function statusBar(c, dark = false) {
  const f = dark ? '#fff' : C.dark;
  c.text(18, 24, '10:00', { size: 14, fill: f, weight: 600, raw: true });
  c.add(`<circle cx="180" cy="17" r="7" fill="#0B0B0D"/><g fill="${f}"><rect x="296" y="12" width="4" height="10" rx="1"/><rect x="302" y="9" width="4" height="13" rx="1"/><rect x="314" y="9" width="26" height="13" rx="3" fill="none" stroke="${f}" stroke-width="2"/><rect x="317" y="12" width="17" height="7" rx="1"/></g>`);
}
function navBar(c, dark = false) {
  const f = dark ? '#fff' : '#3C4043';
  c.add(`<g stroke="${f}" stroke-width="2.6" fill="none" stroke-linecap="round"><line x1="64" y1="612" x2="64" y2="628"/><line x1="72" y1="612" x2="72" y2="628"/><line x1="80" y1="612" x2="80" y2="628"/><rect x="170" y="610" width="20" height="20" rx="6"/><polyline points="294,610 284,620 294,630"/></g>`);
  c.reg('Back button', 256, 600, 64, 40);
}
function topBar(c, { title = '', sub = '', back = true, closeX = false, right = [], bg = C.bg, fg = C.dark, avatarName = null, size = 19 }) {
  c.rect(0, 34, W, 56, bg);
  let tx = 18;
  if (back || closeX) { c.add((closeX ? I.close : I.back)(26, 62, fg)); c.reg(closeX ? 'Close' : 'Back', 4, 40, 44, 44); tx = 52; }
  if (avatarName) { avatar(c, tx - 4, 44, avatarName, 36); c.reg('Contact name', tx - 4, 40, 200, 44); tx += 40; }
  c.text(tx, sub ? 58 : 68, fit(title, avatarName ? 13 : 17), { size, weight: 700, fill: fg, raw: true });
  if (sub) c.text(tx, 78, fit(sub, 22), { size: 12.5, fill: fg === '#fff' ? '#d7e9e4' : C.sub, raw: true });
  let x = W - 22;
  for (const r of [...right].reverse()) {
    if (I[r.icon]) { c.add(I[r.icon](x, 62, fg)); c.reg(r.label, x - 20, 42, 40, 40); x -= 42; } else {
      const t = tr(r.text); const w = t.length * 9.5 + 22; x -= w - 22;
      c.text(x + w / 2 - 22, 68, t, { size: 15, weight: 700, fill: r.disabled ? '#B0B9BE' : C.teal, anchor: 'middle', raw: true });
      c.reg(r.label ?? r.text, x - 22, 44, w, 36); x -= 30;
    }
  }
}
const TABS = [['chats', 'Chats', 'chat'], ['updates', 'Updates', 'updates'], ['communities', 'Communities', 'people'], ['calls', 'Calls', 'phone']];
function tabBar(c, tab) {
  c.rect(0, 532, W, 68, C.bg); c.add(`<line x1="0" y1="532" x2="${W}" y2="532" stroke="${C.line}"/>`);
  TABS.forEach(([id, label, ic], i) => {
    const x = 45 + i * 90; const on = id === tab;
    if (on) c.rect(x - 28, 542, 56, 30, '#D8FDD2', 15);
    c.add(I[ic](x, 557, on ? C.dark : '#54656F'));
    c.text(x, 592, label, { size: 12, weight: on ? 800 : 600, anchor: 'middle', fill: on ? C.dark : '#54656F' });
    c.reg(`${label} tab`, x - 45, 532, 90, 68);
  });
}
function fab(c, label = 'New chat', icon = 'newchat', y = 470) {
  c.rect(W - 78, y, 58, 58, C.green, 18); c.add(I[icon](W - 49, y + 29, '#fff')); c.reg(label, W - 78, y, 58, 58);
}
function overflowMenu(c, items) {
  const mw = 200; const mx = W - mw - 8; const my = 44;
  c.rect(mx, my, mw, items.length * 46 + 12, '#fff', 8, 'filter="drop-shadow(0 2px 6px rgba(0,0,0,.25))"');
  items.forEach((it, i) => { c.text(mx + 18, my + 36 + i * 46, it, { size: 15.5 }); c.reg(it, mx, my + 6 + i * 46, mw, 46); });
}
function dim(c) { c.rect(0, 0, W, H, C.dim); }

const V = {};

/** Main tabs: chats | updates | communities | calls */
V.tab = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  const tab = s.tab ?? 'chats';
  c.text(18, 72, tab === 'chats' ? 'WhatsApp' : { updates: 'Updates', communities: 'Communities', calls: 'Calls' }[tab], { size: 22, weight: 700, fill: tab === 'chats' ? C.teal : C.dark, raw: tab === 'chats' });
  c.add(I.camera(W - 92, 62)); c.reg('Camera', W - 112, 42, 40, 40);
  if (tab !== 'chats') { c.add(I.search(W - 58, 62)); c.reg('Search', W - 78, 42, 40, 40); }
  c.add(I.dots(W - 22, 62)); c.reg('More options', W - 42, 42, 40, 40);
  let y = 94;
  if (tab === 'chats') {
    c.rect(16, y, W - 32, 42, C.gray, 21); c.add(I.search(40, y + 21, C.sub)); c.text(58, y + 27, 'Ask Meta AI or Search', { size: 14, fill: C.sub }); c.reg('Search', 16, y, W - 32, 42); y += 52;
    ['All', 'Unread', 'Favourites', 'Groups'].forEach((f, i) => { const t = tr(f); const w = t.length * 8 + 26; const x = 16 + [0, 52, 130, 236][i]; c.rect(x, y, w, 30, i === (s.filter ?? 0) ? '#D8FDD2' : C.gray, 15); c.text(x + w / 2, y + 20, t, { size: 13, weight: 600, anchor: 'middle', fill: i === (s.filter ?? 0) ? '#0A332C' : C.sub, raw: true }); c.reg(`${f} filter`, x, y, w, 30); });
    y += 44;
    if (s.archived) { c.add(`<rect x="22" y="${y + 8}" width="24" height="18" rx="2" fill="none" stroke="${C.sub}" stroke-width="2"/>`); c.text(70, y + 24, 'Archived', { size: 15, weight: 700 }); c.text(W - 18, y + 24, String(s.archived), { size: 13, fill: C.green, weight: 700, anchor: 'end', raw: true }); c.reg('Archived', 0, y, W, 36); y += 42; }
    for (const [n, last, time, unread] of s.chats ?? [['Maria', 'Did you eat dinner?', '18:20', 2], ['Family', 'Photo', '17:02', 5], ['John', 'See you tomorrow', '09:15', 0], ['Walking club', 'Meeting is on Saturday', 'Yesterday', 0]]) {
      if (y > 470) break;
      avatar(c, 16, y, n, 50); c.text(78, y + 21, fit(n, 18), { size: 16.5, weight: 600, raw: true }); c.text(78, y + 43, fit(last, 26), { size: 14, fill: C.sub, raw: true });
      c.text(W - 18, y + 20, time, { size: 12, fill: unread ? C.unread : C.sub, anchor: 'end' });
      if (unread) { c.add(`<circle cx="${W - 28}" cy="${y + 38}" r="10" fill="${C.unread}"/>`); c.text(W - 28, y + 42, String(unread), { size: 11.5, fill: '#fff', weight: 700, anchor: 'middle', raw: true }); }
      if (s.pinned === n) c.add(I.pin(W - 56, y + 38));
      if (s.muted === n) c.add(`<path d="M${W - 64} ${y + 34} h6 l6 -5 v14 l-6 -5 h-6z" fill="${C.sub}"/><line x1="${W - 66}" y1="${y + 30}" x2="${W - 50}" y2="${y + 46}" stroke="${C.sub}" stroke-width="2"/>`);
      c.reg(n, 0, y - 6, W, 64); y += 68;
    }
    fab(c);
  } else if (tab === 'updates') {
    c.text(18, y + 20, 'Status', { size: 18, weight: 700 }); y += 36;
    avatar(c, 16, y, 'Me', 52); c.add(`<circle cx="60" cy="${y + 46}" r="10" fill="${C.green}" stroke="#fff" stroke-width="2"/><path d="M55 ${y + 46} h10 M60 ${y + 41} v10" stroke="#fff" stroke-width="2"/>`);
    c.text(80, y + 24, 'My status', { size: 16, weight: 600 }); c.text(80, y + 44, 'Tap to add status update', { size: 13, fill: C.sub }); c.reg('My status', 0, y - 4, W, 60); y += 70;
    c.text(18, y + 16, 'Recent updates', { size: 13, fill: C.sub, weight: 600 }); y += 28;
    for (const n of s.statuses ?? ['Maria', 'John']) { c.add(`<circle cx="42" cy="${y + 26}" r="28" fill="none" stroke="${C.green}" stroke-width="2.5"/>`); avatar(c, 18, y + 2, n, 48); c.text(80, y + 24, n, { size: 16, weight: 600, raw: true }); c.text(80, y + 44, 'Today, 09:12', { size: 13, fill: C.sub }); c.reg(n, 0, y - 4, W, 60); y += 64; }
    c.add(`<line x1="0" y1="${y + 4}" x2="${W}" y2="${y + 4}" stroke="${C.line}"/>`); c.text(18, y + 32, 'Channels', { size: 18, weight: 700 }); c.reg('Channels', 0, y + 8, 160, 36);
    c.text(W - 18, y + 32, 'Explore', { size: 14, weight: 700, fill: C.teal, anchor: 'end' }); c.reg('Explore', W - 100, y + 10, 90, 34);
    for (const [n, d] of s.channels ?? [['Garden Tips', '12K followers'], ['Health News', '48K followers']]) { y += 48; if (y > 470) break; avatar(c, 16, y, n, 40); c.text(68, y + 18, n, { size: 15, weight: 600, raw: true }); c.text(68, y + 36, d, { size: 12.5, fill: C.sub, raw: true }); c.reg(n, 0, y - 4, W - 100, 48); if (s.follow) { c.rect(W - 88, y + 6, 70, 30, '#D8FDD2', 15); c.text(W - 53, y + 26, 'Follow', { size: 13, weight: 700, fill: '#0A332C', anchor: 'middle' }); c.reg('Follow', W - 88, y + 6, 70, 30); } }
    fab(c, 'Add status', 'camera');
  } else if (tab === 'communities') {
    c.rect(16, y + 6, W - 32, 64, C.gray, 14); c.add(I.people(48, y + 38)); c.text(80, y + 44, 'New community', { size: 16, weight: 600 }); c.reg('New community', 16, y + 6, W - 32, 64); y += 86;
    for (const n of s.communities ?? ['Neighbourhood', 'Grandparents club']) { avatar(c, 16, y, n, 48); c.text(78, y + 30, n, { size: 16, weight: 600, raw: true }); c.reg(n, 0, y - 4, W, 58); y += 62; }
  } else {
    c.text(18, y + 20, 'Favourites', { size: 15, weight: 700 }); y += 34;
    c.rect(16, y, 52, 52, '#D8FDD2', 26); c.add(I.phone(42, y + 26, C.teal)); c.text(84, y + 32, 'Add favourite', { size: 15 }); c.reg('Add favourite', 0, y - 4, W, 60); y += 70;
    c.text(18, y + 16, 'Recent', { size: 15, weight: 700 }); y += 28;
    for (const [n, d, miss] of s.calls ?? [['Maria', 'Today, 18:40', false], ['John', 'Yesterday, 10:02', true]]) { avatar(c, 16, y, n, 48); c.text(78, y + 22, n, { size: 16, weight: 600, fill: miss ? C.red : C.dark, raw: true }); c.text(78, y + 42, d, { size: 13, fill: C.sub }); c.add(I.phone(W - 30, y + 24, C.dark)); c.reg(`Call ${n}`, W - 52, y, 44, 48); c.reg(n, 0, y - 4, W - 60, 58); y += 64; }
    fab(c, 'New call', 'phone');
  }
  tabBar(c, tab);
  if (s.menu) overflowMenu(c, s.menu);
  navBar(c);
};

/** Chat room */
V.room = (c, s) => {
  c.rect(0, 0, W, H, C.wall); statusBar(c);
  for (let i = 0; i < 26; i++) c.add(`<circle cx="${(i * 97) % W}" cy="${100 + ((i * 53) % 420)}" r="2" fill="#E2DAD0"/>`);
  if (s.select) {
    c.rect(0, 34, W, 56, C.bg);
    c.add(I.back(26, 62)); c.reg('Back', 4, 40, 44, 44); c.text(56, 68, '1', { size: 19, weight: 700, raw: true });
    const acts = s.actions ?? [['Reply', 'reply'], ['Star', 'star'], ['Delete', 'trash'], ['Forward', 'fwd'], ['More options', 'dots']];
    acts.forEach(([l, ic], i) => { const x = W - 22 - (acts.length - 1 - i) * 44; c.add(I[ic](x, 62)); c.reg(l, x - 20, 42, 40, 40); });
  } else {
    topBar(c, { title: s.name ?? 'Maria', sub: s.sub ?? (s.group ? tr('tap here for group info') : tr('online')), avatarName: s.name ?? 'Maria', right: [{ icon: 'video', label: 'Video call' }, { icon: 'phone', label: 'Voice call' }, { icon: 'dots', label: 'More options' }], bg: C.bg });
  }
  const panel = s.attach ? 230 : s.emoji ? 236 : 0;
  const inputY = 600 - 60 - panel;
  if (s.pinnedMsg) { c.rect(0, 90, W, 40, '#fff'); c.add(I.pin(22, 110)); c.text(40, 115, fit(s.pinnedMsg, 30), { size: 14, raw: true }); c.reg('Pinned message', 0, 90, W, 40); }
  let y = s.pinnedMsg ? 146 : 104;
  if (s.disappearing) { c.rect(40, y, W - 80, 40, '#FFF5C4', 8); c.text(W / 2, y + 25, 'Disappearing messages: 24 hours', { size: 12.5, fill: '#54656F', anchor: 'middle' }); y += 52; }
  c.add(`<clipPath id="wamsg"><rect x="0" y="90" width="${W}" height="${inputY - 90}"/></clipPath><g clip-path="url(#wamsg)">`);
  for (const m of s.msgs ?? [{ date: 'Today' }, { text: 'Did you eat dinner?' }, { me: true, text: 'Yes, I did. And you?', ticks: 'blue' }]) {
    if (y > inputY - 20) break;
    if (m.date) { const t = tr(m.date); c.rect(W / 2 - t.length * 4.5 - 14, y, t.length * 9 + 28, 26, '#fff', 8); c.text(W / 2, y + 18, t, { size: 12.5, fill: C.sub, anchor: 'middle', raw: true }); y += 38; continue; }
    if (m.sys) { const ls = wrap(m.sys, 34); c.rect(30, y, W - 60, ls.length * 18 + 14, '#FFF5C4', 8); ls.forEach((l, i) => c.text(W / 2, y + 20 + i * 18, l, { size: 12.5, fill: '#54656F', anchor: 'middle', raw: true })); y += ls.length * 18 + 26; continue; }
    const lines = m.photo || m.voice || m.doc || m.location || m.contact || m.sticker !== undefined ? [] : wrap(m.text ?? '', 26);
    const bw = m.photo ? 210 : m.voice ? 236 : m.doc || m.location || m.contact ? 236 : m.sticker !== undefined ? 110 : Math.min(260, Math.max(7, ...lines.map((l) => l.length)) * 8.6 + 64);
    const bh = m.photo ? 170 : m.voice ? 52 : m.doc ? 64 : m.location ? 150 : m.contact ? 66 : m.sticker !== undefined ? 110 : lines.length * 20 + 26 + (m.from ? 18 : 0) + (m.quote ? 44 : 0);
    const bx = m.me ? W - 10 - bw : 10;
    const label = m.label ?? (m.me ? 'Sent message' : 'Received message');
    if (m.sticker !== undefined) {
      const cx = bx + 55; const cy = y + 55; const col = ['#FFD54F', '#AED581', '#81D4FA', '#F48FB1'][m.sticker % 4];
      c.add(`<circle cx="${cx}" cy="${cy}" r="46" fill="${col}"/><circle cx="${cx - 15}" cy="${cy - 8}" r="5" fill="#3a2a10"/><circle cx="${cx + 15}" cy="${cy - 8}" r="5" fill="#3a2a10"/><path d="M${cx - 16} ${cy + 12} q16 16 32 0" stroke="#3a2a10" stroke-width="4" fill="none" stroke-linecap="round"/>`);
    } else {
      c.rect(bx, y, bw, bh, m.me ? C.mine : '#fff', 9);
      let ty = y + 21;
      if (m.from) { c.text(bx + 10, ty, m.from, { size: 13, weight: 700, fill: '#E5B94E', raw: true }); ty += 18; }
      if (m.quote) { c.rect(bx + 6, ty - 14, bw - 12, 38, m.me ? '#C7EBC0' : C.gray, 6); c.rect(bx + 6, ty - 14, 4, 38, C.teal); c.text(bx + 16, ty + 1, fit(m.quoteFrom ?? 'Maria', 20), { size: 12, weight: 700, fill: C.teal, raw: true }); c.text(bx + 16, ty + 17, fit(m.quote, 26), { size: 12.5, fill: C.sub, raw: true }); ty += 44; }
      if (m.photo) { c.rect(bx + 4, y + 4, bw - 8, bh - 8, ['#9CC3A0', '#8FB1D6', '#C9A97B'][(m.photos ?? 1) % 3], 7); c.add(`<path d="M${bx + 20} ${y + bh - 20} l50 -60 l36 36 l24 -20 l50 44z" fill="#fff" opacity=".55"/>`); if (m.photos > 1) c.text(bx + bw / 2, y + bh / 2 + 10, `+${m.photos - 1}`, { size: 30, weight: 800, fill: '#fff', anchor: 'middle', raw: true }); if (m.video) c.add(`<circle cx="${bx + bw / 2}" cy="${y + bh / 2}" r="22" fill="rgba(0,0,0,.45)"/><path d="M${bx + bw / 2 - 6} ${y + bh / 2 - 10} l16 10 l-16 10z" fill="#fff"/>`); if (m.hd) { c.rect(bx + 10, y + 10, 30, 20, 'rgba(0,0,0,.45)', 4); c.text(bx + 25, y + 25, 'HD', { size: 11, fill: '#fff', weight: 800, anchor: 'middle', raw: true }); } }
      else if (m.voice) { avatar(c, bx + (m.me ? bw - 46 : 8), y + 8, m.me ? 'Me' : 'Maria', 36); const px = bx + (m.me ? 14 : 54); c.add(`<path d="M${px} ${y + 16} l14 10 l-14 10z" fill="${C.sub}"/>`); c.add(`<g stroke="${C.sub}" stroke-width="2.4" stroke-linecap="round">${Array.from({ length: 16 }, (_, i) => `<line x1="${px + 26 + i * 7}" y1="${y + 26 - ((i * 7) % 5 + 2) * 1.6}" x2="${px + 26 + i * 7}" y2="${y + 26 + ((i * 7) % 5 + 2) * 1.6}"/>`).join('')}</g>`); c.text(px + 26, y + 47, m.voice, { size: 11.5, fill: C.sub, raw: true }); if (m.speed) { c.rect(px + 110, y + 36, 30, 16, C.gray, 8); c.text(px + 125, y + 48, m.speed, { size: 10.5, weight: 700, anchor: 'middle', raw: true }); c.reg('Playback speed', px + 104, y + 30, 42, 26); } c.reg(m.me ? 'Sent voice message' : 'Received voice message', bx, y, bw, bh); }
      else if (m.doc) { c.rect(bx + 6, y + 6, bw - 12, 52, m.me ? '#C7EBC0' : C.gray, 6); c.add(`<path d="M${bx + 16} ${y + 14} h18 l8 8 v26 h-26z" fill="#E53935"/>`); c.text(bx + 52, y + 32, fit(m.doc, 20), { size: 13.5, weight: 600, raw: true }); c.text(bx + 52, y + 50, m.size ?? '1 page · PDF', { size: 11.5, fill: C.sub, raw: true }); }
      else if (m.location) { c.rect(bx + 4, y + 4, bw - 8, 108, '#CFE3C8', 6); c.add(`<path d="M${bx + bw / 2} ${y + 72} l-9 -13 a10 10 0 1 1 18 0z" fill="${C.red}"/>`); c.text(bx + 10, y + 132, m.location === true ? (m.live ? 'Live location' : 'Current location') : m.location, { size: 13.5, weight: 600 }); if (m.live) { c.text(bx + 10, y + 146, 'Stop sharing', { size: 12.5, fill: C.red, weight: 700 }); c.reg('Stop sharing', bx, y + 134, 120, 20); } }
      else if (m.contact) { avatar(c, bx + 10, y + 10, m.contact, 40); c.text(bx + 60, y + 36, fit(m.contact, 18), { size: 15, weight: 600, raw: true }); c.add(`<line x1="${bx}" y1="${y + 60}" x2="${bx + bw}" y2="${y + 60}" stroke="${C.line}"/>`); }
      else lines.forEach((l, i) => c.text(bx + 10, ty + i * 20, l, { size: 15, raw: true }));
      c.text(bx + bw - (m.me ? 30 : 10), y + bh - 7, m.time ?? '18:21', { size: 11, fill: C.sub, anchor: 'end', raw: true });
      if (m.me) { const col = m.ticks === 'blue' ? C.blue : m.ticks === 'one' ? 'none' : C.sub; c.add(`<path d="M${bx + bw - 26} ${y + bh - 12} l3 3 l6 -7${m.ticks === 'one' ? '' : ` M${bx + bw - 20} ${y + bh - 9} l6 -7`}" stroke="${m.ticks === 'one' ? C.sub : col === 'none' ? C.sub : col}" stroke-width="1.8" fill="none"/>`); }
      if (m.edited) c.text(bx + bw - 70, y + bh - 7, 'Edited', { size: 11, fill: C.sub, anchor: 'end' });
      if (m.starred) c.add(I.star(bx + bw - 86, y + bh - 11, C.sub));
      if (m.reaction) { c.rect(bx + 12, y + bh - 4, 30, 22, '#fff', 11, `stroke="${C.line}"`); c.text(bx + 27, y + bh + 12, m.reaction, { size: 13, anchor: 'middle', raw: true }); }
    }
    c.regLast(label, bx, y, bw, bh);
    if (m.selected) c.rect(0, y - 4, W, bh + 8, 'rgba(37,211,102,.18)');
    y += bh + (m.reaction ? 26 : 10);
  }
  c.add('</g>');
  if (s.reactions) { c.rect(40, s.reactionsY ?? 220, W - 80, 48, '#fff', 24, 'filter="drop-shadow(0 2px 4px rgba(0,0,0,.2))"'); ['👍', '❤️', '😂', '😮', '😢', '🙏', '+'].forEach((e, i) => { const x = 66 + i * 38; c.text(x, (s.reactionsY ?? 220) + 32, e, { size: e === '+' ? 22 : 22, anchor: 'middle', raw: true, fill: C.sub }); c.reg(e === '+' ? 'More reactions' : `React ${e}`, x - 18, s.reactionsY ?? 220, 36, 48); }); }
  // input bar
  c.rect(8, inputY + 8, W - 76, 46, '#fff', 23);
  c.add(I.smile(32, inputY + 31)); c.reg('Emoji', 10, inputY + 10, 44, 42);
  c.text(54, inputY + 37, s.input || tr('Message'), { size: 16, fill: s.input ? C.dark : C.sub, raw: true }); c.reg('Message box', 50, inputY + 8, 170, 46);
  if (!s.input) { c.add(I.clip(W - 116, inputY + 31)); c.reg('Attach', W - 136, inputY + 10, 40, 42); c.add(I.camera(W - 86, inputY + 31, C.sub)); c.reg('Camera button', W - 106, inputY + 10, 40, 42); }
  c.add(`<circle cx="${W - 34}" cy="${inputY + 31}" r="25" fill="${s.recording ? C.red : C.green}"/>`);
  if (s.input) { c.add(I.send(W - 32, inputY + 31)); c.reg('Send', W - 60, inputY + 6, 52, 52); }
  else { c.add(I.mic(W - 34, inputY + 31, '#fff')); c.reg('Microphone', W - 60, inputY + 6, 52, 52); }
  if (s.recording) {
    c.rect(8, inputY + 8, W - 76, 46, '#fff', 23); c.add(`<circle cx="30" cy="${inputY + 31}" r="5" fill="${C.red}"/>`); c.text(44, inputY + 36, s.locked ? '0:07' : `0:07   ${tr('‹ Slide to cancel')}`, { size: 14, fill: C.sub, raw: true });
    if (s.locked) { c.add(I.trash(30 + 200, inputY + 31, C.sub)); c.reg('Delete recording', 210, inputY + 10, 40, 42); c.rect(W / 2 - 20, inputY + 16, 40, 30, C.gray, 15); c.text(W / 2, inputY + 36, s.paused ? '▶' : 'II', { size: 14, weight: 800, anchor: 'middle', raw: true }); c.reg(s.paused ? 'Resume recording' : 'Pause recording', W / 2 - 22, inputY + 12, 44, 38); c.add(I.send(W - 32, inputY + 31)); c.reg('Send', W - 60, inputY + 6, 52, 52); }
    else { c.rect(W - 52, inputY - 80, 36, 66, '#fff', 18); c.add(I.lock(W - 34, inputY - 54, C.sub)); c.text(W - 34, inputY - 26, '⌃', { size: 14, anchor: 'middle', fill: C.sub, raw: true }); c.reg('Lock recording', W - 52, inputY - 80, 36, 66); c.reg('Slide to cancel', 40, inputY + 10, 200, 42); }
  }
  if (s.attach) {
    const py = inputY + 66; c.rect(8, py - 6, W - 16, panel - 10, '#fff', 18);
    const items = s.items ?? ['Gallery', 'Camera', 'Location', 'Contact', 'Document', 'Audio', 'Poll', 'Event'];
    items.slice(0, 8).forEach((it, i) => { const x = 52 + (i % 4) * 85; const yy = py + 36 + Math.floor(i / 4) * 92; attachIcon(c, x, yy, it); c.text(x, yy + 42, it, { size: 12.5, anchor: 'middle', fill: C.sub }); c.reg(it, x - 40, yy - 28, 80, 80); });
  }
  if (s.emoji) {
    const py = inputY + 60; c.rect(0, py, W, panel, '#fff'); c.rect(0, py, W, 40, C.gray);
    ['Emoji', 'GIF', 'Stickers'].forEach((t, i) => { const x = 70 + i * 110; c.text(x, py + 26, t, { size: 14, weight: i === (s.emojiTab ?? 0) ? 800 : 500, anchor: 'middle', fill: i === (s.emojiTab ?? 0) ? C.teal : C.sub }); c.reg(`${t} tab`, x - 50, py, 100, 40); });
    c.add(I.search(24, py + 62, C.sub)); c.text(42, py + 67, s.emojiTab === 2 ? 'Search stickers' : 'Search', { size: 13.5, fill: C.sub }); c.reg('Search emoji', 10, py + 46, W - 20, 32);
    if (s.emojiTab === 2) { c.rect(18, py + 92, 50, 50, C.gray, 10); c.text(43, py + 124, '+', { size: 26, anchor: 'middle', fill: C.sub, raw: true }); c.reg('Create sticker', 18, py + 92, 50, 50); for (let i = 0; i < 6; i++) { const x = 110 + (i % 3) * 82; const yy = py + 118 + Math.floor(i / 3) * 70; c.add(`<circle cx="${x}" cy="${yy}" r="28" fill="${['#FFD54F', '#AED581', '#81D4FA', '#F48FB1', '#CE93D8', '#FFB74D'][i]}"/><circle cx="${x - 9}" cy="${yy - 5}" r="3.5" fill="#3a2a10"/><circle cx="${x + 9}" cy="${yy - 5}" r="3.5" fill="#3a2a10"/><path d="M${x - 10} ${yy + 8} q10 10 20 0" stroke="#3a2a10" stroke-width="3" fill="none"/>`); c.reg(`Sticker ${i + 1}`, x - 32, yy - 32, 64, 64); } }
    else if (s.emojiTab === 1) { for (let i = 0; i < 6; i++) { const x = 18 + (i % 3) * 110; const yy = py + 92 + Math.floor(i / 3) * 66; c.rect(x, yy, 104, 60, ['#C9A97B', '#8FB1D6', '#9CC3A0'][i % 3], 6); c.text(x + 52, yy + 36, 'GIF', { size: 13, weight: 800, fill: '#fff', anchor: 'middle', raw: true }); c.reg(`GIF ${i + 1}`, x, yy, 104, 60); } }
    else { ['😀', '😂', '😍', '🙏', '👍', '❤️', '😢', '🎉', '🌹', '☕', '🎂', '👏'].forEach((e, i) => { const x = 32 + (i % 6) * 58; const yy = py + 118 + Math.floor(i / 6) * 56; c.text(x, yy, e, { size: 28, anchor: 'middle', raw: true }); c.reg(`Emoji ${i + 1}`, x - 26, yy - 30, 52, 44); }); }
  }
  if (s.menu) overflowMenu(c, s.menu);
  navBar(c);
};

/** Settings-style list. rows: { label, sub, toggle, value, section, radio, icon } */
V.list = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  topBar(c, { title: tr(s.title ?? 'Settings'), back: s.back !== false, closeX: s.closeX, right: s.right ?? [] });
  let y = 96;
  if (s.profile) { avatar(c, 16, y, s.profile, 60); c.text(90, y + 26, s.profile, { size: 18, weight: 600, raw: true }); c.text(90, y + 48, s.about ?? 'Hey there! I am using WhatsApp.', { size: 13.5, fill: C.sub }); c.add(I.qr(W - 34, y + 30, C.teal)); c.reg('QR code', W - 56, y + 8, 44, 44); c.reg('Profile', 0, y - 4, W - 60, 70); y += 84; c.add(`<line x1="0" y1="${y - 6}" x2="${W}" y2="${y - 6}" stroke="${C.line}"/>`); }
  if (s.lead) { for (const l of wrap(s.lead, 40)) { c.text(18, y + 10, l, { size: 13.5, fill: C.sub, raw: true }); y += 20; } y += 10; }
  for (const r of s.rows ?? []) {
    if (y > 580) break;
    if (r.section) { c.text(18, y + 24, r.section, { size: 13.5, fill: C.sub, weight: 600 }); y += 36; continue; }
    const h = r.sub ? 64 : 54;
    const tx = r.icon ? 64 : 18;
    if (r.icon) c.add(`<circle cx="32" cy="${y + h / 2}" r="11" fill="none" stroke="${C.sub}" stroke-width="2"/>`);
    c.text(tx, y + (r.sub ? 27 : 33), r.label, { size: 16, fill: r.danger ? C.red : C.dark });
    if (r.sub) c.text(tx, y + 48, fit(r.sub, 34), { size: 13, fill: C.sub, raw: true });
    if (r.toggle !== undefined) { const on = r.toggle; c.rect(W - 64, y + h / 2 - 12, 44, 24, on ? C.teal : '#B9C2C7', 12); c.add(`<circle cx="${on ? W - 32 : W - 52}" cy="${y + h / 2}" r="9" fill="#fff"/>`); c.reg(`${r.label} switch`, W - 74, y, 64, h); }
    else if (r.radio !== undefined) c.add(`<circle cx="${W - 34}" cy="${y + h / 2}" r="10" fill="none" stroke="${r.radio ? C.teal : '#8696A0'}" stroke-width="2"/>${r.radio ? `<circle cx="${W - 34}" cy="${y + h / 2}" r="5.5" fill="${C.teal}"/>` : ''}`);
    else if (r.value) c.text(W - 18, y + 33, r.value, { size: 13.5, fill: C.sub, anchor: 'end' });
    c.reg(r.label, 0, y, W, h); y += h;
  }
  if (s.button) { c.rect(18, 532, W - 36, 48, C.green, 24); c.text(W / 2, 562, s.button, { size: 16, weight: 700, anchor: 'middle', fill: '#0A332C' }); c.reg(s.button, 18, 532, W - 36, 48); }
  if (s.fabLabel) fab(c, s.fabLabel, s.fabIcon ?? 'newchat');
  navBar(c);
};

/** Bottom sheet over another screen */
V.sheet = (c, s) => {
  if (s.base) draw(c, s.base); else c.rect(0, 0, W, H, C.bg);
  dim(c); const items = s.items ?? [];
  const h = items.length * 54 + (s.title ? 56 : 18) + 20; const y0 = 600 - h;
  c.rect(0, y0, W, h + 20, '#fff', 20);
  if (s.title) c.text(20, y0 + 36, s.title, { size: 17, weight: 700 });
  items.forEach((it, i) => { const t = typeof it === 'string' ? it : it.label; const y = y0 + (s.title ? 56 : 18) + i * 54; c.text(24, y + 34, t, { size: 16, fill: it.danger ? C.red : C.dark }); c.reg(t, 0, y, W, 54); });
  navBar(c);
};

/** Centered dialog */
V.dialog = (c, s) => {
  if (s.base) draw(c, s.base); else c.rect(0, 0, W, H, C.bg);
  dim(c);
  const lines = wrap(s.text ?? '', 30); const radio = s.options ?? [];
  const h = 110 + lines.length * 21 + (s.title ? 30 : 0) + radio.length * 46; const y0 = (H - h) / 2;
  c.rect(26, y0, W - 52, h, '#fff', 24);
  let y = y0 + 40; if (s.title) { c.text(48, y, s.title, { size: 19, weight: 600 }); y += 30; }
  lines.forEach((l) => { c.text(48, y, l, { size: 14.5, fill: C.sub, raw: true }); y += 21; });
  radio.forEach((o, i) => { const on = i === (s.selected ?? 0); c.add(`<circle cx="58" cy="${y + 10}" r="10" fill="none" stroke="${on ? C.teal : '#8696A0'}" stroke-width="2"/>${on ? `<circle cx="58" cy="${y + 10}" r="5.5" fill="${C.teal}"/>` : ''}`); c.text(80, y + 16, o, { size: 16 }); c.reg(o, 30, y - 12, W - 60, 44); y += 46; });
  const bs = s.buttons ?? ['Cancel', 'OK'];
  let x = W - 48;
  [...bs].reverse().forEach((b) => { const t = tr(b); const w = t.length * 9 + 20; c.text(x, y0 + h - 26, t, { size: 15.5, weight: 700, fill: s.danger && b === bs[bs.length - 1] ? C.red : C.teal, anchor: 'end', raw: true }); c.reg(b, x - w + 8, y0 + h - 52, w + 4, 44); x -= w + 18; });
};

/** Contact / group info */
V.profile = (c, s) => {
  c.rect(0, 0, W, H, s.group ? C.gray : C.bg); statusBar(c);
  c.add(I.back(26, 62)); c.reg('Back', 4, 40, 44, 44); c.add(I.dots(W - 22, 62)); c.reg('More options', W - 42, 42, 40, 40);
  avatar(c, W / 2 - 60, 84, s.name ?? 'Maria', 120); c.reg('Profile photo', W / 2 - 60, 84, 120, 120);
  c.text(W / 2, 236, s.name ?? 'Maria', { size: 22, weight: 600, anchor: 'middle', raw: true }); c.reg('Name', W / 2 - 100, 214, 200, 30);
  c.text(W / 2, 262, s.group ? `${tr('Group')} · ${s.members ?? 4} ${tr('members')}` : (s.phone ?? '+1 555 0100'), { size: 15, fill: C.sub, anchor: 'middle', raw: true });
  const acts = s.actions ?? (s.group ? [['Audio', 'phone'], ['Video', 'video'], ['Add', 'people'], ['Search', 'search']] : [['Audio', 'phone'], ['Video', 'video'], ['Pay', 'send'], ['Search', 'search']]);
  acts.forEach(([l, ic], i) => { const x = 50 + i * 87; c.rect(x - 38, 280, 76, 66, '#fff', 12, `stroke="${C.line}"`); c.add(I[ic](x, 302, C.teal)); c.text(x, 334, l, { size: 13, anchor: 'middle' }); c.reg(l, x - 38, 280, 76, 66); });
  let y = 362;
  for (const r of s.rows ?? (s.group ? [{ label: 'Group permissions' }, { label: 'Notifications' }, { section: `${s.members ?? 4} ${tr('members')}` }, { label: 'Add members' }, { label: 'Invite via link' }] : [{ label: 'Notifications' }, { label: 'Media visibility' }, { label: 'Disappearing messages', sub: 'Off' }, { label: 'Block', danger: true }])) {
    if (y > 580) break;
    if (r.section) { c.text(18, y + 22, r.section, { size: 13.5, fill: C.sub, raw: true }); y += 32; continue; }
    c.rect(0, y, W, 50, '#fff'); c.text(18, y + 31, r.label, { size: 16, fill: r.danger ? C.red : C.dark }); if (r.sub) c.text(W - 18, y + 31, r.sub, { size: 13.5, fill: C.sub, anchor: 'end' }); c.reg(r.label, 0, y, W, 50); y += 52;
  }
  navBar(c);
};

/** Pick contacts / participants */
V.pick = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  topBar(c, { title: tr(s.title ?? 'Select contact'), sub: s.sub ?? '', right: [{ icon: 'search', label: 'Search' }] });
  let y = 96;
  for (const it of s.top ?? []) { c.add(`<circle cx="40" cy="${y + 24}" r="24" fill="${C.green}"/>`); c.add(I.people(40, y + 24, '#fff')); c.text(80, y + 30, it, { size: 16.5, weight: 600 }); c.reg(it, 0, y - 4, W, 56); y += 60; }
  if (s.top) { c.text(18, y + 16, 'Contacts on WhatsApp', { size: 13.5, fill: C.sub }); y += 30; }
  for (const it of s.items ?? []) { avatar(c, 16, y, it.name, 48); c.text(78, y + (it.about ? 22 : 30), it.name, { size: 16.5, weight: 600, raw: true }); if (it.about) c.text(78, y + 42, it.about, { size: 13, fill: C.sub, raw: true }); if (it.checked) c.add(`<circle cx="56" cy="${y + 42}" r="10" fill="${C.green}" stroke="#fff" stroke-width="2"/><path d="M51 ${y + 42} l4 4 l7 -7" stroke="#fff" stroke-width="2" fill="none"/>`); c.reg(it.name, 0, y - 4, W, 58); y += 62; }
  if (s.next) { fab(c, s.next, 'send', 520); }
  navBar(c);
};

/** Gallery picker */
V.gallery = (c, s) => {
  c.rect(0, 0, W, H, '#111'); statusBar(c, true);
  c.add(I.close(26, 62, '#fff')); c.reg('Close', 4, 40, 44, 44); c.text(56, 68, 'Recents', { size: 18, weight: 600, fill: '#fff' });
  const sel = s.selected ?? [];
  for (let i = 0; i < 15; i++) { const x = 2 + (i % 3) * 119; const y = 96 + Math.floor(i / 3) * 90; c.rect(x, y, 117, 88, ['#9CC3A0', '#C9A97B', '#8FB1D6', '#D59A9A', '#B7A6D6', '#E2C48F'][i % 6]); c.add(`<path d="M${x + 10} ${y + 78} l30 -36 l24 22 l16 -14 l30 28z" fill="#fff" opacity=".55"/>`); if (s.video && i % 4 === 1) c.text(x + 108, y + 80, '0:15', { size: 12, fill: '#fff', weight: 700, anchor: 'end', raw: true }); const k = sel.indexOf(i); c.add(`<circle cx="${x + 100}" cy="${y + 16}" r="11" fill="${k >= 0 ? C.green : 'rgba(0,0,0,.25)'}" stroke="#fff" stroke-width="2"/>`); if (k >= 0) c.text(x + 100, y + 21, String(k + 1), { size: 13, weight: 800, anchor: 'middle', fill: '#fff', raw: true }); c.reg(`Photo ${i + 1}`, x, y, 117, 88); }
  if (sel.length) { c.rect(0, 540, W, 60, '#1F2C34'); c.text(18, 576, `${sel.length} ${tr('selected')}`, { size: 15, fill: '#fff', raw: true }); c.add(`<circle cx="${W - 40}" cy="570" r="24" fill="${C.green}"/>`); c.add(I.send(W - 38, 570)); c.reg('Next', W - 66, 544, 52, 52); }
  navBar(c, true);
};

/** Media preview before sending (caption, HD) / viewer */
V.preview = (c, s) => {
  c.rect(0, 0, W, H, '#000'); statusBar(c, true);
  c.add(I.close(26, 62, '#fff')); c.reg('Close', 4, 40, 44, 44);
  if (s.viewer) { c.text(56, 62, s.from ?? 'Maria', { size: 16, fill: '#fff', weight: 600, raw: true }); c.text(56, 80, 'Today, 18:20', { size: 12, fill: '#ccc' }); c.add(I.dots(W - 22, 62, '#fff')); c.reg('More options', W - 42, 42, 40, 40); c.add(I.share(W - 64, 62)); c.reg('Share', W - 84, 42, 40, 40); c.add(I.star(W - 106, 62, '#fff')); c.reg('Star', W - 126, 42, 40, 40); }
  else { c.rect(W - 120, 44, 46, 34, 'rgba(255,255,255,.15)', 17); c.text(W - 97, 66, 'HD', { size: 14, weight: 800, fill: s.hd ? C.green : '#fff', anchor: 'middle', raw: true }); c.reg('HD', W - 122, 42, 50, 38); }
  const z = s.zoom ? 1.4 : 1; const w = 340 * z; const h = 280 * z;
  c.add(`<clipPath id="wapv"><rect x="0" y="96" width="${W}" height="410"/></clipPath><g clip-path="url(#wapv)"><rect x="${(W - w) / 2}" y="${300 - h / 2}" width="${w}" height="${h}" fill="#9CC3A0"/><path d="M${(W - w) / 2 + 30} ${300 + h / 2 - 20} l${80 * z} ${-100 * z} l${60 * z} ${60 * z} l${40 * z} ${-36 * z} l${70 * z} ${76 * z}z" fill="#fff" opacity=".6"/></g>`);
  if (s.video) c.add(`<circle cx="${W / 2}" cy="300" r="30" fill="rgba(255,255,255,.3)"/><path d="M${W / 2 - 9} 285 l24 15 l-24 15z" fill="#fff"/>`);
  c.reg('Photo', 0, 110, W, 380);
  if (s.hdSheet) { c.rect(0, 380, W, 220, '#1F2C34', 18); c.text(20, 418, 'Media quality', { size: 17, weight: 700, fill: '#fff' }); ['Standard quality', 'HD quality'].forEach((o, i) => { const y = 440 + i * 56; c.text(56, y + 30, o, { size: 16, fill: '#fff' }); c.add(`<circle cx="30" cy="${y + 25}" r="10" fill="none" stroke="${i === 1 && s.hd ? C.green : '#8696A0'}" stroke-width="2"/>${i === 1 && s.hd ? `<circle cx="30" cy="${y + 25}" r="5.5" fill="${C.green}"/>` : ''}`); c.reg(o, 0, y, W, 50); }); c.text(W - 24, 580, 'Done', { size: 15, weight: 700, fill: C.green, anchor: 'end' }); c.reg('Done', W - 90, 556, 76, 36); navBar(c, true); return; }
  if (!s.viewer) { c.rect(10, 540, W - 80, 46, '#1F2C34', 23); c.text(28, 569, s.caption || tr('Add a caption…'), { size: 15, fill: s.caption ? '#fff' : '#8696A0', raw: true }); c.reg('Caption', 10, 540, W - 80, 46); c.add(`<circle cx="${W - 36}" cy="563" r="25" fill="${C.green}"/>`); c.add(I.send(W - 34, 563)); c.reg('Send', W - 62, 538, 52, 52); }
  else { c.add(I.reply(W / 2, 560, '#fff')); c.reg('Reply', W / 2 - 22, 540, 44, 40); }
  if (s.menu) overflowMenu(c, s.menu);
  navBar(c, true);
};

/** Voice / video call screens: state incoming | calling | talking */
V.call = (c, s) => {
  const video = s.kind === 'video';
  c.rect(0, 0, W, H, video && s.state === 'talking' ? '#5D6B5A' : '#0B141A'); statusBar(c, true);
  if (s.state !== 'incoming') { c.text(W / 2, 64, 'End-to-end encrypted', { size: 12, fill: '#8696A0', anchor: 'middle' }); }
  if (video && s.state === 'talking') { c.rect(W - 116, 90, 96, 136, '#8FA3B5', 12); c.text(W - 68, 162, 'You', { size: 13, fill: '#fff', anchor: 'middle' }); }
  avatar(c, W / 2 - 50, 130, s.name ?? 'Maria', 100);
  c.text(W / 2, 270, s.name ?? 'Maria', { size: 24, weight: 600, fill: '#fff', anchor: 'middle', raw: true });
  c.text(W / 2, 298, { incoming: video ? 'WhatsApp video call' : 'WhatsApp voice call', calling: 'Ringing', talking: '00:12' }[s.state ?? 'calling'], { size: 15, fill: '#D1D7DB', anchor: 'middle' });
  if (s.state === 'incoming') {
    const b = (x, label, col, icon) => { c.add(`<circle cx="${x}" cy="480" r="32" fill="${col}"/>${icon}`); c.text(x, 536, label, { size: 13, fill: '#fff', anchor: 'middle' }); c.reg(label, x - 40, 440, 80, 104); };
    b(90, 'Decline', C.red, `<g transform="rotate(135 90 480)">${I.phone(90, 480, '#fff')}</g>`); b(270, 'Accept', C.green, video ? I.video(270, 480, '#fff') : I.phone(270, 480, '#fff'));
  } else {
    c.rect(14, 470, W - 28, 92, '#1F2C34', 30);
    const items = s.items ?? (video ? [['Flip camera', 'camera'], ['Camera off', 'video'], ['Mute', 'mic'], ['Share screen', 'share']] : [['Speaker', 'chat'], ['Video', 'video'], ['Mute', 'mic'], ['Add people', 'people']]);
    items.forEach(([l, ic], i) => { const x = 50 + i * 66; c.add(`<circle cx="${x}" cy="500" r="20" fill="rgba(255,255,255,${s.on === l ? '.9' : '.12'})"/>${I[ic](x, 500, s.on === l ? C.dark : '#fff')}`); c.text(x, 540, fit(l, 10), { size: 10.5, fill: '#fff', anchor: 'middle', raw: true }); c.reg(l, x - 30, 474, 60, 80); });
    c.add(`<circle cx="${W - 46}" cy="500" r="22" fill="${C.red}"/><g transform="rotate(135 ${W - 46} 500)">${I.phone(W - 46, 500, '#fff')}</g>`); c.reg('End call', W - 74, 474, 56, 60);
  }
  navBar(c, true);
};

/** Forms: verification, profile name, etc. */
V.form = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  if (s.title || s.back) topBar(c, { title: tr(s.title ?? ''), back: s.back !== false, closeX: s.closeX, right: s.menu ? [{ icon: 'dots', label: 'More options' }] : [] });
  let y = s.title || s.back ? 104 : 80;
  if (s.heading) { for (const l of wrap(s.heading, 26)) { c.text(W / 2, y + 18, l, { size: 21, weight: 600, anchor: 'middle', raw: true }); y += 30; } y += 6; }
  if (s.lead) { for (const l of wrap(s.lead, 40)) { c.text(W / 2, y + 10, l, { size: 13.5, fill: C.sub, anchor: 'middle', raw: true }); y += 20; } y += 16; }
  if (s.photo) { c.add(`<circle cx="${W / 2}" cy="${y + 50}" r="50" fill="${C.gray}"/>`); c.add(I.camera(W / 2, y + 50, C.sub)); c.reg('Add photo', W / 2 - 50, y, 100, 100); y += 120; }
  for (const f of s.fields ?? []) {
    if (f.label) { c.text(36, y + 12, f.label, { size: 13, fill: C.teal, weight: 600 }); y += 18; }
    if (f.country) { c.text(36, y + 28, f.country, { size: 16, raw: true }); c.add(`<polyline points="${W - 48},${y + 20} ${W - 42},${y + 26} ${W - 36},${y + 20}" stroke="${C.teal}" stroke-width="2" fill="none"/>`); c.add(`<line x1="36" y1="${y + 40}" x2="${W - 36}" y2="${y + 40}" stroke="${C.teal}" stroke-width="2"/>`); c.reg('Choose a country', 36, y, W - 72, 44); y += 56; continue; }
    if (f.code) { c.text(56, y + 28, f.code, { size: 16, anchor: 'middle', raw: true }); c.add(`<line x1="36" y1="${y + 40}" x2="80" y2="${y + 40}" stroke="${C.teal}" stroke-width="2"/>`); c.text(96, y + 28, f.value || tr(f.placeholder ?? 'Phone number'), { size: 16, fill: f.value ? C.dark : C.sub, raw: true }); c.add(`<line x1="92" y1="${y + 40}" x2="${W - 36}" y2="${y + 40}" stroke="${C.teal}" stroke-width="2"/>`); c.reg(f.name ?? 'Phone number', 92, y, W - 128, 44); y += 60; continue; }
    if (f.otp) { const n = 6; for (let i = 0; i < n; i++) { const x = W / 2 - 3 * 34 + i * 34 + (i > 2 ? 10 : 0); c.text(x + 12, y + 28, f.value?.[i] ?? '–', { size: 20, anchor: 'middle', fill: f.value ? C.dark : C.sub, raw: true }); } c.reg('Code box', W / 2 - 110, y, 220, 44); y += 56; continue; }
    c.text(36, y + 28, f.masked ? '●'.repeat(6) : (f.value || tr(f.placeholder ?? '')), { size: 16, fill: f.value ? C.dark : C.sub, raw: true }); c.add(`<line x1="36" y1="${y + 40}" x2="${W - 36}" y2="${y + 40}" stroke="${C.teal}" stroke-width="2"/>`); c.reg(f.name ?? f.label ?? 'Text box', 36, y, W - 72, 44); y += 60;
  }
  for (const o of s.links ?? []) { c.text(W / 2, y + 16, o, { size: 14.5, weight: 700, fill: C.teal, anchor: 'middle' }); c.reg(o, 60, y - 4, W - 120, 30); y += 34; }
  for (const o of s.checks ?? []) { c.add(`<rect x="36" y="${y + 2}" width="18" height="18" rx="3" fill="${o.on ? C.teal : 'none'}" stroke="${o.on ? C.teal : '#8696A0'}" stroke-width="2"/>${o.on ? `<path d="M40 ${y + 11} l4 4 l7 -7" stroke="#fff" stroke-width="2" fill="none"/>` : ''}`); c.text(64, y + 17, o.label, { size: 14.5 }); c.reg(o.label, 30, y - 6, W - 60, 34); y += 38; }
  if (s.note) for (const l of wrap(s.note, 38)) { c.text(W / 2, y + 10, l, { size: 12.5, fill: C.red, anchor: 'middle', raw: true }); y += 18; }
  const bs = s.buttons ?? (s.button ? [s.button] : []);
  bs.forEach((b, i) => { const t = tr(b); const bw = Math.max(110, t.length * 9 + 40); const by = 540 - (bs.length - 1 - i) * 56; c.rect(W / 2 - bw / 2, by, bw, 42, i === bs.length - 1 ? C.green : '#fff', 21, i === bs.length - 1 ? '' : `stroke="${C.line}"`); c.text(W / 2, by + 27, t, { size: 15, weight: 700, anchor: 'middle', fill: i === bs.length - 1 ? '#0A332C' : C.teal, raw: true }); c.reg(b, W / 2 - bw / 2, by, bw, 42); });
  navBar(c);
};

/** Search with results */
V.search = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  c.add(I.back(26, 62)); c.reg('Back', 4, 40, 44, 44);
  c.text(56, 68, s.query || tr(s.placeholder ?? 'Search…'), { size: 17, fill: s.query ? C.dark : C.sub, raw: true }); c.reg('Search box', 50, 42, W - 70, 44);
  c.add(`<line x1="0" y1="92" x2="${W}" y2="92" stroke="${C.line}"/>`);
  let y = 104;
  for (const r of s.results ?? []) { const t = typeof r === 'string' ? r : r.label; avatar(c, 16, y, t, 46); c.text(76, y + (r.sub ? 21 : 29), fit(t, 22), { size: 16, weight: 600, raw: true }); if (r.sub) c.text(76, y + 41, fit(r.sub, 30), { size: 13, fill: C.sub, raw: true }); if (r.mark) { c.rect(W - 92, y + 10, 74, 30, '#D8FDD2', 15); c.text(W - 55, y + 30, r.mark, { size: 13, weight: 700, fill: '#0A332C', anchor: 'middle' }); c.reg(r.mark, W - 92, y + 10, 74, 30); } c.reg(t, 0, y - 4, r.mark ? W - 100 : W, 56); y += 60; }
  if (s.empty) c.text(W / 2, 300, s.empty, { size: 14, fill: C.sub, anchor: 'middle' });
  navBar(c);
};

/** QR code (pattern is decorative, not a real code) */
V.qr = (c, s) => {
  c.rect(0, 0, W, H, s.scan ? '#111' : C.teal); statusBar(c, true);
  c.add(I.back(26, 62, '#fff')); c.reg('Back', 4, 40, 44, 44); c.text(56, 68, 'QR code', { size: 19, weight: 600, fill: '#fff' });
  ['My code', 'Scan code'].forEach((t, i) => { const x = 90 + i * 180; c.text(x, 116, t, { size: 14.5, weight: 700, fill: '#fff', anchor: 'middle' }); if ((i === 1) === Boolean(s.scan)) c.rect(x - 60, 126, 120, 3, '#fff'); c.reg(t, x - 80, 94, 160, 40); });
  if (s.scan) { c.add('<g stroke="#fff" stroke-width="4" fill="none"><path d="M70 200 v-40 h40 M250 160 h40 v40 M290 360 v40 h-40 M110 400 h-40 v-40"/></g>'); c.text(W / 2, 450, 'Scan a WhatsApp QR code', { size: 14, fill: '#fff', anchor: 'middle' }); c.reg('Scan area', 70, 160, 220, 240); }
  else {
    c.rect(50, 150, 260, 320, '#fff', 16); avatar(c, W / 2 - 28, 126, s.name ?? 'Me', 56);
    c.text(W / 2, 214, s.name ?? 'Anna', { size: 17, weight: 600, anchor: 'middle', raw: true }); c.text(W / 2, 234, 'WhatsApp contact', { size: 12.5, fill: C.sub, anchor: 'middle' });
    let seed = 11; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 17; i++) for (let j = 0; j < 17; j++) if (rnd() > 0.5 && !((i < 5 && j < 5) || (i > 11 && j < 5) || (i < 5 && j > 11))) c.rect(86 + i * 11, 252 + j * 11, 11, 11, C.teal);
    for (const [x, y] of [[86, 252], [218, 252], [86, 384]]) c.add(`<rect x="${x}" y="${y}" width="55" height="55" fill="none" stroke="${C.teal}" stroke-width="8"/><rect x="${x + 17}" y="${y + 17}" width="21" height="21" fill="${C.teal}"/>`);
    c.reg('My QR code', 80, 246, 200, 200);
    c.add(I.share(130, 520)); c.reg('Share', 108, 500, 44, 44); c.text(W / 2 + 40, 526, 'Share code', { size: 14, fill: '#fff', anchor: 'middle' });
  }
  navBar(c, true);
};

/** Explanation card (safety / concept) */
V.info = (c, s) => {
  c.rect(0, 0, W, H, '#F0FAF4'); statusBar(c);
  c.rect(18, 70, W - 36, 470, '#fff', 18, `stroke="${s.warn ? '#F3B0B0' : '#BFE8CF'}" stroke-width="2"`);
  c.add(s.warn ? `<circle cx="${W / 2}" cy="130" r="30" fill="#FDECEA"/><text x="${W / 2}" y="142" font-size="34" font-weight="900" fill="${C.red}" text-anchor="middle">!</text>` : `<circle cx="${W / 2}" cy="130" r="30" fill="#D8FDD2"/><text x="${W / 2}" y="142" font-size="30" font-weight="900" fill="${C.teal}" text-anchor="middle">i</text>`);
  let y = 196;
  for (const l of wrap(s.title ?? '', 24)) { c.text(W / 2, y, l, { size: 19, weight: 700, anchor: 'middle', raw: true }); y += 28; }
  y += 8;
  for (const p of s.lines ?? []) { const ls = wrap(p, 32); c.add(`<circle cx="40" cy="${y - 5}" r="3.5" fill="${s.warn ? C.red : C.teal}"/>`); for (const l of ls) { c.text(52, y, l, { size: 14.5, raw: true }); y += 22; } y += 8; }
  c.reg('Info', 18, 70, W - 36, 470);
  navBar(c);
};

/** Phone home screen (Galaxy style) with app icons */
V.home = (c, s) => {
  c.add(`<defs><linearGradient id="wahome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A5A7A"/><stop offset="1" stop-color="#1D2B3A"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#wahome)"/>`); statusBar(c, true);
  const apps = s.apps ?? ['Phone', 'Messages', 'Camera', 'Gallery', 'Play Store', 'Settings', 'Chrome', 'WhatsApp'];
  const col = { Phone: '#1E8E3E', Messages: '#1A5FD0', Camera: '#C2185B', Gallery: '#D81B60', 'Play Store': '#0F9D58', Settings: '#5F6368', Chrome: '#F4B400', WhatsApp: '#25D366', Contacts: '#E8710A' };
  apps.forEach((a, i) => { const x = 46 + (i % 4) * 89; const y = 300 + Math.floor(i / 4) * 100; c.rect(x - 28, y - 28, 56, 56, col[a] ?? '#607D8B', 16);
    const g = a === 'WhatsApp' ? `<path d="M${x - 12} ${y + 12} l3 -9 a13 13 0 1 1 6 6z" fill="none" stroke="#fff" stroke-width="2.6"/>${I.phone(x + 1, y - 1, '#fff')}` : a === 'Play Store' ? `<path d="M${x - 10} ${y - 13} l24 13 l-24 13z" fill="#fff"/>` : a === 'Phone' ? I.phone(x, y, '#fff') : a === 'Camera' ? I.camera(x, y, '#fff') : a === 'Settings' ? `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="5 3"/>` : `<circle cx="${x}" cy="${y}" r="9" fill="#fff" opacity=".9"/>`;
    c.add(g); c.text(x, y + 46, a, { size: 12.5, fill: '#fff', anchor: 'middle' }); c.reg(a, x - 40, y - 34, 80, 96); });
  navBar(c, true);
};

/** Google Play app page / search result. button: Install | Open | Update | Uninstall */
V.store = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  c.add(I.back(26, 62)); c.reg('Back', 4, 40, 44, 44);
  c.rect(52, 44, W - 70, 40, C.gray, 20); c.text(70, 70, s.query ?? 'WhatsApp', { size: 15, fill: s.query === '' ? C.sub : C.dark, raw: true }); c.reg('Search bar', 52, 44, W - 70, 40);
  c.rect(18, 108, 72, 72, C.green, 18); c.add(`<path d="M${42} ${162} l4 -12 a18 18 0 1 1 8 8z" fill="none" stroke="#fff" stroke-width="3"/>${I.phone(55, 142, '#fff')}`);
  c.text(104, 132, 'WhatsApp Messenger', { size: 18, weight: 700, raw: true }); c.text(104, 154, 'WhatsApp LLC', { size: 14, fill: C.teal, weight: 600, raw: true }); c.reg('Developer name', 104, 140, 160, 22);
  c.text(104, 174, s.installing ? tr('Installing…') : '4.3★ · 10B+ downloads', { size: 12.5, fill: C.sub, raw: !s.installing });
  const btn = s.button ?? 'Install';
  if (btn === 'Open' && s.uninstall !== false) { c.rect(18, 200, (W - 48) / 2, 44, '#fff', 22, `stroke="${C.line}"`); c.text(18 + (W - 48) / 4, 228, 'Uninstall', { size: 15, weight: 700, fill: C.teal, anchor: 'middle' }); c.reg('Uninstall', 18, 200, (W - 48) / 2, 44); c.rect(30 + (W - 48) / 2, 200, (W - 48) / 2, 44, '#0B57D0', 22); c.text(30 + (W - 48) * 0.75, 228, 'Open', { size: 15, weight: 700, fill: '#fff', anchor: 'middle' }); c.reg('Open', 30 + (W - 48) / 2, 200, (W - 48) / 2, 44); }
  else { c.rect(18, 200, W - 36, 44, s.installing ? C.gray : '#0B57D0', 22); c.text(W / 2, 228, s.installing ? 'Cancel' : btn, { size: 15, weight: 700, fill: s.installing ? C.teal : '#fff', anchor: 'middle' }); c.reg(btn, 18, 200, W - 36, 44); }
  if (s.installing) c.rect(18, 252, (W - 36) * 0.45, 4, '#0B57D0', 2);
  for (let i = 0; i < 3; i++) c.rect(18 + i * 112, 278, 104, 200, C.gray, 10);
  c.text(18, 512, 'About this app', { size: 16, weight: 700 }); c.text(18, 534, 'Simple. Reliable. Private.', { size: 13.5, fill: C.sub });
  navBar(c);
};

/** Status: mode 'text' (write a text status) | 'view' (watch a status) */
V.status = (c, s) => {
  const bg = s.mode === 'text' ? (s.color ?? '#5E3FA8') : '#2F3A43';
  c.rect(0, 0, W, H, bg); statusBar(c, true);
  if (s.mode === 'view') {
    for (let i = 0; i < (s.count ?? 2); i++) c.rect(10 + i * ((W - 20) / (s.count ?? 2)), 38, (W - 20) / (s.count ?? 2) - 4, 3, i === 0 ? '#fff' : 'rgba(255,255,255,.4)', 2);
    c.add(I.back(22, 66, '#fff')); c.reg('Back', 2, 46, 40, 40); avatar(c, 44, 48, s.name ?? 'Maria', 36); c.text(88, 64, s.name ?? 'Maria', { size: 15, weight: 700, fill: '#fff', raw: true }); c.text(88, 82, s.time ?? 'Today, 09:12', { size: 12, fill: '#ddd' });
    c.add(I.dots(W - 22, 66, '#fff')); c.reg('More options', W - 42, 46, 40, 40);
    if (s.photo) { c.rect(0, 120, W, 360, '#9CC3A0'); c.add(`<path d="M30 460 l90 -110 l60 60 l40 -36 l80 86z" fill="#fff" opacity=".55"/>`); }
    else for (const [i, l] of wrap(s.text ?? 'Good morning!', 18).entries()) c.text(W / 2, 300 + i * 34, l, { size: 26, weight: 700, fill: '#fff', anchor: 'middle', raw: true });
    if (s.mine) { c.add(`<path d="M${W / 2 - 10} 540 l10 -8 l10 8" stroke="#fff" stroke-width="2" fill="none"/>`); c.text(W / 2, 562, s.views ?? '2 views', { size: 13, fill: '#fff', anchor: 'middle' }); c.reg('Views', W / 2 - 50, 528, 100, 44); }
    else { c.rect(14, 540, W - 28, 44, 'rgba(255,255,255,.15)', 22); c.text(36, 568, 'Reply…', { size: 15, fill: '#fff' }); c.reg('Reply', 14, 540, W - 28, 44); }
  } else {
    c.add(I.close(26, 62, '#fff')); c.reg('Close', 4, 40, 44, 44);
    c.add(I.smile(W - 112, 62, '#fff')); c.text(W - 70, 68, 'T', { size: 20, weight: 800, fill: '#fff', anchor: 'middle', raw: true }); c.reg('Font', W - 88, 44, 36, 40);
    c.add(`<circle cx="${W - 28}" cy="62" r="11" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="${W - 28}" cy="62" r="5" fill="#fff"/>`); c.reg('Colour', W - 48, 42, 40, 40);
    const lines = s.text ? wrap(s.text, 16) : [tr('Type a status')];
    lines.forEach((l, i) => c.text(W / 2, 300 + i * 38, l, { size: 30, weight: 600, fill: s.text ? '#fff' : 'rgba(255,255,255,.6)', anchor: 'middle', raw: true }));
    c.reg('Status text', 20, 250, W - 40, 120);
    c.rect(14, 544, 140, 36, 'rgba(0,0,0,.25)', 18); c.text(84, 567, s.audience ?? 'Status (Contacts)', { size: 12.5, fill: '#fff', anchor: 'middle' }); c.reg('Status audience', 14, 544, 140, 36);
    if (s.text) { c.add(`<circle cx="${W - 38}" cy="562" r="25" fill="${C.green}"/>`); c.add(I.send(W - 36, 562)); c.reg('Send', W - 64, 536, 52, 52); }
  }
  navBar(c, true);
};

/** Location picker: map + options */
V.map = (c, s) => {
  c.rect(0, 0, W, H, C.bg); statusBar(c);
  topBar(c, { title: tr(s.title ?? 'Send location'), right: [{ icon: 'search', label: 'Search' }] });
  c.rect(0, 90, W, 250, '#DDE8D6');
  for (let i = 0; i < 6; i++) c.add(`<line x1="0" y1="${110 + i * 40}" x2="${W}" y2="${100 + i * 46}" stroke="#fff" stroke-width="6"/>`);
  c.add(`<line x1="120" y1="90" x2="170" y2="340" stroke="#fff" stroke-width="8"/><circle cx="${W / 2}" cy="215" r="10" fill="#1A73E8" stroke="#fff" stroke-width="3"/>`);
  let y = 352;
  const rows = s.rows ?? [['Share live location', 'live'], ['Send your current location', 'pin']];
  for (const [label, ic] of rows) { c.add(`<circle cx="38" cy="${y + 26}" r="20" fill="${ic === 'live' ? C.green : C.teal}"/>`); c.add(ic === 'live' ? `<circle cx="38" cy="${y + 26}" r="6" fill="#fff"/><circle cx="38" cy="${y + 26}" r="12" fill="none" stroke="#fff" stroke-width="2"/>` : `<path d="M38 ${y + 36} l-6 -9 a7 7 0 1 1 12 0z" fill="#fff"/>`); c.text(72, y + 26, label, { size: 16, weight: 600 }); if (ic === 'pin') c.text(72, y + 44, 'Accurate to 10 metres', { size: 12.5, fill: C.sub }); c.reg(label, 0, y, W, 56); y += 62; }
  if (s.duration) { dim(c); c.rect(26, 200, W - 52, 230, '#fff', 24); c.text(48, 240, 'Share live location', { size: 18, weight: 600 }); ['15 minutes', '1 hour', '8 hours'].forEach((o, i) => { const yy = 262 + i * 46; const on = i === (s.selected ?? 0); c.add(`<circle cx="58" cy="${yy + 10}" r="10" fill="none" stroke="${on ? C.teal : '#8696A0'}" stroke-width="2"/>${on ? `<circle cx="58" cy="${yy + 10}" r="5.5" fill="${C.teal}"/>` : ''}`); c.text(80, yy + 16, o, { size: 16 }); c.reg(o, 30, yy - 12, W - 60, 44); }); c.text(W - 48, 410, 'Send', { size: 15.5, weight: 700, fill: C.teal, anchor: 'end' }); c.reg('Send', W - 110, 388, 70, 40); }
  navBar(c);
};

function draw(c, spec) { (V[spec.v] ?? V.info)(c, spec); }

export function renderWhatsApp(spec = { v: 'info' }, target, action) {
  const c = canvas();
  draw(c, spec);
  c.reg('Screen', 0, 40, W, 560);
  const out = c.out();
  let { body, targets } = out;
  if (RTL) {
    // Mirror the layout like the real app in Arabic; red ring and labels are drawn on the mirrored positions
    body = `<g transform="matrix(-1 0 0 1 ${W} 0)">${body}</g>`;
    targets = Object.fromEntries(Object.entries(targets).map(([k, r]) => [k, { ...r, x: W - r.x - r.w }]));
  }
  const t = target ? targets[target] : null;
  let mark = '';
  if (t) {
    const r = Math.min(t.w, t.h) / 2;
    mark += `<rect class="target-ring" x="${t.x + 2}" y="${t.y + 2}" width="${t.w - 4}" height="${t.h - 4}" rx="${Math.min(r, 24)}" fill="none" stroke="#D7263D" stroke-width="5"/>`;
    const above = t.y > 150 || t.y + t.h > 520;
    const by = above ? t.y - 44 : t.y + t.h + 8;
    const label = tr(action === 'hold' ? 'Hold' : 'Tap');
    const lw = Math.max(68, label.length * 10 + 24);
    const bx = Math.min(Math.max(t.x + t.w / 2 - lw / 2, 6), W - lw - 6);
    mark += `<g class="target-tag"><rect x="${bx}" y="${by}" width="${lw}" height="34" rx="17" fill="#D7263D"/><text x="${bx + lw / 2}" y="${by + 23}" font-size="16" font-weight="800" fill="#fff" text-anchor="middle">${esc(label)}</text><path d="M${bx + lw / 2 - 8} ${above ? by + 34 : by} l8 ${above ? 9 : -9} l8 ${above ? -9 : 9}z" fill="#D7263D"/></g>`;
  }
  const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" font-family="Roboto, Pretendard Variable, Noto Sans, sans-serif">${body}${mark}</svg>`;
  return { svg, width: W, height: H, targets, target: t };
}
export const WA_VIEWS = Object.keys(V);
