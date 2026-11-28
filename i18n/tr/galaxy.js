// Türkçe Galaxy dersleri (taslak, gözden geçirilmedi → noindex, site haritasında yok).
// steps[i], aynı dersin i. Korece kartına karşılık gelir.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Temel bilgiler', life: 'Günlük kullanım', apply: 'Diğer özellikler', adv: 'İleri düzey ve sorun giderme' };

export const CATEGORIES = {
  1: ['Telefonu açıp kapatma', 'Tuşlar, şarj, güç ve kilit ekranı'],
  2: ['Dokunma, basılı tutma ve kaydırma', 'Temel dokunuşlar ve gezinme tuşları'],
  3: ['Yazı ve sesi rahatlatma', 'Daha büyük yazı, parlaklık, ekran zaman aşımı ve ses'],
  4: ['Arama yapma ve cevaplama', 'Arama, cevaplama, hoparlör ve engelleme'],
  5: ['Kişileri kaydetme ve bulma', 'Yeni kişiler, arama, düzenleme ve favoriler'],
  6: ['Mesaj gönderme', 'Yazma, düzeltme, kopyalama ve fotoğraf ekleme'],
  7: ['Bildirimler ve hızlı ayarlar', 'Bildirim paneli, el feneri, döndürme ve Rahatsız etmeyin'],
  8: ['Wi-Fi, veri ve Bluetooth', 'İnternete ve diğer cihazlara bağlanma'],
  9: ['İnternette arama ve uygulama yükleme', 'Tarayıcı, QR kodları, indirmeler ve uygulama mağazaları'],
  10: ['Fotoğraf ve video çekme', 'Kamera, özçekim, yakınlaştırma, zamanlayıcı ve video'],
  11: ['Fotoğraf ve dosyaları düzenleme', 'Galeri, düzenleme, geri yükleme ve Dosyalarım'],
  12: ['Ana ekran ve araçlar', 'Uygulamalar, klasörler, duvar kâğıdı, alarm, takvim ve notlar'],
  13: ['Aileyle fotoğraf paylaşma', 'E-posta, video ve görüntülü arama'],
  14: ['Samsung Wallet ile ödeme', 'Wallet’ı açma ve kart seçme'],
  15: ['Telefonu güvenle kullanma', 'Ekran kilidi, biyometri, izinler ve acil SOS'],
  16: ['Yeni telefona geçme', 'Kurulum, hesaplar, Smart Switch ve yedekleme'],
  17: ['Görme, işitme ve dokunma', 'Büyütme, kontrast, TalkBack ve altyazılar'],
  18: ['Pil ve depolama', 'Güç tasarrufu, depolama, cihaz bakımı ve güncellemeler'],
  19: ['Galaxy AI ve Bixby', 'Sesli istekler ve Galaxy AI özellikleri'],
  20: ['TV, bilgisayar ve saate bağlanma', 'Smart View, PC, DeX, giyilebilirler ve SmartThings'],
  21: ['Daha fazla faydalı özellik', 'Bölünmüş ekran, modlar ve rutinler, Always On Display'],
  22: ['Bir sorun olduğunda', 'Ses yok, şebeke yok, şarj, ısınma ve donma'],
};

export const TITLES = {
  'g01-buttons': ['yan-tuslar', 'Yan tuşları bulma'], 'g01-charge': ['telefonu-sarj-etme', 'Telefonu şarj etme'],
  'g01-power': ['kapatip-acma', 'Telefonu kapatıp yeniden açma'], 'g01-restart': ['yeniden-baslatma', 'Telefonu yeniden başlatma'],
  'g01-lock': ['ekrani-kilitleme', 'Ekranı kilitleme ve kilidini açma'], 'g02-tap': ['dokunma', 'Bir kez dokunma'],
  'g02-hold': ['basili-tutma', 'Dokunup basılı tutma'], 'g02-swipe': ['kaydirma', 'Kaydırarak gezinme'],
  'g02-pinch': ['iki-parmakla-yakinlastirma', 'İki parmakla yakınlaştırma'], 'g02-back': ['geri-tusu', 'Geri gitme'],
  'g02-home': ['ana-ekran-tusu', 'Ana ekrana dönme'], 'g02-recent': ['son-uygulamalar', 'Son uygulamaları açma'],
  'g03-font': ['yaziyi-buyutme', 'Yazıyı büyütme'], 'g03-zoom': ['ekran-yakinlastirma', 'Ekranı ve simgeleri büyütme'],
  'g03-easy': ['kolay-mod', 'Kolay modu açma'], 'g03-bright': ['parlaklik', 'Parlaklığı ayarlama'],
  'g03-timeout': ['ekran-zaman-asimi', 'Ekranın ne zaman kapanacağını değiştirme'], 'g03-sound': ['zil-sesi-titresim', 'Zil sesi ve titreşimi ayarlama'],
  'g04-call': ['arama-yapma', 'Tuş takımıyla arama yapma'], 'g04-answer': ['cevaplama-reddetme', 'Aramayı cevaplama veya reddetme'],
  'g04-speaker': ['hoparlor', 'Arama sırasında hoparlörü açma'], 'g04-missed': ['cevapsiz-aramayi-geri-arama', 'Cevapsız aramayı geri arama'],
  'g04-log': ['arama-kaydi', 'Arama kaydını görme'], 'g04-block': ['numara-engelleme', 'İstenmeyen numaraları engelleme'],
  'g05-new': ['kisi-kaydetme', 'Yeni kişi kaydetme'], 'g05-search': ['kisi-arama', 'Kişiyi adıyla arama'],
  'g05-edit': ['numara-duzenleme', 'Numarayı düzeltme'], 'g05-speed': ['hizli-arama', 'Sık aranan kişileri ekleme'],
  'g05-share': ['kisi-paylasma', 'Kişi paylaşma'], 'g06-send': ['mesaj-gonderme-yanitlama', 'Mesaj gönderme ve yanıtlama'],
  'g06-type': ['harf-rakam-simge', 'Harf, rakam ve simge yazma'], 'g06-fix': ['yazim-hatasi-duzeltme', 'Yazım hatalarını düzeltme'],
  'g06-copy': ['kopyala-yapistir', 'Kopyalama ve yapıştırma'], 'g06-photo': ['fotograf-ekleme', 'Mesaja fotoğraf ekleme'],
  'g06-translate': ['metin-cevirme', 'Metni çevirme'], 'g07-noti': ['bildirimler', 'Bildirimleri görme ve temizleme'],
  'g07-appnoti': ['uygulama-bildirimleri', 'Uygulama bildirimlerini ayarlama'], 'g07-quick': ['hizli-ayarlar', 'Hızlı ayarlar panelini açma'],
  'g07-flash': ['el-feneri', 'El fenerini açma'], 'g07-rotate': ['ekran-dondurme', 'Ekran döndürmeyi ayarlama'],
  'g07-dnd': ['rahatsiz-etmeyin-ucak-modu', 'Rahatsız etmeyin ve Uçak modunu kullanma'], 'g08-wifi': ['wifi-baglanma', 'Wi-Fi’ye bağlanma'],
  'g08-data': ['mobil-veri', 'Mobil veriyi açıp kapatma'], 'g08-usage': ['veri-kullanimi', 'Veri kullanımını görme'],
  'g08-bt': ['bluetooth-kulaklik', 'Bluetooth kulaklık bağlama'], 'g08-hotspot': ['mobil-erisim-noktasi', 'Mobil Erişim Noktası kullanma'],
  'g08-location': ['konum-nfc', 'Konum ve NFC ayarlarını bulma'], 'g09-search': ['samsung-internet-arama', 'Samsung Internet’te arama'],
  'g09-bookmark': ['sayfa-kaydetme', 'Sık ziyaret edilen sayfaları kaydetme'], 'g09-qr': ['qr-kod-acma', 'QR kodu açma'],
  'g09-files': ['indirilen-dosyalar', 'İndirilen dosyaları bulma'], 'g09-stores': ['play-store-galaxy-store', 'Play Store ve Galaxy Store kullanma'],
  'g09-install': ['uygulama-yukleme-guncelleme-silme', 'Uygulama yükleme, güncelleme ve silme'], 'g09-google': ['google-uygulamalari', 'Google ve operatör uygulamalarını bulma'],
  'g10-open': ['kamerayi-acma', 'Kamerayı açma'], 'g10-focus': ['odaklama', 'Kamerayı odaklama'],
  'g10-switch': ['kamera-degistirme', 'Ön ve arka kamera arasında geçiş'], 'g10-selfie': ['ozcekim', 'Özçekim yapma'],
  'g10-zoom': ['yakinlastirarak-cekme', 'Yakınlaştırarak çekme'], 'g10-timer': ['kamera-zamanlayici', 'Kamera zamanlayıcısını kullanma'],
  'g10-modes': ['portre-gece-modu', 'Portre ve Gece modunu deneme'], 'g10-video': ['video-cekme', 'Video çekme'],
  'g10-capture': ['ekran-goruntusu-kaydi', 'Ekran görüntüsü alma veya ekranı kaydetme'], 'g11-latest': ['son-fotograf', 'Az önce çekilen fotoğrafı bulma'],
  'g11-album': ['albüm-olusturma', 'Albüm oluşturma'], 'g11-edit': ['kirpma-aydinlatma', 'Fotoğrafı kırpma ve aydınlatma'],
  'g11-text': ['fotograftan-metin-kopyalama', 'Fotoğraftaki metni kopyalama'], 'g11-multi': ['birden-fazla-fotograf', 'Birden fazla fotoğraf paylaşma'],
  'g11-restore': ['silinen-fotograflari-geri-yukleme', 'Silinen fotoğrafları geri yükleme'], 'g11-docs': ['dosyalarim-belgeler', 'Dosyalarım’da belge bulma'],
  'g11-quickshare': ['quick-share', 'Quick Share ile dosya gönderme'], 'g12-addapp': ['ana-ekrana-uygulama', 'Ana ekrana uygulama koyma'],
  'g12-folder': ['klasor-widget', 'Klasör ve widget oluşturma'], 'g12-wallpaper': ['duvar-kagidi-tema', 'Duvar kâğıdı, tema ve kilit ekranını değiştirme'],
  'g12-alarm': ['alarm-zamanlayici', 'Alarm ve zamanlayıcı kurma'], 'g12-calendar': ['takvime-randevu', 'Takvime randevu ekleme'],
  'g12-reminder': ['hatirlatici', 'Yapılacaklar için hatırlatma alma'], 'g12-note': ['samsung-notes', 'Samsung Notes kullanma'],
  'g12-recorder': ['ses-kaydedici', 'Sesinizi kaydetme'], 'g12-tools': ['hava-hesap-makinesi-radyo', 'Hava durumu, hesap makinesi ve radyo kullanma'],
  'x13-gmail': ['gmail-ile-fotograf', 'Gmail ile e-postayla fotoğraf gönderme'], 'x13-video': ['aileye-video', 'Aileye video gönderme'],
  'x13-meet': ['google-meet-goruntulu-arama', 'Google Meet ile görüntülü arama'], 'g14-open': ['samsung-wallet-acma', 'Samsung Wallet’ı açma'],
  'g14-add': ['kart-ekleme', 'Kart ekleme ekranını görme'], 'g14-pay': ['odeme-karti-secme', 'Ödeme için kart seçme'],
  'g15-pin': ['pin-olusturma', 'PIN oluşturma'], 'g15-bio': ['parmak-izi-yuz', 'Parmak izi ve yüz kaydetme'],
  'g15-perm': ['izinler-konum', 'Uygulama izinlerini ve konumu kontrol etme'], 'g15-folder': ['guvenli-klasor-samsung-pass', 'Güvenli Klasör ve Samsung Pass’i tanıma'],
  'g15-medical': ['tibbi-bilgi-acil-kisiler', 'Tıbbi bilgi ve acil durum kişileri ekleme'], 'g15-sos': ['acil-sos', 'Acil SOS ayarlarını kontrol etme'],
  'g15-find': ['samsung-find', 'Samsung Find ile telefonu bulma'], 'g16-setup': ['ilk-kurulum', 'Telefonu ilk kez kurma'],
  'g16-sim': ['sim-esim', 'SIM ve eSIM’i tanıma'], 'g16-account': ['samsung-google-hesabi', 'Samsung ve Google hesaplarını kontrol etme'],
  'g16-switch': ['smart-switch', 'Smart Switch ile kişi ve fotoğraf aktarma'], 'g16-backup': ['yedek-kontrol', 'Yedekleme durumunu kontrol etme'],
  'g16-restore': ['yedekten-geri-yukleme', 'Yedekten geri yükleme'], 'g17-magnify': ['buyutme', 'Ekranın bir kısmını büyütme'],
  'g17-contrast': ['yuksek-kontrast-yazi', 'Yazı kontrastını artırma'], 'g17-talkback': ['talkback', 'TalkBack ile ekranı sesli okutma'],
  'g17-caption': ['ses-altyazi', 'Ses ve altyazıları ayarlama'], 'g17-hearing': ['isitme-cihazi', 'İşitme cihazı desteğini kontrol etme'],
  'g17-touch': ['dokunma-ayarlari', 'Dokunma ayarlarını ve erişilebilirlik kısayolunu ayarlama'], 'g18-usage': ['cok-pil-kullanan-uygulamalar', 'Çok pil kullanan uygulamaları bulma'],
  'g18-saver': ['guc-tasarrufu', 'Güç tasarrufunu açma'], 'g18-storage': ['depolama-kontrol', 'Depolamayı kontrol etme'],
  'g18-clean': ['buyuk-dosyalar', 'Büyük dosyaları temizleme'], 'g18-care': ['cihaz-bakimi', 'Cihaz bakımı ile telefonu kontrol etme'],
  'g18-update': ['yazilim-guncelleme', 'Yazılımı güncelleme'], 'g18-version': ['model-one-ui-surumu', 'Model ve One UI sürümünü kontrol etme'],
  'g19-bixby': ['bixbye-sorma', 'Bixby’ye sesle sorma'], 'g19-circle': ['daire-cizerek-ara', 'Ekrandaki şeyleri arama'],
  'g19-interpret': ['arama-cevirisi', 'Arama çevirisini ve Tercümanı tanıma'], 'g19-write': ['metni-duzeltme-ozetleme', 'Metni düzeltme ve özetleme'],
  'g19-transcribe': ['kaydi-metne-cevirme', 'Kayıtları metne çevirme'], 'g19-photo': ['yapay-zeka-fotograf', 'Yapay zekâ ile fotoğraf düzenleme'],
  'g19-support': ['modele-gore-ozellikler', 'Modele göre özellikleri kontrol etme'], 'g20-smartview': ['smart-view', 'Smart View ile ekranı TV’de gösterme'],
  'g20-pc': ['bilgisayara-baglanma', 'Bilgisayara bağlanma'], 'g20-dex': ['samsung-dex', 'Samsung DeX’i tanıma'],
  'g20-watch': ['saat-kulaklik', 'Saat ve kulaklık bağlama'], 'g20-smartthings': ['smartthings', 'SmartThings ile ev aletlerini bağlama'],
  'g20-musicshare': ['music-share', 'Music Share’i tanıma'], 'g21-split': ['bolunmus-ekran', 'Bölünmüş ekranla iki uygulama kullanma'],
  'g21-modes': ['modlar-rutinler', 'Modlar ve Rutinler’i ayarlama'], 'g21-aod': ['always-on-display', 'Kilit ekranında saat gösterme'],
  'g21-wellbeing': ['dijital-saglik', 'Dijital Sağlık ile kullanım süresini görme'], 'g21-apps': ['samsung-health-kids-game-booster', 'Samsung Health, Samsung Kids ve Game Booster’ı tanıma'],
  'g21-samsung': ['samsung-news-samsung-com', 'Samsung News, Samsung.com ve Global Goals’u bulma'], 'g21-spen': ['s-pen', 'Desteklenen modellerde S Pen kullanma'],
  'g22-ring': ['zil-calmiyor', 'Zil çalmadığında'], 'g22-network': ['arama-internet-yok', 'Arama veya internet çalışmadığında'],
  'g22-charge': ['sarj-olmuyor', 'Telefon şarj olmadığında'], 'g22-hot': ['telefon-isiniyor', 'Telefon ısındığında'],
  'g22-freeze': ['ekran-dondu', 'Ekran donduğunda'], 'g22-water': ['telefon-islandi', 'Telefon ıslandığında neler kontrol edilir'],
  'g22-members': ['samsung-members-tani', 'Samsung Members ile tanılama'], 'g22-service': ['servisten-once', 'Servise gitmeden önce model ve sorunu not etme'],
};

