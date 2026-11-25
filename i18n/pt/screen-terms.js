// Palavras das imagens de treino, coreano → português (via vocabulário em inglês; por revisar).
import { makeTr } from '../terms-from-en.js';
import { PT_FROM_EN } from './from-en.js';
export const TERMS = { 길게: 'Segure', 여기: 'Aqui' };
export const tr = makeTr(PT_FROM_EN, TERMS);
