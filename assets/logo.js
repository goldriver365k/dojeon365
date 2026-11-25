/**
 * ‘도전, 디지털세상’ 로고 (평면 2D SVG)
 * - 상징: 파랑 둥근 사각형 안에 흰 휴대폰과 노란 반짝임
 * - 글자: 짙은 남색 ‘도전,’ + 파랑 ‘디지털세상’
 * 색은 디자인 시스템의 주 색(#2563E2)·글자색(#1E2A5A)을 쓴다. 다크 모드에서는 글자색이 밝아진다.
 */

/** 상징 그림(정사각형 100×100) */
export function emblemSvgBody() {
  return `
  <rect x="4" y="4" width="92" height="92" rx="26" fill="#2563E2"/>
  <rect x="33" y="20" width="34" height="60" rx="8" fill="#FFFFFF"/>
  <rect x="38" y="28" width="24" height="38" rx="3" fill="#2563E2"/>
  <circle cx="50" cy="72.5" r="2.6" fill="#2563E2"/>
  <path d="M50 35l2.8 6.7 6.7 2.8-6.7 2.8L50 54l-2.8-6.7-6.7-2.8 6.7-2.8z" fill="#FFD54F"/>
  <path d="M77 16l1.7 4 4 1.7-4 1.7L77 27.4l-1.7-4-4-1.7 4-1.7z" fill="#FFFFFF"/>`;
}

/** 머리줄용 로고: 상징 + ‘도전, 디지털세상’(한 줄) */
export function logoSvg({ height = 44 } = {}) {
  return `<svg class="logo" viewBox="0 0 470 100" height="${height}" role="img" aria-label="도전, 디지털세상" xmlns="http://www.w3.org/2000/svg" font-family="Pretendard Variable, Pretendard, Noto Sans KR, sans-serif">
  <g>${emblemSvgBody()}</g>
  <text x="112" y="66" font-size="44" font-weight="900" letter-spacing="-0.5"><tspan class="logo__a" fill="#1E2A5A">도전, </tspan><tspan class="logo__b" fill="#2563E2">디지털세상</tspan></text>
</svg>`;
}
