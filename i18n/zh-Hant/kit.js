export const FIND = '如果主螢幕上沒有，請向上滑動，在應用程式螢幕中尋找。';
export const SCROLL = '如果看不到，請向上滑動尋找。';
export const open = (app) => [`輕觸「${app}」應用程式。`, FIND];
export const item = (name, hint = SCROLL) => [`輕觸「${name}」。`, hint];
export const settings = (...names) => [open('設定'), ...names.map((n) => item(n))];
export const BACK = ['輕觸底部的返回鍵。', '會回到上一個螢幕。'];
export const QUICK = ['從螢幕右上角向下滑動。', '會開啟快捷設定面板。從左上角向下滑動則開啟通知。'];
export const HOME_BTN = ['輕觸底部中間的主螢幕鍵。', '會回到第一個螢幕（主螢幕）。'];
