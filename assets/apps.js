/**
 * 앱 이름과 아이콘 모음 — 수업 안내 문장, 연습 화면, 카드의 ‘앱 이름표’가 모두 여기서 이름과 그림을 가져온다.
 *
 * label  휴대폰 화면에 보이는 앱 이름. 삼성 앱은 갤럭시 S26 사용 설명서(Android 17, One UI 9)가 부르는 이름
 *        (예: ‘노트’ 앱, ‘스토어’ 앱, ‘월렛’ 앱)을 그대로 쓴다.
 * full   공식 이름(서비스 이름). label 과 다를 때 카드에 함께 보여 준다.
 * src    이름을 확인한 곳
 * icon   실제 앱 아이콘의 색과 모양을 본뜬 연습용 그림(100×100 좌표). 실제 아이콘 파일이 아니며,
 *        실제 화면 캡처가 생기면 카드의 photo 로 바꾼다.
 */

const W = '#FFFFFF';

// 아이콘 그림 조각(100×100 안에 그린다)
const G = {
  phone: (c = W) => `<path d="M33 22c3-2 7-1 9 2l6 10c2 3 1 6-1 8l-4 3c3 7 9 13 16 16l3-4c2-2 5-3 8-1l10 6c3 2 4 6 2 9l-4 6c-3 4-8 5-13 4C42 77 23 58 19 35c-1-5 0-10 4-13z" fill="${c}"/>`,
  bubble: (c = W) => `<path d="M50 22c-18 0-31 11-31 25 0 8 4 15 11 19l-3 11 12-7c3 1 7 1 11 1 18 0 31-11 31-24S68 22 50 22z" fill="${c}"/>`,
  person: (c = W) => `<circle cx="50" cy="38" r="13" fill="${c}"/><path d="M24 78c2-14 13-22 26-22s24 8 26 22z" fill="${c}"/>`,
  camera: (c = W) => `<rect x="18" y="32" width="64" height="44" rx="10" fill="${c}"/><rect x="38" y="24" width="24" height="12" rx="4" fill="${c}"/><circle cx="50" cy="54" r="14" fill="none" stroke="#C2185B" stroke-width="6"/>`,
  flower: (c = W) => [0, 72, 144, 216, 288].map((a) => `<ellipse cx="50" cy="31" rx="9" ry="15" fill="${c}" transform="rotate(${a} 50 50)"/>`).join('') + '<circle cx="50" cy="50" r="7" fill="#F48FB1"/>',
  gear: (c = W) => `<g fill="${c}">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<rect x="45" y="16" width="10" height="16" rx="3" transform="rotate(${a} 50 50)"/>`).join('')}<circle cx="50" cy="50" r="22"/></g><circle cx="50" cy="50" r="9" fill="#6B7178"/>`,
  planet: (c = W) => `<circle cx="50" cy="50" r="20" fill="${c}"/><ellipse cx="50" cy="50" rx="34" ry="11" fill="none" stroke="${c}" stroke-width="5" transform="rotate(-25 50 50)"/>`,
  clock: (c = W) => `<circle cx="50" cy="50" r="28" fill="none" stroke="${c}" stroke-width="7"/><path d="M50 34v17l11 7" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  calendar: (c = W) => `<rect x="20" y="24" width="60" height="56" rx="10" fill="${c}"/><rect x="20" y="24" width="60" height="14" rx="7" fill="#C8E6C9"/><text x="50" y="72" font-size="30" font-weight="800" text-anchor="middle" fill="#2E7D32">25</text>`,
  folder: (c = W) => `<path d="M18 30c0-3 2-5 5-5h17l7 8h30c3 0 5 2 5 5v33c0 3-2 5-5 5H23c-3 0-5-2-5-5z" fill="${c}"/>`,
  note: (c = W) => `<rect x="25" y="18" width="50" height="64" rx="8" fill="${c}"/><path d="M34 38h32M34 50h32M34 62h20" stroke="#EF6C00" stroke-width="5" stroke-linecap="round"/>`,
  mic: (c = W) => `<rect x="39" y="18" width="22" height="40" rx="11" fill="${c}"/><path d="M28 48c0 13 10 22 22 22s22-9 22-22M50 70v12" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,
  calc: (c = W) => `<g stroke="${c}" stroke-width="7" stroke-linecap="round"><path d="M28 32h18M37 23v18M56 32h18M28 64l14 14M42 64L28 78M56 66h18M56 76h18"/></g>`,
  weather: () => '<circle cx="40" cy="40" r="15" fill="#FFD54F"/><path d="M34 74h34c8 0 13-6 13-12s-5-12-12-12c-2-9-10-14-18-13-8 1-14 7-15 15-6 0-11 5-11 11s4 11 9 11z" fill="#FFFFFF"/>',
  wallet: (c = W) => `<rect x="18" y="28" width="64" height="46" rx="9" fill="${c}"/><rect x="24" y="22" width="44" height="12" rx="4" fill="#90CAF9"/><circle cx="68" cy="51" r="5" fill="#283593"/>`,
  run: () => '<circle cx="56" cy="22" r="8" fill="#1EA446"/><path d="M38 44l12-10 10 8 10 2M50 34l-6 22 14 10-4 18M44 56L32 70" fill="none" stroke="#1EA446" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
  letter: (t, c = W, s = 44) => `<text x="50" y="${50 + s * 0.36}" font-size="${s}" font-weight="800" text-anchor="middle" fill="${c}">${t}</text>`,
  bag: (c = W) => `<path d="M24 38h52l-4 40H28z" fill="${c}"/><path d="M38 38v-6a12 12 0 0124 0v6" fill="none" stroke="${c}" stroke-width="6"/>`,
  play: () => '<path d="M30 20l38 30-38 30z" fill="#00A173"/><path d="M30 20l26 30-26 30z" fill="#00D7FE" opacity="0.85"/><path d="M30 80l26-30 12 10z" fill="#FF3A44"/><path d="M68 50L56 40 30 20l26 30 12 10z" fill="#FFD400" opacity="0.9"/>',
  kakao: () => '<path d="M50 24c-19 0-34 11-34 25 0 9 6 17 16 21l-3 11 12-8c3 0 6 1 9 1 19 0 34-11 34-25S69 24 50 24z" fill="#3C1E1E"/><text x="50" y="55" font-size="15" font-weight="900" text-anchor="middle" fill="#FAE100">TALK</text>',
  pin: () => '<path d="M50 16c-14 0-25 11-25 25 0 19 25 43 25 43s25-24 25-43c0-14-11-25-25-25z" fill="#EA4335"/><circle cx="50" cy="41" r="9" fill="#FFFFFF"/>',
  yt: () => '<rect x="16" y="28" width="68" height="46" rx="14" fill="#FF0000"/><path d="M44 40l18 11-18 11z" fill="#FFFFFF"/>',
  google: () => '<path d="M76 52c0-2 0-4-1-6H50v11h14c-1 4-3 7-6 9v7h10c5-5 8-12 8-21z" fill="#4285F4"/><path d="M50 78c7 0 13-2 18-6l-10-7c-2 2-5 3-8 3-7 0-12-4-14-10H26v7c4 8 13 13 24 13z" fill="#34A853"/><path d="M36 58c-1-2-1-5 0-8v-7H26c-3 6-3 15 0 22z" fill="#FBBC05"/><path d="M50 32c4 0 7 1 10 4l8-8c-5-4-11-7-18-7-11 0-20 5-24 14l10 8c2-6 7-11 14-11z" fill="#EA4335"/>',
  chrome: () => '<circle cx="50" cy="50" r="30" fill="#DB4437"/><path d="M50 50L24 65a30 30 0 0026 15z" fill="#0F9D58"/><path d="M50 50l26 15a30 30 0 01-26 15z" fill="#0F9D58"/><path d="M50 50l26 15a30 30 0 000-30z" fill="#F4B400"/><circle cx="50" cy="50" r="13" fill="#FFFFFF"/><circle cx="50" cy="50" r="10" fill="#4285F4"/>',
  sparkle: () => '<path d="M50 14c3 20 16 33 36 36-20 3-33 16-36 36-3-20-16-33-36-36 20-3 33-16 36-36z" fill="#4C8BF5"/>',
  hex: (c = W) => `<circle cx="50" cy="50" r="24" fill="none" stroke="${c}" stroke-width="7"/><circle cx="50" cy="50" r="8" fill="${c}"/><circle cx="50" cy="20" r="6" fill="${c}"/><circle cx="76" cy="65" r="6" fill="${c}"/><circle cx="24" cy="65" r="6" fill="${c}"/>`,
  target: (c = W) => `<circle cx="50" cy="50" r="28" fill="none" stroke="${c}" stroke-width="7"/><circle cx="50" cy="50" r="10" fill="${c}"/>`,
  watch: (c = W) => `<rect x="34" y="16" width="32" height="68" rx="10" fill="${c}" opacity="0.5"/><circle cx="50" cy="50" r="20" fill="${c}"/><path d="M50 40v11l7 5" stroke="#455A64" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  pen: (c = W) => `<path d="M64 18l18 18-38 38-22 4 4-22z" fill="${c}"/>`,
  arrows: (c = W) => `<path d="M26 40h42l-10-10M74 60H32l10 10" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
  pad: (c = W) => `<rect x="16" y="34" width="68" height="36" rx="18" fill="${c}"/><path d="M32 52h14M39 45v14" stroke="#6A1B9A" stroke-width="5" stroke-linecap="round"/><circle cx="62" cy="47" r="4" fill="#6A1B9A"/><circle cx="70" cy="56" r="4" fill="#6A1B9A"/>`,
  brush: (c = W) => `<path d="M70 16l14 14-30 30-14-14z" fill="${c}"/><path d="M38 50c-10 0-16 8-16 16 0 6-4 10-8 12 14 4 30 0 34-14z" fill="${c}"/>`,
  translate: (c = W) => `<rect x="14" y="22" width="44" height="36" rx="8" fill="${c}"/><text x="36" y="48" font-size="22" font-weight="800" text-anchor="middle" fill="#00838F">가</text><rect x="44" y="44" width="42" height="34" rx="8" fill="${c}" opacity="0.85"/><text x="65" y="69" font-size="22" font-weight="800" text-anchor="middle" fill="#00838F">A</text>`,
  radio: (c = W) => `<rect x="16" y="36" width="68" height="42" rx="8" fill="${c}"/><path d="M28 36l40-16" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="36" cy="57" r="10" fill="#6D4C41"/><path d="M56 50h18M56 60h18" stroke="#6D4C41" stroke-width="5"/>`,
  keyboard: (c = W) => `<rect x="14" y="30" width="72" height="42" rx="8" fill="${c}"/><g fill="#7B1FA2">${[0, 1, 2, 3, 4].map((i) => `<rect x="${22 + i * 12}" y="38" width="8" height="8" rx="2"/>`).join('')}${[0, 1, 2, 3, 4].map((i) => `<rect x="${22 + i * 12}" y="50" width="8" height="8" rx="2"/>`).join('')}<rect x="30" y="62" width="40" height="6" rx="2"/></g>`,
  lock: (c = W) => `<rect x="26" y="44" width="48" height="36" rx="8" fill="${c}"/><path d="M36 44v-8a14 14 0 0128 0v8" fill="none" stroke="${c}" stroke-width="7"/>`,
  wheel: () => ['#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'].map((col, i, a) => { const a1 = (i / a.length) * Math.PI * 2; const a2 = ((i + 1) / a.length) * Math.PI * 2; const p = (r, t) => `${50 + r * Math.sin(t)} ${50 - r * Math.cos(t)}`; return `<path d="M${p(32, a1)} A32 32 0 0 1 ${p(32, a2)} L${p(18, a2)} A18 18 0 0 0 ${p(18, a1)}z" fill="${col}"/>`; }).join(''),
  face: (c = W) => `<circle cx="50" cy="50" r="28" fill="${c}"/><circle cx="40" cy="45" r="4" fill="#F57C00"/><circle cx="60" cy="45" r="4" fill="#F57C00"/><path d="M38 58q12 10 24 0" stroke="#F57C00" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  dots: (c = W) => [0, 1, 2].map((i) => `<circle cx="${30 + i * 20}" cy="50" r="7" fill="${c}"/>`).join(''),
  mail: () => '<rect x="16" y="26" width="68" height="50" rx="6" fill="#FFFFFF" stroke="#DADCE0" stroke-width="2"/><path d="M16 30l34 26 34-26" fill="none" stroke="#EA4335" stroke-width="7"/>',
  share: (c = W) => `<circle cx="66" cy="30" r="9" fill="${c}"/><circle cx="34" cy="50" r="9" fill="${c}"/><circle cx="66" cy="70" r="9" fill="${c}"/><path d="M42 46l16-10M42 54l16 10" stroke="${c}" stroke-width="5"/>`,
  car: () => '<path d="M22 58l6-18c2-5 6-8 11-8h22c5 0 9 3 11 8l6 18v16H22z" fill="#1F1F1F"/><rect x="30" y="38" width="40" height="14" rx="3" fill="#FFD43B"/><circle cx="34" cy="74" r="7" fill="#1F1F1F"/><circle cx="66" cy="74" r="7" fill="#1F1F1F"/><rect x="42" y="22" width="16" height="8" rx="2" fill="#1F1F1F"/>',
  train: (c = W) => `<rect x="26" y="18" width="48" height="56" rx="14" fill="${c}"/><rect x="33" y="28" width="34" height="18" rx="4" fill="#1E5BB8"/><circle cx="38" cy="60" r="4.5" fill="#1E5BB8"/><circle cx="62" cy="60" r="4.5" fill="#1E5BB8"/><path d="M34 74l-8 10M66 74l8 10" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,
  tv: (c = W) => `<rect x="14" y="26" width="72" height="44" rx="6" fill="${c}"/><path d="M38 80h24" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,
};

