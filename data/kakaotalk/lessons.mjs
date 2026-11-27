// 카카오톡 사용법 162개 — 단계 카드 원고(코드로 그리는 재현 화면 사용)
// - 화면은 assets/kakao-screens.js(카카오톡) 또는 assets/screens.js(갤럭시 홈·Play 스토어)로 그린다.
// - 모든 이름·대화·번호는 가상이다. 메뉴 이름과 위치는 갤럭시 안드로이드 카카오톡을 기준으로 재현했으며,
//   실제 앱과 대조·검수하기 전까지 ‘검수 필요’ 상태로 두고 공개하지 않는다.
// 단계 형식: [설명, 화면, 누를 곳, { hint, voice, alt }]
// scripts/kakaotalk-fill.mjs 가 이 원고를 data/kakaotalk/catalog.json 에 넣는다(관리자가 고친 수업은 덮어쓰지 않음).

/** 받침에 맞춰 을/를 (영어·기호로 끝나면 ‘을’) */
const josa = (w) => { const c = String(w).trim().slice(-1).charCodeAt(0) - 0xac00; return c >= 0 && c <= 11171 && c % 28 === 0 ? '를' : '을'; };
const tab = (t, x = {}) => ({ v: 'tab', tab: t, ...x });
const room = (x = {}) => ({ v: 'room', name: '딸 수진', ...x });
const list = (title, rows, x = {}) => ({ v: 'list', title, rows: rows.map((r) => (typeof r === 'string' ? { label: r } : r)), ...x });
const sheet = (base, items, x = {}) => ({ v: 'sheet', base, items, ...x });
const dialog = (base, title, text, buttons = ['취소', '확인'], x = {}) => ({ v: 'dialog', base, title, text, buttons, ...x });
const form = (title, x = {}) => ({ v: 'form', title, ...x });
const info = (title, lines, warn = false) => ({ v: 'info', title, lines, warn });
const G = (screen) => ({ galaxy: screen }); // 갤럭시 화면(홈·Play 스토어)

const MSGS = [{ date: '2026년 11월 27일 목요일' }, { text: '엄마 저녁 드셨어요?' }, { me: true, text: '응 먹었어. 너는?', read: '' }];
const FAMILY = { name: '가족 단톡방', count: 4, from: '아들 민호', msgs: [{ text: '토요일에 다 같이 점심 어때요?' }, { me: true, text: '좋아요!', read: '2' }] };
const SETTINGS = ['카카오계정', '개인/보안', '알림', '친구', '채팅', '화면', '테마', '전화', '기타'];
const SUB = {
  카카오계정: ['계정 정보', '비밀번호 변경', '2단계 인증', '로그인 기기 관리', '연결된 서비스 관리'],
  '개인/보안': ['카카오계정', '화면 잠금', '기기 연결 관리', '개인정보 관리', '프로필 관리'],
  알림: [{ label: '알림', toggle: true }, { label: '메시지 미리보기', toggle: true }, '알림음', '진동', '방해금지 시간대'],
  친구: [{ label: '자동 친구 추가', toggle: true }, { label: '친구 추천 허용', toggle: true }, '숨김친구 관리', '차단친구 관리', '친구 목록 새로고침'],
  채팅: ['대화 백업', '채팅방 배경화면', '사진 화질', '동영상 화질', '채팅방 목록 정렬'],
  화면: ['글자크기', '화면 모드', '언어', '애니메이션 효과'],
  테마: [{ label: '기본 테마', check: true }, { label: '다크 테마', check: false }, { label: '테마 더보기' }],
};
/** 설정으로 들어가는 공통 단계: 더보기 → 설정(톱니바퀴) → 전체 설정 → (대분류) */
const toSettings = (group) => [
  ['카카오톡에서 아래쪽 ‘더보기’를 누르세요.', tab('friends'), '더보기 탭'],
  ['오른쪽 위 톱니바퀴 ‘설정’을 누르세요.', tab('more'), '설정'],
  ['‘전체 설정’을 누르세요.', sheet(tab('more'), ['편집', '전체 설정']), '전체 설정'],
  ...(group ? [[`‘${group}’${josa(group)} 누르세요.`, list('설정', SETTINGS), group]] : []),
];
const sub = (group, rows) => list(group, rows ?? SUB[group]);
/** 채팅방 열기 공통 단계 */
const openRoom = (name = '딸 수진') => [
  ['카카오톡에서 아래쪽 ‘채팅’을 누르세요.', tab('friends'), '채팅 탭'],
  [`‘${name}’ 채팅방을 누르세요.`, tab('chats'), name],
];
const plusMenu = (r = room({ msgs: MSGS })) => ['채팅창 왼쪽 아래 ‘＋’를 누르세요.', r, '＋ 버튼'];
const friendProfile = (name = '딸 수진') => [
  ['아래쪽 ‘친구’ 탭에서 친구 이름을 누르세요.', tab('friends'), name],
];

