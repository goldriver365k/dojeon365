import test from 'node:test';
import assert from 'node:assert/strict';
import { MODELS, SERIES, ONEUI, supportFor, deviceLabel } from '../data/devices.js';
import { META, metaOf } from '../data/galaxy/meta.js';
import { allLessons } from '../data/galaxy/index.js';

test('기종은 모두 시리즈에 속하고 id가 겹치지 않는다', () => {
  const ids = new Set();
  for (const m of MODELS) {
    assert.ok(SERIES.some((s) => s.id === m.series), m.id);
    assert.ok(!ids.has(m.id), m.id); ids.add(m.id);
  }
  assert.ok(ONEUI.every((o) => Number(o.v) >= 3), 'One UI 3 이상만');
});

test('메타데이터는 있는 수업만 가리킨다', () => {
  const ids = new Set(allLessons().map((e) => e.lesson.id));
  for (const id of Object.keys(META)) assert.ok(ids.has(id), id);
});

test('지원 판단: 고르지 않으면 표시 없음, 확인 안 된 기종은 확인 필요', () => {
  assert.equal(supportFor(metaOf('g03-font'), null), null);
  assert.equal(deviceLabel(null), null);
  assert.equal(supportFor(metaOf('g03-font'), { model: 's26', oneui: '9.0' }).level, 'ok');
  assert.equal(supportFor(metaOf('g03-font'), { model: 's24', oneui: '7.0' }).level, 'diff');
  assert.equal(supportFor(metaOf('g03-font'), { model: 'a56', oneui: '8.0' }).level, 'check');
  assert.equal(supportFor(metaOf('g03-font'), { model: null, series: null, oneui: '9.0' }).level, 'check');
});

test('지원 판단: Galaxy AI는 One UI 6.1 미만 미지원, S펜은 Ultra만', () => {
  assert.equal(supportFor(metaOf('g19-photo'), { model: 's23', oneui: '6.0' }).level, 'no');
  assert.equal(supportFor(metaOf('g21-spen'), { model: 's25', oneui: '9.0' }).level, 'no');
  assert.equal(supportFor(metaOf('g21-spen'), { model: 's25u', oneui: '9.0' }).level, 'ok');
  // 확인 안 된 기종에는 '지원하지 않음'을 단정하지 않는다
  assert.equal(supportFor(metaOf('g21-spen'), { model: 'fold7', oneui: '9.0' }).level, 'check');
});
