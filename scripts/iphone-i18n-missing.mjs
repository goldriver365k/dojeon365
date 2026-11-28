// 언어별로 번역되지 않은 화면 글자 목록(이름·숫자 등 그대로 둘 것 제외)
import { readFileSync } from 'node:fs';
import { ipTr } from './build-iphone.mjs';
const dir = new URL('../data/iphone/i18n/', import.meta.url);
const sp = (x) => [x.slice(0, x.indexOf('|')), x.slice(x.indexOf('|') + 1)];
const keys = new Map(readFileSync(new URL('keys.txt', dir), 'utf8').trim().split('\n').map(sp));
const en = readFileSync(new URL('en.txt', dir), 'utf8').trim().split('\n').map(sp).filter(([n]) => keys.get(n) === '#w').map(([, v]) => v);
const lang = process.argv[2]; const t = ipTr(lang);
const miss = en.filter((w) => !(w in t.words));
console.log(miss.length); console.log(miss.join(' ¦ '));
