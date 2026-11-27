// DigiStep365 카카오톡(안드로이드) 교육 화면 — 코드로 직접 그리는 재현 화면(SVG)
// - 실제 갤럭시 카카오톡 화면의 구성(상단 제목·아이콘, 아래 5개 탭, 채팅방 말풍선·입력창·＋ 메뉴, 설정 목록)을 기준으로 그린다.
// - 가상의 이름·대화·번호만 쓴다. 카카오 로고와 캐릭터는 그리지 않는다(이모티콘은 DigiStep365가 그린 단순한 얼굴).
// - 카카오톡 업데이트로 메뉴가 바뀔 수 있으므로 모든 화면은 관리자 화면에서 실제 앱과 대조·검수한 뒤 공개한다.
// renderKakao(spec, target, action) → { svg, width, height, targets, target }  (갤럭시 renderScreen과 같은 모양)
const W = 360;
const H = 640;
const K = {
  yellow: '#FEE500', ink: '#191919', sub: '#7A7A7A', line: '#EDEDED', bg: '#FFFFFF', gray: '#F5F5F5',
  chatBg: '#BACEE0', badge: '#FF5A3C', blue: '#3D7BF7', red: '#E5484D', green: '#2DB400', dim: 'rgba(0,0,0,.5)',
};
const AV = ['#F6B26B', '#93C47D', '#76A5AF', '#8E7CC3', '#E06666', '#6FA8DC', '#C27BA0', '#FFD966'];

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function canvas() {
  const parts = []; const targets = {};
  return {
    add(s) { parts.push(s); },
    reg(n, x, y, w, h) { if (n && !targets[n]) targets[n] = { x, y, w, h }; },
    regLast(n, x, y, w, h) { if (n) targets[n] = { x, y, w, h }; },
    rect(x, y, w, h, fill, r = 0, extra = '') { parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`); },
    text(x, y, s, { size = 15, fill = K.ink, weight = 500, anchor = 'start' } = {}) { parts.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`); },
    out() { return { body: parts.join(''), targets }; },
  };
}
const fit = (s, n) => (String(s).length > n ? `${String(s).slice(0, n - 1)}…` : String(s));
function wrap(s, max) {
  const out = []; let line = '';
  for (const w of String(s).split(' ')) { if ((`${line} ${w}`).trim().length > max && line) { out.push(line); line = w; } else line = `${line} ${w}`.trim(); }
  if (line) out.push(line);
  return out;
}

/* ---------- 작은 그림(아이콘) ---------- */
const ICON = {
  search: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><circle cx="${x}" cy="${y}" r="7"/><line x1="${x + 5}" y1="${y + 5}" x2="${x + 10}" y2="${y + 10}"/></g>`,
  addFriend: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><circle cx="${x - 2}" cy="${y - 4}" r="5"/><path d="M${x - 11} ${y + 9} q9 -11 18 0"/><line x1="${x + 9}" y1="${y - 6}" x2="${x + 9}" y2="${y + 2}"/><line x1="${x + 5}" y1="${y - 2}" x2="${x + 13}" y2="${y - 2}"/></g>`,
  gear: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none"><circle cx="${x}" cy="${y}" r="4"/><circle cx="${x}" cy="${y}" r="9" stroke-dasharray="4 3"/></g>`,
  newChat: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M${x - 10} ${y + 8} v-14 a3 3 0 0 1 3 -3 h12"/><line x1="${x + 6}" y1="${y - 10}" x2="${x + 6}" y2="${y - 2}"/><line x1="${x + 2}" y1="${y - 6}" x2="${x + 10}" y2="${y - 6}"/><path d="M${x - 10} ${y + 8} l5 -4 h12 a3 3 0 0 0 3 -3 v-3"/></g>`,
  back: (x, y, f = K.ink) => `<polyline points="${x + 6},${y - 9} ${x - 3},${y} ${x + 6},${y + 9}" stroke="${f}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  menu: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" stroke-linecap="round"><line x1="${x - 8}" y1="${y - 6}" x2="${x + 8}" y2="${y - 6}"/><line x1="${x - 8}" y1="${y}" x2="${x + 8}" y2="${y}"/><line x1="${x - 8}" y1="${y + 6}" x2="${x + 8}" y2="${y + 6}"/></g>`,
  close: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.4" stroke-linecap="round"><line x1="${x - 7}" y1="${y - 7}" x2="${x + 7}" y2="${y + 7}"/><line x1="${x + 7}" y1="${y - 7}" x2="${x - 7}" y2="${y + 7}"/></g>`,
  plus: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" stroke-linecap="round"><line x1="${x - 8}" y1="${y}" x2="${x + 8}" y2="${y}"/><line x1="${x}" y1="${y - 8}" x2="${x}" y2="${y + 8}"/></g>`,
  smile: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2" fill="none"><circle cx="${x}" cy="${y}" r="9"/><path d="M${x - 4} ${y + 2} q4 4 8 0"/></g><circle cx="${x - 3}" cy="${y - 3}" r="1.3" fill="${f}"/><circle cx="${x + 3}" cy="${y - 3}" r="1.3" fill="${f}"/>`,
  phone: (x, y, f = K.ink) => `<path d="M${x - 7} ${y - 8} l4 -1 l3 6 l-3 2 q2 5 6 7 l2 -3 l6 3 l-1 4 q-12 2 -17 -18z" fill="${f}"/>`,
  video: (x, y, f = K.ink) => `<g fill="${f}"><rect x="${x - 10}" y="${y - 6}" width="14" height="12" rx="2"/><path d="M${x + 5} ${y - 2} l6 -4 v12 l-6 -4z"/></g>`,
  mic: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><rect x="${x - 4}" y="${y - 10}" width="8" height="13" rx="4"/><path d="M${x - 8} ${y} a8 8 0 0 0 16 0"/><line x1="${x}" y1="${y + 8}" x2="${x}" y2="${y + 11}"/></g>`,
  send: (x, y, f = K.ink) => `<path d="M${x - 9} ${y - 8} l19 8 l-19 8 l3 -8z" fill="${f}"/>`,
  down: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><line x1="${x}" y1="${y - 9}" x2="${x}" y2="${y + 4}"/><polyline points="${x - 6},${y - 2} ${x},${y + 4} ${x + 6},${y - 2}"/><line x1="${x - 9}" y1="${y + 9}" x2="${x + 9}" y2="${y + 9}"/></g>`,
  share: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M${x - 8} ${y} v8 h16 v-8"/><line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 3}"/><polyline points="${x - 5},${y - 5} ${x},${y - 10} ${x + 5},${y - 5}"/></g>`,
  trash: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none"><path d="M${x - 7} ${y - 5} h14 l-1.5 14 h-11z"/><line x1="${x - 9}" y1="${y - 6}" x2="${x + 9}" y2="${y - 6}"/><line x1="${x - 3}" y1="${y - 9}" x2="${x + 3}" y2="${y - 9}"/></g>`,
  camera: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2.2" fill="none"><rect x="${x - 10}" y="${y - 6}" width="20" height="14" rx="3"/><circle cx="${x}" cy="${y + 1}" r="4"/></g>`,
  pin: (x, y, f = K.ink) => `<path d="M${x} ${y + 9} l-6 -9 a7 7 0 1 1 12 0z" fill="none" stroke="${f}" stroke-width="2"/>`,
  bell: (x, y, f = K.ink) => `<g stroke="${f}" stroke-width="2" fill="none"><path d="M${x - 7} ${y + 5} v-6 a7 7 0 0 1 14 0 v6 l2 2 h-18z"/><line x1="${x - 2}" y1="${y + 10}" x2="${x + 2}" y2="${y + 10}"/></g>`,
};
/** 더보기·＋ 메뉴 칸 그림: 둥근 칸 + 글자 첫 소리 대신 단순 기호 */
const GLYPH = { 앨범: 'photo', 카메라: 'camera', 선물하기: 'gift', 통화하기: 'phone', 송금: 'won', 파일: 'file', 연락처: 'person', 지도: 'pin', 음성메시지: 'mic', 일정: 'cal', 투표: 'vote', 캡처: 'crop', 이모티콘: 'smile', 지갑: 'wallet', 쇼핑하기: 'bag', 메일: 'mail', 톡서랍: 'box', 주문하기: 'bag', 예약하기: 'cal' };
function glyph(c, x, y, name, color) {
  const g = GLYPH[name] ?? 'dot';
  const f = '#fff';
  const s = {
    photo: `<rect x="${x - 9}" y="${y - 7}" width="18" height="14" rx="2" fill="none" stroke="${f}" stroke-width="2"/><path d="M${x - 7} ${y + 5} l5 -6 l4 4 l3 -3 l3 5z" fill="${f}"/>`,
    camera: ICON.camera(x, y, f), gift: `<rect x="${x - 8}" y="${y - 3}" width="16" height="11" fill="none" stroke="${f}" stroke-width="2"/><line x1="${x}" y1="${y - 7}" x2="${x}" y2="${y + 8}" stroke="${f}" stroke-width="2"/><line x1="${x - 9}" y1="${y - 4}" x2="${x + 9}" y2="${y - 4}" stroke="${f}" stroke-width="2"/>`,
    phone: ICON.phone(x, y, f), won: `<text x="${x}" y="${y + 6}" font-size="17" font-weight="800" fill="${f}" text-anchor="middle">₩</text>`,
    file: `<path d="M${x - 6} ${y - 9} h8 l5 5 v13 h-13z" fill="none" stroke="${f}" stroke-width="2"/>`,
    person: `<circle cx="${x}" cy="${y - 4}" r="4" fill="${f}"/><path d="M${x - 8} ${y + 9} q8 -12 16 0z" fill="${f}"/>`,
    pin: ICON.pin(x, y - 2, f), mic: ICON.mic(x, y, f), cal: `<rect x="${x - 8}" y="${y - 7}" width="16" height="15" rx="2" fill="none" stroke="${f}" stroke-width="2"/><line x1="${x - 8}" y1="${y - 2}" x2="${x + 8}" y2="${y - 2}" stroke="${f}" stroke-width="2"/>`,
    vote: `<path d="M${x - 7} ${y} l5 5 l9 -11" fill="none" stroke="${f}" stroke-width="2.4"/>`, crop: `<path d="M${x - 5} ${y - 9} v14 h14 M${x - 9} ${y - 5} h14 v14" fill="none" stroke="${f}" stroke-width="2"/>`,
    smile: ICON.smile(x, y, f), wallet: `<rect x="${x - 9}" y="${y - 6}" width="18" height="13" rx="2" fill="none" stroke="${f}" stroke-width="2"/><circle cx="${x + 4}" cy="${y + 1}" r="1.8" fill="${f}"/>`,
    bag: `<path d="M${x - 8} ${y - 3} h16 l-1 12 h-14z" fill="none" stroke="${f}" stroke-width="2"/><path d="M${x - 4} ${y - 3} v-2 a4 4 0 0 1 8 0 v2" fill="none" stroke="${f}" stroke-width="2"/>`,
    mail: `<rect x="${x - 9}" y="${y - 6}" width="18" height="13" rx="1" fill="none" stroke="${f}" stroke-width="2"/><path d="M${x - 9} ${y - 6} l9 7 l9 -7" fill="none" stroke="${f}" stroke-width="2"/>`,
    box: `<rect x="${x - 9}" y="${y - 6}" width="18" height="13" rx="1" fill="none" stroke="${f}" stroke-width="2"/><line x1="${x - 9}" y1="${y - 1}" x2="${x + 9}" y2="${y - 1}" stroke="${f}" stroke-width="2"/>`,
    dot: `<circle cx="${x}" cy="${y}" r="5" fill="${f}"/>`,
  }[g];
  c.add(`<circle cx="${x}" cy="${y}" r="22" fill="${color}"/>${s}`);
}
const GLYPH_COLOR = ['#5AB4E6', '#F1A33C', '#E86A6A', '#4CBB7A', '#8C7AE6', '#5C9CE6', '#E58AB6', '#3CB9B2', '#F07B3F', '#6C8EBF', '#A3B83A', '#9B6BD6'];

