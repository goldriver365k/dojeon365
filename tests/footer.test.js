import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { FOOTER, CONTACT_EMAIL, SHARE_KINDS } from '../i18n/footer.js';
import { LANGUAGES } from '../i18n/languages.js';

const read = (p) => readFileSync(new URL(`..${p}`, import.meta.url), 'utf8');
const exists = (p) => existsSync(new URL(`..${p}`, import.meta.url));

test('모든 언어에 하단 문구가 빠짐없이 있다', () => {
  const need = ['tagline', 'slogan', 'share', 'kakao', 'facebook', 'whatsapp', 'copy', 'qr', 'more', 'copied', 'kakaoCopied', 'qrTitle', 'qrText', 'close', 'notice', 'contact', 'privacy', 'terms', 'shareText'];
  for (const { code } of LANGUAGES) {
    for (const k of need) assert.ok(FOOTER[code]?.[k], `${code}.${k}`);
    if (code !== 'ko') {
      assert.equal(FOOTER[code].termsItems.length, 6, `${code} 약관 항목`);
      for (const k of ['termsDesc', 'effective', 'privacyShareH', 'privacyShare', 'privacyContactH', 'privacyContact']) assert.ok(FOOTER[code][k], `${code}.${k}`);
    }
  }
  assert.equal(FOOTER.ko.slogan, '누구나 쉽게, 매일 한 걸음씩.');
  assert.equal(FOOTER.ko.tagline, '도전, 디지털세상');
});

test('국내 첫 화면·수업·정책 페이지와 해외 페이지에 같은 하단이 있다(공유 6개·메일·정책·저작권·안내 문구)', () => {
  const pages = ['/index.html', '/learn/index.html', '/learn/galaxy/g01-charge/index.html', '/learn/scam/index.html', '/privacy/index.html', '/terms/index.html'];
  for (const { code } of LANGUAGES.filter((x) => x.code !== 'ko')) {
    const seg = code.toLowerCase();
    const lesson = readdirSync(new URL(`../${seg}/galaxy/`, import.meta.url)).find((d) => !d.includes('.'));
    pages.push(`/${seg}/index.html`, `/${seg}/galaxy/index.html`, `/${seg}/galaxy/${lesson}/index.html`, `/${seg}/privacy/index.html`, `/${seg}/terms/index.html`);
  }
  for (const p of pages) {
    const html = read(p);
    const lang = p.startsWith('/index') || p.startsWith('/learn') || p.startsWith('/privacy') || p.startsWith('/terms') ? 'ko' : LANGUAGES.find((x) => p.startsWith(`/${x.code.toLowerCase()}/`)).code;
    assert.equal((html.match(/<footer class="sfoot"/g) ?? []).length, 1, `${p} 하단 1개`);
    for (const k of SHARE_KINDS) assert.ok(html.includes(`data-share="${k}"`), `${p} 공유 ${k}`);
    assert.ok(html.includes(`href="mailto:${CONTACT_EMAIL}"`), `${p} 메일`);
    assert.match(html, /© <span data-year>\d{4}<\/span> DigiStep365\. All rights reserved\./, `${p} 저작권`);
    assert.ok(html.includes(FOOTER[lang].notice.replace(/&/g, '&amp;')), `${p} 안내 문구(${lang})`);
    assert.ok(html.includes('/assets/share.js') && html.includes('/assets/footer.css'), `${p} 하단 스크립트·스타일`);
    for (const [, href] of html.matchAll(/class="sfoot__links"><a href="([^"]+)"><b>/g)) assert.ok(exists(`${href}index.html`), `${p} 개인정보처리방침 ${href}`);
    const terms = html.match(/<\/b><\/a><a href="([^"]+)">/)?.[1];
    assert.ok(terms && exists(`${terms}index.html`), `${p} 이용약관 ${terms}`);
    assert.doesNotMatch(html, /<footer class="foot"/, `${p} 옛 하단 남음`);
  }
});

test('QR 그림과 공유 스크립트가 있고, QR은 digistep365.com 하나만 가리킨다', () => {
  assert.ok(exists('/assets/qr-digistep365.svg'));
  assert.match(read('/assets/qr-digistep365.svg'), /^<svg[^>]+viewBox="0 0 29 29"/);
  const js = read('/assets/share.js');
  for (const s of ['facebook.com/sharer/sharer.php?u=', 'wa.me/?text=', 'navigator.share', 'clipboard.writeText', 'showModal', 'getFullYear']) assert.ok(js.includes(s), s);
});

test('국내 정책 페이지: 개인정보처리방침 필수 항목과 이용약관', () => {
  const p = read('/privacy/index.html');
  for (const h of ['처리하는 정보와 목적', '보유 및 파기', '제3자 제공', '처리 위탁 및 국외 이전', '이용자의 권리', '안전성 확보 조치', '개인정보 보호책임자', '시행일']) assert.ok(p.includes(h), h);
  const t = read('/terms/index.html');
  for (const h of ['제1조', '공식 서비스가 아님', '연습 화면', '콘텐츠의 권리', '약관 변경과 문의']) assert.ok(t.includes(h), h);
});
