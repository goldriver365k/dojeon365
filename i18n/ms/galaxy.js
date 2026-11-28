// Pelajaran Galaxy dalam Bahasa Melayu (draf, belum disemak → noindex, tiada dalam sitemap).
// steps[i] sepadan dengan kad Korea ke-i bagi pelajaran yang sama.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Asas', life: 'Harian', apply: 'Ciri lain', adv: 'Lanjutan dan penyelesaian masalah' };

export const CATEGORIES = {
  1: ['Menghidupkan dan mematikan telefon', 'Butang, mengecas, kuasa dan skrin kunci'],
  2: ['Ketik, tahan dan leret', 'Sentuhan asas dan butang navigasi'],
  3: ['Teks dan bunyi yang selesa', 'Teks lebih besar, kecerahan, tamat masa skrin dan kelantangan'],
  4: ['Membuat dan menjawab panggilan', 'Memanggil, menjawab, pembesar suara dan sekatan'],
  5: ['Menyimpan dan mencari kenalan', 'Kenalan baharu, carian, sunting dan kegemaran'],
  6: ['Menghantar mesej', 'Menulis, membetulkan, menyalin dan melampirkan foto'],
  7: ['Pemberitahuan dan tetapan pantas', 'Panel pemberitahuan, lampu suluh, putaran dan Jangan ganggu'],
  8: ['Wi-Fi, data dan Bluetooth', 'Bersambung ke Internet dan peranti lain'],
  9: ['Mencari di Internet dan memasang aplikasi', 'Pelayar, kod QR, muat turun dan kedai aplikasi'],
  10: ['Mengambil foto dan video', 'Kamera, swafoto, zum, pemasa dan video'],
  11: ['Menyusun foto dan fail', 'Galeri, suntingan, pemulihan dan Fail Saya'],
  12: ['Skrin Utama dan alat harian', 'Aplikasi, folder, kertas dinding, penggera, kalendar dan nota'],
  13: ['Berkongsi foto dengan keluarga', 'E-mel, video dan panggilan video'],
  14: ['Membayar dengan Samsung Wallet', 'Membuka Wallet dan memilih kad'],
  15: ['Menggunakan telefon dengan selamat', 'Kunci skrin, biometrik, kebenaran dan SOS kecemasan'],
  16: ['Bertukar ke telefon baharu', 'Persediaan, akaun, Smart Switch dan sandaran'],
  17: ['Penglihatan, pendengaran dan sentuhan', 'Pembesaran, kontras, TalkBack dan sari kata'],
  18: ['Bateri dan storan', 'Penjimatan kuasa, storan, penjagaan dan kemas kini'],
  19: ['Galaxy AI dan Bixby', 'Permintaan suara dan ciri Galaxy AI'],
  20: ['Sambung ke TV, PC dan jam', 'Smart View, PC, DeX, peranti boleh pakai dan SmartThings'],
  21: ['Ciri berguna lain', 'Skrin pisah, mod dan rutin, Always On Display'],
  22: ['Apabila ada masalah', 'Tiada bunyi, tiada isyarat, mengecas, panas dan tergantung'],
};

