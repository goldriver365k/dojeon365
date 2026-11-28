// WhatsApp lessons (global sites only) — data/whatsapp/catalog.json + data/whatsapp/lessons-en.mjs
//
// Rules
// - Global (non-Korean) sites only. The Korean site never shows WhatsApp lessons (i18n/regions.js).
// - English is the base language. Other languages publish only when that language's text exists and was reviewed.
// - Screens are reconstructions drawn in code (assets/whatsapp-screens.js), NOT captures. A lesson is published only
//   after a person compares it with the real WhatsApp app and approves it in /admin/whatsapp/ (status + review record).
// - Unpublished lessons get no page, no sitemap entry and no link.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { LESSONS_EN } from '../data/whatsapp/lessons-en.mjs';
import { renderWhatsApp } from '../assets/whatsapp-screens.js';
import { STATUS, PUBLIC_STATUS, adminPage } from './build-kakaotalk.mjs';
import { LANGUAGES } from '../i18n/languages.js';

export const CATALOG_FILE = new URL('../data/whatsapp/catalog.json', import.meta.url);
export const SOURCE = 'Reconstruction drawn from the original screen (review required)';
export const loadCatalog = (file = CATALOG_FILE) => JSON.parse(readFileSync(file, 'utf8'));
/** one action per card (English) */
export const TWO_EN = /,\s*then\s|\bthen tap\b|\band then\b|\band tap\b/i;

/** Course name, subtitle and the legal notice in each global language */
export const WA_TEXT = {
  en: ['How to Use WhatsApp', 'Easy Step-by-Step Lessons', 'DigiStep365 is an independent educational website and is not affiliated with, sponsored, or endorsed by WhatsApp or Meta.'],
  es: ['Cómo usar WhatsApp', 'Lecciones fáciles paso a paso', 'DigiStep365 es un sitio educativo independiente y no está afiliado, patrocinado ni respaldado por WhatsApp ni por Meta.'],
  pt: ['Como usar o WhatsApp', 'Aulas fáceis, passo a passo', 'O DigiStep365 é um site educativo independente e não é afiliado, patrocinado nem endossado pelo WhatsApp ou pela Meta.'],
  de: ['WhatsApp benutzen', 'Einfache Schritt-für-Schritt-Lektionen', 'DigiStep365 ist eine unabhängige Bildungswebsite und steht in keiner Verbindung zu WhatsApp oder Meta und wird von diesen weder gesponsert noch unterstützt.'],
  fr: ['Utiliser WhatsApp', 'Leçons faciles, pas à pas', 'DigiStep365 est un site éducatif indépendant, sans lien avec WhatsApp ou Meta, qui ne le parrainent ni ne le soutiennent.'],
  it: ['Come usare WhatsApp', 'Lezioni facili passo dopo passo', 'DigiStep365 è un sito educativo indipendente e non è affiliato, sponsorizzato né approvato da WhatsApp o Meta.'],
  id: ['Cara Menggunakan WhatsApp', 'Pelajaran mudah langkah demi langkah', 'DigiStep365 adalah situs edukasi independen dan tidak berafiliasi dengan, disponsori, atau didukung oleh WhatsApp atau Meta.'],
  ms: ['Cara Menggunakan WhatsApp', 'Pelajaran mudah langkah demi langkah', 'DigiStep365 ialah laman pendidikan bebas dan tidak bergabung dengan, ditaja atau disokong oleh WhatsApp atau Meta.'],
  vi: ['Cách dùng WhatsApp', 'Bài học dễ hiểu từng bước', 'DigiStep365 là trang giáo dục độc lập, không liên kết, không được tài trợ hay xác nhận bởi WhatsApp hoặc Meta.'],
  tr: ['WhatsApp Nasıl Kullanılır', 'Adım adım kolay dersler', 'DigiStep365 bağımsız bir eğitim sitesidir; WhatsApp veya Meta ile bağlantılı değildir, onlar tarafından desteklenmez ya da onaylanmaz.'],
  fil: ['Paano Gamitin ang WhatsApp', 'Madaling aralin, hakbang-hakbang', 'Ang DigiStep365 ay isang malayang website pang-edukasyon at walang kaugnayan, sponsor, o pag-endorso mula sa WhatsApp o Meta.'],
  ru: ['Как пользоваться WhatsApp', 'Простые пошаговые уроки', 'DigiStep365 — независимый образовательный сайт; он не связан с WhatsApp или Meta, не спонсируется и не одобряется ими.'],
  ja: ['WhatsAppの使い方', 'やさしいステップ式レッスン', 'DigiStep365は独立した教育サイトであり、WhatsAppおよびMetaとは提携しておらず、後援・承認も受けていません。'],
  'zh-Hans': ['WhatsApp 使用方法', '简单易学的分步课程', 'DigiStep365 是独立的教育网站，与 WhatsApp 或 Meta 无隶属关系，也未获得其赞助或认可。'],
  'zh-Hant': ['WhatsApp 使用方法', '簡單易學的分步課程', 'DigiStep365 是獨立的教育網站，與 WhatsApp 或 Meta 無隸屬關係，也未獲得其贊助或認可。'],
  th: ['วิธีใช้ WhatsApp', 'บทเรียนง่าย ๆ ทีละขั้นตอน', 'DigiStep365 เป็นเว็บไซต์การศึกษาอิสระ ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการสนับสนุนหรือรับรองจาก WhatsApp หรือ Meta'],
  hi: ['WhatsApp कैसे इस्तेमाल करें', 'आसान, कदम-दर-कदम पाठ', 'DigiStep365 एक स्वतंत्र शैक्षिक वेबसाइट है और WhatsApp या Meta से संबद्ध, प्रायोजित या समर्थित नहीं है।'],
  bn: ['WhatsApp কীভাবে ব্যবহার করবেন', 'সহজ ধাপে ধাপে পাঠ', 'DigiStep365 একটি স্বাধীন শিক্ষামূলক ওয়েবসাইট এবং WhatsApp বা Meta-এর সঙ্গে যুক্ত নয়, তাদের দ্বারা স্পনসর বা অনুমোদিতও নয়।'],
  ar: ['طريقة استخدام WhatsApp', 'دروس سهلة خطوة بخطوة', 'DigiStep365 موقع تعليمي مستقل، ولا يرتبط بـ WhatsApp أو Meta ولا يحظى برعايتهما أو تأييدهما.'],
};

