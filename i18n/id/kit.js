export const FIND = 'Jika tidak ada di layar Beranda, usap ke atas untuk mencarinya di layar Aplikasi.';
export const SCROLL = 'Jika tidak terlihat, usap ke atas untuk mencarinya.';
export const open = (app) => [`Ketuk aplikasi ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Ketuk ‘${name}’.`, hint];
export const settings = (...names) => [open('Pengaturan'), ...names.map((n) => item(n))];
export const BACK = ['Ketuk tombol Kembali di bawah.', 'Anda kembali ke layar sebelumnya.'];
export const QUICK = ['Usap ke bawah dari kanan atas layar.', 'Panel pengaturan cepat terbuka. Dari kiri atas, panel notifikasi yang terbuka.'];
export const HOME_BTN = ['Ketuk tombol Beranda di tengah bawah.', 'Anda kembali ke layar pertama (layar Beranda).'];
