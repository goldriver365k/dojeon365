/** [생활] 07~13 */
import { lesson, app, tap, menu, path, toggle, self, look, swipe, hold, back, goHome, openQuick, openNoti, M, SRC, MENUS, SIDE, HOME, APPS, QUICK, NOTI, PRACTICE_ONLY } from './helpers.js?v=20261125.2159';

const Q = (on) => ({ ...QUICK, on });

export const ch07 = {
  num: 7, title: '알림과 빠른 설정 쓰기', group: 'life',
  lessons: [
    lesson('g07-noti', '알림 보기와 지우기', {
      q: ['알림', '알림 지우기', '위에 뜨는 거', '알림 삭제'],
      src: [M(43, '알림창')],
      cards: [
        openNoti(),
        tap('김영희', NOTI, { text: '읽을 알림을 누르세요.', hint: '알림을 누르면 해당 앱이 열려요.' }),
        openNoti(),
        tap('모두 삭제', NOTI, { text: '‘모두 삭제’를 누르세요.', hint: '알림이 모두 지워져요.' }),
      ],
    }),
    lesson('g07-appnoti', '앱 알림 조절하기', {
      q: ['알림 끄기', '알림이 너무 많아요', '앱 알림', '시끄러워요'],
      src: [M(95, '알림')],
      check: '알림 설정 안의 메뉴 이름(앱 알림)은 실제 화면 확인 필요',
      cards: [
        ...path('알림', '앱 알림'),
        toggle('앱 알림', '게임 앱', { on: false, items: [{ t: '카카오톡', sw: true }, { t: '메시지', sw: true }, { t: '게임 앱', sw: true }, { t: '쇼핑 앱', sw: true }], text: '알림을 끌 앱의 스위치를 눌러 끄세요.', hint: '중요한 메시지 앱의 알림은 켜 두세요.' }),
      ],
    }),
    lesson('g07-quick', '빠른 설정창 열기', {
      q: ['빠른 설정', '위에서 내리기', '퀵 패널', '와이파이 버튼'],
      src: [M(44, '빠른 설정창')],
      cards: [
        openQuick(),
        look('파란 버튼은 켜진 기능이에요. 살펴보세요.', QUICK, { hint: '버튼을 누르면 켜지고 꺼져요.', alt: '빠른 설정창. 와이파이, 소리, 모바일 데이터 버튼이 파랗게 켜져 있습니다.' }),
        hold('Wi-Fi', QUICK, { text: '‘Wi-Fi’ 버튼을 길게 누르세요.', hint: '길게 누르면 자세한 설정이 열려요.' }),
        swipe('up', '화면을 위로 밀어 닫으세요.', QUICK),
      ],
    }),
    lesson('g07-flash', '손전등 켜기', {
      q: ['손전등', '플래시', '불 켜기', '라이트', '어두워요'],
      src: [M(44, '빠른 설정창')],
      cards: [
        openQuick(),
        tap('손전등', QUICK, { text: '‘손전등’을 누르세요.', hint: '휴대폰 뒷면에서 불이 켜져요.' }),
        tap('손전등', Q(['Wi-Fi', '소리', '모바일 데이터', '손전등']), { text: '끄려면 ‘손전등’을 한 번 더 누르세요.' }),
      ],
    }),
    lesson('g07-rotate', '화면 회전 조절하기', {
      q: ['화면 회전', '화면이 돌아가요', '가로 화면', '세로 고정'],
      src: [M(44, '빠른 설정창')],
      cards: [
        openQuick(),
        tap('화면 회전', QUICK, { text: '‘화면 회전’을 누르세요.', hint: '켜면 휴대폰을 옆으로 눕힐 때 화면도 돌아가요. 끄면 세로로 고정돼요.' }),
        self('휴대폰을 옆으로 눕혀 보세요.', { icon: '⟲', lines: ['동영상을 크게 볼 때 편해요.'] }),
      ],
    }),
    lesson('g07-dnd', '방해 금지와 비행기 모드 쓰기', {
      q: ['방해 금지', '비행기 모드', '조용히', '알림 소리 끄기', '비행기 탈 때'],
      src: [M(44, '빠른 설정창'), M(89, '연결 · 비행기 탑승 모드')],
      cards: [
        openQuick(),
        tap('방해 금지', QUICK, { text: '‘방해 금지’를 누르세요.', hint: '전화·알림 소리가 울리지 않아요. 다시 누르면 꺼져요.' }),
        tap('방해 금지', Q(['Wi-Fi', '소리', '모바일 데이터', '방해 금지']), { text: '‘방해 금지’를 한 번 더 눌러 끄세요.' }),
        tap('비행기 탑승 모드', QUICK, { text: '‘비행기 탑승 모드’를 누르세요.', hint: '전화와 인터넷이 끊겨요. 비행기 안에서 쓰세요.' }),
        tap('비행기 탑승 모드', Q(['비행기 탑승 모드']), { text: '비행기에서 내리면 다시 눌러 끄세요.' }),
      ],
    }),
  ],
};

const WIFI = { kind: 'list', title: 'Wi-Fi', items: [{ t: 'Wi-Fi', sw: true }, { t: '우리집_WiFi', s: '보안 · 신호 강함' }, { t: '카페_무료', s: '개방' }] };
const BT = { kind: 'list', title: '블루투스', items: [{ t: '블루투스', sw: true }, { t: '내 이어폰', s: '연결 가능한 기기' }] };

