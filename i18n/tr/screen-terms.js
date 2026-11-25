// Alıştırma resimlerindeki sözcükler, Korece → Türkçe (İngilizce sözlük üzerinden; gözden geçirilmeli).
import { makeTr } from '../terms-from-en.js';
import { TR_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(TR_FROM_EN, TERMS);
