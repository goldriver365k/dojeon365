// data/iphone/i18n/en.txt — 아이폰 수업에 쓰이는 영어 문장 전체(번호 목록)를 만든다.
// 과정 이름·안내·목차·수업 제목·단계 문장·주의·화면 그림 글자. 언어 파일 data/iphone/i18n/<lang>.txt는 같은 번호로 "번호|번역".
// 번호는 고정(번역이 번호에 기대므로) — 새 문장은 끝에 붙는다.
import { writeFileSync, readFileSync } from 'node:fs';
import { loadCatalog, IP_TEXT, IP_NOTE, UI_EN, CAUTION_EN, HOME_VARIANT } from './build-iphone.mjs';
import { renderIphone, setIpLang, setIpModel } from '../assets/iphone-screens.js';
import { FEATURE_LABELS, PORT_LABELS } from '../data/iphone/models.js';

/** 번역하지 않는 이름(사람·상표·앱 고유 이름) */
export const IP_PASS = new Set(['Maria', 'John', 'Tom', 'Anna', 'Kim', 'Maria Kim', 'Coco', 'Minji', 'iPhone', 'iMessage', 'iCloud', 'iCloud Drive', 'iCloud+', 'FaceTime', 'Safari', 'App Store', 'AirDrop', 'AirPods', 'Apple Pay', 'Siri', 'Wi-Fi', 'Bluetooth', 'YouTube', 'VoiceOver', 'AssistiveTouch', 'NameDrop', 'Genmoji', 'ChatGPT', 'Apple Intelligence', 'Image Playground', 'Face ID', 'Touch ID', 'Google', 'True Tone', 'Night Shift', 'Buds Pro', 'Weather Pro', 'Big Clock', 'Live Photo', 'RTT/TTY', 'MagSafe', 'AirTag', 'Apple Watch', 'Watch', 'Mail', 'Music', 'digistep365.com', 'example.com', 'Easy Lessons', 'apple1234', 'icb', 'omw', 'Hello', 'A', 'ABC', 'GB', 'Dr. Lee']);
/** 단계 문장 틀: “누르세요/켜세요/끄세요/고르세요” + 화면 글자 */
export const IP_TEMPLATES = { tap: /^Tap (.+)\.$/, on: /^Turn on (.+)\.$/, off: /^Turn off (.+)\.$/, choose: /^Choose (.+)\.$/ };
const skipWord = (s) => !/\p{L}/u.test(s) || IP_PASS.has(s) || /^[\d\s:.,+·%°•×-]*(GB|MB|kB|TB|km|mi|fps|min|AM|PM)?$/.test(s) || /@|\.(com|pdf|zip|docx)$/.test(s) || /^[\p{Emoji}\s]+$/u.test(s);

export function collectIphone(catalog = loadCatalog()) {
  const all = catalog.chapters.flatMap((c) => c.lessons);
  const screen = new Set(); const steps = new Set(); const words = new Set();
  setIpLang('xx', new Proxy({}, { get(_, k) { if (typeof k === 'string') screen.add(k); return undefined; } }));
  const each = (fn) => { for (const l of all) for (const [m, set] of [['face', l.steps], ['home', l.stepsHome ?? []]]) for (const s of set) fn(s, m); };
  each((s, m) => { const sc = s.imageEn?.screen ?? s.image?.screen; setIpModel(sc?.model ?? m); for (const a of ['tap', 'hold', 'swipe']) renderIphone(sc, s.targetKey || undefined, a); });
  setIpLang('en'); setIpModel('face');
  // 틀(“Tap X.”)은 X가 화면에 그려진 글자일 때만 — 나머지는 문장 통째로 번역
  each((s) => { const t = s.textEn; const tm = Object.values(IP_TEMPLATES).find((r) => r.test(t)); const x = tm && t.match(tm)[1]; if (x && (screen.has(x) || IP_PASS.has(x))) words.add(x); else steps.add(t); });
  for (const w of screen) words.add(w);
  const ui = Object.entries(UI_EN).map(([k, v]) => `@ui.${k}|${v}`);
  const feat = [...Object.entries(FEATURE_LABELS).map(([k, v]) => `@feat.${k}|${v[1]}`), ...Object.entries(PORT_LABELS).map(([k, v]) => `@port.${k}|${v[1]}`)];
  return [
    '@tap|Tap {x}.', '@on|Turn on {x}.', '@off|Turn off {x}.', '@choose|Choose {x}.', '@alt|iPhone screen drawing. {x}',
    `@title|${IP_TEXT.en.title}`, `@sub|${IP_TEXT.en.sub}`, `@disclaimer|${IP_TEXT.en.disclaimer}`, `@note|${IP_NOTE.en}`, `@homeVariant|${HOME_VARIANT.en}`,
    ...ui, ...feat,
    ...catalog.chapters.map((c) => `#ch:${c.key}|${c.titleEn}`),
    ...all.map((l) => `#t:${l.slug}|${l.titleEn}`),
    ...Object.entries(CAUTION_EN).map(([k, v]) => `#c:${k}|${v}`),
    ...[...steps].map((s) => `#s|${s}`),
    ...[...words].filter((w) => !skipWord(w)).map((s) => `#w|${s}`),
  ];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = new URL('../data/iphone/i18n/', import.meta.url);
  const fresh = collectIphone(); let rows = fresh;
  try {
    const en = readFileSync(new URL('en.txt', dir), 'utf8').trim().split('\n').map((x) => x.slice(x.indexOf('|') + 1));
    const keys = readFileSync(new URL('keys.txt', dir), 'utf8').trim().split('\n').map((x) => x.slice(x.indexOf('|') + 1));
    const old = keys.map((k, i) => `${k}|${en[i]}`);
    const norm = (r) => (r.startsWith('@') || r.startsWith('#ch:') || r.startsWith('#t:') || r.startsWith('#c:') ? r.split('|')[0] : r);
    const seen = new Set(old.map(norm));
    // 키가 같은 줄(과정 안내·제목)은 영어가 바뀌면 새 영어로
    const freshBy = new Map(fresh.map((r) => [norm(r), r]));
    rows = [...old.map((r) => freshBy.get(norm(r)) ?? r), ...fresh.filter((r) => !seen.has(norm(r)))];
  } catch { /* 처음 */ }
  writeFileSync(new URL('en.txt', dir), `${rows.map((r, i) => `${i + 1}|${r.slice(r.indexOf('|') + 1)}`).join('\n')}\n`);
  writeFileSync(new URL('keys.txt', dir), `${rows.map((r, i) => `${i + 1}|${r.slice(0, r.indexOf('|'))}`).join('\n')}\n`);
  console.log('strings', rows.length);
}
