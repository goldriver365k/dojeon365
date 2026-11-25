// Builds a picture translator for a language from an English→language word table.
// Korean picture word → English (en/screen-terms.js) → language table. Brand names in SAME stay as they are.
// A word with no translation stays Korean, so that picture is left out of the page (never half-translated).
import { TERMS as EN_TERMS } from './en/screen-terms.js';
import { SAME } from './es/from-en.js';

const SAME_SET = new Set(SAME);
export function makeTr(table, direct = {}) {
  return (s) => {
    if (s in direct) return direct[s];
    const en = EN_TERMS[s];
    if (en === undefined) return s;
    if (en in table) return table[en];
    return SAME_SET.has(en) ? en : s;
  };
}
