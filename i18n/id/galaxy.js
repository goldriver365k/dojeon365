// Pelajaran Galaxy dalam bahasa Indonesia (draf, belum ditinjau → noindex, tidak ada di sitemap).
// steps[i] sesuai dengan kartu Korea ke-i dari pelajaran yang sama.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Dasar', life: 'Sehari-hari', apply: 'Fitur lainnya', adv: 'Lanjutan dan pemecahan masalah' };

export const CATEGORIES = {
  1: ['Menyalakan dan mematikan ponsel', 'Tombol, mengisi daya, daya, dan layar kunci'],
  2: ['Mengetuk, menahan, dan mengusap', 'Sentuhan dasar dan tombol navigasi'],
  3: ['Teks dan suara yang nyaman', 'Teks lebih besar, kecerahan, waktu layar, dan volume'],
  4: ['Menelepon dan menerima panggilan', 'Menelepon, menjawab, speaker, dan memblokir'],
  5: ['Menyimpan dan mencari kontak', 'Kontak baru, pencarian, edit, dan favorit'],
  6: ['Mengirim pesan', 'Menulis, memperbaiki, menyalin, dan melampirkan foto'],
  7: ['Notifikasi dan pengaturan cepat', 'Panel notifikasi, senter, rotasi, dan Jangan ganggu'],
  8: ['Wi-Fi, data, dan Bluetooth', 'Terhubung ke internet dan perangkat lain'],
  9: ['Mencari di internet dan memasang aplikasi', 'Peramban, kode QR, unduhan, dan toko aplikasi'],
  10: ['Memotret dan merekam video', 'Kamera, swafoto, zoom, timer, dan video'],
  11: ['Merapikan foto dan file', 'Galeri, edit, memulihkan, dan File Saya'],
  12: ['Layar Beranda dan alat sehari-hari', 'Aplikasi, folder, wallpaper, alarm, kalender, dan catatan'],
  13: ['Berbagi foto dengan keluarga', 'Email, video, dan panggilan video'],
  14: ['Membayar dengan Samsung Wallet', 'Membuka Wallet dan memilih kartu'],
  15: ['Memakai ponsel dengan aman', 'Kunci layar, biometrik, izin, dan SOS darurat'],
  16: ['Pindah ke ponsel baru', 'Pengaturan awal, akun, Smart Switch, dan cadangan'],
  17: ['Penglihatan, pendengaran, dan sentuhan', 'Pembesaran, kontras, TalkBack, dan teks'],
  18: ['Baterai dan penyimpanan', 'Hemat daya, penyimpanan, perawatan, dan pembaruan'],
  19: ['Galaxy AI dan Bixby', 'Perintah suara dan fitur Galaxy AI'],
  20: ['Terhubung ke TV, PC, dan jam', 'Smart View, PC, DeX, perangkat wearable, dan SmartThings'],
  21: ['Fitur berguna lainnya', 'Layar terpisah, mode dan rutinitas, Always On Display'],
  22: ['Saat ada masalah', 'Tidak ada suara, tidak ada sinyal, pengisian, panas, dan macet'],
};

export const TITLES = {
  'g01-buttons': ['tombol-samping', 'Menemukan tombol samping'], 'g01-charge': ['mengisi-daya', 'Mengisi daya ponsel'],
  'g01-power': ['mematikan-dan-menyalakan', 'Mematikan dan menyalakan kembali ponsel'], 'g01-restart': ['memulai-ulang', 'Memulai ulang ponsel'],
  'g01-lock': ['mengunci-membuka-layar', 'Mengunci dan membuka kunci layar'], 'g02-tap': ['mengetuk', 'Mengetuk sekali'],
  'g02-hold': ['sentuh-dan-tahan', 'Menyentuh dan menahan'], 'g02-swipe': ['mengusap', 'Mengusap untuk berpindah'],
  'g02-pinch': ['zoom-dua-jari', 'Memperbesar dengan dua jari'], 'g02-back': ['tombol-kembali', 'Kembali ke layar sebelumnya'],
  'g02-home': ['tombol-beranda', 'Kembali ke layar Beranda'], 'g02-recent': ['aplikasi-terbaru', 'Membuka aplikasi terbaru'],
  'g03-font': ['teks-lebih-besar', 'Memperbesar teks'], 'g03-zoom': ['zoom-layar', 'Memperbesar layar dan ikon'],
  'g03-easy': ['mode-mudah', 'Menyalakan Mode mudah'], 'g03-bright': ['kecerahan', 'Mengatur kecerahan'],
  'g03-timeout': ['waktu-layar-mati', 'Mengubah kapan layar mati'], 'g03-sound': ['nada-dering-getar', 'Mengatur volume nada dering dan getar'],
  'g04-call': ['menelepon', 'Menelepon dengan tombol angka'], 'g04-answer': ['menjawab-menolak', 'Menjawab atau menolak panggilan'],
  'g04-speaker': ['speaker', 'Menyalakan speaker saat panggilan'], 'g04-missed': ['panggilan-tak-terjawab', 'Menelepon balik panggilan tak terjawab'],
  'g04-log': ['riwayat-panggilan', 'Melihat riwayat panggilan'], 'g04-block': ['blokir-nomor', 'Memblokir nomor spam'],
  'g05-new': ['simpan-kontak', 'Menyimpan kontak baru'], 'g05-search': ['cari-kontak', 'Mencari kontak berdasarkan nama'],
  'g05-edit': ['ubah-nomor', 'Mengubah nomor telepon'], 'g05-speed': ['panggilan-cepat', 'Menambahkan orang yang sering ditelepon'],
  'g05-share': ['bagikan-kontak', 'Membagikan kontak'], 'g06-send': ['kirim-balas-pesan', 'Mengirim dan membalas pesan'],
  'g06-type': ['huruf-angka-simbol', 'Mengetik huruf, angka, dan simbol'], 'g06-fix': ['perbaiki-salah-ketik', 'Memperbaiki salah ketik'],
  'g06-copy': ['salin-tempel', 'Menyalin dan menempel'], 'g06-photo': ['lampirkan-foto', 'Melampirkan foto ke pesan'],
  'g06-translate': ['terjemahkan-teks', 'Menerjemahkan teks'], 'g07-noti': ['notifikasi', 'Melihat dan menghapus notifikasi'],
  'g07-appnoti': ['notifikasi-aplikasi', 'Mengatur notifikasi aplikasi'], 'g07-quick': ['pengaturan-cepat', 'Membuka panel pengaturan cepat'],
  'g07-flash': ['senter', 'Menyalakan senter'], 'g07-rotate': ['rotasi-layar', 'Mengatur rotasi layar'],
  'g07-dnd': ['jangan-ganggu-mode-pesawat', 'Memakai Jangan ganggu dan Mode pesawat'], 'g08-wifi': ['sambung-wifi', 'Menyambung ke Wi-Fi'],
  'g08-data': ['data-seluler', 'Menyalakan dan mematikan data seluler'], 'g08-usage': ['penggunaan-data', 'Melihat penggunaan data'],
  'g08-bt': ['earphone-bluetooth', 'Menyambungkan earphone Bluetooth'], 'g08-hotspot': ['hotspot-seluler', 'Memakai hotspot seluler'],
  'g08-location': ['lokasi-nfc', 'Menemukan pengaturan lokasi dan NFC'], 'g09-search': ['cari-di-samsung-internet', 'Mencari di Samsung Internet'],
  'g09-bookmark': ['simpan-halaman', 'Menyimpan halaman yang sering dikunjungi'], 'g09-qr': ['buka-kode-qr', 'Membuka kode QR'],
  'g09-files': ['file-unduhan', 'Menemukan file unduhan'], 'g09-stores': ['play-store-galaxy-store', 'Memakai Play Store dan Galaxy Store'],
  'g09-install': ['pasang-perbarui-hapus-aplikasi', 'Memasang, memperbarui, dan menghapus aplikasi'], 'g09-google': ['aplikasi-google', 'Menemukan aplikasi Google dan operator'],
  'g10-open': ['buka-kamera', 'Membuka kamera'], 'g10-focus': ['fokus-kamera', 'Memfokuskan kamera'],
  'g10-switch': ['ganti-kamera', 'Berpindah antara kamera depan dan belakang'], 'g10-selfie': ['swafoto', 'Mengambil swafoto'],
  'g10-zoom': ['zoom-saat-memotret', 'Memperbesar saat memotret'], 'g10-timer': ['timer-kamera', 'Memakai timer kamera'],
  'g10-modes': ['mode-potret-malam', 'Mencoba mode Potret dan Malam'], 'g10-video': ['rekam-video', 'Merekam video'],
  'g10-capture': ['tangkapan-rekam-layar', 'Mengambil tangkapan layar atau merekam layar'], 'g11-latest': ['foto-terbaru', 'Menemukan foto yang baru diambil'],
  'g11-album': ['buat-album', 'Membuat album'], 'g11-edit': ['potong-cerahkan-foto', 'Memotong dan mencerahkan foto'],
  'g11-text': ['salin-teks-dari-foto', 'Menyalin teks dari foto'], 'g11-multi': ['bagikan-beberapa-foto', 'Membagikan beberapa foto'],
  'g11-restore': ['pulihkan-foto', 'Memulihkan foto yang terhapus'], 'g11-docs': ['dokumen-file-saya', 'Menemukan dokumen di File Saya'],
  'g11-quickshare': ['quick-share', 'Mengirim file dengan Quick Share'], 'g12-addapp': ['aplikasi-di-beranda', 'Meletakkan aplikasi di layar Beranda'],
  'g12-folder': ['folder-widget', 'Membuat folder dan widget'], 'g12-wallpaper': ['wallpaper-tema-layar-kunci', 'Mengganti wallpaper, tema, dan layar kunci'],
  'g12-alarm': ['alarm-timer', 'Mengatur alarm dan timer'], 'g12-calendar': ['janji-di-kalender', 'Menambahkan janji ke kalender'],
  'g12-reminder': ['pengingat', 'Mendapat pengingat tugas'], 'g12-note': ['samsung-notes', 'Memakai Samsung Notes'],
  'g12-recorder': ['perekam-suara', 'Merekam suara Anda'], 'g12-tools': ['cuaca-kalkulator-radio', 'Memakai cuaca, kalkulator, dan radio'],
  'x13-gmail': ['kirim-foto-gmail', 'Mengirim foto lewat email dengan Gmail'], 'x13-video': ['kirim-video-keluarga', 'Mengirim video ke keluarga'],
  'x13-meet': ['panggilan-video-google-meet', 'Melakukan panggilan video dengan Google Meet'], 'g14-open': ['buka-samsung-wallet', 'Membuka Samsung Wallet'],
  'g14-add': ['tambah-kartu', 'Melihat layar tambah kartu'], 'g14-pay': ['pilih-kartu-bayar', 'Memilih kartu untuk membayar'],
  'g15-pin': ['buat-pin', 'Membuat PIN'], 'g15-bio': ['sidik-jari-wajah', 'Mendaftarkan sidik jari dan wajah'],
  'g15-perm': ['izin-aplikasi-lokasi', 'Memeriksa izin aplikasi dan berbagi lokasi'], 'g15-folder': ['folder-aman-samsung-pass', 'Mengenal Folder Aman dan Samsung Pass'],
  'g15-medical': ['info-medis-kontak-darurat', 'Menambahkan info medis dan kontak darurat'], 'g15-sos': ['sos-darurat', 'Memeriksa pengaturan SOS darurat'],
  'g15-find': ['samsung-find', 'Menemukan ponsel dengan Samsung Find'], 'g16-setup': ['pengaturan-awal', 'Mengatur ponsel pertama kali'],
  'g16-sim': ['sim-esim', 'Mengenal SIM dan eSIM'], 'g16-account': ['akun-samsung-google', 'Memeriksa akun Samsung dan Google'],
  'g16-switch': ['smart-switch', 'Memindahkan kontak dan foto dengan Smart Switch'], 'g16-backup': ['periksa-cadangan', 'Memeriksa status cadangan'],
  'g16-restore': ['pulihkan-cadangan', 'Memulihkan dari cadangan'], 'g17-magnify': ['pembesaran', 'Memperbesar sebagian layar'],
  'g17-contrast': ['font-kontras-tinggi', 'Meningkatkan kontras teks'], 'g17-talkback': ['talkback', 'Membacakan layar dengan TalkBack'],
  'g17-caption': ['suara-teks', 'Mengatur suara dan teks'], 'g17-hearing': ['alat-bantu-dengar', 'Memeriksa dukungan alat bantu dengar'],
  'g17-touch': ['pengaturan-sentuh', 'Mengatur sentuhan dan pintasan aksesibilitas'], 'g18-usage': ['aplikasi-boros-baterai', 'Menemukan aplikasi yang boros baterai'],
  'g18-saver': ['hemat-daya', 'Menyalakan Hemat daya'], 'g18-storage': ['periksa-penyimpanan', 'Memeriksa penyimpanan'],
  'g18-clean': ['file-besar', 'Membersihkan file besar'], 'g18-care': ['perawatan-perangkat', 'Memeriksa ponsel dengan Perawatan perangkat'],
  'g18-update': ['pembaruan-perangkat-lunak', 'Memperbarui perangkat lunak'], 'g18-version': ['model-versi-one-ui', 'Memeriksa model dan versi One UI'],
  'g19-bixby': ['tanya-bixby', 'Meminta Bixby dengan suara'], 'g19-circle': ['lingkari-untuk-mencari', 'Mencari hal di layar'],
  'g19-interpret': ['terjemahan-panggilan', 'Mengenal terjemahan panggilan dan Juru Bahasa'], 'g19-write': ['perbaiki-ringkas-teks', 'Memperbaiki dan meringkas teks'],
  'g19-transcribe': ['transkripsi-rekaman', 'Mengubah rekaman menjadi teks'], 'g19-photo': ['edit-foto-ai', 'Mengedit foto dengan AI'],
  'g19-support': ['fitur-per-model', 'Memeriksa fitur menurut model'], 'g20-smartview': ['smart-view', 'Menampilkan layar di TV dengan Smart View'],
  'g20-pc': ['sambung-ke-pc', 'Menyambung ke PC'], 'g20-dex': ['samsung-dex', 'Mengenal Samsung DeX'],
  'g20-watch': ['jam-dan-earbuds', 'Menyambungkan jam dan earbuds'], 'g20-smartthings': ['smartthings', 'Menyambungkan peralatan rumah dengan SmartThings'],
  'g20-musicshare': ['music-share', 'Mengenal Music Share'], 'g21-split': ['layar-terpisah', 'Memakai dua aplikasi dengan layar terpisah'],
  'g21-modes': ['mode-rutinitas', 'Mengatur Mode dan Rutinitas'], 'g21-aod': ['always-on-display', 'Menampilkan jam di layar kunci'],
  'g21-wellbeing': ['digital-wellbeing', 'Melihat waktu layar dengan Kesejahteraan Digital'], 'g21-apps': ['samsung-health-kids-game-booster', 'Mengenal Samsung Health, Samsung Kids, dan Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Menemukan Samsung News, Samsung.com, dan Global Goals'], 'g21-spen': ['s-pen', 'Memakai S Pen di model yang mendukung'],
  'g22-ring': ['nada-dering-tidak-bunyi', 'Saat nada dering tidak berbunyi'], 'g22-network': ['tidak-bisa-telepon-internet', 'Saat panggilan atau internet tidak berfungsi'],
  'g22-charge': ['tidak-mengisi-daya', 'Saat ponsel tidak mengisi daya'], 'g22-hot': ['ponsel-panas', 'Saat ponsel panas'],
  'g22-freeze': ['layar-macet', 'Saat layar macet'], 'g22-water': ['ponsel-basah', 'Yang perlu diperiksa saat ponsel basah'],
  'g22-members': ['diagnostik-samsung-members', 'Diagnostik dengan Samsung Members'], 'g22-service': ['sebelum-ke-servis', 'Mencatat model dan gejala sebelum ke servis'],
};

