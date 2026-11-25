/**
 * 갤럭시 수업 데이터를 쓰는 도구.
 *
 * 카드 한 장 = 사용자가 할 동작 하나. 카드의 모양:
 *   {
 *     text:   '설정을 누르세요.'          안내 문장(동작 하나)
 *     hint:   '...'                       보조 설명(선택)
 *     note:   '...'                       기종·버전에 따라 다른 점(확인한 차이가 있는 카드에만)
 *     screen: { kind: 'list', ... }       연습용 그림(assets/screens.js)
 *     photo:  { src, alt, target:{x,y,w,h} }  실제 사진(있으면 그림 대신 사용, 좌표는 % 단위)
 *     alt:    '...'                       그림 설명(대체 텍스트)
 *     target: '디스플레이'                누를 곳 이름(그림 안 이름과 같아야 함)
 *     action: 'tap' | 'hold' | 'swipe-up' | 'swipe-down' | 'swipe-left' | 'swipe-right' | 'self'
 *     done:   'practice' | 'self'         완료 조건: 연습 화면에서 맞게 누르기 / 실제 휴대폰에서 직접 하고 ‘다음’
 *   }
 * 메뉴 이름은 삼성전자 갤럭시 S26 시리즈 사용 설명서(Android 17, Rev.1.0, 2026년 9월)를 기준으로 한다.
 */

import { appInfo } from '../../assets/apps.js?v=20261125.0759';

/* ---------- 출처 ---------- */

export const MANUAL_URL = 'https://downloadcenter.samsung.com/content/UM/202609/20260921172131084/SM-S94X_S93X_S92X_S91X_UG_17_Kor_Rev.1.0_260918.pdf';
export const BASE = {
  model: '갤럭시 S26 (SM-S942N)',
  software: 'One UI 9 · Android 17',
  manual: '갤럭시 S26 시리즈 사용 설명서 Rev.1.0 (2026년 9월)',
  checked: '2026-11-25',
};

/** 삼성전자 사용 설명서 쪽 링크 */
export const M = (page, topic) => ({ label: `삼성전자 사용 설명서 ${page}쪽 · ${topic}`, url: `${MANUAL_URL}#page=${page}` });
export const SRC = {
  support: { label: '삼성전자 갤럭시 S26 고객지원(매뉴얼·다운로드)', url: 'https://www.samsung.com/sec/support/model/SM-S942NZKEKOO/' },
  service: { label: '삼성전자서비스', url: 'https://www.samsungsvc.co.kr/' },
  smartswitch: { label: '삼성전자 Smart Switch 안내', url: 'https://www.samsung.com/sec/apps/smart-switch/' },
  find: { label: '삼성 파인드(내 디바이스 찾기) 웹 사이트', url: 'https://smartthingsfind.samsung.com/' },
  wallet: { label: '삼성 월렛 안내', url: 'https://www.samsung.com/sec/apps/samsung-wallet/' },
  kakao: { label: '카카오 고객센터(카카오톡 도움말)', url: 'https://cs.kakao.com/' },
  gmaps: { label: 'Google 지도 고객센터', url: 'https://support.google.com/maps/' },
  play: { label: 'Google Play 고객센터', url: 'https://support.google.com/googleplay/' },
  kisa: { label: '한국인터넷진흥원 118 상담(스미싱 신고)', url: 'https://www.kisa.or.kr/' },
};

/* ---------- 조사(을/를) ---------- */

const LATIN_FINAL = /(k|c|g|m|n|l|p|t|b|ck)$/i;
export function obj(word) {
  const w = String(word).replace(/[)\]’'"\s]+$/, '');
  const last = w.at(-1) ?? '';
  const code = last.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 ? '을' : '를';
  if (/[0136780]$/.test(last)) return '을';
  if (/[0-9]$/.test(last)) return '를';
  return LATIN_FINAL.test(w) ? '을' : '를';
}

/* ---------- 설정 메뉴(공식 설명서 기준 이름) ---------- */