export const ch08 = {
  num: 8, title: '인터넷과 주변 기기 연결하기', group: 'life',
  lessons: [
    lesson('g08-wifi', '와이파이 연결하기', {
      q: ['와이파이', 'wifi', '인터넷 연결', '무선 인터넷', '데이터 아끼기'],
      src: [M(90, 'Wi-Fi')],
      cards: [
        ...path('연결', 'Wi-Fi'),
        toggle('Wi-Fi', 'Wi-Fi', { items: [{ t: 'Wi-Fi', sw: false }], hint: '켜면 주변 와이파이 목록이 나와요.' }),
        tap('우리집_WiFi', WIFI, { text: '연결할 와이파이 이름을 누르세요.', hint: '자물쇠 표시는 비밀번호가 필요해요.' }),
        self('와이파이 비밀번호를 적으세요.', { screen: { kind: 'keyboard', title: '우리집_WiFi', text: '••••••••', english: true }, alt: '와이파이 비밀번호를 적는 화면.', hint: '공유기 뒷면에 적혀 있는 경우가 많아요.' }),
        tap('연결', { kind: 'list', title: '우리집_WiFi', items: [{ t: '비밀번호', s: '••••••••' }], button: '연결' }, { text: '‘연결’을 누르세요.' }),
      ],
    }),
    lesson('g08-data', '모바일 데이터 켜고 끄기', {
      q: ['데이터', '모바일 데이터', 'LTE', '5G', '인터넷이 안 돼요'],
      src: [M(36, '네트워크 사용하기'), M(89, '연결 · 데이터 사용')],
      cards: [
        ...path('연결', '데이터 사용'),
        toggle('데이터 사용', '모바일 데이터', { items: [{ t: '모바일 데이터', sw: false }, '모바일 데이터 사용량', '데이터 절약 모드'], hint: '끄면 와이파이에서만 인터넷이 돼요.' }),
      ],
    }),
    lesson('g08-usage', '데이터 사용량 보기', {
      q: ['데이터 사용량', '데이터 얼마나', '요금', '데이터 남은 양'],
      src: [M(89, '연결 · 데이터 사용')],
      cards: [
        ...path('연결', '데이터 사용'),
        tap('모바일 데이터 사용량', { kind: 'list', title: '데이터 사용', items: [{ t: '모바일 데이터', sw: true }, '모바일 데이터 사용량', '데이터 절약 모드'] }),
        look('이번 달에 쓴 양을 확인하세요.', { kind: 'list', title: '모바일 데이터 사용량', items: [{ t: '이번 달 사용량', s: '3.2GB' }, { t: '유튜브', s: '1.4GB' }, { t: '카카오톡', s: '0.6GB' }] }, { hint: '많이 쓰는 앱이 위에 나와요. 남은 양은 통신사 앱에서 볼 수 있어요.' }),
      ],
    }),
    lesson('g08-bt', '블루투스 이어폰 연결하기', {
      q: ['블루투스', '무선 이어폰', '버즈', '이어폰 연결', '스피커 연결'],
      src: [M(91, '블루투스')],
      cards: [
        self('이어폰을 연결 모드로 켜세요.', { icon: '🎧', lines: ['방법은 이어폰 설명서를 보세요. 보통 케이스를 열거나 버튼을 길게 눌러요.'] }),
        ...path('연결', '블루투스'),
        toggle('블루투스', '블루투스', { items: [{ t: '블루투스', sw: false }] }),
        tap('내 이어폰', BT, { text: '목록에서 내 이어폰 이름을 누르세요.' }),
        tap('연결', { kind: 'dialog', title: '내 이어폰', message: '이 기기와 연결할까요?', buttons: ['취소', '연결'] }, { text: '‘연결’을 누르세요.' }),
      ],
    }),
    lesson('g08-hotspot', '핫스팟 쓰기', {
      q: ['핫스팟', '테더링', '데이터 나눠주기', '노트북 인터넷'],
      src: [M(92, '모바일 핫스팟')],
      cards: [
        ...path('연결', '모바일 핫스팟 및 테더링', '모바일 핫스팟'),
        toggle('모바일 핫스팟', '모바일 핫스팟', { items: [{ t: '모바일 핫스팟', sw: false }, { t: '네트워크 이름', s: 'Galaxy S26' }, { t: '비밀번호', s: '보기' }, 'QR 코드'], note: '추가 요금이 생길 수 있어요. 요금제를 먼저 확인하세요.' }),
        self('다른 기기의 와이파이 목록에서 내 휴대폰 이름을 고르세요.', { icon: '📶', lines: ['비밀번호는 핫스팟 화면에 나와 있어요.'] }),
      ],
    }),
    lesson('g08-location', '위치와 NFC 설정 찾기', {
      q: ['위치', 'GPS', 'NFC', '교통카드 찍기', '내 위치'],
      src: [M(103, '위치'), M(89, '연결 · NFC 및 비접촉 결제')],
      cards: [
        ...path('위치'),
        toggle('위치', '위치', { items: [{ t: '위치', sw: false }, '앱 권한', '위치 서비스', '최근 접근 기록'], hint: '지도·날씨 앱이 내 위치를 알 수 있어요.' }),
        back('위치', [{ t: '위치', sw: true }, '앱 권한', '위치 서비스']),
        menu('설정', '연결'),
        toggle('연결', 'NFC 및 비접촉 결제', { hint: '휴대폰으로 교통카드·결제를 하려면 켜요.' }),
      ],
    }),
  ],
};

const BROWSER = { kind: 'browser' };
const PLAY = { kind: 'list', title: 'Google Play', back: false, searchBar: '앱 및 게임 검색', items: [{ t: '추천 앱' }, { t: '인기 차트' }], tabs: ['게임', '앱', '검색', '도서'], tab: '앱' };
const PLAY_RESULT = { kind: 'list', title: '검색 결과', items: [{ t: '카카오톡', s: 'Kakao Corp.', btn: '설치' }, { t: '카카오맵', s: 'Kakao Corp.' }] };