const PHONE = open('Telepon');
const CONTACTS = open('Kontak');
const MESSAGES = open('Pesan');
const CAMERA = open('Kamera');
const GALLERY = open('Galeri');
const SHUTTER = ['Ketuk tombol rana putih.'];
const REAL = 'Pelajaran ini mengubah pengaturan sungguhan atau ada hasil nyata. Baca semua langkah dulu, lalu lakukan di ponsel.';
const AI_ICON = ['Ketuk ikon Galaxy AI.'];
const CHECK = 'Pelajaran baru untuk situs internasional. Tampilan aplikasi Google sering berubah; periksa di ponsel sungguhan.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Pelajari letak tombol Volume naik, Volume turun, dan tombol Samping di ponsel Galaxy serta fungsinya.', [
    ['Lihat sisi kanan ponsel.', 'Ada tiga tombol. Dari atas: Volume naik, Volume turun, dan tombol Samping.'],
    ['Tekan tombol Samping di gambar.', 'Ini tombol paling bawah. Untuk menyalakan dan mematikan ponsel atau mematikan layar.'],
    ['Tekan tombol Volume turun di gambar.', 'Ini tombol tengah. Untuk mengecilkan suara.'],
    ['Tekan tombol Volume naik di gambar.', 'Ini tombol paling atas. Untuk membesarkan suara.']]),
  'g01-charge': L('Isi daya ponsel Galaxy langkah demi langkah: colokkan pengisi daya, sambungkan kabel, dan periksa tanda pengisian.', [
    ['Colokkan pengisi daya ke stopkontak.'], ['Colokkan ujung kabel ke lubang di bagian bawah ponsel.', 'Jika lubangnya basah, keringkan dulu sampai benar-benar kering.'],
    ['Periksa apakah tanda pengisian muncul di layar.'], ['Cabut kabel setelah pengisian selesai.']]),
  'g01-power': L('Matikan ponsel Galaxy dengan tombol Samping dan Volume turun, lalu nyalakan kembali.', [
    ['Tekan dan tahan tombol Samping dan Volume turun bersamaan.', 'Tekan keduanya sekaligus dan tunggu sampai menu muncul.'],
    ['Ketuk Matikan.'], ['Ketuk Matikan sekali lagi.', 'Setelah layar gelap, lanjut ke langkah berikutnya untuk menyalakannya.'],
    ['Tekan dan tahan tombol Samping untuk menyalakan ponsel.', 'Tahan beberapa detik sampai logo Samsung muncul. Lalu buka kunci layar.']]),
  'g01-restart': L('Mulai ulang ponsel Galaxy saat lambat atau aneh.', [
    ['Tekan dan tahan tombol Samping dan Volume turun bersamaan.', 'Tahan sampai menu daya muncul.'], ['Ketuk Mulai ulang.'], ['Ketuk Mulai ulang sekali lagi.'],
    ['Tunggu ponsel mati lalu menyala lagi.', '', 'Jika layar macet dan menu tidak muncul, tahan kedua tombol lebih dari 7 detik.']]),
  'g01-lock': L('Kunci layar dengan tombol Samping dan buka dengan mengusap ke atas.', [
    ['Tekan tombol Samping sekali dengan singkat.', 'Layar mati dan terkunci otomatis.'],
    ['Tekan lagi tombol Samping dengan singkat.', 'Layar kunci menyala. Mengetuk layar dua kali juga bisa.'],
    ['Usap layar ke atas.', 'Jika Anda memasang PIN atau sidik jari, gunakan itu untuk membuka kunci.']]),
  'g02-tap': L('Latih sentuhan paling dasar: ketuk sekali untuk membuka aplikasi.', [
    ['Ketuk Galeri sekali dengan ringan memakai ujung jari.', 'Jangan ditekan keras. Ketukan ringan membuka aplikasi.'], HOME_BTN]),
  'g02-hold': L('Latih sentuh dan tahan untuk membuka menu aplikasi.', [
    ['Sentuh dan tahan Galeri selama 2 detik.', 'Jangan angkat jari sampai menu muncul.'], ['Periksa apakah menu sudah muncul.', 'Sentuh dan tahan menampilkan apa yang bisa dilakukan aplikasi itu.'],
    ['Ketuk tombol Kembali untuk menutup menu.']]),
  'g02-swipe': L('Usap untuk berpindah halaman Beranda dan membuka layar Aplikasi.', [
    ['Usap layar ke kiri.', 'Anda pindah ke halaman Beranda berikutnya.'], ['Usap dari bawah ke atas di layar Beranda.', 'Layar Aplikasi dengan semua aplikasi terbuka.'],
    ['Usap ke bawah di layar Aplikasi.', 'Anda kembali ke layar Beranda.']]),
  'g02-pinch': L('Renggangkan dua jari untuk memperbesar foto dan rapatkan untuk memperkecil.', [
    open('Galeri'), ['Ketuk foto yang ingin dilihat.'], ['Letakkan dua jari di foto lalu renggangkan.', 'Renggangkan ibu jari dan telunjuk untuk memperbesar.'], ['Rapatkan kedua jari.', 'Foto kembali mengecil.']]),
  'g02-back': L('Gunakan tombol Kembali untuk kembali ke layar sebelumnya.', [
    ...settings('Layar'),
    ['Ketuk tombol Kembali di kanan bawah.', 'Anda kembali ke layar sebelumnya (Pengaturan).', 'Urutan tombol bisa diubah di Pengaturan → Layar → Bilah navigasi.']]),
  'g02-home': L('Kembali ke layar Beranda dari aplikasi apa pun dengan tombol Beranda.', [
    open('Pengaturan'), HOME_BTN,
    ['Periksa apakah layar Beranda muncul.', 'Dari aplikasi apa pun, tombol Beranda membawa Anda ke sini.', 'Jika tombol tidak terlihat, usap sedikit ke atas dari tepi bawah layar.']]),
  'g02-recent': L('Buka aplikasi terbaru untuk berpindah aplikasi atau menutup semuanya.', [
    ['Ketuk tombol Terbaru di kiri bawah.', 'Aplikasi yang baru dipakai tampil seperti kartu.'], ['Ketuk aplikasi yang ingin dipakai lagi.', 'Usap ke samping untuk melihat aplikasi lain.'],
    ['Ketuk lagi tombol Terbaru.'], ['Ketuk ‘Tutup semua’.', 'Semua aplikasi yang terbuka ditutup.']]),
  'g03-font': L('Perbesar dan tebalkan teks di Pengaturan → Layar → Ukuran dan gaya font.', [
    ...settings('Layar', 'Ukuran dan gaya font'), ['Geser lingkaran pada bilah ukuran ke kanan.', 'Semakin ke kanan, semakin besar teksnya.'],
    ['Ketuk sakelar ‘Font tebal’ untuk menyalakannya.', 'Teks tebal lebih mudah dibaca.'], ['Periksa apakah teks sudah lebih besar.']]),
  'g03-zoom': L('Perbesar ikon dan tombol dengan Zoom layar di Pengaturan → Layar.', [
    ...settings('Layar', 'Zoom layar'), ['Geser lingkaran pada bilah ke kanan.', 'Semakin ke kanan, semakin besar ikon dan tombol.'], ['Periksa apakah ikon dan tombol sudah lebih besar.']]),
  'g03-easy': L('Nyalakan Mode mudah untuk layar Beranda yang lebih sederhana dengan teks dan ikon besar.', [
    ...settings('Layar', 'Mode mudah'), ['Ketuk sakelar ‘Mode mudah’ untuk menyalakannya.', 'Teks dan ikon di layar Beranda menjadi lebih besar.'],
    ['Periksa apakah teks dan ikon di layar Beranda sudah lebih besar.']]),
  'g03-bright': L('Atur kecerahan layar dari panel pengaturan cepat.', [
    ['Usap ke bawah dari kanan atas layar.', 'Panel pengaturan cepat terbuka.'], ['Geser bilah kecerahan ke kanan.', 'Geser ke kiri untuk menggelapkan layar.'], ['Usap ke atas untuk menutup panel.']]),
  'g03-timeout': L('Ubah berapa lama layar tetap menyala di Pengaturan → Layar → Batas waktu layar.', [
    ...settings('Layar', 'Batas waktu layar'), ['Ketuk ‘5 menit’.', 'Pilih waktu yang Anda mau. Semakin lama, semakin boros baterai.']]),
  'g03-sound': L('Perbesar volume nada dering dan buat ponsel bergetar saat berdering.', [
    ...settings('Suara dan getaran', 'Volume'), ['Geser bilah Nada dering ke kanan.', 'Semakin ke kanan, semakin keras deringnya.'], BACK,
    ['Ketuk ‘Suara’.', 'Untuk getar saja, ketuk ‘Getar’.'], ['Ketuk sakelar ‘Getar saat berdering’ untuk menyalakannya.', 'Suara dan getaran memberi tahu bersamaan.']]),
  'g04-call': L('Menelepon dengan ponsel Galaxy dengan mengetik nomor di papan tombol.', [
    PHONE, ['Ketuk ‘Papan tombol’ di bawah.'], ['Ketuk angka nomor telepon secara berurutan.', 'Jika salah, hapus dengan tombol hapus di kanan bawah.'], ['Ketuk tombol panggil hijau.'],
    ['Setelah selesai bicara, ketuk tombol akhiri merah.']]),
  'g04-answer': L('Jawab panggilan dengan menggeser tombol hijau, tolak dengan tombol merah, atau tolak dengan pesan.', [
    ['Sentuh dan tahan tombol jawab hijau lalu geser ke atas.', 'Geser keluar lingkaran untuk menjawab.'], ['Untuk menolak, sentuh dan tahan tombol merah lalu geser ke atas.'],
    ['Untuk menolak dengan pesan, geser ke atas ‘Kirim pesan’ di bawah.', 'Pilih pesan dan pesan itu dikirim ke penelepon.', 'Di Pengaturan → Aksesibilitas → Interaksi dan kecekatan, Anda bisa menjawab dengan sekali ketuk.']]),
  'g04-speaker': L('Nyalakan speaker saat panggilan agar bisa bicara tanpa menempelkan ponsel di telinga.', [
    ['Lakukan atau terima panggilan.'], ['Ketuk ‘Speaker’.', 'Anda bisa mendengar dan bicara dengan ponsel jauh dari telinga.'], ['Untuk mematikan, ketuk lagi ‘Speaker’.']]),
  'g04-missed': L('Telepon balik panggilan tak terjawab dari daftar Terbaru di aplikasi Telepon.', [
    PHONE, ['Ketuk ‘Terbaru’ di bawah.'], ['Usap nomor tak terjawab ke kanan.', 'Mengusap ke kanan langsung menelepon.', 'Jika tidak menelepon, ketuk nomornya lalu ketuk tombol panggil.']]),
  'g04-log': L('Lihat siapa yang menelepon dan kapan di daftar Terbaru aplikasi Telepon.', [PHONE, ['Ketuk ‘Terbaru’ di bawah.'], ['Ketuk nama untuk melihat detailnya.', 'Anda bisa melihat kapan kalian berbicara.']]),
  'g04-block': L('Blokir nomor spam di pengaturan aplikasi Telepon.', [
    PHONE, ['Ketuk tiga titik (Opsi lainnya) di kanan atas.'], ['Ketuk ‘Pengaturan’.'], ['Ketuk ‘Blokir nomor’.'],
    ['Ketuk ‘Tambah nomor telepon’.', '', 'Tampilan layar bisa sedikit berbeda tergantung versi.'], ['Ketik nomor yang ingin diblokir.'], ['Ketuk ‘Simpan’.']]),
  'g05-new': L('Simpan kontak baru dengan nama dan nomor di aplikasi Kontak.', [
    CONTACTS, ['Ketuk ‘+’ (Buat kontak) di kanan atas.'], ['Ketuk kolom Nama.'], ['Ketik namanya.'], ['Ketuk kolom Telepon.'], ['Ketik nomor teleponnya.'], ['Ketuk ‘Simpan’.']]),
  'g05-search': L('Temukan kontak dengan cepat dengan mencari namanya.', [CONTACTS, ['Ketuk kaca pembesar (Cari) di atas.'], ['Ketik nama yang dicari.'], ['Ketuk nama yang ditemukan.']]),
  'g05-edit': L('Ubah nomor telepon yang tersimpan pada kontak.', [
    CONTACTS, ['Ketuk nama orangnya.'], ['Ketuk ‘Edit’ di bawah.'], ['Ketuk kolom Telepon.'], ['Hapus nomor lama dan ketik nomor baru.'], ['Ketuk ‘Simpan’.']]),
  'g05-speed': L('Atur panggilan cepat agar bisa menelepon dengan menahan satu angka di papan tombol.', [
    PHONE, ['Ketuk ‘Papan tombol’ di bawah.'], ['Ketuk tiga titik (Opsi lainnya) di kanan atas.'], ['Ketuk ‘Nomor panggilan cepat’.'], ['Ketuk angka ‘2’.', 'Pilih angka yang masih kosong.'],
    ['Pilih orangnya dari kontak.'], ['Sentuh dan tahan ‘2’ di papan tombol untuk menelepon.', 'Coba tahan ‘2’ di gambar latihan.']]),
  'g05-share': L('Kirim data kontak seseorang ke orang lain lewat pesan.', [
    CONTACTS, ['Ketuk nama orang yang ingin dibagikan.'], ['Ketuk ‘Bagikan’ di bawah.'], ['Ketuk ‘Pesan’.'], ['Pilih penerimanya.'], ['Ketuk tombol Kirim.']]),
  'g06-send': L('Kirim pesan teks dan balas pesan di aplikasi Pesan.', [
    MESSAGES, ['Ketuk percakapan yang ingin dibalas.', 'Untuk pesan baru, ketuk tombol Mulai obrolan di kanan bawah.'], ['Ketuk kolom pesan di bawah.'], ['Ketik pesan Anda.'], ['Ketuk tombol Kirim di kanan.']]),
  'g06-type': L('Ketik huruf, angka, dan simbol, serta ganti bahasa di Keyboard Samsung.', [
    ['Ketik ‘Halo’ di keyboard.'], ['Untuk angka atau simbol, ketuk ‘!#1’.'], ['Untuk kembali ke huruf, ketuk ‘ABC’ di tempat yang sama.'],
    ['Untuk mengetik dalam bahasa lain, usap tombol spasi ke kiri atau kanan.', 'Hanya bahasa yang ditambahkan di pengaturan keyboard yang muncul.']]),
  'g06-fix': L('Perbaiki salah ketik dengan tombol hapus dan memindahkan kursor.', [
    ['Ketuk tombol hapus (⌫) sekali.', 'Huruf tepat sebelum kursor terhapus.'], ['Ketik huruf yang benar.'], ['Untuk memperbaiki huruf di tengah, ketuk tempat itu.', 'Kursor (garis yang berkedip) pindah ke tempat yang diketuk.']]),
  'g06-copy': L('Salin teks lalu tempel di tempat lain.', [['Sentuh dan tahan teks yang ingin disalin.'], ['Ketuk ‘Salin’.'], ['Sentuh dan tahan kolom tempat menempel.'], ['Ketuk ‘Tempel’.']]),
  'g06-photo': L('Lampirkan foto dari Galeri ke pesan teks.', [
    MESSAGES, ['Ketuk percakapan tujuan foto.'], ['Ketuk ‘+’ di kiri kolom pesan.'], ['Ketuk ‘Galeri’.'], ['Ketuk foto yang ingin dikirim.'], ['Ketuk tombol Kirim.']]),
  'g06-translate': L('Terjemahkan percakapan di Pesan dengan alat Galaxy AI di keyboard.', [
    MESSAGES, ['Ketuk percakapan yang ingin diterjemahkan.'], ['Ketuk kolom pesan di bawah.'], ['Ketuk ikon Galaxy AI di kiri atas keyboard.'], ['Ketuk ‘Terjemahan obrolan’.'], ['Pilih bahasanya di kotak atas.']]),
  'g07-noti': L('Buka panel notifikasi, baca satu notifikasi, dan hapus semuanya.', [
    ['Usap ke bawah dari kiri atas layar.', 'Panel notifikasi terbuka.'], ['Ketuk notifikasi yang ingin dibaca.', 'Aplikasinya akan terbuka.'],
    ['Usap ke bawah dari kiri atas layar.', 'Panel notifikasi terbuka.'], ['Ketuk ‘Hapus’.', 'Semua notifikasi terhapus.']]),
  'g07-appnoti': L('Matikan notifikasi aplikasi yang tidak Anda perlukan.', [
    ...settings('Notifikasi', 'Notifikasi aplikasi'), ['Ketuk sakelar aplikasi untuk mematikan notifikasinya.', 'Biarkan notifikasi aplikasi pesan penting tetap menyala.']]),
  'g07-quick': L('Buka panel pengaturan cepat dan pelajari cara kerja tombolnya.', [
    QUICK, ['Lihat tombol-tombol di panel.', 'Tombol biru berarti menyala. Ketuk tombol untuk menyalakan atau mematikan.'],
    ['Sentuh dan tahan tombol ‘Wi-Fi’.', 'Menahan tombol membuka pengaturan rincinya.'], ['Usap ke atas untuk menutup panel.']]),
  'g07-flash': L('Nyalakan dan matikan senter dari panel pengaturan cepat.', [QUICK, ['Ketuk ‘Senter’.', 'Lampu di belakang ponsel menyala.'], ['Untuk mematikan, ketuk lagi ‘Senter’.']]),
  'g07-rotate': L('Pilih apakah layar ikut berputar saat ponsel dimiringkan.', [
    QUICK, ['Ketuk ‘Putar otomatis’.', 'Jika menyala, layar ikut berputar. Jika mati, layar tetap tegak.'], ['Miringkan ponsel untuk mencobanya.']]),
  'g07-dnd': L('Senyapkan panggilan dan notifikasi dengan Jangan ganggu, dan pakai Mode pesawat di pesawat.', [
    QUICK, ['Ketuk ‘Jangan ganggu’.', 'Panggilan dan notifikasi tidak berbunyi. Ketuk lagi untuk mematikan.'], ['Ketuk lagi ‘Jangan ganggu’ untuk mematikannya.'],
    ['Ketuk ‘Mode pesawat’.', 'Panggilan dan internet terputus. Pakai di pesawat.'], ['Setelah turun dari pesawat, ketuk lagi untuk mematikannya.']]),
  'g08-wifi': L('Sambungkan ponsel Galaxy ke Wi-Fi di Pengaturan → Koneksi → Wi-Fi.', [
    ...settings('Koneksi', 'Wi-Fi'), ['Ketuk sakelar ‘Wi-Fi’ untuk menyalakannya.', 'Daftar Wi-Fi di sekitar muncul.'], ['Ketuk nama Wi-Fi.', 'Ikon gembok berarti perlu kata sandi.'],
    ['Ketik kata sandi Wi-Fi.', 'Biasanya tertulis di belakang router.'], ['Ketuk ‘Sambungkan’.']]),
  'g08-data': L('Nyalakan atau matikan data seluler di Pengaturan → Koneksi → Penggunaan data.', [
    ...settings('Koneksi', 'Penggunaan data'), ['Ketuk sakelar ‘Data seluler’ untuk menyalakannya.', 'Jika mati, internet hanya lewat Wi-Fi.']]),
  'g08-usage': L('Lihat berapa banyak data seluler yang dipakai bulan ini dan aplikasi mana yang paling boros.', [
    ...settings('Koneksi', 'Penggunaan data'), ['Ketuk ‘Penggunaan data seluler’.'],
    ['Periksa berapa banyak yang dipakai bulan ini.', 'Aplikasi paling boros ada di atas. Aplikasi operator Anda menunjukkan sisa kuota.']]),
  'g08-bt': L('Pasangkan earphone Bluetooth dengan ponsel Galaxy.', [
    ['Nyalakan earphone dalam mode pemasangan.'], ...settings('Koneksi', 'Bluetooth'), ['Ketuk sakelar ‘Bluetooth’ untuk menyalakannya.'], ['Ketuk nama earphone Anda di daftar.'], ['Ketuk ‘Sambungkan’.']]),
  'g08-hotspot': L('Bagikan koneksi internet ponsel ke perangkat lain dengan hotspot seluler.', [
    ...settings('Koneksi', 'Hotspot Seluler dan Tethering', 'Hotspot Seluler'), ['Ketuk sakelar ‘Hotspot Seluler’ untuk menyalakannya.', '', 'Bisa ada biaya tambahan. Periksa paket Anda dulu.'],
    ['Di perangkat lain, pilih nama ponsel Anda di daftar Wi-Fi.']]),
  'g08-location': L('Temukan sakelar Lokasi dan NFC di Pengaturan.', [
    ...settings('Lokasi'), ['Ketuk sakelar ‘Lokasi’ untuk menyalakannya.', 'Aplikasi peta dan cuaca jadi tahu lokasi Anda.'], BACK, item('Koneksi'),
    ['Ketuk sakelar ‘NFC dan pembayaran nirsentuh’ untuk menyalakannya.', 'Nyalakan untuk membayar atau memakai kartu transportasi dengan ponsel.']]),
  'g09-search': L('Cari di web dengan peramban Samsung Internet.', [
    [...open('Samsung Internet'), 'Tergantung versi, aplikasinya bernama ‘Samsung Internet’ atau ‘Peramban’.'], ['Ketuk bilah alamat di atas.'], ['Ketik yang ingin dicari.'],
    ['Ketuk tombol Buka (↵) di kanan bawah keyboard.'], ['Ketuk hasil pencarian yang ingin dibaca.']]),
  'g09-bookmark': L('Simpan halaman yang sering dikunjungi sebagai bookmark lalu buka nanti.', [
    open('Samsung Internet'), ['Ketuk bintang (☆) di kanan bilah alamat.', 'Halaman yang sedang dibuka disimpan ke bookmark.'], ['Untuk membukanya nanti, ketuk bintang (Bookmark) di bawah.'], ['Ketuk halaman yang disimpan.']]),
  'g09-qr': L('Buka kode QR dengan kamera Galaxy.', [
    CAMERA, ['Arahkan kamera ke kode QR.', 'Di mode Foto, letakkan kode di tengah layar.'], ['Ketuk tautan kuning yang muncul di layar.', 'Hati-hati dengan kode QR dari tempat yang tidak dikenal.']]),
  'g09-files': L('Temukan file unduhan di aplikasi File Saya.', [open('File Saya'), ['Ketuk ‘Unduhan’.'], ['Ketuk file yang ingin dibuka.']]),
  'g09-stores': L('Pelajari bedanya Google Play Store dan Samsung Galaxy Store.', [
    open('Play Store'), ['Ini toko aplikasi Google, tempat mencari dan mengunduh aplikasi.', 'Perlu masuk dengan akun Google.'], HOME_BTN, open('Galaxy Store'),
    ['Ini toko aplikasi Samsung, dengan banyak aplikasi dan tema Samsung.']]),
  'g09-install': L('Pasang aplikasi dari Play Store, perbarui aplikasi di Galaxy Store, dan copot aplikasi.', [
    open('Play Store'), ['Ketuk bilah pencarian di atas.'], ['Ketik nama aplikasinya.'], ['Ketuk ‘Instal’ di sebelah nama aplikasi.'], ['Ketuk aplikasi ‘Galaxy Store’.', 'Sekarang kita perbarui aplikasi.'],
    ['Ketuk ‘Menu’ di bawah.'], ['Ketuk ‘Pembaruan’.'], ['Ketuk ‘Perbarui semua’.'], ['Di layar Beranda, sentuh dan tahan aplikasi yang ingin dihapus.'], ['Ketuk ‘Copot pemasangan’.'],
    ['Ketuk ‘OK’.', 'Aplikasi yang dihapus bisa dipasang lagi dari toko.']]),
  'g09-google': L('Temukan aplikasi Google dan aplikasi operator dengan pencarian di layar Aplikasi.', [
    ['Usap ke atas di layar Beranda untuk membuka layar Aplikasi.'], ['Ketuk ‘Cari’ di atas.'], ['Ketik nama aplikasinya.', 'Coba Google, YouTube, atau nama operator seluler Anda.'], ['Ketuk aplikasi yang ditemukan.']]),
  'g10-open': L('Buka aplikasi Kamera dan temukan tombol rana.', [CAMERA, ['Periksa apakah layar kamera muncul.', 'Lingkaran putih di tengah bawah adalah tombol rana.']]),
  'g10-focus': L('Ketuk layar untuk memfokuskan sebelum memotret.', [
    CAMERA, ['Ketuk bagian layar yang ingin dibuat tajam.', 'Saat lingkaran kuning muncul, fokus sudah pas.'], ['Ketuk tombol rana putih.', 'Jika foto buram, lap lensa dengan kain lembut.']]),
  'g10-switch': L('Berpindah antara kamera belakang dan kamera depan (swafoto).', [
    CAMERA, ['Ketuk panah melingkar di kanan bawah.', 'Mengusap layar ke atas atau bawah juga mengganti kamera.'], ['Periksa apakah kamera depan menampilkan wajah Anda.']]),
  'g10-selfie': L('Ambil swafoto dengan kamera depan.', [CAMERA, ['Ketuk panah melingkar di kanan bawah.'], ['Pegang ponsel agar wajah Anda di tengah layar.'], SHUTTER]),
  'g10-zoom': L('Perbesar benda yang jauh saat memotret.', [
    CAMERA, ['Ketuk angka ‘3’ di bawah.', 'Benda jauh terlihat 3 kali lebih besar. Ketuk ‘1x’ untuk kembali.', 'Angkanya berbeda tiap model (model Ultra bisa zoom lebih jauh).'], SHUTTER]),
  'g10-timer': L('Pakai timer kamera agar foto diambil beberapa detik kemudian.', [
    CAMERA, ['Ketuk ikon Kontrol cepat (⌄) di atas.'], ['Ketuk ikon timer.'], ['Ketuk ‘5 detik’.'], SHUTTER, ['Foto diambil setelah hitung mundur.']]),
  'g10-modes': L('Coba mode Potret untuk latar buram dan mode Malam untuk tempat gelap.', [
    CAMERA, ['Ketuk ‘Potret’ di bawah.', 'Orangnya tajam dan latarnya buram.'], SHUTTER, ['Ketuk ‘Lainnya’ di bawah.'],
    ['Ketuk ‘Malam’.', 'Di tempat gelap, foto tetap terang tanpa lampu kilat. Pegang ponsel tetap diam saat memotret.']]),
  'g10-video': L('Rekam video dengan kamera Galaxy.', [CAMERA, ['Ketuk ‘Video’ di bawah.'], ['Ketuk tombol rekam merah.'], ['Setelah selesai, ketuk tombol berhenti.']]),
  'g10-capture': L('Ambil tangkapan layar dengan dua tombol dan rekam layar dari panel pengaturan cepat.', [
    ['Tekan singkat tombol Samping dan Volume turun bersamaan.', 'Terdengar bunyi jepret dan layar tersimpan sebagai gambar. Lihat di Galeri.'], QUICK,
    ['Ketuk ‘Perekam layar’.', 'Jika tidak terlihat, usap panel ke bawah sekali lagi.'], ['Ketuk ‘Mulai merekam’.'], ['Untuk berhenti, ketuk ikon berhenti di atas layar.']]),
  'g11-latest': L('Temukan di Galeri foto yang baru saja Anda ambil.', [
    GALLERY, ['Ketuk foto pertama (kiri atas).', 'Foto terbaru selalu ada paling depan.'], ['Usap ke kiri untuk melihat foto berikutnya.']]),
  'g11-album': L('Buat album baru di Galeri untuk mengumpulkan foto.', [
    GALLERY, ['Ketuk ‘Album’ di bawah.'], ['Ketuk ‘+’ (Tambah) di atas.'], ['Ketuk ‘Album’.'], ['Ketik nama album.'], ['Ketuk ‘Buat’.', 'Lalu pilih foto yang ingin dimasukkan.']]),
  'g11-edit': L('Potong foto dan buat lebih terang di Galeri.', [
    GALLERY, ['Ketuk foto yang ingin diedit.'], ['Ketuk pensil (Edit) di bawah.'], ['Tarik sudut foto ke dalam untuk memotongnya.'], ['Ketuk ‘Nada’ di bawah.'],
    ['Geser bilah kecerahan ke kanan.'], ['Ketuk ‘Simpan’.']]),
  'g11-text': L('Salin teks dari foto di Galeri dan tempel ke pesan atau catatan.', [
    GALLERY, ['Ketuk foto yang berisi teks.'], ['Ketuk ikon ‘T’ kuning.', 'Ikon ini hanya muncul jika ada teks di foto.'], ['Sentuh dan tahan teks yang ingin disalin.'],
    ['Ketuk ‘Salin’.', 'Anda bisa menempelnya di pesan atau catatan.']]),
  'g11-multi': L('Pilih beberapa foto di Galeri dan bagikan sekaligus.', [
    GALLERY, ['Sentuh dan tahan salah satu foto yang ingin dikirim.'], ['Ketuk foto lain untuk dikirim bersamaan.', 'Tanda centang di lingkaran berarti foto terpilih.'],
    ['Ketuk ‘Bagikan’ di bawah.'], ['Ketuk aplikasi untuk mengirim (misalnya Pesan).'], ['Pilih penerima lalu kirim.']]),
  'g11-restore': L('Pulihkan foto yang terhapus dari Sampah di Galeri.', [
    GALLERY, ['Ketuk ‘Menu’ di bawah.'], ['Ketuk ‘Sampah’.'], ['Ketuk foto yang ingin dipulihkan.', 'Foto yang dihapus tetap ada di Sampah untuk sementara.'], ['Ketuk ‘Pulihkan’.']]),
  'g11-docs': L('Temukan dokumen yang tersimpan di ponsel dengan aplikasi File Saya.', [open('File Saya'), ['Ketuk ‘Dokumen’.'], ['Ketuk dokumen yang ingin dibuka.']]),
  'g11-quickshare': L('Kirim foto ke ponsel di dekat Anda dengan Quick Share.', [
    GALLERY, ['Ketuk foto yang ingin dikirim.'], ['Ketuk ‘Bagikan’ di bawah.'],
    ['Ketuk ‘Quick Share’.', '', 'Ponsel penerima juga harus menyalakan Quick Share (Pengaturan → Perangkat tersambung → Quick Share).'],
    ['Ketuk nama ponsel penerima.'], ['Di ponsel penerima, ketuk ‘Terima’.']]),
  'g12-addapp': L('Letakkan aplikasi dari layar Aplikasi ke layar Beranda.', [
    ['Usap ke atas di layar Beranda untuk membuka layar Aplikasi.'], ['Sentuh dan tahan aplikasi yang diinginkan.'], ['Ketuk ‘Tambah ke Beranda’.']]),
  'g12-folder': L('Kelompokkan aplikasi ke folder dan tambahkan widget cuaca di layar Beranda.', [
    ['Sentuh dan tahan aplikasi di Beranda lalu seret ke atas aplikasi lain.', 'Folder berisi kedua aplikasi akan dibuat.'], ['Ketuk nama folder lalu ketik nama.'],
    ['Sentuh dan tahan tempat kosong di layar Beranda.'], ['Ketuk ‘Widget’.'], ['Ketuk ‘Cuaca’.'], ['Ketuk ‘Tambah’.']]),
  'g12-wallpaper': L('Pakai foto Anda sebagai wallpaper layar kunci atau layar Beranda.', [
    ...settings('Wallpaper dan gaya'), ['Ketuk ‘Ubah wallpaper’.'], ['Untuk foto sendiri, ketuk ‘Galeri’.'], ['Ketuk foto yang ingin dipakai.'], ['Pilih layar kunci, layar Beranda, atau keduanya.'], ['Ketuk ‘Selesai’.']]),
  'g12-alarm': L('Atur alarm dan mulai timer di aplikasi Jam.', [
    open('Jam'), ['Ketuk ‘Alarm’ di bawah.'], ['Ketuk ‘+’ di kanan bawah.'], ['Usap angka ke atas atau bawah untuk mengatur waktu.'], ['Ketuk ‘Simpan’.'],
    ['Untuk memakai timer, ketuk ‘Timer’ di bawah.'], ['Atur waktunya lalu ketuk ‘Mulai’.']]),
  'g12-calendar': L('Tambahkan janji di aplikasi Kalender.', [
    open('Kalender'), ['Ketuk ‘+’ (Tambah acara) di kanan bawah.'], ['Ketuk kolom Judul.'], ['Ketik nama janji.'], ['Ketuk ‘Mulai’ untuk memilih tanggal dan waktu.'], ['Ketuk ‘Simpan’.']]),
  'g12-reminder': L('Dapatkan pengingat tugas dengan menambahkan pemberitahuan ke acara kalender.', [
    open('Kalender'), ['Ketuk ‘+’ (Tambah acara) di kanan bawah.'], ['Ketik tugasnya sebagai judul.'], ['Ketuk ‘Pengingat’.'], ['Ketuk kapan ingin diingatkan (misalnya 10 menit sebelumnya).'],
    ['Ketuk ‘Simpan’.', 'Pengingat datang pada waktu yang dipilih.']]),
  'g12-note': L('Tulis catatan singkat di Samsung Notes.', [
    open('Samsung Notes'), ['Ketuk ‘+’ di kanan bawah.'], ['Tulis yang ingin dicatat.'], ['Setelah selesai, ketuk tombol Kembali.', 'Catatan tersimpan otomatis.']]),
  'g12-recorder': L('Rekam suara Anda dengan aplikasi Perekam Suara.', [
    open('Perekam Suara'), ['Ketuk tombol Rekam.'], ['Bicaralah ke arah ponsel.'], ['Ketuk ‘Berhenti’.', 'Rekaman tersimpan di daftar.']]),
  'g12-tools': L('Lihat cuaca, pakai kalkulator, dan dengarkan radio.', [
    open('Cuaca'), ['Lihat cuaca dan suhu hari ini.', 'Lokasi harus menyala untuk melihat cuaca di tempat Anda.'], HOME_BTN, open('Kalkulator'), ['Ketuk angka, + dan = untuk menghitung.'],
    ['Ketuk aplikasi ‘Radio’.', 'Radio perlu earphone berkabel yang berfungsi sebagai antena.', 'Beberapa model dan operator tidak punya aplikasi Radio.']]),
  'x13-gmail': L('Kirim foto ke keluarga lewat email dengan aplikasi Gmail.', [
    open('Gmail'), ['Ketuk ‘Tulis’ di kanan bawah.'], ['Ketik alamat email orangnya di kolom ‘Kepada’.'], ['Ketuk penjepit kertas (Lampirkan) di atas.'],
    ['Ketuk foto yang ingin dikirim.', 'Anda bisa mengetuk lebih dari satu foto.'], ['Ketik subjek singkat.'], ['Ketuk tombol Kirim (pesawat kertas) di atas.']], { check: CHECK }),
  'x13-video': L('Kirim video dari Galeri ke anggota keluarga dengan aplikasi Pesan.', [
    GALLERY, ['Ketuk video yang ingin dikirim.'], ['Ketuk ‘Bagikan’ di bawah.'], ['Ketuk ‘Pesan’.'], ['Pilih penerimanya.'],
    ['Ketuk tombol Kirim.', '', 'Video panjang mungkin terlalu besar untuk pesan. Gunakan Quick Share atau email.']], { check: CHECK }),
  'x13-meet': L('Lakukan panggilan video ke keluarga dengan aplikasi Google Meet.', [
    open('Meet'), ['Ketuk ‘Baru’.'], ['Ketuk nama orang yang ingin ditelepon.', 'Orang itu juga perlu Google Meet atau akun Google.'], ['Ketuk tombol panggilan video.'],
    ['Setelah selesai, ketuk tombol akhiri merah.']], { check: CHECK }),
  'g14-open': L('Buka Samsung Wallet dan lihat kartu serta menunya.', [
    ['Ketuk aplikasi ‘Samsung Wallet’.', 'Bisa juga dibuka dengan mengusap ke atas gambar kartu di bawah layar.'],
    ['Lihat kartu yang tersimpan dan menunya.', 'Jika pertama kali, belum ada kartu. Pelajaran berikutnya menunjukkan layar tambah kartu.']]),
  'g14-add': L('Lihat layar untuk menambahkan kartu pembayaran ke Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['Ketuk ‘+’ (Tambah) di atas.'], ['Lihat apa saja yang bisa ditambahkan.', 'Kartu pembayaran, kartu transportasi, dan lainnya, tergantung negara.'],
    ['Ketuk ‘Kartu pembayaran’.'], ['Baca petunjuk menambahkan kartu.']]),
  'g14-pay': L('Pilih kartu di Samsung Wallet lalu bayar dengan mendekatkan ponsel ke mesin pembayaran.', [
    [...open('Samsung Wallet'), REAL], ['Ketuk kartu yang ingin dipakai membayar.'], ['Gunakan sidik jari atau masukkan PIN pembayaran.'], ['Dekatkan bagian belakang ponsel ke mesin pembayaran.']]),
  'g15-pin': L('Lindungi ponsel dengan kunci layar PIN.', [
    [...open('Pengaturan'), REAL], ...sub('Layar kunci dan AOD', 'Kunci layar dan biometrik'), ['Ketuk ‘Jenis kunci layar’.'], ['Ketuk ‘PIN’.'],
    ['Ketik minimal 4 angka yang mudah Anda ingat.', 'Hindari angka yang mudah ditebak, seperti tanggal lahir atau nomor telepon.'], ['Ketik angka yang sama sekali lagi untuk konfirmasi.']]),
  'g15-bio': L('Daftarkan sidik jari dan, jika mau, wajah Anda untuk membuka kunci.', [
    [...open('Pengaturan'), REAL], ...sub('Keamanan dan privasi', 'Kunci layar dan biometrik'), ['Ketuk ‘Sidik jari’.'], ['Masukkan PIN Anda.', 'Jika belum punya PIN, buat dulu.'],
    ['Tempel dan angkat jari di tanda sidik jari bagian bawah layar berulang kali.', 'Gunakan jari yang sering dipakai dan geser sedikit setiap kali.'],
    ['Untuk menambahkan wajah, ketuk ‘Pengenalan wajah’ di layar yang sama.']]),
  'g15-perm': L('Lihat aplikasi mana yang memakai lokasi, kamera, atau mikrofon, lalu cabut akses yang tidak perlu.', [
    ...settings('Keamanan dan privasi', 'Izin yang digunakan dalam 24 jam terakhir'), ['Lihat aplikasi mana yang memakai lokasi, kamera, atau mikrofon.'], ['Ketuk ‘Lokasi’.'],
    ['Jika ada aplikasi yang tidak dikenal, ubah ke ‘Jangan izinkan’.']]),
  'g15-folder': L('Temukan Folder Aman dan Samsung Pass di Pengaturan.', [
    ...settings('Keamanan dan privasi', 'Pengaturan keamanan lainnya'), ['Ketuk ‘Folder Aman’.'], ['Baca informasi tentang Folder Aman.'], BACK,
    ['Ketuk ‘Kata sandi, kunci sandi, dan isi otomatis’.', 'Samsung Pass ada di sini. Membantu masuk dengan sidik jari.']]),
  'g15-medical': L('Tambahkan info medis dan kontak darurat yang bisa membantu saat darurat.', [
    ...settings('Keselamatan dan darurat', 'Info medis'), ['Ketik nama, golongan darah, obat, dan alergi Anda.'], BACK, ['Ketuk ‘Kontak darurat’.'], ['Tambahkan anggota keluarga sebagai kontak.']]),
  'g15-sos': L('Lihat cara kerja SOS darurat di ponsel tanpa melakukan panggilan.', [
    [...open('Pengaturan'), 'Jika tombol benar-benar ditekan, panggilan darurat akan dilakukan. Di pelajaran ini, cukup lihat layarnya.'], ...sub('Keselamatan dan darurat', 'SOS darurat'),
    ['Baca berapa kali tombol Samping harus ditekan untuk menelepon.', 'Menekan tombol Samping sebanyak yang tertera akan menelepon nomor yang diatur.']]),
  'g15-find': L('Nyalakan pengaturan agar ponsel bisa ditemukan dengan Samsung Find jika hilang.', [
    ...settings('Keamanan dan privasi', 'Perlindungan perangkat hilang', 'Temukan Ponsel Saya'),
    ['Ketuk sakelar ‘Izinkan ponsel ini ditemukan’ untuk menyalakannya.', 'Anda harus masuk ke akun Samsung.'], ['Jika ponsel hilang, buka smartthingsfind.samsung.com di perangkat lain.']]),
  'g16-setup': L('Atur ponsel Galaxy baru untuk pertama kali.', [
    ['Tekan dan tahan tombol Samping untuk menyalakan ponsel.'], ['Periksa bahasa lalu ketuk ‘Mulai’.'], ['Pilih Wi-Fi lalu sambungkan.'], ['Selanjutnya ikuti petunjuk di layar dan ketuk ‘Berikutnya’.']]),
  'g16-sim': L('Kenali kartu SIM dan eSIM, lalu lihat nomor Anda di Pengelola SIM.', [
    ['SIM (Nano-SIM) adalah kartu kecil dari operator seluler.'], ['eSIM adalah SIM yang diunduh ke ponsel, tanpa kartu.', '', 'Dukungan eSIM dan dua nomor tergantung model dan operator.'],
    ...settings('Koneksi', 'Pengelola SIM'), ['Periksa apakah nomor dan operator Anda muncul.']]),
  'g16-account': L('Pastikan ponsel sudah masuk ke akun Samsung dan akun Google.', [
    ...settings('Akun dan pencadangan', 'Kelola akun'),
    ['Periksa ada akun Samsung dan akun Google.', 'Akun dibutuhkan untuk pencadangan, memasang aplikasi, dan mencari ponsel. Catat ID dan kata sandi Anda.']]),
  'g16-switch': L('Pindahkan kontak, foto, dan lainnya ke Galaxy baru dengan Smart Switch.', [
    ...settings('Akun dan pencadangan', 'Bawa data dari perangkat lama'), ['Di ponsel baru, pilih ‘Terima data’.'], ['Dekatkan kedua ponsel dan ikuti petunjuk di layar.']]),
  'g16-backup': L('Periksa kapan ponsel terakhir dicadangkan ke Samsung Cloud.', [...settings('Akun dan pencadangan', 'Samsung Cloud'), ['Lihat tanggal pencadangan terakhir.']]),
  'g16-restore': L('Pulihkan data dari cadangan Samsung Cloud.', [
    ...settings('Akun dan pencadangan', 'Samsung Cloud'), ['Ketuk ‘Pulihkan data’.'], ['Pilih perangkat dan isinya.'], ['Ketuk ‘Pulihkan’.']]),
  'g17-magnify': L('Nyalakan pintasan pembesaran dan perbesar sebagian layar dengan ketuk tiga kali.', [
    ...settings('Aksesibilitas', 'Peningkatan visibilitas', 'Pembesaran'), ['Ketuk ‘Pintasan pembesaran’.'], ['Ketuk sakelar ‘Pintasan pembesaran’ untuk menyalakannya.'],
    ['Ketuk ‘Ketuk layar tiga kali’.'], ['Ketuk cepat tiga kali di tempat yang ingin diperbesar.']]),
  'g17-contrast': L('Nyalakan font kontras tinggi agar teks lebih menonjol dari latar.', [
    ...settings('Aksesibilitas', 'Peningkatan visibilitas'), ['Ketuk sakelar ‘Font kontras tinggi’ untuk menyalakannya.', 'Huruf punya garis tepi lebih gelap dan lebih menonjol.']]),
  'g17-talkback': L('Nyalakan TalkBack agar layar dibacakan, setelah belajar cara mematikannya.', [
    [...open('Pengaturan'), 'Saat TalkBack menyala, cara mengetuk berubah. Baca dulu cara mematikannya.'], ...sub('Aksesibilitas', 'TalkBack'), ['Baca dulu cara mematikannya.'],
    ['Ketuk sakelar ‘TalkBack’ untuk menyalakannya.', 'Setelah menyala, sekali ketuk membacakan dan dua kali ketuk membuka.']]),
  'g17-caption': L('Nyalakan Teks Langsung untuk video dan Audio mono untuk mendengar dengan satu telinga.', [
    ...settings('Aksesibilitas', 'Peningkatan pendengaran'), ['Ketuk ‘Teks Langsung’.'], ['Ketuk sakelar ‘Gunakan Teks Langsung’ untuk menyalakannya.', 'Ucapan dalam video ditampilkan sebagai teks.'], BACK,
    ['Ketuk sakelar ‘Audio mono’ untuk menyalakannya.', 'Anda mendengar suara kiri dan kanan meski dengan satu telinga.']]),
  'g17-hearing': L('Nyalakan kompatibilitas alat bantu dengar agar panggilan lebih jelas.', [
    ...settings('Aksesibilitas', 'Peningkatan pendengaran', 'Dukungan alat bantu dengar'),
    ['Ketuk sakelar ‘Kompatibilitas alat bantu dengar’ untuk menyalakannya.', 'Panggilan terdengar lebih jelas dengan alat bantu dengar.'], ['Sambungkan alat bantu dengar Bluetooth di menu Bluetooth.']]),
  'g17-touch': L('Permudah sentuhan: jawab dengan sekali ketuk, ubah jeda sentuh dan tahan, dan atur pintasan aksesibilitas.', [
    ...settings('Aksesibilitas', 'Interaksi dan kecekatan'), ['Ketuk sakelar ‘Mode sekali ketuk’ untuk menyalakannya.', 'Anda bisa menjawab panggilan dengan sekali ketuk, bukan mengusap.'],
    ['Ketuk ‘Jeda sentuh dan tahan’.', 'Jika sulit menahan, buat waktunya lebih lama.'], ['Pilih waktu yang diinginkan.'], ['Ketuk tombol Kembali dua kali.'],
    ['Ketuk ‘Pintasan aksesibilitas’.', 'Fitur aksesibilitas yang sering dipakai bisa dinyalakan dengan satu tombol.']]),
  'g18-usage': L('Cari tahu aplikasi mana yang paling boros baterai.', [
    ...settings('Baterai', 'Penggunaan harian'), ['Lihat aplikasi yang paling banyak memakai baterai.', 'Jika aplikasi yang jarang dipakai boros, tutup atau hapus.']]),
  'g18-saver': L('Nyalakan Hemat daya agar baterai lebih awet.', [
    ...settings('Baterai'), ['Ketuk sakelar ‘Hemat daya’ untuk menyalakannya.', 'Baterai lebih awet. Beberapa notifikasi aplikasi mungkin datang terlambat.', 'Bisa juga dinyalakan dengan tombol ‘Hemat daya’ di panel pengaturan cepat.']]),
  'g18-storage': L('Periksa sisa ruang penyimpanan di ponsel.', [
    ...settings('Perawatan perangkat', 'Penyimpanan'), ['Periksa sisa ruangnya.', 'Mengosongkan sampah dan menghapus file ganda akan menambah ruang.']]),
  'g18-clean': L('Temukan dan hapus file besar yang tidak lagi diperlukan di File Saya.', [
    open('File Saya'), ['Ketuk ‘Kelola penyimpanan’.'], ['Ketuk ‘File besar’.'], ['Pilih hanya file yang tidak diperlukan lalu ketuk ‘Hapus’.']]),
  'g18-care': L('Periksa dan rapikan ponsel dengan Perawatan perangkat.', [...settings('Perawatan perangkat'), ['Ketuk ‘Optimalkan sekarang’.', 'Menutup aplikasi yang tidak dipakai dan memeriksa ponsel.']]),
  'g18-update': L('Periksa dan pasang pembaruan perangkat lunak di ponsel Galaxy.', [
    ...settings('Pembaruan perangkat lunak'), ['Ketuk ‘Unduh dan instal’.', 'Jika ada versi baru, akan diunduh dan dipasang. Lakukan saat tersambung Wi-Fi dan sedang mengisi daya.']]),
  'g18-version': L('Temukan nama model dan versi One UI di Pengaturan → Tentang ponsel.', [
    ...settings('Tentang ponsel'), ['Periksa nama model di bagian atas.'], ['Ketuk ‘Informasi perangkat lunak’.'], ['Periksa ‘Versi One UI’.', 'Sampaikan ini ke pusat servis bersama nama model.']]),
  'g19-bixby': L('Atur tombol Samping untuk memanggil Bixby dan minta bantuan dengan suara.', [
    ...settings('Fitur lanjutan', 'Tombol samping'), ['Ketuk ‘Bangunkan Bixby’.', 'Sekarang menahan tombol Samping akan membuka Bixby.'],
    ['Tekan dan tahan tombol Samping lalu katakan keinginan Anda.', 'Contoh: “Pasang alarm jam 7 besok pagi.”'], ['Lepaskan tombol setelah selesai bicara.']]),
  'g19-circle': L('Cari sesuatu di layar dengan melingkarinya memakai Lingkari untuk Mencari.', [
    ['Sentuh dan tahan tombol Beranda di bawah layar.'], ['Gambar lingkaran dengan jari di sekitar yang ingin dicari.'],
    ['Baca hasil pencarian di bawah.', '', 'Bixby Vision tersedia di seri Galaxy S25, S24, dan S23. S26 memakai cara ini (Lingkari untuk Mencari).']]),
  'g19-interpret': L('Nyalakan Terjemahan Langsung di aplikasi Telepon dan pakai saat panggilan.', [
    open('Telepon'), ['Ketuk tiga titik di kanan atas.'], ['Ketuk ‘Pengaturan’.'], ['Ketuk ‘Terjemahan Langsung’.'], ['Ketuk sakelar ‘Terjemahan Langsung’ untuk menyalakannya.'],
    ['Saat panggilan, ketuk ‘Asisten panggilan’.'], ['Ketuk ‘Terjemahan Langsung’.']]),
  'g19-write': L('Perbaiki ejaan dan tata bahasa pesan dengan alat Galaxy AI di keyboard.', [
    open('Pesan'), ['Ketuk sebuah percakapan.'], ['Ketik pesan Anda.'], ['Ketuk ikon Galaxy AI di kiri atas keyboard.'], ['Ketuk ‘Ejaan dan tata bahasa’.', 'Kesalahan diperbaiki. ‘Ringkas’ memendekkan teks panjang.']]),
  'g19-transcribe': L('Ubah rekaman suara menjadi teks dengan Galaxy AI di Perekam Suara.', [
    open('Perekam Suara'), ['Ketuk rekaman yang ingin diubah menjadi teks.'], AI_ICON, ['Ketuk ‘Transkripsi’.'], ['Baca teks yang dihasilkan.']]),
  'g19-photo': L('Hapus orang atau benda dari foto dengan Galaxy AI di Galeri.', [
    GALLERY, ['Ketuk foto yang ingin diedit.'], AI_ICON, ['Ketuk ‘Penghapus objek’.'], ['Telusuri dengan jari sekeliling orang atau benda yang ingin dihapus.'], ['Ketuk ‘Hapus’.'], ['Jika hasilnya bagus, ketuk ‘Simpan’.']]),
  'g19-support': L('Lihat di Pengaturan fitur Galaxy AI apa saja yang didukung ponsel Anda.', [
    ...settings('Galaxy AI'), ['Lihat daftar fitur AI yang bisa dipakai ponsel Anda.', 'Fitur yang tidak ada di daftar tidak didukung di model ini.', 'Beberapa fitur tergantung model dan operator, atau perlu internet.']]),
  'g20-smartview': L('Tampilkan layar ponsel di TV dengan Smart View.', [
    QUICK, ['Ketuk ‘Smart View’.'], ['Ketuk nama TV yang ingin disambungkan.', 'Paling baik jika TV dan ponsel memakai Wi-Fi yang sama.'], ['Ketuk ‘Mulai sekarang’.']]),
  'g20-pc': L('Sambungkan ponsel Galaxy ke PC Windows dengan Tautan ke Windows.', [
    ...settings('Perangkat tersambung', 'Tautan ke Windows'), ['Baca petunjuk di layar.'], ['Di komputer, buka alamat yang ditampilkan untuk menyelesaikan sambungan.']]),
  'g20-dex': L('Pelajari apa itu Samsung DeX dan di mana pengaturannya.', [...settings('Perangkat tersambung', 'Samsung DeX'), ['Baca informasinya.']]),
  'g20-watch': L('Sambungkan jam atau earbuds Galaxy dengan aplikasi Galaxy Wearable.', [
    ['Ketuk aplikasi ‘Galaxy Wearable’.', 'Jika tidak ada di layar Beranda, cari di layar Aplikasi.'], ['Ketuk ‘Mulai’.'], ['Ikuti petunjuk di layar untuk menyelesaikan sambungan.']]),
  'g20-smartthings': L('Sambungkan peralatan rumah ke ponsel dengan SmartThings.', [
    open('SmartThings'), ['Ketuk ‘+’ (Tambah) di atas.'], ['Pilih peralatan yang ingin disambungkan.'], ['Ikuti petunjuk di layar untuk menyelesaikan sambungan.']]),
  'g20-musicshare': L('Nyalakan Music Share agar teman bisa memutar musik di speaker Bluetooth Anda.', [
    ...settings('Perangkat tersambung', 'Music Share'), ['Ketuk sakelar ‘Music Share’ untuk menyalakannya.', 'Teman bisa memutar musik dari ponselnya di speaker Bluetooth Anda.']]),
  'g21-split': L('Pakai dua aplikasi sekaligus dengan layar terpisah.', [
    ['Ketuk tombol Terbaru di kiri bawah.'], ['Ketuk ikon kecil di atas sebuah aplikasi.'], ['Ketuk ‘Buka di tampilan layar terpisah’.'], ['Pilih aplikasi kedua untuk bagian bawah.']]),
  'g21-modes': L('Nyalakan mode Tidur di Mode dan Rutinitas.', [
    ...settings('Mode dan Rutinitas', 'Mode'), ['Ketuk ‘Tidur’.'], ['Ketuk ‘Aktifkan’.', 'Saat tidur, notifikasi senyap dan layar lebih gelap.']]),
  'g21-aod': L('Tampilkan jam meski layar mati dengan Always On Display.', [
    ...settings('Layar kunci dan AOD'), ['Ketuk sakelar ‘Always On Display’ untuk menyalakannya.', 'Jam terlihat walau layar mati. Sedikit lebih boros baterai.'],
    ['Untuk mengubah gaya jam, sentuh dan tahan layar kunci.']]),
  'g21-wellbeing': L('Lihat berapa lama Anda memakai ponsel hari ini dan atur timer aplikasi.', [
    ...settings('Kesejahteraan Digital'), ['Lihat lama pemakaian ponsel hari ini.'], ['Ketuk ‘Timer aplikasi’.', 'Anda bisa membatasi waktu harian tiap aplikasi.']]),
  'g21-apps': L('Kenali Samsung Health, Samsung Kids, dan Game Booster.', [
    ['Ketuk aplikasi ‘Samsung Health’.', 'Jika tidak ada di layar Beranda, cari di layar Aplikasi.'], ['Lihat jumlah langkah dan catatan olahraga.'],
    ...settings('Aplikasi', 'Samsung Kids'), ['Ketuk ‘Buka’.', 'Anda bisa memilih aplikasi dan batas waktu untuk cucu.'], ['Saat bermain gim, ketuk ikon Game Booster di bawah layar.']]),
  'g21-samsung': L('Temukan aplikasi Samsung.com dan Samsung Global Goals, serta Samsung News.', [
    open('Samsung.com'), ['Di sini Anda bisa membaca kabar produk Samsung dan mendapat bantuan.'], HOME_BTN,
    ['Ketuk aplikasi ‘Samsung Global Goals’.', 'Cari ‘Samsung Global Goals’ di layar Aplikasi.'], ['Cari Samsung News dengan pencarian di layar Aplikasi.']]),
  'g21-spen': L('Keluarkan S Pen, buka menunya, dan coba aplikasi PENUP di model Ultra yang mendukung.', [
    ['Tekan perlahan ujung S Pen di bagian bawah ponsel.'], ['Ketuk fitur yang diinginkan di menu layar.'], open('PENUP'), ['Setelah selesai, dorong S Pen masuk sampai berbunyi klik.']]),
  'g22-ring': L('Yang perlu diperiksa saat ponsel tidak berdering.', [
    QUICK, ['Ketuk tombol ‘Suara’.', 'Jika diatur ke Senyap atau Getar, ketuk untuk mengubahnya ke Suara.'], ['Jika ‘Jangan ganggu’ berwarna biru (menyala), ketuk untuk mematikannya.'],
    ['Tekan tombol Volume naik di samping untuk membesarkan suara.']]),
  'g22-network': L('Yang perlu diperiksa saat panggilan atau internet tidak berfungsi.', [
    QUICK, ['Jika ‘Mode pesawat’ menyala, ketuk untuk mematikannya.'], ['Jika ‘Data seluler’ mati, ketuk untuk menyalakannya.'], ['Jika sinyal lemah, coba pindah tempat.'],
    ['Jika masih tidak bisa, mulai ulang ponsel.']]),
  'g22-charge': L('Yang perlu diperiksa saat ponsel Galaxy tidak mengisi daya.', [
    ['Periksa apakah kabel dan pengisi daya tercolok penuh.'], ['Jika lubang pengisian basah, keringkan sampai benar-benar kering sebelum mengisi daya.'],
    ...settings('Baterai', 'Pengaturan pengisian daya'), ['Jika masih tidak mengisi, bawa ponsel, pengisi daya, dan kabel ke pusat servis.']]),
  'g22-hot': L('Yang perlu dilakukan saat ponsel panas.', [
    ['Jika sedang mengisi daya, cabut pengisi dayanya.'], ['Ketuk tombol Terbaru.'], ['Ketuk ‘Tutup semua’ untuk menutup aplikasi.'], ['Berhenti memakai ponsel sebentar dan dinginkan di tempat sejuk.']]),
  'g22-freeze': L('Paksa mulai ulang ponsel Galaxy yang macet dengan dua tombol.', [
    ['Tekan dan tahan tombol Samping dan Volume turun bersamaan lebih dari 7 detik.', 'Tahan terus sampai layar mati.'], ['Setelah layar mati, lepaskan dan tunggu.']]),
  'g22-water': L('Yang perlu diperiksa dan dilakukan saat ponsel basah.', [
    ['Lap dengan kain lembut sampai benar-benar kering.'], ['Jangan colokkan pengisi daya sampai benar-benar kering.'],
    ['Jika terkena air laut, air kolam, atau air sabun, bilas dengan air bersih lalu keringkan.'], ['Jika ada yang aneh, segera bawa ke pusat servis.']]),
  'g22-members': L('Periksa masalah ponsel dengan Diagnostik ponsel di Samsung Members.', [
    ['Ketuk aplikasi ‘Samsung Members’.', 'Jika tidak ada di layar Beranda, cari di layar Aplikasi.'], ['Ketuk ‘Dukungan’.'], ['Ketuk ‘Diagnostik ponsel’.'], ['Ketuk ‘Uji semua’ atau item yang ingin diperiksa.']]),
  'g22-service': L('Catat model dan gejala sebelum menghubungi servis Samsung.', [
    ...settings('Tentang ponsel'), ['Catat nomor model (misalnya SM-S942N).'], ['Catat kapan dan bagaimana masalahnya terjadi.'],
    ['Hubungi dukungan Samsung di negara Anda atau buat janji di pusat servis.', 'Temukan halaman dukungan negara Anda di samsung.com/support.']]),
};