/** 사람 얼굴(가상 프로필): 이름 첫 글자, 색은 이름으로 정함 */
function avatar(c, x, y, name, size = 44) {
  const col = AV[[...String(name)].reduce((a, ch) => a + ch.charCodeAt(0), 0) % AV.length];
  c.add(`<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${size * 0.38}" fill="${col}"/><circle cx="${x + size / 2}" cy="${y + size * 0.4}" r="${size * 0.17}" fill="#fff" opacity=".9"/><path d="M${x + size * 0.2} ${y + size * 0.86} q${size * 0.3} ${-size * 0.4} ${size * 0.6} 0z" fill="#fff" opacity=".9"/>`);
}
/** DigiStep365가 그린 단순한 이모티콘 얼굴(특정 캐릭터 아님) */
function face(c, x, y, r, mood = 0) {
  const col = ['#FFD54F', '#FFB74D', '#AED581', '#81D4FA', '#F48FB1', '#CE93D8'][mood % 6];
  const mouth = [`M${x - r * 0.35} ${y + r * 0.2} q${r * 0.35} ${r * 0.4} ${r * 0.7} 0`, `M${x - r * 0.3} ${y + r * 0.35} h${r * 0.6}`, `M${x - r * 0.35} ${y + r * 0.4} q${r * 0.35} ${-r * 0.35} ${r * 0.7} 0`][mood % 3];
  c.add(`<circle cx="${x}" cy="${y}" r="${r}" fill="${col}"/><circle cx="${x - r * 0.33}" cy="${y - r * 0.15}" r="${r * 0.1}" fill="#3a2a10"/><circle cx="${x + r * 0.33}" cy="${y - r * 0.15}" r="${r * 0.1}" fill="#3a2a10"/><path d="${mouth}" stroke="#3a2a10" stroke-width="${Math.max(1.5, r * 0.08)}" fill="none" stroke-linecap="round"/>`);
}