export const TITLES = {
  'g01-buttons': ['butang-sisi', 'Mencari butang sisi'], 'g01-charge': ['mengecas-telefon', 'Mengecas telefon'],
  'g01-power': ['matikan-dan-hidupkan', 'Mematikan dan menghidupkan semula telefon'], 'g01-restart': ['mula-semula', 'Memulakan semula telefon'],
  'g01-lock': ['kunci-dan-buka-kunci', 'Mengunci dan membuka kunci skrin'], 'g02-tap': ['ketik', 'Ketik sekali'],
  'g02-hold': ['sentuh-dan-tahan', 'Sentuh dan tahan'], 'g02-swipe': ['leret', 'Leret untuk bergerak'],
  'g02-pinch': ['zum-dua-jari', 'Membesarkan dengan dua jari'], 'g02-back': ['butang-kembali', 'Kembali'],
  'g02-home': ['butang-utama', 'Pergi ke skrin Utama'], 'g02-recent': ['aplikasi-terkini', 'Membuka aplikasi terkini'],
  'g03-font': ['teks-lebih-besar', 'Membesarkan teks'], 'g03-zoom': ['zum-skrin', 'Membesarkan skrin dan ikon'],
  'g03-easy': ['mod-mudah', 'Menghidupkan Mod mudah'], 'g03-bright': ['kecerahan', 'Melaraskan kecerahan'],
  'g03-timeout': ['tamat-masa-skrin', 'Menukar bila skrin padam'], 'g03-sound': ['nada-dering-getaran', 'Melaraskan kelantangan nada dering dan getaran'],
  'g04-call': ['membuat-panggilan', 'Membuat panggilan dengan pad kekunci'], 'g04-answer': ['jawab-atau-tolak', 'Menjawab atau menolak panggilan'],
  'g04-speaker': ['pembesar-suara', 'Menghidupkan pembesar suara semasa panggilan'], 'g04-missed': ['panggilan-terlepas', 'Memanggil balik panggilan terlepas'],
  'g04-log': ['log-panggilan', 'Melihat log panggilan'], 'g04-block': ['sekat-nombor', 'Menyekat nombor spam'],
  'g05-new': ['simpan-kenalan', 'Menyimpan kenalan baharu'], 'g05-search': ['cari-kenalan', 'Mencari kenalan mengikut nama'],
  'g05-edit': ['tukar-nombor', 'Menukar nombor telefon'], 'g05-speed': ['dail-pantas', 'Menambah orang yang kerap dipanggil'],
  'g05-share': ['kongsi-kenalan', 'Berkongsi kenalan'], 'g06-send': ['hantar-balas-mesej', 'Menghantar dan membalas mesej'],
  'g06-type': ['huruf-nombor-simbol', 'Menaip huruf, nombor dan simbol'], 'g06-fix': ['betulkan-salah-taip', 'Membetulkan salah taip'],
  'g06-copy': ['salin-tampal', 'Menyalin dan menampal'], 'g06-photo': ['lampirkan-foto', 'Melampirkan foto pada mesej'],
  'g06-translate': ['terjemah-teks', 'Menterjemah teks'], 'g07-noti': ['pemberitahuan', 'Melihat dan mengosongkan pemberitahuan'],
  'g07-appnoti': ['pemberitahuan-aplikasi', 'Melaraskan pemberitahuan aplikasi'], 'g07-quick': ['tetapan-pantas', 'Membuka panel tetapan pantas'],
  'g07-flash': ['lampu-suluh', 'Menghidupkan lampu suluh'], 'g07-rotate': ['putaran-skrin', 'Mengawal putaran skrin'],
  'g07-dnd': ['jangan-ganggu-mod-pesawat', 'Menggunakan Jangan ganggu dan Mod pesawat'], 'g08-wifi': ['sambung-wifi', 'Bersambung ke Wi-Fi'],
  'g08-data': ['data-mudah-alih', 'Menghidupkan dan mematikan data mudah alih'], 'g08-usage': ['penggunaan-data', 'Melihat penggunaan data'],
  'g08-bt': ['fon-telinga-bluetooth', 'Menyambung fon telinga Bluetooth'], 'g08-hotspot': ['tempat-liputan-mudah-alih', 'Menggunakan Tempat Liputan Mudah Alih'],
  'g08-location': ['lokasi-nfc', 'Mencari tetapan lokasi dan NFC'], 'g09-search': ['cari-samsung-internet', 'Mencari di Samsung Internet'],
  'g09-bookmark': ['simpan-halaman', 'Menyimpan halaman yang kerap dilawati'], 'g09-qr': ['buka-kod-qr', 'Membuka kod QR'],
  'g09-files': ['fail-dimuat-turun', 'Mencari fail yang dimuat turun'], 'g09-stores': ['play-store-galaxy-store', 'Menggunakan Play Store dan Galaxy Store'],
  'g09-install': ['pasang-kemas-kini-padam-aplikasi', 'Memasang, mengemas kini dan memadam aplikasi'], 'g09-google': ['aplikasi-google', 'Mencari aplikasi Google dan pembawa'],
  'g10-open': ['buka-kamera', 'Membuka kamera'], 'g10-focus': ['fokus-kamera', 'Memfokuskan kamera'],
  'g10-switch': ['tukar-kamera', 'Bertukar antara kamera hadapan dan belakang'], 'g10-selfie': ['swafoto', 'Mengambil swafoto'],
  'g10-zoom': ['zum-semasa-mengambil-foto', 'Zum semasa mengambil foto'], 'g10-timer': ['pemasa-kamera', 'Menggunakan pemasa kamera'],
  'g10-modes': ['mod-potret-malam', 'Mencuba mod Potret dan Malam'], 'g10-video': ['rakam-video', 'Merakam video'],
  'g10-capture': ['tangkapan-rakaman-skrin', 'Mengambil tangkapan skrin atau merakam skrin'], 'g11-latest': ['foto-terkini', 'Mencari foto yang baru diambil'],
  'g11-album': ['cipta-album', 'Mencipta album'], 'g11-edit': ['pangkas-cerahkan-foto', 'Memangkas dan mencerahkan foto'],
  'g11-text': ['salin-teks-foto', 'Menyalin teks daripada foto'], 'g11-multi': ['kongsi-beberapa-foto', 'Berkongsi beberapa foto'],
  'g11-restore': ['pulihkan-foto', 'Memulihkan foto yang dipadam'], 'g11-docs': ['dokumen-fail-saya', 'Mencari dokumen dalam Fail Saya'],
  'g11-quickshare': ['quick-share', 'Menghantar fail dengan Quick Share'], 'g12-addapp': ['aplikasi-di-skrin-utama', 'Meletakkan aplikasi di skrin Utama'],
  'g12-folder': ['folder-widget', 'Mencipta folder dan widget'], 'g12-wallpaper': ['kertas-dinding-tema', 'Menukar kertas dinding, tema dan skrin kunci'],
  'g12-alarm': ['penggera-pemasa', 'Menetapkan penggera dan pemasa'], 'g12-calendar': ['janji-temu-kalendar', 'Menambah janji temu dalam kalendar'],
  'g12-reminder': ['peringatan', 'Mendapat peringatan tugasan'], 'g12-note': ['samsung-notes', 'Menggunakan Samsung Notes'],
  'g12-recorder': ['perakam-suara', 'Merakam suara anda'], 'g12-tools': ['cuaca-kalkulator-radio', 'Menggunakan cuaca, kalkulator dan radio'],
  'x13-gmail': ['hantar-foto-gmail', 'Menghantar foto melalui e-mel dengan Gmail'], 'x13-video': ['hantar-video-keluarga', 'Menghantar video kepada keluarga'],
  'x13-meet': ['panggilan-video-google-meet', 'Membuat panggilan video dengan Google Meet'], 'g14-open': ['buka-samsung-wallet', 'Membuka Samsung Wallet'],
  'g14-add': ['tambah-kad', 'Melihat skrin tambah kad'], 'g14-pay': ['pilih-kad-bayar', 'Memilih kad untuk membayar'],
  'g15-pin': ['cipta-pin', 'Mencipta PIN'], 'g15-bio': ['cap-jari-wajah', 'Mendaftar cap jari dan wajah'],
  'g15-perm': ['kebenaran-lokasi', 'Menyemak kebenaran aplikasi dan lokasi'], 'g15-folder': ['folder-selamat-samsung-pass', 'Mengenali Folder Selamat dan Samsung Pass'],
  'g15-medical': ['maklumat-perubatan-kecemasan', 'Menambah maklumat perubatan dan kenalan kecemasan'], 'g15-sos': ['sos-kecemasan', 'Menyemak SOS kecemasan'],
  'g15-find': ['samsung-find', 'Mencari telefon dengan Samsung Find'], 'g16-setup': ['persediaan-pertama', 'Menyediakan telefon kali pertama'],
  'g16-sim': ['sim-esim', 'Mengenali SIM dan eSIM'], 'g16-account': ['akaun-samsung-google', 'Menyemak akaun Samsung dan Google'],
  'g16-switch': ['smart-switch', 'Memindah kenalan dan foto dengan Smart Switch'], 'g16-backup': ['semak-sandaran', 'Menyemak status sandaran'],
  'g16-restore': ['pulihkan-sandaran', 'Memulihkan daripada sandaran'], 'g17-magnify': ['pembesaran', 'Membesarkan sebahagian skrin'],
  'g17-contrast': ['fon-kontras-tinggi', 'Meningkatkan kontras teks'], 'g17-talkback': ['talkback', 'Membacakan skrin dengan TalkBack'],
  'g17-caption': ['bunyi-sari-kata', 'Melaraskan bunyi dan sari kata'], 'g17-hearing': ['alat-bantu-pendengaran', 'Menyemak sokongan alat bantu pendengaran'],
  'g17-touch': ['tetapan-sentuh', 'Melaraskan sentuhan dan pintasan kebolehcapaian'], 'g18-usage': ['aplikasi-guna-bateri', 'Mencari aplikasi yang banyak guna bateri'],
  'g18-saver': ['penjimatan-kuasa', 'Menghidupkan Penjimatan kuasa'], 'g18-storage': ['semak-storan', 'Menyemak storan'],
  'g18-clean': ['fail-besar', 'Membersihkan fail besar'], 'g18-care': ['penjagaan-peranti', 'Menyemak telefon dengan Penjagaan peranti'],
  'g18-update': ['kemas-kini-perisian', 'Mengemas kini perisian'], 'g18-version': ['model-versi-one-ui', 'Menyemak model dan versi One UI'],
  'g19-bixby': ['tanya-bixby', 'Bertanya kepada Bixby dengan suara'], 'g19-circle': ['bulatkan-untuk-cari', 'Mencari perkara di skrin'],
  'g19-interpret': ['terjemahan-panggilan', 'Mengenali terjemahan panggilan dan Jurubahasa'], 'g19-write': ['perbaiki-ringkaskan-teks', 'Memperbaiki dan meringkaskan teks'],
  'g19-transcribe': ['transkrip-rakaman', 'Menukar rakaman kepada teks'], 'g19-photo': ['sunting-foto-ai', 'Menyunting foto dengan AI'],
  'g19-support': ['ciri-mengikut-model', 'Menyemak ciri mengikut model'], 'g20-smartview': ['smart-view', 'Memaparkan skrin di TV dengan Smart View'],
  'g20-pc': ['sambung-ke-pc', 'Bersambung ke PC'], 'g20-dex': ['samsung-dex', 'Mengenali Samsung DeX'],
  'g20-watch': ['jam-dan-buds', 'Menyambung jam dan Buds'], 'g20-smartthings': ['smartthings', 'Menyambung perkakas dengan SmartThings'],
  'g20-musicshare': ['music-share', 'Mengenali Music Share'], 'g21-split': ['skrin-pisah', 'Menggunakan dua aplikasi dengan skrin pisah'],
  'g21-modes': ['mod-rutin', 'Menetapkan Mod dan Rutin'], 'g21-aod': ['always-on-display', 'Memaparkan jam pada skrin kunci'],
  'g21-wellbeing': ['kesejahteraan-digital', 'Melihat masa skrin dengan Kesejahteraan Digital'], 'g21-apps': ['samsung-health-kids-game-booster', 'Mengenali Samsung Health, Samsung Kids dan Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Mencari Samsung News, Samsung.com dan Global Goals'], 'g21-spen': ['s-pen', 'Menggunakan S Pen pada model yang menyokong'],
  'g22-ring': ['nada-dering-tidak-berbunyi', 'Apabila nada dering tidak berbunyi'], 'g22-network': ['tiada-panggilan-internet', 'Apabila panggilan atau Internet tidak berfungsi'],
  'g22-charge': ['tidak-mengecas', 'Apabila telefon tidak mengecas'], 'g22-hot': ['telefon-panas', 'Apabila telefon panas'],
  'g22-freeze': ['skrin-tergantung', 'Apabila skrin tergantung'], 'g22-water': ['telefon-basah', 'Perkara disemak jika telefon basah'],
  'g22-members': ['diagnostik-samsung-members', 'Diagnostik dengan Samsung Members'], 'g22-service': ['sebelum-ke-pusat-servis', 'Mencatat model dan masalah sebelum ke pusat servis'],
};

