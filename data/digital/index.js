/**
 * 생활 디지털 연습장 — 목차와 세부 수업 목록
 *
 * 가게·교통·병원·은행·관공서·쇼핑에서 쓰는 디지털 기기와 앱을 **연습 화면**으로 안전하게 익힌다.
 * - 실제 돈이 나가거나 개인정보·비밀번호가 필요한 동작은 모두 연습 화면에서만 한다.
 * - 연습 화면은 특정 회사·기관의 화면을 흉내 내지 않고, 공통 순서를 담은 일반 화면으로 만든다.
 * - 세부 수업의 카드(cards)는 갤럭시 수업과 같은 형식이다(ch01-07.js, ch08-14.js, ch15-20.js). cards 가 없으면 ‘준비 중’으로 보인다.
 */

import { CHAPTERS_0 } from './ch-apps.js?v=20261125.2138';
import { CHAPTERS_1 } from './ch01-07.js?v=20261125.2138';
import { CHAPTERS_2 } from './ch08-14.js?v=20261125.2138';
import { CHAPTERS_3 } from './ch15-20.js?v=20261125.2138';

export const COURSE = {
  id: 'digital',
  title: '생활 디지털 연습장',
  lead: '가게·교통·병원·은행에서 쓰는 기계와 앱을 연습 화면으로 먼저 해 봐요.',
  safety: '돈이 나가거나 비밀번호가 필요한 일은 모두 연습 화면에서 해요. 실제 앱이나 기계에는 입력하지 않아요.',
};

export const GROUPS = [
  { id: 'apps', title: '필수 앱 준비', cat: 'cat-2' },
  { id: 'shop', title: '가게와 식당', cat: 'cat-1' },
  { id: 'move', title: '교통과 이동', cat: 'cat-3' },
  { id: 'health', title: '병원과 건강', cat: 'cat-2' },
  { id: 'money', title: '은행과 돈', cat: 'cat-4' },
  { id: 'public', title: '관공서와 생활 서비스', cat: 'cat-1' },
  { id: 'leisure', title: '쇼핑과 여가', cat: 'cat-3' },
];

export const CHAPTERS = [...CHAPTERS_0, ...CHAPTERS_1, ...CHAPTERS_2, ...CHAPTERS_3].sort((a, b) => a.num - b.num);

export function allLessons() {
  return CHAPTERS.flatMap((chapter) => chapter.lessons.map((lesson) => ({ lesson, chapter })));
}
