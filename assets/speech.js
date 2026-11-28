/**
 * 음성 안내: 읽을 문장 만들기와 목소리 고르기
 *
 * - 단계는 ‘4단계 중 1단계’가 아니라 ‘첫 번째 단계’, ‘두 번째 단계’로 읽는다.
 * - 영어 이름·기호·전화번호는 소리 내어 읽기 좋은 말로 바꾼다(예: Wi-Fi → 와이파이, 010 → 공일공).
 * - 목소리는 기기에 있는 한국어 음성 중 선명한 고품질 음성(신경망·온라인·Google·삼성 음성)을 먼저 고른다.
 */

const ORDINAL = ['', '첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열', '열한', '열두', '열세', '열네', '열다섯', '열여섯', '열일곱', '열여덟', '열아홉', '스무'];

/** 1 → ‘첫 번째’, 2 → ‘두 번째’ */
export function ordinal(n) {
  return ORDINAL[n] ? `${ORDINAL[n]} 번째` : `${n}번째`;
}

/** 단계 이름: ‘첫 번째 단계’ (마지막이면 ‘마지막 단계’를 덧붙임) */
export function stepWords(idx, total) {
  const base = `${ordinal(idx + 1)} 단계`;
  return idx === total - 1 && total > 1 ? `${base}, 마지막 단계` : base;
}

const DIGIT = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];

// 긴 말부터 바꾼다
const WORDS = [
  ['Samsung Global Goals', '삼성 글로벌 골'], ['Galaxy AI', '갤럭시 에이아이'], ['Galaxy Store', '갤럭시 스토어'], ['Google Play', '구글 플레이'],
  ['Smart Switch', '스마트 스위치'], ['Smart View', '스마트 뷰'], ['SmartThings', '스마트싱스'], ['Play 스토어', '플레이 스토어'],
  ['Always On Display', '올웨이즈 온 디스플레이'], ['One UI', '원 유아이'], ['Android', '안드로이드'], ['TalkBack', '톡백'],
  ['YouTube', '유튜브'], ['Google', '구글'], ['Chrome', '크롬'], ['Gemini', '제미나이'], ['Gmail', '지메일'], ['Windows', '윈도우'],
  ['Wi-Fi', '와이파이'], ['eSIM', '이심'], ['USIM', '유심'], ['Nano-SIM', '나노 심'], ['SIM', '심'], ['NFC', '엔에프씨'], ['QR', '큐알'],
  ['PIN', '핀'], ['SOS', '에스오에스'], ['AOD', '에이오디'], ['DeX', '덱스'], ['PC', '피씨'], ['TV', '티브이'], ['AI', '에이아이'],
  ['S펜', '에스펜'], ['USB', '유에스비'], ['Ultra', '울트라'], ['Edge', '엣지'], ['Now brief', '나우 브리프'], ['UWB', '유더블유비'],
  ['음량(상)', '음량 올리기'], ['음량(하)', '음량 내리기'], ['한/영', '한영'], ['!#1', '느낌표 샵 일'], ['1x', '일 배'],
];

/** 소리 내어 읽기 좋은 문장으로 바꾸기 */
export function forSpeech(text) {
  let s = String(text ?? '');
  // 전화번호는 숫자를 하나씩: 010-0000-0000 → 공일공, 공공공공, 공공공공
  s = s.replace(/\b(\d{2,4})-(\d{3,4})-(\d{4})\b/g, (_, a, b, c) => [a, b, c].map((g) => [...g].map((d) => DIGIT[d]).join('')).join(', '));
  for (const [from, to] of WORDS) s = s.split(from).join(to);
  s = s
    .replace(/\((?:⌫|☆|↵|⌄|\+|AI)\)/g, '')
    .replace(/‘\+’/g, '더하기 모양')
    .replace(/[‘’“”]/g, '')
    .replace(/[⌫☆↵⌄→]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return s;
}

/** 읽을 문장 전체: ‘첫 번째 단계. 설정 앱을 누르세요. (보조 설명)’ */
export function speechText({ text, hint, idx, total }) {
  return [`${stepWords(idx, total)}.`, forSpeech(text), hint ? forSpeech(hint) : ''].filter(Boolean).join(' ');
}

/* ---------- 목소리 고르기 ---------- */

const GOOD = /(natural|neural|online|enhanced|premium|wavenet|studio|journey|고품질)/i;
const BRAND = [[/google/i, 40], [/samsung|smt/i, 35], [/microsoft/i, 20], [/(yuna|sunhi|injoon|hyunsu|seoyeon|jimin)/i, 25]];
const POOR = /(compact|eloquence|espeak|robot)/i;

/** 목소리 점수(높을수록 선명) */
export function voiceScore(v) {
  if (!v || !/^ko/i.test(v.lang ?? '')) return -1;
  let s = 10;
  const name = `${v.name ?? ''} ${v.voiceURI ?? ''}`;
  if (GOOD.test(name)) s += 50;
  for (const [re, pts] of BRAND) if (re.test(name)) { s += pts; break; }
  if (POOR.test(name)) s -= 30;
  if (v.localService === false) s += 5; // 온라인 음성이 대개 더 자연스럽다
  if (v.default) s += 2;
  return s;
}

/** 한국어 목소리를 선명한 순서로 */
export function koreanVoices(list) {
  return [...(list ?? [])].filter((v) => voiceScore(v) >= 0).sort((a, b) => voiceScore(b) - voiceScore(a));
}

/** 저장한 목소리(voiceURI)가 있으면 그것, 없으면 가장 선명한 목소리 */
export function pickVoice(list, savedUri) {
  const ko = koreanVoices(list);
  return ko.find((v) => v.voiceURI === savedUri) ?? ko[0] ?? null;
}

/** 목소리 이름을 짧고 알아보기 쉽게 */
export function voiceLabel(v) {
  const name = String(v.name ?? '').replace(/\s*\(.*?\)\s*/g, ' ').replace(/Microsoft|Google|Korean|Korea|한국의|\bko-KR\b/gi, '').trim();
  const kind = GOOD.test(`${v.name} ${v.voiceURI}`) ? '고품질' : v.localService === false ? '온라인' : '기기';
  const brand = /google/i.test(v.name) ? 'Google' : /samsung|smt/i.test(v.name) ? '삼성' : /microsoft/i.test(v.name) ? 'Microsoft' : '';
  return [brand, name || '한국어', `(${kind})`].filter(Boolean).join(' ');
}

export const SPEECH = { rate: 0.92, pitch: 1.0 };