export const ch09 = {
  num: 9, title: '인터넷 검색하고 앱 설치하기', group: 'life',
  lessons: [
    lesson('g09-search', '삼성 인터넷에서 검색하기', {
      q: ['인터넷 검색', '검색', '찾아보기', '날씨 검색', '삼성 인터넷', '브라우저'],
      src: [M(72, '삼성 브라우저')],
      cards: [
        app('브라우저', { note: '최신 버전(One UI 9)에서는 ‘삼성 인터넷’ 이름이 ‘삼성 브라우저(브라우저)’로 바뀌었어요.' }),
        tap('주소창', BROWSER, { text: '위쪽 주소창을 누르세요.' }),
        self('찾을 말을 적으세요.', { screen: { kind: 'keyboard', title: '검색', text: '서울 날씨' }, alt: '검색어를 적는 그림.' }),
        tap('줄 바꿈 자판', { kind: 'keyboard', title: '검색', text: '서울 날씨' }, { text: '자판 오른쪽 아래 ‘이동(↵)’ 버튼을 누르세요.' }),
        tap('서울 날씨 - 기상청', { kind: 'browser', url: '서울 날씨', results: ['서울 날씨 - 기상청', '오늘의 날씨 소식'] }, { text: '읽을 검색 결과를 누르세요.' }),
      ],
    }),
    lesson('g09-bookmark', '자주 보는 페이지 저장하기', {
      q: ['북마크', '즐겨찾기 인터넷', '페이지 저장', '자주 가는 사이트'],
      src: [M(72, '삼성 브라우저')],
      cards: [
        app('브라우저'),
        tap('북마크 추가 아이콘', { kind: 'browser', url: 'news.example.kr', page: '오늘의 소식' }, { text: '주소창 오른쪽 별(☆)을 누르세요.', hint: '지금 보는 페이지가 북마크에 저장돼요.' }),
        tap('북마크 목록', { kind: 'browser', url: 'news.example.kr', page: '오늘의 소식' }, { text: '나중에 열 때는 아래쪽 별(북마크)을 누르세요.' }),
        tap('오늘의 소식', { kind: 'list', title: '북마크', items: [{ t: '오늘의 소식', s: 'news.example.kr' }] }, { text: '저장한 페이지를 누르세요.' }),
      ],
    }),
    lesson('g09-qr', 'QR코드 열기', {
      q: ['QR', 'QR코드', '큐알', '네모 바코드'],
      src: [M(63, '카메라')],
      check: '카메라가 QR코드를 알아봤을 때 나오는 표시는 실제 화면 확인 필요',
      cards: [
        app('카메라'),
        self('카메라를 QR코드에 비추세요.', { screen: { kind: 'camera', qr: '웹 사이트 열기' }, alt: '카메라 화면에 QR코드가 보이는 그림.', hint: '‘사진’ 모드에서 코드가 화면 가운데 오게 해요.' }),
        tap('QR 링크', { kind: 'camera', qr: '웹 사이트 열기' }, { text: '화면에 나온 노란 주소 표시를 누르세요.', hint: '모르는 곳에서 받은 QR코드는 조심하세요.' }),
      ],
    }),
    lesson('g09-files', '받은 파일 찾기', {
      q: ['다운로드', '받은 파일', '파일 찾기', '내려받은 거'],
      src: [M(79, '내 파일')],
      cards: [
        app('내 파일'),
        tap('다운로드', { kind: 'list', title: '내 파일', back: false, actions: ['검색', '옵션 더보기'], items: ['최근 파일', '이미지', '동영상', '오디오', '문서', '다운로드', '설치 파일', '내장 메모리'] }),
        tap('안내문.pdf', { kind: 'list', title: '다운로드', items: [{ t: '안내문.pdf', s: '오늘' }, { t: '사진.jpg', s: '어제' }] }, { text: '열 파일을 누르세요.' }),
      ],
    }),
    lesson('g09-stores', '플레이 스토어와 갤럭시 스토어 쓰기', {
      q: ['플레이 스토어', '갤럭시 스토어', '앱 가게', '구글 스토어'],
      src: [M(48, '앱 설치 및 관리'), M(77, '갤럭시 스토어'), SRC.play],
      cards: [
        app('Play 스토어'),
        look('구글의 앱 가게예요. 앱을 찾아 받을 수 있어요.', PLAY, { hint: 'Google 계정으로 로그인해야 써요.' }),
        goHome(PLAY),
        app('스토어'),
        look('삼성의 앱 가게예요. 삼성 앱과 테마가 많아요.', { kind: 'list', title: 'Galaxy Store', back: false, items: ['투데이', '앱', '게임', '테마'], tabs: ['투데이', '앱', '게임', '메뉴'], tab: '투데이' }),
      ],
    }),
    lesson('g09-install', '앱 설치·업데이트·삭제하기', {
      q: ['앱 설치', '앱 깔기', '앱 받기', '앱 지우기', '앱 삭제', '업데이트'],
      src: [M(48, '앱 설치 및 관리'), M(77, '갤럭시 스토어 · 내 앱과 콘텐츠 관리하기'), SRC.play],
      cards: [
        app('Play 스토어'),
        tap('검색창', PLAY, { text: '위쪽 검색창을 누르세요.' }),
        self('설치할 앱 이름을 적으세요.', { screen: { kind: 'keyboard', title: '검색', text: '카카오톡' }, alt: '앱 이름을 적는 그림.' }),
        tap('카카오톡 설치', PLAY_RESULT, { text: '앱 이름 옆 ‘설치’를 누르세요.' }),
        app('스토어', { hint: '앱 업데이트를 해 볼게요.' }),
        tap('메뉴', { kind: 'list', title: 'Galaxy Store', back: false, items: ['투데이', '앱', '게임'], tabs: ['투데이', '앱', '게임', '메뉴'], tab: '투데이' }, { text: '아래쪽 ‘메뉴’를 누르세요.' }),
        tap('업데이트', { kind: 'list', title: '메뉴', back: false, items: ['내 앱', '업데이트', '결제수단', '영수증'] }),
        tap('모두 업데이트', { kind: 'list', title: '업데이트', items: [{ t: '노트', s: '업데이트 가능' }, { t: '캘린더', s: '업데이트 가능' }], button: '모두 업데이트' }),
        hold('카카오톡', HOME, { text: '지울 앱을 홈 화면에서 길게 누르세요.' }),
        tap('설치 삭제', { kind: 'dialog', style: 'sheet', under: 'home', title: '카카오톡', buttons: ['선택', '앱 정보', '설치 삭제'] }),
        tap('확인', { kind: 'dialog', title: '카카오톡', message: '이 앱을 삭제할까요?', buttons: ['취소', '확인'] }, { text: '‘확인’을 누르세요.', hint: '지운 앱은 스토어에서 다시 설치할 수 있어요.' }),
      ],
    }),
    lesson('g09-google', '구글 앱과 통신사 앱 찾기', {
      q: ['구글', '유튜브', '통신사 앱', '요금 확인', 'T world', '마이케이티'],
      src: [M(83, 'Google(구글) 앱'), M(84, '이동통신 사업자 앱')],
      cards: [
        swipe('up', '홈 화면을 위로 밀어 앱스 화면을 여세요.', HOME),
        tap('검색', APPS, { text: '위쪽 ‘검색’을 누르세요.' }),
        self('찾을 앱 이름을 적으세요.', { screen: { kind: 'keyboard', title: '앱 검색', text: 'Google' }, alt: '앱 이름을 적는 그림.', hint: 'Google, YouTube, 또는 통신사 이름(T world, 마이케이티, U+one)을 적어 보세요.' }),
        tap('Google', { kind: 'home', apps: true, grid: ['Google', 'YouTube', 'Chrome', '지도'] }, { text: '찾은 앱을 누르세요.' }),
      ],
    }),
  ],
};

const CAM = { kind: 'camera' };