/** 앱 목록 */
export const APPS = {
  전화: { full: '전화', bg: '#25A55F', icon: G.phone(), src: '사용 설명서 60쪽' },
  연락처: { full: '연락처', bg: '#F57C00', icon: G.person(), src: '사용 설명서 62쪽' },
  메시지: { full: '삼성 메시지', bg: '#2F7DF6', icon: G.bubble(), src: '사용 설명서 63쪽' },
  카메라: { full: '카메라', bg: '#E8395B', icon: G.camera(), src: '사용 설명서 63쪽' },
  갤러리: { full: '삼성 갤러리', bg: '#EA4A7E', icon: G.flower(), src: '사용 설명서 68쪽' },
  설정: { full: '설정', bg: '#6B7178', icon: G.gear(), src: '사용 설명서 88쪽' },
  브라우저: { full: '삼성 브라우저(예전 이름: 삼성 인터넷)', bg: '#6F4BD8', icon: G.planet(), src: '사용 설명서 72쪽' },
  월렛: { full: '삼성 월렛', bg: '#1F2A44', icon: G.wallet(), src: '사용 설명서 73쪽' },
  헬스: { full: '삼성 헬스', bg: '#FFFFFF', icon: G.run(), src: '사용 설명서 74쪽' },
  노트: { full: '삼성 노트', bg: '#F26B1D', icon: G.note(), src: '사용 설명서 74쪽' },
  멤버스: { full: '삼성 멤버스', bg: '#2C6CF0', icon: G.letter('M'), src: '사용 설명서 75쪽' },
  '삼성 키즈': { full: '삼성 키즈', bg: '#FF9800', icon: G.face(), src: '사용 설명서 76쪽' },
  'Samsung Global Goals': { full: 'Samsung Global Goals(삼성 글로벌 골)', bg: '#FFFFFF', icon: G.wheel(), src: '사용 설명서 76쪽' },
  파인드: { full: '삼성 파인드', bg: '#12A08A', icon: G.target(), src: '사용 설명서 76쪽' },
  삼성닷컴: { full: '삼성닷컴', bg: '#1428A0', icon: G.letter('S'), src: '사용 설명서 76쪽' },
  스토어: { full: '갤럭시 스토어(Galaxy Store)', bg: '#E8395B', icon: G.bag(), src: '사용 설명서 77쪽' },
  웨어러블: { full: '갤럭시 웨어러블', bg: '#37474F', icon: G.watch(), src: '사용 설명서 77쪽' },
  펜업: { full: '펜업(PENUP)', bg: '#D6336C', icon: G.pen(), src: '사용 설명서 78쪽' },
  캘린더: { full: '삼성 캘린더', bg: '#2E9E50', icon: G.calendar(), src: '사용 설명서 78쪽' },
  라디오: { full: '라디오', bg: '#8D6E63', icon: G.radio(), src: '사용 설명서 78쪽' },
  '음성 녹음': { full: '음성 녹음', bg: '#E53935', icon: G.mic(), src: '사용 설명서 78쪽' },
  '내 파일': { full: '내 파일', bg: '#F9A825', icon: G.folder(), src: '사용 설명서 79쪽' },
  시계: { full: '시계', bg: '#3D5AFE', icon: G.clock(), src: '사용 설명서 79쪽' },
  계산기: { full: '계산기', bg: '#2E9E50', icon: G.calc(), src: '사용 설명서 79쪽' },
  날씨: { full: '날씨', bg: '#3D8BF2', icon: G.weather(), src: '사용 설명서 80쪽' },
  '게이밍 허브': { full: '게이밍 허브', bg: '#6A1B9A', icon: G.pad(), src: '사용 설명서 81쪽' },
  스마트싱스: { full: '스마트싱스(SmartThings)', bg: '#15BFAE', icon: G.hex(), src: '사용 설명서 82쪽' },
  '크리에이티브 스튜디오': { full: '크리에이티브 스튜디오', bg: '#8E44E8', icon: G.brush(), src: '사용 설명서 70쪽' },
  통역: { full: '통역(Galaxy AI)', bg: '#00838F', icon: G.translate(), src: '사용 설명서 49쪽' },
  '보안 폴더': { full: '보안 폴더', bg: '#263238', icon: G.lock(), src: '사용 설명서 102쪽' },
  'Smart Switch': { full: 'Smart Switch', bg: '#1E88E5', icon: G.arrows(), src: '사용 설명서 36쪽' },
  'Play 스토어': { full: 'Google Play 스토어', bg: '#FFFFFF', icon: G.play(), src: '사용 설명서 48쪽' },
  Google: { full: 'Google', bg: '#FFFFFF', icon: G.google(), src: '사용 설명서 83쪽' },
  Chrome: { full: 'Chrome', bg: '#FFFFFF', icon: G.chrome(), src: '사용 설명서 83쪽' },
  YouTube: { full: 'YouTube', bg: '#FFFFFF', icon: G.yt(), src: '사용 설명서 83쪽' },
  지도: { full: 'Google 지도', bg: '#FFFFFF', icon: G.pin(), src: '사용 설명서 83쪽' },
  Gmail: { full: 'Gmail', bg: '#FFFFFF', icon: G.mail(), src: '사용 설명서 83쪽' },
  Gemini: { full: 'Gemini', bg: '#FFFFFF', icon: G.sparkle(), src: '사용 설명서 83쪽' },
  ChatGPT: { full: 'ChatGPT(OpenAI)', bg: '#FFFFFF', icon: G.letter('AI', '#10A37F', 36), src: 'OpenAI(아이콘 그림은 연습용)' },
  카카오톡: { full: '카카오톡(KakaoTalk)', bg: '#FAE100', icon: G.kakao(), src: '카카오 고객센터' },
  '카카오 T': { full: '카카오 T(카카오택시 호출 앱)', bg: '#FFD43B', icon: G.car(), src: '카카오모빌리티(아이콘 그림은 연습용, 실제 앱 확인 필요)' },
  코레일톡: { full: '코레일톡(한국철도공사 승차권 예매 앱)', bg: '#1E5BB8', icon: G.train(), src: '한국철도공사(아이콘 그림은 연습용, 실제 앱 확인 필요)' },
  편한자판: { full: '편한자판', bg: '#7B1FA2', icon: G.keyboard(), src: '편한자판(아이콘 그림은 실제 앱 확인 필요)' },
  '퀵 셰어': { full: '퀵 셰어', bg: '#1A73E8', icon: G.share(), src: '사용 설명서 82쪽' },
  이메일: { full: '이메일', bg: '#E8453C', icon: G.mail(), src: '' },
  'Google TV': { full: 'Google TV', bg: '#FFFFFF', icon: G.tv('#4285F4'), src: '사용 설명서 83쪽' },
};
for (const [label, a] of Object.entries(APPS)) a.label = label;

