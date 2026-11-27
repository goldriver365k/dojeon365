import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, mkdtempSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadCatalog, publishProblems, toLesson, kakaoCourse, STATUS, DISCLAIMER, stats } from '../scripts/build-kakaotalk.mjs';
import { CATEGORIES } from '../data/categories.js';
import { LANGUAGES } from '../i18n/languages.js';

const cat = loadCatalog();
const all = cat.chapters.flatMap((c) => c.lessons);

test('카카오톡 목록: 15개 대분류·162개 사용법, id 중복 없음, 한국어 전용 속성', () => {
  assert.equal(cat.chapters.length, 15);
  assert.equal(all.length, 162);
  assert.deepEqual(cat.chapters.map((c) => c.lessons.length), [8, 12, 15, 12, 10, 12, 10, 8, 12, 10, 8, 8, 12, 10, 15]);
  assert.equal(new Set(all.map((l) => l.id)).size, 162);
  for (const l of all) {
    assert.match(l.id, /^k\d{2}-[a-z0-9-]+$/, l.id);
    assert.ok(STATUS[l.status], `${l.id} 상태`);
    assert.ok(l.sources.length && l.sources.every((s) => /^https:\/\//.test(s.url)), `${l.id} 출처`);
    for (const k of ['appVersion', 'android', 'oneui', 'galaxyModel', 'menuPath', 'lastChecked', 'reviewedBy', 'needsUpdate', 'steps']) assert.ok(k in l, `${l.id}.${k}`);
  }
  assert.equal(cat.meta.lang, 'ko-KR');
  assert.equal(cat.meta.global, false);
  assert.equal(cat.meta.translate, false);
});

test('실제 화면 이미지·검수 기록이 없으면 공개 상태여도 공개하지 않는다', () => {
  const dir = mkdtempSync(join(tmpdir(), 'kk-'));
  mkdirSync(join(dir, 'images/kakaotalk/k99-test'), { recursive: true });
  writeFileSync(join(dir, 'images/kakaotalk/k99-test/1.png'), 'x');
  const root = pathToFileURL(`${dir}/`);
  const good = { id: 'k99-test', title: '사진 보내기', status: 'published', q: ['카톡 사진'], appVersion: '25.0', android: '17', galaxyModel: '갤럭시 S26', lastChecked: '2026-11-27', reviewedBy: '검수자', sources: [{ label: 'a', url: 'https://cs.kakao.com/' }],
    steps: [{ text: '＋를 누르세요.', image: { src: 'images/kakaotalk/k99-test/1.png', alt: '채팅 화면', w: 1080, h: 2340, target: { x: 1, y: 2, w: 10, h: 5 } }, imageMeta: { source: '직접 캡처(교육용 계정)', reviewed: '2026-11-27', privacyChecked: true } }] };
  assert.deepEqual(publishProblems(good, { root }), []);
  const L = toLesson(good, { root });
  assert.equal(L.cards.length, 1);
  assert.equal(L.cards[0].photo.src, '/images/kakaotalk/k99-test/1.png');
  assert.ok(L.q.includes('카카오톡 사진') && L.q.includes('카톡 사진'), '카톡↔카카오톡 검색어');
  const cases = {
    '상태': { ...good, status: 'reviewed' },
    '개인정보': { ...good, steps: [{ ...good.steps[0], imageMeta: { ...good.steps[0].imageMeta, privacyChecked: false } }] },
    '이미지 없음': { ...good, steps: [{ ...good.steps[0], image: { alt: 'x' } }] },
    '이미지 파일 없음': { ...good, steps: [{ ...good.steps[0], image: { ...good.steps[0].image, src: 'images/kakaotalk/k99-test/none.png' } }] },
    '경로 밖': { ...good, steps: [{ ...good.steps[0], image: { ...good.steps[0].image, src: 'assets/logo-mark.png' } }] },
    '앱 버전': { ...good, appVersion: '' },
    '검수 날짜': { ...good, steps: [{ ...good.steps[0], imageMeta: { source: 'x', privacyChecked: true } }] },
  };
  for (const [name, l] of Object.entries(cases)) { assert.ok(publishProblems(l, { root }).length > 0, name); assert.equal(toLesson(l, { root }).cards.length, 0, name); }
});

test('지금 저장소: 공개 조건을 갖춘 수업만 공개, 공개 수업이 없으면 정적 페이지·사이트맵 없음', () => {
  const s = stats(cat);
  const pub = kakaoCourse({ catalog: cat, onlyPublic: true }).CHAPTERS.flatMap((c) => c.lessons);
  assert.equal(pub.length, s.public);
  const sm = readFileSync('sitemap.xml', 'utf8');
  assert.equal((sm.match(/\/learn\/kakaotalk\/[^<]+/g) ?? []).length, s.public ? s.public + 1 : 0);
  assert.equal(existsSync('learn/kakaotalk/index.html'), s.public > 0);
  for (const l of all) assert.equal(existsSync(`learn/kakaotalk/${l.id}/index.html`), pub.some((p) => p.id === l.id), l.id);
  const js = readFileSync('data/kakaotalk/public.js', 'utf8');
  assert.match(js, new RegExp(`export const PUBLIC_COUNT = ${s.public};`));
});

test('해외 19개 언어: 카카오톡 메뉴·교육·링크·사이트맵·검색 없음(카카오톡 교육은 국내 전용)', () => {
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko')) {
    const seg = code.toLowerCase();
    const pages = [`${seg}/index.html`, `${seg}/galaxy/index.html`, ...readdirSync(`${seg}/galaxy`).filter((d) => !d.includes('.')).map((d) => `${seg}/galaxy/${d}/index.html`)];
    for (const p of pages) {
      const h = readFileSync(p, 'utf8');
      assert.doesNotMatch(h, /\/learn\/kakaotalk|#\/kakaotalk|kakaotalk\/public\.js|카카오톡 사용법/, p);
    }
  }
  const sm = readFileSync('sitemap.xml', 'utf8');
  assert.doesNotMatch(sm, /hreflang="(?!ko)[^"]+" href="[^"]*kakaotalk/);
  assert.equal(readFileSync('scripts/build-global.mjs', 'utf8').includes('kakaoCourse'), false, '해외 빌드는 카카오톡 수업 자료를 쓰지 않음');
});

test('국내 홈 카테고리·관리자 화면·독립 교육 안내 문구', () => {
  const c = CATEGORIES.find((x) => x.id === 'kakaotalk');
  assert.ok(c && c.title === '카카오톡 사용법' && c.desc === '처음부터 하나씩 쉽게 배우는 카카오톡' && c.koOnly);
  assert.equal(DISCLAIMER, 'DigiStep365는 디지털 초보자를 위한 독립 교육 홈페이지입니다. 카카오와 공식적인 제휴 관계가 없으며, 카카오톡 관련 명칭과 상표는 해당 권리자에게 귀속됩니다.');
  const admin = readFileSync('admin/kakaotalk/index.html', 'utf8');
  assert.match(admin, /noindex, nofollow/);
  assert.match(admin, /connect-src 'self' https:\/\/api\.github\.com/);
  assert.ok(Object.keys(STATUS).every((k) => admin.includes(k)));
  assert.ok(existsSync('assets/admin-kakao.js'));
  assert.match(readFileSync('netlify.toml', 'utf8'), /for = "\/data\/kakaotalk\/\*"[\s\S]*?noindex/);
});

test('카카오톡 162개 원고: 모든 단계에 화면·한 동작·누를 곳이 화면에 있음, 가상 정보만', async () => {
  const { draw, TWO, SOURCE } = await import('../scripts/kakaotalk-fill.mjs');
  let steps = 0;
  for (const l of all) {
    if (!l.generated) continue;
    assert.ok(l.steps.length >= 1, `${l.id} 단계`);
    l.steps.forEach((s, i) => {
      steps++;
      const where = `${l.id} ${i + 1}단계`;
      assert.ok(s.text && /[.요]$/.test(s.text.trim()), `${where}: 문장 ${s.text}`);
      assert.doesNotMatch(s.text, TWO, `${where}: 동작 두 개`);
      assert.ok(s.image?.screen && s.image.alt, `${where}: 화면·alt`);
      assert.equal(s.imageMeta.source, SOURCE, `${where}: 출처는 재현(검수 필수)`);
      if (s.targetLabel) assert.ok(draw(s.image.screen, s.targetLabel).target, `${where}: 화면에 ‘${s.targetLabel}’ 없음`);
      const pressed = s.text.match(/‘([^’]+)’[을를] 누르세요/)?.[1];
      if (pressed) assert.ok(s.targetLabel, `${where}: ‘${pressed}’를 누르라는데 빨간 테두리 없음`);
      assert.doesNotMatch(JSON.stringify(s.image.screen), /010-\d{4}-\d{4}(?<!0000-0000)(?<!0000-1234)/, `${where}: 실제처럼 보이는 전화번호`);
    });
    assert.ok(!PUBLIC_STATUS_OK(l) || l.reviewedBy, `${l.id}: 검수 없이 공개`);
  }
  assert.ok(steps >= 600, `단계 ${steps}장`);
});
function PUBLIC_STATUS_OK(l) { return ['published', 'update'].includes(l.status); }

test('기존 그림 카카오톡 수업 5개는 카카오톡 재현 화면으로 바뀌었다', async () => {
  const G = await import('../data/galaxy/index.js');
  for (const id of ['g13-send', 'g13-media', 'g13-facetalk', 'g13-mute']) {
    const { lesson } = G.findLesson(id);
    assert.ok(lesson.cards.some((c) => c.k), `${id} 카카오톡 화면`);
    assert.ok(!lesson.cards.some((c) => c.screen?.kind === 'chat' && c.screen.app === '카카오톡'), `${id} 옛 그림 남음`);
  }
});
