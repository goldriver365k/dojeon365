/**
 * 배포 버전 올리기: node scripts/bump-version.mjs
 * index.html 과 모든 자바스크립트의 상대 경로 import 뒤에 ?v=버전 을 붙여, 브라우저가 예전 파일을 쓰지 않게 한다.
 * 버전은 assets/version.js 에도 적혀 홈 화면 아래에 표시된다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const now = new Date();
const version = process.argv[2] ?? `${now.toISOString().slice(0, 10).replace(/-/g, '')}.${now.toISOString().slice(11, 16).replace(':', '')}`;
const files = ['assets', 'data'].flatMap((d) => fs.readdirSync(path.join(ROOT, d), { recursive: true }).filter((f) => f.endsWith('.js')).map((f) => path.join(ROOT, d, f)));
const tag = (s) => s.replace(/(from\s+'|import\(\s*'|src="|href=")(\.{0,2}\/?[^'"]*?\.(?:js|css))(?:\?v=[^'"]*)?(['"])/g, (m, a, p, q) => (p.startsWith('http') ? m : `${a}${p}?v=${version}${q}`));
for (const f of [...files, path.join(ROOT, 'index.html')]) {
  const s = fs.readFileSync(f, 'utf8');
  const out = tag(s);
  if (out !== s) fs.writeFileSync(f, out);
}
fs.writeFileSync(path.join(ROOT, 'assets', 'version.js'), `/** 배포 버전(scripts/bump-version.mjs 가 적음) */\nexport const VERSION = '${version}';\n`);
console.log(`버전 ${version}`);
