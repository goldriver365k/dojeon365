// 練習用の絵の文字、韓国語 → 日本語（英語の辞書を経由。確認が必要）。
import { makeTr } from '../terms-from-en.js';
import { JA_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(JA_FROM_EN, TERMS);