export const MENUS = {
  설정: ['갤럭시에 로그인', '보증 및 케어', '연결', '기기 간 연결', 'Galaxy AI', '모드 및 루틴', '소리 및 진동', '알림', '디스플레이', '배터리', '배경화면 및 스타일', '테마', '홈 화면', '잠금화면 및 AOD', '보안 및 개인정보 보호', '위치', '안전 및 긴급', '계정 및 백업', 'Google 서비스', '유용한 기능', '디지털 웰빙', '자녀 보호 기능', '디바이스 케어', '애플리케이션', '일반', '접근성', '소프트웨어 업데이트', '폰 정보'],
  연결: ['Wi-Fi', '블루투스', 'NFC 및 비접촉 결제', '초광대역 (UWB)', '비행기 탑승 모드', 'SIM 관리자', '모바일 네트워크', '데이터 사용', '모바일 핫스팟 및 테더링', '해외 로밍', '기타 연결 설정'],
  '기기 간 연결': ['퀵 셰어', '뮤직 셰어', '오디오 방송', '버즈 자동 전환', '다른 기기에서도 전화/문자하기', '다른 기기에서 이어서 사용', '카메라 공유', '저장공간 공유', 'Windows와 연결', '멀티 컨트롤', '삼성 덱스', '스마트 뷰', '갤럭시 웨어러블', '스마트싱스', 'Android Auto'],
  '소리 및 진동': ['소리', '진동', '무음', '전화벨이 울릴 때 진동도 울림', '일정 시간 동안만 무음', '무음 시간', '벨소리', '알림 소리', '시스템 소리', '음량', '전화 진동', '알림 진동', '진동 세기'],
  디스플레이: ['라이트/다크', '밝기', '밝기 최적화', '더 밝게', '부드러운 모션 및 화면 전환', '편안하게 화면 보기', '화면 모드', '글자 크기와 스타일', '화면 크게/작게', '화면 해상도', '카메라 영역', '화면 자동 꺼짐 시간', '쉬운 사용 모드', 'Edge 패널', '내비게이션 바', '오동작 방지 필터'],
  배터리: ['일일 사용량', '절전 모드', '백그라운드 앱 사용 제한', '배터리 보호', '배터리 정보', '충전 설정', '무선 배터리 공유', '화면 밝기 자동 감소'],
  '잠금화면 및 AOD': ['화면 잠금 및 생체 인식', '잠금 해제 유지', '보안 잠금 상세설정', 'Always On Display', 'Now bar', '길게 눌러 편집', '로밍 시계', '연락처 정보'],
  '보안 및 개인정보 보호': ['잠금화면', '계정 보안', '분실 기기 보호', '앱 보안', '업데이트', '화면 잠금 및 생체 인식', '보안 위험 자동 차단', '내 기기 보안 상태', '기타 보안 설정', '지난 24시간 동안 사용된 권한', '제어 및 알림', '기타 개인정보 설정'],
  '화면 잠금 및 생체 인식': ['화면 잠금 방식', '얼굴 인식', '지문'],
  '기타 보안 설정': ['보안 Wi-Fi', '보안 폴더', '비밀번호, 패스키, 자동 입력'],
  '분실 기기 보호': ['내 디바이스 찾기', '도난당한 기기 보호'],
  위치: ['앱 권한', '위치 서비스', '최근 접근 기록'],
  '안전 및 긴급': ['의료정보', '긴급 연락처', '긴급 SOS', '긴급 상황 공유', '운전 중 알림 음소거', '긴급 위치 서비스', '재난문자', '지진 알림'],
  '계정 및 백업': ['계정 관리', '삼성 클라우드', 'Google 드라이브', 'Smart Switch', '데이터 보내기 또는 가져오기'],
  알림: ['앱 알림', '잠금화면 알림', '알림 팝업 스타일', '방해 금지', '고급 설정'],
  '측면 버튼': ['두 번 누르기', '카메라 빠르게 실행', '길게 누르기', '빅스비', '전원 끄기 메뉴'],
  '유용한 기능': ['빅스비', '실험실', '측면 버튼', '음성 호출', '멀티윈도우', '모션 및 제스처', '한 손 조작 모드', '화면 캡처 및 화면 녹화', '영상 효과', '게이밍 허브', '동영상 밝기', '게임 부스터 설정', '듀얼 메신저'],
  '디지털 웰빙': ['오늘의 기기 사용 시간', '많이 사용한 앱 카테고리', '앱 타이머', '사용시간 설정하기', '운전 중 사용 시간', '보행 중 사용 시간', '음량 모니터'],
  '디바이스 케어': ['지금 최적화', '배터리', '저장공간', '메모리', '앱 보호', '사용 유형별 성능 선택', '자동 최적화', '소프트웨어 업데이트', '자가 진단', '수리 모드'],
  일반: ['언어', '앱 언어', '언어팩', '날짜 및 시간', '삼성 키보드 설정', '키보드', '하드웨어 키보드', '마우스', '초기화', '맞춤형 서비스', '문의하기'],
  접근성: ['시각 보조', '청각 보조', '입력 및 동작', 'TalkBack', '접근성 바로가기', '설치된 앱'],
  '시각 보조': ['화면 모드', '고대비 테마', '고대비 글자', '고대비 키보드', '버튼을 강조해서 표시', '색상 반전', '색상 보정', '색상 필터', '애니메이션 줄이기', '더 어둡게', '확대', '돋보기', '텍스트 선명하게 보기', '글자 크기와 스타일', '화면 크게/작게', '텍스트 읽어주기'],
  '청각 보조': ['음성 자막 변환', '실시간 자막', '자막 설정', '불빛으로 알림', '보청기 지원', '소리 알림', '주변 소리 키우기', '음질 최적화', '모든 소리 끄기', '모노 오디오', '좌우 소리 균형'],
  '입력 및 동작': ['삼성 스위치 제어', '보조메뉴', 'Voice Access', '전화받기 및 끊기', '살짝 밀기를 한 번 누르기로 대체하기', '입력 제어', '액션 취하기 전 대기 시간', '길게 누르기 반응 시간', '누르기 시간', '반복 터치 무시'],
  'Galaxy AI': ['기기 내에서만 데이터 처리', 'Now nudge', '알림 하이라이트', '통화 어시스트', '글쓰기 어시스트', '통역', '노트 어시스트', '텍스트 변환 어시스트'],
  '모드 및 루틴': ['모드', '루틴'],
  '폰 정보': ['상태 정보', '법률 정보', '규제 정보', '소프트웨어 정보', '배터리 정보'],
  '소프트웨어 정보': ['One UI 버전', 'Android 버전', '기저대역 버전', '빌드번호'],
  애플리케이션: ['기본 앱 선택', '삼성 앱 설정', '카메라', '갤러리', '메시지', '카카오톡', '삼성 키즈'],
  '모바일 핫스팟 및 테더링': ['모바일 핫스팟', 'USB 테더링', '블루투스 테더링'],
  초기화: ['기기 전체 초기화', '모든 설정 초기화', 'Wi-Fi 및 블루투스 설정 초기화', '접근성 설정 초기화'],
  '홈 화면 설정': ['홈 화면 구성', '홈 화면 배치', '홈 화면에 앱스 버튼 추가', '홈 화면 잠금'],
};

