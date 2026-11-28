// 아이폰 기종·iOS 버전 자료 (국내·해외 공통)
// 기준: Apple "iPhone 모델 식별하기"(https://support.apple.com/ko-kr/108044)와 iOS 버전별 지원 기기 안내.
// 관리자가 새 기종·새 iOS를 추가할 수 있도록 단순한 배열로 둔다. 모든 기종에 같은 기능이 있다고 가정하지 않는다:
// 기능은 기종별 표시(home·faceId·actionButton·cameraControl·port·dynamicIsland·ai·satellite)로 구분한다.
// 마지막 대조: 2026-11-28 (검수 필요: 운영자가 Apple 공식 목록과 다시 대조 후 checkedBy 기록)

/** iOS 버전: 첫 지원 기종 조건과 화면 차이 메모 */
export const IOS_VERSIONS = [
  { v: '15', year: 2021, note: '홈 화면·설정 디자인은 16과 비슷' },
  { v: '16', year: 2022, note: '잠금 화면 꾸미기 추가' },
  { v: '17', year: 2023, note: '보조 접근(Assistive Access)·대기 모드(StandBy)·연락처 포스터 추가' },
  { v: '18', year: 2024, note: '홈 화면 아이콘 자유 배치·제어 센터 새 디자인. 18.1부터 Apple Intelligence(일부 기종·언어)' },
  { v: '26', year: 2025, note: '버전 이름이 연도 방식으로 바뀜(18 다음이 26). 새 디자인(Liquid Glass)으로 메뉴 모양이 달라짐' },
];

const M = (id, name, ko, series, year, f) => ({ id, name, ko, series, year, ...f });
const TOUCH = { home: true, touchId: true, faceId: false, port: 'lightning' };
const FACE = { home: false, touchId: false, faceId: true };

/** 공식 출시 아이폰 (iOS 15 이상을 쓸 수 있는 기종부터). maxIos: 설치할 수 있는 마지막 큰 버전 */
export const IPHONE_MODELS = [
  M('6s', 'iPhone 6s', '아이폰 6s', 'other', 2015, { ...TOUCH, minIos: '15', maxIos: '15' }),
  M('6s-plus', 'iPhone 6s Plus', '아이폰 6s 플러스', 'other', 2015, { ...TOUCH, minIos: '15', maxIos: '15' }),
  M('se1', 'iPhone SE (1st generation)', '아이폰 SE (1세대)', 'se', 2016, { ...TOUCH, minIos: '15', maxIos: '15' }),
  M('7', 'iPhone 7', '아이폰 7', 'other', 2016, { ...TOUCH, minIos: '15', maxIos: '15' }),
  M('7-plus', 'iPhone 7 Plus', '아이폰 7 플러스', 'other', 2016, { ...TOUCH, minIos: '15', maxIos: '15' }),
  M('8', 'iPhone 8', '아이폰 8', 'other', 2017, { ...TOUCH, minIos: '15', maxIos: '16' }),
  M('8-plus', 'iPhone 8 Plus', '아이폰 8 플러스', 'other', 2017, { ...TOUCH, minIos: '15', maxIos: '16' }),
  M('x', 'iPhone X', '아이폰 X', 'x', 2017, { ...FACE, port: 'lightning', minIos: '15', maxIos: '16' }),
  M('xs', 'iPhone XS', '아이폰 XS', 'x', 2018, { ...FACE, port: 'lightning', minIos: '15', maxIos: '18' }),
  M('xs-max', 'iPhone XS Max', '아이폰 XS 맥스', 'x', 2018, { ...FACE, port: 'lightning', minIos: '15', maxIos: '18' }),
  M('xr', 'iPhone XR', '아이폰 XR', 'x', 2018, { ...FACE, port: 'lightning', minIos: '15', maxIos: '18' }),
  M('11', 'iPhone 11', '아이폰 11', '11', 2019, { ...FACE, port: 'lightning', minIos: '15', maxIos: '26' }),
  M('11-pro', 'iPhone 11 Pro', '아이폰 11 프로', '11', 2019, { ...FACE, port: 'lightning', minIos: '15', maxIos: '26' }),
  M('11-pro-max', 'iPhone 11 Pro Max', '아이폰 11 프로 맥스', '11', 2019, { ...FACE, port: 'lightning', minIos: '15', maxIos: '26' }),
  M('se2', 'iPhone SE (2nd generation)', '아이폰 SE (2세대)', 'se', 2020, { ...TOUCH, minIos: '15', maxIos: '26' }),
  M('12-mini', 'iPhone 12 mini', '아이폰 12 미니', '12', 2020, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('12', 'iPhone 12', '아이폰 12', '12', 2020, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('12-pro', 'iPhone 12 Pro', '아이폰 12 프로', '12', 2020, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('12-pro-max', 'iPhone 12 Pro Max', '아이폰 12 프로 맥스', '12', 2020, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('13-mini', 'iPhone 13 mini', '아이폰 13 미니', '13', 2021, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('13', 'iPhone 13', '아이폰 13', '13', 2021, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('13-pro', 'iPhone 13 Pro', '아이폰 13 프로', '13', 2021, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('13-pro-max', 'iPhone 13 Pro Max', '아이폰 13 프로 맥스', '13', 2021, { ...FACE, port: 'lightning', magsafe: true, minIos: '15', maxIos: '26' }),
  M('se3', 'iPhone SE (3rd generation)', '아이폰 SE (3세대)', 'se', 2022, { ...TOUCH, minIos: '15', maxIos: '26' }),
  M('14', 'iPhone 14', '아이폰 14', '14', 2022, { ...FACE, port: 'lightning', magsafe: true, satellite: true, minIos: '16', maxIos: '26' }),
  M('14-plus', 'iPhone 14 Plus', '아이폰 14 플러스', '14', 2022, { ...FACE, port: 'lightning', magsafe: true, satellite: true, minIos: '16', maxIos: '26' }),
  M('14-pro', 'iPhone 14 Pro', '아이폰 14 프로', '14', 2022, { ...FACE, port: 'lightning', magsafe: true, satellite: true, dynamicIsland: true, minIos: '16', maxIos: '26' }),
  M('14-pro-max', 'iPhone 14 Pro Max', '아이폰 14 프로 맥스', '14', 2022, { ...FACE, port: 'lightning', magsafe: true, satellite: true, dynamicIsland: true, minIos: '16', maxIos: '26' }),
  M('15', 'iPhone 15', '아이폰 15', '15', 2023, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, minIos: '17', maxIos: '26' }),
  M('15-plus', 'iPhone 15 Plus', '아이폰 15 플러스', '15', 2023, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, minIos: '17', maxIos: '26' }),
  M('15-pro', 'iPhone 15 Pro', '아이폰 15 프로', '15', 2023, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, ai: true, minIos: '17', maxIos: '26' }),
  M('15-pro-max', 'iPhone 15 Pro Max', '아이폰 15 프로 맥스', '15', 2023, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, ai: true, minIos: '17', maxIos: '26' }),
  M('16', 'iPhone 16', '아이폰 16', '16', 2024, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '18', maxIos: '26' }),
  M('16-plus', 'iPhone 16 Plus', '아이폰 16 플러스', '16', 2024, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '18', maxIos: '26' }),
  M('16-pro', 'iPhone 16 Pro', '아이폰 16 프로', '16', 2024, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '18', maxIos: '26' }),
  M('16-pro-max', 'iPhone 16 Pro Max', '아이폰 16 프로 맥스', '16', 2024, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '18', maxIos: '26' }),
  M('16e', 'iPhone 16e', '아이폰 16e', '16', 2025, { ...FACE, port: 'usb-c', satellite: true, actionButton: true, ai: true, minIos: '18', maxIos: '26' }),
  M('17', 'iPhone 17', '아이폰 17', '17', 2025, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '26', maxIos: '26' }),
  M('air', 'iPhone Air', '아이폰 에어', '17', 2025, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '26', maxIos: '26' }),
  M('17-pro', 'iPhone 17 Pro', '아이폰 17 프로', '17', 2025, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '26', maxIos: '26' }),
  M('17-pro-max', 'iPhone 17 Pro Max', '아이폰 17 프로 맥스', '17', 2025, { ...FACE, port: 'usb-c', magsafe: true, satellite: true, dynamicIsland: true, actionButton: true, cameraControl: true, ai: true, minIos: '26', maxIos: '26' }),
];

