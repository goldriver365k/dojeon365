// Palavras das imagens de treino, coreano → português (via vocabulário em inglês; por revisar).
import { TERMS as EN_TERMS } from '../en/screen-terms.js';
import { SAME } from '../es/from-en.js';
import { PT_FROM_EN } from './from-en.js';
export const TERMS = { 길게: 'Segure', 여기: 'Aqui' };
const SAME_SET = new Set(SAME);
export const tr = (s) => {
  if (s in TERMS) return TERMS[s];
  const en = EN_TERMS[s];
  if (en === undefined) return s;
  if (en in PT_FROM_EN) return PT_FROM_EN[en];
  return SAME_SET.has(en) ? en : s;
};