/** draw one step screen (English labels; other languages pass a translator) */
export const draw = (screen, target) => renderWhatsApp(screen, target ?? undefined, 'tap');

/** Put the English drafts into the catalog. Lessons a person edited or published are never overwritten. */
export function fill(catalog, lessons = LESSONS_EN) {
  const problems = []; let filled = 0;
  const today = new Date().toISOString().slice(0, 10);
  for (const ch of catalog.chapters) for (const l of ch.lessons) {
    const src = lessons[l.id];
    if (!src) continue;
    src.steps.forEach(([text, screen, target], i) => {
      if (TWO_EN.test(text)) problems.push(`${l.id} step ${i + 1}: two actions — ${text}`);
      if (target && !draw(screen, target).target) problems.push(`${l.id} step ${i + 1}: “${target}” not on screen`);
    });
    if (l.edited || PUBLIC_STATUS.includes(l.status) || (l.steps ?? []).some((s) => s.image?.src)) continue;
    l.steps = src.steps.map(([text, screen, target, x = {}]) => ({
      text, voice: x.voice ?? '', hint: x.hint ?? '', targetLabel: target ?? '',
      image: { screen, alt: x.alt ?? `WhatsApp screen${target ? ` with “${target}” circled in red` : ''}. ${text}`.slice(0, 160) },
      imageMeta: { source: SOURCE, lang: 'en', country: 'all', appVersion: '', galaxyModel: 'Galaxy S26', android: '17', oneui: '9', created: today, reviewed: '', privacyChecked: true },
    }));
    l.menuPath = src.menuPath ?? l.menuPath;
    l.galaxyModel ||= 'Galaxy S26'; l.android ||= '17'; l.oneui ||= '9';
    if (l.status === 'draft') l.status = 'review';
    l.generated = true;
    filled++;
  }
  return { filled, problems };
}

/** Is this lesson ready to publish in this language? */
export function publishProblems(l, lang = 'en') {
  const p = [];
  if (!PUBLIC_STATUS.includes(l.status)) p.push(`status “${STATUS[l.status] ?? l.status}”`);
  for (const k of ['appVersion', 'lastChecked', 'reviewedBy']) if (!String(l[k] ?? '').trim()) p.push(`${k} missing`);
  if (!l.steps?.length) p.push('no steps');
  l.steps?.forEach((s, i) => { if (!s.imageMeta?.reviewed) p.push(`step ${i + 1} not reviewed`); });
  if (lang !== 'en') {
    const t = l.i18n?.[lang];
    if (!t) p.push(`${lang}: not translated`);
    else {
      if (t.status !== 'published') p.push(`${lang}: translation not reviewed`);
      if (!t.title || (t.steps ?? []).length !== l.steps.length || t.steps.some((x) => !String(x ?? '').trim())) p.push(`${lang}: translation incomplete`);
    }
  }
  return p;
}
export const isPublic = (l, lang = 'en') => publishProblems(l, lang).length === 0;