/** 긴 목록에서 대상이 보이도록 일부만 잘라 보여준다 */
export function windowOf(items, target, size = 7) {
  const i = items.findIndex((it) => (typeof it === 'string' ? it : it.t) === target);
  if (i < 0) return items.slice(0, size);
  const start = Math.max(0, Math.min(i - 2, items.length - size));
  return items.slice(start, start + size);
}

/* ---------- 카드 만드는 도구 ---------- */

function card(o) {
  const c = { ...o };
  if (!c.action) c.action = c.target ? 'tap' : 'self';
  c.done = c.action === 'self' ? 'self' : 'practice';
  return c;
}

/** 앱 열기: ‘설정’ 앱을 누르세요. */
export function app(name, extra = {}) {
  const info = appInfo(name);
  if (!info) throw new Error(`앱 목록(assets/apps.js)에 없는 앱: ${name}`);
  const label = info.label;
  return card({
    text: `‘${label}’ 앱을 누르세요.`,
    hint: '홈 화면에 없으면 화면을 위로 밀어 앱스 화면에서 찾으세요.',
    screen: { kind: 'home', apps: true, find: label },
    target: label,
    app: label,
    alt: `앱스 화면. ${info.full !== label ? `${info.full} 앱인 ` : ''}‘${label}’ 앱 아이콘에 빨간 테두리가 있습니다.`,
    ...extra,
  });
}

/** 목록 화면에서 한 항목 누르기 */
export function tap(label, screen, extra = {}) {
  return card({
    text: `‘${label}’${obj(label)} 누르세요.`,
    screen,
    target: label,
    alt: `${screen.title ?? '앱'} 화면. ‘${label}’에 빨간 테두리가 있습니다.`,
    ...extra,
  });
}

/** 설정 메뉴 한 단계: 화면 제목(부모)과 누를 항목 */
export function menu(parent, label, extra = {}) {
  const items = (MENUS[parent] ?? [label]).map((t) => (extra.sw && t === label ? { t, sw: false } : t));
  const screen = { kind: 'list', title: parent, back: parent !== '설정', items: windowOf(items, label), ...(extra.screen ?? {}) };
  if (parent === '설정') screen.actions = ['검색'];
  const { screen: _s, sw: _w, ...rest } = extra;
  return tap(label, screen, { hint: '안 보이면 화면을 위로 밀어 찾으세요.', ...rest });
}

/** 설정 경로를 카드 여러 장으로: path('디스플레이', '글자 크기와 스타일') */
export function path(...labels) {
  const cards = [app('설정')];
  let parent = '설정';
  for (const label of labels) {
    cards.push(menu(parent, label));
    parent = label;
  }
  return cards;
}

