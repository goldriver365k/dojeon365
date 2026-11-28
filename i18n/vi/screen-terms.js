// Từ ngữ trong hình luyện tập, tiếng Hàn → tiếng Việt (qua bảng tiếng Anh; cần xem lại).
import { makeTr } from '../terms-from-en.js';
import { VI_FROM_EN } from './from-en.js';
export const TERMS = {};
export const tr = makeTr(VI_FROM_EN, TERMS);
