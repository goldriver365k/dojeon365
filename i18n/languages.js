// 20 languages for the global site. status: live (reviewed) / draft (written, not reviewed → noindex) / planned
// Only reviewed pages go into the sitemap. Machine translation is never published as reviewed.
export const SITE_URL = 'https://digistep365.com';
export const LANGUAGES = [
  { code: 'ko', name: '한국어', status: 'live', note: 'Korean site at / (도전, 디지털세상)', og: 'ko_KR', speech: 'ko-KR' },
  { code: 'en', name: 'English', status: 'draft', og: 'en_US', speech: 'en-US' },
  { code: 'es', name: 'Español', status: 'draft', og: 'es_ES', speech: 'es-ES' },
  { code: 'pt', name: 'Português (Brasil)', status: 'draft', og: 'pt_BR', speech: 'pt-BR' },
  { code: 'de', name: 'Deutsch', status: 'planned', og: 'de_DE', speech: 'de-DE' },
  { code: 'fr', name: 'Français', status: 'planned', og: 'fr_FR', speech: 'fr-FR' },
  { code: 'hi', name: 'हिन्दी', status: 'planned', og: 'hi_IN', speech: 'hi-IN' },
  { code: 'id', name: 'Bahasa Indonesia', status: 'planned', og: 'id_ID', speech: 'id-ID' },
  { code: 'vi', name: 'Tiếng Việt', status: 'planned', og: 'vi_VN', speech: 'vi-VN' },
  { code: 'th', name: 'ไทย', status: 'planned', og: 'th_TH', speech: 'th-TH' },
  { code: 'ja', name: '日本語', status: 'planned', og: 'ja_JP', speech: 'ja-JP' },
  { code: 'zh-Hans', name: '简体中文', status: 'planned', og: 'zh_CN', speech: 'zh-CN' },
  { code: 'zh-Hant', name: '繁體中文', status: 'planned', og: 'zh_TW', speech: 'zh-TW' },
  { code: 'it', name: 'Italiano', status: 'planned', og: 'it_IT', speech: 'it-IT' },
  { code: 'ar', name: 'العربية', status: 'planned', dir: 'rtl', og: 'ar_AR', speech: 'ar-SA' },
  { code: 'ru', name: 'Русский', status: 'planned', og: 'ru_RU', speech: 'ru-RU' },
  { code: 'tr', name: 'Türkçe', status: 'planned', og: 'tr_TR', speech: 'tr-TR' },
  { code: 'ms', name: 'Bahasa Melayu', status: 'planned', og: 'ms_MY', speech: 'ms-MY' },
  { code: 'fil', name: 'Filipino', status: 'planned', og: 'fil_PH', speech: 'fil-PH' },
  { code: 'bn', name: 'বাংলা', status: 'planned', og: 'bn_BD', speech: 'bn-BD' },
];
