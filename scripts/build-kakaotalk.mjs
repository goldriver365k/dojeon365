// 카카오톡 사용법(국내 전용) — data/kakaotalk/catalog.json → 앱 자료(data/kakaotalk/public.js)·관리자 화면
//
// 원칙
// - 한국어 국내용 전용(ko-KR). 해외용(build-global의 19개 언어)에는 쓰지 않는다: 메뉴·검색·사이트맵·hreflang 모두 제외.
// - 실제 갤럭시 카카오톡 화면 캡처 이미지와 검수 기록이 모두 있는 수업만 공개한다(status: published·update).
//   그 밖의 수업은 목차에 ‘수업 준비 중’으로만 보이고, 단계 글·그림·검색용 페이지를 만들지 않는다.
// - 교육 이미지는 실제 화면 그대로 두고, 누를 곳에만 빨간 원(target: 그림 크기 대비 %)을 겹쳐 그린다.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

export const CATALOG_FILE = new URL('../data/kakaotalk/catalog.json', import.meta.url);
export const PUBLIC_FILE = new URL('../data/kakaotalk/public.js', import.meta.url);
const ROOT = new URL('../', import.meta.url);

/** 공개 상태(관리자 화면과 같은 값) */
export const STATUS = {
  draft: '작성 중',
  image: '이미지 확보·제작 중',
  review: '검수 필요',
  reviewed: '검수 완료',
  published: '공개',
  update: '업데이트 필요(공개 유지, 안내 표시)',
  private: '비공개',
};
export const PUBLIC_STATUS = ['published', 'update'];
export const DISCLAIMER = 'DigiStep365는 디지털 초보자를 위한 독립 교육 홈페이지입니다. 카카오와 공식적인 제휴 관계가 없으며, 카카오톡 관련 명칭과 상표는 해당 권리자에게 귀속됩니다.';
export const GROUPS = [
  { id: 'basic', title: '시작하고 대화하기', cat: 'cat-5' },
  { id: 'life', title: '프로필·이모티콘·설정', cat: 'cat-1' },
  { id: 'apply', title: '선물·지갑·오픈채팅', cat: 'cat-2' },
  { id: 'adv', title: '보안·백업·문제 해결', cat: 'cat-4' },
];

export const loadCatalog = (file = CATALOG_FILE) => JSON.parse(readFileSync(file, 'utf8'));

/** 공개하려면 갖춰야 할 것(하나라도 빠지면 공개하지 않는다). 빈 배열이면 공개 가능. */
export function publishProblems(lesson, { root = ROOT } = {}) {
  const p = [];
  if (!PUBLIC_STATUS.includes(lesson.status)) p.push(`상태가 ‘${STATUS[lesson.status] ?? lesson.status}’`);
  for (const [k, label] of [['appVersion', '카카오톡 앱 버전'], ['android', '안드로이드 버전'], ['galaxyModel', '갤럭시 모델'], ['lastChecked', '마지막 확인 날짜'], ['reviewedBy', '검수자']]) if (!String(lesson[k] ?? '').trim()) p.push(`${label} 없음`);
  if (!lesson.sources?.length) p.push('공식 참고 자료 없음');
  if (!lesson.steps?.length) p.push('단계 없음');
  (lesson.steps ?? []).forEach((s, i) => {
    const n = `${i + 1}단계`;
    if (!String(s.text ?? '').trim()) p.push(`${n} 설명 없음`);
    const img = s.image ?? {};
    if (!img.src) p.push(`${n} 실제 화면 이미지 없음`);
    else if (!/^images\/kakaotalk\/[\w./-]+\.(png|jpe?g|webp)$/i.test(img.src)) p.push(`${n} 이미지 경로가 images/kakaotalk/ 밖`);
    else if (!existsSync(new URL(img.src, root))) p.push(`${n} 이미지 파일 없음(${img.src})`);
    if (!String(img.alt ?? '').trim()) p.push(`${n} 이미지 설명(alt) 없음`);
    const m = s.imageMeta ?? {};
    if (!m.source) p.push(`${n} 이미지 출처 없음`);
    if (!m.reviewed) p.push(`${n} 이미지 검수 날짜 없음`);
    if (m.privacyChecked !== true) p.push(`${n} 개인정보 노출 확인 안 됨`);
  });
  return p;
}
export const isPublic = (lesson, opt) => publishProblems(lesson, opt).length === 0;

/** 검색용 표현: 정식 이름 + 일상 표현(카톡) + 관리자가 넣은 말 */
export function searchWords(lesson) {
  const base = [lesson.title, ...(lesson.q ?? [])];
  const extra = base.map((w) => w.replace(/카카오톡/g, '카톡')).concat(base.map((w) => w.replace(/카톡/g, '카카오톡')));
  return [...new Set([...base, ...extra].map((w) => w.trim()).filter(Boolean))];
}

