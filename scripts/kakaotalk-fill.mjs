// data/kakaotalk/lessons.mjs(코드로 그린 재현 화면 원고)를 catalog.json에 넣는다.
// - 관리자 화면에서 사람이 고친 수업(edited: true)이나 실제 캡처 이미지를 쓴 수업은 건드리지 않는다.
// - 넣은 수업은 ‘검수 필요’ 상태: 실제 앱과 대조한 뒤 관리자 화면에서 검수 완료·공개한다.
import { readFileSync, writeFileSync } from 'node:fs';
import { LESSONS } from '../data/kakaotalk/lessons.mjs';
import { renderKakao } from '../assets/kakao-screens.js';
import { renderScreen } from '../assets/screens.js';

const FILE = new URL('../data/kakaotalk/catalog.json', import.meta.url);
export const SOURCE = '원본 화면 기준 재현(검수 필수)';
const today = new Date().toISOString().slice(0, 10);

/** 화면 하나 그리기(갤럭시 화면이면 갤럭시 그림 도구로) */
export function draw(screen, target) {
  return screen.galaxy ? renderScreen(screen.galaxy, target ?? undefined, 'tap') : renderKakao(screen, target ?? undefined, 'tap');
}
/** 한 카드 = 한 동작: ‘…고르고 ‘확인’을 누르세요’ 같은 문장을 두 카드로 나눈다(앞 카드는 보고 따라 하기, 뒤 카드에 빨간 테두리) */
const VERB = { 고르고: '고르세요', 적고: '적으세요', 넣고: '넣으세요', 누르고: '누르세요', 열고: '여세요', 켜고: '켜세요', 끄고: '끄세요', 선택하고: '선택하세요', 정하고: '정하세요', 찍고: '찍으세요', 읽고: '읽으세요', 확인하고: '확인하세요', 만들고: '만드세요' };
export const TWO = /(열고|누르고|적고|고르고|켜고|끄고|밀고|들어가|선택하고)\s|\s후\s|→/;
export function split(step) {
  const [text, screen, target, x = {}] = step;
  if (!TWO.test(text)) return [step];
  const m = text.match(/^(.*?)(고르고|적고|넣고|누르고|열고|켜고|끄고|선택하고|정하고|찍고|읽고|확인하고|만들고)\s(.+)$/);
  if (!m) return [step];
  const first = `${m[1]}${VERB[m[2]]}.`;
  let rest = m[3].replace(/^([^가-힣‘]*)/, '');
  if (!rest.endsWith('.')) rest += '.';
  // 빨간 테두리는 그 이름이 나오는 카드에만
  const base = target ? target.replace(/ (버튼|탭|스위치)$/, '') : '';
  const has = (t) => target && (t.includes(`‘${target}’`) || t.includes(target) || (base.length >= 2 && t.includes(base)));
  const tFirst = has(first) ? target : null;
  const tRest = !tFirst && has(rest) ? target : null;
  // 테두리가 없는 쪽은 문장 속 ‘이름’이 그 화면에 있으면 그것을 표시(예: ‘확인’, ‘전송’)
  const named = (t) => { const q = t.match(/‘([^’]+)’/)?.[1]; if (!q) return null; for (const n of [q, `${q} 버튼`, `${q} 스위치`]) if (draw(screen, n).target) return n; return null; };
  return [[first, screen, tFirst ?? (tRest ? null : named(first)), {}], [rest, screen, tRest ?? (tFirst ? named(rest) : named(rest)), x]];
}
function altOf(text, target) { return `카카오톡 화면 재현 그림${target ? `. ‘${target}’에 빨간 테두리가 있어요` : ''}. ${text}`.slice(0, 160); }

export function fill(catalog, lessons = LESSONS) {
  const problems = []; let filled = 0;
  for (const ch of catalog.chapters) for (const l of ch.lessons) {
    const src = lessons[l.id];
    if (!src) { problems.push(`${l.id}: 원고 없음`); continue; }
    const steps = src.steps.flatMap(split);
    steps.forEach(([text, screen, target], i) => { if (TWO.test(text)) problems.push(`${l.id} ${i + 1}단계: 한 카드에 동작 두 개 — ${text}`); if (target && !draw(screen, target).target) problems.push(`${l.id} ${i + 1}단계: 화면에 ‘${target}’ 없음`); });
    const human = l.edited || ['published', 'update'].includes(l.status) || (l.steps ?? []).some((s) => s.image?.src);
    if (human) continue;
    l.steps = steps.map(([text, screen, target, x = {}]) => ({
      text, voice: x.voice ?? '', hint: x.hint ?? '', targetLabel: target ?? '',
      image: { screen, alt: x.alt ?? altOf(text, target) },
      imageMeta: { source: SOURCE, appVersion: '', galaxyModel: '갤럭시 S26', android: '17', oneui: '9', created: today, reviewed: '', privacyChecked: true },
    }));
    l.menuPath = src.menuPath ?? l.menuPath;
    l.galaxyModel = l.galaxyModel || '갤럭시 S26'; l.android = l.android || '17'; l.oneui = l.oneui || '9';
    if (['draft', 'image'].includes(l.status)) l.status = 'review';
    l.note = '코드로 그린 재현 화면이에요. 실제 갤럭시 카카오톡과 메뉴 이름·위치를 대조해 검수한 뒤 공개하세요.';
    l.generated = true;
    filled++;
  }
  return { filled, problems };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const catalog = JSON.parse(readFileSync(FILE, 'utf8'));
  const { filled, problems } = fill(catalog);
  if (problems.length) { console.error(problems.join('\n')); process.exitCode = 1; }
  writeFileSync(FILE, `${JSON.stringify(catalog, null, 1)}\n`);
  console.log({ filled, problems: problems.length, steps: catalog.chapters.flatMap((c) => c.lessons).reduce((a, l) => a + l.steps.length, 0) });
}