/* ---------- 공통 틀 ---------- */
function statusBar(c, dark = false) {
  const f = dark ? '#fff' : K.ink;
  c.text(18, 24, '10:00', { size: 14, fill: f, weight: 600 });
  c.add(`<circle cx="180" cy="17" r="7" fill="#0B0B0D"/><g fill="${f}"><rect x="296" y="12" width="4" height="10" rx="1"/><rect x="302" y="9" width="4" height="13" rx="1"/><rect x="314" y="9" width="26" height="13" rx="3" fill="none" stroke="${f}" stroke-width="2"/><rect x="317" y="12" width="17" height="7" rx="1"/></g>`);
}
function navBar(c, dark = false) {
  const f = dark ? '#fff' : '#3C4043';
  c.add(`<g stroke="${f}" stroke-width="2.6" fill="none" stroke-linecap="round"><line x1="64" y1="612" x2="64" y2="628"/><line x1="72" y1="612" x2="72" y2="628"/><line x1="80" y1="612" x2="80" y2="628"/><rect x="170" y="610" width="20" height="20" rx="6"/><polyline points="294,610 284,620 294,630"/></g>`);
  c.reg('뒤로가기 버튼', 256, 600, 64, 40);
  c.reg('홈 버튼', 148, 600, 64, 40);
}
/** 상단 바: 뒤로/닫기 + 제목 + 오른쪽 아이콘·글자 버튼 */
function topBar(c, { title = '', back = true, closeX = false, right = [], y = 34, bg = K.bg, size = 18 }) {
  c.rect(0, y, W, 52, bg);
  let tx = 18;
  if (back || closeX) { c.add((closeX ? ICON.close : ICON.back)(26, y + 26)); c.reg(closeX ? '닫기' : '뒤로', 4, y + 4, 44, 44); tx = 50; }
  c.text(tx, y + 33, fit(title, 16), { size, weight: 800 });
  let x = W - 22;
  for (const r of [...right].reverse()) {
    if (ICON[r.icon]) { c.add(ICON[r.icon](x, y + 26)); c.reg(r.label, x - 20, y + 6, 40, 40); x -= 40; } else {
      const w = r.text.length * 15 + 18; x -= w - 22;
      c.text(x + w / 2 - 22, y + 32, r.text, { size: 16, weight: 800, fill: r.disabled ? '#BDBDBD' : K.ink, anchor: 'middle' });
      c.reg(r.label ?? r.text, x - 22, y + 8, w, 36); x -= 30;
    }
  }
}
const TABS = [['friends', '친구'], ['chats', '채팅'], ['now', '지금'], ['shopping', '쇼핑'], ['more', '더보기']];
function tabBar(c, tab) {
  c.rect(0, 548, W, 52, K.bg); c.add(`<line x1="0" y1="548" x2="${W}" y2="548" stroke="${K.line}"/>`);
  TABS.forEach(([id, label], i) => {
    const x = 36 + i * 72; const on = id === tab; const f = on ? K.ink : '#A8A8A8';
    const ic = { friends: `<circle cx="${x}" cy="566" r="5" fill="${f}"/><path d="M${x - 9} 579 q9 -13 18 0z" fill="${f}"/>`, chats: `<path d="M${x - 10} 566 a10 8 0 1 1 6 7 l-6 4 l1 -6 a10 8 0 0 1 -1 -5z" fill="${f}"/>`, now: `<circle cx="${x}" cy="568" r="9" fill="none" stroke="${f}" stroke-width="2.4"/><path d="M${x - 2} 563 l6 5 l-6 5z" fill="${f}"/>`, shopping: `<path d="M${x - 8} 563 h16 l-1 13 h-14z" fill="${f}"/>`, more: `<g fill="${f}"><circle cx="${x - 7}" cy="568" r="2.4"/><circle cx="${x}" cy="568" r="2.4"/><circle cx="${x + 7}" cy="568" r="2.4"/></g>` }[id];
    c.add(ic); c.text(x, 594, label, { size: 11, fill: f, weight: on ? 800 : 600, anchor: 'middle' });
    c.reg(`${label} 탭`, x - 36, 548, 72, 52);
  });
}
function dim(c) { c.rect(0, 0, W, H, K.dim); }

/* ---------- 화면 종류 ---------- */
const V = {};

/** 아래 탭 화면: friends · chats · now · shopping · more */
V.tab = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c);
  const tab = s.tab ?? 'friends';
  const title = { friends: '친구', chats: '채팅', now: '지금', shopping: '쇼핑', more: '더보기' }[tab];
  const right = { friends: [{ icon: 'search', label: '검색' }, { icon: 'addFriend', label: '친구 추가' }, { icon: 'gear', label: '설정' }], chats: [{ icon: 'search', label: '검색' }, { icon: 'newChat', label: '새로운 채팅' }, { icon: 'gear', label: '설정' }], now: [{ icon: 'search', label: '검색' }, { icon: 'gear', label: '설정' }], shopping: [{ icon: 'search', label: '검색' }], more: [{ icon: 'search', label: '검색' }, { icon: 'gear', label: '설정' }] }[tab];
  topBar(c, { title, back: false, right, size: 22 });
  let y = 96;
  if (tab === 'friends') {
    avatar(c, 18, y, s.me ?? '나', 56); c.text(88, y + 26, s.me ?? '김영희', { size: 17, weight: 800 }); c.text(88, y + 48, s.myStatus ?? '오늘도 좋은 하루', { size: 13, fill: K.sub });
    c.reg('내 프로필', 0, y - 6, W, 68); y += 76;
    const groups = s.favorites?.length ? [['즐겨찾기', s.favorites], [`친구 ${s.friends?.length ?? 4}`, s.friends ?? ['김철수', '박민수', '이순자', '최영호']]] : [[`친구 ${s.friends?.length ?? 5}`, s.friends ?? ['김철수', '딸 수진', '박민수', '이순자', '최영호']]];
    for (const [g, names] of groups) {
      c.add(`<line x1="18" y1="${y}" x2="${W - 18}" y2="${y}" stroke="${K.line}"/>`); c.text(18, y + 26, g, { size: 13, fill: K.sub, weight: 600 }); y += 38;
      for (const n of names) { if (y > 500) break; avatar(c, 18, y, n); c.text(74, y + 28, n, { size: 16, weight: 600 }); c.reg(n, 0, y - 4, W, 52); y += 54; }
    }
  } else if (tab === 'chats') {
    const items = s.chats ?? [['딸 수진', '엄마 저녁 드셨어요?', '오후 6:20', 2], ['가족 단톡방', '사진을 보냈습니다.', '오후 5:02', 5], ['김철수', '내일 산책 같이 가요', '오전 9:15', 0], ['동네 친구들', '모임은 토요일이에요', '어제', 0]];
    for (const [n, last, time, unread] of items) {
      avatar(c, 18, y, n, 48); c.text(78, y + 21, fit(n, 12), { size: 16, weight: 700 }); c.text(78, y + 42, fit(last, 18), { size: 13.5, fill: K.sub });
      c.text(W - 18, y + 20, time, { size: 12, fill: '#9E9E9E', anchor: 'end' });
      if (unread) { c.rect(W - 18 - 22, y + 30, 22, 18, K.badge, 9); c.text(W - 29, y + 43, String(unread), { size: 12, fill: '#fff', weight: 700, anchor: 'middle' }); }
      if (s.pinned === n) c.add(ICON.pin(W - 60, y + 36, '#9E9E9E'));
      c.reg(n, 0, y - 6, W, 62); y += 66;
    }
  } else if (tab === 'now') {
    c.text(18, y + 10, '오픈채팅', { size: 17, weight: 800 }); c.reg('오픈채팅', 10, y - 12, 120, 34); y += 30;
    for (const [n, d] of s.rooms ?? [['산책 좋아하는 사람들', '참여 128명'], ['스마트폰 배우기 모임', '참여 342명'], ['텃밭 가꾸기', '참여 87명']]) { avatar(c, 18, y, n, 48); c.text(78, y + 22, n, { size: 15.5, weight: 700 }); c.text(78, y + 42, d, { size: 13, fill: K.sub }); c.reg(n, 0, y - 6, W, 60); y += 64; }
    c.rect(18, y + 6, W - 36, 46, K.gray, 12); c.text(W / 2, y + 35, '+ 오픈채팅 만들기', { size: 15, weight: 700, anchor: 'middle' }); c.reg('오픈채팅 만들기', 18, y + 6, W - 36, 46);
  } else if (tab === 'more') {
    avatar(c, 18, y, '김영희', 48); c.text(78, y + 30, '김영희', { size: 17, weight: 800 }); c.reg('내 프로필', 0, y - 4, W, 56); y += 70;
    const grid = s.grid ?? ['선물하기', '이모티콘', '지갑', '쇼핑하기', '메일', '톡서랍', '예약하기', '주문하기'];
    grid.forEach((g, i) => { const gx = 50 + (i % 4) * 87; const gy = y + Math.floor(i / 4) * 92 + 24; glyph(c, gx, gy, g, GLYPH_COLOR[i % GLYPH_COLOR.length]); c.text(gx, gy + 40, g, { size: 12.5, weight: 600, anchor: 'middle' }); c.reg(g, gx - 40, gy - 26, 80, 76); });
  } else {
    c.text(18, y + 10, '오늘의 추천', { size: 17, weight: 800 });
    for (let i = 0; i < 4; i++) { c.rect(18 + (i % 2) * 166, y + 30 + Math.floor(i / 2) * 170, 156, 120, K.gray, 10); c.text(18 + (i % 2) * 166, y + 170 + Math.floor(i / 2) * 170, `추천 상품 ${i + 1}`, { size: 13 }); }
  }
  tabBar(c, tab); navBar(c);
};

