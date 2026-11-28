export const FIND = 'Ana ekranda yoksa, Uygulamalar ekranında bulmak için yukarı kaydırın.';
export const SCROLL = 'Göremiyorsanız bulmak için yukarı kaydırın.';
export const open = (app) => [`‘${app}’ uygulamasına dokunun.`, FIND];
export const item = (name, hint = SCROLL) => [`‘${name}’ öğesine dokunun.`, hint];
export const settings = (...names) => [open('Ayarlar'), ...names.map((n) => item(n))];
export const BACK = ['Alttaki Geri tuşuna dokunun.', 'Önceki ekrana dönersiniz.'];
export const QUICK = ['Ekranın sağ üstünden aşağı kaydırın.', 'Hızlı ayarlar paneli açılır. Sol üstten kaydırınca bildirimler açılır.'];
export const HOME_BTN = ['Alt ortadaki Ana ekran tuşuna dokunun.', 'İlk ekrana (Ana ekran) dönersiniz.'];