/** Lessons for one language: only published ones, with that language's text */
export function waCourse(lang, catalog = loadCatalog()) {
  const chapters = catalog.chapters.map((ch) => ({
    num: ch.num, key: ch.key, title: lang === 'en' ? ch.title : (ch.i18n?.[lang] ?? null),
    lessons: ch.lessons.filter((l) => isPublic(l, lang)).map((l) => {
      const t = lang === 'en' ? null : l.i18n[lang];
      return { id: l.id, slug: l.slug, level: l.level, title: t?.title ?? l.title, caution: t?.caution ?? l.caution,
        steps: l.steps.map((s, i) => ({ text: t?.steps?.[i] ?? s.text, hint: t?.hints?.[i] ?? s.hint, target: s.targetLabel || null, screen: s.image.screen, alt: t?.alts?.[i] ?? s.image.alt })),
        appVersion: l.appVersion, checked: l.lastChecked, approvedWithoutCompare: l.approvedWithoutCompare, sources: l.sources };
    }),
  })).filter((ch) => ch.lessons.length && ch.title);
  return { chapters, count: chapters.reduce((a, ch) => a + ch.lessons.length, 0), text: WA_TEXT[lang] ?? WA_TEXT.en };
}

/** Progress per language for the admin page */
export function progress(catalog = loadCatalog()) {
  const all = catalog.chapters.flatMap((c) => c.lessons);
  const langs = LANGUAGES.filter((x) => x.code !== 'ko');
  return langs.map(({ code, name }) => {
    const withText = code === 'en' ? all.filter((l) => l.steps.length).length : all.filter((l) => l.i18n?.[code]?.steps?.length).length;
    return { code, name, lessons: all.length, withText, published: all.filter((l) => isPublic(l, code)).length, images: code === 'en' ? all.reduce((a, l) => a + l.steps.length, 0) : 0 };
  });
}

export function buildWhatsapp({ version, brandTagline }) {
  const catalog = loadCatalog();
  const { problems } = fill(catalog);
  if (problems.length) throw new Error(`WhatsApp lesson problems:\n${problems.join('\n')}`);
  writeFileSync(CATALOG_FILE, `${JSON.stringify(catalog, null, 1)}\n`);
  const prog = progress(catalog);
  const table = `<section class="kadmin__sum"><h2>언어별 진행률</h2><p class="hint">재현 화면(코드로 그림) 기준. 실제 앱 캡처는 아직 0장 — 이 작업 환경에는 안드로이드 기기·에뮬레이터가 없음.</p>
<table class="kprog"><thead><tr><th>언어</th><th>설명 작성</th><th>화면(재현)</th><th>공개</th></tr></thead><tbody>${prog.map((r) => `<tr><td>${r.name} (${r.code})</td><td>${r.withText}/${r.lessons}</td><td>${r.code === 'en' ? r.images : '—'}</td><td>${r.published}</td></tr>`).join('')}</tbody></table></section>`;
  const dir = new URL('../admin/whatsapp/', import.meta.url);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL('index.html', dir), adminPage({ version, brandTagline, course: 'whatsapp', heading: 'WhatsApp 사용법 관리 (해외 전용)', lead: '해외(19개 언어) 사이트용 WhatsApp 교육을 관리합니다. 영어가 기준이며, <b>실제 WhatsApp 앱과 대조해 검수·공개한 수업만</b> 그 언어 사이트에 나옵니다. 국내(한국어) 사이트에는 나오지 않습니다.', extra: table }));
  const all = catalog.chapters.flatMap((c) => c.lessons);
  return { chapters: catalog.chapters.length, lessons: all.length, withSteps: all.filter((l) => l.steps.length).length, steps: all.reduce((a, l) => a + l.steps.length, 0), byStatus: Object.fromEntries(Object.keys(STATUS).map((k) => [k, all.filter((l) => l.status === k).length])), published: Object.fromEntries(prog.map((r) => [r.code, r.published])) };
}
