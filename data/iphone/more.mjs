// 필수 외 사용법 원고 모음 — dsl.mjs로 쓴 수업을 steps-essential / screens-essential과 같은 모양으로 합친다.
import { MORE_A } from './more-a.mjs';
import { MORE_B } from './more-b.mjs';

const ALL = { ...MORE_A, ...MORE_B };
export const MORE_STEPS = Object.fromEntries(Object.entries(ALL).map(([k, v]) => [k, v.steps]));
export const MORE_SCREENS = Object.fromEntries(Object.entries(ALL).map(([k, v]) => [k, v.screens]));
