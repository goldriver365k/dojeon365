/** 수업 데이터 점검: node --test tests/*.test.js */
import test from 'node:test';
import assert from 'node:assert/strict';
import { CHAPTERS, GROUPS, allLessons, findLesson } from '../data/galaxy/index.js';
import { CATEGORIES } from '../data/categories.js';
import * as DIGITAL from '../data/digital/index.js';
import * as AI from '../data/ai/index.js';
import * as SCAM from '../data/scam/index.js';
import * as CREATIVE from '../data/creative/index.js';
import * as CAREER from '../data/career/index.js';
import { renderScreen, SCREEN_KINDS } from '../assets/screens.js';
import { appInfo } from '../assets/apps.js';

// 지시서의 목차별 세부 수업 수
const EXPECTED = [5, 7, 6, 6, 5, 7, 6, 6, 7, 9, 8, 9, 6, 5, 8, 6, 6, 7, 7, 6, 7, 8];
// 한 카드에 동작 두 개를 이어 쓴 문장(예: “설정을 열고 디스플레이를 누르세요”)을 찾는 표현
const TWO_ACTIONS = /(열고|누르고|적고|고르고|켜고|끄고|밀고|들어가|선택하고)\s|\s후\s|→/;

test('홈 카테고리 6개, 첫 번째가 갤럭시 휴대폰 사용방법', () => {
  assert.equal(CATEGORIES.length, 6);
  assert.equal(CATEGORIES[0].title, '갤럭시 휴대폰 사용방법');
  assert.ok(CATEGORIES[0].ready);
});

test('22개 목차가 번호 순서대로 있고, 네 구분에 속한다', () => {
  assert.equal(CHAPTERS.length, 22);
  CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(GROUPS.some((g) => g.id === ch.group), `${ch.num} 구분`);
    assert.equal(ch.lessons.length, EXPECTED[i], `${ch.num}. ${ch.title} 수업 수`);
  });
});

test('수업 id가 겹치지 않고, 출처·검색어·카드가 있다', () => {
  const ids = new Set();
  for (const { lesson } of allLessons()) {
    assert.ok(!ids.has(lesson.id), `중복 id ${lesson.id}`);
    ids.add(lesson.id);
    assert.ok(findLesson(lesson.id));
    assert.ok(lesson.title);
    assert.ok(lesson.q.length >= 2, `${lesson.id} 검색어`);
    assert.ok(lesson.src.length >= 1 && lesson.src.every((s) => /^https:\/\//.test(s.url) && s.label), `${lesson.id} 출처`);
    assert.ok(lesson.cards.length >= 2, `${lesson.id} 카드 수`);
  }
});

test('카드마다 안내 문장 하나·그림·설명·완료 조건이 있다(두 과정 모두)', () => {
  for (const { lesson } of [...allLessons(), ...DIGITAL.allLessons(), ...AI.allLessons(), ...SCAM.allLessons(), ...CREATIVE.allLessons(), ...CAREER.allLessons()]) {
    lesson.cards.forEach((c, i) => {
      const where = `${lesson.id} 카드 ${i + 1} “${c.text}”`;
      assert.ok(c.text && /[.요]$/.test(c.text.trim()), `${where}: 문장`);
      assert.ok(!TWO_ACTIONS.test(c.text), `${where}: 동작 두 개`);
      assert.ok(c.alt && c.alt.length > 4, `${where}: 대체 텍스트`);
      assert.ok(c.screen || c.photo, `${where}: 그림`);
      assert.ok(!c.screen || SCREEN_KINDS.includes(c.screen.kind), `${where}: 그림 종류 ${c.screen?.kind}`);
      assert.ok(['practice', 'self'].includes(c.done), `${where}: 완료 조건`);
      if (c.done === 'practice') {
        assert.ok(c.target, `${where}: 누를 곳`);
        const r = renderScreen(c.screen, c.target, c.action);
        assert.ok(r.target, `${where}: 그림에 ‘${c.target}’ 없음 (있는 이름: ${Object.keys(r.targets).join(', ')})`);
      }
    });
  }
});

test('첫 수업 ‘휴대폰 끄고 다시 켜기’는 지시서의 네 장 그대로다', () => {
  const { lesson } = findLesson('g01-power');
  assert.deepEqual(lesson.cards.map((c) => c.text), [
    '옆면 버튼과 음량 줄이기 버튼을 함께 길게 누르세요.',
    '전원 끄기를 누르세요.',
    '전원 끄기를 한 번 더 누르세요.',
    '옆면 버튼을 길게 눌러 전원을 켜세요.',
  ]);
  assert.equal(lesson.cards[2].resumeAt, 3, '카드 3이 열리면 카드 4를 이어볼 위치로 저장');
  assert.equal(lesson.cards[3].realDoneLabel, '다시 켰어요');
  assert.ok(lesson.intro, '실습 전 다시 켜는 방법 안내');
  assert.equal(lesson.cards[3].target, '측면 버튼');
});

test('앱을 다루는 카드는 앱 목록의 정확한 이름·아이콘을 쓴다', () => {
  for (const { lesson } of allLessons()) {
    lesson.cards.forEach((c, i) => {
      const where = `${lesson.id} 카드 ${i + 1}`;
      const sc = c.screen ?? {};
      const names = [sc.find, ...(sc.kind === 'home' ? [...(sc.grid ?? []), ...(sc.dock ?? [])] : []), ...(sc.kind === 'recent' ? sc.apps ?? [] : []), ...(sc.kind === 'dialog' && sc.style === 'grid' && sc.title === '공유' ? sc.buttons : [])].filter(Boolean);
      for (const n of names) assert.ok(appInfo(n), `${where}: 앱 목록에 없는 앱 ${n}`);
      if (c.app) {
        const info = appInfo(c.app);
        assert.ok(info, `${where}: 앱 ${c.app}`);
        assert.equal(c.text, `‘${info.label}’ 앱을 누르세요.`, `${where}: 화면에 보이는 앱 이름으로 안내`);
      }
    });
  }
  assert.equal(appInfo('플레이 스토어').label, 'Play 스토어');
  assert.equal(appInfo('갤럭시 스토어').label, '스토어');
  assert.equal(appInfo('삼성 노트').label, '노트');
});

test('생활 디지털 연습장 목차: 21개 목차, 세부 수업 id 중복 없음, 구분 소속', () => {
  assert.equal(CATEGORIES.find((c) => c.id === 'digital-life').href, '#/digital');
  assert.equal(DIGITAL.CHAPTERS.length, 21);
  const ids = new Set();
  DIGITAL.CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(DIGITAL.GROUPS.some((g) => g.id === ch.group), `${ch.num} 구분`);
    assert.ok(ch.lessons.length >= 4, `${ch.num} 수업 수`);
    for (const l of ch.lessons) {
      assert.ok(!ids.has(l.id), l.id); ids.add(l.id); assert.ok(l.title);
      assert.ok(l.cards.length >= 2, `${l.id} 카드`);
      assert.ok(l.src.length >= 1 && l.src.every((x) => /^https:\/\//.test(x.url)), `${l.id} 출처`);
      assert.ok(l.q.length >= 1, `${l.id} 검색어`);
    }
  });
});

test('시니어 AI 교실: 목차·수업 id·출처·카드', () => {
  assert.equal(CATEGORIES.find((c) => c.id === 'ai').href, '#/ai');
  assert.ok(AI.CHAPTERS.length >= 6);
  const all = new Set([...allLessons(), ...DIGITAL.allLessons()].map((e) => e.lesson.id));
  AI.CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(AI.GROUPS.some((g) => g.id === ch.group));
    for (const l of ch.lessons) {
      assert.ok(!all.has(l.id), `중복 id ${l.id}`); all.add(l.id);
      assert.ok(l.cards.length >= 2 && l.src.length >= 1 && l.q.length >= 1, l.id);
    }
  });
});