export const ch10 = {
  num: 10, title: '사진과 동영상 찍기', group: 'life',
  lessons: [
    lesson('g10-open', '카메라 열기', {
      q: ['카메라', '사진 찍기', '카메라 켜기'],
      src: [M(63, '사진 촬영하기')],
      cards: [
        app('카메라'),
        look('촬영 화면이 나왔는지 보세요.', CAM, { hint: '가운데 아래 흰 동그라미가 촬영 버튼이에요.', alt: '카메라 촬영 화면 그림.' }),
      ],
    }),
    lesson('g10-focus', '초점 맞추기', {
      q: ['초점', '흐려요', '사진이 뿌옇게', '선명하게'],
      src: [M(63, '사진 촬영하기'), M(138, '촬영한 사진 상태')],
      cards: [
        app('카메라'),
        tap('찍을 대상', CAM, { text: '화면에서 선명하게 찍을 곳을 누르세요.', hint: '노란 동그라미가 나오면 초점이 맞은 거예요.' }),
        tap('촬영 버튼', { ...CAM, focus: true }, { text: '흰 촬영 버튼을 누르세요.', hint: '흐리면 렌즈를 부드러운 천으로 닦아 보세요.' }),
      ],
    }),
    lesson('g10-switch', '앞뒤 카메라 바꾸기', {
      q: ['카메라 전환', '앞 카메라', '뒤 카메라', '화면이 나만 나와요'],
      src: [M(63, '사진 촬영하기')],
      cards: [
        app('카메라'),
        tap('카메라 전환', CAM, { text: '오른쪽 아래 돌아가는 화살표를 누르세요.', hint: '화면을 위나 아래로 밀어도 바뀌어요.' }),
        look('앞 카메라로 바뀌어 내 얼굴이 보이는지 확인하세요.', { ...CAM, front: true }, { alt: '앞 카메라로 얼굴이 보이는 그림.' }),
      ],
    }),
    lesson('g10-selfie', '셀카 찍기', {
      q: ['셀카', '내 얼굴 찍기', '자기 사진'],
      src: [M(63, '사진 촬영하기')],
      cards: [
        app('카메라'),
        tap('카메라 전환', CAM, { text: '오른쪽 아래 돌아가는 화살표를 누르세요.' }),
        self('얼굴이 화면 가운데 오게 휴대폰을 드세요.', { screen: { ...CAM, front: true }, alt: '앞 카메라에 얼굴이 가운데 보이는 그림.' }),
        tap('촬영 버튼', { ...CAM, front: true }, { text: '흰 촬영 버튼을 누르세요.' }),
      ],
    }),
    lesson('g10-zoom', '확대해서 찍기', {
      q: ['줌', '멀리 있는 것', '크게 찍기', '확대 촬영'],
      src: [M(63, '사진 촬영하기')],
      cards: [
        app('카메라'),
        tap('줌 3', CAM, { text: '아래쪽 숫자 ‘3’을 누르세요.', hint: '멀리 있는 것이 3배 크게 보여요. ‘1x’를 누르면 돌아와요.', note: '기종마다 숫자가 달라요(울트라는 더 크게 확대돼요).' }),
        tap('촬영 버튼', { ...CAM, zoom: '3' }, { text: '흰 촬영 버튼을 누르세요.' }),
      ],
    }),
    lesson('g10-timer', '타이머 쓰기', {
      q: ['타이머', '단체 사진', '혼자 찍기', '몇 초 뒤'],
      src: [M(67, '촬영 옵션 · 타이머')],
      check: '타이머 시간 목록(2·5·10초)은 실제 화면 확인 필요',
      cards: [
        app('카메라'),
        tap('퀵 컨트롤', CAM, { text: '위쪽 퀵 컨트롤(⌄) 아이콘을 누르세요.' }),
        tap('타이머', { ...CAM, top: ['타이머', '3:4', '설정'] }, { text: '‘타이머’ 아이콘을 누르세요.' }),
        tap('5초', { kind: 'dialog', style: 'sheet', title: '타이머', buttons: ['끄기', '2초', '5초', '10초'] }, { text: '‘5초’를 누르세요.' }),
        tap('촬영 버튼', CAM, { text: '흰 촬영 버튼을 누르세요.' }),
        self('숫자가 줄어든 뒤 사진이 찍혀요.', { screen: { ...CAM, timer: '3' }, alt: '카메라 화면 가운데 숫자 3이 보이는 그림.' }),
      ],
    }),
    lesson('g10-modes', '인물·야간 모드 써보기', {
      q: ['인물 사진', '배경 흐리게', '야간', '밤 사진', '어두운 곳'],
      src: [M(65, '촬영 모드')],
      cards: [
        app('카메라'),
        tap('인물 사진', CAM, { text: '아래쪽 ‘인물 사진’을 누르세요.', hint: '사람은 선명하고 배경은 흐리게 찍혀요.' }),
        tap('촬영 버튼', { ...CAM, mode: '인물 사진' }, { text: '흰 촬영 버튼을 누르세요.' }),
        tap('더보기', { ...CAM, mode: '인물 사진' }, { text: '아래쪽 ‘더보기’를 누르세요.' }),
        tap('야간', { kind: 'dialog', style: 'grid', title: '더보기', buttons: ['프로', '파노라마', '음식', '야간', '슬로우 모션', '하이퍼랩스'] }, { text: '‘야간’을 누르세요.', hint: '어두운 곳에서 플래시 없이 밝게 찍혀요. 찍는 동안 흔들리지 않게 잡으세요.' }),
      ],
    }),
    lesson('g10-video', '동영상 찍기', {
      q: ['동영상', '영상 찍기', '녹화', '비디오'],
      src: [M(65, '동영상 촬영하기')],
      cards: [
        app('카메라'),
        tap('동영상', CAM, { text: '아래쪽 ‘동영상’을 누르세요.' }),
        tap('녹화 시작', { ...CAM, mode: '동영상' }, { text: '빨간 녹화 버튼을 누르세요.' }),
        tap('녹화 중지', { ...CAM, mode: '동영상', recording: true }, { text: '다 찍었으면 녹화 중지 버튼을 누르세요.' }),
      ],
    }),
    lesson('g10-capture', '화면 캡처와 화면 녹화하기', {
      q: ['캡처', '스크린샷', '화면 저장', '화면 녹화', '화면 찍기'],
      src: [M(45, '화면 캡처 및 화면 녹화')],
      cards: [
        tap('측면 버튼과 음량(하) 버튼', SIDE, { text: '측면 버튼과 음량(하) 버튼을 동시에 짧게 누르세요.', hint: '찰칵 소리와 함께 지금 화면이 사진으로 저장돼요. 갤러리에서 볼 수 있어요.' }),
        openQuick(),
        tap('화면 녹화', QUICK, { text: '‘화면 녹화’를 누르세요.', hint: '버튼이 안 보이면 빠른 설정창을 한 번 더 아래로 미세요.' }),
        tap('녹화 시작', { kind: 'list', title: '화면 녹화', items: [{ t: '소리 없음', r: false }, { t: '미디어 소리', r: true }, { t: '미디어 소리 및 마이크', r: false }], button: '녹화 시작' }, { text: '‘녹화 시작’을 누르세요.' }),
        self('녹화를 끝내려면 화면 위쪽 중지 아이콘을 누르세요.', { icon: '■', lines: ['녹화한 영상은 갤러리에 저장돼요.'] }),
      ],
    }),
  ],
};

