// 기종·One UI 버전 정보와 수업 지원 여부 판단.
// 원칙: 공식 자료로 확인한 것만 '지원'/'지원하지 않음'으로 표시하고, 나머지는 모두 '확인 필요'.
// covered: 이 사이트 수업의 기준 설명서(갤럭시 S26 시리즈 사용 설명서, SM-S94X/S93X/S92X/S91X, Android 17)가 다루는 기종.

export const SERIES = [
  { id: 's', name: '갤럭시 S 시리즈', en: 'Galaxy S series' },
  { id: 'a', name: '갤럭시 A 시리즈', en: 'Galaxy A series' },
  { id: 'flip', name: '갤럭시 Z 플립', en: 'Galaxy Z Flip' },
  { id: 'fold', name: '갤럭시 Z 폴드', en: 'Galaxy Z Fold' },
  { id: 'm', name: '갤럭시 M 시리즈', en: 'Galaxy M series' },
  { id: 'f', name: '갤럭시 F 시리즈', en: 'Galaxy F series' },
  { id: 'note', name: '갤럭시 노트', en: 'Galaxy Note' },
  { id: 'xcover', name: '갤럭시 엑스커버', en: 'Galaxy XCover' },
  { id: 'etc', name: '기타·목록에 없음', en: 'Other / not listed' },
];

// 기종명은 삼성전자가 발표한 이름. code 는 확인한 모델 번호 앞자리만 적는다.
const S = (id, name, extra = {}) => ({ id, series: 's', name, ...extra });
export const MODELS = [
  S('s26', '갤럭시 S26', { code: 'SM-S942', covered: true }),
  S('s26p', '갤럭시 S26+', { covered: true }),
  S('s26u', '갤럭시 S26 Ultra', { covered: true, spen: true }),
  S('s25', '갤럭시 S25', { code: 'SM-S931', covered: true }),
  S('s25p', '갤럭시 S25+', { code: 'SM-S936', covered: true }),
  S('s25u', '갤럭시 S25 Ultra', { code: 'SM-S938', covered: true, spen: true }),
  S('s24', '갤럭시 S24', { code: 'SM-S921', covered: true }),
  S('s24p', '갤럭시 S24+', { code: 'SM-S926', covered: true }),
  S('s24u', '갤럭시 S24 Ultra', { code: 'SM-S928', covered: true, spen: true }),
  S('s23', '갤럭시 S23', { code: 'SM-S911', covered: true }),
  S('s23p', '갤럭시 S23+', { code: 'SM-S916', covered: true }),
  S('s23u', '갤럭시 S23 Ultra', { code: 'SM-S918', covered: true, spen: true }),
  S('s-old', '그 밖의 S 시리즈(S22 이전, FE 등)'),
  ...['A56', 'A36', 'A26', 'A16', 'A55', 'A35', 'A25', 'A15'].map((n) => ({ id: n.toLowerCase(), series: 'a', name: `갤럭시 ${n}` })),
  { id: 'a-old', series: 'a', name: '그 밖의 A 시리즈' },
  ...['7', '6', '5', '4', '3'].map((n) => ({ id: `flip${n}`, series: 'flip', name: `갤럭시 Z 플립${n}` })),
  ...['7', '6', '5', '4', '3'].map((n) => ({ id: `fold${n}`, series: 'fold', name: `갤럭시 Z 폴드${n}` })),
  { id: 'm-any', series: 'm', name: '갤럭시 M 시리즈 기종' },
  { id: 'f-any', series: 'f', name: '갤럭시 F 시리즈 기종' },
  { id: 'note20u', series: 'note', name: '갤럭시 노트20 Ultra' },
  { id: 'note20', series: 'note', name: '갤럭시 노트20' },
  { id: 'note-old', series: 'note', name: '그 밖의 노트 기종' },
  { id: 'xcover7', series: 'xcover', name: '갤럭시 엑스커버7' },
  { id: 'xcover-old', series: 'xcover', name: '그 밖의 엑스커버 기종' },
  { id: 'etc', series: 'etc', name: '목록에 없는 갤럭시 기종' },
];

// 정식 배포된 One UI 버전(3 이상). 베타는 넣지 않는다.
export const ONEUI = [
  { v: '9.0', android: '17' },
  { v: '8.5', android: '16' },
  { v: '8.0', android: '16' },
  { v: '7.0', android: '15' },
  { v: '6.1', android: '14' },
  { v: '6.0', android: '14' },
  { v: '5.1', android: '13' },
  { v: '5.0', android: '13' },
  { v: '4.1', android: '12' },
  { v: '4.0', android: '12' },
  { v: '3.1', android: '11' },
  { v: '3.0', android: '11' },
];
export const BASE_ONEUI = '9.0';

export const modelOf = (id) => MODELS.find((m) => m.id === id) ?? null;
export const seriesOf = (id) => SERIES.find((s) => s.id === id) ?? null;
const num = (v) => Number.parseFloat(v);

/** 기기 설명 한 줄(선택이 없으면 null) */
export function deviceLabel(d) {
  if (!d || (!d.model && !d.series && !d.oneui)) return null;
  const m = modelOf(d.model);
  const s = seriesOf(d.series);
  const name = m ? m.name : s ? `${s.name}(기종 모름)` : '기종 모름';
  return `${name} · ${d.oneui ? `One UI ${d.oneui}` : 'One UI 버전 모름'}`;
}

/**
 * 수업이 고른 기기에서 되는지.
 * 반환: null(기기를 안 골랐거나 공통 사용법) 또는 { level: 'ok'|'diff'|'no'|'check', text }
 *  ok    설명서 기준으로 확인됨
 *  diff  되는 기능이지만 메뉴 이름·위치가 다를 수 있음(확인 필요)
 *  no    공식 자료 기준으로 이 기기/버전에서 지원하지 않음
 *  check 확인 필요(자료 없음)
 */
export function supportFor(meta = {}, d) {
  if (!d || (!d.model && !d.series && !d.oneui)) return null;
  const m = modelOf(d.model);
  const sup = meta.support ?? {};
  if (sup.minOneUI && d.oneui && num(d.oneui) < num(sup.minOneUI)) {
    return { level: 'no', text: `One UI ${sup.minOneUI} 이상에서 쓸 수 있어요` };
  }
  if (sup.only && m?.covered) {
    if (!sup.only.includes(m.id)) return { level: 'no', text: sup.onlyText ?? '이 기종에서는 지원하지 않아요' };
  }
  if (!m?.covered) return { level: 'check', text: '이 기종은 확인 필요' };
  if (d.oneui && d.oneui !== BASE_ONEUI) return { level: 'diff', text: '메뉴 위치가 다를 수 있어요(확인 필요)' };
  return { level: 'ok', text: '설명서로 확인됨' };
}

export const SUPPORT_LABEL = { ok: '지원', diff: '확인 필요', no: '지원하지 않음', check: '확인 필요' };
