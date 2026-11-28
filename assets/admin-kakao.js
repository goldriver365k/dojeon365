// DigiStep365 관리자: 카카오톡 사용법(국내 전용) — 목차·수업·단계 카드·실제 화면 이미지·버전·검수·공개 상태
// 저장: ① catalog.json 내려받기  ② GitHub API로 이미지(images/kakaotalk/…)와 data/kakaotalk/catalog.json 커밋(토큰은 sessionStorage에만)
// 공개 조건은 scripts/build-kakaotalk.mjs의 publishProblems()와 같다(빌드가 한 번 더 검사해 미달이면 공개하지 않는다).
import { renderKakao } from './kakao-screens.js?v=20261128.1251';
import { renderWhatsApp } from './whatsapp-screens.js?v=20261128.1251';
import { renderScreen } from './screens.js?v=20261128.1251';
import { renderIphone, setIpLang } from './iphone-screens.js?v=20261128.1251';
import { KO_SCREEN } from '../data/iphone/ko-screen.js?v=20261128.1251';
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const root = $('[data-kadmin]');
// 과정별 설정(카카오톡: 국내 / WhatsApp: 해외)
const CFG = {
  kakaotalk: { app: '카카오톡', file: 'data/kakaotalk/catalog.json', img: 'images/kakaotalk', prefix: 'k', render: renderKakao, view: (l) => `/#/lesson/${l.id}/1`, versionHint: '더보기 › 설정 › 전체 설정 › 기타 › 앱 버전', altHint: '예: 채팅방 아래 ＋ 버튼이 보이는 카카오톡 화면', sources: [{ label: '카카오 더 쉬운 카톡설명서', url: 'https://talktips.kakao.com/' }, { label: '카카오 고객센터', url: 'https://cs.kakao.com/' }] },
  iphone: { app: '아이폰', file: 'data/iphone/catalog.json', img: 'images/iphone', prefix: 'i', render: (sc, t, a) => { setIpLang(state.lang === 'en' ? 'en' : 'ko', KO_SCREEN); return renderIphone(sc, t, a); }, drawnSource: '원본 화면 기준 재현(운영자 승인)', view: (l) => `/learn/iphone/${l.slug}/`, versionHint: '설정 › 일반 › 정보 › iOS 버전', altHint: '예: 설정 화면에서 ‘디스플레이 및 밝기’가 보이는 아이폰 화면', sources: [{ label: 'Apple iPhone 사용 설명서', url: 'https://support.apple.com/ko-kr/guide/iphone/welcome/ios' }],
    langs: ['ko', 'en'],
    verFields: [['iphoneModel', '아이폰 모델', '예: iPhone 16'], ['ios', 'iOS 버전', '예: 26.1'], ['lastChecked', '마지막 확인 날짜', 'type=date'], ['reviewedBy', '검수자', '']],
    metaFields: [['iphoneModel', '아이폰 모델'], ['ios', 'iOS'], ['lang', '화면 언어'], ['country', '국가'], ['captured', '캡처 날짜', 'date'], ['reviewed', '검수 날짜', 'date'], ['license', '사용 권한']],
    imageSources: ['직접 캡처(교육용 아이폰)', 'Xcode iOS 시뮬레이터 캡처', '사용 권한을 받은 Apple 공식 이미지'] },
  whatsapp: { app: 'WhatsApp', file: 'data/whatsapp/catalog.json', img: 'images/whatsapp', prefix: 'w', render: renderWhatsApp, view: (l) => `/en/whatsapp/${l.slug}/`, versionHint: 'Settings › Help › App info', altHint: 'e.g. WhatsApp chat screen with the paper clip button highlighted', sources: [{ label: 'WhatsApp Help Center', url: 'https://faq.whatsapp.com/' }] },
}[root.dataset.course ?? 'kakaotalk'];
const STATUS = JSON.parse(root.dataset.statuses);
const PUBLIC = JSON.parse(root.dataset.public);
const KEY = { whatsapp: 'digistep365.wadmin.v1', iphone: 'digistep365.iadmin.v1' }[root.dataset.course] ?? 'digistep365.kadmin.v1';
const KEY_TOKEN = 'digistep365.admin.token';
const KEY_SETTINGS = 'digistep365.admin.settings';
const store = {
  get(k, d, s = localStorage) { try { const v = s.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v, s = localStorage) { try { s.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
  del(k, s = localStorage) { try { s.removeItem(k); } catch { /* ignore */ } },
};
const state = { catalog: null, base: '', sel: null, images: new Map(), filter: 'all', q: '', lang: 'ko' };
// 언어별 필드(아이폰: 한국어 = text·image·imageMeta, 영어 = textEn·imageEn·imageMetaEn)
const K = (name) => (state.lang === 'en' ? ({ text: 'textEn', image: 'imageEn', imageMeta: 'imageMetaEn', targetLabel: 'targetEn', title: 'titleEn' }[name] ?? name) : name);
const VER = CFG.verFields ?? [['appVersion', `${CFG.app} 앱 버전`], ['android', '안드로이드 버전'], ['galaxyModel', '갤럭시 모델'], ['lastChecked', '마지막 확인 날짜'], ['reviewedBy', '검수자']];
const today = () => new Date().toISOString().slice(0, 10);
const dirty = () => JSON.stringify(state.catalog) !== state.base || state.images.size > 0;
const lessons = () => state.catalog.chapters.flatMap((ch) => ch.lessons.map((l) => ({ l, ch })));
const find = (id) => lessons().find((x) => x.l.id === id);
const setMsg = (t, bad = false) => { const m = $('[data-msg]'); m.textContent = t; m.classList.toggle('edit__msg--bad', bad); };

/** 공개 조건(빌드와 같은 규칙; 아직 커밋 안 한 이미지는 있는 것으로 본다) */
function problems(l) {
  const p = [];
  for (const [k, label] of VER) if (!String(l[k] ?? '').trim()) p.push(`${label} 없음`);
  if (!l.sources?.length) p.push('공식 참고 자료 없음');
  if (!l.steps?.length) p.push('단계 없음');
  (l.steps ?? []).forEach((s, i) => {
    const n = `${i + 1}단계`;
    // 공개 상태는 한국어 기준으로 판단하고, 영어는 영어 화면이 다 갖춰지면 빌드가 따로 공개한다
    for (const g of CFG.langs ? ['ko'] : [null]) {
      // 아이폰: 언어마다 그 언어 화면 캡처가 따로 필요(코드로 그린 화면은 공개 불가)
      const tx = g === 'en' ? s.textEn : s.text; const img = (g === 'en' ? s.imageEn : s.image) ?? {}; const m = (g === 'en' ? s.imageMetaEn : s.imageMeta) ?? {};
      const pre = g ? `${n}(${g === 'en' ? '영어' : '한국어'})` : n;
      if (!String(tx ?? '').trim()) p.push(`${pre} 설명 없음`);
      // 아이폰: 운영자가 승인한 재현 그림(approvedWithoutCompare)은 실제 캡처 대신 쓸 수 있음
      const drawnOk = CFG.langs && l.approvedWithoutCompare && !img.src && img.screen && m.source === CFG.drawnSource;
      if (drawnOk) { if (m.privacyChecked !== true) p.push(`${pre} 개인정보 노출 확인 안 됨`); continue; }
      if (!img.src && (CFG.langs || !img.screen)) p.push(`${pre} 실제 화면 이미지 없음`);
      if (!String(img.alt ?? '').trim()) p.push(`${pre} 이미지 설명(alt) 없음`);
      if (!m.source) p.push(`${pre} 이미지 출처 없음`);
      else if (CFG.imageSources && !CFG.imageSources.includes(m.source)) p.push(`${pre} 이미지 출처가 실제 캡처가 아님`);
      for (const [k, label] of CFG.metaFields ?? []) if (!String(m[k] ?? '').trim()) p.push(`${pre} 이미지 ${label} 없음`);
      if (!m.reviewed) p.push(`${pre} 이미지 검수 날짜 없음`);
      if (m.privacyChecked !== true) p.push(`${pre} 개인정보 노출 확인 안 됨`);
    }
  });
  return p;
}

function save() {
  // 사람이 고친 수업은 표시해 두어 원고 자동 채우기(kakaotalk-fill)가 덮어쓰지 않게 한다
  const hit = state.sel && find(state.sel); if (hit && JSON.stringify(state.catalog) !== state.base) hit.l.edited = true;
  store.set(KEY, { catalog: state.catalog, base: state.base }); renderSum(); renderPending();
}

/* ---------- 목록 ---------- */
function renderSum() {
  const all = lessons().map((x) => x.l);
  const by = Object.fromEntries(Object.keys(STATUS).map((k) => [k, all.filter((l) => l.status === k).length]));
  const live = all.filter((l) => PUBLIC.includes(l.status) && !problems(l).length).length;
  $('[data-sum]').innerHTML = `<p><b>대분류 ${state.catalog.chapters.length}개 · 사용법 ${all.length}개 · 홈페이지 공개 ${live}개</b> · 단계 카드 ${all.reduce((a, l) => a + (l.steps?.length ?? 0), 0)}장</p>
  <p class="kadmin__chips">${Object.entries(STATUS).map(([k, v]) => `<span class="kchip kchip--${k}">${esc(v)} ${by[k]}</span>`).join('')}</p>`;
}
function visible(l) {
  const q = state.q.toLowerCase();
  if (q && !`${l.title} ${l.id}`.toLowerCase().includes(q)) return false;
  if (state.filter === 'all') return true;
  if (state.filter === 'problem') return PUBLIC.includes(l.status) && problems(l).length > 0;
  if (state.filter === 'existing') return Boolean(l.existing);
  return l.status === state.filter;
}
function renderList() {
  const cs = state.catalog.chapters;
  $('[data-list]').innerHTML = cs.map((ch, ci) => {
    const ls = ch.lessons.filter(visible);
    if (!ls.length && state.filter !== 'all') return '';
    return `<section class="kgroup">
    <h2><span>${String(ch.num).padStart(2, '0')}. ${esc(ch.title)}</span> <small>${ch.lessons.length}개</small></h2>
    <p class="kgroup__tools"><button type="button" data-ch-up="${ci}" ${ci === 0 ? 'disabled' : ''} aria-label="위로">↑</button><button type="button" data-ch-down="${ci}" ${ci === cs.length - 1 ? 'disabled' : ''} aria-label="아래로">↓</button><button type="button" data-ch-rename="${ci}">이름</button><button type="button" data-ch-del="${ci}">삭제</button><button type="button" data-add-lesson="${ci}">+ 사용법</button></p>
    <ol>${ls.map((l) => `<li><button type="button" class="klink ${state.sel === l.id ? 'is-on' : ''}" data-pick="${esc(l.id)}"><span class="kdot kdot--${l.status}" title="${esc(STATUS[l.status])}"></span>${esc(l.title)}<small>${l.steps?.length ?? 0}장${l.existing ? ' · 기존 그림 수업 있음' : ''}</small></button></li>`).join('')}</ol>
  </section>`;
  }).join('') || '<p>조건에 맞는 사용법이 없습니다.</p>';
}

/* ---------- 편집 ---------- */
const imgURL = (src) => (state.images.has(src) ? state.images.get(src).url : `/${src}`);
const field = (label, name, value, extra = '') => `<label class="kf">${label}<input data-f="${name}" value="${esc(value)}" ${extra}></label>`;
function renderEditor() {
  const pane = $('[data-editor-pane]');
  const hit = state.sel && find(state.sel);
  if (!hit) { pane.innerHTML = '<p class="lead">왼쪽에서 수업을 고르세요.</p>'; return; }
  const { l, ch } = hit;
  const prob = problems(l);
  const opts = state.catalog.chapters.map((c, i) => `<option value="${i}" ${c === ch ? 'selected' : ''}>${String(c.num).padStart(2, '0')}. ${esc(c.title)}</option>`).join('');
  pane.innerHTML = `<header class="kedit__head"><p class="eyebrow">${String(ch.num).padStart(2, '0')}. ${esc(ch.title)} · <code>${esc(l.id)}</code></p>
  <h2>${esc(l.title)}</h2>
  ${CFG.langs ? `<p class="kedit__lang"><label>편집 언어(이 언어의 실제 화면을 올려요) <select data-lang>${CFG.langs.map((g) => `<option value="${g}" ${state.lang === g ? 'selected' : ''}>${g === 'ko' ? '한국어' : 'English'}</option>`).join('')}</select></label> ${l.titleEn ? `<span class="hint">영어 제목: ${esc(l.titleEn)}</span>` : ''}</p>` : ''}
  <p class="kedit__tools"><button type="button" data-l-up>↑ 위로</button><button type="button" data-l-down>↓ 아래로</button><label>대분류 이동 <select data-l-move>${opts}</select></label><button type="button" data-l-del>사용법 삭제</button>${!PUBLIC.includes(l.status) ? ' <button type="button" class="kbtn-ok" data-l-approve>실제 앱과 대조 완료 → 검수·공개</button>' : ''}${PUBLIC.includes(l.status) && !prob.length ? ` <a href="${esc(CFG.view(l))}" target="_blank" rel="noopener">홈페이지에서 보기</a>` : ''}</p></header>
  ${l.existing ? `<p class="step__note">이 주제는 기존 <a href="/learn/${esc(l.existing.course)}/${esc(l.existing.id)}/" target="_blank">갤럭시 수업(${esc(l.existing.id)})</a>에도 그림(실제 화면 아님)으로 있어요. 실제 화면 수업을 공개하면 그 수업의 그림을 교체·연결할지 정하세요.</p>` : ''}
  <div class="kgrid">
    ${field('사용법 제목', 'title', l.title)}
    <label class="kf">공개 상태<select data-f="status">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}" ${l.status === k ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></label>
    ${field('검색어(쉼표로, 일상 표현 포함)', 'q', (l.q ?? []).join(', '))}
    ${field('메뉴 이동 경로', 'menuPath', l.menuPath, 'placeholder="예: 더보기 › 설정 › 화면"')}
    ${field('지원 기능·조건', 'features', l.features)}
    ${field('주의사항(중요 기능)', 'caution', l.caution)}
  </div>
  <fieldset class="kbox"><legend>버전·검수</legend><div class="kgrid">
    ${CFG.verFields ? CFG.verFields.map(([k, label, ph]) => field(label, k, l[k], ph === 'type=date' ? 'type="date"' : ph ? `placeholder="${esc(ph)}"` : '')).join('') : `${field(`${CFG.app} 앱 버전`, 'appVersion', l.appVersion, 'placeholder="예: 25.10.1"')}
    ${field('갤럭시 모델', 'galaxyModel', l.galaxyModel, 'placeholder="예: 갤럭시 S26"')}
    ${field('안드로이드 버전', 'android', l.android, 'placeholder="예: 17"')}
    ${field('One UI 버전', 'oneui', l.oneui, 'placeholder="예: 9"')}
    ${field('마지막 확인 날짜', 'lastChecked', l.lastChecked, 'type="date"')}
    ${field('검수자', 'reviewedBy', l.reviewedBy)}`}
    <label class="kf kf--check"><input type="checkbox" data-f="needsUpdate" ${l.needsUpdate ? 'checked' : ''}> 업데이트 필요(메뉴가 바뀜)</label>
    ${field('메뉴 변경사항 기록', 'changes', l.changes)}
  </div>
  <label class="kf">공식 참고 자료(한 줄에 하나: 이름 | 주소)<textarea data-f="sources" rows="3">${esc((l.sources ?? []).map((s) => `${s.label} | ${s.url}`).join('\n'))}</textarea></label>
  </fieldset>
  ${prob.length ? `<details class="kprob" ${PUBLIC.includes(l.status) ? 'open' : ''}><summary>공개하려면 ${prob.length}가지가 더 필요해요</summary><ul>${prob.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></details>` : '<p class="kok">공개 조건을 모두 갖췄어요. 상태를 ‘공개’로 바꾸고 저장하면 홈페이지에 나옵니다.</p>'}
  <h3>단계 카드 (${l.steps.length}장)</h3>
  <ol class="ksteps">${l.steps.map((s, i) => stepCard(s, i, l.steps.length)).join('')}</ol>
  <p><button type="button" class="btn" data-step-add>+ 단계 추가</button></p>`;
}
function stepCard(s, i, n) {
  const img = s[K('image')] ?? {};
  const m = s[K('imageMeta')] ?? {};
  const t = img.target;
  return `<li class="kstep" data-step="${i}">
  <div class="kstep__pic">${img.screen && !img.src ? `<div class="kshot kshot--svg" title="코드로 그린 재현 화면">${(img.screen.galaxy ? renderScreen(img.screen.galaxy, s.targetLabel || undefined, 'tap') : CFG.render(img.screen, (CFG.langs ? s.targetKey : s.targetLabel) || undefined, s.action ?? 'tap')).svg}</div><p class="hint">재현 화면 — 실제 앱과 대조하세요. 실제 캡처로 바꾸려면 아래에서 올리세요.</p>` : img.src ? `<div class="kshot" data-shot="${i}" title="그림을 누르면 그 자리에 빨간 원을 놓아요"><img src="${esc(imgURL(img.src))}" alt="" draggable="false">${t ? `<span class="photo-ring photo-ring--circle" style="left:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%"></span>` : ''}</div>` : '<div class="kshot kshot--empty">실제 화면 캡처 없음</div>'}
    <label class="kfile">실제 화면 올리기<input type="file" accept="image/png,image/jpeg,image/webp" data-upload="${i}"></label>
    ${t ? `<label class="kf">빨간 원 크기 <input type="range" min="6" max="40" value="${Math.round(t.w)}" data-ring="${i}"></label><button type="button" data-ring-del="${i}">빨간 원 지우기</button>` : img.src ? '<p class="hint">그림에서 누를 곳을 누르세요.</p>' : ''}
  </div>
  <div class="kstep__body">
    <p class="step__no">${i + 1}단계 / ${n}</p>
    <label class="kf">설명(한 가지 동작)<textarea data-s="text" rows="2">${esc(s[K('text')])}</textarea></label>
    <label class="kf">음성 안내(비우면 설명을 읽어요)<input data-s="voice" value="${esc(s.voice)}"></label>
    <label class="kf">도움말(선택)<input data-s="hint" value="${esc(s.hint)}"></label>
    <label class="kf">누를 곳 이름(화면에 보이는 글자)<input data-s="targetLabel" value="${esc(s[K('targetLabel')])}">${s.shot ? `<span class="hint">캡처할 화면: ${esc(s.shot)}</span>` : ''}</label>
    <label class="kf">이미지 설명(alt)<input data-i="alt" value="${esc(img.alt)}" placeholder="${esc(CFG.altHint)}"></label>
    <fieldset class="kbox kbox--s"><legend>이미지 기록</legend><div class="kgrid">
      <label class="kf">출처<select data-m="source"><option value="">고르세요</option>${(CFG.imageSources ?? ['직접 캡처(교육용 계정)', '권한을 받은 공식 화면', '원본 화면 기준 재현(검수 필수)']).map((o) => `<option ${m.source === o ? 'selected' : ''}>${o}</option>`).join('')}</select></label>
      ${CFG.metaFields ? CFG.metaFields.map(([k, label, type]) => `<label class="kf">${label}<input ${type === 'date' ? 'type="date"' : ''} data-m="${k}" value="${esc(m[k])}"></label>`).join('') : `<label class="kf">${CFG.app} 버전<input data-m="appVersion" value="${esc(m.appVersion)}"></label>
      <label class="kf">갤럭시 모델<input data-m="galaxyModel" value="${esc(m.galaxyModel)}"></label>
      <label class="kf">Android<input data-m="android" value="${esc(m.android)}"></label>
      <label class="kf">One UI<input data-m="oneui" value="${esc(m.oneui)}"></label>
      <label class="kf">제작 날짜<input type="date" data-m="created" value="${esc(m.created)}"></label>
      <label class="kf">최종 검수 날짜<input type="date" data-m="reviewed" value="${esc(m.reviewed)}"></label>`}
      <label class="kf kf--check"><input type="checkbox" data-m="privacyChecked" ${m.privacyChecked ? 'checked' : ''}> 실제 개인정보(번호·계정·인증번호·결제·실제 대화)가 보이지 않음을 확인</label>
    </div></fieldset>
    <p class="kstep__tools"><button type="button" data-s-up ${i === 0 ? 'disabled' : ''}>↑</button><button type="button" data-s-down ${i === n - 1 ? 'disabled' : ''}>↓</button><button type="button" data-s-del>단계 삭제</button></p>
  </div></li>`;
}
const render = () => { renderList(); renderEditor(); renderSum(); renderPending(); };

/* ---------- 변경 ---------- */
function setLesson(name, value) {
  const { l } = find(state.sel);
  if (name === 'q') l.q = value.split(',').map((x) => x.trim()).filter(Boolean);
  else if (name === 'sources') l.sources = value.split('\n').map((x) => x.split('|').map((y) => y.trim())).filter(([a, b]) => a && /^https?:\/\//.test(b ?? '')).map(([label, url]) => ({ label, url }));
  else if (name === 'needsUpdate') { l.needsUpdate = value; if (value && PUBLIC.includes(l.status)) l.status = 'update'; }
  else if (name === 'status') {
    if (PUBLIC.includes(value) && problems(l).length) { alert(`아직 공개할 수 없어요:\n- ${problems(l).join('\n- ')}`); renderEditor(); return; }
    l.status = value;
  } else l[name] = value;
  save();
  if (['title', 'status'].includes(name)) { renderList(); renderEditor(); }
}
function stepOf(el) { const { l } = find(state.sel); return [l, Number(el.closest('[data-step]').dataset.step)]; }

async function upload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 8e6) { alert('8MB보다 큰 이미지는 올릴 수 없어요.'); return; }
  const [l, i] = stepOf(input);
  const url = URL.createObjectURL(file);
  const dim = await new Promise((res) => { const im = new Image(); im.onload = () => res({ w: im.naturalWidth, h: im.naturalHeight }); im.onerror = () => res(null); im.src = url; });
  if (!dim) { alert('그림 파일을 읽지 못했어요.'); return; }
  if (dim.h < dim.w) alert('가로가 더 긴 그림이에요. 휴대폰 화면 캡처(세로)가 맞는지 확인하세요.');
  const ext = file.type === 'image/jpeg' ? 'jpg' : file.type === 'image/webp' ? 'webp' : 'png';
  const src = `${CFG.img}/${CFG.langs ? `${state.lang}/` : ''}${l.id}/${i + 1}-${Date.now().toString(36)}.${ext}`;
  const b64 = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.readAsDataURL(file); });
  const IM = K('image'); const IMM = K('imageMeta');
  const old = l.steps[i][IM]?.src;
  if (old && state.images.has(old)) state.images.delete(old);
  state.images.set(src, { url, b64 });
  l.steps[i][IM] = { ...(l.steps[i][IM] ?? {}), src, w: dim.w, h: dim.h, target: undefined };
  l.steps[i][IMM] = { ...(l.steps[i][IMM] ?? {}), created: today(), ...(CFG.langs ? { captured: today(), lang: state.lang } : {}), reviewed: '', privacyChecked: false };
  save(); renderEditor();
}
function placeRing(shot, e) {
  const [l, i] = stepOf(shot);
  const img = l.steps[i][K('image')];
  const r = shot.getBoundingClientRect();
  const w = img.target?.w ?? 14;
  const h = w * (img.w / img.h);
  const x = ((e.clientX - r.left) / r.width) * 100 - w / 2;
  const y = ((e.clientY - r.top) / r.height) * 100 - h / 2;
  img.target = { x: +x.toFixed(2), y: +y.toFixed(2), w, h: +h.toFixed(2) };
  save(); renderEditor();
}

root.addEventListener('click', (e) => {
  const b = e.target.closest('button, [data-shot]');
  if (!b) return;
  const cs = state.catalog.chapters;
  const d = b.dataset;
  if (d.pick) { state.sel = d.pick; renderList(); renderEditor(); return; }
  if (d.shot !== undefined && b.matches('.kshot:not(.kshot--empty)')) { placeRing(b, e); return; }
  const renum = () => cs.forEach((c, i) => { c.num = i + 1; });
  if (d.chUp) { const i = +d.chUp; [cs[i - 1], cs[i]] = [cs[i], cs[i - 1]]; renum(); }
  else if (d.chDown) { const i = +d.chDown; [cs[i + 1], cs[i]] = [cs[i], cs[i + 1]]; renum(); }
  else if (d.chRename) { const t = prompt('대분류 이름', cs[+d.chRename].title); if (!t) return; cs[+d.chRename].title = t.trim(); }
  else if (d.chDel) { const c = cs[+d.chDel]; if (c.lessons.length && !confirm(`‘${c.title}’과 안의 사용법 ${c.lessons.length}개를 모두 지울까요?`)) return; cs.splice(+d.chDel, 1); renum(); }
  else if (b.matches('[data-add-chapter]')) { const t = prompt('새 대분류 이름'); if (!t) return; cs.push({ num: cs.length + 1, key: `ch${Date.now().toString(36)}`, title: t.trim(), group: 'adv', lessons: [] }); }
  else if (d.addLesson) {
    const c = cs[+d.addLesson]; const t = prompt('새 사용법 제목'); if (!t) return;
    const slug = (prompt('주소용 영문 이름(소문자·숫자·-)', 'new-lesson') ?? '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40) || `new-${Date.now().toString(36)}`;
    const id = `${CFG.prefix}${String(c.num).padStart(2, '0')}-${slug}`;
    if (find(id)) { alert('같은 주소가 이미 있어요.'); return; }
    c.lessons.push({ id, slug, title: t.trim(), status: 'draft', q: [], caution: '', menuPath: '', features: '', steps: [], platform: 'android', appVersion: '', android: '', oneui: '', galaxyModel: '', sources: CFG.sources, lastChecked: '', reviewedBy: '', needsUpdate: false, changes: '' });
    state.sel = id;
  } else if (state.sel) {
    const { l, ch } = find(state.sel);
    const li = ch.lessons.indexOf(l);
    if (b.matches('[data-l-up]') && li > 0) [ch.lessons[li - 1], ch.lessons[li]] = [l, ch.lessons[li - 1]];
    else if (b.matches('[data-l-down]') && li < ch.lessons.length - 1) [ch.lessons[li + 1], ch.lessons[li]] = [l, ch.lessons[li + 1]];
    else if (b.matches('[data-l-del]')) { if (!confirm(`‘${l.title}’을 지울까요?`)) return; ch.lessons.splice(li, 1); state.sel = null; }
    else if (b.matches('[data-l-approve]')) {
      // 사람이 실제 갤럭시 카카오톡과 모든 단계를 대조한 뒤에만 누른다
      const who = prompt('검수자 이름(실제 앱과 모든 단계를 대조했어요)', l.reviewedBy || '');
      if (!who) return;
      const ver = prompt(CFG.verFields ? `대조한 iOS 버전(${CFG.versionHint})` : `대조한 ${CFG.app} 앱 버전(${CFG.versionHint})`, (CFG.verFields ? l.ios : l.appVersion) || '');
      if (!ver) return;
      Object.assign(l, { reviewedBy: who.trim(), lastChecked: today(), ...(CFG.verFields ? { ios: ver.trim() } : { appVersion: ver.trim() }) });
      l.steps.forEach((st) => { const IMM = K('imageMeta'); st[IMM] = { ...(st[IMM] ?? {}), reviewed: today(), ...(CFG.verFields ? { ios: st[IMM]?.ios || ver.trim() } : { appVersion: ver.trim() }) }; });
      const prob = problems(l);
      if (prob.length) { alert(`아직 공개할 수 없어요:\n- ${prob.join('\n- ')}`); l.status = 'review'; } else l.status = 'published';
      l.edited = true;
    }
    else if (b.matches('[data-step-add]')) l.steps.push({ text: '', voice: '', hint: '', targetLabel: '', image: {}, imageMeta: {} });
    else if (b.matches('[data-s-up], [data-s-down], [data-s-del], [data-ring-del]')) {
      const i = Number(b.closest('[data-step]').dataset.step);
      if (b.matches('[data-s-up]')) [l.steps[i - 1], l.steps[i]] = [l.steps[i], l.steps[i - 1]];
      if (b.matches('[data-s-down]')) [l.steps[i + 1], l.steps[i]] = [l.steps[i], l.steps[i + 1]];
      if (b.matches('[data-s-del]')) { if (!confirm(`${i + 1}단계를 지울까요?`)) return; l.steps.splice(i, 1); }
      if (b.matches('[data-ring-del]')) delete l.steps[i][K('image')].target;
    } else return;
    if (PUBLIC.includes(l.status) && problems(l).length) l.status = 'review';
  } else return;
  save(); render();
});
root.addEventListener('change', (e) => {
  const el = e.target;
  if (el.matches('[data-filter]')) { state.filter = el.value; renderList(); return; }
  if (el.matches('[data-upload]')) { upload(el); return; }
  if (el.matches('[data-l-move]')) {
    const { l, ch } = find(state.sel); const to = state.catalog.chapters[+el.value];
    if (to !== ch) { ch.lessons.splice(ch.lessons.indexOf(l), 1); to.lessons.push(l); save(); render(); }
    return;
  }
  if (el.matches('[data-f]')) setLesson(el.dataset.f, el.type === 'checkbox' ? el.checked : el.value);
  if (el.matches('[data-lang]')) { state.lang = el.value; renderEditor(); return; }
  if (el.matches('[data-m]')) { const [l, i] = stepOf(el); const IMM = K('imageMeta'); l.steps[i][IMM] = { ...(l.steps[i][IMM] ?? {}), [el.dataset.m]: el.type === 'checkbox' ? el.checked : el.value }; if (PUBLIC.includes(l.status) && problems(l).length) l.status = 'review'; save(); renderEditor(); }
});
root.addEventListener('input', (e) => {
  const el = e.target;
  if (el.matches('[data-search]')) { state.q = el.value; renderList(); return; }
  if (el.matches('[data-s], [data-i]')) {
    const [l, i] = stepOf(el);
    if (el.dataset.s) l.steps[i][K(el.dataset.s)] = el.value; else l.steps[i][K('image')] = { ...(l.steps[i][K('image')] ?? {}), alt: el.value };
    if (PUBLIC.includes(l.status) && problems(l).length) l.status = 'review';
    save();
  }
  if (el.matches('[data-ring]')) {
    const [l, i] = stepOf(el); const img = l.steps[i][K('image')]; const t = img.target;
    const cx = t.x + t.w / 2; const cy = t.y + t.h / 2; const w = +el.value; const h = w * (img.w / img.h);
    img.target = { x: +(cx - w / 2).toFixed(2), y: +(cy - h / 2).toFixed(2), w, h: +h.toFixed(2) };
    const ring = el.closest('.kstep').querySelector('.photo-ring');
    if (ring) Object.assign(ring.style, { left: `${img.target.x}%`, top: `${img.target.y}%`, width: `${w}%`, height: `${img.target.h}%` });
    save();
  }
});

/* ---------- 저장 ---------- */
function renderPending() {
  const p = $('[data-pending]');
  if (!p) return;
  p.textContent = dirty() ? `저장 안 한 변경이 있어요${state.images.size ? ` (새 이미지 ${state.images.size}장 — 새로고침하면 사라지니 먼저 저장하세요)` : ''}.` : '저장 안 한 변경이 없습니다.';
}
const pretty = (o) => `${JSON.stringify(o, null, 1)}\n`;
const b64encode = (str) => { const bytes = new TextEncoder().encode(str); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(bin); };
const b64decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), (c) => c.charCodeAt(0)));
function explain(status) {
  if (status === 401) return '토큰이 올바르지 않거나 만료되었습니다.';
  if (status === 403) return '이 토큰에 저장소 쓰기 권한(Contents: Read and write)이 없습니다.';
  if (status === 404) return '저장소나 브랜치를 찾지 못했습니다.';
  if (status === 409) return '다른 사람이 먼저 저장했습니다. 새로고침 후 다시 시도하세요.';
  if (status === 422) return 'GitHub가 요청을 거절했습니다(브랜치 이름을 확인하세요).';
  return `GitHub 오류 ${status}.`;
}
async function commit() {
  const repo = $('[data-repo]').value.trim();
  const branch = $('[data-branch]').value.trim();
  const token = $('[data-token]').value.trim();
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || !branch) { setMsg('저장소(소유자/이름)와 브랜치를 확인하세요.', true); return; }
  if (!token) { setMsg('개인 액세스 토큰을 넣으세요. 없으면 catalog.json 내려받기를 쓰세요.', true); return; }
  store.set(KEY_SETTINGS, { ...store.get(KEY_SETTINGS, {}), repo, branch });
  store.set(KEY_TOKEN, token, sessionStorage);
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  const api = (path) => `https://api.github.com/repos/${repo}/contents/${path}`;
  const btn = $('[data-commit]'); btn.disabled = true;
  try {
    let k = 0;
    for (const [path, { b64 }] of state.images) {
      setMsg(`이미지 저장 중… (${++k}/${state.images.size})`);
      const put = await fetch(api(path), { method: 'PUT', headers, body: JSON.stringify({ message: `${CFG.app} 교육 이미지: ${path}`, content: b64, branch }) });
      if (!put.ok && put.status !== 422) throw new Error(explain(put.status));
    }
    setMsg('목록(catalog.json) 저장 중…');
    const file = CFG.file;
    const get = await fetch(`${api(file)}?ref=${encodeURIComponent(branch)}`, { headers, cache: 'no-store' });
    if (!get.ok) throw new Error(explain(get.status));
    const j = await get.json();
    if (JSON.stringify(JSON.parse(b64decode(j.content))) !== state.base && !confirm('그 사이 다른 곳에서 목록이 바뀌었어요. 내 변경으로 덮어쓸까요?')) throw new Error('저장을 멈췄습니다.');
    state.catalog.meta.updated = today();
    const content = pretty(state.catalog);
    const put = await fetch(api(file), { method: 'PUT', headers, body: JSON.stringify({ message: `${CFG.app} 교육 관리: 목록·단계·검수 수정`, content: b64encode(content), branch, sha: j.sha }) });
    if (!put.ok) throw new Error(explain(put.status));
    state.base = JSON.stringify(state.catalog);
    state.images.clear();
    save();
    setMsg('저장했습니다. 사이트가 다시 만들어져 1~3분 뒤 반영됩니다(공개 조건을 갖춘 ‘공개’ 수업만 홈페이지에 나와요).');
  } catch (err) {
    setMsg(`저장하지 못했습니다: ${err.message} 변경 내용은 이 브라우저에 남아 있습니다.`, true);
  } finally { btn.disabled = false; renderPending(); }
}
$('[data-commit]').addEventListener('click', commit);
$('[data-download]').addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([pretty(state.catalog)], { type: 'application/json' }));
  a.download = 'catalog.json'; a.click();
  if (state.images.size) setMsg(`새 이미지 ${state.images.size}장은 내려받기에 들어가지 않아요. GitHub 저장을 쓰거나 이미지를 ${CFG.img}/에 직접 넣으세요.`, true);
});
$('[data-reset]').addEventListener('click', () => { if (!confirm('저장 안 한 변경을 모두 버릴까요?')) return; store.del(KEY); location.reload(); });
window.addEventListener('beforeunload', (e) => { if (state.images.size) { e.preventDefault(); e.returnValue = ''; } });

/* ---------- 시작 ---------- */
(async () => {
  const settings = store.get(KEY_SETTINGS, {});
  if (settings.repo) $('[data-repo]').value = settings.repo;
  if (settings.branch) $('[data-branch]').value = settings.branch;
  $('[data-token]').value = store.get(KEY_TOKEN, '', sessionStorage);
  const res = await fetch(`/${CFG.file}`, { cache: 'no-store' });
  const fresh = await res.json();
  const saved = store.get(KEY, null);
  const freshText = JSON.stringify(fresh);
  if (saved && saved.base === freshText && JSON.stringify(saved.catalog) !== freshText) { state.catalog = saved.catalog; setMsg('이 브라우저에 저장 안 한 변경을 불러왔습니다.'); }
  else state.catalog = fresh;
  state.base = freshText;
  const id = new URLSearchParams(location.search).get('id');
  if (id && find(id)) state.sel = id;
  render();
})();