const GRID = { kind: 'gallery' };
const PHOTO = { kind: 'gallery', view: 'photo' };

export const ch11 = {
  num: 11, title: '찍은 사진과 파일 정리하기', group: 'life',
  lessons: [
    lesson('g11-latest', '방금 찍은 사진 찾기', {
      q: ['사진 찾기', '찍은 사진', '갤러리', '사진 보기'],
      src: [M(68, '사진 보기')],
      cards: [
        app('갤러리'),
        tap('첫 번째 사진', GRID, { text: '맨 앞(왼쪽 위) 사진을 누르세요.', hint: '가장 최근에 찍은 사진이 맨 앞에 있어요.' }),
        swipe('left', '다음 사진을 보려면 왼쪽으로 미세요.', PHOTO, { target: '사진' }),
      ],
    }),
    lesson('g11-album', '앨범 만들기', {
      q: ['앨범', '사진 정리', '사진 모으기', '폴더'],
      src: [M(68, '갤러리')],
      check: '앨범 만들기 메뉴 이름은 실제 화면 확인 필요',
      cards: [
        app('갤러리'),
        tap('앨범', GRID, { text: '아래쪽 ‘앨범’을 누르세요.' }),
        tap('추가', { kind: 'list', title: '앨범', back: false, actions: ['추가', '옵션 더보기'], items: ['카메라', '스크린샷', '다운로드', '카카오톡'], tabs: ['사진', '앨범', '스토리', '메뉴'], tab: '앨범' }, { text: '위쪽 ‘+’(추가)를 누르세요.' }),
        tap('앨범', { kind: 'dialog', style: 'sheet', buttons: ['앨범', '그룹', '공유 앨범'] }, { text: '‘앨범’을 누르세요.' }),
        self('앨범 이름을 적으세요.', { screen: { kind: 'keyboard', title: '새 앨범', text: '손주 사진' }, alt: '새 앨범 이름을 적는 그림.' }),
        tap('만들기', { kind: 'dialog', title: '새 앨범', message: '손주 사진', buttons: ['취소', '만들기'] }, { text: '‘만들기’를 누르세요.', hint: '이어서 넣을 사진을 고르면 돼요.' }),
      ],
    }),
    lesson('g11-edit', '사진 자르고 밝게 하기', {
      q: ['사진 편집', '자르기', '밝게', '사진 고치기'],
      src: [M(68, '사진 보기')],
      check: '편집 화면 아래쪽 도구 이름은 실제 화면 확인 필요',
      cards: [
        app('갤러리'),
        tap('첫 번째 사진', GRID, { text: '고칠 사진을 누르세요.' }),
        tap('편집', PHOTO, { text: '아래쪽 연필 모양 ‘편집’을 누르세요.' }),
        self('사진 모서리를 안쪽으로 끌어 자르세요.', { screen: { ...PHOTO, bar: ['변형', '필터', '톤', '꾸미기'] }, alt: '사진 편집 화면 그림.' }),
        tap('톤', { ...PHOTO, bar: ['변형', '필터', '톤', '꾸미기'] }, { text: '아래쪽 ‘톤’을 누르세요.' }),
        self('밝기 막대를 오른쪽으로 미세요.', { icon: '☀', lines: ['조금씩 밀면서 화면을 보세요.'] }),
        tap('저장', { ...PHOTO, bar: ['되돌리기', '저장'] }, { text: '‘저장’을 누르세요.' }),
      ],
    }),
    lesson('g11-text', '사진 속 글자 복사하기', {
      q: ['글자 복사', '사진 글씨', '텍스트 추출', '명함 번호'],
      src: [M(66, '촬영 옵션 · 텍스트 추출'), M(68, '갤러리')],
      check: '갤러리의 글자 인식 아이콘 모양·위치는 실제 화면 확인 필요',
      cards: [
        app('갤러리'),
        tap('첫 번째 사진', GRID, { text: '글자가 있는 사진을 누르세요.' }),
        tap('텍스트 인식 아이콘', { ...PHOTO, textBtn: true }, { text: '노란 ‘T’ 아이콘을 누르세요.', hint: '사진에 글자가 있을 때만 나와요.' }),
        hold('010-0000-0000', { ...PHOTO, textShown: '010-0000-0000' }, { text: '복사할 글자를 길게 누르세요.' }),
        tap('복사', { kind: 'keyboard', title: '사진', text: '010-0000-0000', selected: '010-0000-0000', popup: ['모두 선택', '복사', '공유'] }, { text: '‘복사’를 누르세요.', hint: '문자나 메모에 붙여넣을 수 있어요.' }),
      ],
    }),
    lesson('g11-multi', '사진 여러 장 보내기', {
      q: ['사진 여러 장', '사진 보내기', '사진 공유', '여러 장 선택'],
      src: [M(69, '사진 및 동영상 삭제하기'), M(82, '콘텐츠(파일) 공유하기')],
      cards: [
        app('갤러리'),
        hold('첫 번째 사진', GRID, { text: '보낼 사진 하나를 길게 누르세요.' }),
        tap('사진 2', { ...GRID, selected: [0] }, { text: '함께 보낼 사진을 더 누르세요.', hint: '동그라미에 표시가 생기면 골라진 거예요.' }),
        tap('공유', { ...GRID, selected: [0, 1], sheet: ['공유', '삭제', '더보기'] }, { text: '아래쪽 ‘공유’를 누르세요.' }),
        tap('카카오톡', { kind: 'dialog', style: 'grid', title: '공유', buttons: ['메시지', '카카오톡', '퀵 셰어', '이메일'] }, { text: '보낼 앱(예: 카카오톡)을 누르세요.' }),
        self('받을 사람을 골라 보내세요.', { icon: '✉', lines: ['받는 사람을 고르고 ‘확인’ 또는 전송을 눌러요.'] }),
      ],
    }),
    lesson('g11-restore', '삭제한 사진 복원하기', {
      q: ['사진 복원', '지운 사진', '휴지통', '사진 되살리기'],
      src: [M(69, '사진 및 동영상 삭제하기')],
      cards: [
        app('갤러리'),
        tap('메뉴', GRID, { text: '아래쪽 ‘메뉴’를 누르세요.' }),
        tap('휴지통', { kind: 'list', title: '메뉴', back: false, items: ['즐겨찾기', '최근 항목', '동영상', '휴지통', '설정'] }),
        tap('첫 번째 사진', { ...GRID, title: '휴지통' }, { text: '되살릴 사진을 누르세요.', hint: '지운 사진은 일정 기간 휴지통에 남아 있어요.' }),
        tap('복원', { ...PHOTO, bar: ['복원', '삭제'] }, { text: '‘복원’을 누르세요.' }),
      ],
    }),
    lesson('g11-docs', '‘내 파일’에서 문서 찾기', {
      q: ['문서', '파일 찾기', 'PDF', '한글 파일', '내 파일'],
      src: [M(79, '내 파일')],
      cards: [
        app('내 파일'),
        tap('문서', { kind: 'list', title: '내 파일', back: false, actions: ['검색', '옵션 더보기'], items: ['최근 파일', '이미지', '동영상', '오디오', '문서', '다운로드', '설치 파일', '내장 메모리'] }),
        tap('안내문.pdf', { kind: 'list', title: '문서', items: [{ t: '안내문.pdf', s: '오늘' }, { t: '건강검진 결과.pdf', s: '11월 20일' }] }, { text: '열 문서를 누르세요.' }),
      ],
    }),
    lesson('g11-quickshare', '퀵 쉐어로 파일 보내기', {
      q: ['퀵 쉐어', '퀵 셰어', '옆 사람에게 보내기', '파일 보내기', '사진 옮기기'],
      src: [M(82, '퀵 셰어')],
      cards: [
        app('갤러리'),
        tap('첫 번째 사진', GRID, { text: '보낼 사진을 누르세요.' }),
        tap('공유', PHOTO, { text: '아래쪽 ‘공유’를 누르세요.' }),
        tap('퀵 셰어', { kind: 'dialog', style: 'grid', title: '공유', buttons: ['메시지', '카카오톡', '퀵 셰어', '이메일'] }, { text: '‘퀵 셰어’를 누르세요.', note: '받는 쪽 휴대폰도 퀵 셰어를 켜 두어야 해요(설정 → 기기 간 연결 → 퀵 셰어).' }),
        tap('가족 휴대폰', { kind: 'list', title: '퀵 셰어', items: [{ t: '가족 휴대폰', s: '가까운 기기' }] }, { text: '받을 휴대폰 이름을 누르세요.' }),
        self('받는 휴대폰에서 ‘수락’을 누르세요.', { icon: '⇄', lines: ['수락하면 사진이 전송돼요.'] }),
      ],
    }),
  ],
};

