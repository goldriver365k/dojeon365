// 练习图中的文字，韩语 → 简体中文（经由英语词表；需审校）。
import { makeTr } from '../terms-from-en.js';
import { ZH_HANS_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(ZH_HANS_FROM_EN, TERMS);
