// 練習圖中的文字，韓語 → 簡體中文（經由英語詞表；需審校）。
import { makeTr } from '../terms-from-en.js';
import { ZH_HANT_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(ZH_HANT_FROM_EN, TERMS);