const CLOCK = (tab) => ({ kind: 'list', title: '시계', back: false, items: tab === '알람' ? [{ t: '오전 7:00', s: '매일', sw: true }] : [{ t: '00:05:00', s: '타이머' }], tabs: ['알람', '세계시각', '스톱워치', '타이머'], tab, fab: tab === '알람' ? '추가' : undefined, button: tab === '타이머' ? '시작' : undefined });
const NEW_EVENT = { kind: 'list', title: '새 일정', items: ['제목', { t: '시작', v: '11월 27일 오후 2:00' }, { t: '종료', v: '오후 3:00' }, { t: '알림', v: '10분 전' }, '반복', '메모'], button: '저장' };
const CAL = { kind: 'list', title: '11월', back: false, items: [{ t: '27일 목요일', s: '병원 진료 오후 2시' }], fab: '일정 추가' };

export const ch12 = {
  num: 12, title: '홈 화면과 생활 도구 쓰기', group: 'life',
  lessons: [
    lesson('g12-addapp', '홈 화면에 앱 놓기', {
      q: ['홈 화면에 추가', '바탕화면에 앱', '앱 꺼내기', '아이콘 추가'],
      src: [M(39, '앱 또는 폴더 이동하기')],
      cards: [
        swipe('up', '홈 화면을 위로 밀어 앱스 화면을 여세요.', HOME),
        hold('계산기', APPS, { text: '홈 화면에 놓을 앱을 길게 누르세요.' }),
        tap('홈 화면에 추가', { kind: 'dialog', style: 'sheet', title: '계산기', buttons: ['선택', '홈 화면에 추가', '앱 정보', '설치 삭제'] }),
      ],
    }),
    lesson('g12-folder', '폴더와 위젯 만들기', {
      q: ['폴더', '위젯', '앱 모으기', '날씨 위젯', '시계 위젯'],
      src: [M(39, '폴더 추가하기'), M(80, '날씨 실행하기')],
      cards: [
        self('홈 화면의 앱 하나를 길게 누른 채 다른 앱 위에 끌어 놓으세요.', { screen: { kind: 'home', mark: 'swipe-right' }, alt: '홈 화면에서 앱을 다른 앱 위로 끄는 화살표 그림.', hint: '두 앱이 들어 있는 폴더가 생겨요.' }),
        self('폴더 이름을 눌러 이름을 적으세요.', { icon: '▤', lines: ['예: 은행, 병원'] }),
        hold('빈 공간', HOME, { text: '홈 화면의 빈 곳을 길게 누르세요.' }),
        tap('위젯', { kind: 'app', title: '홈 화면 편집', back: false, buttons: ['배경화면 및 스타일', '테마', '위젯', '설정'] }, { text: '‘위젯’을 누르세요.' }),
        tap('날씨', { kind: 'list', title: '위젯', items: ['계산기', '날씨', '시계', '캘린더'] }, { text: '‘날씨’를 누르세요.' }),
        tap('추가', { kind: 'list', title: '날씨', items: [{ t: '날씨 위젯', s: '4 × 2' }], button: '추가' }, { text: '‘추가’를 누르세요.' }),
      ],
    }),
    lesson('g12-wallpaper', '배경·테마·잠금화면 바꾸기', {
      q: ['배경화면', '바탕화면 사진', '테마', '잠금화면', '손주 사진 배경'],
      src: [M(97, '배경화면 및 스타일'), M(98, '테마'), M(41, '잠금화면')],
      check: '배경화면 변경 화면의 항목 이름은 실제 화면 확인 필요',
      cards: [
        ...path('배경화면 및 스타일'),
        tap('배경화면 변경', { kind: 'list', title: '배경화면 및 스타일', items: ['배경화면 변경', '색상 팔레트'] }),
        tap('갤러리', { kind: 'list', title: '배경화면 변경', items: ['갤러리', 'AI 생성 배경화면', '추천 배경화면'] }, { text: '내 사진으로 하려면 ‘갤러리’를 누르세요.' }),
        tap('첫 번째 사진', { ...GRID, title: '사진 선택' }, { text: '배경으로 쓸 사진을 누르세요.' }),
        self('잠금화면과 홈 화면 중 어디에 쓸지 고르세요.', { icon: '🖼', lines: ['둘 다 고를 수도 있어요.'] }),
        self('‘완료’를 누르세요.', { icon: '✓', lines: ['테마를 바꾸려면 설정에서 ‘테마’를 눌러요.'] }),
      ],
    }),
    lesson('g12-alarm', '알람과 타이머 맞추기', {
      q: ['알람', '자명종', '깨우기', '타이머', '약 먹을 시간'],
      src: [M(79, '시계')],
      cards: [
        app('시계'),
        tap('알람', CLOCK('타이머'), { text: '아래쪽 ‘알람’을 누르세요.' }),
        tap('추가', CLOCK('알람'), { text: '오른쪽 아래 ‘+’를 누르세요.' }),
        self('시간을 위아래로 밀어 맞추세요.', { icon: '⏰', lines: ['오전·오후도 확인하세요.'] }),
        tap('저장', { kind: 'list', title: '알람 추가', items: [{ t: '시간', v: '오전 7:30' }, '반복', { t: '알람음', v: '기본' }], button: '저장' }, { text: '‘저장’을 누르세요.' }),
        tap('타이머', CLOCK('알람'), { text: '타이머를 쓰려면 아래쪽 ‘타이머’를 누르세요.' }),
        tap('시작', CLOCK('타이머'), { text: '시간을 정하고 ‘시작’을 누르세요.' }),
      ],
    }),
    lesson('g12-calendar', '달력에 약속 넣기', {
      q: ['달력', '캘린더', '약속', '일정', '병원 예약'],
      src: [M(78, '캘린더')],
      cards: [
        app('캘린더'),
        tap('일정 추가', CAL, { text: '오른쪽 아래 ‘+’(일정 추가)를 누르세요.' }),
        tap('제목', NEW_EVENT, { text: '‘제목’ 칸을 누르세요.' }),
        self('약속 이름을 적으세요.', { screen: { kind: 'keyboard', title: '새 일정', text: '병원 진료' }, alt: '일정 제목을 적는 그림.' }),
        tap('시작', NEW_EVENT, { text: '‘시작’을 눌러 날짜와 시간을 고르세요.' }),
        tap('저장', NEW_EVENT, { text: '‘저장’을 누르세요.' }),
      ],
    }),
    lesson('g12-reminder', '할 일 알림 받기', {
      q: ['할 일', '리마인더', '잊지 않게', '알림 받기', '약 먹기 알림'],
      src: [M(78, '캘린더')],
      check: '삼성 리마인더 앱이 따로 있는 기종도 있어 실제 화면 확인 필요(이 수업은 캘린더 알림 기준)',
      cards: [
        app('캘린더'),
        tap('일정 추가', CAL, { text: '오른쪽 아래 ‘+’(일정 추가)를 누르세요.' }),
        self('제목에 할 일을 적으세요.', { screen: { kind: 'keyboard', title: '새 일정', text: '혈압약 먹기' }, alt: '할 일을 적는 그림.' }),
        tap('알림', NEW_EVENT, { text: '‘알림’을 누르세요.' }),
        tap('10분 전', { kind: 'list', title: '알림', items: [{ t: '알림 없음', r: false }, { t: '정시', r: false }, { t: '10분 전', r: false }, { t: '1시간 전', r: false }, { t: '1일 전', r: false }] }, { text: '알림 받을 때(예: 10분 전)를 누르세요.' }),
        tap('저장', NEW_EVENT, { text: '‘저장’을 누르세요.', hint: '정한 시간에 알림이 와요.' }),
      ],
    }),
    lesson('g12-note', '삼성 노트 쓰기', {
      q: ['메모', '노트', '적어 두기', '삼성 노트'],
      src: [M(74, '삼성 노트')],
      cards: [
        app('노트'),
        tap('추가', { kind: 'list', title: '모든 노트', back: false, items: [{ t: '장보기', s: '어제' }], fab: '추가' }, { text: '오른쪽 아래 ‘+’를 누르세요.' }),
        self('적을 내용을 쓰세요.', { screen: { kind: 'keyboard', title: '새 노트', text: '우유, 두부, 사과' }, alt: '노트에 내용을 적는 그림.' }),
        tap('뒤로가기 버튼', { kind: 'keyboard', title: '새 노트', text: '우유, 두부, 사과' }, { text: '다 쓰면 뒤로가기 버튼을 누르세요.', hint: '자동으로 저장돼요.' }),
      ],
    }),
    lesson('g12-recorder', '음성 녹음하기', {
      q: ['녹음', '음성 녹음', '목소리 저장', '말 녹음'],
      src: [M(78, '음성 녹음')],
      cards: [
        app('음성 녹음'),
        tap('녹음', { kind: 'app', title: '음성 녹음', back: false, lines: ['00:00:00'], buttons: ['녹음'], primary: '녹음' }, { text: '‘녹음’ 버튼을 누르세요.' }),
        self('휴대폰에 대고 말하세요.', { icon: '🎙', lines: ['휴대폰 아래쪽 마이크를 가리지 마세요.'] }),
        tap('중지', { kind: 'app', title: '음성 녹음', back: false, lines: ['00:00:12'], buttons: ['일시 정지', '중지'], primary: '중지' }, { text: '‘중지’를 누르세요.', hint: '녹음 파일이 목록에 저장돼요.' }),
      ],
    }),
    lesson('g12-tools', '날씨·계산기·라디오 쓰기', {
      q: ['날씨', '계산기', '라디오', '오늘 날씨'],
      src: [M(80, '날씨'), M(79, '계산기'), M(78, '라디오')],
      cards: [
        app('날씨'),
        look('오늘 날씨와 기온을 보세요.', { kind: 'app', title: '날씨', back: false, hero: '서울 12° 맑음', heroColor: '#0288D1', lines: ['내일 14° · 모레 9°'] }, { hint: '내 위치 날씨를 보려면 위치를 켜 두어야 해요.' }),
        goHome({ kind: 'app', title: '날씨', back: false, hero: '서울 12° 맑음', heroColor: '#0288D1' }),
        app('계산기'),
        self('숫자와 +, = 를 눌러 계산하세요.', { icon: '±', lines: ['예: 12000 + 3500 ='] }),
        app('라디오', { hint: '라디오는 이어폰을 꽂아야 나와요. 이어폰 줄이 안테나 역할을 해요.', note: '라디오 앱은 기종·통신사에 따라 없을 수 있어요.' }),
      ],
    }),
  ],
};

