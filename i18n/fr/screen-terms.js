// Mots des images d’entraînement, coréen → français (via le vocabulaire anglais ; à relire).
import { makeTr } from '../terms-from-en.js';
import { FR_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(FR_FROM_EN, TERMS);
