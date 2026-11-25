/**
 * 브라우저 점검 (Playwright/Chromium): npm run test:e2e
 *  1. 홈 5개 카테고리, 22개 목차, 목차별 세부 수업 수
 *  2. 147개 수업 전부: 첫 카드 → ‘다음’ → … → ‘완료’ → 완료 화면 (360px·‘아주 크게’에서 가로 스크롤 없는지 카드마다 확인)
 *  3. 연습 화면: 맞게 누르면 다음 카드, 다른 곳을 누르면 같은 카드에서 다시 안내, 길게 누르기, 밀기
 *  4. 이어서 하기: 카드 3에서 닫고 다시 열면 카드 4, ‘다시 켰어요’로 마치기
 *  5. 글씨 크기 기억, 음성으로 듣기, 생활 표현 검색, 출처 링크, 320px 화면
 * 결과는 docs/test-report.md, 화면은 docs/screenshots/ 에 저장한다.
 */
const path = require('node:path');
const fs = require('node:fs');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const SHOTS = path.join(ROOT, 'docs', 'screenshots');
const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok: Boolean(ok), detail: String(detail) });
  if (!ok) console.log(`FAIL ${name} — ${detail}`);
};

async function main() {
  const { createServer } = await import(path.join(ROOT, 'scripts', 'serve.js'));
  const { CHAPTERS, allLessons } = await import(path.join(ROOT, 'data', 'galaxy', 'index.js'));
  // E2E_BASE=https://주소 로 배포된 사이트를 점검할 수 있다
  const server = createServer().listen(0, '127.0.0.1');
  await new Promise((r) => server.once('listening', r));
  const BASE = process.env.E2E_BASE ? process.env.E2E_BASE.replace(/\/?$/, '/') : `http://127.0.0.1:${server.address().port}/`;
  fs.mkdirSync(SHOTS, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 360, height: 760 }, deviceScaleFactor: 2, locale: 'ko-KR', hasTouch: false });
  await ctx.addInitScript(() => {
    window.__spoken = [];
    const VOICES = [{ lang: 'ko-KR', name: 'ko-kr-local', voiceURI: 'local', localService: true }, { lang: 'ko-KR', name: 'Google 한국의', voiceURI: 'google', localService: false }];
    const fake = { speak(u) { window.__spoken.push({ text: u.text, voice: u.voice && u.voice.voiceURI }); setTimeout(() => u.onend && u.onend(), 10); }, cancel() {}, getVoices() { return VOICES; }, addEventListener() {} };
    Object.defineProperty(window, 'speechSynthesis', { value: fake, configurable: true });
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: function (t) { this.text = t; }, configurable: true });
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  const drawn = (hash) => page.waitForFunction((h) => document.body.dataset.route === h, hash);
  const go = async (hash) => { await page.goto(BASE + hash); await drawn(hash || '#/'); };
  const clickTo = async (selector, hashEnd) => {
    await page.locator(selector).first().click();
    await page.waitForFunction((end) => (document.body.dataset.route ?? '').endsWith(end), hashEnd);
  };
  const noHScroll = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
  const shot = (name) => page.screenshot({ path: path.join(SHOTS, `${name}.png`), fullPage: true });

  /* 1. 홈·목차 */
  await go('#/');
  const cats = await page.locator('.cat').allTextContents();
  check('홈 카테고리 6개', cats.length === 6, cats.length);
  check('첫 카테고리 = 갤럭시 휴대폰 사용방법', cats[0]?.includes('갤럭시 휴대폰 사용방법'), cats[0]);
  await shot('01-home-360');
  await page.locator('.cat').first().click();
  await page.waitForSelector('.toc__row');
  const rows = await page.locator('.toc__row').count();
  check('목차 22개 모두 표시', rows === 22, rows);
  const groups = await page.locator('.toc-group__h').allTextContents();
  check('기초·생활·응용·고급 및 문제 해결 구분', groups.join('|') === '기초|생활|응용|고급 및 문제 해결', groups.join('|'));
  check('처음에는 ‘이어서 하기’ 없음', (await page.locator('.resume').count()) === 0);
  await shot('02-galaxy-360');

  /* 생활 디지털 연습장 목차 */
  const DIGITAL = await import(path.join(ROOT, 'data', 'digital', 'index.js'));
  await go('#/');
  await page.locator('a.cat[href="#/digital"]').click();
  await page.waitForSelector('.toc__row');
  check(`생활 디지털 연습장 목차 ${DIGITAL.CHAPTERS.length}개 표시`, (await page.locator('.toc__row').count()) === DIGITAL.CHAPTERS.length, await page.locator('.toc__row').count());
  await shot('13-digital-360');
  let dOk = true;
  for (const ch of DIGITAL.CHAPTERS) {
    await go(`#/digital/${String(ch.num).padStart(2, '0')}`);
    if ((await page.locator('.lesson-row').count()) !== ch.lessons.length || !(await noHScroll())) dOk = false;
  }
  check('생활 디지털 연습장 목차별 세부 수업 목록 표시', dOk);
  // 생활 디지털 연습장 98개 수업: 첫 카드 → 완료
  const dBad = [];
  let dCards = 0;
  for (const { lesson, chapter } of DIGITAL.allLessons()) {
    await go(`#/digital/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (instr.trim() !== lesson.cards[i].text || !(await noHScroll())) dBad.push(`${lesson.id}#${i + 1}`);
      dCards += 1;
      await page.locator(i === lesson.cards.length - 1 ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    if ((await page.locator('a', { hasText: '수업 목록으로' }).getAttribute('href')) !== `#/digital/${String(chapter.num).padStart(2, '0')}`) dBad.push(`${lesson.id} 목록 링크`);
  }
  check(`생활 디지털 연습장 ${DIGITAL.allLessons().length}개 수업, 카드 ${dCards}장 첫 카드부터 완료까지`, dBad.length === 0, dBad.slice(0, 8).join(', '));
  // 시니어 AI 교실: 목차 → 모든 수업 첫 카드 → 완료
  const AIC = await import(path.join(ROOT, 'data', 'ai', 'index.js'));
  await go('#/');
  await page.locator('a.cat[href="#/ai"]').click();
  await page.waitForSelector('.toc__row');
  check(`시니어 AI 교실 목차 ${AIC.CHAPTERS.length}개 표시`, (await page.locator('.toc__row').count()) === AIC.CHAPTERS.length);
  await shot('17-ai-360');
  const aBad = [];
  let aCards = 0;
  for (const { lesson, chapter } of AIC.allLessons()) {
    await go(`#/ai/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (instr.trim() !== lesson.cards[i].text || !(await noHScroll())) aBad.push(`${lesson.id}#${i + 1}`);
      aCards += 1;
      await page.locator(i === lesson.cards.length - 1 ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    if ((await page.locator('a', { hasText: '수업 목록으로' }).getAttribute('href')) !== `#/ai/${String(chapter.num).padStart(2, '0')}`) aBad.push(`${lesson.id} 목록 링크`);
  }
  check(`시니어 AI 교실 ${AIC.allLessons().length}개 수업, 카드 ${aCards}장 첫 카드부터 완료까지`, aBad.length === 0, aBad.slice(0, 8).join(', '));
  // 전화 사기 예방 교실: 목차 → 모든 수업 첫 카드 → 완료
  const SCC = await import(path.join(ROOT, 'data', 'scam', 'index.js'));
  await go('#/');
  await page.locator('a.cat[href="#/scam"]').click();
  await page.waitForSelector('.toc__row');
  check(`전화 사기 예방 교실 목차 ${SCC.CHAPTERS.length}개 표시`, (await page.locator('.toc__row').count()) === SCC.CHAPTERS.length);
  await shot('18-scam-360');
  const sBad = [];
  let sCards = 0;
  for (const { lesson, chapter } of SCC.allLessons()) {
    await go(`#/scam/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (instr.trim() !== lesson.cards[i].text || !(await noHScroll())) sBad.push(`${lesson.id}#${i + 1}`);
      sCards += 1;
      await page.locator(i === lesson.cards.length - 1 ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    if ((await page.locator('a', { hasText: '수업 목록으로' }).getAttribute('href')) !== `#/scam/${String(chapter.num).padStart(2, '0')}`) sBad.push(`${lesson.id} 목록 링크`);
  }
  check(`전화 사기 예방 교실 ${SCC.allLessons().length}개 수업, 카드 ${sCards}장 첫 카드부터 완료까지`, sBad.length === 0, sBad.slice(0, 8).join(', '));
  // 시니어 창작교실: 목차 → 모든 수업 첫 카드 → 완료
  const CRC = await import(path.join(ROOT, 'data', 'creative', 'index.js'));
  await go('#/');
  await page.locator('a.cat[href="#/creative"]').click();
  await page.waitForSelector('.toc__row');
  check(`시니어 창작교실 목차 ${CRC.CHAPTERS.length}개 표시`, (await page.locator('.toc__row').count()) === CRC.CHAPTERS.length);
  await shot('19-creative-360');
  const cBad = [];
  let cCards = 0;
  for (const { lesson, chapter } of CRC.allLessons()) {
    await go(`#/creative/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (instr.trim() !== lesson.cards[i].text || !(await noHScroll())) cBad.push(`${lesson.id}#${i + 1}`);
      cCards += 1;
      await page.locator(i === lesson.cards.length - 1 ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    if ((await page.locator('a', { hasText: '수업 목록으로' }).getAttribute('href')) !== `#/creative/${String(chapter.num).padStart(2, '0')}`) cBad.push(`${lesson.id} 목록 링크`);
  }
  check(`시니어 창작교실 ${CRC.allLessons().length}개 수업, 카드 ${cCards}장 첫 카드부터 완료까지`, cBad.length === 0, cBad.slice(0, 8).join(', '));
  // 시니어 재취업·창업교실: 목차 → 모든 수업 첫 카드 → 완료
  const CAC = await import(path.join(ROOT, 'data', 'career', 'index.js'));
  await go('#/');
  await page.locator('a.cat[href="#/career"]').click();
  await page.waitForSelector('.toc__row');
  check(`시니어 재취업·창업교실 목차 ${CAC.CHAPTERS.length}개 표시`, (await page.locator('.toc__row').count()) === CAC.CHAPTERS.length);
  await shot('20-career-360');
  const jBad = [];
  let jCards = 0;
  for (const { lesson, chapter } of CAC.allLessons()) {
    await go(`#/career/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (instr.trim() !== lesson.cards[i].text || !(await noHScroll())) jBad.push(`${lesson.id}#${i + 1}`);
      jCards += 1;
      await page.locator(i === lesson.cards.length - 1 ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    if ((await page.locator('a', { hasText: '수업 목록으로' }).getAttribute('href')) !== `#/career/${String(chapter.num).padStart(2, '0')}`) jBad.push(`${lesson.id} 목록 링크`);
  }
  check(`시니어 재취업·창업교실 ${CAC.allLessons().length}개 수업, 카드 ${jCards}장 첫 카드부터 완료까지`, jBad.length === 0, jBad.slice(0, 8).join(', '));
  await go('#/lesson/d01-pay/3');
  await shot('15-digital-kiosk-card-360');
  await go('#/lesson/d04-seat/5');
  await shot('16-digital-seat-card-360');
  await go('#/digital/01');
  await shot('14-digital-chapter01-360');

  for (const ch of CHAPTERS) {
    await go(`#/galaxy/${String(ch.num).padStart(2, '0')}`);
    const n = await page.locator('.lesson-row').count();
    check(`목차 ${ch.num} 세부 수업 ${ch.lessons.length}개 선택 가능`, n === ch.lessons.length, n);
  }
  await go('#/galaxy/01');
  await shot('03-chapter01-360');

  /* 2. 모든 수업 첫 카드 → 완료 (아주 크게) */
  await page.locator('.font-ctl__btn[data-font="xlarge"]').first().click();
  check('글씨 ‘아주 크게’ 적용', (await page.evaluate(() => document.documentElement.dataset.font)) === 'xlarge');
  let cardCount = 0;
  let hscroll = [];
  let textMismatch = [];
  let multiAction = 0;
  for (const { lesson, chapter } of allLessons()) {
    await go(`#/galaxy/${String(chapter.num).padStart(2, '0')}`);
    await page.locator('.lesson-row', { hasText: lesson.title }).first().click();
    if (lesson.intro) {
      await page.waitForSelector('.intro');
      await page.locator('[data-mode="practice"]').click();
    }
    for (let i = 0; i < lesson.cards.length; i += 1) {
      await page.waitForFunction((n) => (document.body.dataset.route ?? '').endsWith(`/${n}`), i + 1);
      const step = await page.locator('.step__text').textContent();
      const instr = await page.locator('#instr').evaluate((el) => [...el.childNodes].filter((n) => !(n.classList && n.classList.contains('sr-only'))).map((n) => n.textContent).join(''));
      if (!step.includes(`${lesson.cards.length}단계 중 ${i + 1}단계`) || instr.trim() !== lesson.cards[i].text) textMismatch.push(`${lesson.id}#${i + 1}`);
      if ((await page.locator('#instr').count()) !== 1) multiAction += 1;
      if (!(await noHScroll())) hscroll.push(`${lesson.id}#${i + 1}`);
      cardCount += 1;
      const last = i === lesson.cards.length - 1;
      await page.locator(last ? '[data-nav="done"]' : '[data-nav="next"]').click();
    }
    await page.waitForSelector('.page--done');
    const doneOk = (await page.locator('h1').textContent()).includes('수업을 마쳤어요')
      && (await page.locator('a', { hasText: '다시 배우기' }).count()) === 1
      && (await page.locator('a', { hasText: '수업 목록으로' }).count()) === 1;
    if (!doneOk) textMismatch.push(`${lesson.id} 완료 화면`);
  }
  check(`전체 ${allLessons().length}개 수업, 카드 ${cardCount}장을 첫 카드부터 완료까지 진행`, textMismatch.length === 0, textMismatch.slice(0, 10).join(', '));
  check('카드 한 화면에 안내 문장 하나', multiAction === 0, multiAction);
  check('360px·아주 크게에서 모든 카드 가로 스크롤 없음', hscroll.length === 0, hscroll.slice(0, 10).join(', '));

  /* 3. 연습 화면 동작 (보통 글씨) */
  await page.locator('.font-ctl__btn[data-font="normal"]').first().click();
  await go('#/lesson/g01-power/2');
  await shot('05-power-card2-360');
  const frame = page.locator('.stage__frame');
  const fb = await frame.boundingBox();
  await page.mouse.click(fb.x + fb.width * 0.5, fb.y + fb.height * 0.12);
  await page.waitForTimeout(150);
  const missText = await page.locator('#feedback').textContent();
  check('다른 곳을 누르면 같은 카드에서 다시 안내', missText.includes('빨간 테두리') && (await page.evaluate(() => location.hash)).endsWith('/2'), missText);
  await page.locator('.hit').click();
  await page.waitForFunction(() => location.hash.endsWith('/3'), null, { timeout: 4000 }).then(() => check('맞는 곳을 누르면 다음 카드로', true), () => check('맞는 곳을 누르면 다음 카드로', false));
  await go('#/lesson/g01-power/1');
  await shot('04-power-card1-360');
  const hb = await page.locator('.hit').boundingBox();
  await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(1300);
  await page.mouse.up();
  await page.waitForFunction(() => location.hash.endsWith('/2'), null, { timeout: 4000 }).then(() => check('길게 누르기 연습 → 다음 카드', true), () => check('길게 누르기 연습 → 다음 카드', false));
  await go('#/lesson/g02-swipe/1');
  const sb = await page.locator('.stage__frame').boundingBox();
  await page.mouse.move(sb.x + sb.width * 0.8, sb.y + sb.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(sb.x + sb.width * 0.2, sb.y + sb.height * 0.5, { steps: 8 });
  await page.mouse.up();
  await page.waitForFunction(() => location.hash.endsWith('/2'), null, { timeout: 4000 }).then(() => check('밀기 연습(왼쪽) → 다음 카드', true), () => check('밀기 연습(왼쪽) → 다음 카드', false));
  await go('#/lesson/g01-power/2');
  await page.locator('.hit').focus();
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => location.hash.endsWith('/3'), null, { timeout: 4000 }).then(() => check('키보드로 연습 대상 누르기', true), () => check('키보드로 연습 대상 누르기', false));
  await go('#/lesson/g01-power/2');
  await clickTo('[data-nav="prev"]', '/1');
  check('‘이전’ → 바로 전 카드', true);

  /* 4. 이어서 하기 (실제 휴대폰 실습 모드) */
  await go('#/galaxy/01');
  await page.locator('.lesson-row', { hasText: '전원 끄고 다시 켜기' }).click();
  await page.waitForSelector('.intro');
  check('실습 전 다시 켜는 방법 먼저 표시', (await page.locator('.intro').textContent()).includes('측면 버튼을 몇 초간 길게'));
  await shot('06-power-intro-360');
  await clickTo('[data-mode="real"]', '/1');
  await clickTo('[data-nav="next"]', '/2');
  await clickTo('[data-nav="next"]', '/3');
  await page.goto('about:blank');
  await go('#/galaxy');
  const resume = await page.locator('.resume').textContent().catch(() => '');
  check('다시 열면 ‘이어서 하기’에 카드 4 표시', resume.includes('전원 끄고 다시 켜기') && resume.includes('4단계 중 4단계부터'), resume.replace(/\s+/g, ' '));
  await shot('07-galaxy-resume-360');
  await page.locator('.resume__link').click();
  await page.waitForFunction(() => location.hash.endsWith('/4'));
  const doneBtn = await page.locator('[data-nav="done"]').textContent();
  check('카드 4에서 ‘다시 켰어요’로 마치기', doneBtn.includes('다시 켰어요'), doneBtn);
  await shot('08-power-card4-real-360');
  await page.locator('[data-nav="done"]').click();
  await page.waitForSelector('.page--done');
  await shot('09-done-360');
  await go('#/galaxy');
  check('완료 후 ‘이어서 하기’ 사라짐', (await page.locator('.resume').count()) === 0);

  /* 5. 글씨 크기 기억·음성·검색·출처 */
  await page.locator('.font-ctl__btn[data-font="large"]').first().click();
  await page.reload();
  await page.waitForSelector('#main');
  check('글씨 크기 선택을 기억', (await page.evaluate(() => document.documentElement.dataset.font)) === 'large');
  await go('#/lesson/g03-font/1');
  await page.locator('[data-speak]').click();
  const spoken = await page.evaluate(() => window.__spoken);
  check('‘음성으로 듣기’가 단계를 ‘첫 번째 단계’로 읽고 안내 문장을 읽음', spoken.length === 1 && spoken[0].text.startsWith('첫 번째 단계.') && spoken[0].text.includes('설정 앱을 누르세요.') && !spoken[0].text.includes('단계 중'), JSON.stringify(spoken));
  check('가장 선명한 한국어 목소리 자동 선택', spoken[0]?.voice === 'google', spoken[0]?.voice);
  await page.locator('[data-voice-box] summary').click();
  await page.locator('[data-voice][value="local"]').check();
  await page.waitForTimeout(50);
  await go('#/lesson/g03-font/2');
  await page.locator('[data-speak]').click();
  const spoken2 = await page.evaluate(() => window.__spoken);
  const last = spoken2[spoken2.length - 1];
  check('고른 목소리를 기억하고 두 번째 단계로 읽음', last.voice === 'local' && last.text.startsWith('두 번째 단계.'), JSON.stringify(last));
  const srcLinks = await page.locator('.meta__src a').evaluateAll((as) => as.map((a) => a.href));
  check('삼성 공식 출처 링크 연결', srcLinks.some((h) => h.startsWith('https://downloadcenter.samsung.com/')), srcLinks.join(' '));
  await go('#/lesson/g21-spen/1');
  check('기종 전용 기능 표시(S펜)', (await page.locator('.badge--model').first().textContent()).includes('Ultra'));
  await page.locator('.font-ctl__btn[data-font="normal"]').first().click();

  const searches = [['글씨가 작아요', '글씨 크게 보기'], ['소리가 안 나요', '벨소리가 안 날 때'], ['사진 보내기', '사진 여러 장 보내기'], ['와이파이', '와이파이 연결하기'], ['카톡', '가족에게 카톡 보내기']];
  for (const [q, want] of searches) {
    await go('#/galaxy');
    await page.fill('#q', q);
    await page.locator('.search__btn').click();
    const found = await page.locator('#results .lesson-row__title').allTextContents();
    check(`검색 ‘${q}’ → ‘${want}’`, found.slice(0, 5).includes(want), found.slice(0, 5).join(', '));
  }
  await go('#/galaxy');
  await page.locator('.chip', { hasText: '글씨가 작아요' }).click();
  await shot('10-search-360');

  /* 접근성: 버튼 이름, 그림 설명 */
  await go('#/lesson/g01-power/2');
  const hitLabel = await page.locator('.hit').getAttribute('aria-label');
  const altText = await page.locator('.stage__pic').getAttribute('aria-label');
  const navNames = await page.locator('.navbar a').allTextContents();
  check('연습 버튼·그림에 설명', /전원 끄기/.test(hitLabel) && altText.length > 10, `${hitLabel} / ${altText}`);
  check('이전·다음 버튼 글자 표시', navNames.join('|').includes('이전') && navNames.join('|').includes('다음'), navNames.join('|'));
  const srStep = await page.locator('#instr .sr-only').textContent();
  check('보조 기술에 진행 순서 제공', srStep.includes('두 번째 단계') && srStep.includes('모두 4단계'), srStep);

  /* 320px·아주 크게 */
  await page.setViewportSize({ width: 320, height: 640 });
  await page.locator('.font-ctl__btn[data-font="xlarge"]').first().click();
  for (const h of ['#/', '#/galaxy', '#/galaxy/10', '#/lesson/g04-call/4', '#/lesson/g15-pin/1']) {
    await go(h);
    check(`320px·아주 크게 가로 스크롤 없음 ${h}`, await noHScroll());
  }
  await go('#/lesson/g01-power/1');
  await shot('11-card-320-xlarge');
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.locator('.font-ctl__btn[data-font="normal"]').first().click();
  await go('#/lesson/g03-font/5');
  await page.screenshot({ path: path.join(SHOTS, '12-card-desktop.png'), fullPage: false });

  // 해외용(영어) 정적 페이지
  await page.setViewportSize({ width: 360, height: 780 });
  await page.goto(`${BASE}en/galaxy/change-font-size/`);
  await page.waitForSelector('.bar:not([hidden])');
  const visibleSteps = () => page.locator('.step:visible').count();
  check('영어 수업: 한 번에 한 단계', (await visibleSteps()) === 1);
  check('영어 수업: 검수 전 noindex', (await page.getAttribute('meta[name=robots]', 'content'))?.includes('noindex'));
  for (let k = 0; k < 5; k++) await page.click('[data-next]');
  check('영어 수업: 마지막 단계 버튼 Done', (await page.textContent('[data-next]')).trim() === 'Done');
  await page.click('[data-next]');
  check('영어 수업: 완료 안내', await page.isVisible('[data-finish]'));
  await page.click('[data-restart]');
  check('영어 수업: 처음부터 다시 보기', (await page.textContent('.step.is-on .step__no')).includes('Step 1'));
  await page.click('[data-all]');
  check('영어 수업: 전체 단계 보기', (await visibleSteps()) === 6);
  await page.click('button[data-size=xlarge]');
  check('영어 수업: 아주 크게에서 가로 스크롤 없음', (await page.evaluate(() => document.documentElement.scrollWidth)) <= 360);
  await page.goto(`${BASE}en/galaxy/`);
  check('영어 목차: 22개 분류', (await page.locator('.cat').count()) === 22);
  check('영어 목차: 면책 문구', (await page.textContent('.foot')).includes('Not affiliated with'));
  await page.screenshot({ path: path.join(SHOTS, '22-en-galaxy-360.png') });

  // 5차: 영어 연습 그림·내 휴대폰·관리 현황
  await page.goto(`${BASE}en/galaxy/change-font-size/`);
  await page.waitForSelector('.bar:not([hidden])');
  await page.click('[data-restart]');
  check('영어 연습 그림 표시', await page.locator('.step.is-on .pic svg').count() === 1);
  check('영어 연습 그림에 한글 없음', !/[가-힣]/.test(await page.locator('.step.is-on .pic').innerHTML()));
  await page.click('.step.is-on [data-hit]');
  check('영어 연습 그림: 표시된 곳 누르면 다음 단계', (await page.textContent('.step.is-on .step__no')).includes('Step 2'));
  await page.goto(`${BASE}en/galaxy/`);
  await page.waitForSelector('select[name=series] option[value=s]', { state: 'attached' });
  await page.selectOption('select[name=series]', 's');
  await page.selectOption('select[name=model]', 's23');
  await page.selectOption('select[name=oneui]', '6.0');
  await page.click('text=Save my phone');
  check('영어 내 휴대폰 저장', (await page.textContent('[data-device-now]')).includes('Galaxy S23'));
  check('영어 지원 표시: Galaxy AI는 One UI 6.0 미지원', (await page.textContent('a[data-id="g19-photo"]')).includes('Not supported'));
  check('영어 내 휴대폰: 360px 가로 스크롤 없음', (await page.evaluate(() => document.documentElement.scrollWidth)) <= 360);
  await page.click('[data-clear]');
  check('영어 공통 사용법으로 되돌리기', (await page.locator('a[data-id] .sup').count()) === 0);
  await page.goto(`${BASE}admin/`);
  check('관리 현황 페이지(noindex)', (await page.getAttribute('meta[name=robots]', 'content'))?.includes('noindex'));

  // 7차: 스페인어·해외용 13번 분류
  await page.goto(`${BASE}es/galaxy/letra-mas-grande/`);
  await page.waitForSelector('.bar:not([hidden])');
  await page.click('[data-restart]');
  check('스페인어 수업: 한 번에 한 단계', (await page.locator('.step:visible').count()) === 1);
  check('스페인어 수업: 버튼 문구', (await page.textContent('[data-next]')).trim() === 'Siguiente');
  check('스페인어 연습 그림(한글 없음)', (await page.locator('.step.is-on .pic svg').count()) === 1 && !/[가-힣]/.test(await page.locator('.step.is-on .pic').innerHTML()));
  check('스페인어: 영어 페이지로 가는 언어 링크', (await page.getAttribute('.langs a[hreflang="en"]', 'href')) === '/en/galaxy/change-font-size/');
  await page.goto(`${BASE}es/galaxy/`);
  check('스페인어 목차: 22개 분류', (await page.locator('.cat').count()) === 22);
  await page.goto(`${BASE}en/galaxy/`);
  check('영어 13번 분류: 새 수업 3개', (await page.locator('#c13 a').count()) === 3);

  // 모든 해외용 페이지: 320px·아주 크게에서 가로 스크롤 없음(긴 낱말 언어 포함)
  {
    const langs = fs.readdirSync(ROOT).filter((d) => fs.existsSync(path.join(ROOT, d, 'galaxy', 'index.html')));
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto(`${BASE}en/`);
    await page.evaluate(() => localStorage.setItem('digistep365.global.v1', JSON.stringify({ size: 'xlarge' })));
    const wide = [];
    let n = 0;
    for (const lang of langs) {
      const dirs = fs.readdirSync(path.join(ROOT, lang, 'galaxy'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => `${d.name}/`);
      for (const d of ['', ...dirs]) {
        await page.goto(`${BASE}${lang}/galaxy/${d}`);
        n++;
        const w = await page.evaluate(() => document.documentElement.scrollWidth);
        if (w > 320) wide.push(`${lang}/${d} ${w}`);
      }
    }
    check(`해외용 ${n}쪽 320px·아주 크게 가로 스크롤 없음 (${langs.join(',')})`, wide.length === 0, wide.slice(0, 5).join(' | '));
    await page.evaluate(() => localStorage.removeItem('digistep365.global.v1'));
  }

  check('자바스크립트 오류 없음', errors.length === 0, errors.slice(0, 5).join(' | '));

  await browser.close();
  server.close();

  const pass = results.filter((r) => r.ok).length;
  const lines = [
    '# 브라우저 점검 결과',
    '',
    `- 실행: ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC, Chromium(Playwright), 360px 기준, 대상 ${BASE}`,
    `- 결과: ${pass}/${results.length} 통과`,
    '',
    '| 항목 | 결과 | 비고 |',
    '|---|---|---|',
    ...results.map((r) => `| ${r.name} | ${r.ok ? '통과' : '**실패**'} | ${r.ok ? '' : r.detail.replace(/\|/g, '/')} |`),
    '',
  ];
  fs.writeFileSync(path.join(ROOT, 'docs', process.env.E2E_BASE ? 'test-report-live.md' : 'test-report.md'), lines.join('\n'));
  console.log(`\n${pass}/${results.length} 통과`);
  process.exit(pass === results.length ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
