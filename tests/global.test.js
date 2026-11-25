import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { findLesson } from '../data/galaxy/index.js';
import { metaOf } from '../data/galaxy/meta.js';
import * as EN from '../i18n/en/galaxy.js';
import { globalLessons } from '../scripts/build-global.mjs';
import { LANGUAGES } from '../i18n/languages.js';

test('해외용 수업마다 영어 제목·주소가 있고 한국 전용 수업은 빠진다', () => {
  const slugs = new Set();
  for (const { lessons } of globalLessons()) for (const { l, t } of lessons) {
    assert.ok(t, `영어 제목 없음: ${l.id}`);
    assert.match(t[0], /^[a-z0-9-]+$/, t[0]);
    assert.ok(!slugs.has(t[0]), `주소 중복: ${t[0]}`); slugs.add(t[0]);
  }
  for (const id of Object.keys(EN.TITLES)) {
    assert.ok(findLesson(id), `없는 수업: ${id}`);
    assert.notEqual(metaOf(id).region, 'KR', `한국 전용 수업이 해외용에 있음: ${id}`);
  }
});

test('영어 단계 수는 한국어 카드 수와 같고, 한 단계에 문장 하나', () => {
  for (const [id, en] of Object.entries(EN.LESSONS)) {
    assert.equal(en.steps.length, findLesson(id).lesson.cards.length, id);
    assert.ok(en.desc && en.desc.length <= 160, `설명 길이: ${id}`);
    for (const [text] of en.steps) assert.ok(!/\. [A-Z]/.test(text), `한 단계에 두 문장: ${id} — ${text}`);
  }
});

test('검수 전 페이지는 noindex, 사이트맵에 없음, 면책 문구 있음', () => {
  const sitemap = readFileSync('sitemap.xml', 'utf8');
  for (const [id, en] of Object.entries(EN.LESSONS)) {
    const f = `en/galaxy/${EN.TITLES[id][0]}/index.html`;
    assert.ok(existsSync(f), f);
    const html = readFileSync(f, 'utf8');
    assert.match(html, /<link rel="canonical" href="https:\/\/digistep365\.com\/en\/galaxy\//);
    assert.match(html, /hreflang="x-default"/);
    assert.match(html, /Not affiliated with, sponsored, or endorsed by Samsung Electronics/);
    if ((en.status ?? 'draft') !== 'reviewed') {
      assert.match(html, /<meta name="robots" content="noindex/);
      assert.ok(!sitemap.includes(EN.TITLES[id][0]), id);
    }
  }
  assert.equal(LANGUAGES.length, 20);
});
