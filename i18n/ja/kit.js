export const FIND = 'ホーム画面にない場合は、上にスワイプしてアプリ画面で探します。';
export const SCROLL = '見つからない場合は、上にスワイプして探します。';
export const open = (app) => [`「${app}」アプリをタップします。`, FIND];
export const item = (name, hint = SCROLL) => [`「${name}」をタップします。`, hint];
export const settings = (...names) => [open('設定'), ...names.map((n) => item(n))];
export const BACK = ['下の戻るボタンをタップします。', '前の画面に戻ります。'];
export const QUICK = ['画面の右上から下にスワイプします。', 'クイック設定パネルが開きます。左上からスワイプすると通知が開きます。'];
export const HOME_BTN = ['下の中央にあるホームボタンをタップします。', '最初の画面（ホーム画面）に戻ります。'];
