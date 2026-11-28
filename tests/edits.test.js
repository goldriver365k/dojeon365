// 관리자 편집(edits.json) 적용 규칙 점검
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { cleanEdits, applyEdits } from '../i18n/edits.js';

const SHARED = ['Tap Home.', 'You go back.'];
const G = {
  TITLES: { aa1: ['slug-a', 'Title A'], bb2: ['slug-b', 'Title B'] },
  LESSONS: { aa1: { desc: 'Desc A', steps: [['One.'], SHARED] }, bb2: { desc: 'Desc B', steps: [SHARED] } },
};

test('제목·설명·단계를 덮어쓰고 주소(슬러그)는 그대로 둔다', () => {
  const r = applyEdits(G, {}, { lessons: { aa1: { title: 'New A', desc: 'New desc', steps: { 0: ['Changed.', 'Hint', ''] } } } });
  assert.deepEqual(r.G.TITLES.aa1, ['slug-a', 'New A']);
  assert.equal(r.G.LESSONS.aa1.desc, 'New desc');
  assert.deepEqual(r.G.LESSONS.aa1.steps[0], ['Changed.', 'Hint']);
  assert.deepEqual(r.edited, ['aa1']);
});

test('여러 수업이 함께 쓰는 단계 배열과 원본은 바뀌지 않는다', () => {
  applyEdits(G, {}, { lessons: { aa1: { steps: { 1: ['Other.', '', ''] } } } });
  assert.deepEqual(SHARED, ['Tap Home.', 'You go back.']);
  assert.equal(G.TITLES.aa1[1], 'Title A');
  assert.equal(G.LESSONS.bb2.steps[0], SHARED);
});

test('단계 수는 늘릴 수 없고, 없는 수업·빈 본문·잘못된 값은 무시한다', () => {
  const r = applyEdits(G, {}, { lessons: { aa1: { steps: { 5: ['Extra.'], 0: ['', 'x'] } }, zz9: { title: 'X' }, '<script>': { title: 'X' } } });
  assert.equal(r.G.LESSONS.aa1.steps.length, 2);
  assert.deepEqual(r.G.LESSONS.aa1.steps[0], ['One.']);
  assert.equal(r.G.TITLES.zz9, undefined);
});

test('검수 기록을 더하고, null이면 저장소의 기록을 취소한다', () => {
  const repo = { bb2: { by: 'R', date: '2026-01-01', device: '' } };
  const r = applyEdits(G, repo, { reviewed: { aa1: { by: 'Ana', date: '2026-11-26', device: 'S26' }, bb2: null } });
  assert.deepEqual(r.REVIEWED, { aa1: { by: 'Ana', date: '2026-11-26', device: 'S26' } });
  assert.ok(repo.bb2, '원본 review.js 객체는 그대로');
});

test('검수자 없거나 날짜 형식이 틀린 검수 기록은 버린다', () => {
  const c = cleanEdits({ reviewed: { aa1: { by: '', date: '2026-11-26' }, bb2: { by: 'X', date: '26/11/2026' } } });
  assert.deepEqual(c.reviewed, {});
});

test('저장소에 있는 edits.json은 모두 올바른 JSON이다', () => {
  for (const code of readdirSync(new URL('../i18n/', import.meta.url))) {
    const f = new URL(`../i18n/${code}/edits.json`, import.meta.url);
    if (existsSync(f)) assert.doesNotThrow(() => JSON.parse(readFileSync(f, 'utf8')), `${code}/edits.json`);
  }
});
