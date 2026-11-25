// Parole nelle immagini di esercizio, coreano → italiano (tramite il vocabolario inglese; da rivedere).
import { makeTr } from '../terms-from-en.js';
import { IT_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(IT_FROM_EN, TERMS);