/** 기종 묶음(선택 화면의 순서) */
export const SERIES = [
  ['17', 'iPhone 17 시리즈·Air', 'iPhone 17 series & Air'], ['16', 'iPhone 16 시리즈', 'iPhone 16 series'], ['15', 'iPhone 15 시리즈', 'iPhone 15 series'],
  ['14', 'iPhone 14 시리즈', 'iPhone 14 series'], ['13', 'iPhone 13 시리즈', 'iPhone 13 series'], ['12', 'iPhone 12 시리즈', 'iPhone 12 series'],
  ['11', 'iPhone 11 시리즈', 'iPhone 11 series'], ['x', 'iPhone X·XS·XR', 'iPhone X, XS, XR'], ['se', 'iPhone SE 시리즈', 'iPhone SE series'],
  ['other', '그 밖의 아이폰(6s·7·8)', 'Other (6s, 7, 8)'],
];

/** 기종별 기능 이름(선택 결과 화면에 표시) */
export const FEATURE_LABELS = {
  home: ['홈 버튼(아래 동그란 버튼)', 'Home button'],
  touchId: ['Touch ID(지문)', 'Touch ID (fingerprint)'],
  faceId: ['Face ID(얼굴 인식)', 'Face ID (face recognition)'],
  actionButton: ['동작 버튼(왼쪽 위 작은 버튼)', 'Action button'],
  cameraControl: ['카메라 컨트롤(오른쪽 아래 버튼)', 'Camera Control'],
  dynamicIsland: ['다이내믹 아일랜드(화면 위 검은 알약 모양)', 'Dynamic Island'],
  ai: ['Apple Intelligence(지원 언어·지역 확인 필요)', 'Apple Intelligence (check language and region)'],
  satellite: ['위성 긴급 구조 요청(지원 국가에서만)', 'Emergency SOS via satellite (some countries)'],
  magsafe: ['MagSafe(자석 무선 충전)', 'MagSafe'],
};
export const PORT_LABELS = { lightning: ['충전 단자: 라이트닝', 'Charging port: Lightning'], 'usb-c': ['충전 단자: USB-C', 'Charging port: USB-C'] };

const ORDER = IOS_VERSIONS.map((x) => x.v);
/** 이 기종에서 쓸 수 있는 iOS 버전들 */
export const iosFor = (model) => ORDER.filter((v) => ORDER.indexOf(v) >= ORDER.indexOf(model.minIos) && ORDER.indexOf(v) <= ORDER.indexOf(model.maxIos));
export const modelById = (id) => IPHONE_MODELS.find((m) => m.id === id) ?? null;
export const MODELS_LAST_CHECKED = '2026-11-28';