const PHONE = open('Telefon');
const CONTACTS = open('Kenalan');
const MESSAGES = open('Mesej');
const CAMERA = open('Kamera');
const GALLERY = open('Galeri');
const SHUTTER = ['Ketik butang pengatup putih.'];
const REAL = 'Pelajaran ini mengubah tetapan sebenar atau ada kesan sebenar. Baca semua langkah dahulu, kemudian buat pada telefon.';
const AI_ICON = ['Ketik ikon Galaxy AI.'];
const CHECK = 'Pelajaran baharu untuk laman antarabangsa. Skrin aplikasi Google kerap berubah; semak pada telefon sebenar.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Ketahui kedudukan butang Kelantangan naik, Kelantangan turun dan butang Sisi pada Galaxy serta fungsinya.', [
    ['Lihat bahagian kanan telefon.', 'Ada tiga butang. Dari atas: Kelantangan naik, Kelantangan turun dan butang Sisi.'],
    ['Tekan butang Sisi dalam gambar.', 'Ini butang paling bawah. Untuk menghidupkan dan mematikan telefon atau skrin.'],
    ['Tekan butang Kelantangan turun dalam gambar.', 'Ini butang tengah. Ia memperlahankan bunyi.'],
    ['Tekan butang Kelantangan naik dalam gambar.', 'Ini butang paling atas. Ia menguatkan bunyi.']]),
  'g01-charge': L('Cas Galaxy anda langkah demi langkah: pasang pengecas, sambung kabel dan semak tanda mengecas.', [
    ['Pasang pengecas pada soket elektrik.'], ['Masukkan hujung kabel ke port di bahagian bawah telefon.', 'Jika port basah, biarkan kering sepenuhnya dahulu.'],
    ['Semak sama ada tanda mengecas muncul di skrin.'], ['Cabut kabel apabila selesai mengecas.']]),
  'g01-power': L('Matikan Galaxy dengan butang Sisi dan Kelantangan turun, kemudian hidupkan semula.', [
    ['Tekan dan tahan butang Sisi dan Kelantangan turun serentak.', 'Tekan kedua-duanya bersama dan tunggu menu muncul.'],
    ['Ketik Matikan.'], ['Ketik Matikan sekali lagi.', 'Apabila skrin gelap, teruskan ke langkah seterusnya untuk menghidupkannya.'],
    ['Tekan dan tahan butang Sisi untuk menghidupkan telefon.', 'Tahan beberapa saat sehingga logo Samsung muncul. Kemudian buka kunci skrin.']]),
  'g01-restart': L('Mulakan semula Galaxy apabila ia perlahan atau pelik.', [
    ['Tekan dan tahan butang Sisi dan Kelantangan turun serentak.', 'Tahan sehingga menu kuasa muncul.'], ['Ketik Mula semula.'], ['Ketik Mula semula sekali lagi.'],
    ['Tunggu telefon mati dan hidup semula.', '', 'Jika skrin tergantung dan menu tidak muncul, tahan kedua-dua butang lebih 7 saat.']]),
  'g01-lock': L('Kunci skrin dengan butang Sisi dan buka kunci dengan meleret ke atas.', [
    ['Tekan butang Sisi sekali dengan pantas.', 'Skrin padam dan dikunci secara automatik.'], ['Tekan butang Sisi sekali lagi dengan pantas.', 'Skrin kunci menyala. Mengetik skrin dua kali juga boleh.'],
    ['Leret skrin ke atas.', 'Jika anda menetapkan PIN atau cap jari, gunakannya untuk membuka kunci.']]),
  'g02-tap': L('Latih sentuhan paling asas: ketik sekali untuk membuka aplikasi.', [
    ['Ketik Galeri sekali dengan lembut menggunakan hujung jari.', 'Jangan tekan kuat. Ketikan lembut membuka aplikasi.'], HOME_BTN]),
  'g02-hold': L('Latih sentuh dan tahan untuk membuka menu aplikasi.', [
    ['Sentuh dan tahan Galeri selama 2 saat.', 'Jangan angkat jari sehingga menu muncul.'], ['Semak sama ada menu telah muncul.', 'Sentuh dan tahan menunjukkan apa yang boleh dibuat dengan aplikasi itu.'],
    ['Ketik butang Kembali untuk menutup menu.']]),
  'g02-swipe': L('Leret untuk bertukar halaman skrin Utama dan membuka skrin Aplikasi.', [
    ['Leret skrin ke kiri.', 'Anda beralih ke halaman skrin Utama seterusnya.'], ['Leret dari bawah ke atas pada skrin Utama.', 'Skrin Aplikasi dengan semua aplikasi terbuka.'],
    ['Leret ke bawah pada skrin Aplikasi.', 'Anda kembali ke skrin Utama.']]),
  'g02-pinch': L('Kembangkan dua jari untuk membesarkan foto dan rapatkan untuk mengecilkan.', [
    open('Galeri'), ['Ketik foto yang ingin dilihat.'], ['Letakkan dua jari pada foto dan kembangkan.', 'Kembangkan ibu jari dan jari telunjuk untuk membesarkan.'], ['Rapatkan kedua-dua jari.', 'Foto kembali kecil.']]),
  'g02-back': L('Gunakan butang Kembali untuk kembali ke skrin sebelumnya.', [
    ...settings('Paparan'),
    ['Ketik butang Kembali di kanan bawah.', 'Anda kembali ke skrin sebelumnya (Tetapan).', 'Susunan butang boleh ditukar dalam Tetapan → Paparan → Bar navigasi.']]),
  'g02-home': L('Kembali ke skrin Utama dari mana-mana aplikasi dengan butang Utama.', [
    open('Tetapan'), HOME_BTN,
    ['Semak sama ada skrin Utama muncul.', 'Dari mana-mana aplikasi, butang Utama membawa anda ke sini.', 'Jika butang tidak kelihatan, leret sedikit ke atas dari tepi bawah skrin.']]),
  'g02-recent': L('Buka aplikasi terkini untuk bertukar aplikasi atau menutup semuanya.', [
    ['Ketik butang Terkini di kiri bawah.', 'Aplikasi yang baru digunakan muncul seperti kad.'], ['Ketik aplikasi yang ingin digunakan semula.', 'Leret ke sisi untuk melihat aplikasi lain.'],
    ['Ketik butang Terkini sekali lagi.'], ['Ketik ‘Tutup semua’.', 'Semua aplikasi yang dibuka ditutup.']]),
  'g03-font': L('Besarkan dan tebalkan teks dalam Tetapan → Paparan → Saiz dan gaya fon.', [
    ...settings('Paparan', 'Saiz dan gaya fon'), ['Seret bulatan pada bar saiz ke kanan.', 'Semakin ke kanan, semakin besar teks.'],
    ['Ketik suis ‘Fon tebal’ untuk menghidupkannya.', 'Teks tebal lebih mudah dibaca.'], ['Semak sama ada teks sudah lebih besar.']]),
  'g03-zoom': L('Besarkan ikon dan butang dengan Zum skrin dalam Tetapan → Paparan.', [
    ...settings('Paparan', 'Zum skrin'), ['Seret bulatan pada bar ke kanan.', 'Semakin ke kanan, semakin besar ikon dan butang.'], ['Semak sama ada ikon dan butang sudah lebih besar.']]),
  'g03-easy': L('Hidupkan Mod mudah untuk skrin Utama yang lebih ringkas dengan teks dan ikon besar.', [
    ...settings('Paparan', 'Mod mudah'), ['Ketik suis ‘Mod mudah’ untuk menghidupkannya.', 'Teks dan ikon skrin Utama menjadi lebih besar.'], ['Semak sama ada teks dan ikon skrin Utama sudah lebih besar.']]),
  'g03-bright': L('Laraskan kecerahan skrin dari panel tetapan pantas.', [
    ['Leret ke bawah dari bahagian atas kanan skrin.', 'Panel tetapan pantas terbuka.'], ['Seret bar kecerahan ke kanan.', 'Seret ke kiri untuk menggelapkan skrin.'], ['Leret ke atas untuk menutup panel.']]),
  'g03-timeout': L('Tukar berapa lama skrin kekal menyala dalam Tetapan → Paparan → Tamat masa skrin.', [
    ...settings('Paparan', 'Tamat masa skrin'), ['Ketik ‘5 minit’.', 'Pilih masa yang anda mahu. Semakin lama, semakin banyak bateri digunakan.']]),
  'g03-sound': L('Kuatkan nada dering dan buat telefon bergetar semasa berdering.', [
    ...settings('Bunyi dan getaran', 'Kelantangan'), ['Seret bar Nada dering ke kanan.', 'Semakin ke kanan, semakin kuat deringan.'], BACK,
    ['Ketik ‘Bunyi’.', 'Untuk getaran sahaja, ketik ‘Getar’.'], ['Ketik suis ‘Getar semasa berdering’ untuk menghidupkannya.', 'Bunyi dan getaran memberitahu serentak.']]),
  'g04-call': L('Buat panggilan dengan Galaxy dengan menaip nombor pada pad kekunci.', [
    PHONE, ['Ketik ‘Pad kekunci’ di bawah.'], ['Ketik digit nombor telefon mengikut urutan.', 'Jika tersilap, padam dengan butang padam di kanan bawah.'], ['Ketik butang panggil hijau.'],
    ['Selepas selesai, ketik butang tamat merah.']]),
  'g04-answer': L('Jawab dengan meleret butang hijau, tolak dengan butang merah atau dengan mesej.', [
    ['Sentuh dan tahan butang jawab hijau dan leret ke atas.', 'Leret keluar dari bulatan untuk menjawab.'], ['Untuk menolak, sentuh dan tahan butang merah dan leret ke atas.'],
    ['Untuk menolak dengan mesej, leret ke atas ‘Hantar mesej’ di bawah.', 'Pilih mesej dan ia dihantar kepada pemanggil.', 'Dalam Tetapan → Kebolehcapaian → Interaksi dan ketangkasan anda boleh menjawab dengan satu ketikan.']]),
  'g04-speaker': L('Hidupkan pembesar suara semasa panggilan untuk bercakap tanpa memegang telefon di telinga.', [
    ['Buat atau terima panggilan.'], ['Ketik ‘Pembesar suara’.', 'Anda boleh mendengar dan bercakap dengan telefon jauh dari telinga.'], ['Untuk mematikan, ketik ‘Pembesar suara’ sekali lagi.']]),
  'g04-missed': L('Panggil balik panggilan terlepas dari senarai Terkini dalam aplikasi Telefon.', [
    PHONE, ['Ketik ‘Terkini’ di bawah.'], ['Leret nombor terlepas ke kanan.', 'Meleret ke kanan terus memanggil.', 'Jika tidak memanggil, ketik nombor itu kemudian butang panggil.']]),
  'g04-log': L('Lihat siapa yang memanggil dan bila dalam senarai Terkini aplikasi Telefon.', [PHONE, ['Ketik ‘Terkini’ di bawah.'], ['Ketik nama untuk melihat butiran.', 'Anda boleh melihat bila anda bercakap.']]),
  'g04-block': L('Sekat nombor spam dalam tetapan aplikasi Telefon.', [
    PHONE, ['Ketik tiga titik (Lagi pilihan) di kanan atas.'], ['Ketik ‘Tetapan’.'], ['Ketik ‘Sekat nombor’.'], ['Ketik ‘Tambah nombor telefon’.', '', 'Skrin mungkin sedikit berbeza mengikut versi.'],
    ['Taip nombor yang ingin disekat.'], ['Ketik ‘Simpan’.']]),
  'g05-new': L('Simpan kenalan baharu dengan nama dan nombor dalam aplikasi Kenalan.', [
    CONTACTS, ['Ketik ‘+’ (Cipta kenalan) di kanan atas.'], ['Ketik ruang Nama.'], ['Taip nama.'], ['Ketik ruang Telefon.'], ['Taip nombor telefon.'], ['Ketik ‘Simpan’.']]),
  'g05-search': L('Cari kenalan dengan cepat dengan mencari namanya.', [CONTACTS, ['Ketik kanta pembesar (Cari) di atas.'], ['Taip nama yang dicari.'], ['Ketik nama yang ditemui.']]),
  'g05-edit': L('Tukar nombor telefon yang disimpan untuk kenalan.', [
    CONTACTS, ['Ketik nama orang itu.'], ['Ketik ‘Sunting’ di bawah.'], ['Ketik ruang Telefon.'], ['Padam nombor lama dan taip nombor baharu.'], ['Ketik ‘Simpan’.']]),
  'g05-speed': L('Tetapkan dail pantas untuk memanggil dengan menahan satu digit pada pad kekunci.', [
    PHONE, ['Ketik ‘Pad kekunci’ di bawah.'], ['Ketik tiga titik (Lagi pilihan) di kanan atas.'], ['Ketik ‘Nombor dail pantas’.'], ['Ketik digit ‘2’.', 'Pilih mana-mana digit yang kosong.'],
    ['Pilih orang itu daripada kenalan.'], ['Sentuh dan tahan ‘2’ pada pad kekunci untuk memanggil.', 'Cuba tahan ‘2’ dalam gambar latihan.']]),
  'g05-share': L('Hantar butiran kenalan kepada orang lain melalui mesej.', [
    CONTACTS, ['Ketik nama orang yang ingin dikongsi.'], ['Ketik ‘Kongsi’ di bawah.'], ['Ketik ‘Mesej’.'], ['Pilih penerima.'], ['Ketik butang Hantar.']]),
  'g06-send': L('Hantar mesej teks dan balas mesej dalam aplikasi Mesej.', [
    MESSAGES, ['Ketik perbualan yang ingin dibalas.', 'Untuk mesej baharu, ketik butang Mula sembang di kanan bawah.'], ['Ketik ruang mesej di bawah.'], ['Taip mesej anda.'], ['Ketik butang Hantar di kanan.']]),
  'g06-type': L('Taip huruf, nombor dan simbol, dan tukar bahasa pada Papan Kekunci Samsung.', [
    ['Taip ‘Helo’ pada papan kekunci.'], ['Untuk nombor atau simbol, ketik ‘!#1’.'], ['Untuk kembali ke huruf, ketik ‘ABC’ di tempat yang sama.'],
    ['Untuk menaip dalam bahasa lain, leret bar ruang ke kiri atau kanan.', 'Hanya bahasa yang ditambah dalam tetapan papan kekunci akan muncul.']]),
  'g06-fix': L('Betulkan salah taip dengan kekunci padam dan menggerakkan kursor.', [
    ['Ketik kekunci padam (⌫) sekali.', 'Huruf betul-betul sebelum kursor dipadam.'], ['Taip huruf yang betul.'], ['Untuk membetulkan huruf di tengah, ketik tempat itu.', 'Kursor (garis yang berkelip) berpindah ke situ.']]),
  'g06-copy': L('Salin teks dan tampal di tempat lain.', [['Sentuh dan tahan teks yang ingin disalin.'], ['Ketik ‘Salin’.'], ['Sentuh dan tahan ruang untuk menampal.'], ['Ketik ‘Tampal’.']]),
  'g06-photo': L('Lampirkan foto dari Galeri pada mesej teks.', [
    MESSAGES, ['Ketik perbualan untuk menghantar foto.'], ['Ketik ‘+’ di kiri ruang mesej.'], ['Ketik ‘Galeri’.'], ['Ketik foto yang ingin dihantar.'], ['Ketik butang Hantar.']]),
  'g06-translate': L('Terjemah perbualan dalam Mesej dengan alat Galaxy AI pada papan kekunci.', [
    MESSAGES, ['Ketik perbualan yang ingin diterjemah.'], ['Ketik ruang mesej di bawah.'], ['Ketik ikon Galaxy AI di kiri atas papan kekunci.'], ['Ketik ‘Terjemahan sembang’.'], ['Pilih bahasa dalam kotak di atas.']]),
  'g07-noti': L('Buka panel pemberitahuan, baca satu dan kosongkan semuanya.', [
    ['Leret ke bawah dari bahagian atas kiri skrin.', 'Panel pemberitahuan terbuka.'], ['Ketik pemberitahuan yang ingin dibaca.', 'Aplikasinya akan dibuka.'],
    ['Leret ke bawah dari bahagian atas kiri skrin.', 'Panel pemberitahuan terbuka.'], ['Ketik ‘Kosongkan’.', 'Semua pemberitahuan dibuang.']]),
  'g07-appnoti': L('Matikan pemberitahuan aplikasi yang tidak diperlukan.', [
    ...settings('Pemberitahuan', 'Pemberitahuan aplikasi'), ['Ketik suis aplikasi untuk mematikan pemberitahuannya.', 'Biarkan pemberitahuan aplikasi mesej penting hidup.']]),
  'g07-quick': L('Buka panel tetapan pantas dan kenali butangnya.', [
    QUICK, ['Lihat butang pada panel.', 'Butang biru sedang hidup. Ketik butang untuk menghidupkan atau mematikan.'], ['Sentuh dan tahan butang ‘Wi-Fi’.', 'Menahan membuka tetapan terperinci.'],
    ['Leret ke atas untuk menutup panel.']]),
  'g07-flash': L('Hidupkan dan matikan lampu suluh dari panel tetapan pantas.', [QUICK, ['Ketik ‘Lampu suluh’.', 'Lampu di belakang telefon menyala.'], ['Untuk mematikan, ketik ‘Lampu suluh’ sekali lagi.']]),
  'g07-rotate': L('Pilih sama ada skrin berputar apabila telefon dipusingkan ke sisi.', [
    QUICK, ['Ketik ‘Autoputar’.', 'Jika hidup, skrin berputar bersama telefon. Jika mati, ia kekal tegak.'], ['Pusingkan telefon ke sisi untuk mencuba.']]),
  'g07-dnd': L('Senyapkan panggilan dan makluman dengan Jangan ganggu, dan guna Mod pesawat dalam pesawat.', [
    QUICK, ['Ketik ‘Jangan ganggu’.', 'Panggilan dan pemberitahuan tidak berbunyi. Ketik lagi untuk mematikan.'], ['Ketik ‘Jangan ganggu’ sekali lagi untuk mematikannya.'],
    ['Ketik ‘Mod pesawat’.', 'Panggilan dan Internet diputuskan. Gunakan dalam pesawat.'], ['Selepas turun dari pesawat, ketik lagi untuk mematikannya.']]),
  'g08-wifi': L('Sambungkan Galaxy anda ke Wi-Fi dalam Tetapan → Sambungan → Wi-Fi.', [
    ...settings('Sambungan', 'Wi-Fi'), ['Ketik suis ‘Wi-Fi’ untuk menghidupkannya.', 'Senarai Wi-Fi berdekatan muncul.'], ['Ketik nama Wi-Fi.', 'Ikon mangga bermaksud perlu kata laluan.'],
    ['Taip kata laluan Wi-Fi.', 'Biasanya tertulis di belakang penghala.'], ['Ketik ‘Sambung’.']]),
  'g08-data': L('Hidupkan atau matikan data mudah alih dalam Tetapan → Sambungan → Penggunaan data.', [
    ...settings('Sambungan', 'Penggunaan data'), ['Ketik suis ‘Data mudah alih’ untuk menghidupkannya.', 'Jika dimatikan, Internet hanya melalui Wi-Fi.']]),
  'g08-usage': L('Lihat berapa banyak data mudah alih digunakan bulan ini dan aplikasi mana paling banyak.', [
    ...settings('Sambungan', 'Penggunaan data'), ['Ketik ‘Penggunaan data mudah alih’.'],
    ['Semak berapa banyak digunakan bulan ini.', 'Aplikasi yang paling banyak guna di atas. Aplikasi pembawa anda menunjukkan baki.']]),
  'g08-bt': L('Pasangkan fon telinga Bluetooth dengan Galaxy anda.', [
    ['Hidupkan fon telinga dalam mod berpasangan.'], ...settings('Sambungan', 'Bluetooth'), ['Ketik suis ‘Bluetooth’ untuk menghidupkannya.'], ['Ketik nama fon telinga anda dalam senarai.'], ['Ketik ‘Sambung’.']]),
  'g08-hotspot': L('Kongsi sambungan Internet telefon dengan peranti lain menggunakan Tempat Liputan Mudah Alih.', [
    ...settings('Sambungan', 'Tempat Liputan Mudah Alih dan Penambatan', 'Tempat Liputan Mudah Alih'), ['Ketik suis ‘Tempat Liputan Mudah Alih’ untuk menghidupkannya.', '', 'Mungkin ada caj tambahan. Semak pelan anda dahulu.'],
    ['Pada peranti lain, pilih nama telefon anda dalam senarai Wi-Fi.']]),
  'g08-location': L('Cari suis Lokasi dan NFC dalam Tetapan.', [
    ...settings('Lokasi'), ['Ketik suis ‘Lokasi’ untuk menghidupkannya.', 'Aplikasi peta dan cuaca tahu di mana anda berada.'], BACK, item('Sambungan'),
    ['Ketik suis ‘NFC dan pembayaran tanpa sentuh’ untuk menghidupkannya.', 'Hidupkan untuk membayar atau menggunakan kad pengangkutan dengan telefon.']]),
  'g09-search': L('Cari di web dengan pelayar Samsung Internet.', [
    [...open('Samsung Internet'), 'Bergantung pada versi, aplikasi ini dinamakan ‘Samsung Internet’ atau ‘Pelayar’.'], ['Ketik bar alamat di atas.'], ['Taip apa yang ingin dicari.'],
    ['Ketik kekunci Pergi (↵) di kanan bawah papan kekunci.'], ['Ketik hasil carian yang ingin dibaca.']]),
  'g09-bookmark': L('Simpan halaman yang kerap dilawati sebagai penanda halaman dan buka kemudian.', [
    open('Samsung Internet'), ['Ketik bintang (☆) di kanan bar alamat.', 'Halaman yang dibuka disimpan dalam penanda halaman.'], ['Untuk membukanya kemudian, ketik bintang (Penanda halaman) di bawah.'], ['Ketik halaman yang disimpan.']]),
  'g09-qr': L('Buka kod QR dengan kamera Galaxy.', [
    CAMERA, ['Halakan kamera ke kod QR.', 'Dalam mod Foto, letakkan kod di tengah skrin.'], ['Ketik pautan kuning yang muncul.', 'Berhati-hati dengan kod QR dari tempat yang tidak dikenali.']]),
  'g09-files': L('Cari fail yang dimuat turun dalam aplikasi Fail Saya.', [open('Fail Saya'), ['Ketik ‘Muat turun’.'], ['Ketik fail yang ingin dibuka.']]),
  'g09-stores': L('Ketahui beza Google Play Store dan Samsung Galaxy Store.', [
    open('Play Store'), ['Ini kedai aplikasi Google, tempat mencari dan memuat turun aplikasi.', 'Perlu log masuk dengan akaun Google.'], HOME_BTN, open('Galaxy Store'),
    ['Ini kedai aplikasi Samsung, dengan banyak aplikasi dan tema Samsung.']]),
  'g09-install': L('Pasang aplikasi dari Play Store, kemas kini aplikasi di Galaxy Store dan nyahpasang aplikasi.', [
    open('Play Store'), ['Ketik bar carian di atas.'], ['Taip nama aplikasi.'], ['Ketik ‘Pasang’ di sebelah nama aplikasi.'], ['Ketik aplikasi ‘Galaxy Store’.', 'Sekarang kita kemas kini aplikasi.'],
    ['Ketik ‘Menu’ di bawah.'], ['Ketik ‘Kemas kini’.'], ['Ketik ‘Kemas kini semua’.'], ['Pada skrin Utama, sentuh dan tahan aplikasi yang ingin dibuang.'], ['Ketik ‘Nyahpasang’.'],
    ['Ketik ‘OK’.', 'Aplikasi yang dibuang boleh dipasang semula dari kedai.']]),
  'g09-google': L('Cari aplikasi Google dan aplikasi pembawa dengan carian di skrin Aplikasi.', [
    ['Leret ke atas pada skrin Utama untuk membuka skrin Aplikasi.'], ['Ketik ‘Cari’ di atas.'], ['Taip nama aplikasi.', 'Cuba Google, YouTube atau nama pembawa mudah alih anda.'], ['Ketik aplikasi yang ditemui.']]),
  'g10-open': L('Buka aplikasi Kamera dan cari butang pengatup.', [CAMERA, ['Semak sama ada skrin kamera muncul.', 'Bulatan putih di tengah bawah ialah butang pengatup.']]),
  'g10-focus': L('Ketik skrin untuk fokus sebelum mengambil foto.', [
    CAMERA, ['Ketik bahagian skrin yang ingin dijelaskan.', 'Apabila bulatan kuning muncul, fokus sudah tepat.'], ['Ketik butang pengatup putih.', 'Jika foto kabur, lap kanta dengan kain lembut.']]),
  'g10-switch': L('Bertukar antara kamera belakang dan kamera hadapan (swafoto).', [
    CAMERA, ['Ketik anak panah membulat di kanan bawah.', 'Meleret ke atas atau bawah juga menukar kamera.'], ['Semak sama ada kamera hadapan menunjukkan wajah anda.']]),
  'g10-selfie': L('Ambil swafoto dengan kamera hadapan.', [CAMERA, ['Ketik anak panah membulat di kanan bawah.'], ['Pegang telefon supaya wajah anda di tengah skrin.'], SHUTTER]),
  'g10-zoom': L('Zum objek yang jauh semasa mengambil foto.', [
    CAMERA, ['Ketik nombor ‘3’ di bawah.', 'Objek jauh kelihatan 3 kali lebih besar. Ketik ‘1x’ untuk kembali.', 'Nombor berbeza mengikut model (model Ultra boleh zum lebih jauh).'], SHUTTER]),
  'g10-timer': L('Guna pemasa kamera supaya foto diambil beberapa saat kemudian.', [
    CAMERA, ['Ketik ikon Kawalan pantas (⌄) di atas.'], ['Ketik ikon pemasa.'], ['Ketik ‘5 saat’.'], SHUTTER, ['Foto diambil selepas kiraan detik.']]),
  'g10-modes': L('Cuba mod Potret untuk latar kabur dan mod Malam untuk tempat gelap.', [
    CAMERA, ['Ketik ‘Potret’ di bawah.', 'Orang itu jelas dan latar kabur.'], SHUTTER, ['Ketik ‘Lagi’ di bawah.'],
    ['Ketik ‘Malam’.', 'Di tempat gelap, foto terang tanpa denyar. Pegang telefon tetap semasa mengambil foto.']]),
  'g10-video': L('Rakam video dengan kamera Galaxy.', [CAMERA, ['Ketik ‘Video’ di bawah.'], ['Ketik butang rakam merah.'], ['Apabila selesai, ketik butang berhenti.']]),
  'g10-capture': L('Ambil tangkapan skrin dengan dua butang dan rakam skrin dari tetapan pantas.', [
    ['Tekan sekejap butang Sisi dan Kelantangan turun serentak.', 'Dengan bunyi klik, skrin disimpan sebagai gambar. Lihat dalam Galeri.'], QUICK,
    ['Ketik ‘Perakam skrin’.', 'Jika tidak kelihatan, leret panel ke bawah sekali lagi.'], ['Ketik ‘Mula merakam’.'], ['Untuk berhenti, ketik ikon berhenti di bahagian atas skrin.']]),
  'g11-latest': L('Cari dalam Galeri foto yang baru anda ambil.', [GALLERY, ['Ketik foto pertama (kiri atas).', 'Foto terbaharu sentiasa di hadapan.'], ['Leret ke kiri untuk melihat foto seterusnya.']]),
  'g11-album': L('Cipta album baharu dalam Galeri untuk mengumpulkan foto.', [
    GALLERY, ['Ketik ‘Album’ di bawah.'], ['Ketik ‘+’ (Tambah) di atas.'], ['Ketik ‘Album’.'], ['Taip nama album.'], ['Ketik ‘Cipta’.', 'Kemudian pilih foto untuk dimasukkan.']]),
  'g11-edit': L('Pangkas foto dan cerahkannya dalam Galeri.', [
    GALLERY, ['Ketik foto yang ingin disunting.'], ['Ketik pensel (Sunting) di bawah.'], ['Seret sudut foto ke dalam untuk memangkas.'], ['Ketik ‘Ton’ di bawah.'], ['Seret bar kecerahan ke kanan.'], ['Ketik ‘Simpan’.']]),
  'g11-text': L('Salin teks daripada foto dalam Galeri dan tampal dalam mesej atau nota.', [
    GALLERY, ['Ketik foto yang mempunyai teks.'], ['Ketik ikon ‘T’ kuning.', 'Ia hanya muncul jika foto mengandungi teks.'], ['Sentuh dan tahan teks yang ingin disalin.'],
    ['Ketik ‘Salin’.', 'Anda boleh menampalnya dalam mesej atau nota.']]),
  'g11-multi': L('Pilih beberapa foto dalam Galeri dan kongsi sekali gus.', [
    GALLERY, ['Sentuh dan tahan salah satu foto yang ingin dihantar.'], ['Ketik foto lain untuk dihantar bersama.', 'Tanda dalam bulatan bermaksud foto dipilih.'], ['Ketik ‘Kongsi’ di bawah.'],
    ['Ketik aplikasi untuk menghantar (contohnya Mesej).'], ['Pilih penerima dan hantar.']]),
  'g11-restore': L('Pulihkan foto yang dipadam dari Tong Kitar Semula Galeri.', [
    GALLERY, ['Ketik ‘Menu’ di bawah.'], ['Ketik ‘Tong kitar semula’.'], ['Ketik foto yang ingin dipulihkan.', 'Foto yang dipadam kekal seketika dalam Tong kitar semula.'], ['Ketik ‘Pulihkan’.']]),
  'g11-docs': L('Cari dokumen yang disimpan pada telefon dengan aplikasi Fail Saya.', [open('Fail Saya'), ['Ketik ‘Dokumen’.'], ['Ketik dokumen yang ingin dibuka.']]),
  'g11-quickshare': L('Hantar foto ke telefon berdekatan dengan Quick Share.', [
    GALLERY, ['Ketik foto yang ingin dihantar.'], ['Ketik ‘Kongsi’ di bawah.'],
    ['Ketik ‘Quick Share’.', '', 'Telefon penerima juga perlu menghidupkan Quick Share (Tetapan → Peranti bersambung → Quick Share).'], ['Ketik nama telefon penerima.'], ['Pada telefon penerima, ketik ‘Terima’.']]),
  'g12-addapp': L('Letakkan aplikasi dari skrin Aplikasi ke skrin Utama.', [
    ['Leret ke atas pada skrin Utama untuk membuka skrin Aplikasi.'], ['Sentuh dan tahan aplikasi yang diingini.'], ['Ketik ‘Tambah ke Utama’.']]),
  'g12-folder': L('Kumpulkan aplikasi dalam folder dan tambah widget cuaca pada skrin Utama.', [
    ['Sentuh dan tahan aplikasi di skrin Utama dan seret ke atas aplikasi lain.', 'Folder dengan kedua-dua aplikasi dicipta.'], ['Ketik nama folder dan taip nama.'],
    ['Sentuh dan tahan ruang kosong di skrin Utama.'], ['Ketik ‘Widget’.'], ['Ketik ‘Cuaca’.'], ['Ketik ‘Tambah’.']]),
  'g12-wallpaper': L('Gunakan foto anda sebagai kertas dinding skrin kunci atau skrin Utama.', [
    ...settings('Kertas dinding dan gaya'), ['Ketik ‘Tukar kertas dinding’.'], ['Untuk foto sendiri, ketik ‘Galeri’.'], ['Ketik foto yang ingin digunakan.'], ['Pilih skrin kunci, skrin Utama atau kedua-duanya.'], ['Ketik ‘Selesai’.']]),
  'g12-alarm': L('Tetapkan penggera dan mulakan pemasa dalam aplikasi Jam.', [
    open('Jam'), ['Ketik ‘Penggera’ di bawah.'], ['Ketik ‘+’ di kanan bawah.'], ['Leret nombor ke atas atau bawah untuk menetapkan masa.'], ['Ketik ‘Simpan’.'],
    ['Untuk pemasa, ketik ‘Pemasa’ di bawah.'], ['Tetapkan masa dan ketik ‘Mula’.']]),
  'g12-calendar': L('Tambah janji temu dalam aplikasi Kalendar.', [
    open('Kalendar'), ['Ketik ‘+’ (Tambah acara) di kanan bawah.'], ['Ketik ruang Tajuk.'], ['Taip nama janji temu.'], ['Ketik ‘Mula’ untuk memilih tarikh dan masa.'], ['Ketik ‘Simpan’.']]),
  'g12-reminder': L('Dapatkan peringatan tugasan dengan menambah makluman pada acara kalendar.', [
    open('Kalendar'), ['Ketik ‘+’ (Tambah acara) di kanan bawah.'], ['Taip tugasan sebagai tajuk.'], ['Ketik ‘Peringatan’.'], ['Ketik bila mahu diingatkan (contohnya 10 minit sebelum).'],
    ['Ketik ‘Simpan’.', 'Peringatan datang pada masa yang dipilih.']]),
  'g12-note': L('Tulis nota pantas dalam Samsung Notes.', [
    open('Samsung Notes'), ['Ketik ‘+’ di kanan bawah.'], ['Tulis apa yang ingin dicatat.'], ['Apabila selesai, ketik butang Kembali.', 'Nota disimpan secara automatik.']]),
  'g12-recorder': L('Rakam suara anda dengan aplikasi Perakam Suara.', [
    open('Perakam Suara'), ['Ketik butang Rakam.'], ['Bercakap ke arah telefon.'], ['Ketik ‘Berhenti’.', 'Rakaman disimpan dalam senarai.']]),
  'g12-tools': L('Lihat cuaca, guna kalkulator dan dengar radio.', [
    open('Cuaca'), ['Lihat cuaca dan suhu hari ini.', 'Lokasi mesti dihidupkan untuk melihat cuaca di tempat anda.'], HOME_BTN, open('Kalkulator'), ['Ketik nombor, + dan = untuk mengira.'],
    ['Ketik aplikasi ‘Radio’.', 'Radio memerlukan fon telinga berwayar yang berfungsi sebagai antena.', 'Sesetengah model dan pembawa tiada aplikasi Radio.']]),
  'x13-gmail': L('Hantar foto kepada keluarga melalui e-mel dengan aplikasi Gmail.', [
    open('Gmail'), ['Ketik ‘Karang’ di kanan bawah.'], ['Taip alamat e-mel orang itu dalam ruang ‘Kepada’.'], ['Ketik klip kertas (Lampirkan) di atas.'],
    ['Ketik foto yang ingin dihantar.', 'Anda boleh mengetik lebih daripada satu foto.'], ['Taip subjek ringkas.'], ['Ketik butang Hantar (kapal terbang kertas) di atas.']], { check: CHECK }),
  'x13-video': L('Hantar video dari Galeri kepada ahli keluarga dengan aplikasi Mesej.', [
    GALLERY, ['Ketik video yang ingin dihantar.'], ['Ketik ‘Kongsi’ di bawah.'], ['Ketik ‘Mesej’.'], ['Pilih penerima.'],
    ['Ketik butang Hantar.', '', 'Video panjang mungkin terlalu besar untuk mesej. Gunakan Quick Share atau e-mel.']], { check: CHECK }),
  'x13-meet': L('Buat panggilan video kepada keluarga dengan aplikasi Google Meet.', [
    open('Meet'), ['Ketik ‘Baharu’.'], ['Ketik nama orang yang ingin dipanggil.', 'Orang itu juga perlu Google Meet atau akaun Google.'], ['Ketik butang panggilan video.'], ['Selepas selesai, ketik butang tamat merah.']], { check: CHECK }),
  'g14-open': L('Buka Samsung Wallet dan lihat kad serta menunya.', [
    ['Ketik aplikasi ‘Samsung Wallet’.', 'Ia juga boleh dibuka dengan meleret ke atas gambar kad di bawah skrin.'],
    ['Lihat kad yang disimpan dan menunya.', 'Kali pertama, belum ada kad. Pelajaran seterusnya menunjukkan skrin tambah kad.']]),
  'g14-add': L('Lihat skrin untuk menambah kad pembayaran ke Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['Ketik ‘+’ (Tambah) di atas.'], ['Lihat apa yang boleh ditambah.', 'Kad pembayaran, kad pengangkutan dan lain-lain, bergantung pada negara.'], ['Ketik ‘Kad pembayaran’.'],
    ['Baca arahan untuk menambah kad.']]),
  'g14-pay': L('Pilih kad dalam Samsung Wallet dan bayar dengan mendekatkan telefon ke terminal.', [
    [...open('Samsung Wallet'), REAL], ['Ketik kad untuk membayar.'], ['Guna cap jari atau masukkan PIN pembayaran.'], ['Dekatkan bahagian belakang telefon ke terminal kad.']]),
  'g15-pin': L('Lindungi telefon dengan kunci skrin PIN.', [
    [...open('Tetapan'), REAL], ...sub('Skrin kunci dan AOD', 'Kunci skrin dan biometrik'), ['Ketik ‘Jenis kunci skrin’.'], ['Ketik ‘PIN’.'],
    ['Taip sekurang-kurangnya 4 digit yang mudah anda ingat.', 'Elakkan nombor mudah diteka seperti tarikh lahir atau nombor telefon.'], ['Taip digit yang sama sekali lagi untuk mengesahkan.']]),
  'g15-bio': L('Daftar cap jari dan, jika mahu, wajah anda untuk membuka kunci.', [
    [...open('Tetapan'), REAL], ...sub('Keselamatan dan privasi', 'Kunci skrin dan biometrik'), ['Ketik ‘Cap jari’.'], ['Masukkan PIN anda.', 'Jika tiada PIN, cipta dahulu.'],
    ['Letak dan angkat jari pada tanda cap jari di bawah skrin berulang kali.', 'Gunakan jari yang kerap digunakan dan alihkan sedikit setiap kali.'], ['Untuk menambah wajah, ketik ‘Pengecaman wajah’ pada skrin yang sama.']]),
  'g15-perm': L('Lihat aplikasi mana yang menggunakan lokasi, kamera atau mikrofon dan buang akses yang tidak perlu.', [
    ...settings('Keselamatan dan privasi', 'Kebenaran digunakan dalam 24 jam terakhir'), ['Lihat aplikasi mana yang menggunakan lokasi, kamera atau mikrofon.'], ['Ketik ‘Lokasi’.'],
    ['Jika ada aplikasi yang tidak dikenali, tukar kepada ‘Jangan benarkan’.']]),
  'g15-folder': L('Cari Folder Selamat dan Samsung Pass dalam Tetapan.', [
    ...settings('Keselamatan dan privasi', 'Lagi tetapan keselamatan'), ['Ketik ‘Folder Selamat’.'], ['Baca maklumat tentang Folder Selamat.'], BACK,
    ['Ketik ‘Kata laluan, kunci laluan dan autoisi’.', 'Samsung Pass ada di sini. Ia membantu log masuk dengan cap jari.']]),
  'g15-medical': L('Tambah maklumat perubatan dan kenalan kecemasan yang membantu semasa kecemasan.', [
    ...settings('Keselamatan dan kecemasan', 'Maklumat perubatan'), ['Taip nama, jenis darah, ubat dan alahan anda.'], BACK, ['Ketik ‘Kenalan kecemasan’.'], ['Tambah ahli keluarga sebagai kenalan.']]),
  'g15-sos': L('Lihat cara SOS kecemasan berfungsi tanpa membuat panggilan.', [
    [...open('Tetapan'), 'Jika butang benar-benar ditekan, panggilan kecemasan akan dibuat. Dalam pelajaran ini, lihat skrin sahaja.'], ...sub('Keselamatan dan kecemasan', 'SOS kecemasan'),
    ['Baca berapa kali butang Sisi perlu ditekan untuk memanggil.', 'Menekan butang Sisi seperti yang dinyatakan akan memanggil nombor yang ditetapkan.']]),
  'g15-find': L('Hidupkan tetapan yang membolehkan telefon ditemui dengan Samsung Find jika hilang.', [
    ...settings('Keselamatan dan privasi', 'Perlindungan peranti hilang', 'Cari Telefon Saya'),
    ['Ketik suis ‘Benarkan telefon ini ditemui’ untuk menghidupkannya.', 'Anda mesti log masuk ke akaun Samsung.'], ['Jika telefon hilang, buka smartthingsfind.samsung.com pada peranti lain.']]),
  'g16-setup': L('Sediakan Galaxy baharu kali pertama.', [
    ['Tekan dan tahan butang Sisi untuk menghidupkan telefon.'], ['Semak bahasa dan ketik ‘Mula’.'], ['Pilih Wi-Fi dan sambung.'], ['Seterusnya ikut arahan di skrin dan ketik ‘Seterusnya’.']]),
  'g16-sim': L('Kenali kad SIM dan eSIM, dan lihat nombor anda dalam Pengurus SIM.', [
    ['SIM (Nano-SIM) ialah kad kecil daripada pembawa mudah alih.'], ['eSIM ialah SIM yang dimuat turun ke telefon, tanpa kad.', '', 'Sokongan eSIM dan dua nombor bergantung pada model dan pembawa.'],
    ...settings('Sambungan', 'Pengurus SIM'), ['Semak sama ada nombor dan pembawa anda muncul.']]),
  'g16-account': L('Pastikan telefon telah log masuk ke akaun Samsung dan akaun Google.', [
    ...settings('Akaun dan sandaran', 'Urus akaun'), ['Semak ada akaun Samsung dan akaun Google.', 'Akaun diperlukan untuk sandaran, memasang aplikasi dan mencari telefon. Catat ID dan kata laluan.']]),
  'g16-switch': L('Pindahkan kenalan, foto dan lain-lain ke Galaxy baharu dengan Smart Switch.', [
    ...settings('Akaun dan sandaran', 'Bawa data dari peranti lama'), ['Pada telefon baharu, pilih ‘Terima data’.'], ['Letakkan kedua-dua telefon berdekatan dan ikut arahan.']]),
  'g16-backup': L('Semak bila telefon kali terakhir disandarkan ke Samsung Cloud.', [...settings('Akaun dan sandaran', 'Samsung Cloud'), ['Lihat tarikh sandaran terakhir.']]),
  'g16-restore': L('Pulihkan data daripada sandaran Samsung Cloud.', [
    ...settings('Akaun dan sandaran', 'Samsung Cloud'), ['Ketik ‘Pulihkan data’.'], ['Pilih peranti dan kandungannya.'], ['Ketik ‘Pulihkan’.']]),
  'g17-magnify': L('Hidupkan pintasan pembesaran dan besarkan sebahagian skrin dengan ketik tiga kali.', [
    ...settings('Kebolehcapaian', 'Peningkatan penglihatan', 'Pembesaran'), ['Ketik ‘Pintasan pembesaran’.'], ['Ketik suis ‘Pintasan pembesaran’ untuk menghidupkannya.'],
    ['Ketik ‘Ketik skrin tiga kali’.'], ['Ketik pantas tiga kali di tempat yang ingin dibesarkan.']]),
  'g17-contrast': L('Hidupkan fon kontras tinggi supaya teks lebih menonjol daripada latar.', [
    ...settings('Kebolehcapaian', 'Peningkatan penglihatan'), ['Ketik suis ‘Fon kontras tinggi’ untuk menghidupkannya.', 'Huruf mendapat garis tepi lebih gelap dan lebih menonjol.']]),
  'g17-talkback': L('Hidupkan TalkBack supaya skrin dibacakan, selepas belajar cara mematikannya.', [
    [...open('Tetapan'), 'Apabila TalkBack hidup, cara mengetik berubah. Baca cara mematikannya dahulu.'], ...sub('Kebolehcapaian', 'TalkBack'), ['Baca cara mematikannya dahulu.'],
    ['Ketik suis ‘TalkBack’ untuk menghidupkannya.', 'Selepas itu, satu ketikan membacakan dan dua ketikan membuka.']]),
  'g17-caption': L('Hidupkan Kapsyen Langsung untuk video dan Audio mono untuk mendengar dengan satu telinga.', [
    ...settings('Kebolehcapaian', 'Peningkatan pendengaran'), ['Ketik ‘Kapsyen Langsung’.'], ['Ketik suis ‘Gunakan Kapsyen Langsung’ untuk menghidupkannya.', 'Percakapan dalam video dipaparkan sebagai teks.'], BACK,
    ['Ketik suis ‘Audio mono’ untuk menghidupkannya.', 'Anda mendengar kedua-dua belah walaupun dengan satu telinga.']]),
  'g17-hearing': L('Hidupkan keserasian alat bantu pendengaran supaya panggilan lebih jelas.', [
    ...settings('Kebolehcapaian', 'Peningkatan pendengaran', 'Sokongan alat bantu pendengaran'),
    ['Ketik suis ‘Keserasian alat bantu pendengaran’ untuk menghidupkannya.', 'Panggilan lebih jelas dengan alat bantu pendengaran.'], ['Sambungkan alat bantu pendengaran Bluetooth dalam menu Bluetooth.']]),
  'g17-touch': L('Permudah sentuhan: jawab dengan satu ketikan, tukar lengah sentuh dan tahan, dan tetapkan pintasan kebolehcapaian.', [
    ...settings('Kebolehcapaian', 'Interaksi dan ketangkasan'), ['Ketik suis ‘Mod satu ketikan’ untuk menghidupkannya.', 'Anda boleh menjawab panggilan dengan satu ketikan, bukan meleret.'],
    ['Ketik ‘Lengah sentuh dan tahan’.', 'Jika sukar menahan, panjangkan masanya.'], ['Pilih masa yang diingini.'], ['Ketik butang Kembali dua kali.'],
    ['Ketik ‘Pintasan kebolehcapaian’.', 'Ciri kebolehcapaian yang kerap digunakan boleh dihidupkan dengan satu butang.']]),
  'g18-usage': L('Ketahui aplikasi mana paling banyak menggunakan bateri.', [
    ...settings('Bateri', 'Penggunaan harian'), ['Lihat aplikasi yang paling banyak menggunakan bateri.', 'Jika aplikasi yang jarang digunakan banyak guna bateri, tutup atau buangnya.']]),
  'g18-saver': L('Hidupkan Penjimatan kuasa supaya bateri tahan lebih lama.', [
    ...settings('Bateri'), ['Ketik suis ‘Penjimatan kuasa’ untuk menghidupkannya.', 'Bateri tahan lebih lama. Sesetengah pemberitahuan mungkin lewat.', 'Ia juga boleh dihidupkan dengan butang ‘Penjimatan kuasa’ dalam tetapan pantas.']]),
  'g18-storage': L('Semak baki ruang storan pada telefon.', [
    ...settings('Penjagaan peranti', 'Storan'), ['Semak baki ruang.', 'Mengosongkan tong kitar semula dan memadam fail pendua menambah ruang.']]),
  'g18-clean': L('Cari dan padam fail besar yang tidak diperlukan lagi dalam Fail Saya.', [
    open('Fail Saya'), ['Ketik ‘Urus storan’.'], ['Ketik ‘Fail besar’.'], ['Pilih hanya fail yang tidak diperlukan dan ketik ‘Padam’.']]),
  'g18-care': L('Semak dan kemaskan telefon dengan Penjagaan peranti.', [...settings('Penjagaan peranti'), ['Ketik ‘Optimumkan sekarang’.', 'Ia menutup aplikasi yang tidak digunakan dan menyemak telefon.']]),
  'g18-update': L('Semak dan pasang kemas kini perisian pada Galaxy anda.', [
    ...settings('Kemas kini perisian'), ['Ketik ‘Muat turun dan pasang’.', 'Jika ada versi baharu, ia dimuat turun dan dipasang. Lakukan dengan Wi-Fi dan semasa mengecas.']]),
  'g18-version': L('Cari nama model dan versi One UI dalam Tetapan → Perihal telefon.', [
    ...settings('Perihal telefon'), ['Semak nama model di atas.'], ['Ketik ‘Maklumat perisian’.'], ['Semak ‘Versi One UI’.', 'Beritahu pusat servis bersama nama model.']]),
  'g19-bixby': L('Tetapkan butang Sisi untuk memanggil Bixby dan minta bantuan dengan suara.', [
    ...settings('Ciri lanjutan', 'Butang sisi'), ['Ketik ‘Bangunkan Bixby’.', 'Kini menahan butang Sisi akan membuka Bixby.'],
    ['Tekan dan tahan butang Sisi dan sebut apa yang anda mahu.', 'Contoh: “Tetapkan penggera pukul 7 pagi esok.”'], ['Lepaskan butang selepas selesai bercakap.']]),
  'g19-circle': L('Cari sesuatu di skrin dengan membulatkannya menggunakan Bulatkan untuk Cari.', [
    ['Sentuh dan tahan butang Utama di bawah skrin.'], ['Lukis bulatan dengan jari di sekeliling perkara yang ingin dicari.'],
    ['Baca hasil carian di bawah.', '', 'Bixby Vision tersedia pada siri Galaxy S25, S24 dan S23. S26 menggunakan cara ini (Bulatkan untuk Cari).']]),
  'g19-interpret': L('Hidupkan Terjemahan Langsung dalam aplikasi Telefon dan gunakan semasa panggilan.', [
    open('Telefon'), ['Ketik tiga titik di kanan atas.'], ['Ketik ‘Tetapan’.'], ['Ketik ‘Terjemahan Langsung’.'], ['Ketik suis ‘Terjemahan Langsung’ untuk menghidupkannya.'],
    ['Semasa panggilan, ketik ‘Pembantu panggilan’.'], ['Ketik ‘Terjemahan Langsung’.']]),
  'g19-write': L('Betulkan ejaan dan tatabahasa mesej dengan alat Galaxy AI pada papan kekunci.', [
    open('Mesej'), ['Ketik satu perbualan.'], ['Taip mesej anda.'], ['Ketik ikon Galaxy AI di kiri atas papan kekunci.'], ['Ketik ‘Ejaan dan tatabahasa’.', 'Kesilapan dibetulkan. ‘Ringkaskan’ memendekkan teks panjang.']]),
  'g19-transcribe': L('Tukar rakaman suara kepada teks dengan Galaxy AI dalam Perakam Suara.', [
    open('Perakam Suara'), ['Ketik rakaman yang ingin ditukar kepada teks.'], AI_ICON, ['Ketik ‘Transkripsi’.'], ['Baca teks yang dihasilkan.']]),
  'g19-photo': L('Buang orang atau objek daripada foto dengan Galaxy AI dalam Galeri.', [
    GALLERY, ['Ketik foto yang ingin disunting.'], AI_ICON, ['Ketik ‘Pemadam objek’.'], ['Lukis dengan jari di sekeliling orang atau objek yang ingin dibuang.'], ['Ketik ‘Padam’.'], ['Jika suka hasilnya, ketik ‘Simpan’.']]),
  'g19-support': L('Lihat dalam Tetapan ciri Galaxy AI yang disokong oleh telefon anda.', [
    ...settings('Galaxy AI'), ['Lihat senarai ciri AI yang boleh digunakan telefon anda.', 'Ciri yang tiada dalam senarai tidak disokong pada model ini.', 'Sesetengah ciri bergantung pada model dan pembawa, atau memerlukan Internet.']]),
  'g20-smartview': L('Paparkan skrin telefon di TV dengan Smart View.', [
    QUICK, ['Ketik ‘Smart View’.'], ['Ketik nama TV.', 'Berfungsi paling baik jika TV dan telefon menggunakan Wi-Fi yang sama.'], ['Ketik ‘Mula sekarang’.']]),
  'g20-pc': L('Sambungkan Galaxy ke PC Windows dengan Paut ke Windows.', [
    ...settings('Peranti bersambung', 'Paut ke Windows'), ['Baca arahan di skrin.'], ['Pada komputer, buka alamat yang dipaparkan untuk melengkapkan sambungan.']]),
  'g20-dex': L('Ketahui apa itu Samsung DeX dan di mana tetapannya.', [...settings('Peranti bersambung', 'Samsung DeX'), ['Baca maklumat.']]),
  'g20-watch': L('Sambungkan jam atau Buds Galaxy dengan aplikasi Galaxy Wearable.', [
    ['Ketik aplikasi ‘Galaxy Wearable’.', 'Jika tiada di skrin Utama, cari di skrin Aplikasi.'], ['Ketik ‘Mula’.'], ['Ikut arahan di skrin untuk melengkapkan sambungan.']]),
  'g20-smartthings': L('Sambungkan perkakas rumah ke telefon dengan SmartThings.', [
    open('SmartThings'), ['Ketik ‘+’ (Tambah) di atas.'], ['Pilih perkakas yang ingin disambung.'], ['Ikut arahan di skrin untuk melengkapkan sambungan.']]),
  'g20-musicshare': L('Hidupkan Music Share supaya rakan boleh memainkan muzik pada pembesar suara Bluetooth anda.', [
    ...settings('Peranti bersambung', 'Music Share'), ['Ketik suis ‘Music Share’ untuk menghidupkannya.', 'Rakan boleh memainkan muzik dari telefon mereka pada pembesar suara Bluetooth anda.']]),
  'g21-split': L('Gunakan dua aplikasi serentak dengan skrin pisah.', [
    ['Ketik butang Terkini di kiri bawah.'], ['Ketik ikon kecil di atas sebuah aplikasi.'], ['Ketik ‘Buka dalam paparan skrin pisah’.'], ['Pilih aplikasi kedua untuk bahagian bawah.']]),
  'g21-modes': L('Hidupkan mod Tidur dalam Mod dan Rutin.', [
    ...settings('Mod dan Rutin', 'Mod'), ['Ketik ‘Tidur’.'], ['Ketik ‘Hidupkan’.', 'Semasa tidur, pemberitahuan disenyapkan dan skrin menjadi gelap.']]),
  'g21-aod': L('Paparkan jam walaupun skrin padam dengan Always On Display.', [
    ...settings('Skrin kunci dan AOD'), ['Ketik suis ‘Always On Display’ untuk menghidupkannya.', 'Jam kelihatan walaupun skrin padam. Ia menggunakan sedikit lagi bateri.'],
    ['Untuk menukar gaya jam, sentuh dan tahan skrin kunci.']]),
  'g21-wellbeing': L('Lihat berapa lama anda menggunakan telefon hari ini dan tetapkan pemasa aplikasi.', [
    ...settings('Kesejahteraan Digital'), ['Lihat masa penggunaan telefon hari ini.'], ['Ketik ‘Pemasa aplikasi’.', 'Anda boleh menghadkan masa harian setiap aplikasi.']]),
  'g21-apps': L('Kenali Samsung Health, Samsung Kids dan Game Booster.', [
    ['Ketik aplikasi ‘Samsung Health’.', 'Jika tiada di skrin Utama, cari di skrin Aplikasi.'], ['Lihat bilangan langkah dan rekod senaman.'],
    ...settings('Aplikasi', 'Samsung Kids'), ['Ketik ‘Buka’.', 'Anda boleh memilih aplikasi dan had masa untuk cucu.'], ['Semasa bermain permainan, ketik ikon Game Booster di bawah skrin.']]),
  'g21-samsung': L('Cari aplikasi Samsung.com dan Samsung Global Goals, serta Samsung News.', [
    open('Samsung.com'), ['Di sini anda boleh membaca berita produk Samsung dan mendapatkan bantuan.'], HOME_BTN,
    ['Ketik aplikasi ‘Samsung Global Goals’.', 'Cari ‘Samsung Global Goals’ di skrin Aplikasi.'], ['Cari Samsung News dengan carian di skrin Aplikasi.']]),
  'g21-spen': L('Keluarkan S Pen, buka menunya dan cuba PENUP pada model Ultra yang menyokong.', [
    ['Tekan perlahan hujung S Pen di bahagian bawah telefon.'], ['Ketik ciri yang diingini dalam menu.'], open('PENUP'), ['Selepas selesai, tolak S Pen masuk sehingga berbunyi klik.']]),
  'g22-ring': L('Perkara yang perlu disemak apabila telefon tidak berdering.', [
    QUICK, ['Ketik butang ‘Bunyi’.', 'Jika ditetapkan kepada Senyap atau Getar, ketik untuk menukar kepada Bunyi.'], ['Jika ‘Jangan ganggu’ berwarna biru (hidup), ketik untuk mematikannya.'],
    ['Tekan butang Kelantangan naik di sisi untuk menguatkan bunyi.']]),
  'g22-network': L('Perkara yang perlu disemak apabila panggilan atau Internet tidak berfungsi.', [
    QUICK, ['Jika ‘Mod pesawat’ hidup, ketik untuk mematikannya.'], ['Jika ‘Data mudah alih’ mati, ketik untuk menghidupkannya.'], ['Jika isyarat lemah, cuba berpindah tempat.'],
    ['Jika masih tidak berfungsi, mulakan semula telefon.']]),
  'g22-charge': L('Perkara yang perlu disemak apabila Galaxy anda tidak mengecas.', [
    ['Semak sama ada kabel dan pengecas dimasukkan sepenuhnya.'], ['Jika port basah, biarkan kering sepenuhnya sebelum mengecas.'],
    ...settings('Bateri', 'Tetapan pengecasan'), ['Jika masih tidak mengecas, bawa telefon, pengecas dan kabel ke pusat servis.']]),
  'g22-hot': L('Apa yang perlu dibuat apabila telefon panas.', [
    ['Jika sedang mengecas, cabut pengecas.'], ['Ketik butang Terkini.'], ['Ketik ‘Tutup semua’ untuk menutup aplikasi.'], ['Berhenti menggunakan telefon seketika dan biarkan sejuk di tempat dingin.']]),
  'g22-freeze': L('Paksa mula semula Galaxy yang tergantung dengan dua butang.', [
    ['Tekan dan tahan butang Sisi dan Kelantangan turun bersama lebih 7 saat.', 'Terus tahan sehingga skrin padam.'], ['Apabila skrin padam, lepaskan dan tunggu.']]),
  'g22-water': L('Perkara yang perlu disemak dan dibuat jika telefon basah.', [
    ['Lap dengan kain lembut sehingga kering sepenuhnya.'], ['Jangan pasang pengecas sehingga benar-benar kering.'],
    ['Jika terkena air laut, air kolam atau air sabun, bilas dengan air bersih kemudian keringkan.'], ['Jika ada yang pelik, segera bawa ke pusat servis.']]),
  'g22-members': L('Semak masalah telefon dengan Diagnostik telefon dalam Samsung Members.', [
    ['Ketik aplikasi ‘Samsung Members’.', 'Jika tiada di skrin Utama, cari di skrin Aplikasi.'], ['Ketik ‘Sokongan’.'], ['Ketik ‘Diagnostik telefon’.'], ['Ketik ‘Uji semua’ atau item yang ingin disemak.']]),
  'g22-service': L('Catat model dan masalah sebelum menghubungi servis Samsung.', [
    ...settings('Perihal telefon'), ['Catat nombor model (contohnya SM-S942N).'], ['Catat bila dan bagaimana masalah berlaku.'],
    ['Hubungi sokongan Samsung di negara anda atau buat temu janji di pusat servis.', 'Cari halaman sokongan negara anda di samsung.com/support.']]),
};
