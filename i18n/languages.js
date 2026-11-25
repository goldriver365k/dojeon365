// 20 languages for the global site. status: live (reviewed) / draft (written, not reviewed → noindex) / planned
// Only reviewed pages go into the sitemap. Machine translation is never published as reviewed.
export const SITE_URL = 'https://digistep365.com';
export const LANGUAGES = [
  { code: 'ko', name: '한국어', status: 'live', note: 'Korean site at / (도전, 디지털세상)' },
  { code: 'en', name: 'English', status: 'draft' },
  { code: 'es', name: 'Español', status: 'draft' },
  { code: 'pt', name: 'Português', status: 'planned' },
  { code: 'de', name: 'Deutsch', status: 'planned' },
  { code: 'fr', name: 'Français', status: 'planned' },
  { code: 'hi', name: 'हिन्दी', status: 'planned' },
  { code: 'id', name: 'Bahasa Indonesia', status: 'planned' },
  { code: 'vi', name: 'Tiếng Việt', status: 'planned' },
  { code: 'th', name: 'ไทย', status: 'planned' },
  { code: 'ja', name: '日本語', status: 'planned' },
  { code: 'zh-Hans', name: '简体中文', status: 'planned' },
  { code: 'zh-Hant', name: '繁體中文', status: 'planned' },
  { code: 'it', name: 'Italiano', status: 'planned' },
  { code: 'ar', name: 'العربية', status: 'planned', dir: 'rtl' },
  { code: 'ru', name: 'Русский', status: 'planned' },
  { code: 'tr', name: 'Türkçe', status: 'planned' },
  { code: 'ms', name: 'Bahasa Melayu', status: 'planned' },
  { code: 'fil', name: 'Filipino', status: 'planned' },
  { code: 'bn', name: 'বাংলা', status: 'planned' },
];
