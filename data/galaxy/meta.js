// 갤럭시 수업 메타데이터(수업 내용 파일은 그대로 두고 여기서만 덧붙인다).
// region: 'KR' = 한국 전용 앱·서비스를 다루는 수업 → 해외용 사이트에서 숨김
// support: 공식 자료로 확인한 지원 조건(only: 지원 기종 id, minOneUI: 최소 버전)
// layer: A 공통 / B 버전별 / C 기종별 / D 국가별
import { MODELS } from '../devices.js?v=20261125.2111';

const ULTRA = MODELS.filter((m) => m.spen).map((m) => m.id);
const S24UP = MODELS.filter((m) => m.covered && !m.id.startsWith('s23')).map((m) => m.id);
const AI = { minOneUI: '6.1' }; // Galaxy AI 는 One UI 6.1부터

export const META = {
  'g06-voice': { region: 'KR', layer: 'D', why: '편한자판 앱' },
  'g06-translate': { layer: 'B', support: AI },
  'g13-install': { region: 'KR', layer: 'D', why: '카카오톡' },
  'g13-send': { region: 'KR', layer: 'D', why: '카카오톡' },
  'g13-media': { region: 'KR', layer: 'D', why: '카카오톡' },
  'g13-facetalk': { region: 'KR', layer: 'D', why: '카카오톡' },
  'g13-mute': { region: 'KR', layer: 'D', why: '카카오톡' },
  'g13-map': { region: 'KR', layer: 'D', why: '국내 지도 앱 안내' },
  'g14-transit': { region: 'KR', layer: 'D', why: '국내 교통카드' },
  'g14-id': { region: 'KR', layer: 'D', why: '국내 모바일 신분증' },
  'g15-smishing': { region: 'KR', layer: 'D', why: '한국인터넷진흥원 안내' },
  'g15-find': { layer: 'C', support: { only: S24UP, onlyText: '설명서 기준 S24 시리즈부터 지원' } },
  'g19-interpret': { layer: 'B', support: AI },
  'g19-write': { layer: 'B', support: AI },
  'g19-transcribe': { layer: 'B', support: AI },
  'g19-photo': { layer: 'B', support: AI },
  'g19-circle': { layer: 'B', support: AI },
  'g21-spen': { layer: 'C', support: { only: ULTRA, onlyText: 'S펜은 Ultra 기종만 지원' } },
};

export const metaOf = (id) => META[id] ?? { layer: 'A' };
export const REVIEWED = '2026-11-25';