const PHONE = open('Telefon');
const CONTACTS = open('Kişiler');
const MESSAGES = open('Mesajlar');
const CAMERA = open('Kamera');
const GALLERY = open('Galeri');
const SHUTTER = ['Beyaz deklanşör düğmesine dokunun.'];
const REAL = 'Bu ders gerçek ayarları değiştirir veya gerçek sonuç doğurur. Önce tüm adımları okuyun, sonra telefonda yapın.';
const AI_ICON = ['Galaxy AI simgesine dokunun.'];
const CHECK = 'Uluslararası site için yazılmış yeni ders. Google uygulamalarının ekranları sık değişir; gerçek bir telefonda kontrol edin.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Galaxy telefondaki Ses açma, Ses kısma ve Yan tuşun yerini ve ne işe yaradığını öğrenin.', [
    ['Telefonun sağ kenarına bakın.', 'Üç tuş vardır. Yukarıdan: Ses açma, Ses kısma ve Yan tuş.'],
    ['Resimdeki Yan tuşa basın.', 'En alttaki tuştur. Telefonu açıp kapatmaya veya ekranı kapatmaya yarar.'],
    ['Resimdeki Ses kısma tuşuna basın.', 'Ortadaki tuştur. Sesi azaltır.'],
    ['Resimdeki Ses açma tuşuna basın.', 'En üstteki tuştur. Sesi artırır.']]),
  'g01-charge': L('Galaxy’nizi adım adım şarj edin: şarj aletini takın, kabloyu bağlayın ve şarj işaretini kontrol edin.', [
    ['Şarj aletini prize takın.'], ['Kablonun ucunu telefonun altındaki girişe takın.', 'Giriş ıslaksa önce tamamen kurumasını bekleyin.'],
    ['Ekranda şarj işaretinin çıktığını kontrol edin.'], ['Şarj bitince kabloyu çıkarın.']]),
  'g01-power': L('Galaxy’yi Yan tuş ve Ses kısma tuşuyla kapatın, sonra yeniden açın.', [
    ['Yan tuşa ve Ses kısma tuşuna aynı anda basılı tutun.', 'İkisine birlikte basın ve menünün çıkmasını bekleyin.'],
    ['Kapat’a dokunun.'], ['Kapat’a bir kez daha dokunun.', 'Ekran kararınca yeniden açmak için sonraki adıma geçin.'],
    ['Telefonu açmak için Yan tuşa basılı tutun.', 'Samsung logosu görünene kadar birkaç saniye tutun. Sonra ekran kilidini açın.']]),
  'g01-restart': L('Galaxy yavaşladığında veya tuhaf davrandığında yeniden başlatın.', [
    ['Yan tuşa ve Ses kısma tuşuna aynı anda basılı tutun.', 'Güç menüsü çıkana kadar tutun.'], ['Yeniden başlat’a dokunun.'], ['Yeniden başlat’a bir kez daha dokunun.'],
    ['Telefonun kapanıp yeniden açılmasını bekleyin.', '', 'Ekran donduysa ve menü çıkmıyorsa iki tuşu 7 saniyeden uzun tutun.']]),
  'g01-lock': L('Ekranı Yan tuşla kilitleyin ve yukarı kaydırarak kilidini açın.', [
    ['Yan tuşa bir kez kısaca basın.', 'Ekran kapanır ve kendiliğinden kilitlenir.'], ['Yan tuşa yine kısaca basın.', 'Kilit ekranı açılır. Ekrana iki kez dokunmak da işe yarar.'],
    ['Ekranı yukarı kaydırın.', 'PIN veya parmak izi ayarladıysanız kilidi onunla açın.']]),
  'g02-tap': L('En temel hareketi deneyin: bir uygulamayı açmak için bir kez dokunun.', [
    ['Galeri’ye parmak ucunuzla hafifçe bir kez dokunun.', 'Bastırmayın. Hafif bir dokunuş uygulamayı açar.'], HOME_BTN]),
  'g02-hold': L('Bir uygulamanın menüsünü açmak için dokunup basılı tutmayı deneyin.', [
    ['Galeri’ye 2 saniye basılı tutun.', 'Menü çıkana kadar parmağınızı kaldırmayın.'], ['Menünün çıktığını kontrol edin.', 'Basılı tutmak, o uygulamayla neler yapabileceğinizi gösterir.'],
    ['Menüyü kapatmak için Geri tuşuna dokunun.']]),
  'g02-swipe': L('Ana ekran sayfaları arasında geçmek ve Uygulamalar ekranını açmak için kaydırın.', [
    ['Ekranı sola kaydırın.', 'Ana ekranın sonraki sayfasına geçersiniz.'], ['Ana ekranda aşağıdan yukarı kaydırın.', 'Tüm uygulamaların olduğu Uygulamalar ekranı açılır.'],
    ['Uygulamalar ekranında aşağı kaydırın.', 'Ana ekrana dönersiniz.']]),
  'g02-pinch': L('Fotoğrafı büyütmek için iki parmağınızı açın, küçültmek için birleştirin.', [
    open('Galeri'), ['Görmek istediğiniz fotoğrafa dokunun.'], ['İki parmağınızı fotoğrafa koyup açın.', 'Büyütmek için başparmak ve işaret parmağınızı açın.'], ['İki parmağınızı birleştirin.', 'Fotoğraf yeniden küçülür.']]),
  'g02-back': L('Önceki ekrana dönmek için Geri tuşunu kullanın.', [
    ...settings('Ekran'),
    ['Sağ alttaki Geri tuşuna dokunun.', 'Önceki ekrana (Ayarlar) dönersiniz.', 'Tuşların sırasını Ayarlar → Ekran → Gezinme çubuğu bölümünden değiştirebilirsiniz.']]),
  'g02-home': L('Ana ekran tuşuyla her uygulamadan ana ekrana dönün.', [
    open('Ayarlar'), HOME_BTN,
    ['Ana ekranın göründüğünü kontrol edin.', 'Hangi uygulamada olursanız olun Ana ekran tuşu sizi buraya getirir.', 'Tuşları göremiyorsanız ekranın en altından biraz yukarı kaydırın.']]),
  'g02-recent': L('Uygulamalar arasında geçmek veya hepsini kapatmak için son uygulamaları açın.', [
    ['Sol alttaki Son uygulamalar tuşuna dokunun.', 'Son kullanılan uygulamalar kartlar gibi görünür.'], ['Yeniden kullanmak istediğiniz uygulamaya dokunun.', 'Diğer uygulamaları görmek için yana kaydırın.'],
    ['Son uygulamalar tuşuna yine dokunun.'], ['‘Tümünü kapat’ öğesine dokunun.', 'Açık uygulamaların hepsi kapanır.']]),
  'g03-font': L('Ayarlar → Ekran → Yazı tipi boyutu ve stili bölümünden yazıyı büyütüp kalınlaştırın.', [
    ...settings('Ekran', 'Yazı tipi boyutu ve stili'), ['Boyut çubuğundaki daireyi sağa sürükleyin.', 'Sağa gittikçe yazı büyür.'],
    ['‘Kalın yazı tipi’ anahtarına dokunarak açın.', 'Kalın yazı daha kolay okunur.'], ['Yazının büyüdüğünü kontrol edin.']]),
  'g03-zoom': L('Ayarlar → Ekran bölümündeki Ekran yakınlaştırma ile simgeleri ve düğmeleri büyütün.', [
    ...settings('Ekran', 'Ekran yakınlaştırma'), ['Çubuktaki daireyi sağa sürükleyin.', 'Sağa gittikçe simgeler ve düğmeler büyür.'], ['Simgelerin ve düğmelerin büyüdüğünü kontrol edin.']]),
  'g03-easy': L('Büyük yazılı ve büyük simgeli daha sade bir ana ekran için Kolay modu açın.', [
    ...settings('Ekran', 'Kolay mod'), ['‘Kolay mod’ anahtarına dokunarak açın.', 'Ana ekrandaki yazı ve simgeler büyür.'], ['Ana ekrandaki yazı ve simgelerin büyüdüğünü kontrol edin.']]),
  'g03-bright': L('Ekran parlaklığını hızlı ayarlar panelinden ayarlayın.', [
    ['Ekranın sağ üstünden aşağı kaydırın.', 'Hızlı ayarlar paneli açılır.'], ['Parlaklık çubuğunu sağa sürükleyin.', 'Sola sürüklerseniz ekran kararır.'], ['Paneli kapatmak için yukarı kaydırın.']]),
  'g03-timeout': L('Ayarlar → Ekran → Ekran zaman aşımı bölümünden ekranın ne kadar açık kalacağını değiştirin.', [
    ...settings('Ekran', 'Ekran zaman aşımı'), ['‘5 dakika’ öğesine dokunun.', 'İstediğiniz süreyi seçin. Süre uzadıkça pil daha çok harcanır.']]),
  'g03-sound': L('Zil sesini yükseltin ve telefonun çalarken titremesini sağlayın.', [
    ...settings('Sesler ve titreşim', 'Ses düzeyi'), ['Zil sesi çubuğunu sağa sürükleyin.', 'Sağa gittikçe zil daha yüksek çalar.'], BACK,
    ['‘Ses’ öğesine dokunun.', 'Yalnızca titreşim için ‘Titreşim’e dokunun.'], ['‘Çalarken titret’ anahtarına dokunarak açın.', 'Ses ve titreşim birlikte uyarır.']]),
  'g04-call': L('Galaxy’de tuş takımından numarayı yazarak arama yapın.', [
    PHONE, ['Alttaki ‘Tuş takımı’ öğesine dokunun.'], ['Telefon numarasının rakamlarına sırayla dokunun.', 'Yanlış basarsanız sağ alttaki silme tuşuyla silin.'], ['Yeşil arama düğmesine dokunun.'],
    ['Konuşma bitince kırmızı kapatma düğmesine dokunun.']]),
  'g04-answer': L('Yeşil düğmeyi kaydırarak cevaplayın, kırmızıyla veya mesajla reddedin.', [
    ['Yeşil Cevapla düğmesine basılı tutup yukarı kaydırın.', 'Dairenin dışına kaydırınca arama bağlanır.'], ['Reddetmek için kırmızı düğmeye basılı tutup yukarı kaydırın.'],
    ['Mesajla reddetmek için alttaki ‘Mesaj gönder’ öğesini yukarı kaydırın.', 'Bir mesaj seçin, arayana gönderilir.', 'Ayarlar → Erişilebilirlik → Etkileşim ve beceri bölümünden tek dokunuşla cevaplamayı açabilirsiniz.']]),
  'g04-speaker': L('Telefonu kulağınıza tutmadan konuşmak için arama sırasında hoparlörü açın.', [
    ['Bir arama yapın veya cevaplayın.'], ['‘Hoparlör’ öğesine dokunun.', 'Telefon kulağınızdan uzakta da duyup konuşabilirsiniz.'], ['Kapatmak için ‘Hoparlör’e yine dokunun.']]),
  'g04-missed': L('Telefon uygulamasındaki Son aramalar listesinden cevapsız aramayı geri arayın.', [
    PHONE, ['Alttaki ‘Son aramalar’ öğesine dokunun.'], ['Cevapsız numarayı sağa kaydırın.', 'Sağa kaydırınca hemen aranır.', 'Aranmazsa numaraya, sonra arama düğmesine dokunun.']]),
  'g04-log': L('Telefon uygulamasının Son aramalar listesinde kimin ne zaman aradığını görün.', [PHONE, ['Alttaki ‘Son aramalar’ öğesine dokunun.'], ['Ayrıntıları görmek için bir ada dokunun.', 'Ne zaman konuştuğunuzu görürsünüz.']]),
  'g04-block': L('Telefon uygulamasının ayarlarından istenmeyen bir numarayı engelleyin.', [
    PHONE, ['Sağ üstteki üç noktaya (Diğer seçenekler) dokunun.'], ['‘Ayarlar’ öğesine dokunun.'], ['‘Numaraları engelle’ öğesine dokunun.'],
    ['‘Telefon numarası ekle’ öğesine dokunun.', '', 'Ekran sürüme göre biraz farklı olabilir.'], ['Engellenecek numarayı yazın.'], ['‘Kaydet’ öğesine dokunun.']]),
  'g05-new': L('Kişiler uygulamasında adı ve numarasıyla yeni bir kişi kaydedin.', [
    CONTACTS, ['Sağ üstteki ‘+’ (Kişi oluştur) öğesine dokunun.'], ['Ad alanına dokunun.'], ['Adı yazın.'], ['Telefon alanına dokunun.'], ['Telefon numarasını yazın.'], ['‘Kaydet’ öğesine dokunun.']]),
  'g05-search': L('Adını arayarak bir kişiyi hızlıca bulun.', [CONTACTS, ['Üstteki büyütece (Ara) dokunun.'], ['Aradığınız adı yazın.'], ['Bulunan ada dokunun.']]),
  'g05-edit': L('Bir kişinin kayıtlı telefon numarasını değiştirin.', [
    CONTACTS, ['Kişinin adına dokunun.'], ['Alttaki ‘Düzenle’ öğesine dokunun.'], ['Telefon alanına dokunun.'], ['Eski numarayı silip yenisini yazın.'], ['‘Kaydet’ öğesine dokunun.']]),
  'g05-speed': L('Tuş takımında bir rakama basılı tutarak aramak için hızlı aramayı ayarlayın.', [
    PHONE, ['Alttaki ‘Tuş takımı’ öğesine dokunun.'], ['Sağ üstteki üç noktaya (Diğer seçenekler) dokunun.'], ['‘Hızlı arama numaraları’ öğesine dokunun.'], ['‘2’ rakamına dokunun.', 'Boş bir rakam seçin.'],
    ['Kişiyi rehberden seçin.'], ['Aramak için tuş takımında ‘2’ye basılı tutun.', 'Alıştırma resminde ‘2’ye basılı tutmayı deneyin.']]),
  'g05-share': L('Bir kişinin bilgilerini mesajla başka birine gönderin.', [
    CONTACTS, ['Paylaşmak istediğiniz kişinin adına dokunun.'], ['Alttaki ‘Paylaş’ öğesine dokunun.'], ['‘Mesajlar’ öğesine dokunun.'], ['Alıcıyı seçin.'], ['Gönder düğmesine dokunun.']]),
  'g06-send': L('Mesajlar uygulamasında mesaj gönderin ve bir mesajı yanıtlayın.', [
    MESSAGES, ['Yanıtlamak istediğiniz konuşmaya dokunun.', 'Yeni mesaj için sağ alttaki Sohbet başlat düğmesine dokunun.'], ['Alttaki mesaj kutusuna dokunun.'], ['Mesajınızı yazın.'], ['Sağdaki Gönder düğmesine dokunun.']]),
  'g06-type': L('Samsung Klavye’de harf, rakam ve simge yazın, dil değiştirin.', [
    ['Klavyede ‘Merhaba’ yazın.'], ['Rakam veya simge için ‘!#1’e dokunun.'], ['Harflere dönmek için aynı yerdeki ‘ABC’ye dokunun.'],
    ['Başka bir dilde yazmak için boşluk çubuğunu sola veya sağa kaydırın.', 'Yalnızca klavye ayarlarında eklediğiniz diller görünür.']]),
  'g06-fix': L('Silme tuşu ve imleci taşıyarak yazım hatalarını düzeltin.', [
    ['Silme tuşuna (⌫) bir kez dokunun.', 'İmlecin hemen önündeki harf silinir.'], ['Doğru harfi yazın.'], ['Ortadaki bir harfi düzeltmek için o yere dokunun.', 'İmleç (yanıp sönen çizgi) dokunduğunuz yere gider.']]),
  'g06-copy': L('Bir metni kopyalayıp başka yere yapıştırın.', [['Kopyalamak istediğiniz metne basılı tutun.'], ['‘Kopyala’ öğesine dokunun.'], ['Yapıştıracağınız kutuya basılı tutun.'], ['‘Yapıştır’ öğesine dokunun.']]),
  'g06-photo': L('Galeri’den bir fotoğrafı mesaja ekleyin.', [
    MESSAGES, ['Fotoğrafı göndereceğiniz konuşmaya dokunun.'], ['Mesaj kutusunun solundaki ‘+’ öğesine dokunun.'], ['‘Galeri’ öğesine dokunun.'], ['Göndermek istediğiniz fotoğrafa dokunun.'], ['Gönder düğmesine dokunun.']]),
  'g06-translate': L('Klavyedeki Galaxy AI aracıyla Mesajlar’daki bir konuşmayı çevirin.', [
    MESSAGES, ['Çevirmek istediğiniz konuşmaya dokunun.'], ['Alttaki mesaj kutusuna dokunun.'], ['Klavyenin sol üstündeki Galaxy AI simgesine dokunun.'], ['‘Sohbet çevirisi’ öğesine dokunun.'], ['Üstteki kutudan dilleri seçin.']]),
  'g07-noti': L('Bildirim panelini açın, bir bildirimi okuyun ve hepsini temizleyin.', [
    ['Ekranın sol üstünden aşağı kaydırın.', 'Bildirim paneli açılır.'], ['Okumak istediğiniz bildirime dokunun.', 'Bildirimin uygulaması açılır.'],
    ['Ekranın sol üstünden aşağı kaydırın.', 'Bildirim paneli açılır.'], ['‘Temizle’ öğesine dokunun.', 'Bütün bildirimler silinir.']]),
  'g07-appnoti': L('İhtiyacınız olmayan uygulamaların bildirimlerini kapatın.', [
    ...settings('Bildirimler', 'Uygulama bildirimleri'), ['Bildirimlerini kapatmak için bir uygulamanın anahtarına dokunun.', 'Önemli mesaj uygulamalarının bildirimlerini açık bırakın.']]),
  'g07-quick': L('Hızlı ayarlar panelini açın ve düğmelerini tanıyın.', [
    QUICK, ['Paneldeki düğmelere bakın.', 'Mavi düğmeler açıktır. Açıp kapatmak için bir düğmeye dokunun.'], ['‘Wi-Fi’ düğmesine basılı tutun.', 'Basılı tutunca ayrıntılı ayarlar açılır.'], ['Paneli kapatmak için yukarı kaydırın.']]),
  'g07-flash': L('El fenerini hızlı ayarlar panelinden açıp kapatın.', [QUICK, ['‘El feneri’ öğesine dokunun.', 'Telefonun arkasındaki ışık yanar.'], ['Kapatmak için ‘El feneri’ne yine dokunun.']]),
  'g07-rotate': L('Telefonu yan çevirdiğinizde ekranın dönüp dönmeyeceğini seçin.', [
    QUICK, ['‘Otomatik döndür’ öğesine dokunun.', 'Açıksa ekran telefonla birlikte döner. Kapalıysa dik kalır.'], ['Denemek için telefonu yan çevirin.']]),
  'g07-dnd': L('Rahatsız etmeyin ile arama ve uyarıları susturun, uçakta Uçak modunu kullanın.', [
    QUICK, ['‘Rahatsız etmeyin’ öğesine dokunun.', 'Aramalar ve bildirimler ses çıkarmaz. Kapatmak için yine dokunun.'], ['Kapatmak için ‘Rahatsız etmeyin’e yine dokunun.'],
    ['‘Uçak modu’ öğesine dokunun.', 'Aramalar ve internet kesilir. Uçakta kullanın.'], ['Uçaktan inince kapatmak için yine dokunun.']]),
  'g08-wifi': L('Galaxy’nizi Ayarlar → Bağlantılar → Wi-Fi bölümünden bir Wi-Fi ağına bağlayın.', [
    ...settings('Bağlantılar', 'Wi-Fi'), ['‘Wi-Fi’ anahtarına dokunarak açın.', 'Yakındaki Wi-Fi ağlarının listesi çıkar.'], ['Wi-Fi ağının adına dokunun.', 'Kilit simgesi şifre gerektiğini gösterir.'],
    ['Wi-Fi şifresini yazın.', 'Genellikle modemin arkasında yazar.'], ['‘Bağlan’ öğesine dokunun.']]),
  'g08-data': L('Ayarlar → Bağlantılar → Veri kullanımı bölümünden mobil veriyi açıp kapatın.', [
    ...settings('Bağlantılar', 'Veri kullanımı'), ['‘Mobil veri’ anahtarına dokunarak açın.', 'Kapalıyken internet yalnızca Wi-Fi’de çalışır.']]),
  'g08-usage': L('Bu ay ne kadar mobil veri kullandığınızı ve en çok hangi uygulamaların kullandığını görün.', [
    ...settings('Bağlantılar', 'Veri kullanımı'), ['‘Mobil veri kullanımı’ öğesine dokunun.'],
    ['Bu ay ne kadar kullandığınızı kontrol edin.', 'En çok kullanan uygulamalar üsttedir. Operatörünüzün uygulaması kalan miktarı gösterir.']]),
  'g08-bt': L('Bluetooth kulaklığı Galaxy’nizle eşleştirin.', [
    ['Kulaklığı eşleştirme modunda açın.'], ...settings('Bağlantılar', 'Bluetooth'), ['‘Bluetooth’ anahtarına dokunarak açın.'], ['Listede kulaklığınızın adına dokunun.'], ['‘Bağlan’ öğesine dokunun.']]),
  'g08-hotspot': L('Mobil Erişim Noktası ile telefonun internetini başka bir cihazla paylaşın.', [
    ...settings('Bağlantılar', 'Mobil Erişim Noktası ve Bağlantı Paylaşımı', 'Mobil Erişim Noktası'), ['‘Mobil Erişim Noktası’ anahtarına dokunarak açın.', '', 'Ek ücret olabilir. Önce tarifenizi kontrol edin.'],
    ['Diğer cihazda Wi-Fi listesinden telefonunuzun adını seçin.']]),
  'g08-location': L('Ayarlar’da Konum ve NFC anahtarlarını bulun.', [
    ...settings('Konum'), ['‘Konum’ anahtarına dokunarak açın.', 'Harita ve hava durumu uygulamaları nerede olduğunuzu bilir.'], BACK, item('Bağlantılar'),
    ['‘NFC ve temassız ödemeler’ anahtarına dokunarak açın.', 'Telefonla ödeme yapmak veya ulaşım kartı kullanmak için açın.']]),
  'g09-search': L('Samsung Internet tarayıcısıyla web’de arama yapın.', [
    [...open('Samsung Internet'), 'Sürüme göre uygulamanın adı ‘Samsung Internet’ veya ‘Tarayıcı’ olabilir.'], ['Üstteki adres çubuğuna dokunun.'], ['Aramak istediğinizi yazın.'],
    ['Klavyenin sağ altındaki Git (↵) tuşuna dokunun.'], ['Okumak istediğiniz sonuca dokunun.']]),
  'g09-bookmark': L('Sık ziyaret ettiğiniz sayfaları yer işareti olarak kaydedin ve sonra açın.', [
    open('Samsung Internet'), ['Adres çubuğunun sağındaki yıldıza (☆) dokunun.', 'Açık olan sayfa yer işaretlerine kaydedilir.'], ['Sonra açmak için alttaki yıldıza (Yer işaretleri) dokunun.'], ['Kaydettiğiniz sayfaya dokunun.']]),
  'g09-qr': L('Galaxy kamerasıyla bir QR kodu açın.', [
    CAMERA, ['Kamerayı QR koduna doğrultun.', 'Fotoğraf modunda kodu ekranın ortasında tutun.'], ['Ekranda çıkan sarı bağlantıya dokunun.', 'Tanımadığınız yerlerdeki QR kodlarına dikkat edin.']]),
  'g09-files': L('İndirilen dosyaları Dosyalarım uygulamasında bulun.', [open('Dosyalarım'), ['‘İndirilenler’ öğesine dokunun.'], ['Açmak istediğiniz dosyaya dokunun.']]),
  'g09-stores': L('Google Play Store ile Samsung Galaxy Store arasındaki farkı öğrenin.', [
    open('Play Store'), ['Burası Google’ın uygulama mağazasıdır, uygulama bulup indirirsiniz.', 'Google hesabıyla giriş yapmanız gerekir.'], HOME_BTN, open('Galaxy Store'),
    ['Burası Samsung’un uygulama mağazasıdır, birçok Samsung uygulaması ve teması vardır.']]),
  'g09-install': L('Play Store’dan uygulama yükleyin, Galaxy Store’da uygulamaları güncelleyin ve bir uygulamayı kaldırın.', [
    open('Play Store'), ['Üstteki arama çubuğuna dokunun.'], ['Uygulamanın adını yazın.'], ['Uygulama adının yanındaki ‘Yükle’ öğesine dokunun.'], ['‘Galaxy Store’ uygulamasına dokunun.', 'Şimdi uygulamaları güncelleyelim.'],
    ['Alttaki ‘Menü’ öğesine dokunun.'], ['‘Güncellemeler’ öğesine dokunun.'], ['‘Tümünü güncelle’ öğesine dokunun.'], ['Ana ekranda kaldırmak istediğiniz uygulamaya basılı tutun.'], ['‘Kaldır’ öğesine dokunun.'],
    ['‘Tamam’ öğesine dokunun.', 'Kaldırdığınız uygulamayı mağazadan yeniden yükleyebilirsiniz.']]),
  'g09-google': L('Uygulamalar ekranındaki aramayla Google uygulamalarını ve operatör uygulamanızı bulun.', [
    ['Uygulamalar ekranını açmak için ana ekranda yukarı kaydırın.'], ['Üstteki ‘Ara’ öğesine dokunun.'], ['Uygulamanın adını yazın.', 'Google, YouTube veya operatörünüzün adını deneyin.'], ['Bulunan uygulamaya dokunun.']]),
  'g10-open': L('Kamera uygulamasını açın ve deklanşör düğmesini bulun.', [CAMERA, ['Kamera ekranının açıldığını kontrol edin.', 'Alt ortadaki beyaz daire deklanşör düğmesidir.']]),
  'g10-focus': L('Fotoğraf çekmeden önce odaklamak için ekrana dokunun.', [
    CAMERA, ['Net olmasını istediğiniz yere dokunun.', 'Sarı daire çıkınca odaklanmıştır.'], ['Beyaz deklanşör düğmesine dokunun.', 'Fotoğraflar bulanıksa merceği yumuşak bir bezle silin.']]),
  'g10-switch': L('Arka kamera ile ön (özçekim) kamera arasında geçiş yapın.', [
    CAMERA, ['Sağ alttaki dairesel oklara dokunun.', 'Ekranı yukarı veya aşağı kaydırmak da kamerayı değiştirir.'], ['Ön kameranın yüzünüzü gösterdiğini kontrol edin.']]),
  'g10-selfie': L('Ön kamerayla özçekim yapın.', [CAMERA, ['Sağ alttaki dairesel oklara dokunun.'], ['Telefonu yüzünüz ekranın ortasında olacak şekilde tutun.'], SHUTTER]),
  'g10-zoom': L('Fotoğraf çekerken uzaktaki şeylere yakınlaşın.', [
    CAMERA, ['Alttaki ‘3’ rakamına dokunun.', 'Uzaktakiler 3 kat büyük görünür. Geri dönmek için ‘1x’e dokunun.', 'Rakamlar modele göre değişir (Ultra modeller daha çok yakınlaştırır).'], SHUTTER]),
  'g10-timer': L('Fotoğrafın birkaç saniye sonra çekilmesi için zamanlayıcıyı kullanın.', [
    CAMERA, ['Üstteki Hızlı kontroller (⌄) simgesine dokunun.'], ['Zamanlayıcı simgesine dokunun.'], ['‘5 saniye’ öğesine dokunun.'], SHUTTER, ['Geri sayım bitince fotoğraf çekilir.']]),
  'g10-modes': L('Arka planı bulanıklaştırmak için Portre, karanlık yerler için Gece modunu deneyin.', [
    CAMERA, ['Alttaki ‘Portre’ öğesine dokunun.', 'Kişi net, arka plan bulanık çıkar.'], SHUTTER, ['Alttaki ‘Daha fazla’ öğesine dokunun.'],
    ['‘Gece’ öğesine dokunun.', 'Karanlıkta flaş olmadan aydınlık fotoğraf çekilir. Çekerken telefonu sabit tutun.']]),
  'g10-video': L('Galaxy kamerasıyla video çekin.', [CAMERA, ['Alttaki ‘Video’ öğesine dokunun.'], ['Kırmızı kayıt düğmesine dokunun.'], ['Bitince durdur düğmesine dokunun.']]),
  'g10-capture': L('İki tuşla ekran görüntüsü alın ve hızlı ayarlardan ekranı kaydedin.', [
    ['Yan tuşa ve Ses kısma tuşuna aynı anda kısaca basın.', 'Bir tık sesiyle ekran resim olarak kaydedilir. Galeri’de görebilirsiniz.'], QUICK,
    ['‘Ekran kaydedici’ öğesine dokunun.', 'Göremiyorsanız paneli bir kez daha aşağı kaydırın.'], ['‘Kaydı başlat’ öğesine dokunun.'], ['Durdurmak için ekranın üstündeki durdur simgesine dokunun.']]),
  'g11-latest': L('Galeri’de az önce çektiğiniz fotoğrafı bulun.', [GALLERY, ['İlk fotoğrafa (sol üst) dokunun.', 'En yeni fotoğraf hep en öndedir.'], ['Sonraki fotoğraf için sola kaydırın.']]),
  'g11-album': L('Fotoğrafları bir araya toplamak için Galeri’de yeni albüm oluşturun.', [
    GALLERY, ['Alttaki ‘Albümler’ öğesine dokunun.'], ['Üstteki ‘+’ (Ekle) öğesine dokunun.'], ['‘Albüm’ öğesine dokunun.'], ['Albüm için bir ad yazın.'], ['‘Oluştur’ öğesine dokunun.', 'Sonra koymak istediğiniz fotoğrafları seçin.']]),
  'g11-edit': L('Galeri’de bir fotoğrafı kırpın ve aydınlatın.', [
    GALLERY, ['Düzenlemek istediğiniz fotoğrafa dokunun.'], ['Alttaki kaleme (Düzenle) dokunun.'], ['Kırpmak için fotoğrafın bir köşesini içeri sürükleyin.'], ['Alttaki ‘Ton’ öğesine dokunun.'],
    ['Parlaklık çubuğunu sağa sürükleyin.'], ['‘Kaydet’ öğesine dokunun.']]),
  'g11-text': L('Galeri’de bir fotoğraftaki metni kopyalayıp mesaja veya nota yapıştırın.', [
    GALLERY, ['İçinde yazı olan bir fotoğrafa dokunun.'], ['Sarı ‘T’ simgesine dokunun.', 'Yalnızca fotoğrafta yazı varsa görünür.'], ['Kopyalamak istediğiniz metne basılı tutun.'],
    ['‘Kopyala’ öğesine dokunun.', 'Mesaja veya nota yapıştırabilirsiniz.']]),
  'g11-multi': L('Galeri’de birkaç fotoğraf seçip tek seferde paylaşın.', [
    GALLERY, ['Göndermek istediğiniz fotoğraflardan birine basılı tutun.'], ['Birlikte göndereceğiniz diğer fotoğraflara dokunun.', 'Dairedeki işaret fotoğrafın seçildiğini gösterir.'],
    ['Alttaki ‘Paylaş’ öğesine dokunun.'], ['Göndereceğiniz uygulamaya dokunun (örneğin Mesajlar).'], ['Alıcıyı seçip gönderin.']]),
  'g11-restore': L('Silinen fotoğrafları Galeri’nin Çöp kutusundan geri getirin.', [
    GALLERY, ['Alttaki ‘Menü’ öğesine dokunun.'], ['‘Çöp kutusu’ öğesine dokunun.'], ['Geri getirmek istediğiniz fotoğrafa dokunun.', 'Silinen fotoğraflar bir süre Çöp kutusunda kalır.'], ['‘Geri yükle’ öğesine dokunun.']]),
  'g11-docs': L('Telefonda kayıtlı belgeleri Dosyalarım uygulamasında bulun.', [open('Dosyalarım'), ['‘Belgeler’ öğesine dokunun.'], ['Açmak istediğiniz belgeye dokunun.']]),
  'g11-quickshare': L('Quick Share ile yakındaki bir telefona fotoğraf gönderin.', [
    GALLERY, ['Göndermek istediğiniz fotoğrafa dokunun.'], ['Alttaki ‘Paylaş’ öğesine dokunun.'],
    ['‘Quick Share’ öğesine dokunun.', '', 'Alıcı telefonda da Quick Share açık olmalı (Ayarlar → Bağlı cihazlar → Quick Share).'], ['Alıcı telefonun adına dokunun.'], ['Alıcı telefonda ‘Kabul et’e dokunun.']]),
  'g12-addapp': L('Uygulamalar ekranındaki bir uygulamayı ana ekrana koyun.', [
    ['Uygulamalar ekranını açmak için ana ekranda yukarı kaydırın.'], ['Ana ekrana koymak istediğiniz uygulamaya basılı tutun.'], ['‘Ana ekrana ekle’ öğesine dokunun.']]),
  'g12-folder': L('Uygulamaları bir klasörde toplayın ve ana ekrana hava durumu widget’ı ekleyin.', [
    ['Ana ekrandaki bir uygulamaya basılı tutup başka bir uygulamanın üstüne sürükleyin.', 'İki uygulamalı bir klasör oluşur.'], ['Klasör adına dokunup bir ad yazın.'],
    ['Ana ekranda boş bir yere basılı tutun.'], ['‘Widget’lar’ öğesine dokunun.'], ['‘Hava durumu’ öğesine dokunun.'], ['‘Ekle’ öğesine dokunun.']]),
  'g12-wallpaper': L('Kendi fotoğrafınızı kilit ekranı veya ana ekran duvar kâğıdı yapın.', [
    ...settings('Duvar kağıdı ve stil'), ['‘Duvar kağıtlarını değiştir’ öğesine dokunun.'], ['Kendi fotoğrafınız için ‘Galeri’ye dokunun.'], ['Kullanmak istediğiniz fotoğrafa dokunun.'],
    ['Kilit ekranını, ana ekranı veya ikisini seçin.'], ['‘Bitti’ öğesine dokunun.']]),
  'g12-alarm': L('Saat uygulamasında alarm kurun ve zamanlayıcı başlatın.', [
    open('Saat'), ['Alttaki ‘Alarm’ öğesine dokunun.'], ['Sağ alttaki ‘+’ öğesine dokunun.'], ['Saati ayarlamak için rakamları yukarı veya aşağı kaydırın.'], ['‘Kaydet’ öğesine dokunun.'],
    ['Zamanlayıcı için alttaki ‘Zamanlayıcı’ öğesine dokunun.'], ['Süreyi ayarlayıp ‘Başlat’a dokunun.']]),
  'g12-calendar': L('Takvim uygulamasına bir randevu ekleyin.', [
    open('Takvim'), ['Sağ alttaki ‘+’ (Etkinlik ekle) öğesine dokunun.'], ['Başlık alanına dokunun.'], ['Randevunun adını yazın.'], ['Tarihi ve saati seçmek için ‘Başlangıç’ öğesine dokunun.'], ['‘Kaydet’ öğesine dokunun.']]),
  'g12-reminder': L('Bir takvim etkinliğine hatırlatma ekleyerek yapılacak işi unutmayın.', [
    open('Takvim'), ['Sağ alttaki ‘+’ (Etkinlik ekle) öğesine dokunun.'], ['Yapılacak işi başlık olarak yazın.'], ['‘Hatırlatıcı’ öğesine dokunun.'],
    ['Hatırlatmanın zamanına dokunun (örneğin 10 dakika önce).'], ['‘Kaydet’ öğesine dokunun.', 'Hatırlatma seçtiğiniz saatte gelir.']]),
  'g12-note': L('Samsung Notes’ta hızlı bir not yazın.', [
    open('Samsung Notes'), ['Sağ alttaki ‘+’ öğesine dokunun.'], ['Not almak istediğinizi yazın.'], ['Bitince Geri tuşuna dokunun.', 'Not kendiliğinden kaydedilir.']]),
  'g12-recorder': L('Ses Kaydedici uygulamasıyla sesinizi kaydedin.', [
    open('Ses Kaydedici'), ['Kaydet düğmesine dokunun.'], ['Telefona doğru konuşun.'], ['‘Durdur’ öğesine dokunun.', 'Kayıt listeye eklenir.']]),
  'g12-tools': L('Hava durumuna bakın, hesap makinesini kullanın ve radyo dinleyin.', [
    open('Hava durumu'), ['Bugünün hava durumuna ve sıcaklığına bakın.', 'Bulunduğunuz yerin hava durumu için konum açık olmalı.'], HOME_BTN, open('Hesap Makinesi'),
    ['Hesaplamak için rakamlara, + ve = tuşlarına dokunun.'], ['‘Radyo’ uygulamasına dokunun.', 'Radyo için anten görevi gören kablolu kulaklık gerekir.', 'Bazı model ve operatörlerde Radyo uygulaması yoktur.']]),
  'x13-gmail': L('Gmail uygulamasıyla ailenize e-postayla fotoğraf gönderin.', [
    open('Gmail'), ['Sağ alttaki ‘Oluştur’ öğesine dokunun.'], ['Kişinin e-posta adresini ‘Kime’ alanına yazın.'], ['Üstteki ataşa (Ekle) dokunun.'],
    ['Göndermek istediğiniz fotoğrafa dokunun.', 'Birden fazla fotoğrafa dokunabilirsiniz.'], ['Kısa bir konu yazın.'], ['Üstteki Gönder düğmesine (kâğıt uçak) dokunun.']], { check: CHECK }),
  'x13-video': L('Mesajlar uygulamasıyla Galeri’deki bir videoyu bir aile üyesine gönderin.', [
    GALLERY, ['Göndermek istediğiniz videoya dokunun.'], ['Alttaki ‘Paylaş’ öğesine dokunun.'], ['‘Mesajlar’ öğesine dokunun.'], ['Alıcıyı seçin.'],
    ['Gönder düğmesine dokunun.', '', 'Uzun videolar mesaj için çok büyük olabilir. O zaman Quick Share veya e-posta kullanın.']], { check: CHECK }),
  'x13-meet': L('Google Meet uygulamasıyla ailenizi görüntülü arayın.', [
    open('Meet'), ['‘Yeni’ öğesine dokunun.'], ['Aramak istediğiniz kişinin adına dokunun.', 'O kişinin de Google Meet’i veya Google hesabı olmalı.'], ['Görüntülü arama düğmesine dokunun.'],
    ['Bitince kırmızı kapatma düğmesine dokunun.']], { check: CHECK }),
  'g14-open': L('Samsung Wallet’ı açın ve kartlara ve menülere bakın.', [
    ['‘Samsung Wallet’ uygulamasına dokunun.', 'Ekranın altındaki kart resmini yukarı kaydırarak da açabilirsiniz.'],
    ['Kayıtlı kartlarınıza ve menülere bakın.', 'İlk kez açıyorsanız henüz kart yoktur. Sonraki ders kart ekleme ekranını gösterir.']]),
  'g14-add': L('Samsung Wallet’a ödeme kartı ekleme ekranına bakın.', [
    [...open('Samsung Wallet'), REAL], ['Üstteki ‘+’ (Ekle) öğesine dokunun.'], ['Neler ekleyebileceğinize bakın.', 'Ülkeye göre ödeme kartı, ulaşım kartı ve daha fazlası.'],
    ['‘Ödeme kartı’ öğesine dokunun.'], ['Kart ekleme talimatlarını okuyun.']]),
  'g14-pay': L('Samsung Wallet’ta bir kart seçin ve telefonu POS cihazına yaklaştırarak ödeyin.', [
    [...open('Samsung Wallet'), REAL], ['Ödeme yapacağınız karta dokunun.'], ['Parmak izinizi kullanın veya ödeme PIN’ini girin.'], ['Telefonun arkasını POS cihazına yaklaştırın.']]),
  'g15-pin': L('Telefonunuzu PIN ekran kilidiyle koruyun.', [
    [...open('Ayarlar'), REAL], ...sub('Kilit ekranı ve AOD', 'Ekran kilidi ve biyometri'), ['‘Ekran kilidi türü’ öğesine dokunun.'], ['‘PIN’ öğesine dokunun.'],
    ['Hatırlaması kolay en az 4 rakam yazın.', 'Doğum gününüz veya telefon numaranız gibi kolay tahmin edilen rakamlardan kaçının.'], ['Onaylamak için aynı rakamları yeniden yazın.']]),
  'g15-bio': L('Kilidi açmak için parmak izinizi ve isterseniz yüzünüzü kaydedin.', [
    [...open('Ayarlar'), REAL], ...sub('Güvenlik ve gizlilik', 'Ekran kilidi ve biyometri'), ['‘Parmak izleri’ öğesine dokunun.'], ['PIN’inizi girin.', 'PIN yoksa önce oluşturun.'],
    ['Parmağınızı ekranın altındaki parmak izi işaretine tekrar tekrar koyup kaldırın.', 'Sık kullandığınız parmağı kullanın ve her seferinde biraz kaydırın.'],
    ['Yüzünüzü de eklemek için aynı ekranda ‘Yüz tanıma’ya dokunun.']]),
  'g15-perm': L('Hangi uygulamaların konum, kamera veya mikrofon kullandığını görün ve gereksiz erişimleri kaldırın.', [
    ...settings('Güvenlik ve gizlilik', 'Son 24 saatte kullanılan izinler'), ['Hangi uygulamaların konum, kamera veya mikrofon kullandığına bakın.'], ['‘Konum’ öğesine dokunun.'],
    ['Tanımadığınız bir uygulama varsa ‘İzin verme’ olarak değiştirin.']]),
  'g15-folder': L('Ayarlar’da Güvenli Klasör ve Samsung Pass’i bulun.', [
    ...settings('Güvenlik ve gizlilik', 'Diğer güvenlik ayarları'), ['‘Güvenli Klasör’ öğesine dokunun.'], ['Güvenli Klasör hakkındaki bilgileri okuyun.'], BACK,
    ['‘Şifreler, geçiş anahtarları ve otomatik doldurma’ öğesine dokunun.', 'Samsung Pass buradadır. Parmak iziyle giriş yapmanıza yardım eder.']]),
  'g15-medical': L('Acil durumda yardımcı olacak tıbbi bilgileri ve acil durum kişilerini ekleyin.', [
    ...settings('Güvenlik ve acil durum', 'Tıbbi bilgiler'), ['Adınızı, kan grubunuzu, ilaçlarınızı ve alerjilerinizi yazın.'], BACK, ['‘Acil durum kişileri’ öğesine dokunun.'], ['Aile üyelerinizi kişi olarak ekleyin.']]),
  'g15-sos': L('Arama yapmadan telefonunuzdaki Acil SOS’un nasıl çalıştığını görün.', [
    [...open('Ayarlar'), 'Tuşlara gerçekten basarsanız acil servis aranır. Bu derste yalnızca ekrana bakın.'], ...sub('Güvenlik ve acil durum', 'Acil SOS'),
    ['Aramak için Yan tuşa kaç kez basılacağını okuyun.', 'Yan tuşa belirtilen sayıda basınca ayarlanan numara aranır.']]),
  'g15-find': L('Telefonu kaybederseniz Samsung Find ile bulabilmek için ayarı açın.', [
    ...settings('Güvenlik ve gizlilik', 'Kayıp cihaz koruması', 'Mobil Cihazımı Bul'),
    ['‘Bu telefonun bulunmasına izin ver’ anahtarına dokunarak açın.', 'Samsung hesabınızda oturum açmış olmalısınız.'], ['Telefonu kaybederseniz başka bir cihazdan smartthingsfind.samsung.com adresine gidin.']]),
  'g16-setup': L('Yeni bir Galaxy’yi ilk kez kurun.', [
    ['Telefonu açmak için Yan tuşa basılı tutun.'], ['Dilinizi kontrol edip ‘Başlat’a dokunun.'], ['Bir Wi-Fi ağı seçip bağlanın.'], ['Gerisi için ekrandaki talimatları izleyip ‘İleri’ye dokunun.']]),
  'g16-sim': L('SIM kart ve eSIM’in ne olduğunu öğrenin, numaranızı SIM yöneticisinde görün.', [
    ['SIM (Nano-SIM), operatörünüzün verdiği küçük bir karttır.'], ['eSIM, kart olmadan telefona indirilen bir SIM’dir.', '', 'eSIM ve iki numara desteği modele ve operatöre bağlıdır.'],
    ...settings('Bağlantılar', 'SIM yöneticisi'), ['Numaranızın ve operatörünüzün göründüğünü kontrol edin.']]),
  'g16-account': L('Telefonda Samsung hesabı ve Google hesabıyla oturum açıldığını kontrol edin.', [
    ...settings('Hesaplar ve yedekleme', 'Hesapları yönet'),
    ['Bir Samsung hesabı ve bir Google hesabı olduğunu kontrol edin.', 'Yedekleme, uygulama yükleme ve telefonu bulma için gereklidir. Kullanıcı adınızı ve şifrenizi not edin.']]),
  'g16-switch': L('Smart Switch ile kişileri, fotoğrafları ve daha fazlasını yeni Galaxy’ye aktarın.', [
    ...settings('Hesaplar ve yedekleme', 'Eski cihazdan veri getir'), ['Yeni telefonda ‘Veri al’ı seçin.'], ['İki telefonu yakına koyup ekrandaki talimatları izleyin.']]),
  'g16-backup': L('Telefonun Samsung Cloud’a en son ne zaman yedeklendiğini kontrol edin.', [...settings('Hesaplar ve yedekleme', 'Samsung Cloud'), ['Son yedeklemenin tarihine bakın.']]),
  'g16-restore': L('Verilerinizi Samsung Cloud yedeğinden geri yükleyin.', [
    ...settings('Hesaplar ve yedekleme', 'Samsung Cloud'), ['‘Verileri geri yükle’ öğesine dokunun.'], ['Cihazı ve öğeleri seçin.'], ['‘Geri yükle’ öğesine dokunun.']]),
  'g17-magnify': L('Büyütme kısayolunu açın ve üç kez dokunarak ekranın bir kısmını büyütün.', [
    ...settings('Erişilebilirlik', 'Görünürlük geliştirmeleri', 'Büyütme'), ['‘Büyütme kısayolu’ öğesine dokunun.'], ['‘Büyütme kısayolu’ anahtarına dokunarak açın.'],
    ['‘Ekrana üç kez dokunun’ öğesine dokunun.'], ['Büyütmek istediğiniz yere hızla üç kez dokunun.']]),
  'g17-contrast': L('Yazının arka plandan ayrılması için yüksek kontrastlı yazı tiplerini açın.', [
    ...settings('Erişilebilirlik', 'Görünürlük geliştirmeleri'), ['‘Yüksek kontrastlı yazı tipleri’ anahtarına dokunarak açın.', 'Harflere koyu bir kenar eklenir ve arka plandan ayrılır.']]),
  'g17-talkback': L('Nasıl kapatılacağını öğrendikten sonra ekranı sesli okutmak için TalkBack’i açın.', [
    [...open('Ayarlar'), 'TalkBack açıkken dokunma şekli değişir. Önce nasıl kapatılacağını okuyun.'], ...sub('Erişilebilirlik', 'TalkBack'), ['Önce nasıl kapatılacağını okuyun.'],
    ['‘TalkBack’ anahtarına dokunarak açın.', 'Açıkken tek dokunuş okur, çift dokunuş açar.']]),
  'g17-caption': L('Videolar için Canlı Altyazı’yı, tek kulakla duymak için Mono sesi açın.', [
    ...settings('Erişilebilirlik', 'İşitme geliştirmeleri'), ['‘Canlı Altyazı’ öğesine dokunun.'], ['‘Canlı Altyazı’yı kullan’ anahtarına dokunarak açın.', 'Videolardaki konuşmalar yazı olarak görünür.'], BACK,
    ['‘Mono ses’ anahtarına dokunarak açın.', 'Tek kulakla da her iki taraftaki sesi duyarsınız.']]),
  'g17-hearing': L('Aramaları daha net duymak için işitme cihazı uyumluluğunu açın.', [
    ...settings('Erişilebilirlik', 'İşitme geliştirmeleri', 'İşitme cihazı desteği'),
    ['‘İşitme cihazı uyumluluğu’ anahtarına dokunarak açın.', 'İşitme cihazıyla aramalar daha net duyulur.'], ['Bluetooth işitme cihazlarını Bluetooth menüsünden bağlayın.']]),
  'g17-touch': L('Dokunmayı kolaylaştırın: tek dokunuşla cevaplayın, basılı tutma süresini değiştirin ve erişilebilirlik kısayolu kurun.', [
    ...settings('Erişilebilirlik', 'Etkileşim ve beceri'), ['‘Tek dokunuş modu’ anahtarına dokunarak açın.', 'Aramaları kaydırmak yerine tek dokunuşla cevaplarsınız.'],
    ['‘Dokunup basılı tutma gecikmesi’ öğesine dokunun.', 'Basılı tutmak zorsa süreyi uzatın.'], ['İstediğiniz süreyi seçin.'], ['Geri tuşuna iki kez dokunun.'],
    ['‘Erişilebilirlik kısayolu’ öğesine dokunun.', 'Sık kullandığınız bir erişilebilirlik özelliğini tek düğmeyle açabilirsiniz.']]),
  'g18-usage': L('En çok pil kullanan uygulamaları bulun.', [
    ...settings('Pil', 'Günlük kullanım'), ['En çok pil kullanan uygulamalara bakın.', 'Az kullandığınız bir uygulama çok harcıyorsa kapatın veya kaldırın.']]),
  'g18-saver': L('Pilin daha uzun dayanması için Güç tasarrufunu açın.', [
    ...settings('Pil'), ['‘Güç tasarrufu’ anahtarına dokunarak açın.', 'Pil daha uzun dayanır. Bazı bildirimler geç gelebilir.', 'Hızlı ayarlar panelindeki ‘Güç tasarrufu’ düğmesiyle de açabilirsiniz.']]),
  'g18-storage': L('Telefonda ne kadar depolama alanı kaldığını kontrol edin.', [
    ...settings('Cihaz bakımı', 'Depolama'), ['Kalan alanı kontrol edin.', 'Çöp kutusunu boşaltmak ve kopya dosyaları silmek yer açar.']]),
  'g18-clean': L('Dosyalarım’da artık gerekmeyen büyük dosyaları bulup silin.', [
    open('Dosyalarım'), ['‘Depolamayı yönet’ öğesine dokunun.'], ['‘Büyük dosyalar’ öğesine dokunun.'], ['Yalnızca gereksiz dosyaları seçip ‘Sil’e dokunun.']]),
  'g18-care': L('Cihaz bakımı ile telefonu kontrol edip düzenleyin.', [...settings('Cihaz bakımı'), ['‘Şimdi optimize et’ öğesine dokunun.', 'Kullanılmayan uygulamaları kapatır ve telefonu kontrol eder.']]),
  'g18-update': L('Galaxy’nizdeki yazılım güncellemelerini kontrol edip yükleyin.', [
    ...settings('Yazılım güncelleme'), ['‘İndir ve yükle’ öğesine dokunun.', 'Yeni sürüm varsa indirilip yüklenir. Wi-Fi’ye bağlıyken ve şarjdayken yapın.']]),
  'g18-version': L('Ayarlar → Telefon hakkında bölümünden model adını ve One UI sürümünü bulun.', [
    ...settings('Telefon hakkında'), ['Üstteki model adına bakın.'], ['‘Yazılım bilgileri’ öğesine dokunun.'], ['‘One UI sürümü’ne bakın.', 'Servise model adıyla birlikte bunu söyleyin.']]),
  'g19-bixby': L('Yan tuşun Bixby’yi açmasını sağlayın ve Bixby’den sesle yardım isteyin.', [
    ...settings('Gelişmiş özellikler', 'Yan tuş'), ['‘Bixby’yi uyandır’ öğesine dokunun.', 'Artık Yan tuşa basılı tutunca Bixby açılır.'],
    ['Yan tuşa basılı tutup ne istediğinizi söyleyin.', 'Örneğin: “Yarın sabah 7’ye alarm kur.”'], ['Konuşmanız bitince tuşu bırakın.']]),
  'g19-circle': L('Ekrandaki bir şeyi Daire Çizerek Ara ile çevresine daire çizerek arayın.', [
    ['Ekranın altındaki Ana ekran tuşuna basılı tutun.'], ['Aradığınız şeyin çevresine parmağınızla daire çizin.'],
    ['Alttaki sonuçları okuyun.', '', 'Bixby Vision, Galaxy S25, S24 ve S23 serilerinde vardır. S26 bu yöntemi (Daire Çizerek Ara) kullanır.']]),
  'g19-interpret': L('Telefon uygulamasında Canlı çeviriyi açın ve arama sırasında kullanın.', [
    open('Telefon'), ['Sağ üstteki üç noktaya dokunun.'], ['‘Ayarlar’ öğesine dokunun.'], ['‘Canlı çeviri’ öğesine dokunun.'], ['‘Canlı çeviri’ anahtarına dokunarak açın.'],
    ['Arama sırasında ‘Arama asistanı’na dokunun.'], ['‘Canlı çeviri’ öğesine dokunun.']]),
  'g19-write': L('Klavyedeki Galaxy AI aracıyla bir mesajın yazım ve dil bilgisini düzeltin.', [
    open('Mesajlar'), ['Bir konuşmaya dokunun.'], ['Mesajınızı yazın.'], ['Klavyenin sol üstündeki Galaxy AI simgesine dokunun.'], ['‘Yazım ve dil bilgisi’ öğesine dokunun.', 'Hatalar düzeltilir. ‘Özetle’ uzun metinleri kısaltır.']]),
  'g19-transcribe': L('Ses Kaydedici’de Galaxy AI ile bir ses kaydını metne çevirin.', [
    open('Ses Kaydedici'), ['Metne çevirmek istediğiniz kayda dokunun.'], AI_ICON, ['‘Metne dönüştür’ öğesine dokunun.'], ['Oluşturulan metni okuyun.']]),
  'g19-photo': L('Galeri’de Galaxy AI ile fotoğraftan bir kişiyi veya nesneyi silin.', [
    GALLERY, ['Düzenlemek istediğiniz fotoğrafa dokunun.'], AI_ICON, ['‘Nesne silgisi’ öğesine dokunun.'], ['Silmek istediğiniz kişinin veya nesnenin çevresini parmağınızla çizin.'], ['‘Sil’ öğesine dokunun.'],
    ['Sonucu beğenirseniz ‘Kaydet’e dokunun.']]),
  'g19-support': L('Telefonunuzun hangi Galaxy AI özelliklerini desteklediğini Ayarlar’da görün.', [
    ...settings('Galaxy AI'), ['Telefonunuzun kullanabileceği yapay zekâ özelliklerinin listesine bakın.', 'Listede olmayan özellikler bu modelde desteklenmez.', 'Bazı özellikler modele ve operatöre bağlıdır veya internet gerektirir.']]),
  'g20-smartview': L('Smart View ile telefon ekranını TV’de gösterin.', [
    QUICK, ['‘Smart View’ öğesine dokunun.'], ['TV’nin adına dokunun.', 'TV ve telefon aynı Wi-Fi’deyse en iyi çalışır.'], ['‘Şimdi başlat’ öğesine dokunun.']]),
  'g20-pc': L('Galaxy’nizi Windows’a Bağlan ile bir Windows bilgisayara bağlayın.', [
    ...settings('Bağlı cihazlar', 'Windows’a Bağlan'), ['Ekrandaki talimatları okuyun.'], ['Bağlantıyı tamamlamak için bilgisayarda gösterilen adresi açın.']]),
  'g20-dex': L('Samsung DeX’in ne olduğunu ve ayarlarının nerede olduğunu öğrenin.', [...settings('Bağlı cihazlar', 'Samsung DeX'), ['Bilgileri okuyun.']]),
  'g20-watch': L('Galaxy Wearable uygulamasıyla bir Galaxy saat veya kulaklık bağlayın.', [
    ['‘Galaxy Wearable’ uygulamasına dokunun.', 'Ana ekranda yoksa Uygulamalar ekranında arayın.'], ['‘Başlat’ öğesine dokunun.'], ['Bağlantıyı tamamlamak için ekrandaki talimatları izleyin.']]),
  'g20-smartthings': L('SmartThings ile ev aletlerini telefona bağlayın.', [
    open('SmartThings'), ['Üstteki ‘+’ (Ekle) öğesine dokunun.'], ['Bağlamak istediğiniz aleti seçin.'], ['Bağlantıyı tamamlamak için ekrandaki talimatları izleyin.']]),
  'g20-musicshare': L('Arkadaşlarınızın Bluetooth hoparlörünüzden müzik çalabilmesi için Music Share’i açın.', [
    ...settings('Bağlı cihazlar', 'Music Share'), ['‘Music Share’ anahtarına dokunarak açın.', 'Arkadaşlarınız telefonlarındaki müziği Bluetooth hoparlörünüzden çalabilir.']]),
  'g21-split': L('Bölünmüş ekranla iki uygulamayı aynı anda kullanın.', [
    ['Sol alttaki Son uygulamalar tuşuna dokunun.'], ['Bir uygulamanın üstündeki küçük simgeye dokunun.'], ['‘Bölünmüş ekran görünümünde aç’ öğesine dokunun.'], ['Alt yarı için ikinci uygulamayı seçin.']]),
  'g21-modes': L('Modlar ve Rutinler’de Uyku modunu açın.', [
    ...settings('Modlar ve Rutinler', 'Modlar'), ['‘Uyku’ öğesine dokunun.'], ['‘Aç’ öğesine dokunun.', 'Uyurken bildirimler susar ve ekran kararır.']]),
  'g21-aod': L('Always On Display ile ekran kapalıyken bile saati gösterin.', [
    ...settings('Kilit ekranı ve AOD'), ['‘Always On Display’ anahtarına dokunarak açın.', 'Ekran kapalıyken de saati görürsünüz. Biraz daha fazla pil harcar.'],
    ['Saat stilini değiştirmek için kilit ekranına basılı tutun.']]),
  'g21-wellbeing': L('Bugün telefonu ne kadar kullandığınızı görün ve uygulama zamanlayıcıları kurun.', [
    ...settings('Dijital Sağlık ve ebeveyn denetimleri'), ['Bugünkü kullanım sürenize bakın.'], ['‘Uygulama zamanlayıcıları’ öğesine dokunun.', 'Her uygulama için günlük süre sınırı koyabilirsiniz.']]),
  'g21-apps': L('Samsung Health, Samsung Kids ve Game Booster’ı tanıyın.', [
    ['‘Samsung Health’ uygulamasına dokunun.', 'Ana ekranda yoksa Uygulamalar ekranında arayın.'], ['Adım sayınıza ve egzersiz kayıtlarınıza bakın.'],
    ...settings('Uygulamalar', 'Samsung Kids'), ['‘Aç’ öğesine dokunun.', 'Torunlarınız için uygulamaları ve süre sınırlarını seçebilirsiniz.'], ['Oyun oynarken ekranın altındaki Game Booster simgesine dokunun.']]),
  'g21-samsung': L('Samsung.com ve Samsung Global Goals uygulamalarını ve Samsung News’i bulun.', [
    open('Samsung.com'), ['Burada Samsung ürün haberlerini okur ve destek alırsınız.'], HOME_BTN,
    ['‘Samsung Global Goals’ uygulamasına dokunun.', 'Uygulamalar ekranında ‘Samsung Global Goals’u arayın.'], ['Samsung News’i Uygulamalar ekranındaki aramayla bulun.']]),
  'g21-spen': L('S Pen’i çıkarın, menüsünü açın ve desteklenen Ultra modellerde PENUP’ı deneyin.', [
    ['Telefonun altındaki S Pen’in ucuna hafifçe bastırın.'], ['Ekrandaki menüden istediğiniz özelliğe dokunun.'], open('PENUP'), ['Bitince S Pen’i tık sesi gelene kadar içeri itin.']]),
  'g22-ring': L('Telefon çalmadığında neleri kontrol etmelisiniz.', [
    QUICK, ['‘Ses’ düğmesine dokunun.', 'Sessiz veya Titreşim’deyse Ses’e geçmek için dokunun.'], ['‘Rahatsız etmeyin’ maviyse (açıksa) kapatmak için dokunun.'], ['Sesi artırmak için yandaki Ses açma tuşuna basın.']]),
  'g22-network': L('Aramalar veya internet çalışmadığında neleri kontrol etmelisiniz.', [
    QUICK, ['‘Uçak modu’ açıksa kapatmak için dokunun.'], ['‘Mobil veri’ kapalıysa açmak için dokunun.'], ['Sinyal zayıfsa başka bir yere geçmeyi deneyin.'], ['Hâlâ çalışmıyorsa telefonu yeniden başlatın.']]),
  'g22-charge': L('Galaxy’niz şarj olmadığında neleri kontrol etmelisiniz.', [
    ['Kablonun ve şarj aletinin tam takılı olduğunu kontrol edin.'], ['Giriş ıslaksa şarj etmeden önce tamamen kurumasını bekleyin.'], ...settings('Pil', 'Şarj ayarları'),
    ['Hâlâ şarj olmuyorsa telefonu, şarj aletini ve kabloyu servise götürün.']]),
  'g22-hot': L('Telefon ısındığında ne yapmalısınız.', [
    ['Şarjdaysa şarj aletini çıkarın.'], ['Son uygulamalar tuşuna dokunun.'], ['Uygulamaları kapatmak için ‘Tümünü kapat’a dokunun.'], ['Bir süre kullanmayın ve serin bir yerde soğumasını bekleyin.']]),
  'g22-freeze': L('Donan bir Galaxy’yi iki tuşla zorla yeniden başlatın.', [
    ['Yan tuşa ve Ses kısma tuşuna birlikte 7 saniyeden uzun basılı tutun.', 'Ekran kapanana kadar tutmaya devam edin.'], ['Ekran kapanınca bırakın ve bekleyin.']]),
  'g22-water': L('Telefon ıslanırsa neleri kontrol edip ne yapmalısınız.', [
    ['Yumuşak bir bezle tamamen kurulayın.'], ['Tamamen kuruyana kadar şarj aletini takmayın.'], ['Deniz, havuz veya sabunlu suysa temiz suyla durulayıp kurulayın.'], ['Bir tuhaflık varsa hemen servise götürün.']]),
  'g22-members': L('Samsung Members’taki Telefon tanılama ile sorunları arayın.', [
    ['‘Samsung Members’ uygulamasına dokunun.', 'Ana ekranda yoksa Uygulamalar ekranında arayın.'], ['‘Destek’ öğesine dokunun.'], ['‘Telefon tanılama’ öğesine dokunun.'], ['‘Tümünü test et’e veya kontrol etmek istediğiniz öğeye dokunun.']]),
  'g22-service': L('Samsung servisine başvurmadan önce modeli ve sorunu not edin.', [
    ...settings('Telefon hakkında'), ['Model numarasını not edin (örneğin SM-S942N).'], ['Sorunun ne zaman ve nasıl olduğunu not edin.'],
    ['Ülkenizdeki Samsung desteğine başvurun veya servis randevusu alın.', 'Ülkenizin destek sayfasını samsung.com/support adresinde bulun.']]),
};
