// Wörter in den Übungsbildern, Koreanisch → Deutsch (über das englische Wörterbuch; ungeprüft).
import { makeTr } from '../terms-from-en.js';
import { DE_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(DE_FROM_EN, TERMS);
