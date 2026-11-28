/** 실제 사진으로 바꿀 카드 목록을 만든다: node scripts/image-list.mjs → docs/image-replacement.md */
import fs from 'node:fs';
import { allLessons } from '../data/galaxy/index.js';

const rows = [];
for (const { lesson, chapter } of allLessons()) {
  lesson.cards.forEach((c, i) => {
    if (c.photo) return;
    const kind = c.screen?.kind ?? '';
    if (kind === 'info') return; // 설명 그림은 사진이 필요 없다
    const pri = kind === 'side' ? '1 실물 사진' : lesson.check ? '2 앱 화면 확인' : '3 화면 캡처';
    rows.push({ pri, ch: String(chapter.num).padStart(2, '0'), id: lesson.id, title: lesson.title, n: i + 1, text: c.text, kind, target: c.target ?? '' });
  });
}
rows.sort((a, b) => a.pri.localeCompare(b.pri) || a.id.localeCompare(b.id) || a.n - b.n);
const count = (p) => rows.filter((r) => r.pri === p).length;
const md = [
  '# 실제 갤럭시 사진으로 바꿀 이미지 목록',
  '',
  '지금은 모든 카드가 **연습용 그림**(assets/screens.js)으로 그려져 있습니다. 실제 사진·화면 캡처가 생기면 해당 카드에 `photo`를 넣으면 같은 자리에 바뀝니다(README의 ‘사진 바꾸기’ 참고).',
  '',
  `- 1순위 실물 사진(휴대폰 옆면·버튼·충전 연결잭): ${count('1 실물 사진')}장`,
  `- 2순위 앱 화면 확인이 필요한 수업의 캡처(카카오톡·편한자판·지도 등): ${count('2 앱 화면 확인')}장`,
  `- 3순위 공식 설명서로 확인한 메뉴의 화면 캡처: ${count('3 화면 캡처')}장`,
  '- 설명 그림(info) 카드는 사진이 필요 없어 목록에서 뺐습니다.',
  '',
  '캡처할 때: 개인정보(이름·번호·사진·알림)가 보이지 않게 하고, 갤럭시 S26 · One UI 9 화면을 씁니다.',
  '',
  '| 순위 | 목차 | 수업 | 카드 | 안내 문장 | 누를 곳 | 지금 그림 |',
  '|---|---|---|---|---|---|---|',
  ...rows.map((r) => `| ${r.pri} | ${r.ch} | ${r.title} (${r.id}) | ${r.n} | ${r.text.replace(/\|/g, '/')} | ${r.target} | ${r.kind} |`),
  '',
];
fs.writeFileSync(new URL('../docs/image-replacement.md', import.meta.url), md.join('\n'));
console.log(`${rows.length}장 (1순위 ${count('1 실물 사진')}, 2순위 ${count('2 앱 화면 확인')}, 3순위 ${count('3 화면 캡처')})`);

// 앱 이름표 목록 → docs/app-names.md
const { APPS } = await import('../assets/apps.js');
const appMd = [
  '# 앱 이름과 아이콘 목록',
  '',
  '수업에서 앱을 안내할 때는 **휴대폰 화면에 보이는 이름**을 그대로 쓰고, 공식 이름이 다르면 카드의 ‘앱 이름표’에 함께 보여 줍니다.',
  '삼성 앱 이름은 갤럭시 S26 사용 설명서(Android 17, One UI 9)가 부르는 이름(예: ‘노트’ 앱, ‘스토어’ 앱)을 따릅니다.',
  '아이콘은 실제 앱 아이콘의 색과 모양을 본뜬 연습용 그림이며(assets/apps.js), 실제 화면 캡처로 바꿀 수 있습니다.',
  '',
  '| 화면에 보이는 이름 | 공식 이름 | 이름을 확인한 곳 |',
  '|---|---|---|',
  ...Object.values(APPS).map((a) => `| ${a.label} | ${a.full} | ${a.src || '-'} |`),
  '',
];
fs.writeFileSync(new URL('../docs/app-names.md', import.meta.url), appMd.join('\n'));
console.log(`앱 ${Object.keys(APPS).length}개`);
