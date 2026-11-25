// English picture words → Malay.
// NOTE: built from the Indonesian table with Indonesian→Malay word replacements (WORDS) plus direct fixes (FIX).
// It is a draft for review by a native Malay speaker, like every other non-reviewed page.
import { ID_FROM_EN } from '../id/from-en.js';

const WORDS = [
  ['Pengaturan', 'Tetapan'], ['pengaturan', 'tetapan'], ['Koneksi', 'Sambungan'], ['koneksi', 'sambungan'], ['Kontak', 'Kenalan'], ['kontak', 'kenalan'],
  ['Pesan', 'Mesej'], ['pesan', 'mesej'], ['Hapus', 'Padam'], ['hapus', 'padam'], ['Ketuk', 'Ketik'], ['ketuk', 'ketik'], ['Layar Beranda', 'Skrin Utama'],
  ['layar Beranda', 'skrin Utama'], ['Beranda', 'Utama'], ['Layar', 'Skrin'], ['layar', 'skrin'], ['Ponsel', 'Telefon'], ['ponsel', 'telefon'], ['Aplikasi', 'Aplikasi'],
  ['Unduhan', 'Muat turun'], ['unduh', 'muat turun'], ['Unduh', 'Muat turun'], ['Kata sandi', 'Kata laluan'], ['kata sandi', 'kata laluan'], ['Perangkat', 'Peranti'], ['perangkat', 'peranti'],
  ['Pembaruan', 'Kemas kini'], ['pembaruan', 'kemas kini'], ['Perbarui', 'Kemas kini'], ['perangkat lunak', 'perisian'], ['Pencadangan', 'Sandaran'], ['pencadangan', 'sandaran'],
  ['Cadangkan', 'Sandarkan'], ['Senter', 'Lampu suluh'], ['Notifikasi', 'Pemberitahuan'], ['notifikasi', 'pemberitahuan'], ['Getar', 'Getar'], ['Kecerahan', 'Kecerahan'],
  ['Simpan', 'Simpan'], ['Batal', 'Batal'], ['Tambah', 'Tambah'], ['Lihat', 'Lihat'], ['Gunakan', 'Gunakan'], ['Speaker', 'Pembesar suara'], ['speaker', 'pembesar suara'],
  ['Jangan ganggu', 'Jangan ganggu'], ['Mode', 'Mod'], ['mode', 'mod'], ['Data seluler', 'Data mudah alih'], ['data seluler', 'data mudah alih'], ['seluler', 'mudah alih'],
  ['Hotspot Seluler', 'Tempat Liputan Mudah Alih'], ['Hemat daya', 'Penjimatan kuasa'], ['Aksesibilitas', 'Kebolehcapaian'], ['aksesibilitas', 'kebolehcapaian'],
  ['Sidik jari', 'Cap jari'], ['sidik jari', 'cap jari'], ['Kunci layar', 'Kunci skrin'], ['Galeri', 'Galeri'], ['Kalender', 'Kalendar'], ['File Saya', 'Fail Saya'],
  ['File', 'Fail'], ['file', 'fail'], ['Perekam Suara', 'Perakam Suara'], ['Rekaman', 'Rakaman'], ['rekaman', 'rakaman'], ['Rekam', 'Rakam'], ['rekam', 'rakam'],
  ['Tentang ponsel', 'Perihal telefon'], ['Tentang telefon', 'Perihal telefon'], ['Informasi', 'Maklumat'], ['informasi', 'maklumat'], ['Keamanan', 'Keselamatan'], ['keamanan', 'keselamatan'],
  ['Keselamatan dan darurat', 'Keselamatan dan kecemasan'], ['darurat', 'kecemasan'], ['Darurat', 'Kecemasan'], ['Penyimpanan', 'Storan'], ['penyimpanan', 'storan'],
  ['Baterai', 'Bateri'], ['baterai', 'bateri'], ['Perawatan perangkat', 'Penjagaan peranti'], ['Perawatan peranti', 'Penjagaan peranti'], ['Kesejahteraan Digital', 'Kesejahteraan Digital'],
  ['Akun', 'Akaun'], ['akun', 'akaun'], ['Kelola', 'Urus'], ['kelola', 'urus'], ['Pulihkan', 'Pulihkan'], ['Sampah', 'Tong kitar semula'], ['Jam', 'Jam'], ['Cuaca', 'Cuaca'],
  ['Mulai', 'Mula'], ['mulai', 'mula'], ['Matikan', 'Matikan'], ['Mulai ulang', 'Mula semula'], ['Mula ulang', 'Mula semula'], ['Hari ini', 'Hari ini'], ['Kemarin', 'Semalam'],
  ['Bagikan', 'Kongsi'], ['bagikan', 'kongsi'], ['Berbagi', 'Berkongsi'], ['berbagi', 'berkongsi'], ['Salin', 'Salin'], ['Tempel', 'Tampal'], ['Pilih', 'Pilih'], ['Cari', 'Cari'],
  ['Terbaru', 'Terkini'], ['terbaru', 'terkini'], ['Papan tombol', 'Pad kekunci'], ['Jawab', 'Jawab'], ['Tolak', 'Tolak'], ['Bisu', 'Senyap'], ['Panggilan', 'Panggilan'],
  ['Blokir', 'Sekat'], ['blokir', 'sekat'], ['Penghemat data', 'Penjimat data'], ['Terpakai', 'Digunakan'], ['terpakai', 'digunakan'], ['Gim', 'Permainan'], ['gim', 'permainan'],
  ['Instal', 'Pasang'], ['instal', 'pasang'], ['Copot pemasangan', 'Nyahpasang'], ['Copot', 'Nyahpasang'], ['Lampu kilat', 'Denyar'], ['Potret', 'Potret'], ['Malam', 'Malam'],
  ['Tangkapan layar', 'Tangkapan skrin'], ['Perekam layar', 'Perakam skrin'], ['Ubah', 'Tukar'], ['ubah', 'tukar'], ['Buat', 'Cipta'], ['Wallpaper', 'Kertas dinding'], ['wallpaper', 'kertas dinding'],
  ['Pengingat', 'Peringatan'], ['pengingat', 'peringatan'], ['Catatan', 'Nota'], ['catatan', 'nota'], ['Belanja', 'Barang dapur'], ['Berhenti', 'Berhenti'], ['Jeda', 'Jeda'],
  ['Kartu', 'Kad'], ['kartu', 'kad'], ['Pengenalan wajah', 'Pengecaman wajah'], ['Usap', 'Leret'], ['usap', 'leret'], ['Pola', 'Corak'], ['Tidak ada', 'Tiada'],
  ['Izin', 'Kebenaran'], ['izin', 'kebenaran'], ['Mikrofon', 'Mikrofon'], ['Folder Aman', 'Folder Selamat'], ['Golongan darah', 'Jenis darah'], ['Obat-obatan', 'Ubat-ubatan'],
  ['Temukan Ponsel Saya', 'Cari Telefon Saya'], ['Temukan Telefon Saya', 'Cari Telefon Saya'], ['Pembesaran', 'Pembesaran'], ['Kaca pembesar', 'Kanta pembesar'], ['Teks Langsung', 'Kapsyen Langsung'],
  ['Keseimbangan', 'Keseimbangan'], ['Singkat', 'Pendek'], ['Sedang', 'Sederhana'], ['Lama', 'Panjang'], ['Penggunaan harian', 'Penggunaan harian'], ['Optimalkan', 'Optimumkan'],
  ['Memori', 'Memori'], ['ganda', 'pendua'], ['besar', 'besar'], ['Versi', 'Versi'], ['Fitur lanjutan', 'Ciri lanjutan'], ['Fitur', 'Ciri'], ['fitur', 'ciri'], ['Tombol', 'Butang'], ['tombol', 'butang'],
  ['Terjemahan', 'Terjemahan'], ['Juru Bahasa', 'Jurubahasa'], ['Asisten', 'Pembantu'], ['Penghapus objek', 'Pemadam objek'], ['Pindahkan', 'Alih'], ['Gaya', 'Gaya'],
  ['Tautan ke Windows', 'Paut ke Windows'], ['Tidur', 'Tidur'], ['Berkendara', 'Memandu'], ['berkendara', 'memandu'], ['Olahraga', 'Senaman'], ['Santai', 'Santai'], ['Menyala', 'Hidup'],
  ['Aktifkan', 'Hidupkan'], ['langkah', 'langkah'], ['Dukungan', 'Sokongan'], ['dukungan', 'sokongan'], ['Komunitas', 'Komuniti'], ['Pusat servis', 'Pusat servis'],
  ['Diagnostik ponsel', 'Diagnostik telefon'], ['Kirim masukan', 'Hantar maklum balas'], ['Kirim', 'Hantar'], ['kirim', 'hantar'], ['Terima', 'Terima'],
  ['Nomor', 'Nombor'], ['nomor', 'nombor'], ['bisa', 'boleh'], ['Bisa', 'Boleh'], ['merusak', 'merosakkan'], ['petunjuk', 'arahan'], ['Petunjuk', 'Arahan'], ['Email', 'E-mel'],
  ['mengisi daya', 'mengecas'], ['Mengisi daya', 'Mengecas'], ['pengisi daya', 'pengecas'], ['Pengisi daya', 'Pengecas'], ['pengisian daya', 'pengecasan'], ['Mencolok', 'Memasang'],
  ['lubang', 'port'], ['tak terjawab', 'terlepas'], ['nirkabel', 'tanpa wayar'], ['Nirkabel', 'Tanpa wayar'], ['berkedip', 'berkelip'], ['semua suara', 'semua bunyi'], ['lebih baru', 'lebih baharu'],
];
const FIX = {
  'Wednesday, November 25': 'Rabu, 25 November', Display: 'Paparan', 'Home screen': 'Skrin Utama', Connections: 'Sambungan', 'Lock screen and AOD': 'Skrin kunci dan AOD',
  'Mobile 010-0000-0000': 'Telefon bimbit 012-000 0000', 'Carrier · 010-0000-0000': 'Pembawa · 012-000 0000', Emma: 'Aminah', 'Messages · Emma': 'Mesej · Aminah', 'Emma’s contact': 'Kenalan Aminah',
  'Seoul weather': 'Cuaca Kuala Lumpur', 'Seoul weather - forecast': 'Cuaca Kuala Lumpur - ramalan', 'Seoul 12° Sunny': 'Kuala Lumpur 31° Cerah', 'Tomorrow 14° · Next day 9°': 'Esok 30° · Lusa 29°',
  'Missed call · 9:12 AM': 'Panggilan terlepas · 9:12 pagi', 'Phone · Missed call': 'Telefon · Panggilan terlepas', '7:00 AM': '7:00 pagi', '7:30 AM': '7:30 pagi', '3:00 PM': '3:00 petang',
  'Nov 27, 2:00 PM': '27 Nov, 2:00 petang', 'Doctor 2 PM': 'Doktor 2 petang', 'Font size and style': 'Saiz dan gaya fon', 'Bold font': 'Fon tebal', 'Font size': 'Saiz fon', 'Font style': 'Gaya fon',
  'Screen zoom': 'Zum skrin', 'Screen timeout': 'Tamat masa skrin', 'Easy mode': 'Mod mudah', 'Sounds and vibration': 'Bunyi dan getaran', Sound: 'Bunyi', Ringtone: 'Nada dering', Volume: 'Kelantangan',
  'Volume up': 'Kelantangan naik', 'Volume down': 'Kelantangan turun', 'Side button': 'Butang sisi', Here: 'Di sini', Hold: 'Tahan', 'Power off': 'Matikan', Restart: 'Mula semula',
  'Auto rotate': 'Autoputar', 'Airplane mode': 'Mod pesawat', Flashlight: 'Lampu suluh', 'Mobile data': 'Data mudah alih', 'Power saving': 'Penjimatan kuasa', 'Screen recorder': 'Perakam skrin',
  Contacts: 'Kenalan', Messages: 'Mesej', Settings: 'Tetapan', 'My Files': 'Fail Saya', Calendar: 'Kalendar', 'Voice Recorder': 'Perakam Suara', Keypad: 'Pad kekunci', Recents: 'Terkini',
  'Close all': 'Tutup semua', 'Do not disturb': 'Jangan ganggu', Notifications: 'Pemberitahuan', 'App notifications': 'Pemberitahuan aplikasi', Clear: 'Kosongkan', 'Wallpaper and style': 'Kertas dinding dan gaya',
  'Change wallpapers': 'Tukar kertas dinding', 'Add to Home': 'Tambah ke Utama', 'Security and privacy': 'Keselamatan dan privasi', 'Safety and emergency': 'Keselamatan dan kecemasan',
  'Accounts and backup': 'Akaun dan sandaran', 'Device care': 'Penjagaan peranti', 'About phone': 'Perihal telefon', 'Software information': 'Maklumat perisian', 'Software update': 'Kemas kini perisian',
  'Download and install': 'Muat turun dan pasang', Accessibility: 'Kebolehcapaian', 'Vision enhancements': 'Peningkatan penglihatan', 'Hearing enhancements': 'Peningkatan pendengaran',
  'Interaction and dexterity': 'Interaksi dan ketangkasan', 'Single tap mode': 'Mod satu ketikan', 'Touch and hold delay': 'Lengah sentuh dan tahan', 'Live Caption': 'Kapsyen Langsung',
  'Use Live Caption': 'Gunakan Kapsyen Langsung', 'Hearing aid support': 'Sokongan alat bantu pendengaran', 'Hearing aid compatibility': 'Keserasian alat bantu pendengaran',
  'Mobile Hotspot and Tethering': 'Tempat Liputan Mudah Alih dan Penambatan', 'Mobile Hotspot': 'Tempat Liputan Mudah Alih', 'NFC and contactless payments': 'NFC dan pembayaran tanpa sentuh',
  'Data usage': 'Penggunaan data', 'Mobile data usage': 'Penggunaan data mudah alih', 'Connected devices': 'Peranti bersambung', 'Link to Windows': 'Paut ke Windows', 'Modes and Routines': 'Mod dan Rutin',
  'Advanced features': 'Ciri lanjutan', 'Find My Mobile': 'Cari Telefon Saya', 'Allow this phone to be found': 'Benarkan telefon ini ditemui', 'Lost device protection': 'Perlindungan peranti hilang',
  'Medical info': 'Maklumat perubatan', 'Emergency contacts': 'Kenalan kecemasan', 'Emergency SOS': 'SOS kecemasan', 'Secure Folder': 'Folder Selamat', 'Recycle bin': 'Tong kitar semula',
  'Charging settings': 'Tetapan pengecasan', Battery: 'Bateri', 'Daily usage': 'Penggunaan harian', Storage: 'Storan', 'Manage storage': 'Urus storan', 'Large files': 'Fail besar',
  'Optimize now': 'Optimumkan sekarang', 'Phone diagnostics': 'Diagnostik telefon', Support: 'Sokongan', 'Open in split screen view': 'Buka dalam paparan skrin pisah', 'Object eraser': 'Pemadam objek',
  Transcribe: 'Transkripsi', 'Live translate': 'Terjemahan Langsung', 'Call assist': 'Pembantu panggilan', 'Spelling and grammar': 'Ejaan dan tatabahasa', 'Chat translation': 'Terjemahan sembang',
  Summarize: 'Ringkaskan', 'Speed dial numbers': 'Nombor dail pantas', 'Block numbers': 'Sekat nombor', 'Add phone number': 'Tambah nombor telefon', 'Screen lock and biometrics': 'Kunci skrin dan biometrik',
  'Screen lock type': 'Jenis kunci skrin', Fingerprints: 'Cap jari', 'Face recognition': 'Pengecaman wajah', 'Permissions used in last 24 hours': 'Kebenaran digunakan dalam 24 jam terakhir',
  'More security settings': 'Lagi tetapan keselamatan', 'Passwords, passkeys and autofill': 'Kata laluan, kunci laluan dan autoisi', 'Bring data from old device': 'Bawa data dari peranti lama',
  'Manage accounts': 'Urus akaun', 'Restore data': 'Pulihkan data', 'Magnification': 'Pembesaran', 'Magnification shortcut': 'Pintasan pembesaran', 'Triple tap screen': 'Ketik skrin tiga kali',
  'High contrast fonts': 'Fon kontras tinggi', 'Mono audio': 'Audio mono', 'Accessibility shortcut': 'Pintasan kebolehcapaian', 'SIM manager': 'Pengurus SIM',
  'can you come to the doctor with me tomorow': 'boleh temankan saya ke doktor esk', 'Hello how are yuo': 'Helo apa kbar', Helo: 'Hleo', Hello: 'Helo', 'Hello 123': 'Helo 123',
  'How are you?': 'Apa khabar?', 'Let’s have dinner': 'Jom makan malam', 'I’m here': 'Saya dah sampai', 'Great. See you at 6': 'Baik. Jumpa pukul 6', '110 Main Street': 'Jalan Utama 110',
  'Take blood pressure pill': 'Makan ubat darah tinggi', 'Milk, tofu, apples': 'Susu, tauhu, epal', Groceries: 'Barang dapur', 'Doctor visit': 'Jumpa doktor', Clinic: 'Klinik', Son: 'Anak lelaki', 'e.g. 2 = Son': 'cth. 2 = Anak lelaki',
};
export const MS_FROM_EN = Object.fromEntries(Object.entries(ID_FROM_EN).map(([en, id]) => {
  if (en in FIX) return [en, FIX[en]];
  let v = id;
  for (const [a, b] of WORDS) v = v.split(a).join(b);
  return [en, v];
}));
