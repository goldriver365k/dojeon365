export const FIND = '如果主屏幕上没有，请向上滑动，在应用程序屏幕中查找。';
export const SCROLL = '如果看不到，请向上滑动查找。';
export const open = (app) => [`点按“${app}”应用程序。`, FIND];
export const item = (name, hint = SCROLL) => [`点按“${name}”。`, hint];
export const settings = (...names) => [open('设置'), ...names.map((n) => item(n))];
export const BACK = ['点按底部的返回键。', '会回到上一个屏幕。'];
export const QUICK = ['从屏幕右上角向下滑动。', '会打开快捷设置面板。从左上角向下滑动则打开通知。'];
export const HOME_BTN = ['点按底部中间的主屏幕键。', '会回到第一个屏幕（主屏幕）。'];