// 예전 이름이나 다르게 부르는 이름 → 화면에 보이는 이름
export const ALIASES = {
  '플레이 스토어': 'Play 스토어', 'Google Play': 'Play 스토어',
  '갤럭시 스토어': '스토어', 'Galaxy Store': '스토어',
  '삼성 노트': '노트', '삼성 헬스': '헬스', '삼성 월렛': '월렛', '삼성 멤버스': '멤버스', '삼성 파인드': '파인드',
  '갤럭시 웨어러블': '웨어러블', 인터넷: '브라우저', '삼성 인터넷': '브라우저', '삼성 브라우저': '브라우저',
  'Google 지도': '지도',
};

export function appInfo(name) {
  return APPS[name] ?? APPS[ALIASES[name]] ?? null;
}

/** 앱 아이콘 SVG 조각: 갤럭시(One UI)처럼 둥근 사각형 */
export function appIconSvg(name, x, y, size) {
  const a = appInfo(name);
  const s = size / 100;
  const bg = a?.bg ?? '#78909C';
  const light = bg.toUpperCase() === '#FFFFFF';
  const body = a ? a.icon : G.letter(String(name).slice(0, 1));
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect width="100" height="100" rx="30" fill="${bg}"${light ? ' stroke="#D5D8DC" stroke-width="2"' : ''}/>${body}</g>`;
}

/** 카드 화면용: 독립된 아이콘 SVG */
export function appIconStandalone(name, size = 56) {
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true" focusable="false" font-family="Pretendard Variable, Pretendard, sans-serif">${appIconSvg(name, 0, 0, 100)}</svg>`;
}

