// 관리자 편집 내용(i18n/<언어>/edits.json)을 언어 팩에 덮어쓰는 규칙.
// edits.json 형식:
// {
//   "lessons":  { "<수업 id>": { "title": "…", "desc": "…", "steps": { "<0부터 단계 번호>": ["본문", "도움말", "알아두기"] } } },
//   "reviewed": { "<수업 id>": { "by": "검수자", "date": "2026-12-01", "device": "Galaxy S26 · One UI 9" } | null }
// }
// - 주소(슬러그)는 바꾸지 않는다(검색·공유 링크가 깨지지 않도록).
// - 단계 수는 바꿀 수 없다(한국어 카드·연습 그림과 짝이 맞아야 함). 없는 단계 번호는 무시한다.
// - reviewed 값이 null이면 저장소 review.js의 검수 기록을 취소한다.

const MAX = { title: 120, desc: 300, text: 400 };
const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max) : undefined);
const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** 믿을 수 없는 입력(관리자 화면에서 온 JSON)을 허용된 모양만 남겨 정리한다. */
export function cleanEdits(raw) {
  const out = { lessons: {}, reviewed: {} };
  if (!raw || typeof raw !== 'object') return out;
  for (const [id, e] of Object.entries(raw.lessons ?? {})) {
    if (!/^[a-z0-9-]{3,40}$/.test(id) || !e || typeof e !== 'object') continue;
    const x = {};
    const title = str(e.title, MAX.title);
    const desc = str(e.desc, MAX.desc);
    if (title) x.title = title;
    if (desc) x.desc = desc;
    if (e.steps && typeof e.steps === 'object') {
      const steps = {};
      for (const [i, s] of Object.entries(e.steps)) {
        if (!/^\d{1,2}$/.test(i) || !Array.isArray(s)) continue;
        const text = str(s[0], MAX.text);
        if (!text) continue;
        steps[i] = [text, str(s[1], MAX.text) ?? '', str(s[2], MAX.text) ?? ''];
      }
      if (Object.keys(steps).length) x.steps = steps;
    }
    if (Object.keys(x).length) out.lessons[id] = x;
  }
  for (const [id, r] of Object.entries(raw.reviewed ?? {})) {
    if (!/^[a-z0-9-]{3,40}$/.test(id)) continue;
    if (r === null) { out.reviewed[id] = null; continue; }
    const by = str(r?.by, 80);
    const date = str(r?.date, 10);
    if (!by || !date || !DATE.test(date)) continue;
    out.reviewed[id] = { by, date, device: str(r.device, 80) ?? '' };
  }
  return out;
}

/** 언어 팩(G: TITLES·LESSONS)과 검수 기록에 편집 내용을 적용한 새 객체를 돌려준다. 원본은 건드리지 않는다. */
export function applyEdits(G, REVIEWED, raw) {
  const edits = cleanEdits(raw);
  const TITLES = { ...G.TITLES };
  const LESSONS = { ...G.LESSONS };
  const applied = [];
  for (const [id, e] of Object.entries(edits.lessons)) {
    const lesson = LESSONS[id];
    if (!lesson || !TITLES[id]) continue;
    if (e.title) TITLES[id] = [TITLES[id][0], e.title];
    const steps = lesson.steps.map((s) => [...s]); // 여러 수업이 같은 단계 배열을 함께 쓰므로 복사해서 고친다
    for (const [i, s] of Object.entries(e.steps ?? {})) {
      const [t, h, n] = s;
      if (Number(i) < steps.length) steps[Number(i)] = n ? [t, h, n] : h ? [t, h] : [t];
    }
    LESSONS[id] = { ...lesson, ...(e.desc ? { desc: e.desc } : {}), steps };
    applied.push(id);
  }
  const reviewed = { ...REVIEWED };
  for (const [id, r] of Object.entries(edits.reviewed)) {
    if (r === null) delete reviewed[id];
    else if (LESSONS[id]) reviewed[id] = r;
  }
  return { G: { ...G, TITLES, LESSONS }, REVIEWED: reviewed, edited: applied };
}
