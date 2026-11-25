/**
 * ‘도전, 디지털세상’ 3D 로고 (SVG)
 * - 상징: 입체 둥근 사각형(옆면 두께·윗면 광택·바닥 그림자) 안에 휴대폰과 반짝임
 * - 글자: 남색 두께를 여러 겹 쌓아 튀어나와 보이게 하고, 앞면은 밝은 그라데이션
 * 색은 디자인 시스템의 주 색(#2563E2)과 보라(#6728CD)를 쓴다.
 */

let uid = 0;

/** 상징 그림(정사각형 100×100) */
export function emblemSvgBody(p) {
  return `
  <defs>
    <linearGradient id="${p}-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4C8DFF"/><stop offset="0.55" stop-color="#2563E2"/><stop offset="1" stop-color="#6728CD"/></linearGradient>
    <linearGradient id="${p}-side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1C3FA8"/><stop offset="1" stop-color="#2A1A6E"/></linearGradient>
    <linearGradient id="${p}-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.75"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>
    <linearGradient id="${p}-phone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DDE7FF"/></linearGradient>
    <radialGradient id="${p}-shadow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#1E2A5A" stop-opacity="0.35"/><stop offset="1" stop-color="#1E2A5A" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="52" cy="94" rx="40" ry="6" fill="url(#${p}-shadow)"/>
  <rect x="8" y="12" width="84" height="80" rx="24" fill="url(#${p}-side)"/>
  <rect x="8" y="4" width="84" height="80" rx="24" fill="url(#${p}-face)"/>
  <path d="M22 8h56a20 20 0 0 1 20 20v2c-20-8-58-8-90 6V28A20 20 0 0 1 22 8z" fill="url(#${p}-gloss)" transform="translate(-4 -2) scale(0.98)"/>
  <rect x="35" y="21" width="30" height="50" rx="7" fill="#16206A" opacity="0.35" transform="translate(2 3)"/>
  <rect x="35" y="21" width="30" height="50" rx="7" fill="url(#${p}-phone)"/>
  <rect x="39" y="28" width="22" height="34" rx="3" fill="#2563E2"/>
  <circle cx="50" cy="66.5" r="2" fill="#2563E2"/>
  <path d="M50 33l2.6 6.4 6.4 2.6-6.4 2.6L50 51l-2.6-6.4L41 42l6.4-2.6z" fill="#FFD54F"/>
  <path d="M72 18l1.6 3.8 3.8 1.6-3.8 1.6L72 28.8l-1.6-3.8-3.8-1.6 3.8-1.6z" fill="#FFFFFF" opacity="0.9"/>`;
}

/** 머리줄용 로고: 상징 + ‘도전, 디지털세상’ 입체 글자(한 줄) */
export function logoSvg({ height = 44 } = {}) {
  const p = `lg${(uid += 1)}`;
  const depth = [3.5, 2.5, 1.5];
  const word = (x, y, text, size, extra = '') => [
    ...depth.map((d) => `<text x="${x + d * 0.5}" y="${y + d}" font-size="${size}" font-weight="900" fill="${d > 2 ? '#101A52' : '#22308F'}"${extra}>${text}</text>`),
    `<text x="${x}" y="${y}" font-size="${size}" font-weight="900" fill="url(#${p}-text)" stroke="#FFFFFF" stroke-width="1.6" paint-order="stroke"${extra}>${text}</text>`,
    `<text x="${x}" y="${y}" font-size="${size}" font-weight="900" fill="url(#${p}-shine)"${extra}>${text}</text>`,
  ].join('');
  return `<svg class="logo" viewBox="0 0 470 100" height="${height}" role="img" aria-label="도전, 디지털세상" xmlns="http://www.w3.org/2000/svg" font-family="Pretendard Variable, Pretendard, Noto Sans KR, sans-serif">
  <defs>
    <linearGradient id="${p}-text" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6AA6FF"/><stop offset="0.55" stop-color="#2F6BEA"/><stop offset="1" stop-color="#6A3BD6"/></linearGradient>
    <linearGradient id="${p}-shine" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.55"/><stop offset="0.45" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>
  </defs>
  <g>${emblemSvgBody(p)}</g>
  ${word(106, 66, '도전, 디지털세상', 44)}
</svg>`;
}
