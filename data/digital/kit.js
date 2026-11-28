/** 생활 디지털 연습장 수업을 쓰는 도구 */
import { tap, self, look, swipe, hold } from '../galaxy/helpers.js?v=20261128.1248';

export { tap, self, look, swipe, hold };

export const PRACTICE_NOTE = '공통 순서를 담은 연습 화면이에요. 실제 앱·기계는 화면 모양과 버튼 이름이 조금 다를 수 있어요.';

/** 공공기관·공식 안내(이 작업 환경에서 열리는지 확인하지 못한 곳은 unverified) */
export const SRC = {
  fss: { label: '금융감독원 금융소비자 정보', url: 'https://www.fss.or.kr/' },
  scam: { label: '보이스피싱 지킴이 통합신고(경찰청·금융위원회)', url: 'https://www.counterscam112.go.kr/', unverified: true },
  police: { label: '경찰청(사이버 범죄 신고 112)', url: 'https://www.police.go.kr/', unverified: true },
  kisa: { label: '한국인터넷진흥원 118 상담', url: 'https://www.kisa.or.kr/' },
  kfb: { label: '전국은행연합회 금융 정보', url: 'https://www.kfb.or.kr/' },
  gov: { label: '정부24(민원 서비스)', url: 'https://www.gov.kr/', unverified: true },
  nhis: { label: '국민건강보험공단', url: 'https://www.nhis.or.kr/', unverified: true },
  hira: { label: '건강보험심사평가원(병원·약국 찾기)', url: 'https://www.hira.or.kr/' },
  egen: { label: '응급의료포털 E-Gen(문 연 병원·약국)', url: 'https://www.e-gen.or.kr/', unverified: true },
  bokjiro: { label: '복지로', url: 'https://www.bokjiro.go.kr/', unverified: true },
  nps: { label: '국민연금공단', url: 'https://www.nps.or.kr/', unverified: true },
  korail: { label: '한국철도공사(코레일)', url: 'https://www.letskorail.com/', unverified: true },
  srt: { label: 'SRT 예매', url: 'https://etk.srail.kr/', unverified: true },
  kobus: { label: '고속버스 통합예매', url: 'https://www.kobus.co.kr/', unverified: true },
  txbus: { label: '시외버스 통합예매', url: 'https://txbus.t-money.co.kr/', unverified: true },
  giro: { label: '인터넷지로(공과금 납부)', url: 'https://www.giro.or.kr/' },
  kepco: { label: '한국전력공사', url: 'https://www.kepco.co.kr/' },
  kca: { label: '한국소비자원', url: 'https://www.kca.go.kr/', unverified: true },
  ftc: { label: '공정거래위원회(전자상거래 소비자 보호)', url: 'https://www.ftc.go.kr/', unverified: true },
  kobis: { label: '영화관 입장권 통합전산망', url: 'https://www.kobis.or.kr/' },
  kopis: { label: '공연예술통합전산망', url: 'https://www.kopis.or.kr/' },
  nl: { label: '국립중앙도서관', url: 'https://www.nl.go.kr/', unverified: true },
  nia: { label: '한국지능정보사회진흥원(디지털 포용)', url: 'https://www.nia.or.kr/' },
};

/** 수업: 연습 화면 기준을 메타 정보에 표시 */
export function L(id, title, q, cards, src = [SRC.nia], extra = {}) {
  const list = cards.map((c) => ({ ...c }));
  if (extra.caution) list[0].note = list[0].note ? `${extra.caution} ${list[0].note}` : extra.caution;
  return {
    id, title, q, cards: list, src,
    model: '공통 연습 화면(특정 회사·기관의 앱이 아님)',
    software: '해당 없음 — 실제 앱은 화면이 다를 수 있어요',
    check: PRACTICE_NOTE,
    ...extra,
  };
}

/** 화면 위 버튼/항목 누르기(문장을 직접 줌) */
export const T = (label, screen, text, hint, extra = {}) => tap(label, screen, { text, ...(hint ? { hint } : {}), ...extra });
/** 실제로 하는 일(연습 그림 대신 설명) */
export const S = (text, icon, ...lines) => self(text, { icon, lines });
/** 눈으로 확인 */
export const LK = (text, screen, hint) => look(text, screen, hint ? { hint } : {});

/* 자주 쓰는 연습 화면 */
export const app = (title, o = {}) => ({ kind: 'app', title, back: false, ...o });
export const list = (title, items, o = {}) => ({ kind: 'list', title, items, ...o });
export const tiles = (title, tilesArr, o = {}) => ({ kind: 'tiles', title, tiles: tilesArr, ...o });
export const pad = (title, label, value, o = {}) => ({ kind: 'numpad', title, label, value, ...o });
export const sheet = (title, buttons) => ({ kind: 'dialog', style: 'sheet', title, buttons });
export const pop = (title, message, buttons) => ({ kind: 'dialog', title, message, buttons });
export const kb = (title, text, o = {}) => ({ kind: 'keyboard', title, text, ...o });
export const seats = (title, o = {}) => ({ kind: 'seats', title, ...o });
/** 서 있는 키오스크 기계 그림 */
export const kiosk = (o = {}) => ({ kind: 'kiosk', ...o });
/** 출력된 주문 번호 영수증 */
export const receipt = (o = {}) => ({ kind: 'receipt', ...o });

/**
 * 키오스크 카드 결제 단계(공통): 결제 방법 → 카드 넣기 → 카드 빼기 → 영수증 받기 → 주문 번호 확인
 * o: { amount, number, store, items, total, label, title, color, noReceiptNumber }
 */
export function kioskPay(o = {}) {
  const amount = o.amount ?? '6,800원';
  const base = { screenTitle: o.title ?? '결제하기', amount: `결제 금액 ${amount}`, color: o.color };
  const cards = [
    T('신용·체크카드', kiosk({ ...base, message: '결제 방법을 고르세요', buttons: ['신용·체크카드', '간편결제', '쿠폰'] }), '키오스크 화면에서 ‘신용·체크카드’를 누르세요.', '연습 화면이에요. 실제 결제는 일어나지 않아요.'),
    T('카드 투입구', kiosk({ ...base, state: 'insert' }), '카드를 아래쪽 카드 넣는 곳에 꽂으세요.', 'IC칩(금색 네모)이 있는 쪽을 먼저 넣어요. 결제가 끝날 때까지 빼지 마세요.'),
    T('꽂힌 카드', kiosk({ ...base, state: 'remove' }), '‘카드를 빼 주세요’가 나오면 카드를 빼세요.', '카드를 꼭 챙기세요.'),
  ];
  if (o.noReceiptNumber) return cards;
  cards.push(
    T('영수증', kiosk({ ...base, state: 'print', number: o.number ?? '123' }), '영수증 나오는 곳에서 영수증을 꺼내세요.', '주문 번호가 적혀 있어요. 버리지 마세요.'),
    look('영수증의 주문 번호를 확인하세요.', receipt({ number: o.number ?? '123', store: o.store, items: o.items, total: o.total ?? amount, label: o.label }), { hint: '화면이나 방송으로 이 번호가 나오면 받으러 가요.', alt: `출력된 영수증 그림. 주문 번호 ${o.number ?? '123'}가 크게 적혀 있습니다.` }),
  );
  return cards;
}