/** 앱(app.js)·정적 페이지가 쓰는 수업 모양으로 바꾼다. 공개하지 않는 수업은 cards: [] (= 수업 준비 중) */
export function toLesson(l, opt) {
  const open = isPublic(l, opt);
  const cards = open ? l.steps.map((s) => {
    const t = s.image.target;
    return {
      text: s.text, ...(s.hint ? { hint: s.hint } : {}), ...(s.voice ? { say: s.voice } : {}),
      alt: s.image.alt, target: s.targetLabel || '누를 곳',
      action: t ? 'tap' : 'self', done: t ? 'practice' : 'next',
      photo: { src: `/${s.image.src}`, alt: s.image.alt, w: s.image.w, h: s.image.h, ...(t ? { target: { x: t.x, y: t.y, w: t.w, h: t.h } } : {}) },
    };
  }) : [];
  return {
    id: l.id, title: l.title, q: searchWords(l), cards,
    ...(l.caution ? { caution: l.caution } : {}),
    src: (l.sources ?? []).map((s) => ({ label: s.label, url: s.url })),
    ...(open ? {
      model: `${l.galaxyModel} · Android ${l.android}${l.oneui ? ` · One UI ${l.oneui}` : ''}`,
      software: `카카오톡 ${l.appVersion}`,
      checked: l.lastChecked,
      ...(l.status === 'update' ? { check: '카카오톡 업데이트로 화면이 조금 바뀌었을 수 있어 다시 확인하고 있어요.' } : {}),
    } : {}),
  };
}

/** 국내 과정 자료(COURSE·GROUPS·CHAPTERS). onlyPublic이면 공개 수업이 있는 목차·수업만 남긴다(정적 페이지·사이트맵용). */
export function kakaoCourse({ catalog = loadCatalog(), onlyPublic = false, root = ROOT } = {}) {
  const chapters = catalog.chapters.map((ch) => ({
    num: ch.num, title: ch.title, group: ch.group, course: 'kakaotalk',
    desc: ch.desc ?? `${ch.title} — ${ch.lessons.length}가지`,
    lessons: ch.lessons.map((l) => toLesson(l, { root })).filter((l) => !onlyPublic || l.cards.length),
  })).filter((ch) => !onlyPublic || ch.lessons.length);
  return {
    COURSE: {
      id: 'kakaotalk', title: catalog.meta.title, lead: catalog.meta.subtitle,
      safety: '실제 전화번호·비밀번호·인증번호는 넣지 마세요. 결제·인증서·계정·백업처럼 중요한 기능에는 주의 안내가 붙어 있어요.',
      disclaimer: DISCLAIMER, lang: 'ko-KR',
    },
    GROUPS, CHAPTERS: chapters,
  };
}

export function stats(catalog = loadCatalog(), opt) {
  const all = catalog.chapters.flatMap((c) => c.lessons);
  const byStatus = Object.fromEntries(Object.keys(STATUS).map((k) => [k, all.filter((l) => l.status === k).length]));
  return { chapters: catalog.chapters.length, lessons: all.length, public: all.filter((l) => isPublic(l, opt)).length, byStatus, steps: all.reduce((a, l) => a + (l.steps?.length ?? 0), 0) };
}

