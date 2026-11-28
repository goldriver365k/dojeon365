/** 갤럭시 휴대폰 사용방법: 22개 목차 */
import { BASIC } from './ch01-06.js?v=20261128.0957';
import { LIFE } from './ch07-13.js?v=20261128.0957';
import { APPLY, ADV } from './ch14-22.js?v=20261128.0957';

export const GROUPS = [
  { id: 'basic', title: '기초' },
  { id: 'life', title: '생활' },
  { id: 'apply', title: '응용' },
  { id: 'adv', title: '고급 및 문제 해결' },
];

export const CHAPTERS = [...BASIC, ...LIFE, ...APPLY, ...ADV].sort((a, b) => a.num - b.num);

export function allLessons() {
  return CHAPTERS.flatMap((chapter) => chapter.lessons.map((lesson) => ({ lesson, chapter })));
}

const BY_ID = new Map(allLessons().map((e) => [e.lesson.id, e]));
export function findLesson(id) {
  return BY_ID.get(id) ?? null;
}