/** 채팅방: 말풍선 · 입력창 · ＋ 메뉴 · 길게 누른 메뉴 · 이모티콘 · 음성 녹음 */
V.room = (c, s) => {
  c.rect(0, 0, W, H, K.chatBg); statusBar(c);
  topBar(c, { title: `${s.name ?? '딸 수진'}${s.count ? `  ${s.count}` : ''}`, bg: K.chatBg, right: [{ icon: 'search', label: '채팅방 검색' }, { icon: 'menu', label: '채팅방 메뉴' }] });
  const panel = s.plus || s.emoji || s.record ? 236 : 0;
  const inputY = 600 - 56 - panel;
  if (s.notice) { c.rect(10, 92, W - 20, 44, '#fff', 10); c.add(ICON.bell(30, 114, K.ink)); c.text(48, 119, fit(s.notice, 20), { size: 14, weight: 600 }); c.reg('공지', 10, 92, W - 20, 44); }
  let y = s.notice ? 156 : 104;
  // 말풍선은 입력창 위까지만 보이게(넘치면 잘림 — 실제 앱처럼 위로 밀린 모습)
  c.add(`<clipPath id="kmsg"><rect x="0" y="86" width="${W}" height="${inputY - 86}"/></clipPath><g clip-path="url(#kmsg)">`);
  const list = s.msgs ?? [{ text: '엄마 저녁 드셨어요?' }, { me: true, text: '응 먹었어. 너는?' }];
  for (const m of list) {
    if (y > inputY - 20) break;
    if (m.date) { c.rect(W / 2 - 70, y, 140, 24, 'rgba(0,0,0,.12)', 12); c.text(W / 2, y + 17, m.date, { size: 12, fill: '#fff', anchor: 'middle' }); y += 36; continue; }
    if (m.sys) { c.text(W / 2, y + 14, m.sys, { size: 12.5, fill: '#4a5a6a', anchor: 'middle' }); y += 30; continue; }
    const lines = m.photo ? [] : wrap(m.text ?? '', 15);
    const bw = m.photo ? (m.photos > 1 ? 200 : 150) : m.emoticon !== undefined ? 100 : m.file || m.link ? 220 : m.voice ? 150 : Math.min(230, Math.max(4, ...lines.map((l) => l.length)) * 14.5 + 24);
    const bh = m.photo ? (m.photos > 1 ? 150 : 150) : lines.length * 21 + 16;
    const label = m.label ?? (m.me ? '내 메시지' : '받은 메시지');
    if (!m.me) { avatar(c, 10, y, s.name ?? '딸 수진', 36); c.text(54, y + 12, fit(s.from ?? s.name ?? '딸 수진', 10), { size: 12, fill: '#4a5a6a' }); }
    const bx = m.me ? W - 12 - bw : 54; const by = m.me ? y : y + 18;
    if (m.photo) {
      const n = m.photos ?? 1;
      if (n > 1) { for (let i = 0; i < Math.min(n, 4); i++) { const px = bx + (i % 2) * 101; const py = by + Math.floor(i / 2) * 76; c.rect(px, py, 99, 74, ['#9CC3A0', '#C9A97B', '#8FB1D6', '#D59A9A'][i], 6); c.add(`<path d="M${px + 10} ${py + 64} l25 -30 l20 18 l14 -12 l22 24z" fill="#fff" opacity=".6"/>`); } }
      else { c.rect(bx, by, bw, bh, '#9CC3A0', 10); c.add(`<path d="M${bx + 16} ${by + bh - 16} l40 -50 l30 30 l22 -18 l30 38z" fill="#fff" opacity=".6"/><circle cx="${bx + bw - 34}" cy="${by + 34}" r="12" fill="#fff" opacity=".7"/>`); }
      if (m.video) c.add(`<circle cx="${bx + bw / 2}" cy="${by + bh / 2}" r="20" fill="rgba(0,0,0,.45)"/><path d="M${bx + bw / 2 - 6} ${by + bh / 2 - 10} l16 10 l-16 10z" fill="#fff"/>`);
    } else if (m.file) {
      c.rect(bx, by, 220, 64, '#fff', 10); c.add(`<path d="M${bx + 16} ${by + 14} h18 l9 9 v28 h-27z" fill="#6C8EBF"/>`); c.text(bx + 56, by + 30, fit(m.file, 13), { size: 14, weight: 700 }); c.text(bx + 56, by + 50, m.size ?? '1.2MB', { size: 12, fill: K.sub });
    } else if (m.voice) {
      c.rect(bx, by, 150, 40, m.me ? K.yellow : '#fff', 14); c.add(`<path d="M${bx + 16} ${by + 12} l12 8 l-12 8z" fill="${K.ink}"/>`); c.add(`<g stroke="${K.ink}" stroke-width="2">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<line x1="${bx + 40 + i * 9}" y1="${by + 20 - (i % 3 + 1) * 3}" x2="${bx + 40 + i * 9}" y2="${by + 20 + (i % 3 + 1) * 3}"/>`).join('')}</g>`); c.text(bx + 134, by + 25, m.voice, { size: 12, anchor: 'end' });
    } else if (m.link) {
      c.rect(bx, by, 220, 96, '#fff', 10); c.rect(bx, by, 220, 46, '#DDE6EE', 10); c.text(bx + 12, by + 70, fit(m.link, 16), { size: 13.5, weight: 700 }); c.text(bx + 12, by + 88, m.url ?? 'example.com', { size: 12, fill: K.sub });
    } else if (m.emoticon !== undefined) {
      face(c, bx + 50, by + 50, 44, m.emoticon);
    } else {
      c.rect(bx, by, bw, bh, m.me ? K.yellow : '#fff', 14);
      lines.forEach((l, i) => c.text(bx + 12, by + 25 + i * 21, l, { size: 15 }));
    }
    const fw = m.file ? 220 : m.voice ? 150 : m.link ? 220 : m.emoticon !== undefined ? 100 : bw;
    const fh = m.file ? 64 : m.voice ? 40 : m.link ? 96 : m.emoticon !== undefined ? 100 : bh;
    c.regLast(label, bx, by, fw, fh); // 같은 이름이면 가장 최근(아래쪽) 말풍선을 가리킨다
    const meta = `${m.read ?? ''}`; if (m.me && meta) c.text(bx - 6, by + fh - 18, meta, { size: 12, fill: '#F4C20D', weight: 800, anchor: 'end' });
    c.text(m.me ? bx - 6 : bx + fw + 6, by + fh - 3, m.time ?? '오후 6:21', { size: 11, fill: '#4a5a6a', anchor: m.me ? 'end' : 'start' });
    y = by + fh + 14;
  }
  c.add('</g>');
  // 입력창
  c.rect(0, inputY, W, 56, '#fff');
  c.add(s.plus ? ICON.close(26, inputY + 28) : ICON.plus(26, inputY + 28)); c.reg(s.plus ? '＋ 메뉴 닫기' : '＋ 버튼', 4, inputY + 6, 44, 44);
  c.rect(52, inputY + 9, 230, 38, K.gray, 19);
  c.text(66, inputY + 34, s.input || '메시지 입력', { size: 15, fill: s.input ? K.ink : '#A8A8A8' }); c.reg('입력창', 52, inputY + 9, 230, 38);
  c.add(ICON.smile(262, inputY + 28)); c.reg('이모티콘 버튼', 244, inputY + 8, 36, 40);
  if (s.input) { c.rect(292, inputY + 9, 58, 38, K.yellow, 19); c.add(ICON.send(321, inputY + 28)); c.reg('전송 버튼', 288, inputY + 6, 66, 44); }
  else { c.text(321, inputY + 35, '#', { size: 22, weight: 700, fill: '#666', anchor: 'middle' }); c.reg('샵 검색', 296, inputY + 8, 50, 40); }
  if (s.plus) {
    const py = inputY + 56; c.rect(0, py, W, panel, '#fff'); c.add(`<line x1="0" y1="${py}" x2="${W}" y2="${py}" stroke="${K.line}"/>`);
    const items = s.items ?? ['앨범', '카메라', '선물하기', '통화하기', '송금', '파일', '연락처', '지도', '음성메시지', '일정', '투표', '캡처'];
    items.slice(0, 12).forEach((it, i) => { const gx = 46 + (i % 4) * 89; const gy = py + 36 + Math.floor(i / 4) * 72; glyph(c, gx, gy, it, GLYPH_COLOR[i]); c.text(gx, gy + 37, it, { size: 12, weight: 600, anchor: 'middle' }); c.reg(it, gx - 40, gy - 26, 80, 70); });
  }
  if (s.emoji) {
    const py = inputY + 56; c.rect(0, py, W, panel, '#fff');
    c.rect(0, py, W, 40, K.gray); ['최근', '기본', '구매'].forEach((t, i) => { c.text(40 + i * 70, py + 26, t, { size: 13, weight: i === (s.emojiTab ?? 1) ? 800 : 500, anchor: 'middle' }); c.reg(`${t} 이모티콘`, 10 + i * 70, py, 60, 40); });
    c.add(ICON.search(W - 28, py + 20)); c.reg('이모티콘 검색', W - 50, py, 44, 40);
    for (let i = 0; i < 8; i++) { const gx = 45 + (i % 4) * 90; const gy = py + 84 + Math.floor(i / 4) * 86; face(c, gx, gy, 30, i); c.reg(`이모티콘 ${i + 1}`, gx - 40, gy - 40, 80, 80); }
  }
  if (s.record) {
    const py = inputY + 56; c.rect(0, py, W, panel, '#fff');
    c.text(W / 2, py + 40, s.recording ? '00:07 녹음 중' : '버튼을 누르면 녹음이 시작돼요', { size: 14, fill: K.sub, anchor: 'middle' });
    c.add(`<circle cx="${W / 2}" cy="${py + 120}" r="44" fill="${s.recording ? K.red : K.yellow}"/>`); c.add(ICON.mic(W / 2, py + 120, s.recording ? '#fff' : K.ink)); c.reg('녹음 버튼', W / 2 - 46, py + 74, 92, 92);
    if (s.recording) { c.text(70, py + 126, '취소', { size: 15, weight: 700, anchor: 'middle' }); c.reg('녹음 취소', 40, py + 100, 60, 44); c.text(290, py + 126, '전송', { size: 15, weight: 800, anchor: 'middle' }); c.reg('녹음 전송', 260, py + 100, 60, 44); }
  }
  if (s.menu) { // 말풍선을 길게 눌렀을 때 메뉴
    dim(c); const items = s.menu; const mh = items.length * 48 + 16; const my = (H - mh) / 2;
    c.rect(40, my, W - 80, mh, '#fff', 14);
    items.forEach((it, i) => { c.text(64, my + 39 + i * 48, it, { size: 16, weight: 600 }); c.reg(it, 40, my + 8 + i * 48, W - 80, 48); });
  }
  navBar(c);
};

/** 목록(설정·메뉴): rows: { label, sub, value, toggle:true/false, section, check } */
V.list = (c, s) => {
  c.rect(0, 0, W, H, s.gray ? K.gray : K.bg); statusBar(c);
  topBar(c, { title: s.title ?? '설정', back: s.back !== false, closeX: s.closeX, right: s.right ?? [] });
  let y = 96;
  if (s.lead) { for (const l of wrap(s.lead, 24)) { c.text(18, y + 10, l, { size: 13.5, fill: K.sub }); y += 20; } y += 10; }
  for (const r of s.rows ?? []) {
    if (y > 580) break;
    if (r.section) { c.text(18, y + 24, r.section, { size: 13, fill: K.sub, weight: 700 }); y += 36; continue; }
    const h = r.sub ? 60 : 50;
    if (r.danger) c.text(18, y + 31, r.label, { size: 16, weight: 600, fill: K.red });
    else { c.text(18, y + (r.sub ? 25 : 31), r.label, { size: 16, weight: 600 }); if (r.sub) c.text(18, y + 46, fit(r.sub, 26), { size: 12.5, fill: K.sub }); }
    if (r.toggle !== undefined) { const on = r.toggle; c.rect(W - 66, y + h / 2 - 13, 48, 26, on ? K.yellow : '#D0D0D0', 13); c.add(`<circle cx="${on ? W - 31 : W - 53}" cy="${y + h / 2}" r="10" fill="#fff"/>`); c.reg(`${r.label} 스위치`, W - 76, y, 66, h); }
    else if (r.check !== undefined) { c.add(`<circle cx="${W - 34}" cy="${y + h / 2}" r="11" fill="${r.check ? K.yellow : 'none'}" stroke="${r.check ? K.yellow : '#C8C8C8'}" stroke-width="2"/>${r.check ? `<path d="M${W - 40} ${y + h / 2} l4 4 l8 -8" stroke="${K.ink}" stroke-width="2.4" fill="none"/>` : ''}`); }
    else if (r.value) c.text(W - 34, y + 31, r.value, { size: 14, fill: K.sub, anchor: 'end' });
    if (r.toggle === undefined && r.check === undefined) c.add(`<polyline points="${W - 24},${y + h / 2 - 6} ${W - 18},${y + h / 2} ${W - 24},${y + h / 2 + 6}" stroke="#BDBDBD" stroke-width="2" fill="none"/>`);
    c.add(`<line x1="18" y1="${y + h}" x2="${W - 18}" y2="${y + h}" stroke="${K.line}"/>`);
    c.reg(r.label, 0, y, W, h); y += h;
  }
  if (s.button) { c.rect(18, 528, W - 36, 52, s.buttonOff ? '#EDEDED' : K.yellow, 12); c.text(W / 2, 560, s.button, { size: 16, weight: 800, anchor: 'middle', fill: s.buttonOff ? '#9E9E9E' : K.ink }); c.reg(s.button, 18, 528, W - 36, 52); }
  navBar(c);
};

/** 글자 크기 같은 조절 막대: steps 칸 중 value */
V.slider = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c); topBar(c, { title: s.title ?? '글자크기' });
  c.rect(18, 104, W - 36, 220, K.chatBg, 14);
  const size = 12 + (s.value ?? 2) * 2.4;
  c.rect(W - 30 - 180, 128, 180, size * 2 + 12, K.yellow, 14); c.text(W - 30 - 168, 128 + size + 12, '글자 크기 미리보기', { size });
  c.rect(30, 210, 190, size * 2 + 12, '#fff', 14); c.text(42, 210 + size + 12, '잘 보이시나요?', { size });
  const n = s.steps ?? 7; const x0 = 40; const x1 = W - 40;
  c.text(x0, 380, '가', { size: 13, weight: 700, anchor: 'middle' }); c.text(x1, 384, '가', { size: 26, weight: 800, anchor: 'middle' });
  c.add(`<line x1="${x0}" y1="410" x2="${x1}" y2="410" stroke="#D0D0D0" stroke-width="4" stroke-linecap="round"/>`);
  for (let i = 0; i < n; i++) { const x = x0 + ((x1 - x0) * i) / (n - 1); c.add(`<circle cx="${x}" cy="410" r="${i === s.value ? 14 : 5}" fill="${i === s.value ? K.yellow : '#BDBDBD'}" ${i === s.value ? `stroke="${K.ink}" stroke-width="1.5"` : ''}/>`); c.reg(`${i + 1}단계`, x - 20, 386, 40, 48); }
  c.reg('조절 막대', x0 - 10, 386, x1 - x0 + 20, 48);
  c.reg('크게 쪽', x1 - 60, 386, 70, 48);
  navBar(c);
};

/** 아래에서 올라오는 선택 창(바탕은 다른 화면 위에 어둡게) */
V.sheet = (c, s) => {
  if (s.base) draw(c, s.base); else c.rect(0, 0, W, H, K.bg);
  dim(c); const items = s.items ?? [];
  const h = items.length * 54 + (s.title ? 56 : 16) + 24; const y0 = 600 - h;
  c.rect(0, y0, W, h + 20, '#fff', 18);
  if (s.title) c.text(20, y0 + 36, s.title, { size: 17, weight: 800 });
  items.forEach((it, i) => { const t = typeof it === 'string' ? it : it.label; const y = y0 + (s.title ? 56 : 16) + i * 54; c.text(24, y + 34, t, { size: 16, weight: 600, fill: it.danger ? K.red : K.ink }); c.reg(t, 0, y, W, 54); });
  navBar(c);
};

/** 확인 창 */
V.dialog = (c, s) => {
  if (s.base) draw(c, s.base); else c.rect(0, 0, W, H, K.bg);
  dim(c);
  const lines = wrap(s.text ?? '', 20); const h = 120 + lines.length * 22 + (s.title ? 26 : 0); const y0 = (H - h) / 2;
  c.rect(30, y0, W - 60, h, '#fff', 16);
  let y = y0 + 40; if (s.title) { c.text(W / 2, y, s.title, { size: 17, weight: 800, anchor: 'middle' }); y += 30; }
  lines.forEach((l) => { c.text(W / 2, y, l, { size: 15, fill: '#444', anchor: 'middle' }); y += 22; });
  const bs = s.buttons ?? ['취소', '확인']; const bw = (W - 60) / bs.length;
  c.add(`<line x1="30" y1="${y0 + h - 52}" x2="${W - 30}" y2="${y0 + h - 52}" stroke="${K.line}"/>`);
  bs.forEach((b, i) => { c.text(30 + bw * i + bw / 2, y0 + h - 20, b, { size: 16, weight: 800, fill: i === bs.length - 1 ? (s.danger ? K.red : K.ink) : K.sub, anchor: 'middle' }); c.reg(b, 30 + bw * i, y0 + h - 52, bw, 52); });
};

/** 프로필 화면(내 프로필·친구 프로필) */
V.profile = (c, s) => {
  c.rect(0, 0, W, H, s.bg ?? '#7C8A99'); c.add(`<rect x="0" y="0" width="${W}" height="${H}" fill="url(#kgrad)"/>`);
  c.add('<defs><linearGradient id="kgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9AA9B8"/><stop offset="1" stop-color="#4B5663"/></linearGradient></defs>');
  statusBar(c, true);
  c.add(ICON.close(26, 60, '#fff')); c.reg('닫기', 4, 38, 44, 44);
  if (s.mine) { c.add(ICON.gear(W - 26, 60, '#fff')); c.reg('프로필 설정', W - 48, 38, 44, 44); }
  avatar(c, W / 2 - 50, 300, s.name ?? '김영희', 100); c.reg('프로필 사진', W / 2 - 50, 300, 100, 100);
  c.text(W / 2, 432, s.name ?? '김영희', { size: 20, weight: 800, fill: '#fff', anchor: 'middle' }); c.reg('프로필 이름', W / 2 - 90, 412, 180, 30);
  c.text(W / 2, 458, s.status ?? '오늘도 좋은 하루', { size: 14, fill: '#E6EAEE', anchor: 'middle' }); c.reg('상태메시지', W / 2 - 110, 442, 220, 24);
  if (s.music) { c.rect(W / 2 - 80, 470, 160, 28, 'rgba(255,255,255,.25)', 14); c.text(W / 2, 489, `♪ ${s.music}`, { size: 13, fill: '#fff', anchor: 'middle' }); }
  c.add(`<line x1="0" y1="510" x2="${W}" y2="510" stroke="rgba(255,255,255,.3)"/>`);
  const bs = s.buttons ?? (s.mine ? ['나와의 채팅', '프로필 편집'] : ['1:1 채팅', '통화하기', '페이스톡']);
  const bw = W / bs.length;
  bs.forEach((b, i) => { const x = bw * i + bw / 2; const ic = { '1:1 채팅': ICON.newChat, '나와의 채팅': ICON.newChat, 통화하기: ICON.phone, 페이스톡: ICON.video, '프로필 편집': ICON.gear }[b] ?? ICON.smile; c.add(ic(x, 540, '#fff')); c.text(x, 576, b, { size: 13, fill: '#fff', weight: 600, anchor: 'middle' }); c.reg(b, bw * i, 516, bw, 72); });
  navBar(c, true);
};

/** 사람 고르기(대화상대 선택·초대·연락처 보내기) */
V.pick = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c);
  const n = (s.items ?? []).filter((x) => x.checked).length;
  topBar(c, { title: s.title ?? '대화상대 선택', closeX: true, right: [{ text: `${s.button ?? '확인'}${n ? ` ${n}` : ''}`, label: s.button ?? '확인', disabled: !n }] });
  c.rect(18, 94, W - 36, 40, K.gray, 10); c.add(ICON.search(38, 114, '#9E9E9E')); c.text(56, 119, s.query || '이름 검색', { size: 14, fill: s.query ? K.ink : '#9E9E9E' }); c.reg('이름 검색', 18, 94, W - 36, 40);
  let y = 150;
  for (const it of s.items ?? []) { avatar(c, 18, y, it.name, 44); c.text(74, y + 28, it.name, { size: 16, weight: 600 }); c.add(`<circle cx="${W - 34}" cy="${y + 22}" r="11" fill="${it.checked ? K.yellow : 'none'}" stroke="${it.checked ? K.yellow : '#C8C8C8'}" stroke-width="2"/>${it.checked ? `<path d="M${W - 40} ${y + 22} l4 4 l8 -8" stroke="${K.ink}" stroke-width="2.4" fill="none"/>` : ''}`); c.reg(it.name, 0, y - 4, W, 52); y += 56; }
  navBar(c);
};

/** 사진 고르기(앨범): selected = 고른 칸 번호들 */
V.gallery = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c);
  topBar(c, { title: s.title ?? '최근 항목', closeX: true });
  const sel = s.selected ?? [];
  for (let i = 0; i < 15; i++) { const x = 2 + (i % 3) * 119; const y = 88 + Math.floor(i / 3) * 90; c.rect(x, y, 117, 88, ['#9CC3A0', '#C9A97B', '#8FB1D6', '#D59A9A', '#B7A6D6', '#E2C48F'][i % 6]); c.add(`<path d="M${x + 10} ${y + 78} l30 -36 l24 22 l16 -14 l30 28z" fill="#fff" opacity=".55"/>`); if (s.video && i % 4 === 1) c.text(x + 108, y + 80, '0:15', { size: 12, fill: '#fff', weight: 700, anchor: 'end' }); const k = sel.indexOf(i); c.add(`<circle cx="${x + 100}" cy="${y + 16}" r="11" fill="${k >= 0 ? K.yellow : 'rgba(0,0,0,.25)'}" stroke="#fff" stroke-width="2"/>`); if (k >= 0) c.text(x + 100, y + 21, String(k + 1), { size: 13, weight: 800, anchor: 'middle' }); c.reg(`사진 ${i + 1}`, x, y, 117, 88); }
  c.rect(0, 540, W, 60, '#fff'); c.add(`<line x1="0" y1="540" x2="${W}" y2="540" stroke="${K.line}"/>`);
  const opt = (x, label, on) => { c.add(`<circle cx="${x}" cy="570" r="9" fill="${on ? K.yellow : 'none'}" stroke="${on ? K.ink : '#BDBDBD'}" stroke-width="1.6"/>`); c.text(x + 16, 575, label, { size: 14, weight: 600 }); c.reg(label, x - 14, 548, label.length * 15 + 34, 44); };
  opt(22, '묶어보내기', s.bundle); opt(140, '원본', s.original);
  c.rect(W - 98, 550, 84, 40, sel.length ? K.yellow : '#EDEDED', 20); c.text(W - 56, 576, `전송${sel.length ? ` ${sel.length}` : ''}`, { size: 15, weight: 800, anchor: 'middle', fill: sel.length ? K.ink : '#9E9E9E' }); c.reg('전송', W - 98, 550, 84, 40);
  navBar(c);
};

/** 사진·동영상 크게 보기 */
V.viewer = (c, s) => {
  c.rect(0, 0, W, H, '#000'); statusBar(c, true);
  c.add(ICON.back(26, 60, '#fff')); c.reg('뒤로', 4, 38, 44, 44); c.text(56, 66, s.name ?? '딸 수진', { size: 15, fill: '#fff', weight: 700 });
  const z = s.zoom ? 1.5 : 1; const w = 340 * z; const h = 260 * z;
  c.add(`<clipPath id="kv"><rect x="0" y="100" width="${W}" height="400"/></clipPath><g clip-path="url(#kv)"><rect x="${(W - w) / 2}" y="${300 - h / 2}" width="${w}" height="${h}" fill="#9CC3A0"/><path d="M${(W - w) / 2 + 30} ${300 + h / 2 - 20} l${80 * z} ${-100 * z} l${60 * z} ${60 * z} l${40 * z} ${-36 * z} l${70 * z} ${76 * z}z" fill="#fff" opacity=".6"/></g>`);
  if (s.video) c.add(`<circle cx="${W / 2}" cy="300" r="30" fill="rgba(255,255,255,.3)"/><path d="M${W / 2 - 9} 285 l24 15 l-24 15z" fill="#fff"/>`);
  c.reg('사진', 0, 120, W, 360);
  const bs = s.buttons ?? ['저장', '공유', '삭제']; const bw = W / bs.length;
  bs.forEach((b, i) => { const x = bw * i + bw / 2; const ic = { 저장: ICON.down, 공유: ICON.share, 삭제: ICON.trash, 열기: ICON.share }[b] ?? ICON.share; c.add(ic(x, 548, '#fff')); c.text(x, 580, b, { size: 12.5, fill: '#fff', anchor: 'middle' }); c.reg(`${b} 버튼`, bw * i, 520, bw, 72); });
  navBar(c, true);
};

/** 보이스톡·페이스톡: state incoming | calling | talking */
V.call = (c, s) => {
  const face = s.kind === 'face';
  c.rect(0, 0, W, H, face && s.state === 'talking' ? '#5D6B5A' : '#3E4A57'); statusBar(c, true);
  if (face && s.state === 'talking') { c.rect(W - 120, 60, 100, 140, '#8FA3B5', 12); c.text(W - 70, 136, '나', { size: 14, fill: '#fff', anchor: 'middle' }); }
  avatar(c, W / 2 - 50, 150, s.name ?? '딸 수진', 100);
  c.text(W / 2, 290, s.name ?? '딸 수진', { size: 24, weight: 800, fill: '#fff', anchor: 'middle' });
  c.text(W / 2, 320, { incoming: face ? '페이스톡 해요' : '보이스톡 해요', calling: '연결하고 있어요…', talking: '00:12' }[s.state ?? 'calling'], { size: 15, fill: '#E6EAEE', anchor: 'middle' });
  const btn = (x, y, label, color, ic) => { c.add(`<circle cx="${x}" cy="${y}" r="32" fill="${color}"/>`); c.add(ic); c.text(x, y + 54, label, { size: 13, fill: '#fff', anchor: 'middle' }); c.reg(label, x - 40, y - 40, 80, 100); };
  if (s.state === 'incoming') { btn(90, 470, '거절', K.red, `<g transform="rotate(135 90 470)">${ICON.phone(90, 470, '#fff')}</g>`); btn(270, 470, '받기', K.green, face ? ICON.video(270, 470, '#fff') : ICON.phone(270, 470, '#fff')); }
  else {
    const top = face ? [['카메라 전환', ICON.camera(0, 0, '#fff')], ['음소거', ICON.mic(0, 0, '#fff')], ['카메라 끄기', ICON.video(0, 0, '#fff')]] : [['스피커', ICON.bell(0, 0, '#fff')], ['음소거', ICON.mic(0, 0, '#fff')], ['친구 초대', ICON.addFriend(0, 0, '#fff')]];
    top.forEach(([l, ic], i) => { const x = 70 + i * 110; c.add(`<circle cx="${x}" cy="400" r="28" fill="rgba(255,255,255,.18)"/><g transform="translate(${x} 400)">${ic}</g>`); c.text(x, 448, l, { size: 13, fill: '#fff', anchor: 'middle' }); c.reg(l, x - 40, 366, 80, 92); });
    btn(W / 2, 520, '종료', K.red, `<g transform="rotate(135 ${W / 2} 520)">${ICON.phone(W / 2, 520, '#fff')}</g>`);
  }
  navBar(c, true);
};

/** 입력 양식(로그인·인증·비밀번호 등): fields { label, value, masked, placeholder } */
V.form = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c); topBar(c, { title: s.title ?? '', back: s.back !== false, closeX: s.closeX });
  let y = 104;
  if (s.heading) { for (const l of wrap(s.heading, 16)) { c.text(18, y + 16, l, { size: 21, weight: 800 }); y += 30; } y += 6; }
  if (s.lead) { for (const l of wrap(s.lead, 24)) { c.text(18, y + 10, l, { size: 13.5, fill: K.sub }); y += 20; } y += 14; }
  for (const f of s.fields ?? []) {
    c.text(18, y + 12, f.label, { size: 13, fill: K.sub, weight: 700 }); y += 20;
    c.add(`<line x1="18" y1="${y + 40}" x2="${W - 18}" y2="${y + 40}" stroke="${f.focus ? K.ink : '#CFCFCF'}" stroke-width="${f.focus ? 2 : 1.4}"/>`);
    c.text(18, y + 30, f.masked ? '●'.repeat(Math.min(10, (f.value ?? '').length || 8)) : (f.value || f.placeholder || ''), { size: 16, fill: f.value ? K.ink : '#AAAAAA' });
    if (f.action) { c.rect(W - 104, y + 4, 86, 32, K.gray, 8); c.text(W - 61, y + 25, f.action, { size: 13, weight: 700, anchor: 'middle' }); c.reg(f.action, W - 104, y + 4, 86, 32); }
    c.reg(f.label, 18, y, W - 36, 44); y += 60;
  }
  for (const o of s.checks ?? []) { c.add(`<circle cx="30" cy="${y + 12}" r="10" fill="${o.on ? K.yellow : 'none'}" stroke="${o.on ? K.ink : '#BDBDBD'}" stroke-width="1.6"/>`); c.text(48, y + 17, o.label, { size: 14, weight: 600 }); c.reg(o.label, 10, y - 6, W - 20, 36); y += 38; }
  if (s.note) for (const l of wrap(s.note, 26)) { c.text(18, y + 10, l, { size: 12.5, fill: K.red }); y += 18; }
  const bs = s.buttons ?? (s.button ? [s.button] : []);
  bs.forEach((b, i) => { const by = 528 - (bs.length - 1 - i) * 60; c.rect(18, by, W - 36, 52, i === bs.length - 1 && !s.buttonOff ? K.yellow : K.gray, 12); c.text(W / 2, by + 32, b, { size: 16, weight: 800, anchor: 'middle', fill: s.buttonOff && i === bs.length - 1 ? '#9E9E9E' : K.ink }); c.reg(b, 18, by, W - 36, 52); });
  navBar(c);
};

/** 검색 화면: query 와 결과 줄 */
V.search = (c, s) => {
  c.rect(0, 0, W, H, K.bg); statusBar(c);
  c.add(ICON.back(26, 60)); c.reg('뒤로', 4, 38, 44, 44);
  c.rect(52, 42, W - 70, 38, K.gray, 10); c.text(66, 67, s.query || s.placeholder || '검색', { size: 15, fill: s.query ? K.ink : '#9E9E9E' }); c.reg('검색창', 52, 42, W - 70, 38);
  let y = 100;
  if (s.tabs) { s.tabs.forEach((t, i) => { c.text(30 + i * 80, y + 18, t, { size: 14, weight: i === 0 ? 800 : 500, anchor: 'start' }); c.reg(t, 20 + i * 80, y, 70, 30); }); y += 40; }
  for (const r of s.results ?? []) { const t = typeof r === 'string' ? r : r.label; avatar(c, 18, y, t, 44); c.text(74, y + (r.sub ? 20 : 28), t, { size: 15.5, weight: 600 }); if (r.sub) c.text(74, y + 40, r.sub, { size: 12.5, fill: K.sub }); if (r.mark) { c.rect(W - 82, y + 8, 64, 30, K.yellow, 15); c.text(W - 50, y + 28, r.mark, { size: 13, weight: 800, anchor: 'middle' }); c.reg(r.mark, W - 82, y + 8, 64, 30); } c.reg(t, 0, y - 4, r.mark ? W - 90 : W, 52); y += 58; }
  if (s.empty) c.text(W / 2, 300, s.empty, { size: 14, fill: K.sub, anchor: 'middle' });
  navBar(c);
};

/** QR 코드(가상 무늬 — 실제 코드 아님) */
V.qr = (c, s) => {
  c.rect(0, 0, W, H, s.scan ? '#222' : K.bg); statusBar(c, s.scan);
  topBar(c, { title: s.title ?? 'QR코드', closeX: true, bg: s.scan ? '#222' : K.bg });
  if (s.scan) { c.add(`<g stroke="#fff" stroke-width="4" fill="none"><path d="M70 170 v-40 h40 M250 130 h40 v40 M290 330 v40 h-40 M110 370 h-40 v-40"/></g>`); c.text(W / 2, 420, '친구의 QR코드를 네모 안에 비춰 주세요', { size: 14, fill: '#fff', anchor: 'middle' }); c.reg('비추는 곳', 70, 130, 220, 240); }
  else {
    c.rect(70, 130, 220, 220, '#fff', 8, `stroke="${K.line}"`);
    let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 17; i++) for (let j = 0; j < 17; j++) if (rnd() > 0.5 && !((i < 5 && j < 5) || (i > 11 && j < 5) || (i < 5 && j > 11))) c.rect(85 + i * 11, 145 + j * 11, 11, 11, K.ink);
    for (const [x, y] of [[85, 145], [217, 145], [85, 277]]) c.add(`<rect x="${x}" y="${y}" width="55" height="55" fill="none" stroke="${K.ink}" stroke-width="8"/><rect x="${x + 17}" y="${y + 17}" width="21" height="21" fill="${K.ink}"/>`);
    c.text(W / 2, 384, s.caption ?? '내 QR코드', { size: 16, weight: 700, anchor: 'middle' });
    c.reg('QR코드', 70, 130, 220, 220);
  }
  if (s.buttons) s.buttons.forEach((b, i) => { const bw = (W - 36 - 12 * (s.buttons.length - 1)) / s.buttons.length; const x = 18 + i * (bw + 12); c.rect(x, 520, bw, 48, s.scan ? '#444' : K.gray, 12); c.text(x + bw / 2, 550, b, { size: 15, weight: 700, anchor: 'middle', fill: s.scan ? '#fff' : K.ink }); c.reg(b, x, 520, bw, 48); });
  navBar(c, s.scan);
};

/** 안내 카드(알아 두기 화면): 제목 + 짧은 줄들 + 그림 기호 */
V.info = (c, s) => {
  c.rect(0, 0, W, H, '#FFFBE6'); statusBar(c);
  c.rect(18, 70, W - 36, 470, '#fff', 18, `stroke="${s.warn ? '#F3B0B0' : '#F2E3A0'}" stroke-width="2"`);
  c.add(s.warn ? `<circle cx="${W / 2}" cy="130" r="30" fill="#FDECEA"/><text x="${W / 2}" y="142" font-size="34" font-weight="900" fill="${K.red}" text-anchor="middle">!</text>` : `<circle cx="${W / 2}" cy="130" r="30" fill="${K.yellow}"/><text x="${W / 2}" y="142" font-size="30" font-weight="900" fill="${K.ink}" text-anchor="middle">i</text>`);
  let y = 196;
  for (const l of wrap(s.title ?? '', 14)) { c.text(W / 2, y, l, { size: 20, weight: 800, anchor: 'middle' }); y += 30; }
  y += 8;
  for (const p of s.lines ?? []) { const ls = wrap(p, 20); c.add(`<circle cx="40" cy="${y - 5}" r="3.5" fill="${s.warn ? K.red : '#C9A400'}"/>`); for (const l of ls) { c.text(52, y, l, { size: 15 }); y += 23; } y += 8; }
  c.reg('안내', 18, 70, W - 36, 470);
  navBar(c);
};

/** 다른 화면을 그대로 그려 넣는다(sheet·dialog 바탕) */
function draw(c, spec) { (V[spec.v] ?? V.info)(c, spec); }

/**
 * @param {object} spec  { v: 'tab'|'room'|'list'|'slider'|'sheet'|'dialog'|'profile'|'pick'|'gallery'|'viewer'|'call'|'form'|'search'|'qr'|'info', ... }
 * @param {string} [target]  누를 곳 이름(화면에 보이는 글자)
 */
export function renderKakao(spec = { v: 'info' }, target, action) {
  const c = canvas();
  draw(c, spec);
  c.reg('화면', 0, 40, W, 560);
  const { body, targets } = c.out();
  const t = target ? targets[target] : null;
  let mark = '';
  if (t) {
    const r = Math.min(t.w, t.h) / 2;
    mark += `<rect class="target-ring" x="${t.x + 2}" y="${t.y + 2}" width="${t.w - 4}" height="${t.h - 4}" rx="${Math.min(r, 22)}" fill="none" stroke="#D7263D" stroke-width="5"/>`;
    const above = t.y > 150 || t.y + t.h > 520;
    const by = above ? t.y - 44 : t.y + t.h + 8;
    const bx = Math.min(Math.max(t.x + t.w / 2 - 34, 6), W - 74);
    mark += `<g class="target-tag"><rect x="${bx}" y="${by}" width="68" height="34" rx="17" fill="#D7263D"/><text x="${bx + 34}" y="${by + 23}" font-size="17" font-weight="800" fill="#fff" text-anchor="middle">${action === 'hold' ? '길게' : '여기'}</text><path d="M${bx + 26} ${above ? by + 34 : by} l8 ${above ? 9 : -9} l8 ${above ? -9 : 9}z" fill="#D7263D"/></g>`;
  }
  const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" font-family="Pretendard Variable, Pretendard, Noto Sans KR, sans-serif">${body}${mark}</svg>`;
  return { svg, width: W, height: H, targets, target: t };
}
export const KAKAO_VIEWS = Object.keys(V);