export const LESSONS = {
  /* ---------- 01. 설치 및 시작 ---------- */
  'k01-install': { menuPath: 'Play 스토어 › 카카오톡 검색 › 설치', steps: [
    ['홈 화면에서 ‘Play 스토어’를 누르세요.', G({ kind: 'home', apps: true, find: 'Play 스토어' }), 'Play 스토어'],
    ['위쪽 검색창에 ‘카카오톡’을 적고 검색 버튼을 누르세요.', G({ kind: 'keyboard', title: '검색', text: '카카오톡' }), null],
    ['카카오톡의 ‘설치’를 누르세요.', G({ kind: 'list', title: '검색 결과', items: [{ t: '카카오톡', s: 'Kakao Corp.', btn: '설치' }] }), '카카오톡 설치', { hint: '만든 곳이 ‘Kakao Corp.’인지 확인하세요. 비슷한 가짜 앱이 있을 수 있어요.' }],
    ['설치가 끝나면 ‘열기’를 누르세요.', G({ kind: 'list', title: '카카오톡', items: [{ t: '카카오톡', s: '설치됨', btn: '열기' }] }), '카카오톡 열기'],
  ] },
  'k01-open': { menuPath: '홈 화면 › 카카오톡', steps: [
    ['홈 화면에서 노란색 ‘카카오톡’ 아이콘을 찾으세요.', G({ kind: 'home', apps: true, find: '카카오톡' }), '카카오톡'],
    ['아이콘을 한 번 누르면 카카오톡이 열려요.', tab('friends'), null, { hint: '처음 화면은 ‘친구’ 탭이에요.' }],
  ] },
  'k01-account-create': { menuPath: '카카오톡 첫 화면 › 새로운 카카오계정 만들기', steps: [
    ['카카오톡 첫 화면에서 ‘새로운 카카오계정 만들기’를 누르세요.', form('', { heading: '카카오톡에 오신 것을 환영해요', buttons: ['카카오계정으로 로그인', '새로운 카카오계정 만들기'], back: false }), '새로운 카카오계정 만들기'],
    ['약관을 읽고 ‘모두 동의합니다’를 고른 뒤 ‘동의하고 계속 진행합니다’를 누르세요.', form('약관 동의', { checks: [{ label: '모두 동의합니다', on: true }, { label: '(필수) 이용약관', on: true }, { label: '(필수) 개인정보 수집 및 이용', on: true }], button: '동의하고 계속 진행합니다' }), '동의하고 계속 진행합니다'],
    ['내 휴대폰 번호를 넣고 ‘확인’을 누르세요.', form('전화번호 입력', { fields: [{ label: '휴대폰 번호', value: '010-0000-0000', focus: true }], button: '확인', lead: '연습용 가상 번호예요. 실제로는 내 번호를 넣어요.' }), '확인'],
    ['문자로 온 인증번호를 넣고, 이름과 비밀번호를 정하면 계정이 만들어져요.', form('프로필 설정', { fields: [{ label: '이름', value: '김영희' }, { label: '비밀번호', value: 'password', masked: true }], button: '확인' }), '확인', { hint: '비밀번호는 다른 사람에게 알려 주지 마세요.' }],
  ] },
  'k01-phone-verify': { menuPath: '전화번호 입력 › 인증번호 입력', steps: [
    ['휴대폰 번호를 넣고 ‘확인’을 누르세요.', form('전화번호 인증', { fields: [{ label: '휴대폰 번호', value: '010-0000-0000', focus: true }], button: '확인' }), '확인'],
    ['문자 메시지로 온 숫자 6자리를 확인하세요.', info('인증번호는 나만 봐요', ['문자로 온 숫자 6자리를 카카오톡 화면에 넣어요.', '이 숫자를 전화나 문자로 묻는 사람에게는 절대 알려 주지 마세요.'], true), null],
    ['인증번호 칸에 숫자를 넣고 ‘확인’을 누르세요.', form('인증번호 입력', { fields: [{ label: '인증번호', value: '●●●●●●', focus: true, action: '재전송' }], button: '확인', lead: '인증번호가 안 오면 ‘재전송’을 누르세요.' }), '확인'],
  ] },
  'k01-login': { menuPath: '카카오톡 첫 화면 › 카카오계정으로 로그인', steps: [
    ['첫 화면에서 ‘카카오계정으로 로그인’을 누르세요.', form('', { heading: '카카오톡에 오신 것을 환영해요', buttons: ['카카오계정으로 로그인', '새로운 카카오계정 만들기'], back: false }), '카카오계정으로 로그인'],
    ['계정(이메일 또는 전화번호)과 비밀번호를 넣으세요.', form('로그인', { fields: [{ label: '카카오계정', value: 'younghee@example.com' }, { label: '비밀번호', value: 'password', masked: true, focus: true }], button: '로그인' }), '로그인'],
    ['인증이 끝나면 친구 목록이 나와요.', tab('friends'), null],
  ] },
  'k01-update': { menuPath: 'Play 스토어 › 카카오톡 › 업데이트', steps: [
    ['‘Play 스토어’를 열고 ‘카카오톡’을 검색하세요.', G({ kind: 'home', apps: true, find: 'Play 스토어' }), 'Play 스토어'],
    ['‘업데이트’ 버튼이 보이면 누르세요.', G({ kind: 'list', title: '카카오톡', items: [{ t: '카카오톡', s: '업데이트 가능', btn: '업데이트' }] }), '카카오톡 업데이트', { hint: '‘열기’만 보이면 이미 최신 버전이에요.' }],
  ] },
  'k01-version': { menuPath: '더보기 › 설정 › 전체 설정 › 기타 › 앱 버전', steps: [
    ...toSettings('기타'),
    ['‘앱 버전’에서 지금 버전을 확인하세요.', sub('기타', [{ label: '앱 버전', value: '최신 버전' }, '공지사항', '도움말', '오픈소스 라이선스']), '앱 버전'],
  ] },
  'k01-home-screen': { menuPath: '아래 탭: 친구 · 채팅 · 지금 · 쇼핑 · 더보기', steps: [
    ['아래쪽 다섯 개 탭으로 화면을 바꿔요. ‘친구’에는 친구 목록이 있어요.', tab('friends'), '친구 탭'],
    ['‘채팅’에는 주고받은 대화방이 모여 있어요.', tab('chats'), '채팅 탭'],
    ['‘지금’에는 오픈채팅과 볼거리가 있어요.', tab('now'), '지금 탭'],
    ['‘더보기’에는 선물하기·지갑·설정이 있어요.', tab('more'), '더보기 탭'],
  ] },

  /* ---------- 02. 친구 ---------- */
  'k02-add-phone': { menuPath: '친구 › 친구 추가 › 연락처로 추가', steps: [
    ['‘친구’ 탭 오른쪽 위 ‘친구 추가’를 누르세요.', tab('friends'), '친구 추가'],
    ['‘연락처로 추가’를 누르세요.', sheet(tab('friends'), ['QR코드', '연락처로 추가', 'ID로 추가', '추천친구']), '연락처로 추가'],
    ['친구 이름과 전화번호를 넣고 ‘친구 추가’를 누르세요.', form('연락처로 친구 추가', { fields: [{ label: '이름', value: '박민수' }, { label: '전화번호', value: '010-0000-1234', focus: true }], button: '친구 추가' }), '친구 추가', { hint: '상대가 카카오톡을 쓰고 있어야 추가돼요.' }],
  ] },
  'k02-add-contacts': { menuPath: '더보기 › 설정 › 전체 설정 › 친구 › 자동 친구 추가', steps: [
    ['휴대폰 연락처에 저장된 사람은 자동으로 친구가 될 수 있어요.', info('연락처로 친구 추가', ['휴대폰 ‘연락처’ 앱에 번호를 저장해요.', '카카오톡 ‘자동 친구 추가’가 켜져 있으면 친구 목록에 나타나요.']), null],
    ...toSettings('친구'),
    ['‘자동 친구 추가’ 스위치를 켜세요.', sub('친구'), '자동 친구 추가 스위치'],
  ] },
  'k02-add-id': { menuPath: '친구 › 친구 추가 › ID로 추가', steps: [
    ['‘친구’ 탭 오른쪽 위 ‘친구 추가’를 누르세요.', tab('friends'), '친구 추가'],
    ['‘ID로 추가’를 누르세요.', sheet(tab('friends'), ['QR코드', '연락처로 추가', 'ID로 추가', '추천친구']), 'ID로 추가'],
    ['친구에게 받은 카카오톡 ID를 넣고 검색하세요.', { v: 'search', query: 'minsu_park', results: [{ label: '박민수', sub: 'ID: minsu_park', mark: '추가' }] }, '추가'],
  ] },
  'k02-add-qr': { menuPath: '친구 › 친구 추가 › QR코드', steps: [
    ['‘친구’ 탭 오른쪽 위 ‘친구 추가’를 누르세요.', tab('friends'), '친구 추가'],
    ['‘QR코드’를 누르세요.', sheet(tab('friends'), ['QR코드', '연락처로 추가', 'ID로 추가', '추천친구']), 'QR코드'],
    ['친구 휴대폰의 QR코드를 네모 칸 안에 비추세요.', { v: 'qr', scan: true, title: 'QR코드 스캔', buttons: ['내 QR코드'] }, '비추는 곳'],
    ['친구 이름이 나오면 ‘친구 추가’를 누르세요.', { v: 'profile', name: '박민수', status: '반갑습니다', buttons: ['친구 추가'] }, '친구 추가'],
  ] },
  'k02-my-qr': { menuPath: '친구 › 친구 추가 › QR코드 › 내 QR코드', steps: [
    ['‘친구’ 탭 오른쪽 위 ‘친구 추가’를 누르세요.', tab('friends'), '친구 추가'],
    ['‘QR코드’를 누르세요.', sheet(tab('friends'), ['QR코드', '연락처로 추가', 'ID로 추가', '추천친구']), 'QR코드'],
    ['아래 ‘내 QR코드’를 누르세요.', { v: 'qr', scan: true, title: 'QR코드 스캔', buttons: ['내 QR코드'] }, '내 QR코드'],
    ['친구가 이 QR코드를 비추면 나를 친구로 추가할 수 있어요.', { v: 'qr', title: '내 QR코드', caption: '김영희' }, 'QR코드'],
  ] },
  'k02-search-friend': { menuPath: '친구 › 검색', steps: [
    ['‘친구’ 탭 오른쪽 위 ‘검색’(돋보기)을 누르세요.', tab('friends'), '검색'],
    ['찾을 친구 이름을 적으세요.', { v: 'search', query: '민수', results: [{ label: '박민수', sub: '친구' }] }, '박민수'],
  ] },
  'k02-rename-friend': { menuPath: '친구 › 이름 길게 누르기 › 이름 변경', steps: [
    ['친구 목록에서 이름을 바꿀 친구를 길게 누르세요.', tab('friends'), '박민수', { hint: '손가락을 1초쯤 떼지 마세요.' }],
    ['‘이름 변경’을 누르세요.', sheet(tab('friends'), ['즐겨찾기에 추가', '이름 변경', '숨김', '차단'], { title: '박민수' }), '이름 변경'],
    ['알아보기 쉬운 이름으로 고치고 ‘저장’을 누르세요.', form('이름 변경', { fields: [{ label: '친구 이름', value: '민수 (동창)', focus: true }], button: '저장', lead: '내 휴대폰에서만 바뀌어요. 친구는 몰라요.' }), '저장'],
  ] },
  'k02-favorite': { menuPath: '친구 › 이름 길게 누르기 › 즐겨찾기에 추가', steps: [
    ['자주 연락하는 친구 이름을 길게 누르세요.', tab('friends'), '딸 수진'],
    ['‘즐겨찾기에 추가’를 누르세요.', sheet(tab('friends'), ['즐겨찾기에 추가', '이름 변경', '숨김', '차단'], { title: '딸 수진' }), '즐겨찾기에 추가'],
    ['친구 목록 위쪽 ‘즐겨찾기’에 나타나요.', tab('friends', { favorites: ['딸 수진'], friends: ['김철수', '박민수', '이순자'] }), '딸 수진'],
  ] },
  'k02-hide': { menuPath: '친구 › 이름 길게 누르기 › 숨김', steps: [
    ['숨길 친구 이름을 길게 누르세요.', tab('friends'), '최영호'],
    ['‘숨김’을 누르세요.', sheet(tab('friends'), ['즐겨찾기에 추가', '이름 변경', '숨김', '차단'], { title: '최영호' }), '숨김'],
    ['목록에서만 안 보여요. 숨김을 풀려면 설정 › 친구 › ‘숨김친구 관리’로 가요.', sub('친구'), '숨김친구 관리'],
  ] },
  'k02-block': { menuPath: '친구 › 이름 길게 누르기 › 차단', steps: [
    ['차단할 사람 이름을 길게 누르세요.', tab('friends'), '최영호'],
    ['‘차단’을 누르세요.', sheet(tab('friends'), ['즐겨찾기에 추가', '이름 변경', '숨김', { label: '차단', danger: true }], { title: '최영호' }), '차단'],
    ['안내를 읽고 ‘확인’을 누르세요.', dialog(tab('friends'), '차단하기', '차단하면 이 사람이 보내는 메시지를 받지 않아요.', ['취소', '확인']), '확인'],
  ] },
  'k02-unblock': { menuPath: '더보기 › 설정 › 전체 설정 › 친구 › 차단친구 관리', steps: [
    ...toSettings('친구'),
    ['‘차단친구 관리’를 누르세요.', sub('친구'), '차단친구 관리'],
    ['풀어 줄 사람 옆 ‘관리’를 누르고 ‘차단 해제’를 고르세요.', { v: 'search', placeholder: '차단친구 관리', results: [{ label: '최영호', sub: '차단함', mark: '관리' }] }, '관리'],
  ] },
  'k02-auto-add': { menuPath: '더보기 › 설정 › 전체 설정 › 친구 › 자동 친구 추가', steps: [
    ...toSettings('친구'),
    ['‘자동 친구 추가’ 스위치로 켜거나 끄세요.', sub('친구'), '자동 친구 추가 스위치', { hint: '켜면 휴대폰 연락처에 저장한 사람이 친구 목록에 들어와요.' }],
  ] },

  /* ---------- 03. 채팅 ---------- */
  'k03-start-chat': { menuPath: '친구 › 친구 이름 › 1:1 채팅', steps: [
    ...friendProfile(),
    ['‘1:1 채팅’을 누르세요.', { v: 'profile', name: '딸 수진', status: '행복한 하루' }, '1:1 채팅'],
    ['채팅방이 열려요. 아래 입력창에 글을 써요.', room({ msgs: [] }), '입력창'],
  ] },
  'k03-send-text': { menuPath: '채팅방 › 입력창 › 전송', steps: [
    ...openRoom(),
    ['아래 입력창을 누르세요.', room({ msgs: MSGS }), '입력창'],
    ['보낼 말을 적고 노란 ‘전송’ 버튼을 누르세요.', room({ msgs: MSGS, input: '조심히 들어가' }), '전송 버튼'],
  ] },
  'k03-voice-typing': { menuPath: '채팅방 › 입력창 › 키보드 마이크', steps: [
    ...openRoom(),
    ['입력창을 누르고, 키보드의 마이크 단추를 누르세요.', G({ kind: 'keyboard', title: '메시지 입력', text: '', mic: true }), null, { hint: '키보드 모양은 휴대폰마다 조금 달라요.' }],
    ['천천히 말하면 글자로 바뀌어요. ‘전송’을 누르세요.', room({ msgs: MSGS, input: '오늘 병원 잘 다녀왔어' }), '전송 버튼'],
  ] },
  'k03-read': { menuPath: '채팅 › 숫자가 있는 채팅방', steps: [
    ['‘채팅’ 탭에서 빨간 숫자가 있는 방이 새 메시지가 온 방이에요.', tab('chats'), '딸 수진'],
    ['채팅방을 누르면 받은 메시지를 볼 수 있어요.', room({ msgs: MSGS }), '받은 메시지'],
  ] },
  'k03-reply': { menuPath: '채팅방 › 말풍선 길게 누르기 › 답장', steps: [
    ...openRoom(),
    ['답장할 말풍선을 길게 누르세요.', room({ msgs: MSGS }), '받은 메시지'],
    ['‘답장’을 누르세요.', room({ msgs: MSGS, menu: ['답장', '공감', '복사', '전달', '삭제'] }), '답장'],
    ['답장 내용을 적고 ‘전송’을 누르세요.', room({ msgs: MSGS, input: '응, 먹었단다' }), '전송 버튼'],
  ] },
  'k03-copy': { menuPath: '채팅방 › 말풍선 길게 누르기 › 복사', steps: [
    ...openRoom(),
    ['복사할 말풍선을 길게 누르세요.', room({ msgs: MSGS }), '받은 메시지'],
    ['‘복사’를 누르세요.', room({ msgs: MSGS, menu: ['답장', '공감', '복사', '전달', '삭제'] }), '복사'],
  ] },
  'k03-paste': { menuPath: '채팅방 › 입력창 길게 누르기 › 붙여넣기', steps: [
    ...openRoom(),
    ['입력창을 길게 누르세요.', room({ msgs: MSGS }), '입력창'],
    ['‘붙여넣기’를 누르세요.', sheet(room({ msgs: MSGS }), ['붙여넣기', '클립보드']), '붙여넣기'],
    ['붙인 글을 확인하고 ‘전송’을 누르세요.', room({ msgs: MSGS, input: '엄마 저녁 드셨어요?' }), '전송 버튼'],
  ] },
  'k03-forward': { menuPath: '채팅방 › 말풍선 길게 누르기 › 전달', steps: [
    ...openRoom(),
    ['전달할 말풍선을 길게 누르세요.', room({ msgs: MSGS }), '받은 메시지'],
    ['‘전달’을 누르세요.', room({ msgs: MSGS, menu: ['답장', '공감', '복사', '전달', '삭제'] }), '전달'],
    ['보낼 사람을 고르고 ‘확인’을 누르세요.', { v: 'pick', title: '공유 대상 선택', items: [{ name: '김철수', checked: true }, { name: '박민수' }, { name: '가족 단톡방' }] }, '확인'],
  ] },
  'k03-delete-sent': { menuPath: '채팅방 › 내 말풍선 길게 누르기 › 삭제', steps: [
    ...openRoom(),
    ['지울 내 말풍선을 길게 누르세요.', room({ msgs: MSGS }), '내 메시지'],
    ['‘삭제’를 누르세요.', room({ msgs: MSGS, menu: ['답장', '복사', '전달', '공지', '삭제'] }), '삭제'],
    ['‘모든 대화 상대에게서 삭제’를 누르세요.', sheet(room({ msgs: MSGS }), ['모든 대화 상대에게서 삭제', '나에게서 삭제'], { title: '메시지 삭제' }), '모든 대화 상대에게서 삭제', { hint: '보낸 지 오래된 메시지는 내 화면에서만 지울 수 있어요.' }],
  ] },
  'k03-read-count': { menuPath: '채팅방 › 말풍선 옆 노란 숫자', steps: [
    ['내 말풍선 옆 노란 숫자 ‘1’은 아직 읽지 않은 사람 수예요.', room({ msgs: [{ text: '병원 다녀왔어요?' }, { me: true, text: '응 잘 다녀왔어', read: '1' }] }), '내 메시지'],
    ['상대가 읽으면 숫자가 사라져요. 단체방에서는 안 읽은 사람 수만큼 보여요.', room({ ...FAMILY }), '내 메시지'],
  ] },
  'k03-search-in-chat': { menuPath: '채팅방 › 오른쪽 위 검색', steps: [
    ...openRoom(),
    ['채팅방 오른쪽 위 돋보기를 누르세요.', room({ msgs: MSGS }), '채팅방 검색'],
    ['찾을 낱말을 적으면 그 말이 있는 곳으로 가요.', { v: 'search', query: '병원', results: [{ label: '딸 수진', sub: '병원 몇 시에 가세요?' }] }, '딸 수진'],
  ] },
  'k03-send-link': { menuPath: '채팅방 › 입력창 › 붙여넣기 › 전송', steps: [
    ...openRoom(),
    ['입력창을 길게 누르세요.', room({ msgs: MSGS }), '입력창'],
    ['‘붙여넣기’를 누르세요.', sheet(room({ msgs: MSGS }), ['붙여넣기', '클립보드']), '붙여넣기'],
    ['주소가 들어갔는지 보고 ‘전송’을 누르세요.', room({ msgs: MSGS, input: 'https://example.com/news' }), '전송 버튼', { hint: '모르는 사람이 보낸 주소는 누르지 마세요.' }],
    ['주소가 미리보기와 함께 보내져요.', room({ msgs: [...MSGS, { me: true, link: '오늘의 날씨 소식', url: 'example.com' }] }), null],
  ] },
  'k03-send-contact': { menuPath: '채팅방 › ＋ › 연락처', steps: [
    ...openRoom(),
    plusMenu(),
    ['‘연락처’를 누르세요.', room({ msgs: MSGS, plus: true }), '연락처'],
    ['보낼 사람을 고르고 ‘확인’을 누르세요.', { v: 'pick', title: '연락처 선택', items: [{ name: '김철수', checked: true }, { name: '박민수' }] }, '확인'],
  ] },
  'k03-schedule': { menuPath: '채팅방 › ＋ › 예약메시지', steps: [
    ...openRoom(),
    plusMenu(),
    ['‘예약메시지’를 누르세요.', room({ msgs: MSGS, plus: true, items: ['앨범', '카메라', '선물하기', '통화하기', '송금', '파일', '연락처', '지도', '예약메시지', '일정', '투표', '캡처'] }), '예약메시지', { hint: '메뉴가 안 보이면 ＋ 메뉴를 옆으로 밀어 보세요.' }],
    ['보낼 날짜·시간과 내용을 정하고 ‘확인’을 누르세요.', form('예약메시지', { fields: [{ label: '보낼 날짜', value: '11월 28일 (금)' }, { label: '보낼 시간', value: '오전 8:00' }, { label: '메시지', value: '생일 축하해!', focus: true }], button: '확인' }), '확인'],
  ] },
  'k03-leave-chat': { menuPath: '채팅 › 채팅방 길게 누르기 › 나가기', steps: [
    ['‘채팅’ 탭에서 나갈 채팅방을 길게 누르세요.', tab('chats'), '김철수'],
    ['‘나가기’를 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '김철수' }), '나가기'],
    ['안내를 읽고 ‘나가기’를 누르세요.', dialog(tab('chats'), '채팅방 나가기', '나가면 대화 내용이 모두 삭제되고 목록에서 사라져요.', ['취소', '나가기'], { danger: true }), '나가기'],
  ] },

  /* ---------- 04. 사진·동영상·파일 ---------- */
  'k04-photo-one': { menuPath: '채팅방 › ＋ › 앨범 › 사진 선택 › 전송', steps: [
    ...openRoom(),
    plusMenu(),
    ['‘앨범’을 누르세요.', room({ msgs: MSGS, plus: true }), '앨범'],
    ['보낼 사진을 한 장 누르세요.', { v: 'gallery', selected: [] }, '사진 1'],
    ['‘전송’을 누르세요.', { v: 'gallery', selected: [0] }, '전송'],
    ['채팅방에 사진이 올라갔는지 확인하세요.', room({ msgs: [...MSGS, { me: true, photo: true, read: '1' }] }), '내 메시지'],
  ] },
  'k04-photo-many': { menuPath: '채팅방 › ＋ › 앨범 › 여러 장 선택 › 전송', steps: [
    ...openRoom(), plusMenu(),
    ['‘앨범’을 누르세요.', room({ msgs: MSGS, plus: true }), '앨범'],
    ['보낼 사진을 차례로 누르세요. 고른 순서대로 숫자가 붙어요.', { v: 'gallery', selected: [0, 4] }, '사진 8'],
    ['‘전송’을 누르세요.', { v: 'gallery', selected: [0, 4, 7] }, '전송'],
  ] },
  'k04-photo-bundle': { menuPath: '앨범 › 여러 장 선택 › 묶어보내기', steps: [
    ...openRoom(), plusMenu(),
    ['‘앨범’에서 사진을 여러 장 고르세요.', { v: 'gallery', selected: [0, 1, 4] }, '사진 3'],
    ['아래 ‘묶어보내기’에 체크하세요.', { v: 'gallery', selected: [0, 1, 4] }, '묶어보내기'],
    ['‘전송’을 누르면 한 묶음으로 보내져요.', { v: 'gallery', selected: [0, 1, 4], bundle: true }, '전송'],
  ] },
  'k04-photo-original': { menuPath: '앨범 › 사진 선택 › 원본', steps: [
    ...openRoom(), plusMenu(),
    ['‘앨범’에서 보낼 사진을 고르세요.', { v: 'gallery', selected: [2] }, '사진 3'],
    ['아래 ‘원본’에 체크하면 화질을 줄이지 않고 보내요.', { v: 'gallery', selected: [2] }, '원본', { hint: '원본은 데이터를 더 많이 써요. 와이파이에서 보내면 좋아요.' }],
    ['‘전송’을 누르세요.', { v: 'gallery', selected: [2], original: true }, '전송'],
  ] },
  'k04-photo-camera': { menuPath: '채팅방 › ＋ › 카메라', steps: [
    ...openRoom(), plusMenu(),
    ['‘카메라’를 누르세요.', room({ msgs: MSGS, plus: true }), '카메라'],
    ['사진을 찍으세요.', G({ kind: 'camera' }), null],
    ['찍은 사진을 확인하고 ‘전송’을 누르세요.', { v: 'viewer', name: '촬영한 사진', buttons: ['다시 찍기', '전송'] }, '전송 버튼'],
  ] },
  'k04-photo-save': { menuPath: '채팅방 › 사진 누르기 › 저장', steps: [
    ...openRoom(),
    ['받은 사진을 누르세요.', room({ msgs: [{ text: '손주 사진이에요' }, { photo: true, label: '받은 사진' }] }), '받은 사진'],
    ['아래 ‘저장’을 누르면 갤러리에 저장돼요.', { v: 'viewer' }, '저장 버튼'],
  ] },
  'k04-photo-zoom': { menuPath: '채팅방 › 사진 누르기 › 두 손가락으로 벌리기', steps: [
    ...openRoom(),
    ['받은 사진을 누르세요.', room({ msgs: [{ text: '손주 사진이에요' }, { photo: true, label: '받은 사진' }] }), '받은 사진'],
    ['두 손가락을 사진 위에 대고 벌리면 크게 보여요.', { v: 'viewer', zoom: true }, '사진'],
  ] },
  'k04-video-send': { menuPath: '채팅방 › ＋ › 앨범 › 동영상 선택 › 전송', steps: [
    ...openRoom(), plusMenu(),
    ['‘앨범’을 누르세요.', room({ msgs: MSGS, plus: true }), '앨범'],
    ['보낼 동영상(오른쪽 아래에 시간이 적힌 것)을 누르세요.', { v: 'gallery', selected: [], video: true }, '사진 2'],
    ['‘전송’을 누르세요.', { v: 'gallery', selected: [1], video: true }, '전송'],
  ] },
  'k04-video-save': { menuPath: '채팅방 › 동영상 누르기 › 저장', steps: [
    ...openRoom(),
    ['받은 동영상을 누르세요.', room({ msgs: [{ photo: true, video: true, label: '받은 동영상' }] }), '받은 동영상'],
    ['아래 ‘저장’을 누르세요.', { v: 'viewer', video: true }, '저장 버튼'],
  ] },
  'k04-file-send': { menuPath: '채팅방 › ＋ › 파일', steps: [
    ...openRoom(), plusMenu(),
    ['‘파일’을 누르세요.', room({ msgs: MSGS, plus: true }), '파일'],
    ['보낼 파일을 고르면 채팅방에 보내져요.', room({ msgs: [...MSGS, { me: true, file: '병원 예약 안내.pdf', size: '240KB' }] }), '내 메시지'],
  ] },
  'k04-file-open': { menuPath: '채팅방 › 파일 누르기', steps: [
    ...openRoom(),
    ['받은 파일을 누르세요.', room({ msgs: [{ file: '모임 안내.pdf', label: '받은 파일' }] }), '받은 파일'],
    ['파일이 열리면 내용을 확인하세요.', { v: 'viewer', buttons: ['저장', '공유'] }, null, { hint: '모르는 사람이 보낸 파일(특히 .apk)은 열지 마세요.' }],
  ] },
  'k04-media-gallery': { menuPath: '채팅방 › 오른쪽 위 메뉴 › 사진·동영상', steps: [
    ...openRoom(),
    ['채팅방 오른쪽 위 ‘메뉴’(세 줄)를 누르세요.', room({ msgs: MSGS }), '채팅방 메뉴'],
    ['‘사진·동영상’을 누르면 주고받은 사진을 모아 볼 수 있어요.', list('채팅방 서랍', ['사진·동영상', '파일', '링크', '공지', '알림 끄기', '채팅방 설정']), '사진·동영상'],
  ] },

  /* ---------- 05. 음성·보이스톡·페이스톡 ---------- */
  'k05-voice-record': { menuPath: '채팅방 › ＋ › 음성메시지 › 녹음', steps: [
    ...openRoom(), plusMenu(),
    ['‘음성메시지’를 누르세요.', room({ msgs: MSGS, plus: true }), '음성메시지'],
    ['가운데 녹음 버튼을 누르세요.', room({ msgs: MSGS, record: true }), '녹음 버튼', { hint: '녹음이 시작되면 하고 싶은 말을 하세요.' }],
  ] },
  'k05-voice-send': { menuPath: '음성메시지 녹음 › 전송', steps: [
    ['녹음이 끝나면 ‘전송’을 누르세요.', room({ msgs: MSGS, record: true, recording: true }), '녹음 전송'],
    ['채팅방에 음성 메시지가 올라가요.', room({ msgs: [...MSGS, { me: true, voice: '0:07' }] }), '내 메시지'],
  ] },
  'k05-voice-listen': { menuPath: '채팅방 › 음성 메시지 누르기', steps: [
    ...openRoom(),
    ['받은 음성 메시지의 재생(▶) 버튼을 누르세요.', room({ msgs: [{ voice: '0:12', label: '받은 음성 메시지' }] }), '받은 음성 메시지'],
  ] },
  'k05-voicetalk-call': { menuPath: '친구 프로필 › 통화하기 › 보이스톡', steps: [
    ...friendProfile(),
    ['‘통화하기’를 누르세요.', { v: 'profile', name: '딸 수진', status: '행복한 하루' }, '통화하기'],
    ['‘보이스톡’을 누르세요.', sheet({ v: 'profile', name: '딸 수진' }, ['보이스톡', '일반 전화']), '보이스톡', { hint: '보이스톡은 인터넷(와이파이·데이터)으로 걸려요.' }],
    ['상대가 받을 때까지 기다리세요.', { v: 'call', state: 'calling' }, null],
  ] },
  'k05-voicetalk-answer': { menuPath: '보이스톡 걸려 옴 › 받기', steps: [
    ['보이스톡이 오면 초록색 ‘받기’를 누르세요.', { v: 'call', state: 'incoming' }, '받기', { hint: '받기 버튼을 옆으로 밀어야 하는 휴대폰도 있어요.' }],
    ['통화가 연결되면 말하면 돼요.', { v: 'call', state: 'talking' }, null],
  ] },
  'k05-voicetalk-end': { menuPath: '보이스톡 통화 › 종료', steps: [
    ['통화를 마치려면 빨간 ‘종료’를 누르세요.', { v: 'call', state: 'talking' }, '종료'],
  ] },
  'k05-facetalk-call': { menuPath: '친구 프로필 › 페이스톡', steps: [
    ...friendProfile(),
    ['‘페이스톡’을 누르세요.', { v: 'profile', name: '딸 수진', status: '행복한 하루' }, '페이스톡'],
    ['얼굴을 화면에 맞추고 기다리세요.', { v: 'call', kind: 'face', state: 'calling' }, null],
  ] },
  'k05-facetalk-answer': { menuPath: '페이스톡 걸려 옴 › 받기', steps: [
    ['페이스톡이 오면 초록색 ‘받기’를 누르세요.', { v: 'call', kind: 'face', state: 'incoming' }, '받기'],
    ['상대 얼굴이 크게 나오고, 내 얼굴은 작은 칸에 나와요.', { v: 'call', kind: 'face', state: 'talking' }, null],
  ] },
  'k05-facetalk-camera': { menuPath: '페이스톡 통화 › 카메라 전환', steps: [
    ['페이스톡 중에 ‘카메라 전환’을 누르세요.', { v: 'call', kind: 'face', state: 'talking' }, '카메라 전환', { hint: '뒤쪽 카메라로 바뀌어 내가 보는 풍경을 보여 줄 수 있어요.' }],
  ] },
  'k05-group-call': { menuPath: '단체 채팅방 › ＋ › 통화하기 › 그룹콜', steps: [
    ...openRoom('가족 단톡방'),
    plusMenu(room(FAMILY)),
    ['‘통화하기’를 누르세요.', room({ ...FAMILY, plus: true }), '통화하기'],
    ['‘그룹콜’(또는 ‘그룹페이스톡’)을 고르세요.', sheet(room(FAMILY), ['그룹콜', '그룹페이스톡']), '그룹콜'],
  ] },

  /* ---------- 06. 단체 채팅방 ---------- */
  'k06-group-create': { menuPath: '채팅 › 새로운 채팅 › 일반채팅', steps: [
    ['‘채팅’ 탭 오른쪽 위 ‘새로운 채팅’을 누르세요.', tab('chats'), '새로운 채팅'],
    ['‘일반채팅’을 누르세요.', sheet(tab('chats'), ['일반채팅', '비밀채팅', '오픈채팅']), '일반채팅'],
    ['함께 이야기할 사람을 모두 고르고 ‘확인’을 누르세요.', { v: 'pick', items: [{ name: '딸 수진', checked: true }, { name: '아들 민호', checked: true }, { name: '김철수' }] }, '확인'],
    ['채팅방 이름을 정하고 ‘확인’을 누르면 단체방이 만들어져요.', form('그룹채팅방 정보 설정', { fields: [{ label: '채팅방 이름', value: '가족 단톡방', focus: true }], button: '확인' }), '확인'],
  ] },
  'k06-group-invite': { menuPath: '단체 채팅방 › 메뉴 › 대화상대 초대', steps: [
    ...openRoom('가족 단톡방'),
    ['오른쪽 위 ‘메뉴’(세 줄)를 누르세요.', room(FAMILY), '채팅방 메뉴'],
    ['‘대화상대 초대’를 누르세요.', list('채팅방 서랍', ['대화상대 초대', '사진·동영상', '파일', '공지', '알림 끄기', '채팅방 설정']), '대화상대 초대'],
    ['초대할 사람을 고르고 ‘확인’을 누르세요.', { v: 'pick', title: '대화상대 초대', items: [{ name: '김철수', checked: true }, { name: '박민수' }] }, '확인'],
  ] },
  'k06-group-rename': { menuPath: '단체 채팅방 › 메뉴 › 채팅방 설정 › 채팅방 이름', steps: [
    ...openRoom('가족 단톡방'),
    ['오른쪽 위 ‘메뉴’를 누르세요.', room(FAMILY), '채팅방 메뉴'],
    ['아래 ‘채팅방 설정’을 누르세요.', list('채팅방 서랍', ['사진·동영상', '파일', '공지', '알림 끄기', '채팅방 설정']), '채팅방 설정'],
    ['‘채팅방 이름’을 누르세요.', list('채팅방 설정', ['채팅방 이름', '채팅방 사진', '현재 채팅방 배경화면', { label: '알림', toggle: true }]), '채팅방 이름', { hint: '내 화면에서만 바뀌는 경우가 있어요.' }],
  ] },
  'k06-group-photo': { menuPath: '단체 채팅방 › 메뉴 › 채팅방 설정 › 채팅방 사진', steps: [
    ...openRoom('가족 단톡방'),
    ['오른쪽 위 ‘메뉴’를 누르세요.', room(FAMILY), '채팅방 메뉴'],
    ['‘채팅방 설정’을 누르세요.', list('채팅방 서랍', ['사진·동영상', '파일', '공지', '알림 끄기', '채팅방 설정']), '채팅방 설정'],
    ['‘채팅방 사진’을 누르고 앨범에서 사진을 고르세요.', list('채팅방 설정', ['채팅방 이름', '채팅방 사진', '현재 채팅방 배경화면', { label: '알림', toggle: true }]), '채팅방 사진'],
  ] },
  'k06-notice-post': { menuPath: '단체 채팅방 › 말풍선 길게 누르기 › 공지', steps: [
    ...openRoom('가족 단톡방'),
    ['공지로 올릴 말풍선을 길게 누르세요.', room(FAMILY), '받은 메시지'],
    ['‘공지’를 누르세요.', room({ ...FAMILY, menu: ['답장', '복사', '전달', '공지', '삭제'] }), '공지'],
    ['채팅방 위쪽에 공지가 고정돼요.', room({ ...FAMILY, notice: '토요일에 다 같이 점심 어때요?' }), '공지'],
  ] },
  'k06-notice-read': { menuPath: '단체 채팅방 › 위쪽 공지', steps: [
    ...openRoom('가족 단톡방'),
    ['채팅방 위쪽 종 모양 공지를 누르면 전체 내용을 볼 수 있어요.', room({ ...FAMILY, notice: '토요일 점심 12시 모임' }), '공지'],
  ] },
  'k06-group-mute': { menuPath: '채팅 › 채팅방 길게 누르기 › 알림 끄기', steps: [
    ['‘채팅’ 탭에서 알림을 끌 단체방을 길게 누르세요.', tab('chats'), '가족 단톡방'],
    ['‘알림 끄기’를 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '가족 단톡방' }), '알림 끄기', { hint: '메시지는 그대로 오고, 소리와 알림만 꺼져요.' }],
  ] },
  'k06-group-pin': { menuPath: '채팅 › 채팅방 길게 누르기 › 채팅방 상단 고정', steps: [
    ['‘채팅’ 탭에서 위에 둘 채팅방을 길게 누르세요.', tab('chats'), '가족 단톡방'],
    ['‘채팅방 상단 고정’을 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '가족 단톡방' }), '채팅방 상단 고정'],
  ] },
  'k06-members': { menuPath: '단체 채팅방 › 메뉴 › 대화상대', steps: [
    ...openRoom('가족 단톡방'),
    ['오른쪽 위 ‘메뉴’를 누르세요.', room(FAMILY), '채팅방 메뉴'],
    ['‘대화상대’ 목록에서 누가 있는지 확인하세요.', list('채팅방 서랍', [{ section: '대화상대 4' }, '김영희 (나)', '딸 수진', '아들 민호', '며느리 지은']), '딸 수진'],
  ] },
  'k06-mention': { menuPath: '단체 채팅방 › 입력창 › @ 이름', steps: [
    ...openRoom('가족 단톡방'),
    ['입력창에 ‘@’를 적으세요.', room({ ...FAMILY, input: '@' }), '입력창'],
    ['부를 사람 이름을 고르고 할 말을 이어 적은 뒤 ‘전송’을 누르세요.', room({ ...FAMILY, input: '@아들 민호 토요일에 올 수 있니?' }), '전송 버튼', { hint: '이름이 불린 사람에게 따로 알림이 가요.' }],
  ] },
  'k06-group-leave': { menuPath: '채팅 › 채팅방 길게 누르기 › 나가기', steps: [
    ['‘채팅’ 탭에서 나갈 단체방을 길게 누르세요.', tab('chats'), '동네 친구들'],
    ['‘나가기’를 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '동네 친구들' }), '나가기'],
    ['‘나가기’를 한 번 더 누르세요.', dialog(tab('chats'), '채팅방 나가기', '나가면 대화 내용이 모두 삭제돼요. 다른 사람들에게 나갔다고 표시돼요.', ['취소', '나가기'], { danger: true }), '나가기'],
  ] },
  'k06-group-leave-quiet': { menuPath: '단체 채팅방 나가기 › 조용히 나가기', steps: [
    ['‘채팅’ 탭에서 나갈 단체방을 길게 누르세요.', tab('chats'), '동네 친구들'],
    ['‘나가기’를 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '동네 친구들' }), '나가기'],
    ['‘조용히 나가기’에 체크하세요.', form('채팅방 나가기', { lead: '조용히 나가기를 고르면 다른 사람들에게 나갔다는 안내가 보이지 않을 수 있어요.', checks: [{ label: '조용히 나가기', on: false }], button: '나가기' }), '조용히 나가기', { hint: '이 기능이 없는 버전도 있어요.' }],
    ['아래 ‘나가기’를 누르세요.', form('채팅방 나가기', { lead: '조용히 나가기를 고르면 다른 사람들에게 나갔다는 안내가 보이지 않을 수 있어요.', checks: [{ label: '조용히 나가기', on: true }], button: '나가기' }), '나가기'],
  ] },

  /* ---------- 07. 프로필 ---------- */
  'k07-profile-view': { menuPath: '친구 › 내 프로필', steps: [
    ['‘친구’ 탭 맨 위 내 이름을 누르세요.', tab('friends'), '내 프로필'],
    ['친구들에게 보이는 내 프로필이에요.', { v: 'profile', mine: true }, null],
  ] },
  'k07-profile-photo': { menuPath: '내 프로필 › 프로필 편집 › 사진', steps: [
    ['‘친구’ 탭 맨 위 내 이름을 누르세요.', tab('friends'), '내 프로필'],
    ['‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['가운데 사진을 누르고 ‘앨범에서 사진 선택’을 고르세요.', sheet({ v: 'profile', mine: true }, ['앨범에서 사진 선택', '사진 찍기', '기본 이미지로 변경']), '앨범에서 사진 선택'],
    ['사진을 고른 뒤 ‘확인’과 ‘완료’를 누르세요.', { v: 'gallery', selected: [3] }, '전송', { hint: '화면에 따라 ‘확인’ 또는 ‘완료’로 보여요.' }],
  ] },
  'k07-profile-bg': { menuPath: '내 프로필 › 프로필 편집 › 배경', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['배경(사진 뒤쪽)을 누르고 ‘앨범에서 사진 선택’을 고르세요.', sheet({ v: 'profile', mine: true }, ['앨범에서 사진 선택', '기본 배경으로 변경']), '앨범에서 사진 선택'],
  ] },
  'k07-profile-name': { menuPath: '내 프로필 › 프로필 편집 › 이름', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['이름을 누르고 고친 뒤 ‘확인’을 누르세요.', form('이름', { fields: [{ label: '이름', value: '김영희', focus: true }], button: '확인' }), '확인'],
  ] },
  'k07-status-msg': { menuPath: '내 프로필 › 프로필 편집 › 상태메시지', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['상태메시지를 누르고 한 줄 인사를 적은 뒤 ‘확인’을 누르세요.', form('상태메시지', { fields: [{ label: '상태메시지', value: '오늘도 감사한 하루', focus: true }], button: '확인' }), '확인'],
  ] },
  'k07-profile-music': { menuPath: '내 프로필 › 프로필 편집 › 음악', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['음표 모양 ‘음악’을 누르세요.', { v: 'profile', mine: true, buttons: ['음악', '사진', '배경'] }, '음악'],
    ['곡을 검색해 고르세요.', { v: 'search', query: '산책', results: [{ label: '산책하는 오후', sub: '연습용 곡 이름', mark: '선택' }] }, '선택', { hint: '음악 서비스 이용권이 필요한 경우가 있어요.' }],
  ] },
  'k07-profile-photo-delete': { menuPath: '내 프로필 › 프로필 편집 › 사진 › 기본 이미지로 변경', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['사진을 누르고 ‘기본 이미지로 변경’을 고르세요.', sheet({ v: 'profile', mine: true }, ['앨범에서 사진 선택', '사진 찍기', '기본 이미지로 변경']), '기본 이미지로 변경'],
  ] },
  'k07-profile-decorate': { menuPath: '내 프로필 › 프로필 편집 › 꾸미기', steps: [
    ['내 프로필에서 ‘프로필 편집’을 누르세요.', { v: 'profile', mine: true }, '프로필 편집'],
    ['아래 꾸미기 메뉴에서 ‘스티커’를 누르세요.', sheet({ v: 'profile', mine: true }, ['스티커', '텍스트', '배경 효과', '완료']), '스티커'],
    ['마음에 드는 꾸미기를 사진 위에 올린 뒤 ‘완료’를 누르세요.', sheet({ v: 'profile', mine: true }, ['스티커', '텍스트', '배경 효과', '완료']), '완료'],
  ] },
  'k07-multi-profile': { menuPath: '친구 › 내 프로필 아래 멀티프로필', steps: [
    ['‘친구’ 탭에서 내 프로필을 누르고, 화면 위 설정을 누르세요.', { v: 'profile', mine: true }, '프로필 설정'],
    ['‘멀티프로필 만들기’를 누르세요.', list('프로필 관리', ['멀티프로필 만들기', '프로필 공개 설정', '생일 공개 설정']), '멀티프로필 만들기', { hint: '사람마다 다른 프로필을 보여 줄 수 있어요.' }],
    ['새 프로필을 만들고 보여 줄 친구를 고르세요.', { v: 'pick', title: '멀티프로필 친구 선택', items: [{ name: '동창 박민수', checked: true }, { name: '김철수' }] }, '확인'],
  ] },
  'k07-profile-privacy': { menuPath: '더보기 › 설정 › 전체 설정 › 개인/보안 › 프로필 관리', steps: [
    ...toSettings('개인/보안'),
    ['‘프로필 관리’를 누르세요.', sub('개인/보안'), '프로필 관리'],
    ['누구에게 보일지 하나씩 정하세요.', list('프로필 관리', [{ label: '생일 공개', toggle: false }, { label: '프로필 사진 전체 공개', toggle: true }, '멀티프로필 관리']), '생일 공개 스위치'],
  ] },

  /* ---------- 08. 이모티콘 (그림은 DigiStep365의 단순한 얼굴) ---------- */
  'k08-emoticon-basic': { menuPath: '채팅방 › 이모티콘 버튼 › 기본', steps: [
    ...openRoom(),
    ['입력창 오른쪽 웃는 얼굴 ‘이모티콘’을 누르세요.', room({ msgs: MSGS }), '이모티콘 버튼'],
    ['보낼 이모티콘을 누르고 다시 한 번 눌러 보내세요.', room({ msgs: MSGS, emoji: true }), '이모티콘 1'],
  ] },
  'k08-emoticon-animated': { menuPath: '채팅방 › 이모티콘 › 움직이는 이모티콘', steps: [
    ...openRoom(),
    ['‘이모티콘’을 누르고 움직이는 이모티콘이 있는 묶음을 고르세요.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), '구매 이모티콘'],
    ['보낼 이모티콘을 누르면 크게 미리 보여요.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), '이모티콘 3'],
    ['한 번 더 누르면 보내져요.', room({ msgs: [...MSGS, { me: true, emoticon: 2 }], emoji: true, emojiTab: 2 }), '이모티콘 3'],
  ] },
  'k08-emoticon-search': { menuPath: '채팅방 › 이모티콘 › 검색', steps: [
    ...openRoom(),
    ['‘이모티콘’을 누르고 오른쪽 돋보기를 누르세요.', room({ msgs: MSGS, emoji: true }), '이모티콘 검색'],
    ['‘고마워’처럼 하고 싶은 말을 적으면 맞는 이모티콘이 나와요.', { v: 'search', query: '고마워', results: [{ label: '고마워요 표정', sub: '내 이모티콘' }] }, '고마워요 표정'],
  ] },
  'k08-emoticon-free': { menuPath: '더보기 › 이모티콘 › 무료', steps: [
    ['‘더보기’ 탭에서 ‘이모티콘’을 누르세요.', tab('more'), '이모티콘'],
    ['‘무료’ 이모티콘을 찾아 조건을 확인하고 받으세요.', list('이모티콘', [{ section: '무료 이모티콘' }, { label: '감사 인사 묶음', sub: '친구 추가하면 받을 수 있어요' }, { label: '새해 인사 묶음', sub: '기간 한정' }]), '감사 인사 묶음', { hint: '광고 채널 친구 추가가 조건인 경우가 많아요.' }],
  ] },
  'k08-emoticon-buy': { menuPath: '더보기 › 이모티콘 › 상품 › 구매', steps: [
    ['‘더보기’ 탭에서 ‘이모티콘’을 누르세요.', tab('more'), '이모티콘'],
    ['마음에 드는 이모티콘을 누르고 가격을 확인하세요.', list('이모티콘', [{ label: '인사 이모티콘', value: '2,500원' }, { label: '꽃 이모티콘', value: '2,500원' }]), '인사 이모티콘'],
    ['구매 화면에서 금액을 확인하세요. 연습은 여기서 멈춰요.', form('결제', { lead: '실제로 결제하면 돈이 나가요.', fields: [{ label: '상품', value: '인사 이모티콘' }, { label: '결제 금액', value: '2,500원' }], button: '구매하기' }), null, { hint: '결제 비밀번호는 다른 사람에게 알려 주지 마세요.' }],
  ] },
  'k08-emoticon-gift': { menuPath: '이모티콘 상품 › 선물하기', steps: [
    ['‘더보기’ › ‘이모티콘’에서 선물할 이모티콘을 고르세요.', list('이모티콘', [{ label: '인사 이모티콘', value: '2,500원' }]), '인사 이모티콘'],
    ['‘선물하기’를 누르세요.', list('인사 이모티콘', [{ label: '구매하기', value: '2,500원' }, '선물하기']), '선물하기'],
    ['받을 친구를 고르고 ‘확인’을 누르세요.', { v: 'pick', title: '선물 받을 친구', items: [{ name: '딸 수진', checked: true }, { name: '김철수' }] }, '확인'],
    ['결제 화면에서 금액을 확인하세요. 연습은 여기서 멈춰요.', form('선물 결제', { fields: [{ label: '받는 사람', value: '딸 수진' }, { label: '결제 금액', value: '2,500원' }], button: '결제하기' }), null],
  ] },
  'k08-emoticon-order': { menuPath: '더보기 › 설정 › 전체 설정 › 이모티콘 › 편집', steps: [
    ...toSettings(),
    ['‘이모티콘’을 누르세요.', list('설정', [...SETTINGS, '이모티콘']), '이모티콘'],
    ['‘이모티콘 순서 편집’을 누르세요.', list('이모티콘 설정', ['내 이모티콘', '이모티콘 순서 편집', '구매 내역']), '이모티콘 순서 편집'],
    ['줄 오른쪽 손잡이를 길게 눌러 위아래로 옮기세요.', list('순서 편집', ['인사 이모티콘', '꽃 이모티콘', '감사 인사 묶음']), '꽃 이모티콘'],
  ] },
  'k08-emoticon-manage': { menuPath: '더보기 › 설정 › 전체 설정 › 이모티콘 › 내 이모티콘', steps: [
    ...toSettings(),
    ['‘이모티콘’을 누르세요.', list('설정', [...SETTINGS, '이모티콘']), '이모티콘'],
    ['‘내 이모티콘’에서 가진 이모티콘을 보고 숨기거나 지울 수 있어요.', list('이모티콘 설정', ['내 이모티콘', '이모티콘 순서 편집', '구매 내역']), '내 이모티콘'],
  ] },

  /* ---------- 09. 설정 ---------- */
  'k09-font-bigger': { menuPath: '더보기 › 설정 › 전체 설정 › 화면 › 글자크기', steps: [
    ...toSettings('화면'),
    ['‘글자크기’를 누르세요.', sub('화면'), '글자크기'],
    ['막대를 오른쪽으로 옮기면 글자가 커져요. 미리보기로 확인하세요.', { v: 'slider', value: 4 }, '크게 쪽'],
  ] },
  'k09-font-smaller': { menuPath: '더보기 › 설정 › 전체 설정 › 화면 › 글자크기', steps: [
    ...toSettings('화면'),
    ['‘글자크기’를 누르세요.', sub('화면'), '글자크기'],
    ['막대를 왼쪽으로 옮기면 글자가 작아져요.', { v: 'slider', value: 2 }, '2단계'],
  ] },
  'k09-chat-bg': { menuPath: '채팅방 › 메뉴 › 채팅방 설정 › 현재 채팅방 배경화면', steps: [
    ...openRoom(),
    ['오른쪽 위 ‘메뉴’(세 줄)를 누르세요.', room({ msgs: MSGS }), '채팅방 메뉴'],
    ['‘채팅방 설정’을 누르세요.', list('채팅방 서랍', ['사진·동영상', '파일', '공지', '알림 끄기', '채팅방 설정']), '채팅방 설정'],
    ['‘현재 채팅방 배경화면’을 누르고 색이나 사진을 고르세요.', list('채팅방 설정', ['채팅방 이름', '현재 채팅방 배경화면', { label: '알림', toggle: true }]), '현재 채팅방 배경화면'],
  ] },
  'k09-theme': { menuPath: '더보기 › 설정 › 전체 설정 › 테마', steps: [
    ...toSettings('테마'),
    ['쓰고 싶은 테마를 고르세요. 어두운 화면이 편하면 ‘다크 테마’를 골라요.', sub('테마'), '다크 테마'],
  ] },
  'k09-notify-on': { menuPath: '더보기 › 설정 › 전체 설정 › 알림 › 알림', steps: [
    ...toSettings('알림'),
    ['맨 위 ‘알림’ 스위치를 켜세요.', sub('알림', [{ label: '알림', toggle: false }, { label: '메시지 미리보기', toggle: true }, '알림음', '진동']), '알림 스위치', { hint: '휴대폰 설정 › 알림에서 카카오톡 알림이 꺼져 있어도 안 와요.' }],
  ] },
  'k09-notify-off': { menuPath: '더보기 › 설정 › 전체 설정 › 알림 › 알림', steps: [
    ...toSettings('알림'),
    ['맨 위 ‘알림’ 스위치를 끄세요.', sub('알림'), '알림 스위치', { hint: '끄면 모든 채팅방 알림이 오지 않아요.' }],
  ] },
  'k09-room-mute': { menuPath: '채팅방 › 메뉴 › 알림 끄기', steps: [
    ...openRoom('동네 친구들'),
    ['오른쪽 위 ‘메뉴’를 누르세요.', room({ name: '동네 친구들', count: 12, msgs: [{ text: '모임은 토요일이에요' }] }), '채팅방 메뉴'],
    ['‘알림 끄기’를 누르세요.', list('채팅방 서랍', ['사진·동영상', '파일', '공지', '알림 끄기', '채팅방 설정']), '알림 끄기'],
  ] },
  'k09-notify-sound': { menuPath: '더보기 › 설정 › 전체 설정 › 알림 › 알림음', steps: [
    ...toSettings('알림'),
    ['‘알림음’을 누르고 마음에 드는 소리를 고르세요.', sub('알림'), '알림음'],
  ] },
  'k09-notify-preview': { menuPath: '더보기 › 설정 › 전체 설정 › 알림 › 메시지 미리보기', steps: [
    ...toSettings('알림'),
    ['‘메시지 미리보기’ 스위치로 알림에 내용을 보일지 정하세요.', sub('알림'), '메시지 미리보기 스위치', { hint: '끄면 잠금 화면에 대화 내용이 보이지 않아요.' }],
  ] },
  'k09-room-pin': { menuPath: '채팅 › 채팅방 길게 누르기 › 채팅방 상단 고정', steps: [
    ['‘채팅’ 탭에서 채팅방을 길게 누르세요.', tab('chats'), '딸 수진'],
    ['‘채팅방 상단 고정’을 누르세요.', sheet(tab('chats'), ['채팅방 이름 설정', '즐겨찾기에 추가', '채팅방 상단 고정', '알림 끄기', { label: '나가기', danger: true }], { title: '딸 수진' }), '채팅방 상단 고정'],
    ['고정한 방은 목록 맨 위에 있어요.', tab('chats', { pinned: '딸 수진' }), '딸 수진'],
  ] },
  'k09-room-list': { menuPath: '채팅 › 설정 › 정렬·편집', steps: [
    ['‘채팅’ 탭 오른쪽 위 ‘설정’(톱니바퀴)을 누르세요.', tab('chats'), '설정'],
    ['‘편집’으로 여러 방을 한 번에 정리하거나, ‘정렬’로 순서를 바꿔요.', sheet(tab('chats'), ['편집', '정렬', '모두 읽음 처리', '채팅 설정']), '편집'],
  ] },
  'k09-dnd': { menuPath: '더보기 › 설정 › 전체 설정 › 알림 › 방해금지 시간대', steps: [
    ...toSettings('알림'),
    ['‘방해금지 시간대’를 누르세요.', sub('알림'), '방해금지 시간대'],
    ['켜고 시작·끝 시간을 정하세요. 그 시간에는 알림이 울리지 않아요.', list('방해금지 시간대', [{ label: '방해금지 시간대', toggle: true }, { label: '시작', value: '오후 10:00' }, { label: '종료', value: '오전 7:00' }]), '방해금지 시간대 스위치'],
  ] },

  /* ---------- 10. 선물하기 ---------- */
  'k10-gift-open': { menuPath: '더보기 › 선물하기', steps: [
    ['‘더보기’ 탭을 누르세요.', tab('friends'), '더보기 탭'],
    ['‘선물하기’를 누르세요.', tab('more'), '선물하기'],
  ] },
  'k10-gift-search': { menuPath: '선물하기 › 검색', steps: [
    ['‘더보기’ › ‘선물하기’로 들어가세요.', tab('more'), '선물하기'],
    ['위쪽 검색창에 ‘커피’처럼 찾을 상품을 적으세요.', { v: 'search', query: '커피', results: [{ label: '아메리카노 쿠폰', sub: '4,500원' }, { label: '케이크 세트 쿠폰', sub: '28,000원' }] }, '아메리카노 쿠폰'],
  ] },
  'k10-gift-coffee': { menuPath: '선물하기 › 상품 › 선물하기 › 친구 선택', steps: [
    ['선물하기에서 커피 쿠폰을 고르세요.', { v: 'search', query: '커피', results: [{ label: '아메리카노 쿠폰', sub: '4,500원' }] }, '아메리카노 쿠폰'],
    ['‘선물하기’를 누르세요.', list('아메리카노 쿠폰', [{ label: '나에게 선물', value: '4,500원' }, '선물하기']), '선물하기'],
    ['받을 친구를 고르고 ‘확인’을 누르세요.', { v: 'pick', title: '받는 친구', items: [{ name: '김철수', checked: true }, { name: '딸 수진' }] }, '확인'],
    ['메시지 카드를 적고 결제 화면에서 금액을 확인하세요. 연습은 여기서 멈춰요.', form('선물 결제', { fields: [{ label: '받는 사람', value: '김철수' }, { label: '메시지', value: '늘 고마워요' }, { label: '결제 금액', value: '4,500원' }], button: '결제하기' }), null],
  ] },
  'k10-gift-birthday': { menuPath: '친구 › 생일인 친구 › 선물하기', steps: [
    ['‘친구’ 탭 위쪽 ‘생일인 친구’에서 친구를 누르세요.', tab('friends', { favorites: ['생일: 김철수'], friends: ['딸 수진', '박민수'] }), '생일: 김철수'],
    ['‘선물하기’를 누르세요.', { v: 'profile', name: '김철수', status: '오늘 생일이에요', buttons: ['1:1 채팅', '선물하기'] }, '선물하기'],
  ] },
  'k10-gift-pay': { menuPath: '선물하기 › 결제', steps: [
    ['결제 화면에서 받는 사람과 금액을 확인하세요.', form('선물 결제', { fields: [{ label: '받는 사람', value: '김철수' }, { label: '상품', value: '아메리카노 쿠폰' }, { label: '결제 금액', value: '4,500원' }], button: '결제하기' }), '받는 사람'],
    ['결제 수단을 고르고 비밀번호를 넣으면 결제돼요. 연습은 여기서 멈춰요.', info('결제 전에 꼭 확인하세요', ['받는 사람 이름이 맞나요?', '금액이 맞나요?', '결제 비밀번호는 누구에게도 알려 주지 마세요.'], true), null],
  ] },
  'k10-gift-received': { menuPath: '더보기 › 선물하기 › 선물함', steps: [
    ['‘더보기’ › ‘선물하기’로 들어가세요.', tab('more'), '선물하기'],
    ['‘선물함’을 누르면 받은 선물을 볼 수 있어요.', list('선물하기', ['선물함', '주문 내역', '위시리스트']), '선물함'],
  ] },
  'k10-gift-coupon-use': { menuPath: '선물함 › 쿠폰 › 바코드', steps: [
    ['‘선물함’에서 쓸 쿠폰을 누르세요.', list('선물함', [{ label: '아메리카노 쿠폰', sub: '유효기간 2027.02.27' }, { label: '케이크 세트 쿠폰', sub: '유효기간 2027.01.15' }]), '아메리카노 쿠폰'],
    ['가게에서 바코드 화면을 보여 주세요.', info('모바일 쿠폰 쓰는 법', ['계산할 때 바코드 화면을 직원에게 보여 줘요.', '가게 화면의 화면 밝기를 높이면 잘 찍혀요.']), null],
  ] },
  'k10-gift-address': { menuPath: '선물함 › 배송 상품 › 배송지 입력', steps: [
    ['배송으로 받는 선물은 ‘배송지 입력’을 누르세요.', list('선물함', [{ label: '사과 한 상자', sub: '배송지를 입력해 주세요' }]), '사과 한 상자'],
    ['받을 주소와 연락처를 넣고 ‘확인’을 누르세요.', form('배송지 입력', { fields: [{ label: '받는 분', value: '김영희' }, { label: '주소', value: '연습시 연습구 연습로 1' }, { label: '연락처', value: '010-0000-0000' }], button: '확인' }), '확인'],
  ] },
  'k10-gift-expiry': { menuPath: '선물함 › 쿠폰 › 유효기간', steps: [
    ['‘선물함’에서 쿠폰 아래 적힌 유효기간을 확인하세요.', list('선물함', [{ label: '아메리카노 쿠폰', sub: '유효기간 2027.02.27' }]), '아메리카노 쿠폰', { hint: '기간이 지나면 쓸 수 없어요. 연장할 수 있는 상품도 있어요.' }],
  ] },
  'k10-gift-refund': { menuPath: '선물하기 › 주문 내역 › 취소·환불', steps: [
    ['‘선물하기’에서 ‘주문 내역’을 누르세요.', list('선물하기', ['선물함', '주문 내역', '위시리스트']), '주문 내역'],
    ['보낸 선물을 누르고 취소·환불할 수 있는지 확인하세요.', list('주문 내역', [{ label: '아메리카노 쿠폰', sub: '김철수 · 사용 전' }]), '아메리카노 쿠폰', { hint: '상대가 이미 쓴 선물은 취소할 수 없어요.' }],
  ] },

  /* ---------- 11. 지갑·인증 ---------- */
  'k11-wallet-open': { menuPath: '더보기 › 지갑', steps: [
    ['‘더보기’ 탭에서 ‘지갑’을 누르세요.', tab('more'), '지갑'],
    ['인증서·전자문서·신분증 같은 메뉴가 모여 있어요.', list('지갑', ['인증서', '전자문서', '전자증명서', '신분증']), null],
  ] },
  'k11-cert-issue': { menuPath: '더보기 › 지갑 › 인증서 › 발급', steps: [
    ['‘더보기’ › ‘지갑’ › ‘인증서’를 누르세요.', list('지갑', ['인증서', '전자문서', '전자증명서', '신분증']), '인증서'],
    ['‘인증서 발급’을 누르고 안내에 따라 본인 확인을 하세요.', form('인증서 발급', { lead: '본인 명의 휴대폰과 은행 계좌 확인이 필요할 수 있어요.', button: '인증서 발급' }), '인증서 발급'],
    ['인증서 비밀번호(숫자 6자리)를 정하세요.', info('인증서 비밀번호', ['나만 아는 숫자로 정해요.', '누구에게도 알려 주지 마세요.'], true), null],
  ] },
  'k11-cert-use': { menuPath: '인증 요청 알림 › 인증하기', steps: [
    ['다른 서비스에서 ‘카카오 인증’을 고르면 카카오톡으로 요청이 와요.', room({ name: '카카오 인증', msgs: [{ text: '[인증 요청] 연습 기관에서 본인 인증을 요청했어요.' }] }), '받은 메시지'],
    ['내가 요청한 것이 맞을 때만 ‘인증하기’를 누르고 비밀번호를 넣으세요.', form('인증하기', { lead: '요청한 곳: 연습 기관', fields: [{ label: '인증서 비밀번호', value: '000000', masked: true }], button: '인증하기' }), '인증하기'],
  ] },
  'k11-auth-request': { menuPath: '카카오톡 알림 › 인증 요청 확인', steps: [
    ['인증 요청이 오면 어디서 왔는지 먼저 확인하세요.', info('인증 요청 확인', ['요청한 곳과 내용을 읽어요.', '내가 하지 않은 요청이면 누르지 말고 무시해요.', '모르는 사람이 “인증해 달라”고 하면 사기예요.'], true), null],
  ] },
  'k11-cert-manage': { menuPath: '더보기 › 지갑 › 인증서 › 관리', steps: [
    ['‘지갑’ › ‘인증서’를 누르세요.', list('지갑', ['인증서', '전자문서', '전자증명서', '신분증']), '인증서'],
    ['‘인증서 관리’에서 비밀번호 변경·이용 내역·폐기를 할 수 있어요.', list('인증서 관리', ['이용 내역', '비밀번호 변경', { label: '인증서 폐기', danger: true }]), '이용 내역'],
  ] },
  'k11-e-certificate': { menuPath: '더보기 › 지갑 › 전자증명서', steps: [
    ['‘지갑’ › ‘전자증명서’를 누르세요.', list('지갑', ['인증서', '전자문서', '전자증명서', '신분증']), '전자증명서'],
    ['필요한 증명서를 누르세요.', list('전자증명서', ['주민등록표 초본', '건강보험 자격득실 확인서', '납세증명서']), '건강보험 자격득실 확인서'],
    ['안내에 따라 발급받은 뒤 ‘제출하기’로 보낼 곳에 내요.', form('건강보험 자격득실 확인서', { lead: '발급한 증명서를 기관에 바로 낼 수 있어요.', buttons: ['내 지갑에 보관', '제출하기'] }), '제출하기'],
  ] },
  'k11-e-document': { menuPath: '더보기 › 지갑 › 전자문서', steps: [
    ['‘지갑’ › ‘전자문서’를 누르세요.', list('지갑', ['인증서', '전자문서', '전자증명서', '신분증']), '전자문서'],
    ['기관에서 보낸 고지서·안내문을 누르면 내용을 볼 수 있어요.', list('전자문서', [{ label: '건강검진 안내', sub: '연습 기관' }, { label: '자동차세 고지서', sub: '연습 기관' }]), '건강검진 안내'],
  ] },
  'k11-cert-caution': { menuPath: '안내', steps: [
    ['인증과 전자문서를 쓸 때 꼭 지켜요.', info('인증·전자문서 주의사항', ['인증서 비밀번호와 인증번호는 나만 알아요.', '내가 요청하지 않은 인증은 누르지 않아요.', '전자문서 속 링크로 돈을 보내라고 하면 사기예요.'], true), null],
  ] },

  /* ---------- 12. 오픈채팅 ---------- */
  'k12-openchat-about': { menuPath: '지금 › 오픈채팅', steps: [
    ['오픈채팅은 모르는 사람과도 관심사로 모이는 채팅방이에요.', info('오픈채팅이란?', ['친구 추가 없이 같은 관심사 사람들과 이야기해요.', '내 진짜 프로필 대신 ‘오픈프로필’을 쓸 수 있어요.', '돈 이야기·투자 권유는 조심해요.']), null],
    ['아래 ‘지금’ 탭에서 오픈채팅을 찾을 수 있어요.', tab('now'), '오픈채팅'],
  ] },
  'k12-openchat-search': { menuPath: '지금 › 검색', steps: [
    ['‘지금’ 탭 오른쪽 위 ‘검색’을 누르세요.', tab('now'), '검색'],
    ['‘텃밭’처럼 관심사를 적어 찾으세요.', { v: 'search', query: '텃밭', tabs: ['오픈채팅', '전체'], results: [{ label: '텃밭 가꾸기', sub: '참여 87명' }] }, '텃밭 가꾸기'],
  ] },
  'k12-openchat-join': { menuPath: '오픈채팅방 › 참여하기', steps: [
    ['들어갈 오픈채팅방을 누르세요.', tab('now'), '텃밭 가꾸기'],
    ['‘참여하기’를 누르고 쓸 프로필을 고르세요.', form('텃밭 가꾸기', { lead: '참여 87명 · 텃밭 정보를 나눠요', checks: [{ label: '오픈프로필로 참여', on: true }, { label: '카카오톡 프로필로 참여' }], button: '참여하기' }), '참여하기'],
  ] },
  'k12-openchat-create': { menuPath: '지금 › 오픈채팅 만들기', steps: [
    ['‘지금’ 탭에서 ‘오픈채팅 만들기’를 누르세요.', tab('now'), '오픈채팅 만들기'],
    ['방 이름과 설명을 적고 ‘완료’를 누르세요.', form('오픈채팅방 만들기', { fields: [{ label: '채팅방 이름', value: '동네 걷기 모임', focus: true }, { label: '설명', value: '아침에 함께 걸어요' }], button: '완료' }), '완료'],
  ] },
  'k12-open-profile': { menuPath: '오픈채팅 참여 › 오픈프로필', steps: [
    ['참여할 때 ‘오픈프로필로 참여’를 고르면 진짜 이름 대신 쓸 수 있어요.', form('텃밭 가꾸기', { checks: [{ label: '오픈프로필로 참여', on: true }, { label: '카카오톡 프로필로 참여' }], button: '참여하기' }), '오픈프로필로 참여'],
    ['닉네임과 사진을 정하세요. 진짜 이름·전화번호는 넣지 마세요.', form('오픈프로필', { fields: [{ label: '닉네임', value: '텃밭할머니', focus: true }], button: '확인' }), '확인'],
  ] },
  'k12-openchat-notify': { menuPath: '오픈채팅방 › 메뉴 › 알림 끄기', steps: [
    ['오픈채팅방 오른쪽 위 ‘메뉴’를 누르세요.', room({ name: '텃밭 가꾸기', count: 87, from: '정원지기', msgs: [{ text: '오늘 상추 심었어요' }] }), '채팅방 메뉴'],
    ['‘알림 끄기’를 누르세요.', list('채팅방 서랍', ['사진·동영상', '공지', '알림 끄기', '채팅방 설정']), '알림 끄기'],
  ] },
  'k12-openchat-leave': { menuPath: '오픈채팅방 › 메뉴 › 나가기', steps: [
    ['오픈채팅방 오른쪽 위 ‘메뉴’를 누르세요.', room({ name: '텃밭 가꾸기', count: 87, from: '정원지기', msgs: [{ text: '오늘 상추 심었어요' }] }), '채팅방 메뉴'],
    ['아래 ‘나가기’를 누르고 확인하세요.', list('채팅방 서랍', ['사진·동영상', '공지', '알림 끄기', { label: '나가기', danger: true }]), '나가기'],
  ] },
  'k12-openchat-report': { menuPath: '오픈채팅방 › 메시지 길게 누르기 › 신고', steps: [
    ['돈을 요구하거나 이상한 링크를 보내는 메시지를 길게 누르세요.', room({ name: '고수익 투자방', count: 300, from: '투자 선생님', msgs: [{ text: '지금 입금하면 두 배로 드려요' }] }), '받은 메시지'],
    ['‘신고’를 누르고 이유를 고르세요.', room({ name: '고수익 투자방', count: 300, from: '투자 선생님', msgs: [{ text: '지금 입금하면 두 배로 드려요' }], menu: ['답장', '복사', '신고'] }), '신고'],
    ['신고한 뒤 방에서 나가세요.', info('위험한 오픈채팅', ['고수익·원금 보장 투자 권유는 사기예요.', '돈을 보내지 말고 신고한 뒤 나가요.'], true), null],
  ] },

  /* ---------- 13. 보안 ---------- */
  'k13-account-check': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정', steps: [
    ...toSettings('카카오계정'),
    ['‘계정 정보’에서 내 이메일·전화번호를 확인하세요.', sub('카카오계정'), '계정 정보'],
  ] },
  'k13-password': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정 › 비밀번호 변경', steps: [
    ...toSettings('카카오계정'),
    ['‘비밀번호 변경’을 누르세요.', sub('카카오계정'), '비밀번호 변경'],
    ['지금 비밀번호와 새 비밀번호를 넣고 ‘확인’을 누르세요.', form('비밀번호 변경', { fields: [{ label: '현재 비밀번호', value: 'password', masked: true }, { label: '새 비밀번호', value: 'password', masked: true, focus: true }, { label: '새 비밀번호 확인', value: 'password', masked: true }], button: '확인' }), '확인', { hint: '다른 사이트와 같은 비밀번호는 쓰지 마세요.' }],
  ] },
  'k13-two-step': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정 › 2단계 인증', steps: [
    ...toSettings('카카오계정'),
    ['‘2단계 인증’을 누르세요.', sub('카카오계정'), '2단계 인증'],
    ['켜면 새 기기에서 로그인할 때 한 번 더 확인해요.', list('2단계 인증', [{ label: '2단계 인증', toggle: true }, { label: '인증 방법', value: '휴대폰' }]), '2단계 인증 스위치'],
  ] },
  'k13-devices': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정 › 로그인 기기 관리', steps: [
    ...toSettings('카카오계정'),
    ['‘로그인 기기 관리’를 누르세요.', sub('카카오계정'), '로그인 기기 관리'],
    ['내 카카오계정으로 로그인한 기기 목록을 확인하세요.', list('로그인 기기 관리', [{ label: '갤럭시 S26 (지금 기기)', sub: '오늘 오전 10:00' }, { label: '노트북 PC', sub: '3일 전' }]), '노트북 PC'],
  ] },
  'k13-logout-device': { menuPath: '로그인 기기 관리 › 기기 › 로그아웃', steps: [
    ['‘로그인 기기 관리’에서 모르는 기기를 누르세요.', list('로그인 기기 관리', [{ label: '갤럭시 S26 (지금 기기)', sub: '오늘 오전 10:00' }, { label: '알 수 없는 PC', sub: '1시간 전' }]), '알 수 없는 PC'],
    ['‘로그아웃’을 누르고 비밀번호를 바꾸세요.', dialog(list('로그인 기기 관리', []), '로그아웃', '이 기기에서 카카오계정을 로그아웃할까요?', ['취소', '로그아웃'], { danger: true }), '로그아웃'],
  ] },
  'k13-screen-lock': { menuPath: '더보기 › 설정 › 전체 설정 › 개인/보안 › 화면 잠금', steps: [
    ...toSettings('개인/보안'),
    ['‘화면 잠금’을 누르세요.', sub('개인/보안'), '화면 잠금'],
    ['켜고 숫자 4자리 암호를 두 번 넣으세요.', list('화면 잠금', [{ label: '화면 잠금', toggle: true }, { label: '생체인증 사용', toggle: false }]), '화면 잠금 스위치'],
  ] },
  'k13-biometric': { menuPath: '개인/보안 › 화면 잠금 › 생체인증 사용', steps: [
    ...toSettings('개인/보안'),
    ['‘화면 잠금’을 누르세요.', sub('개인/보안'), '화면 잠금'],
    ['‘생체인증 사용’을 켜면 지문으로 열 수 있어요.', list('화면 잠금', [{ label: '화면 잠금', toggle: true }, { label: '생체인증 사용', toggle: false }]), '생체인증 사용 스위치', { hint: '휴대폰에 지문이 먼저 등록되어 있어야 해요.' }],
  ] },
  'k13-allow-add-by-phone': { menuPath: '개인/보안 › 개인정보 관리 › 전화번호로 친구 추가 허용', steps: [
    ...toSettings('개인/보안'),
    ['‘개인정보 관리’를 누르세요.', sub('개인/보안'), '개인정보 관리'],
    ['‘전화번호로 친구 추가 허용’ 스위치로 정하세요.', list('개인정보 관리', [{ label: '전화번호로 친구 추가 허용', toggle: true }, { label: 'ID 검색 허용', toggle: true }]), '전화번호로 친구 추가 허용 스위치', { hint: '끄면 내 번호를 아는 사람도 나를 친구로 추가하기 어려워져요.' }],
  ] },
  'k13-privacy-settings': { menuPath: '더보기 › 설정 › 전체 설정 › 개인/보안 › 개인정보 관리', steps: [
    ...toSettings('개인/보안'),
    ['‘개인정보 관리’에서 공개 범위를 하나씩 확인하세요.', sub('개인/보안'), '개인정보 관리'],
  ] },
  'k13-friend-recommend': { menuPath: '더보기 › 설정 › 전체 설정 › 친구 › 친구 추천 허용', steps: [
    ...toSettings('친구'),
    ['‘친구 추천 허용’ 스위치로 정하세요.', sub('친구'), '친구 추천 허용 스위치'],
  ] },
  'k13-connected-services': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정 › 연결된 서비스 관리', steps: [
    ...toSettings('카카오계정'),
    ['‘연결된 서비스 관리’를 누르세요.', sub('카카오계정'), '연결된 서비스 관리'],
    ['쓰지 않는 서비스는 눌러서 ‘연결 끊기’를 하세요.', list('연결된 서비스', [{ label: '연습 쇼핑몰', sub: '2년 전 연결' }, { label: '연습 게임', sub: '1년 전 연결' }]), '연습 게임'],
  ] },
  'k13-hacked': { menuPath: '안내 › 비밀번호 변경 · 로그인 기기 관리 · 고객센터', steps: [
    ['내가 보내지 않은 메시지가 있거나 모르는 기기가 보이면 바로 하세요.', info('계정 도용이 의심되면', ['비밀번호를 바로 바꿔요.', '로그인 기기 관리에서 모르는 기기를 로그아웃해요.', '2단계 인증을 켜요.', '가족·친구에게 “내 카톡으로 돈 요구가 가면 사기”라고 알려요.'], true), null],
    ...toSettings('카카오계정'),
    ['‘비밀번호 변경’부터 하세요.', sub('카카오계정'), '비밀번호 변경'],
  ] },

  /* ---------- 14. 백업·복원 ---------- */
  'k14-backup-about': { menuPath: '안내', steps: [
    ['대화 백업과 사진 백업은 서로 달라요.', info('대화 백업 알아 두기', ['‘대화 백업’은 글자 대화를 저장해요.', '사진·동영상·파일은 대화 백업에 들어가지 않아요.', '백업 비밀번호를 잊으면 복원할 수 없어요.', '보관 기간은 화면 안내를 확인해요.'], true), null],
  ] },
  'k14-backup-run': { menuPath: '더보기 › 설정 › 전체 설정 › 채팅 › 대화 백업', steps: [
    ...toSettings('채팅'),
    ['‘대화 백업’을 누르세요.', sub('채팅'), '대화 백업'],
    ['‘대화 백업’ 버튼을 누르세요.', form('대화 백업', { lead: '글자 대화만 백업돼요. 사진·동영상은 포함되지 않아요.', button: '대화 백업' }), '대화 백업'],
  ] },
  'k14-backup-password': { menuPath: '대화 백업 › 백업 비밀번호 설정', steps: [
    ['백업할 때 백업 비밀번호를 정하라고 나와요.', form('백업 비밀번호 설정', { fields: [{ label: '비밀번호', value: 'password', masked: true, focus: true }, { label: '비밀번호 확인', value: 'password', masked: true }], button: '확인', note: '이 비밀번호를 잊으면 대화를 복원할 수 없어요.' }), '확인', { hint: '종이에 적어 안전한 곳에 두세요.' }],
  ] },
  'k14-backup-status': { menuPath: '더보기 › 설정 › 전체 설정 › 채팅 › 대화 백업', steps: [
    ...toSettings('채팅'),
    ['‘대화 백업’에서 마지막으로 백업한 날짜를 확인하세요.', sub('채팅'), '대화 백업'],
  ] },
  'k14-new-phone-install': { menuPath: '새 휴대폰 › Play 스토어 › 카카오톡 설치', steps: [
    ['새 휴대폰에서 ‘Play 스토어’를 여세요.', G({ kind: 'home', apps: true, find: 'Play 스토어' }), 'Play 스토어'],
    ['‘카카오톡’을 검색해 ‘설치’를 누르세요.', G({ kind: 'list', title: '검색 결과', items: [{ t: '카카오톡', s: 'Kakao Corp.', btn: '설치' }] }), '카카오톡 설치'],
  ] },
  'k14-new-phone-login': { menuPath: '새 휴대폰 카카오톡 › 카카오계정으로 로그인', steps: [
    ['카카오톡을 열고 ‘카카오계정으로 로그인’을 누르세요.', form('', { heading: '카카오톡에 오신 것을 환영해요', buttons: ['카카오계정으로 로그인', '새로운 카카오계정 만들기'], back: false }), '카카오계정으로 로그인'],
    ['쓰던 계정과 비밀번호를 넣고 휴대폰 번호 인증을 하세요.', form('로그인', { fields: [{ label: '카카오계정', value: 'younghee@example.com' }, { label: '비밀번호', value: 'password', masked: true }], button: '로그인' }), '로그인', { hint: '카카오톡은 한 번에 휴대폰 한 대에서만 써요. 옛 휴대폰은 로그아웃돼요.' }],
  ] },
  'k14-restore': { menuPath: '새 휴대폰 로그인 › 대화 복원', steps: [
    ['로그인하면 ‘대화 복원’ 화면이 나와요.', form('대화 복원', { lead: '백업한 대화가 있어요.', button: '대화 복원' }), '대화 복원'],
    ['백업 비밀번호를 넣고 ‘확인’을 누르세요.', form('백업 비밀번호', { fields: [{ label: '백업 비밀번호', value: 'password', masked: true, focus: true }], button: '확인' }), '확인'],
  ] },
  'k14-media-backup': { menuPath: '안내 › 사진 저장 · 톡서랍', steps: [
    ['사진·동영상은 대화 백업에 들어가지 않아요. 따로 저장하세요.', info('사진·동영상 백업', ['중요한 사진은 휴대폰 갤러리에 저장해요.', '갤러리를 클라우드에 백업해요(삼성·구글 계정).', '카카오 ‘톡서랍’ 같은 유료 서비스도 있어요.'], true), null],
    ['받은 사진은 눌러서 ‘저장’하면 갤러리에 남아요.', { v: 'viewer' }, '저장 버튼'],
  ] },
  'k14-change-number': { menuPath: '더보기 › 설정 › 전체 설정 › 카카오계정 › 계정 정보 › 전화번호', steps: [
    ...toSettings('카카오계정'),
    ['‘계정 정보’를 누르세요.', sub('카카오계정'), '계정 정보'],
    ['‘전화번호’를 누르고 새 번호로 인증하세요.', list('계정 정보', [{ label: '이메일', value: 'y***@example.com' }, { label: '전화번호', value: '+82 10-****-0000' }]), '전화번호'],
  ] },
  'k14-backup-error': { menuPath: '안내', steps: [
    ['복원이 안 될 때 확인하세요.', info('백업·복원이 안 될 때', ['같은 카카오계정으로 로그인했나요?', '백업 비밀번호가 맞나요?', '와이파이에 연결되어 있나요?', '백업 보관 기간이 지나지 않았나요?']), null],
  ] },

  /* ---------- 15. 사기 예방·문제 해결 ---------- */
  'k15-stranger': { menuPath: '채팅방 › 위쪽 경고 › 차단·신고', steps: [
    ['친구가 아닌 사람이 말을 걸면 위쪽에 안내가 나와요.', room({ name: '모르는 사람', msgs: [{ text: '안녕하세요 좋은 정보 드려요' }], notice: '친구가 아닌 사용자예요' }), '공지'],
    ['대답하지 말고 ‘차단’이나 ‘신고’를 하세요.', sheet(room({ name: '모르는 사람', msgs: [{ text: '안녕하세요 좋은 정보 드려요' }] }), ['친구 추가', '차단', '신고']), '차단'],
  ] },
  'k15-fake-family': { menuPath: '안내', steps: [
    ['“엄마, 폰이 고장 나서 친구 폰이야”는 사기일 수 있어요.', room({ name: '딸이에요', msgs: [{ text: '엄마 나 폰 고장나서 이 번호로 연락해' }, { text: '급하게 돈 좀 보내줘' }], notice: '친구가 아닌 사용자예요' }), '받은 메시지'],
    ['돈을 보내기 전에 꼭 원래 번호로 전화해 확인하세요.', info('가족 사칭 구별법', ['새 번호·친구 폰이라며 돈을 요구해요.', '전화는 못 받는다고 해요.', '반드시 원래 번호로 전화해 목소리를 확인해요.'], true), null],
  ] },
  'k15-voice-phishing': { menuPath: '안내', steps: [
    ['기관을 사칭해 카카오톡으로 연락하면 의심하세요.', info('보이스피싱 예방', ['검찰·경찰·은행은 카톡으로 돈을 요구하지 않아요.', '앱 설치·원격 제어를 요구하면 끊어요.', '의심되면 112나 금융감독원 1332에 물어봐요.'], true), null],
  ] },
  'k15-smishing': { menuPath: '안내', steps: [
    ['택배·과태료·청첩장이라며 주소를 누르라고 하면 의심하세요.', room({ name: '택배 안내', msgs: [{ text: '[배송불가] 주소 확인 바랍니다' }, { link: '배송지 확인하기', url: 'parcel-check.example' }], notice: '친구가 아닌 사용자예요' }), '받은 메시지'],
    ['링크를 누르지 말고 지우거나 신고하세요.', info('스미싱 구별법', ['모르는 곳에서 온 주소(링크)는 누르지 않아요.', '앱을 깔라고 하면 사기예요.', '택배는 택배 회사 앱에서 직접 확인해요.'], true), null],
  ] },
  'k15-bad-link': { menuPath: '안내', steps: [
    ['주소 미리보기를 보고, 낯선 주소면 누르지 마세요.', room({ name: '김철수', msgs: [{ link: '무료 쿠폰 받기', url: 'free-gift.example', label: '받은 링크' }] }), '받은 링크'],
    ['친구가 보낸 링크도 이상하면 전화로 물어보세요.', info('위험한 링크 확인', ['글자가 이상하거나 낯선 주소는 의심해요.', '누른 뒤 앱 설치·개인정보 입력을 요구하면 멈춰요.'], true), null],
  ] },
  'k15-money-request': { menuPath: '안내', steps: [
    ['카톡으로 급하게 돈을 보내 달라고 하면 멈추세요.', room({ name: '김철수', msgs: [{ text: '급한 일 생겨서 그러는데 50만원만 보내줄래?' }] }), '받은 메시지'],
    ['전화로 직접 확인하기 전에는 보내지 마세요.', info('송금 요청 사기 예방', ['친구 계정이 도용됐을 수 있어요.', '전화로 목소리를 확인해요.', '계좌 이름이 친구와 다르면 보내지 않아요.'], true), null],
  ] },
  'k15-auth-code': { menuPath: '안내', steps: [
    ['인증번호를 알려 달라는 메시지는 모두 사기예요.', room({ name: '카카오 고객센터?', msgs: [{ text: '계정 보호를 위해 문자로 받은 인증번호를 알려주세요' }], notice: '친구가 아닌 사용자예요' }), '받은 메시지'],
    ['알려 주지 말고 차단·신고하세요.', info('인증번호 요구 대처', ['카카오는 인증번호를 묻지 않아요.', '인증번호를 알려 주면 계정을 빼앗길 수 있어요.'], true), null],
  ] },
  'k15-ad-block': { menuPath: '채팅 › 광고 채널 › 차단', steps: [
    ['광고를 보내는 채널 채팅방을 여세요.', tab('chats', { chats: [['연습 쇼핑몰', '(광고) 오늘만 특가!', '오전 11:00', 1], ['딸 수진', '엄마 저녁 드셨어요?', '오후 6:20', 0]] }), '연습 쇼핑몰'],
    ['오른쪽 위 ‘메뉴’(세 줄)를 누르세요.', room({ name: '연습 쇼핑몰', from: '연습 쇼핑몰', msgs: [{ text: '(광고) 오늘만 특가!' }] }), '채팅방 메뉴'],
    ['‘채널 차단’을 누르세요.', list('채팅방 서랍', ['알림 끄기', '채널 차단', '신고']), '채널 차단'],
  ] },
  'k15-spam-report': { menuPath: '채팅방 › 위쪽 신고', steps: [
    ['스팸이 온 채팅방에서 ‘신고’를 누르세요.', sheet(room({ name: '모르는 사람', msgs: [{ text: '대출 가능합니다' }] }), ['친구 추가', '차단', '신고']), '신고'],
    ['신고 이유를 고르고 ‘확인’을 누르세요.', list('신고 이유', [{ label: '스팸·광고', check: true }, { label: '사기·사칭', check: false }, { label: '음란물', check: false }], { button: '확인' }), '확인'],
  ] },
  'k15-wont-open': { menuPath: '안내 › 업데이트 · 다시 시작', steps: [
    ['카카오톡이 안 열리면 차례로 해 보세요.', info('카카오톡이 안 열릴 때', ['휴대폰을 껐다 켜요.', 'Play 스토어에서 카카오톡을 업데이트해요.', '저장공간이 부족한지 확인해요.']), null],
    ['Play 스토어에서 ‘업데이트’가 있으면 누르세요.', G({ kind: 'list', title: '카카오톡', items: [{ t: '카카오톡', s: '업데이트 가능', btn: '업데이트' }] }), '카카오톡 업데이트'],
  ] },
  'k15-send-fail': { menuPath: '채팅방 › 빨간 느낌표 › 재전송', steps: [
    ['메시지 옆에 빨간 느낌표가 있으면 보내지지 않은 거예요.', info('메시지가 안 보내질 때', ['와이파이나 데이터가 켜져 있는지 확인해요.', '비행기 모드가 꺼져 있는지 확인해요.', '느낌표를 눌러 ‘재전송’해요.']), null],
    ['느낌표를 누르고 ‘재전송’을 누르세요.', sheet(room({ msgs: MSGS }), ['재전송', '삭제']), '재전송'],
  ] },
  'k15-photo-fail': { menuPath: '안내', steps: [
    ['사진이 안 보내지면 확인하세요.', info('사진이 안 보내질 때', ['인터넷 연결을 확인해요.', '동영상은 너무 길면 안 보내질 수 있어요.', '카카오톡에 ‘사진 접근 권한’이 허용되어 있는지 확인해요.']), null],
  ] },
  'k15-no-notify': { menuPath: '더보기 › 설정 › 전체 설정 › 알림', steps: [
    ['알림이 안 오면 카카오톡 알림부터 확인하세요.', info('알림이 안 올 때', ['카카오톡 설정 › 알림이 켜져 있나요?', '그 채팅방 알림을 꺼 두지 않았나요?', '휴대폰 설정 › 알림 › 카카오톡이 켜져 있나요?', '방해금지 시간대가 아닌가요?']), null],
    ...toSettings('알림'),
    ['맨 위 ‘알림’ 스위치가 켜져 있는지 보세요.', sub('알림'), '알림 스위치'],
  ] },
  'k15-storage': { menuPath: '더보기 › 설정 › 전체 설정 › 기타 › 저장공간 관리', steps: [
    ...toSettings('기타'),
    ['‘저장공간 관리’를 누르세요.', sub('기타', ['저장공간 관리', { label: '앱 버전', value: '최신 버전' }, '공지사항', '도움말']), '저장공간 관리'],
    ['‘캐시 데이터 삭제’를 누르면 대화는 그대로 두고 공간을 비워요.', list('저장공간 관리', [{ label: '캐시 데이터 삭제', sub: '임시 파일만 지워요' }, { label: '채팅방별 미디어 정리', sub: '사진·동영상을 지워요' }]), '캐시 데이터 삭제', { hint: '‘채팅방별 미디어 정리’는 사진이 지워지니 조심하세요.' }],
  ] },
  'k15-help-center': { menuPath: '더보기 › 설정 › 전체 설정 › 기타 › 도움말', steps: [
    ...toSettings('기타'),
    ['‘도움말’을 누르면 카카오 고객센터로 가요.', sub('기타', [{ label: '앱 버전', value: '최신 버전' }, '공지사항', '도움말', '오픈소스 라이선스']), '도움말'],
    ['궁금한 내용을 검색하거나 문의하기를 누르세요.', { v: 'search', placeholder: '궁금한 내용을 검색해 보세요', results: [{ label: '대화 백업 방법', sub: '도움말' }, { label: '계정 보호하기', sub: '도움말' }] }, '대화 백업 방법', { hint: '카카오 고객센터: cs.kakao.com' }],
  ] },
};