/** 스위치 켜기/끄기 */
export function toggle(screenTitle, label, { on = true, items, ...extra } = {}) {
  const list = (items ?? MENUS[screenTitle] ?? [label]).map((t) => (typeof t === 'string' && t === label ? { t, sw: !on } : t));
  const shown = list.some((it) => (typeof it === 'string' ? it : it.t) === label) ? list : [{ t: label, sw: !on }, ...list];
  return card({
    text: `‘${label}’ 스위치를 눌러 ${on ? '켜세요' : '끄세요'}.`,
    screen: { kind: 'list', title: screenTitle, back: true, items: windowOf(shown, label) },
    target: `${label} 스위치`,
    alt: `${screenTitle} 화면. ‘${label}’ 오른쪽 스위치에 빨간 테두리가 있습니다.`,
    ...extra,
  });
}

/** 실제 휴대폰에서 직접 하는 동작(연습 없이 ‘다음’) */
export function self(text, { icon = '✓', lines = [], color, ...extra } = {}) {
  return card({
    text,
    screen: extra.screen ?? { kind: 'info', icon, lines: lines.length ? lines : [], color },
    alt: extra.alt ?? `설명 그림. ${lines.join(' ') || text}`,
    action: 'self',
    ...extra,
  });
}

/** 확인하는 카드(눈으로 보고 ‘다음’) */
export function look(text, screen, extra = {}) {
  return card({ text, screen, alt: extra.alt ?? `${screen.title ?? '화면'} 그림.`, action: 'self', ...extra });
}

/** 손으로 밀기 */
export function swipe(dir, text, screen, extra = {}) {
  const names = { up: '위로', down: '아래로', left: '왼쪽으로', right: '오른쪽으로' };
  return card({
    text,
    screen,
    target: extra.target ?? '화면',
    action: `swipe-${dir}`,
    alt: extra.alt ?? `${screen.title ?? '휴대폰'} 화면. 화면을 ${names[dir]} 미는 화살표가 있습니다.`,
    ...extra,
  });
}

/** 길게 누르기 */
export function hold(label, screen, extra = {}) {
  return card({
    text: `‘${label}’${obj(label)} 길게 누르세요.`,
    screen,
    target: label,
    action: 'hold',
    alt: `${screen.title ?? '휴대폰'} 화면. ‘${label}’에 길게 누르라는 표시가 있습니다.`,
    ...extra,
  });
}

/** 수업 만들기 */
export function lesson(id, title, { q = [], cards, src = [], models, check, intro, caution, ...rest }) {
  const list = cards.map((c) => ({ ...c }));
  if (caution) list[0].note = list[0].note ? `${caution} ${list[0].note}` : caution;
  return { id, title, q, cards: list, src: src.length ? src : [SRC.support], models, check, intro, caution, ...rest };
}

/* ---------- 자주 쓰는 화면 ---------- */

export const QUICK = { kind: 'shade', mode: 'quick' };
export const NOTI = { kind: 'shade', mode: 'noti' };
export const HOME = { kind: 'home' };
export const APPS = { kind: 'home', apps: true };
export const PHONE_TABS = ['키패드', '최근기록', '연락처'];
export const SIDE = { kind: 'side' };
export const PRACTICE_ONLY = '실제로 설정이 바뀌거나 결과가 생기는 수업이에요. 먼저 연습 화면으로 끝까지 해 본 뒤 휴대폰에서 하세요.';
/** 설정 화면에서 뒤로 가기 */
export const back = (title, items) => tap('뒤로가기 버튼', { kind: 'list', title, back: true, items: items ?? (MENUS[title] ?? []).slice(0, 8) }, { text: '아래쪽 뒤로가기 버튼을 누르세요.', hint: '바로 전 화면으로 돌아가요.' });
/** 홈 버튼 누르기 */
export const goHome = (screen = { kind: 'list', title: '설정', back: false, items: MENUS.설정.slice(2, 10) }) => tap('홈 버튼', screen, { text: '아래쪽 가운데 홈 버튼을 누르세요.', hint: '처음 화면(홈 화면)으로 돌아가요.' });

/** 빠른 설정창 열기 카드 */
export const openQuick = () => swipe('down', '화면 오른쪽 위를 아래로 미세요.', { kind: 'home' }, {
  target: '화면 위쪽',
  hint: '빠른 설정창이 열려요. 왼쪽 위를 밀면 알림창이 열려요.',
  alt: '홈 화면. 화면 오른쪽 위에서 아래로 미는 화살표가 있습니다.',
});

/** 알림창 열기 카드 */
export const openNoti = () => swipe('down', '화면 왼쪽 위를 아래로 미세요.', { kind: 'home' }, {
  target: '화면 위쪽',
  hint: '알림창이 열려요.',
  alt: '홈 화면. 화면 왼쪽 위에서 아래로 미는 화살표가 있습니다.',
});
