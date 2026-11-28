// 번역 파일 점검: 줄 수·번호, {x}{n}{t}, 숫자·기호, 문장 끝 마침표가 영어 줄과 맞는지(줄이 밀렸는지) 확인
import { readFileSync, readdirSync } from 'node:fs';
const dir = new URL('../data/iphone/i18n/', import.meta.url);
const split = (x) => [x.slice(0, x.indexOf('|')), x.slice(x.indexOf('|') + 1)];
const base = (f) => new Map(readFileSync(new URL(f, dir), 'utf8').trim().split('\n').map(split).map(([n, v]) => [+n, v]));
const en = base('en.txt'); const keys = base('keys.txt');
const EW = new Set([...en].filter(([n]) => keys.get(n) === '#w').map(([, v]) => v));
const splitWord = (x) => { for (let i = x.indexOf('|'); i > 0; i = x.indexOf('|', i + 1)) if (EW.has(x.slice(1, i))) return [x.slice(0, i), x.slice(i + 1)]; return split(x); };
const raw = (f) => readFileSync(new URL(f, dir), 'utf8').trim().split('\n').map((x) => (x.startsWith('=') ? splitWord(x) : split(x)));
const rows = (f) => new Map(raw(f).filter(([n]) => !n.startsWith('=')).map(([n, v]) => [+n, v]));
const sig = (s) => [...(s.match(/\{[xnt]\}/g) ?? []), ...(s.match(/\d+/g) ?? []).filter((d) => d.length < 6), ...(s.match(/[＋ⓘ›‹⌃✕⌫＝◉▶○📌🔕✨🚗☁↺]/gu) ?? [])].sort().join(' ');
const langs = process.argv[2] ? [process.argv[2]] : readdirSync(dir).filter((f) => f.endsWith('.txt') && !['en.txt', 'keys.txt'].includes(f)).map((f) => f.replace('.txt', ''));
let bad = 0;
for (const lang of langs) {
  const tr = rows(`${lang}.txt`); const out = [];
  const enWords = new Set([...en].filter(([n]) => keys.get(n) === '#w').map(([, v]) => v));
  const wl = raw(`${lang}.txt`).filter(([n]) => n.startsWith('='));
  for (const [n, v] of wl) { if (!enWords.has(n.slice(1))) out.push(`화면 글자 목록에 없음: ${n.slice(1)}`); if (sig(n.slice(1)).split(' ').some((x) => x && !sig(v).split(' ').includes(x)) && !/\d:\d\d/.test(n)) out.push(`화면 글자 숫자·기호 다름: ${n.slice(1)} | ${v}`); }
  const wset = new Set(wl.map(([n]) => n.slice(1))); const wmiss = [...enWords].filter((w) => !wset.has(w) && ![...tr.keys()].some((k) => en.get(k) === w));
  if (wmiss.length > 200) out.push(`화면 글자 번역 적음: 빠진 것 ${wmiss.length}개`);
  const miss = [...en.keys()].filter((n) => !tr.has(n) && keys.get(n) !== '#w');
  if (miss.length) out.push(`빠진 번호(문장): ${miss.slice(0, 20).join(',')}${miss.length > 20 ? '…' : ''} (${miss.length})`);
  for (const [n, t] of tr) {
    const e = en.get(n); if (e == null) { out.push(`${n}: 영어에 없는 번호`); continue; }
    { const te = sig(t).split(' '); const missing = sig(e).split(' ').filter((x) => x && !te.includes(x)); if (missing.length && !/[٠-٩০-৯०-९๐-๙]/.test(t)) out.push(`${n}: 숫자·기호 빠짐(${missing.join(',')}) | ${e} | ${t}`); }
    const k = keys.get(n);
    if ((k === '#s' || k.startsWith('#c')) && /[.!?。]$/.test(e) && !/[.!?。！？।۔]$|[.!?。」』”»"“]$/.test(t.trim())) out.push(`${n}: 문장 끝 없음 | ${e} | ${t}`);
    if (k === '#w' && /[.。]$/.test(t.trim()) && !/[.]$/.test(e)) out.push(`${n}: 낱말인데 마침표 | ${e} | ${t}`);
  }
  console.log(`${lang}: ${tr.size}줄, 문제 ${out.length}`); out.slice(0, 40).forEach((x) => console.log('  ' + x)); bad += out.length;
}
process.exitCode = bad ? 1 : 0;
