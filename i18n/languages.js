// 20 languages for the global site. status: live (reviewed) / draft (written, not reviewed → noindex) / planned
// Only reviewed pages go into the sitemap. Machine translation is never published as reviewed.
export const SITE_URL = 'https://digistep365.com';
export const LANGUAGES = [
  { code: 'ko', name: '한국어', status: 'live', note: 'Korean site at / (도전, 디지털세상)', og: 'ko_KR', speech: 'ko-KR' },
  { code: 'en', name: 'English', status: 'draft', og: 'en_US', speech: 'en-US' },
  { code: 'es', name: 'Español', status: 'draft', og: 'es_ES', speech: 'es-ES' },
  { code: 'pt', name: 'Português (Brasil)', status: 'draft', og: 'pt_BR', speech: 'pt-BR' },
  { code: 'de', name: 'Deutsch', status: 'draft', og: 'de_DE', speech: 'de-DE' },
  { code: 'fr', name: 'Français', status: 'draft', og: 'fr_FR', speech: 'fr-FR' },
  { code: 'hi', name: 'हिन्दी', status: 'planned', og: 'hi_IN', speech: 'hi-IN', wrap: { scale: 1.35 } },
  { code: 'id', name: 'Bahasa Indonesia', status: 'draft', og: 'id_ID', speech: 'id-ID' },
  { code: 'vi', name: 'Tiếng Việt', status: 'draft', og: 'vi_VN', speech: 'vi-VN' },
  { code: 'th', name: 'ไทย', status: 'draft', og: 'th_TH', speech: 'th-TH', wrap: { noSpace: true, scale: 1.5 } },
  { code: 'ja', name: '日本語', status: 'draft', og: 'ja_JP', speech: 'ja-JP', wrap: { noSpace: true, scale: 1.05 } },
  { code: 'zh-Hans', name: '简体中文', status: 'draft', og: 'zh_CN', speech: 'zh-CN', wrap: { noSpace: true, scale: 1.05 } },
  { code: 'zh-Hant', name: '繁體中文', status: 'draft', og: 'zh_TW', speech: 'zh-TW', wrap: { noSpace: true, scale: 1.05 } },
  { code: 'it', name: 'Italiano', status: 'draft', og: 'it_IT', speech: 'it-IT' },
  { code: 'ar', name: 'العربية', status: 'planned', dir: 'rtl', og: 'ar_AR', speech: 'ar-SA', wrap: { scale: 1.5 } },
  { code: 'ru', name: 'Русский', status: 'draft', og: 'ru_RU', speech: 'ru-RU', wrap: { scale: 1.45 } },
  { code: 'tr', name: 'Türkçe', status: 'draft', og: 'tr_TR', speech: 'tr-TR' },
  { code: 'ms', name: 'Bahasa Melayu', status: 'draft', og: 'ms_MY', speech: 'ms-MY' },
  { code: 'fil', name: 'Filipino', status: 'draft', og: 'fil_PH', speech: 'fil-PH' },
  { code: 'bn', name: 'বাংলা', status: 'planned', og: 'bn_BD', speech: 'bn-BD', wrap: { scale: 1.35 } },
];
