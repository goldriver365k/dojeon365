// Слова на учебных картинках, корейский → русский (через английский словарь; требует проверки).
import { makeTr } from '../terms-from-en.js';
import { RU_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(RU_FROM_EN, TERMS);
