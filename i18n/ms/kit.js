export const FIND = 'Jika tiada di skrin Utama, leret ke atas untuk mencarinya di skrin Aplikasi.';
export const SCROLL = 'Jika tidak kelihatan, leret ke atas untuk mencarinya.';
export const open = (app) => [`Ketik aplikasi ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Ketik ‘${name}’.`, hint];
export const settings = (...names) => [open('Tetapan'), ...names.map((n) => item(n))];
export const BACK = ['Ketik butang Kembali di bawah.', 'Anda kembali ke skrin sebelumnya.'];
export const QUICK = ['Leret ke bawah dari bahagian atas kanan skrin.', 'Panel tetapan pantas terbuka. Dari atas kiri, panel pemberitahuan yang terbuka.'];
export const HOME_BTN = ['Ketik butang Utama di tengah bawah.', 'Anda kembali ke skrin pertama (skrin Utama).'];