/** 앱이 불러오는 자료(브라우저용 ES 모듈). 공개 수업만 카드를 담는다. */
export function writePublic(catalog = loadCatalog()) {
  const c = kakaoCourse({ catalog });
  const pub = c.CHAPTERS.reduce((a, ch) => a + ch.lessons.filter((l) => l.cards.length).length, 0);
  const js = `// 자동 생성(scripts/build-kakaotalk.mjs) — 직접 고치지 마세요. 원본: data/kakaotalk/catalog.json
// 카카오톡 사용법: 한국어 국내용 전용. 공개(검수 완료·실제 화면 이미지)된 수업만 cards가 있고, 나머지는 ‘수업 준비 중’.
export const COURSE = ${JSON.stringify(c.COURSE)};
export const GROUPS = ${JSON.stringify(c.GROUPS)};
export const CHAPTERS = ${JSON.stringify(c.CHAPTERS)};
export const PUBLIC_COUNT = ${pub};
export function allLessons() {
  return CHAPTERS.flatMap((chapter) => chapter.lessons.map((lesson) => ({ lesson, chapter })));
}
`;
  writeFileSync(PUBLIC_FILE, js);
  return pub;
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/** 관리자 화면: /admin/kakaotalk/ */
export function adminPage({ version, brandTagline }) {
  const statusOpts = Object.entries(STATUS).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('');
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self' https://api.github.com; img-src 'self' data: blob:">
<title>카카오톡 수업 관리 | DigiStep365 관리</title><link rel="stylesheet" href="/assets/global.css?v=${version}"><link rel="stylesheet" href="/assets/admin-kakao.css?v=${version}"></head>
<body><main class="page admin kadmin" data-kadmin data-statuses='${esc(JSON.stringify(STATUS))}' data-public='${esc(JSON.stringify(PUBLIC_STATUS))}'>
<a class="brand admin__brand" href="/admin/"><img src="/assets/logo-mark.png" alt="" width="40" height="43"><span><b>Digi<i>Step</i>365</b><small lang="en">${esc(brandTagline)}</small></span></a>
<p><a href="/admin/">← 콘텐츠 현황</a></p>
<h1>카카오톡 사용법 관리 (국내 전용)</h1>
<p class="lead">목차·수업·단계 카드·실제 화면 이미지·버전·검수 기록을 관리합니다. <b>실제 갤럭시 카카오톡 화면 캡처</b>와 검수 기록이 모두 갖춰지고 상태가 ‘공개’인 수업만 홈페이지에 나옵니다.</p>
<details class="edit__help"><summary>사용 방법과 원칙</summary>
<ol>
<li><b>이미지</b>: 교육용 카카오톡 계정(가상 이름·가상 대화)으로 실제 갤럭시에서 캡처한 화면만 올립니다. AI로 만든 화면·비슷하게 그린 화면은 쓰지 않습니다. 화면은 고치지 말고, 그림을 눌러 <b>누를 곳(빨간 원)</b>만 표시합니다.</li>
<li><b>개인정보</b>: 실제 전화번호·계정·인증번호·비밀번호·결제 정보·실제 대화가 보이지 않는지 확인하고 단계마다 ‘개인정보 확인’을 체크합니다.</li>
<li><b>한 카드 = 한 동작</b>. 설명은 짧고 쉽게 씁니다. ‘음성 안내’를 비우면 설명 문장을 읽어 줍니다.</li>
<li><b>버전</b>: 카카오톡 앱 버전·안드로이드·One UI·갤럭시 모델·메뉴 경로·마지막 확인 날짜·검수자·공식 참고 자료를 적습니다. 업데이트로 화면이 바뀌면 ‘업데이트 필요’로 바꾸고 이미지를 교체합니다.</li>
<li><b>저장</b>: 쓰기 권한(Contents: Read and write) 개인 액세스 토큰으로 <b>GitHub에 저장</b>하면 이미지와 <code>data/kakaotalk/catalog.json</code>이 커밋되고 1~3분 뒤 사이트에 반영됩니다. 토큰이 없으면 JSON을 내려받아 저장소에 넣습니다(이 경우 이미지는 <code>images/kakaotalk/</code>에 직접 넣어야 함).</li>
</ol></details>
<noscript><p class="step__note">이 화면은 자바스크립트가 필요합니다.</p></noscript>
<section class="kadmin__sum" data-sum aria-live="polite"></section>
<div class="edit__bar">
  <label>상태 <select data-filter><option value="all">전체</option>${statusOpts}<option value="problem">공개 조건 미달(공개 상태인데)</option><option value="existing">기존 그림 수업과 겹침</option></select></label>
  <label>찾기 <input type="search" data-search placeholder="제목·id"></label>
  <button type="button" class="btn" data-add-chapter>+ 대분류 추가</button>
</div>
<div class="kadmin__cols">
  <nav class="kadmin__list" data-list aria-label="수업 목록"></nav>
  <section class="kadmin__editor" data-editor-pane aria-live="polite"><p class="lead">왼쪽에서 수업을 고르세요.</p></section>
</div>
<section class="edit__save">
  <h2>저장</h2>
  <p data-pending></p>
  <div class="edit__saverow">
    <label>저장소 <input data-repo value="goldriver365k/dojeon365" autocomplete="off"></label>
    <label>브랜치 <input data-branch value="claude/wizardly-dirac-fd5679" autocomplete="off"></label>
    <label>개인 액세스 토큰 <input data-token type="password" autocomplete="off" placeholder="github_pat_…"></label>
  </div>
  <p><button type="button" class="btn btn--primary" data-commit>GitHub에 저장</button> <button type="button" class="btn" data-download>catalog.json 내려받기</button> <button type="button" class="btn" data-reset>저장 안 한 변경 버리기</button></p>
  <p class="edit__msg" data-msg role="status"></p>
</section>
</main>
<script src="/assets/admin-kakao.js?v=${version}" type="module"></script>
</body></html>
`;
}

/** build-global.mjs에서 부른다: 앱 자료·관리자 화면을 만들고 현황을 돌려준다. */
export function buildKakaotalk({ version, brandTagline }) {
  const catalog = loadCatalog();
  const pub = writePublic(catalog);
  const dir = new URL('../admin/kakaotalk/', import.meta.url);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL('index.html', dir), adminPage({ version, brandTagline }));
  return { ...stats(catalog), public: pub };
}