test('전화 사기 예방 교실: 홈 2번째 큰 카테고리, 목차·수업', () => {
  assert.equal(CATEGORIES[1].href, '#/scam');
  assert.ok(SCAM.CHAPTERS.length >= 5);
  const ids = new Set([...allLessons(), ...DIGITAL.allLessons(), ...AI.allLessons()].map((e) => e.lesson.id));
  SCAM.CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(SCAM.GROUPS.some((g) => g.id === ch.group));
    for (const l of ch.lessons) { assert.ok(!ids.has(l.id), l.id); ids.add(l.id); assert.ok(l.cards.length >= 2 && l.src.length >= 1); }
  });
});

test('시니어 창작교실: 목차·수업 id·출처', () => {
  assert.equal(CATEGORIES.find((c) => c.id === 'creative').href, '#/creative');
  const ids = new Set([...allLessons(), ...DIGITAL.allLessons(), ...AI.allLessons(), ...SCAM.allLessons()].map((e) => e.lesson.id));
  CREATIVE.CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(CREATIVE.GROUPS.some((g) => g.id === ch.group));
    for (const l of ch.lessons) { assert.ok(!ids.has(l.id), l.id); ids.add(l.id); assert.ok(l.cards.length >= 2 && l.src.length >= 1); }
  });
});

test('시니어 재취업·창업교실: 목차·수업 id·출처, 홈 카테고리 모두 열림', () => {
  assert.equal(CATEGORIES.find((c) => c.id === 'career').href, '#/career');
  assert.ok(CATEGORIES.every((c) => c.ready && c.href));
  const ids = new Set([...allLessons(), ...DIGITAL.allLessons(), ...AI.allLessons(), ...SCAM.allLessons(), ...CREATIVE.allLessons()].map((e) => e.lesson.id));
  CAREER.CHAPTERS.forEach((ch, i) => {
    assert.equal(ch.num, i + 1);
    assert.ok(CAREER.GROUPS.some((g) => g.id === ch.group));
    for (const l of ch.lessons) { assert.ok(!ids.has(l.id), l.id); ids.add(l.id); assert.ok(l.cards.length >= 2 && l.src.length >= 1); }
  });
});