const KAKAO_TABS = ['친구', '채팅', '쇼핑', '더보기'];
const KAKAO_LIST = { kind: 'list', title: '채팅', back: false, actions: ['검색', '추가'], items: [{ t: '가족방', s: '사진을 보냈습니다.' }, { t: '김영희', s: '저녁 같이 먹어요' }], tabs: KAKAO_TABS, tab: '채팅' };
const KCHAT = (title = '가족방', more = {}) => ({ kind: 'chat', app: '카카오톡', title, bubbles: [{ from: 'you', text: '오늘 저녁 어때요?' }], ...more });
const KAKAO_CHECK = '카카오톡 화면은 앱 업데이트로 자주 바뀌어 실제 화면 확인 필요';

export const ch13 = {
  num: 13, title: '가족에게 사진과 영상 보내기', group: 'life',
  lessons: [
    lesson('g13-install', '카카오톡 설치하고 열기', {
      q: ['카카오톡 설치', '카톡 깔기', '카톡 시작'],
      src: [M(48, '앱 설치 및 관리'), SRC.kakao, SRC.play],
      check: KAKAO_CHECK,
      cards: [
        app('Play 스토어'),
        tap('검색창', PLAY, { text: '위쪽 검색창을 누르세요.' }),
        self('‘카카오톡’이라고 적으세요.', { screen: { kind: 'keyboard', title: '검색', text: '카카오톡' }, alt: '검색 칸에 카카오톡을 적는 그림.' }),
        tap('카카오톡 설치', PLAY_RESULT, { text: '‘설치’를 누르세요.' }),
        tap('카카오톡 열기', { kind: 'list', title: '카카오톡', items: [{ t: '카카오톡', s: '설치됨', btn: '열기' }] }, { text: '설치가 끝나면 ‘열기’를 누르세요.' }),
        self('화면 안내에 따라 내 전화번호로 가입하세요.', { icon: 'K', color: '#8a6d00', lines: ['문자로 온 인증번호를 넣어요.'] }),
      ],
    }),
    lesson('g13-send', '가족에게 카톡 보내기', {
      q: ['카톡 보내기', '카카오톡 메시지', '가족 채팅'],
      src: [SRC.kakao],
      check: KAKAO_CHECK,
      cards: [
        app('카카오톡'),
        tap('채팅', { ...KAKAO_LIST, tab: '친구' }, { text: '아래쪽 ‘채팅’을 누르세요.' }),
        tap('가족방', KAKAO_LIST, { text: '보낼 대화방을 누르세요.' }),
        tap('입력창', KCHAT(), { text: '아래쪽 입력칸을 누르세요.' }),
        self('보낼 말을 적으세요.', { screen: { kind: 'keyboard', title: '가족방', text: '좋아요!' }, alt: '보낼 말을 적는 그림.' }),
        tap('전송 아이콘', KCHAT('가족방', { typed: '좋아요!' }), { text: '노란 전송 버튼을 누르세요.' }),
      ],
    }),
    lesson('g13-media', '사진과 동영상 보내기', {
      q: ['카톡 사진', '사진 보내기', '동영상 보내기', '손주 사진'],
      src: [SRC.kakao],
      check: KAKAO_CHECK,
      cards: [
        app('카카오톡'),
        tap('가족방', KAKAO_LIST, { text: '보낼 대화방을 누르세요.' }),
        tap('추가 아이콘', KCHAT(), { text: '입력칸 왼쪽 ‘+’를 누르세요.' }),
        tap('앨범', KCHAT('가족방', { attach: ['앨범', '카메라', '선물하기', '통화하기', '송금', '일정', '파일', '지도'] }), { text: '‘앨범’을 누르세요.' }),
        tap('첫 번째 사진', { ...GRID, title: '앨범' }, { text: '보낼 사진이나 동영상을 누르세요.', hint: '여러 장을 차례로 눌러 함께 보낼 수 있어요.' }),
        self('‘전송’을 누르세요.', { icon: '➤', color: '#8a6d00', lines: ['화면 아래 또는 위쪽에 전송 버튼이 있어요.'] }),
      ],
    }),
    lesson('g13-facetalk', '영상통화 하기', {
      q: ['영상통화', '페이스톡', '얼굴 보고 통화', '보이스톡'],
      src: [SRC.kakao, M(60, '전화 걸기')],
      check: KAKAO_CHECK,
      cards: [
        app('카카오톡'),
        tap('김영희', KAKAO_LIST, { text: '통화할 사람의 대화방을 누르세요.' }),
        tap('추가 아이콘', KCHAT('김영희'), { text: '입력칸 왼쪽 ‘+’를 누르세요.' }),
        tap('통화하기', KCHAT('김영희', { attach: ['앨범', '카메라', '선물하기', '통화하기', '송금', '일정', '파일', '지도'] }), { text: '‘통화하기’를 누르세요.' }),
        tap('페이스톡', { kind: 'dialog', style: 'sheet', buttons: ['보이스톡', '페이스톡'] }, { text: '‘페이스톡’을 누르세요.', hint: '와이파이에서 하면 데이터가 들지 않아요.', note: '전화 앱의 키패드에서도 영상통화 아이콘을 눌러 걸 수 있어요.' }),
      ],
    }),
    lesson('g13-mute', '단체방 알림 줄이기', {
      q: ['단체방', '알림 끄기 카톡', '카톡 시끄러워요', '단톡방'],
      src: [SRC.kakao],
      check: KAKAO_CHECK,
      cards: [
        app('카카오톡'),
        tap('동창회', { ...KAKAO_LIST, items: [{ t: '동창회', s: '새 메시지 99+' }, { t: '가족방', s: '사진을 보냈습니다.' }] }, { text: '알림을 줄일 단체방을 누르세요.' }),
        tap('메뉴', KCHAT('동창회'), { text: '오른쪽 위 줄 세 개(메뉴)를 누르세요.' }),
        toggle('채팅방 서랍', '알림', { on: false, items: [{ t: '알림', sw: true }, '사진·동영상', '파일', '나가기'], text: '‘알림’ 스위치를 눌러 끄세요.', hint: '이 방의 알림 소리만 꺼지고 대화는 그대로 볼 수 있어요.' }),
      ],
    }),
    lesson('g13-map', '지도에서 약속 장소 찾기', {
      q: ['지도', '길 찾기', '약속 장소', '위치 찾기', '어떻게 가요'],
      src: [M(83, 'Google(구글) 앱 · 지도'), SRC.gmaps],
      check: 'Google 지도 앱 화면 기준. 카카오맵·네이버 지도는 화면이 달라 실제 화면 확인 필요',
      cards: [
        app('지도'),
        tap('검색창', { kind: 'map' }, { text: '위쪽 검색창을 누르세요.' }),
        self('장소 이름을 적으세요.', { screen: { kind: 'keyboard', title: '지도 검색', text: '서울역' }, alt: '장소 이름을 적는 그림.' }),
        look('지도에 빨간 표시로 장소가 나왔는지 보세요.', { kind: 'map', query: '서울역', pin: '서울역' }),
        tap('경로', { kind: 'map', query: '서울역', pin: '서울역' }, { text: '‘경로’를 누르세요.', hint: '버스·지하철·걷기 중 고르면 가는 방법이 나와요.' }),
      ],
    }),
  ],
};

export const LIFE = [ch07, ch08, ch09, ch10, ch11, ch12, ch13];
