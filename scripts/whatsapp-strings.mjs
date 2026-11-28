// Builds data/whatsapp/i18n/en.txt — the numbered master list of every English string a WhatsApp lesson uses
// (chapter titles, lesson titles, step sentences, hints, cautions, words drawn on screens, notes).
// Each language file data/whatsapp/i18n/<lang>.txt uses the same numbers: "N|translation".
import { writeFileSync, readFileSync } from 'node:fs';
import { loadCatalog } from './build-whatsapp.mjs';
import { renderWhatsApp, setWaTranslator } from '../assets/whatsapp-screens.js';

export const PASS = new Set(['Maria', 'John', 'Tom', 'Lucy', 'Anna', 'Paolo', 'WhatsApp', 'Chrome', 'Windows', 'Chrome (Mac OS)', 'anna@example.com', 'Dr. Lee', 'English', 'Español', 'Português (Brasil)', 'Deutsch', 'Français', 'GIF', 'HD']);
export const TEMPLATES = { tap: /^Tap “([^”]+)”\.$/, chat: /^On the Chats screen, tap the chat with (.+)\.$/ };
export const FIXED = ['@tap|Tap “{x}”.', '@chat|On the Chats screen, tap the chat with {x}.', '@alt|WhatsApp screen. {x}', '@note|These pictures are drawings of the WhatsApp screen. Menu names and positions may differ slightly from the real app.', '@lessons|lessons'];

export function collect(catalog = loadCatalog()) {
  const all = catalog.chapters.flatMap((c) => c.lessons);
  const screen = new Set();
  setWaTranslator((s) => { screen.add(s); return s; });
  const steps = new Set(); const hints = new Set(); const cautions = new Set();
  for (const l of all) {
    if (l.caution) cautions.add(l.caution);
    for (const s of l.steps) {
      renderWhatsApp(s.image.screen, s.targetLabel || undefined, 'tap');
      if (!TEMPLATES.tap.test(s.text) && !TEMPLATES.chat.test(s.text)) steps.add(s.text);
      if (s.hint) hints.add(s.hint);
    }
  }
  setWaTranslator(null);
  const sc = [...screen].filter((s) => /\p{L}/u.test(s) && !PASS.has(s) && !/^[\d\s:.,+·]+(GB|MB|kB)?$/.test(s));
  return [...FIXED.map((x) => x), ...catalog.chapters.map((c) => `#ch:${c.key}|${c.title}`), ...all.map((l) => `#t:${l.id}|${l.title}`), ...[...steps].map((s) => `#s|${s}`), ...[...hints].map((s) => `#h|${s}`), ...[...cautions].map((s) => `#c|${s}`), ...sc.map((s) => `#w|${s}`)];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // Keep existing numbers stable (translations depend on them); new strings go at the end
  const fresh = collect(); let rows = fresh;
  try {
    const en = readFileSync(new URL('../data/whatsapp/i18n/en.txt', import.meta.url), 'utf8').trim().split('\n').map((x) => x.slice(x.indexOf('|') + 1));
    const keys = readFileSync(new URL('../data/whatsapp/i18n/keys.txt', import.meta.url), 'utf8').trim().split('\n').map((x) => x.split('|')[1]);
    const old = keys.map((k, i) => (k.startsWith('@') ? k : `${k}|${en[i]}`));
    const norm = (r) => (r.startsWith('@') ? r.split('|')[0] : r);
    const seen = new Set(old.map(norm));
    rows = [...old.map((r, i) => (r.startsWith('@') ? `${r}|${en[i]}` : r)), ...fresh.filter((r) => !seen.has(norm(r)))];
  } catch { /* first run */ }
  writeFileSync(new URL('../data/whatsapp/i18n/en.txt', import.meta.url), `${rows.map((r, i) => `${i + 1}|${r.replace(/^[#@][^|]*\|/, '')}`).join('\n')}\n`);
  writeFileSync(new URL('../data/whatsapp/i18n/keys.txt', import.meta.url), `${rows.map((r, i) => `${i + 1}|${r.split('|')[0]}`).join('\n')}\n`);
  console.log('strings', rows.length);
}