/* ---------- 설정 메뉴 아이콘(One UI처럼 색 동그라미) ---------- */

const S = {
  wifi: '<path d="M22 44a40 40 0 0156 0M32 54a26 26 0 0136 0M42 64a12 12 0 0116 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><circle cx="50" cy="73" r="5" fill="#fff"/>',
  bell: '<path d="M30 66V48a20 20 0 0140 0v18l6 6H24z" fill="#fff"/><circle cx="50" cy="80" r="6" fill="#fff"/>',
  sun: `<circle cx="50" cy="50" r="13" fill="#fff"/>${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<rect x="47" y="18" width="6" height="12" rx="3" fill="#fff" transform="rotate(${a} 50 50)"/>`).join('')}`,
  battery: '<rect x="32" y="24" width="36" height="56" rx="6" fill="none" stroke="#fff" stroke-width="6"/><rect x="42" y="16" width="16" height="8" rx="2" fill="#fff"/><rect x="38" y="48" width="24" height="26" fill="#fff"/>',
  sound: '<path d="M22 42h14l16-14v44L36 58H22z" fill="#fff"/><path d="M62 38a16 16 0 010 24M70 30a28 28 0 010 40" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>',
  lock: G.lock(),
  shield: '<path d="M50 18l28 10v20c0 18-12 30-28 36-16-6-28-18-28-36V28z" fill="#fff"/>',
  pin: '<path d="M50 18c-13 0-23 10-23 23 0 17 23 41 23 41s23-24 23-41c0-13-10-23-23-23z" fill="#fff"/><circle cx="50" cy="41" r="8" fill="#43A047"/>',
  sos: G.letter('SOS', '#fff', 26),
  cloud: '<path d="M30 70h40c9 0 15-7 15-15s-6-14-14-14c-2-10-10-16-20-16S32 32 30 42c-8 1-14 7-14 14 0 8 6 14 14 14z" fill="#fff"/>',
  g: G.letter('G', '#fff', 46),
  star: '<path d="M50 18l9 20 22 2-17 15 5 22-19-12-19 12 5-22-17-15 22-2z" fill="#fff"/>',
  leaf: '<path d="M26 74C26 40 50 24 78 22c0 32-18 54-48 52z" fill="#fff"/>',
  apps: [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => `<rect x="${24 + c * 20}" y="${24 + r * 20}" width="12" height="12" rx="3" fill="#fff"/>`)).join(''),
  gear: '<circle cx="50" cy="50" r="18" fill="none" stroke="#fff" stroke-width="10" stroke-dasharray="9 5"/><circle cx="50" cy="50" r="8" fill="#fff"/>',
  access: '<circle cx="50" cy="24" r="8" fill="#fff"/><path d="M24 38h52M50 38v22l-12 22M50 60l12 22" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>',
  update: '<path d="M72 46a22 22 0 10-6 18" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M76 30v18H58" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>',
  info: '<circle cx="50" cy="30" r="6" fill="#fff"/><rect x="44" y="42" width="12" height="34" rx="4" fill="#fff"/>',
  person: G.person(),
  link: '<rect x="18" y="36" width="34" height="28" rx="6" fill="none" stroke="#fff" stroke-width="6"/><rect x="48" y="36" width="34" height="28" rx="6" fill="none" stroke="#fff" stroke-width="6"/>',
  palette: '<path d="M50 18a32 32 0 100 64c6 0 8-5 5-9-3-5 0-10 6-10h7c8 0 14-6 14-14 0-17-14-31-32-31z" fill="#fff"/><circle cx="36" cy="40" r="5" fill="#E91E63"/><circle cx="52" cy="32" r="5" fill="#2196F3"/><circle cx="66" cy="42" r="5" fill="#4CAF50"/>',
  home: '<path d="M22 48L50 24l28 24v30H58V60H42v18H22z" fill="#fff"/>',
  sparkle: '<path d="M50 16c3 20 14 31 34 34-20 3-31 14-34 34-3-20-14-31-34-34 20-3 31-14 34-34z" fill="#fff"/>',
  modes: '<circle cx="40" cy="50" r="20" fill="none" stroke="#fff" stroke-width="7"/><circle cx="64" cy="50" r="12" fill="#fff"/>',
  device: '<rect x="34" y="18" width="32" height="64" rx="7" fill="none" stroke="#fff" stroke-width="7"/><circle cx="50" cy="72" r="3" fill="#fff"/>',
  child: G.face('#fff'),
};

const SETTING_ICONS = {
  연결: ['#2F7DF6', S.wifi], '기기 간 연결': ['#2F7DF6', S.link], 'Galaxy AI': ['#7C4DFF', S.sparkle], '모드 및 루틴': ['#22A06B', S.modes],
  '소리 및 진동': ['#7C4DFF', S.sound], 알림: ['#F5524C', S.bell], 디스플레이: ['#2EA44F', S.sun], 배터리: ['#2EA44F', S.battery],
  '배경화면 및 스타일': ['#E8395B', S.palette], 테마: ['#7C4DFF', S.palette], '홈 화면': ['#2F7DF6', S.home], '잠금화면 및 AOD': ['#2F7DF6', S.lock],
  '보안 및 개인정보 보호': ['#2F7DF6', S.shield], 위치: ['#2EA44F', S.pin], '안전 및 긴급': ['#F5524C', S.sos], '계정 및 백업': ['#2F7DF6', S.cloud],
  'Google 서비스': ['#4285F4', S.g], '유용한 기능': ['#F59E0B', S.star], '디지털 웰빙': ['#22A06B', S.leaf], '자녀 보호 기능': ['#22A06B', S.child],
  '디바이스 케어': ['#14A0A0', S.device], 애플리케이션: ['#2F7DF6', S.apps], 일반: ['#6B7178', S.gear], 접근성: ['#2EA44F', S.access],
  '소프트웨어 업데이트': ['#7C4DFF', S.update], '폰 정보': ['#6B7178', S.info], '갤럭시에 로그인': ['#2F7DF6', S.person], '보증 및 케어': ['#14A0A0', S.shield],
};

/** 설정 첫 화면 메뉴 아이콘 SVG 조각(없으면 null) */
export function settingIconSvg(label, x, y, size) {
  const it = SETTING_ICONS[label];
  if (!it) return null;
  const s = size / 100;
  return `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="50" cy="50" r="50" fill="${it[0]}"/><g transform="translate(15 15) scale(0.7)">${it[1]}</g></g>`;
}
