// Mga aralin sa Galaxy sa Filipino (draft, hindi pa nasusuri → noindex, wala sa sitemap).
// Ang steps[i] ay katapat ng ika-i na card ng Korean na aralin.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Mga pangunahing kaalaman', life: 'Araw-araw na gamit', apply: 'Iba pang feature', adv: 'Advanced at pag-aayos ng problema' };

export const CATEGORIES = {
  1: ['Pagbukas at pagpatay ng telepono', 'Mga button, pag-charge, power at lock screen'],
  2: ['Pag-tap, pagpindot nang matagal at pag-swipe', 'Mga pangunahing galaw at button sa nabigasyon'],
  3: ['Pagpapadali sa teksto at tunog', 'Mas malaking teksto, liwanag, screen timeout at volume'],
  4: ['Pagtawag at pagsagot', 'Pagtawag, pagsagot, speaker at pag-block'],
  5: ['Pag-save at paghanap ng contact', 'Bagong contact, paghahanap, pag-edit at mga paborito'],
  6: ['Pagpapadala ng mensahe', 'Pag-type, pagwawasto, pagkopya at pagdagdag ng larawan'],
  7: ['Mga notification at mabilisang setting', 'Notification panel, flashlight, pag-ikot at Huwag istorbohin'],
  8: ['Wi-Fi, data at Bluetooth', 'Pagkonekta sa internet at sa ibang device'],
  9: ['Paghahanap sa internet at pag-install ng app', 'Browser, QR code, download at app store'],
  10: ['Pagkuha ng larawan at video', 'Camera, selfie, zoom, timer at video'],
  11: ['Pag-aayos ng larawan at file', 'Gallery, pag-edit, pagbabalik at Aking Mga File'],
  12: ['Home screen at mga tool', 'Mga app, folder, wallpaper, alarm, kalendaryo at tala'],
  13: ['Pagbabahagi ng larawan sa pamilya', 'Email, video at video call'],
  14: ['Pagbabayad gamit ang Samsung Wallet', 'Pagbukas ng Wallet at pagpili ng card'],
  15: ['Ligtas na paggamit ng telepono', 'Screen lock, biometrics, pahintulot at Emergency SOS'],
  16: ['Paglipat sa bagong telepono', 'Setup, account, Smart Switch at backup'],
  17: ['Paningin, pandinig at paghawak', 'Pag-magnify, contrast, TalkBack at caption'],
  18: ['Baterya at storage', 'Pagtitipid ng power, storage, pangangalaga ng device at update'],
  19: ['Galaxy AI at Bixby', 'Mga utos gamit ang boses at feature ng Galaxy AI'],
  20: ['Pagkonekta sa TV, computer at relo', 'Smart View, PC, DeX, wearable at SmartThings'],
  21: ['Iba pang kapaki-pakinabang na feature', 'Split screen, mga mode at routine, Always On Display'],
  22: ['Kapag may problema', 'Walang tunog, walang signal, pag-charge, pag-init at pag-freeze'],
};

export const TITLES = {
  'g01-buttons': ['mga-button-sa-gilid', 'Paghanap sa mga button sa gilid'], 'g01-charge': ['pag-charge-ng-telepono', 'Pag-charge ng telepono'],
  'g01-power': ['patayin-at-buksan', 'Pagpatay at muling pagbukas ng telepono'], 'g01-restart': ['i-restart', 'Pag-restart ng telepono'],
  'g01-lock': ['i-lock-ang-screen', 'Pag-lock at pag-unlock ng screen'], 'g02-tap': ['pag-tap', 'Pag-tap nang isang beses'],
  'g02-hold': ['pindutin-nang-matagal', 'Pagpindot nang matagal'], 'g02-swipe': ['pag-swipe', 'Pag-swipe para lumipat'],
  'g02-pinch': ['pag-zoom-gamit-dalawang-daliri', 'Pag-zoom gamit ang dalawang daliri'], 'g02-back': ['button-na-bumalik', 'Pagbalik sa naunang screen'],
  'g02-home': ['button-na-home', 'Pagbalik sa Home screen'], 'g02-recent': ['mga-kamakailang-app', 'Pagbukas ng mga kamakailang app'],
  'g03-font': ['palakihin-ang-teksto', 'Pagpapalaki ng teksto'], 'g03-zoom': ['zoom-ng-screen', 'Pagpapalaki ng screen at mga icon'],
  'g03-easy': ['easy-mode', 'Pag-on ng Easy mode'], 'g03-bright': ['liwanag', 'Pag-aayos ng liwanag'],
  'g03-timeout': ['screen-timeout', 'Pagbabago kung kailan papatay ang screen'], 'g03-sound': ['ringtone-at-vibration', 'Pag-aayos ng ringtone at vibration'],
  'g04-call': ['tumawag', 'Pagtawag gamit ang keypad'], 'g04-answer': ['sagutin-o-tanggihan', 'Pagsagot o pagtanggi sa tawag'],
  'g04-speaker': ['speaker', 'Pag-on ng speaker habang tumatawag'], 'g04-missed': ['tawagan-ang-missed-call', 'Pagtawag pabalik sa missed call'],
  'g04-log': ['kasaysayan-ng-tawag', 'Pagtingin sa kasaysayan ng tawag'], 'g04-block': ['i-block-ang-numero', 'Pag-block ng hindi gustong numero'],
  'g05-new': ['mag-save-ng-contact', 'Pag-save ng bagong contact'], 'g05-search': ['maghanap-ng-contact', 'Paghanap ng contact ayon sa pangalan'],
  'g05-edit': ['i-edit-ang-numero', 'Pagwawasto ng numero'], 'g05-speed': ['speed-dial', 'Pagdagdag ng madalas tawagan'],
  'g05-share': ['ibahagi-ang-contact', 'Pagbabahagi ng contact'], 'g06-send': ['magpadala-at-sumagot-sa-mensahe', 'Pagpapadala at pagsagot sa mensahe'],
  'g06-type': ['letra-numero-simbolo', 'Pag-type ng letra, numero at simbolo'], 'g06-fix': ['iwasto-ang-mali', 'Pagwawasto ng maling type'],
  'g06-copy': ['kopyahin-at-i-paste', 'Pagkopya at pag-paste'], 'g06-photo': ['magdagdag-ng-larawan', 'Pagdagdag ng larawan sa mensahe'],
  'g06-translate': ['isalin-ang-teksto', 'Pagsasalin ng teksto'], 'g07-noti': ['mga-notification', 'Pagtingin at pag-clear ng notification'],
  'g07-appnoti': ['notification-ng-app', 'Pag-aayos ng notification ng app'], 'g07-quick': ['mabilisang-setting', 'Pagbukas ng panel ng Mabilisang setting'],
  'g07-flash': ['flashlight', 'Pag-on ng flashlight'], 'g07-rotate': ['pag-ikot-ng-screen', 'Pag-aayos ng pag-ikot ng screen'],
  'g07-dnd': ['huwag-istorbohin-airplane-mode', 'Paggamit ng Huwag istorbohin at Airplane mode'], 'g08-wifi': ['kumonekta-sa-wifi', 'Pagkonekta sa Wi-Fi'],
  'g08-data': ['mobile-data', 'Pag-on at pag-off ng mobile data'], 'g08-usage': ['paggamit-ng-data', 'Pagtingin sa paggamit ng data'],
  'g08-bt': ['bluetooth-earphones', 'Pagkonekta ng Bluetooth earphones'], 'g08-hotspot': ['mobile-hotspot', 'Paggamit ng Mobile Hotspot'],
  'g08-location': ['lokasyon-at-nfc', 'Paghanap sa setting ng Lokasyon at NFC'], 'g09-search': ['maghanap-sa-samsung-internet', 'Paghahanap sa Samsung Internet'],
  'g09-bookmark': ['i-save-ang-pahina', 'Pag-save ng madalas bisitahing pahina'], 'g09-qr': ['buksan-ang-qr-code', 'Pagbukas ng QR code'],
  'g09-files': ['mga-na-download-na-file', 'Paghanap sa mga na-download na file'], 'g09-stores': ['play-store-at-galaxy-store', 'Paggamit ng Play Store at Galaxy Store'],
  'g09-install': ['mag-install-mag-update-mag-uninstall', 'Pag-install, pag-update at pag-uninstall ng app'], 'g09-google': ['mga-app-ng-google', 'Paghanap sa mga app ng Google at ng network'],
  'g10-open': ['buksan-ang-camera', 'Pagbukas ng camera'], 'g10-focus': ['pag-focus', 'Pag-focus ng camera'],
  'g10-switch': ['lumipat-ng-camera', 'Paglipat sa harap at likod na camera'], 'g10-selfie': ['selfie', 'Pagkuha ng selfie'],
  'g10-zoom': ['kumuha-nang-naka-zoom', 'Pagkuha nang naka-zoom'], 'g10-timer': ['timer-ng-camera', 'Paggamit ng timer ng camera'],
  'g10-modes': ['portrait-at-night-mode', 'Pagsubok sa Portrait at Night mode'], 'g10-video': ['mag-record-ng-video', 'Pag-record ng video'],
  'g10-capture': ['screenshot-at-screen-recording', 'Pagkuha ng screenshot o pag-record ng screen'], 'g11-latest': ['pinakabagong-larawan', 'Paghanap sa kakakuhang larawan'],
  'g11-album': ['gumawa-ng-album', 'Paggawa ng album'], 'g11-edit': ['i-crop-at-paliwanagin', 'Pag-crop at pagpapaliwanag ng larawan'],
  'g11-text': ['kopyahin-ang-teksto-sa-larawan', 'Pagkopya ng teksto mula sa larawan'], 'g11-multi': ['ibahagi-ang-maraming-larawan', 'Pagbabahagi ng maraming larawan'],
  'g11-restore': ['ibalik-ang-binurang-larawan', 'Pagbabalik ng binurang larawan'], 'g11-docs': ['mga-dokumento-sa-aking-mga-file', 'Paghanap ng dokumento sa Aking Mga File'],
  'g11-quickshare': ['quick-share', 'Pagpapadala ng file gamit ang Quick Share'], 'g12-addapp': ['app-sa-home-screen', 'Paglagay ng app sa Home screen'],
  'g12-folder': ['folder-at-widget', 'Paggawa ng folder at widget'], 'g12-wallpaper': ['wallpaper-at-tema', 'Pagpalit ng wallpaper, tema at lock screen'],
  'g12-alarm': ['alarm-at-timer', 'Pag-set ng alarm at timer'], 'g12-calendar': ['appointment-sa-kalendaryo', 'Pagdagdag ng appointment sa kalendaryo'],
  'g12-reminder': ['paalala', 'Pagkuha ng paalala sa gagawin'], 'g12-note': ['samsung-notes', 'Paggamit ng Samsung Notes'],
  'g12-recorder': ['voice-recorder', 'Pag-record ng boses'], 'g12-tools': ['panahon-calculator-radyo', 'Paggamit ng Panahon, Calculator at Radyo'],
  'x13-gmail': ['larawan-sa-gmail', 'Pagpapadala ng larawan sa email gamit ang Gmail'], 'x13-video': ['video-sa-pamilya', 'Pagpapadala ng video sa pamilya'],
  'x13-meet': ['video-call-sa-google-meet', 'Video call gamit ang Google Meet'], 'g14-open': ['buksan-ang-samsung-wallet', 'Pagbukas ng Samsung Wallet'],
  'g14-add': ['magdagdag-ng-card', 'Pagtingin sa screen ng pagdagdag ng card'], 'g14-pay': ['pumili-ng-card-pambayad', 'Pagpili ng card na pambayad'],
  'g15-pin': ['gumawa-ng-pin', 'Paggawa ng PIN'], 'g15-bio': ['fingerprint-at-mukha', 'Pag-save ng fingerprint at mukha'],
  'g15-perm': ['pahintulot-at-lokasyon', 'Pagsuri sa pahintulot ng app at lokasyon'], 'g15-folder': ['secure-folder-samsung-pass', 'Pagkilala sa Secure Folder at Samsung Pass'],
  'g15-medical': ['medikal-na-impormasyon', 'Pagdagdag ng medikal na impormasyon at emergency contact'], 'g15-sos': ['emergency-sos', 'Pagsuri sa setting ng Emergency SOS'],
  'g15-find': ['samsung-find', 'Paghanap ng telepono gamit ang Samsung Find'], 'g16-setup': ['unang-setup', 'Unang pag-set up ng telepono'],
  'g16-sim': ['sim-at-esim', 'Pagkilala sa SIM at eSIM'], 'g16-account': ['samsung-at-google-account', 'Pagsuri sa Samsung at Google account'],
  'g16-switch': ['smart-switch', 'Paglipat ng contact at larawan gamit ang Smart Switch'], 'g16-backup': ['suriin-ang-backup', 'Pagsuri sa backup'],
  'g16-restore': ['ibalik-mula-sa-backup', 'Pagbabalik mula sa backup'], 'g17-magnify': ['pag-magnify', 'Pagpapalaki ng bahagi ng screen'],
  'g17-contrast': ['high-contrast-na-font', 'Pagpapalinaw ng contrast ng teksto'], 'g17-talkback': ['talkback', 'Pagbasa nang malakas sa screen gamit ang TalkBack'],
  'g17-caption': ['tunog-at-caption', 'Pag-aayos ng tunog at caption'], 'g17-hearing': ['hearing-aid', 'Pagsuri sa suporta sa hearing aid'],
  'g17-touch': ['setting-sa-paghawak', 'Pag-aayos ng setting sa paghawak at shortcut ng accessibility'], 'g18-usage': ['mga-app-na-malakas-sa-baterya', 'Paghanap sa mga app na malakas sa baterya'],
  'g18-saver': ['pagtitipid-ng-power', 'Pag-on ng Pagtitipid ng power'], 'g18-storage': ['suriin-ang-storage', 'Pagsuri sa storage'],
  'g18-clean': ['malalaking-file', 'Paglinis ng malalaking file'], 'g18-care': ['pangangalaga-ng-device', 'Pagsuri sa telepono gamit ang Pangangalaga ng device'],
  'g18-update': ['software-update', 'Pag-update ng software'], 'g18-version': ['modelo-at-bersyon-ng-one-ui', 'Pagsuri sa modelo at bersyon ng One UI'],
  'g19-bixby': ['magtanong-kay-bixby', 'Pagtatanong kay Bixby gamit ang boses'], 'g19-circle': ['circle-to-search', 'Paghahanap ng nasa screen'],
  'g19-interpret': ['pagsasalin-ng-tawag', 'Pagkilala sa pagsasalin ng tawag at Interpreter'], 'g19-write': ['iwasto-at-ibuod-ang-teksto', 'Pagwawasto at pagbubuod ng teksto'],
  'g19-transcribe': ['gawing-teksto-ang-recording', 'Paggawa ng recording na teksto'], 'g19-photo': ['ai-sa-larawan', 'Pag-edit ng larawan gamit ang AI'],
  'g19-support': ['feature-ayon-sa-modelo', 'Pagsuri sa feature ayon sa modelo'], 'g20-smartview': ['smart-view', 'Pagpapakita ng screen sa TV gamit ang Smart View'],
  'g20-pc': ['kumonekta-sa-computer', 'Pagkonekta sa computer'], 'g20-dex': ['samsung-dex', 'Pagkilala sa Samsung DeX'],
  'g20-watch': ['relo-at-earbuds', 'Pagkonekta ng relo at earbuds'], 'g20-smartthings': ['smartthings', 'Pagkonekta ng appliance gamit ang SmartThings'],
  'g20-musicshare': ['music-share', 'Pagkilala sa Music Share'], 'g21-split': ['split-screen', 'Paggamit ng dalawang app sa split screen'],
  'g21-modes': ['mga-mode-at-routine', 'Pag-aayos ng Mga Mode at Routine'], 'g21-aod': ['always-on-display', 'Pagpapakita ng orasan sa lock screen'],
  'g21-wellbeing': ['digital-wellbeing', 'Pagtingin sa oras ng paggamit gamit ang Digital Wellbeing'], 'g21-apps': ['samsung-health-kids-game-booster', 'Pagkilala sa Samsung Health, Samsung Kids at Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Paghanap sa Samsung News, Samsung.com at Global Goals'], 'g21-spen': ['s-pen', 'Paggamit ng S Pen sa mga suportadong modelo'],
  'g22-ring': ['hindi-tumutunog', 'Kapag hindi tumutunog ang telepono'], 'g22-network': ['walang-tawag-o-internet', 'Kapag hindi gumagana ang tawag o internet'],
  'g22-charge': ['hindi-nagcha-charge', 'Kapag hindi nagcha-charge ang telepono'], 'g22-hot': ['umiinit-ang-telepono', 'Kapag umiinit ang telepono'],
  'g22-freeze': ['nag-freeze-ang-screen', 'Kapag nag-freeze ang screen'], 'g22-water': ['nabasa-ang-telepono', 'Ano ang susuriin kapag nabasa ang telepono'],
  'g22-members': ['diagnostics-sa-samsung-members', 'Diagnostics gamit ang Samsung Members'], 'g22-service': ['bago-magpaserbisyo', 'Pagtala ng modelo at problema bago magpaserbisyo'],
};

const PHONE = open('Telepono');
const CONTACTS = open('Mga Contact');
const MESSAGES = open('Mga Mensahe');
const CAMERA = open('Camera');
const GALLERY = open('Gallery');
const SHUTTER = ['I-tap ang puting shutter button.'];
const REAL = 'Binabago ng araling ito ang totoong setting o may totoong resulta. Basahin muna ang lahat ng hakbang, saka gawin sa telepono.';
const AI_ICON = ['I-tap ang icon ng Galaxy AI.'];
const CHECK = 'Bagong aralin na isinulat para sa pandaigdigang site. Madalas magbago ang screen ng mga app ng Google; suriin sa totoong telepono.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Alamin kung nasaan at para saan ang Volume up, Volume down at Side button ng Galaxy.', [
    ['Tingnan ang kanang gilid ng telepono.', 'May tatlong button. Mula sa itaas: Volume up, Volume down at Side button.'],
    ['Pindutin ang Side button sa larawan.', 'Ito ang pinakamababa. Pambukas at pampatay ito ng telepono o ng screen.'],
    ['Pindutin ang Volume down sa larawan.', 'Ito ang nasa gitna. Pinahihina nito ang tunog.'],
    ['Pindutin ang Volume up sa larawan.', 'Ito ang pinakamataas. Pinalalakas nito ang tunog.']]),
  'g01-charge': L('I-charge ang Galaxy nang hakbang-hakbang: isaksak ang charger, ikabit ang cable at tingnan ang tanda ng pag-charge.', [
    ['Isaksak ang charger sa saksakan.'], ['Ikabit ang dulo ng cable sa port sa ilalim ng telepono.', 'Kung basa ang port, hintayin munang matuyo nang lubos.'],
    ['Tingnan kung may tanda ng pag-charge sa screen.'], ['Tanggalin ang cable kapag puno na.']]),
  'g01-power': L('Patayin ang Galaxy gamit ang Side button at Volume down, saka buksan muli.', [
    ['Pindutin nang matagal ang Side button at Volume down nang sabay.', 'Pindutin ang dalawa at hintaying lumabas ang menu.'],
    ['I-tap ang I-off.'], ['I-tap muli ang I-off.', 'Kapag dumilim ang screen, pumunta sa susunod na hakbang para buksan muli.'],
    ['Pindutin nang matagal ang Side button para buksan ang telepono.', 'Pindutin nang ilang segundo hanggang lumabas ang logo ng Samsung. Saka i-unlock ang screen.']]),
  'g01-restart': L('I-restart ang Galaxy kapag bumabagal o kakaiba ang kilos nito.', [
    ['Pindutin nang matagal ang Side button at Volume down nang sabay.', 'Pindutin hanggang lumabas ang power menu.'], ['I-tap ang I-restart.'], ['I-tap muli ang I-restart.'],
    ['Hintaying mamatay at bumukas muli ang telepono.', '', 'Kung naka-freeze ang screen at walang menu, pindutin ang dalawang button nang higit 7 segundo.']]),
  'g01-lock': L('I-lock ang screen gamit ang Side button at i-unlock sa pag-swipe pataas.', [
    ['Pindutin nang mabilis ang Side button nang isang beses.', 'Mamamatay ang screen at kusang magla-lock.'], ['Pindutin muli nang mabilis ang Side button.', 'Bubukas ang lock screen. Gumagana rin ang pag-tap nang dalawang beses sa screen.'],
    ['Mag-swipe pataas sa screen.', 'Kung may PIN o fingerprint ka, gamitin ito para mag-unlock.']]),
  'g02-tap': L('Subukan ang pinakapangunahing galaw: mag-tap nang isang beses para buksan ang app.', [
    ['I-tap nang marahan ang Gallery gamit ang dulo ng daliri.', 'Huwag diinan. Sapat ang marahang tap para buksan ang app.'], HOME_BTN]),
  'g02-hold': L('Subukan ang pagpindot nang matagal para buksan ang menu ng app.', [
    ['Pindutin ang Gallery nang 2 segundo.', 'Huwag iangat ang daliri hanggang lumabas ang menu.'], ['Tingnan kung lumabas ang menu.', 'Ipinapakita ng pagpindot nang matagal ang magagawa mo sa app.'],
    ['I-tap ang button na Bumalik para isara ang menu.']]),
  'g02-swipe': L('Mag-swipe para lumipat sa mga pahina ng Home screen at buksan ang screen ng Mga App.', [
    ['Mag-swipe pakaliwa sa screen.', 'Lilipat ka sa susunod na pahina ng Home screen.'], ['Sa Home screen, mag-swipe pataas mula sa ibaba.', 'Bubukas ang screen ng Mga App na may lahat ng app.'],
    ['Sa screen ng Mga App, mag-swipe pababa.', 'Babalik ka sa Home screen.']]),
  'g02-pinch': L('Ibuka ang dalawang daliri para palakihin ang larawan, at pagdikitin para paliitin.', [
    open('Gallery'), ['I-tap ang larawang gusto mong makita.'], ['Ilagay ang dalawang daliri sa larawan at ibuka.', 'Ibuka ang hinlalaki at hintuturo para palakihin.'], ['Pagdikitin ang dalawang daliri.', 'Liliit muli ang larawan.']]),
  'g02-back': L('Gamitin ang button na Bumalik para bumalik sa naunang screen.', [
    ...settings('Display'),
    ['I-tap ang button na Bumalik sa kanang ibaba.', 'Babalik ka sa naunang screen (Mga Setting).', 'Mababago ang ayos ng mga button sa Mga Setting → Display → Navigation bar.']]),
  'g02-home': L('Bumalik sa Home screen mula sa kahit anong app gamit ang button na Home.', [
    open('Mga Setting'), HOME_BTN,
    ['Tingnan kung lumabas ang Home screen.', 'Kahit saang app ka, dadalhin ka rito ng button na Home.', 'Kung hindi mo makita ang mga button, mag-swipe nang bahagya pataas mula sa pinakaibaba.']]),
  'g02-recent': L('Buksan ang mga kamakailang app para lumipat o isara ang lahat.', [
    ['I-tap ang button na Mga Kamakailan sa kaliwang ibaba.', 'Lalabas na parang mga card ang mga kamakailang app.'], ['I-tap ang app na gusto mong gamitin muli.', 'Mag-swipe patagilid para makita ang iba.'],
    ['I-tap muli ang button na Mga Kamakailan.'], ['I-tap ang ‘Isara lahat’.', 'Magsasara ang lahat ng nakabukas na app.']]),
  'g03-font': L('Palakihin at gawing makapal ang teksto sa Mga Setting → Display → Laki at istilo ng font.', [
    ...settings('Display', 'Laki at istilo ng font'), ['I-drag pakanan ang bilog sa bar ng laki.', 'Habang pakanan, lumalaki ang teksto.'],
    ['I-tap ang switch ng ‘Makapal na font’ para i-on.', 'Mas madaling basahin ang makapal na teksto.'], ['Tingnan kung lumaki ang teksto.']]),
  'g03-zoom': L('Palakihin ang mga icon at button gamit ang Zoom ng screen sa Mga Setting → Display.', [
    ...settings('Display', 'Zoom ng screen'), ['I-drag pakanan ang bilog sa bar.', 'Habang pakanan, lumalaki ang mga icon at button.'], ['Tingnan kung lumaki ang mga icon at button.']]),
  'g03-easy': L('I-on ang Easy mode para sa mas simpleng Home screen na may malaking teksto at icon.', [
    ...settings('Display', 'Easy mode'), ['I-tap ang switch ng ‘Easy mode’ para i-on.', 'Lalaki ang teksto at mga icon sa Home screen.'], ['Tingnan kung lumaki ang teksto at mga icon sa Home screen.']]),
  'g03-bright': L('Ayusin ang liwanag ng screen mula sa panel ng Mabilisang setting.', [
    ['Mag-swipe pababa mula sa kanang itaas ng screen.', 'Bubukas ang panel ng Mabilisang setting.'], ['I-drag pakanan ang bar ng liwanag.', 'Kapag pakaliwa, didilim ang screen.'], ['Mag-swipe pataas para isara ang panel.']]),
  'g03-timeout': L('Baguhin kung gaano katagal nakabukas ang screen sa Mga Setting → Display → Screen timeout.', [
    ...settings('Display', 'Screen timeout'), ['I-tap ang ‘5 minuto’.', 'Piliin ang gustong tagal. Kapag mas matagal, mas maraming baterya ang nagagamit.']]),
  'g03-sound': L('Lakasan ang ringtone at pa-vibrate-in ang telepono habang tumutunog.', [
    ...settings('Mga tunog at vibration', 'Volume'), ['I-drag pakanan ang bar ng Ringtone.', 'Habang pakanan, lumalakas ang ring.'], BACK,
    ['I-tap ang ‘Tunog’.', 'Para vibration lang, i-tap ang ‘Vibrate’.'], ['I-tap ang switch ng ‘Mag-vibrate habang nagri-ring’ para i-on.', 'Sabay kang aabisuhan ng tunog at vibration.']]),
  'g04-call': L('Tumawag sa Galaxy sa pag-type ng numero sa keypad.', [
    PHONE, ['I-tap ang ‘Keypad’ sa ibaba.'], ['I-tap isa-isa ang mga numero ng telepono.', 'Kung nagkamali, burahin gamit ang delete button sa kanang ibaba.'], ['I-tap ang berdeng button na tawag.'],
    ['Kapag tapos na ang usapan, i-tap ang pulang button na ibaba.']]),
  'g04-answer': L('Sumagot sa pag-swipe ng berdeng button, at tumanggi gamit ang pula o isang mensahe.', [
    ['Pindutin nang matagal ang berdeng button na Sagutin at i-swipe pataas.', 'Kapag na-swipe palabas ng bilog, kokonekta ang tawag.'], ['Para tumanggi, pindutin nang matagal ang pulang button at i-swipe pataas.'],
    ['Para tumanggi gamit ang mensahe, i-swipe pataas ang ‘Magpadala ng mensahe’ sa ibaba.', 'Pumili ng mensahe at ipapadala ito sa tumatawag.', 'Maaaring i-on ang pagsagot sa isang tap sa Mga Setting → Accessibility → Interaksyon at kahusayan.']]),
  'g04-speaker': L('I-on ang speaker habang tumatawag para makapagsalita nang hindi hawak sa tainga ang telepono.', [
    ['Tumawag o sumagot ng tawag.'], ['I-tap ang ‘Speaker’.', 'Maririnig at makapagsasalita ka kahit malayo sa tainga ang telepono.'], ['I-tap muli ang ‘Speaker’ para i-off.']]),
  'g04-missed': L('Tawagan pabalik ang missed call mula sa listahan ng Mga Kamakailan sa app na Telepono.', [
    PHONE, ['I-tap ang ‘Mga Kamakailan’ sa ibaba.'], ['I-swipe pakanan ang missed na numero.', 'Kapag na-swipe pakanan, tatawag agad.', 'Kung hindi tumawag, i-tap ang numero at saka ang button na tawag.']]),
  'g04-log': L('Tingnan kung sino ang tumawag at kailan sa listahan ng Mga Kamakailan sa app na Telepono.', [PHONE, ['I-tap ang ‘Mga Kamakailan’ sa ibaba.'], ['I-tap ang pangalan para makita ang detalye.', 'Makikita mo kung kailan kayo nag-usap.']]),
  'g04-block': L('I-block ang hindi gustong numero mula sa setting ng app na Telepono.', [
    PHONE, ['I-tap ang tatlong tuldok (Higit pang opsyon) sa kanang itaas.'], ['I-tap ang ‘Mga Setting’.'], ['I-tap ang ‘I-block ang mga numero’.'],
    ['I-tap ang ‘Magdagdag ng numero ng telepono’.', '', 'Maaaring bahagyang iba ang screen depende sa bersyon.'], ['I-type ang numerong iba-block.'], ['I-tap ang ‘I-save’.']]),
  'g05-new': L('Mag-save ng bagong contact na may pangalan at numero sa app na Mga Contact.', [
    CONTACTS, ['I-tap ang ‘+’ (Gumawa ng contact) sa kanang itaas.'], ['I-tap ang patlang ng Pangalan.'], ['I-type ang pangalan.'], ['I-tap ang patlang ng Telepono.'], ['I-type ang numero ng telepono.'], ['I-tap ang ‘I-save’.']]),
  'g05-search': L('Hanapin agad ang contact sa paghahanap ng pangalan.', [CONTACTS, ['I-tap ang magnifying glass (Maghanap) sa itaas.'], ['I-type ang pangalang hinahanap.'], ['I-tap ang nahanap na pangalan.']]),
  'g05-edit': L('Palitan ang naka-save na numero ng isang contact.', [
    CONTACTS, ['I-tap ang pangalan ng contact.'], ['I-tap ang ‘I-edit’ sa ibaba.'], ['I-tap ang patlang ng Telepono.'], ['Burahin ang lumang numero at i-type ang bago.'], ['I-tap ang ‘I-save’.']]),
  'g05-speed': L('Mag-set ng speed dial para makatawag sa pagpindot nang matagal sa isang numero sa keypad.', [
    PHONE, ['I-tap ang ‘Keypad’ sa ibaba.'], ['I-tap ang tatlong tuldok (Higit pang opsyon) sa kanang itaas.'], ['I-tap ang ‘Mga numero ng speed dial’.'], ['I-tap ang numerong ‘2’.', 'Pumili ng bakanteng numero.'],
    ['Piliin ang contact mula sa listahan.'], ['Para tumawag, pindutin nang matagal ang ‘2’ sa keypad.', 'Subukang pindutin nang matagal ang ‘2’ sa larawan ng pagsasanay.']]),
  'g05-share': L('Ipadala sa iba ang impormasyon ng isang contact sa pamamagitan ng mensahe.', [
    CONTACTS, ['I-tap ang pangalan ng contact na ibabahagi.'], ['I-tap ang ‘Ibahagi’ sa ibaba.'], ['I-tap ang ‘Mga Mensahe’.'], ['Piliin ang tatanggap.'], ['I-tap ang button na Ipadala.']]),
  'g06-send': L('Magpadala ng mensahe at sumagot sa mensahe sa app na Mga Mensahe.', [
    MESSAGES, ['I-tap ang usapang gusto mong sagutin.', 'Para sa bagong mensahe, i-tap ang button na Magsimula ng chat sa kanang ibaba.'], ['I-tap ang kahon ng mensahe sa ibaba.'], ['I-type ang iyong mensahe.'], ['I-tap ang button na Ipadala sa kanan.']]),
  'g06-type': L('Mag-type ng letra, numero at simbolo sa Samsung Keyboard at magpalit ng wika.', [
    ['I-type ang ‘Kumusta’ sa keyboard.'], ['Para sa numero o simbolo, i-tap ang ‘!#1’.'], ['Para bumalik sa letra, i-tap ang ‘ABC’ sa parehong lugar.'],
    ['Para mag-type sa ibang wika, i-swipe pakaliwa o pakanan ang space bar.', 'Lalabas lang ang mga wikang idinagdag mo sa setting ng keyboard.']]),
  'g06-fix': L('Iwasto ang maling type gamit ang delete key at paglipat ng cursor.', [
    ['I-tap nang isang beses ang delete key (⌫).', 'Mabubura ang letra bago ang cursor.'], ['I-type ang tamang letra.'], ['Para iwasto ang letra sa gitna, i-tap ang lugar na iyon.', 'Lilipat ang cursor (kumikislap na guhit) sa tinap mo.']]),
  'g06-copy': L('Kopyahin ang teksto at i-paste sa ibang lugar.', [['Pindutin nang matagal ang tekstong kokopyahin.'], ['I-tap ang ‘Kopyahin’.'], ['Pindutin nang matagal ang kahong pagpe-paste-an.'], ['I-tap ang ‘I-paste’.']]),
  'g06-photo': L('Magdagdag ng larawan mula sa Gallery sa isang mensahe.', [
    MESSAGES, ['I-tap ang usapang padadalhan ng larawan.'], ['I-tap ang ‘+’ sa kaliwa ng kahon ng mensahe.'], ['I-tap ang ‘Gallery’.'], ['I-tap ang larawang ipapadala.'], ['I-tap ang button na Ipadala.']]),
  'g06-translate': L('Isalin ang usapan sa Mga Mensahe gamit ang tool ng Galaxy AI sa keyboard.', [
    MESSAGES, ['I-tap ang usapang isasalin.'], ['I-tap ang kahon ng mensahe sa ibaba.'], ['I-tap ang icon ng Galaxy AI sa kaliwang itaas ng keyboard.'], ['I-tap ang ‘Pagsasalin ng chat’.'], ['Piliin ang mga wika sa kahon sa itaas.']]),
  'g07-noti': L('Buksan ang notification panel, basahin ang notification at i-clear ang lahat.', [
    ['Mag-swipe pababa mula sa kaliwang itaas ng screen.', 'Bubukas ang notification panel.'], ['I-tap ang notification na gusto mong basahin.', 'Bubukas ang app ng notification.'],
    ['Mag-swipe pababa mula sa kaliwang itaas ng screen.', 'Bubukas ang notification panel.'], ['I-tap ang ‘I-clear’.', 'Mabubura ang lahat ng notification.']]),
  'g07-appnoti': L('I-off ang notification ng mga app na hindi mo kailangan.', [
    ...settings('Mga Notification', 'Mga notification ng app'), ['I-tap ang switch ng app para i-off ang notification nito.', 'Panatilihing naka-on ang mahahalagang app ng mensahe.']]),
  'g07-quick': L('Buksan ang panel ng Mabilisang setting at kilalanin ang mga button.', [
    QUICK, ['Tingnan ang mga button sa panel.', 'Naka-on ang mga asul na button. Mag-tap ng button para i-on o i-off.'], ['Pindutin nang matagal ang button na ‘Wi-Fi’.', 'Bubukas ang detalyadong setting kapag pinindot nang matagal.'], ['Mag-swipe pataas para isara ang panel.']]),
  'g07-flash': L('I-on at i-off ang flashlight mula sa panel ng Mabilisang setting.', [QUICK, ['I-tap ang ‘Flashlight’.', 'Sisindi ang ilaw sa likod ng telepono.'], ['I-tap muli ang ‘Flashlight’ para i-off.']]),
  'g07-rotate': L('Piliin kung iikot ang screen kapag pinatagilid ang telepono.', [
    QUICK, ['I-tap ang ‘Awtomatikong pag-ikot’.', 'Kapag naka-on, umiikot ang screen kasama ng telepono. Kapag naka-off, nananatiling patayo.'], ['Patagilirin ang telepono para subukan.']]),
  'g07-dnd': L('Patahimikin ang tawag at alerto gamit ang Huwag istorbohin, at gamitin ang Airplane mode sa eroplano.', [
    QUICK, ['I-tap ang ‘Huwag istorbohin’.', 'Hindi tutunog ang mga tawag at notification. I-tap muli para i-off.'], ['I-tap muli ang ‘Huwag istorbohin’ para i-off.'],
    ['I-tap ang ‘Airplane mode’.', 'Mapuputol ang tawag at internet. Gamitin sa eroplano.'], ['I-tap muli para i-off pagbaba sa eroplano.']]),
  'g08-wifi': L('Ikonekta ang Galaxy sa Wi-Fi sa Mga Setting → Mga Koneksyon → Wi-Fi.', [
    ...settings('Mga Koneksyon', 'Wi-Fi'), ['I-tap ang switch ng ‘Wi-Fi’ para i-on.', 'Lalabas ang listahan ng mga Wi-Fi sa malapit.'], ['I-tap ang pangalan ng Wi-Fi.', 'Ipinapakita ng icon na kandado na kailangan ng password.'],
    ['I-type ang password ng Wi-Fi.', 'Kadalasang nakasulat ito sa likod ng router.'], ['I-tap ang ‘Kumonekta’.']]),
  'g08-data': L('I-on at i-off ang mobile data sa Mga Setting → Mga Koneksyon → Paggamit ng data.', [
    ...settings('Mga Koneksyon', 'Paggamit ng data'), ['I-tap ang switch ng ‘Mobile data’ para i-on.', 'Kapag naka-off, sa Wi-Fi lang gagana ang internet.']]),
  'g08-usage': L('Tingnan kung gaano karaming mobile data ang nagamit ngayong buwan at aling app ang pinakamarami.', [
    ...settings('Mga Koneksyon', 'Paggamit ng data'), ['I-tap ang ‘Paggamit ng mobile data’.'],
    ['Tingnan kung gaano karami ang nagamit ngayong buwan.', 'Nasa itaas ang mga app na pinakamaraming gumamit. Ipinapakita ng app ng iyong network ang natitira.']]),
  'g08-bt': L('Ipares ang Bluetooth earphones sa iyong Galaxy.', [
    ['I-on ang earphones sa pairing mode.'], ...settings('Mga Koneksyon', 'Bluetooth'), ['I-tap ang switch ng ‘Bluetooth’ para i-on.'], ['I-tap ang pangalan ng earphones sa listahan.'], ['I-tap ang ‘Ipares’.']]),
  'g08-hotspot': L('Ibahagi ang internet ng telepono sa ibang device gamit ang Mobile Hotspot.', [
    ...settings('Mga Koneksyon', 'Mobile Hotspot at Tethering', 'Mobile Hotspot'), ['I-tap ang switch ng ‘Mobile Hotspot’ para i-on.', '', 'Maaaring may dagdag na singil. Suriin muna ang iyong plan.'],
    ['Sa ibang device, piliin ang pangalan ng telepono mo sa listahan ng Wi-Fi.']]),
  'g08-location': L('Hanapin ang mga switch ng Lokasyon at NFC sa Mga Setting.', [
    ...settings('Lokasyon'), ['I-tap ang switch ng ‘Lokasyon’ para i-on.', 'Malalaman ng app ng mapa at panahon kung nasaan ka.'], BACK, item('Mga Koneksyon'),
    ['I-tap ang switch ng ‘NFC at mga contactless na pagbabayad’ para i-on.', 'I-on para makapagbayad o gumamit ng transit card gamit ang telepono.']]),
  'g09-search': L('Maghanap sa web gamit ang browser na Samsung Internet.', [
    [...open('Samsung Internet'), 'Depende sa bersyon, maaaring ‘Samsung Internet’ o ‘Internet’ ang pangalan ng app.'], ['I-tap ang address bar sa itaas.'], ['I-type ang gusto mong hanapin.'],
    ['I-tap ang Go key (↵) sa kanang ibaba ng keyboard.'], ['I-tap ang resultang gusto mong basahin.']]),
  'g09-bookmark': L('I-save bilang bookmark ang madalas bisitahing pahina at buksan ito mamaya.', [
    open('Samsung Internet'), ['I-tap ang bituin (☆) sa kanan ng address bar.', 'Mase-save sa mga bookmark ang nakabukas na pahina.'], ['Para buksan mamaya, i-tap ang bituin (Mga Bookmark) sa ibaba.'], ['I-tap ang na-save na pahina.']]),
  'g09-qr': L('Buksan ang QR code gamit ang camera ng Galaxy.', [
    CAMERA, ['Itutok ang camera sa QR code.', 'Sa Photo mode, panatilihin ang code sa gitna ng screen.'], ['I-tap ang dilaw na link na lumabas sa screen.', 'Mag-ingat sa QR code sa mga lugar na hindi mo kilala.']]),
  'g09-files': L('Hanapin ang mga na-download na file sa app na Aking Mga File.', [open('Aking Mga File'), ['I-tap ang ‘Mga Download’.'], ['I-tap ang file na bubuksan.']]),
  'g09-stores': L('Alamin ang pagkakaiba ng Google Play Store at Samsung Galaxy Store.', [
    open('Play Store'), ['Ito ang app store ng Google kung saan ka naghahanap at nagda-download ng app.', 'Kailangang naka-sign in sa Google account.'], HOME_BTN, open('Galaxy Store'),
    ['Ito ang app store ng Samsung na may maraming app at tema ng Samsung.']]),
  'g09-install': L('Mag-install ng app mula sa Play Store, mag-update sa Galaxy Store at mag-uninstall ng app.', [
    open('Play Store'), ['I-tap ang search bar sa itaas.'], ['I-type ang pangalan ng app.'], ['I-tap ang ‘I-install’ sa tabi ng pangalan ng app.'], ['I-tap ang app na ‘Galaxy Store’.', 'Ngayon, i-update natin ang mga app.'],
    ['I-tap ang ‘Menu’ sa ibaba.'], ['I-tap ang ‘Mga Update’.'], ['I-tap ang ‘I-update lahat’.'], ['Sa Home screen, pindutin nang matagal ang app na aalisin.'], ['I-tap ang ‘I-uninstall’.'],
    ['I-tap ang ‘OK’.', 'Maaari mong i-install muli ang inalis na app mula sa store.']]),
  'g09-google': L('Hanapin ang mga app ng Google at ng iyong network gamit ang paghahanap sa screen ng Mga App.', [
    ['Mag-swipe pataas sa Home screen para buksan ang screen ng Mga App.'], ['I-tap ang ‘Maghanap’ sa itaas.'], ['I-type ang pangalan ng app.', 'Subukan ang Google, YouTube o pangalan ng iyong network.'], ['I-tap ang nahanap na app.']]),
  'g10-open': L('Buksan ang app na Camera at hanapin ang shutter button.', [CAMERA, ['Tingnan kung bumukas ang screen ng camera.', 'Ang puting bilog sa gitna sa ibaba ang shutter button.']]),
  'g10-focus': L('I-tap ang screen para mag-focus bago kumuha ng larawan.', [
    CAMERA, ['I-tap ang lugar na gusto mong luminaw.', 'Kapag lumabas ang dilaw na bilog, naka-focus na.'], ['I-tap ang puting shutter button.', 'Kung malabo ang larawan, punasan ang lens ng malambot na tela.']]),
  'g10-switch': L('Lumipat sa likod at harap (selfie) na camera.', [
    CAMERA, ['I-tap ang mga paikot na arrow sa kanang ibaba.', 'Napapalitan din ang camera sa pag-swipe pataas o pababa sa screen.'], ['Tingnan kung ipinapakita ng harap na camera ang iyong mukha.']]),
  'g10-selfie': L('Kumuha ng selfie gamit ang harap na camera.', [CAMERA, ['I-tap ang mga paikot na arrow sa kanang ibaba.'], ['Hawakan ang telepono para nasa gitna ng screen ang mukha mo.'], SHUTTER]),
  'g10-zoom': L('Lapitan ang malalayong bagay habang kumukuha ng larawan.', [
    CAMERA, ['I-tap ang numerong ‘3’ sa ibaba.', 'Tatlong beses na lalaki ang malalayong bagay. Para bumalik, i-tap ang ‘1x’.', 'Iba-iba ang numero ayon sa modelo (mas malayo ang zoom ng mga Ultra).'], SHUTTER]),
  'g10-timer': L('Gamitin ang timer para makuha ang larawan pagkalipas ng ilang segundo.', [
    CAMERA, ['I-tap ang icon ng Mabilisang kontrol (⌄) sa itaas.'], ['I-tap ang icon ng timer.'], ['I-tap ang ‘5 segundo’.'], SHUTTER, ['Kukunan ang larawan pagkatapos ng countdown.']]),
  'g10-modes': L('Subukan ang Portrait para palabuin ang background at Night para sa madidilim na lugar.', [
    CAMERA, ['I-tap ang ‘Portrait’ sa ibaba.', 'Malinaw ang tao at malabo ang background.'], SHUTTER, ['I-tap ang ‘Higit pa’ sa ibaba.'],
    ['I-tap ang ‘Gabi’.', 'Makakakuha ng maliwanag na larawan sa dilim nang walang flash. Panatilihing hindi gumagalaw ang telepono.']]),
  'g10-video': L('Mag-record ng video gamit ang camera ng Galaxy.', [CAMERA, ['I-tap ang ‘Video’ sa ibaba.'], ['I-tap ang pulang button na record.'], ['Kapag tapos na, i-tap ang button na stop.']]),
  'g10-capture': L('Kumuha ng screenshot gamit ang dalawang button at i-record ang screen mula sa Mabilisang setting.', [
    ['Pindutin nang mabilis ang Side button at Volume down nang sabay.', 'May tunog na klik at mase-save ang screen bilang larawan. Makikita mo ito sa Gallery.'], QUICK,
    ['I-tap ang ‘Screen recorder’.', 'Kung hindi mo makita, mag-swipe pababa muli sa panel.'], ['I-tap ang ‘Simulan ang pag-record’.'], ['Para huminto, i-tap ang icon na stop sa itaas ng screen.']]),
  'g11-latest': L('Hanapin sa Gallery ang kakakuhang larawan.', [GALLERY, ['I-tap ang unang larawan (kaliwang itaas).', 'Laging nasa unahan ang pinakabagong larawan.'], ['Mag-swipe pakaliwa para sa susunod na larawan.']]),
  'g11-album': L('Gumawa ng bagong album sa Gallery para pagsamahin ang mga larawan.', [
    GALLERY, ['I-tap ang ‘Mga Album’ sa ibaba.'], ['I-tap ang ‘+’ (Idagdag) sa itaas.'], ['I-tap ang ‘Album’.'], ['I-type ang pangalan ng album.'], ['I-tap ang ‘Gumawa’.', 'Saka piliin ang mga larawang ilalagay.']]),
  'g11-edit': L('I-crop at paliwanagin ang larawan sa Gallery.', [
    GALLERY, ['I-tap ang larawang ie-edit.'], ['I-tap ang lapis (I-edit) sa ibaba.'], ['Para mag-crop, i-drag papasok ang isang sulok ng larawan.'], ['I-tap ang ‘Tono’ sa ibaba.'],
    ['I-drag pakanan ang bar ng liwanag.'], ['I-tap ang ‘I-save’.']]),
  'g11-text': L('Kopyahin ang teksto mula sa larawan sa Gallery at i-paste sa mensahe o tala.', [
    GALLERY, ['I-tap ang larawang may teksto.'], ['I-tap ang dilaw na icon na ‘T’.', 'Lalabas lang ito kapag may teksto ang larawan.'], ['Pindutin nang matagal ang tekstong kokopyahin.'],
    ['I-tap ang ‘Kopyahin’.', 'Maaari mo itong i-paste sa mensahe o tala.']]),
  'g11-multi': L('Pumili ng ilang larawan sa Gallery at ibahagi nang sabay-sabay.', [
    GALLERY, ['Pindutin nang matagal ang isa sa mga larawang ipapadala.'], ['I-tap ang iba pang larawang isasama.', 'Ipinapakita ng tsek sa bilog na napili ang larawan.'],
    ['I-tap ang ‘Ibahagi’ sa ibaba.'], ['I-tap ang app na gagamitin (halimbawa, Mga Mensahe).'], ['Piliin ang tatanggap at ipadala.']]),
  'g11-restore': L('Ibalik ang mga binurang larawan mula sa Recycle bin ng Gallery.', [
    GALLERY, ['I-tap ang ‘Menu’ sa ibaba.'], ['I-tap ang ‘Recycle bin’.'], ['I-tap ang larawang ibabalik.', 'Nananatili nang ilang panahon sa Recycle bin ang mga binurang larawan.'], ['I-tap ang ‘Ibalik’.']]),
  'g11-docs': L('Hanapin sa app na Aking Mga File ang mga dokumentong naka-save sa telepono.', [open('Aking Mga File'), ['I-tap ang ‘Mga Dokumento’.'], ['I-tap ang dokumentong bubuksan.']]),
  'g11-quickshare': L('Magpadala ng larawan sa kalapit na telepono gamit ang Quick Share.', [
    GALLERY, ['I-tap ang larawang ipapadala.'], ['I-tap ang ‘Ibahagi’ sa ibaba.'],
    ['I-tap ang ‘Quick Share’.', '', 'Dapat naka-on din ang Quick Share sa tatanggap na telepono (Mga Setting → Mga konektadong device → Quick Share).'], ['I-tap ang pangalan ng tatanggap na telepono.'], ['Sa tatanggap na telepono, i-tap ang ‘Tanggapin’.']]),
  'g12-addapp': L('Ilagay sa Home screen ang isang app mula sa screen ng Mga App.', [
    ['Mag-swipe pataas sa Home screen para buksan ang screen ng Mga App.'], ['Pindutin nang matagal ang app na ilalagay sa Home screen.'], ['I-tap ang ‘Idagdag sa Home’.']]),
  'g12-folder': L('Pagsamahin ang mga app sa isang folder at magdagdag ng widget ng panahon sa Home screen.', [
    ['Pindutin nang matagal ang app sa Home screen at i-drag sa ibabaw ng ibang app.', 'Magkakaroon ng folder na may dalawang app.'], ['I-tap ang pangalan ng folder at mag-type ng pangalan.'],
    ['Pindutin nang matagal ang bakanteng lugar sa Home screen.'], ['I-tap ang ‘Mga Widget’.'], ['I-tap ang ‘Panahon’.'], ['I-tap ang ‘Idagdag’.']]),
  'g12-wallpaper': L('Gawing wallpaper ng lock screen o Home screen ang sarili mong larawan.', [
    ...settings('Wallpaper at istilo'), ['I-tap ang ‘Palitan ang mga wallpaper’.'], ['Para sa sariling larawan, i-tap ang ‘Gallery’.'], ['I-tap ang larawang gagamitin.'],
    ['Piliin ang lock screen, Home screen o pareho.'], ['I-tap ang ‘Tapos’.']]),
  'g12-alarm': L('Mag-set ng alarm at magsimula ng timer sa app na Orasan.', [
    open('Orasan'), ['I-tap ang ‘Alarm’ sa ibaba.'], ['I-tap ang ‘+’ sa kanang ibaba.'], ['I-swipe pataas o pababa ang mga numero para itakda ang oras.'], ['I-tap ang ‘I-save’.'],
    ['Para sa timer, i-tap ang ‘Timer’ sa ibaba.'], ['Itakda ang tagal at i-tap ang ‘Simulan’.']]),
  'g12-calendar': L('Magdagdag ng appointment sa app na Kalendaryo.', [
    open('Kalendaryo'), ['I-tap ang ‘+’ (Magdagdag ng event) sa kanang ibaba.'], ['I-tap ang patlang ng Pamagat.'], ['I-type ang pangalan ng appointment.'], ['I-tap ang ‘Simula’ para piliin ang petsa at oras.'], ['I-tap ang ‘I-save’.']]),
  'g12-reminder': L('Magdagdag ng paalala sa event sa kalendaryo para hindi makalimutan ang gagawin.', [
    open('Kalendaryo'), ['I-tap ang ‘+’ (Magdagdag ng event) sa kanang ibaba.'], ['I-type ang gagawin bilang pamagat.'], ['I-tap ang ‘Paalala’.'],
    ['I-tap kung kailan ang paalala (halimbawa, 10 minuto bago).'], ['I-tap ang ‘I-save’.', 'Darating ang paalala sa oras na pinili mo.']]),
  'g12-note': L('Sumulat ng mabilis na tala sa Samsung Notes.', [
    open('Samsung Notes'), ['I-tap ang ‘+’ sa kanang ibaba.'], ['I-type ang gusto mong itala.'], ['Kapag tapos na, i-tap ang button na Bumalik.', 'Kusang mase-save ang tala.']]),
  'g12-recorder': L('I-record ang iyong boses gamit ang app na Voice Recorder.', [
    open('Voice Recorder'), ['I-tap ang button na record.'], ['Magsalita patungo sa telepono.'], ['I-tap ang ‘Ihinto’.', 'Madadagdag sa listahan ang recording.']]),
  'g12-tools': L('Tingnan ang panahon, gamitin ang calculator at makinig sa radyo.', [
    open('Panahon'), ['Tingnan ang panahon at temperatura ngayon.', 'Para sa panahon kung nasaan ka, dapat naka-on ang lokasyon.'], HOME_BTN, open('Calculator'),
    ['I-tap ang mga numero, + at = para magkuwenta.'], ['I-tap ang app na ‘Radyo’.', 'Kailangan ng earphones na may wire na nagsisilbing antenna.', 'Walang app na Radyo sa ilang modelo at network.']]),
  'x13-gmail': L('Magpadala ng larawan sa pamilya sa email gamit ang app na Gmail.', [
    open('Gmail'), ['I-tap ang ‘Mag-compose’ sa kanang ibaba.'], ['I-type ang email address ng tao sa patlang na ‘Para kay’.'], ['I-tap ang paper clip (I-attach) sa itaas.'],
    ['I-tap ang larawang ipapadala.', 'Maaari kang mag-tap ng higit sa isang larawan.'], ['Mag-type ng maikling paksa.'], ['I-tap ang button na Ipadala (papel na eroplano) sa itaas.']], { check: CHECK }),
  'x13-video': L('Magpadala ng video mula sa Gallery sa kapamilya gamit ang app na Mga Mensahe.', [
    GALLERY, ['I-tap ang video na ipapadala.'], ['I-tap ang ‘Ibahagi’ sa ibaba.'], ['I-tap ang ‘Mga Mensahe’.'], ['Piliin ang tatanggap.'],
    ['I-tap ang button na Ipadala.', '', 'Maaaring masyadong malaki ang mahahabang video para sa mensahe. Gamitin ang Quick Share o email.']], { check: CHECK }),
  'x13-meet': L('Mag-video call sa pamilya gamit ang app na Google Meet.', [
    open('Meet'), ['I-tap ang ‘Bago’.'], ['I-tap ang pangalan ng tatawagan.', 'Dapat may Google Meet o Google account din ang taong iyon.'], ['I-tap ang button na video call.'],
    ['Kapag tapos na, i-tap ang pulang button na ibaba.']], { check: CHECK }),
  'g14-open': L('Buksan ang Samsung Wallet at tingnan ang mga card at menu.', [
    ['I-tap ang app na ‘Samsung Wallet’.', 'Mabubuksan din ito sa pag-swipe pataas ng larawan ng card sa ibaba ng screen.'],
    ['Tingnan ang iyong mga naka-save na card at menu.', 'Kung una mong bukas, wala pang card. Ipinapakita ng susunod na aralin ang screen ng pagdagdag ng card.']]),
  'g14-add': L('Tingnan ang screen ng pagdagdag ng payment card sa Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['I-tap ang ‘+’ (Idagdag) sa itaas.'], ['Tingnan kung ano ang maaaring idagdag.', 'Ayon sa bansa: payment card, transit card at iba pa.'],
    ['I-tap ang ‘Payment card’.'], ['Basahin ang mga tagubilin sa pagdagdag ng card.']]),
  'g14-pay': L('Pumili ng card sa Samsung Wallet at magbayad sa paglapit ng telepono sa card reader.', [
    [...open('Samsung Wallet'), REAL], ['I-tap ang card na gagamitin sa pagbabayad.'], ['Gamitin ang fingerprint o ilagay ang PIN sa pagbabayad.'], ['Ilapit ang likod ng telepono sa card reader.']]),
  'g15-pin': L('Protektahan ang telepono gamit ang PIN na screen lock.', [
    [...open('Mga Setting'), REAL], ...sub('Lock screen at AOD', 'Screen lock at biometrics'), ['I-tap ang ‘Uri ng screen lock’.'], ['I-tap ang ‘PIN’.'],
    ['Mag-type ng hindi bababa sa 4 na numerong madaling tandaan.', 'Iwasan ang madaling hulaang numero gaya ng kaarawan o numero ng telepono.'], ['I-type muli ang parehong numero para kumpirmahin.']]),
  'g15-bio': L('I-save ang fingerprint at, kung gusto, ang mukha para mag-unlock.', [
    [...open('Mga Setting'), REAL], ...sub('Seguridad at privacy', 'Screen lock at biometrics'), ['I-tap ang ‘Mga Fingerprint’.'], ['Ilagay ang iyong PIN.', 'Kung wala pang PIN, gumawa muna.'],
    ['Paulit-ulit na ilagay at iangat ang daliri sa marka ng fingerprint sa ibaba ng screen.', 'Gamitin ang madalas mong gamiting daliri at bahagyang ilipat sa bawat pagkakataon.'],
    ['Para idagdag din ang mukha, i-tap ang ‘Pagkilala sa mukha’ sa parehong screen.']]),
  'g15-perm': L('Tingnan kung aling app ang gumagamit ng lokasyon, camera o mikropono at alisin ang hindi kailangang access.', [
    ...settings('Seguridad at privacy', 'Mga pahintulot na nagamit sa nakaraang 24 na oras'), ['Tingnan kung aling app ang gumamit ng lokasyon, camera o mikropono.'], ['I-tap ang ‘Lokasyon’.'],
    ['Kung may app na hindi mo kilala, palitan ito ng ‘Huwag payagan’.']]),
  'g15-folder': L('Hanapin ang Secure Folder at Samsung Pass sa Mga Setting.', [
    ...settings('Seguridad at privacy', 'Higit pang setting ng seguridad'), ['I-tap ang ‘Secure Folder’.'], ['Basahin ang impormasyon tungkol sa Secure Folder.'], BACK,
    ['I-tap ang ‘Mga password, passkey at autofill’.', 'Narito ang Samsung Pass. Tinutulungan ka nitong mag-sign in gamit ang fingerprint.']]),
  'g15-medical': L('Idagdag ang medikal na impormasyon at emergency contact na makatutulong sa emergency.', [
    ...settings('Kaligtasan at emergency', 'Medikal na impormasyon'), ['I-type ang pangalan, uri ng dugo, gamot at allergy mo.'], BACK, ['I-tap ang ‘Mga emergency contact’.'], ['Idagdag ang mga kapamilya bilang contact.']]),
  'g15-sos': L('Tingnan kung paano gumagana ang Emergency SOS sa telepono nang hindi tumatawag.', [
    [...open('Mga Setting'), 'Kapag talagang pinindot ang mga button, tatawagan ang emergency. Sa araling ito, tingnan lang ang screen.'], ...sub('Kaligtasan at emergency', 'Emergency SOS'),
    ['Basahin kung ilang beses pipindutin ang Side button para tumawag.', 'Kapag pinindot ang Side button nang nakatakdang dami, tatawagan ang nakatakdang numero.']]),
  'g15-find': L('I-on ang setting para mahanap ang telepono gamit ang Samsung Find kapag nawala.', [
    ...settings('Seguridad at privacy', 'Proteksyon sa nawawalang device', 'Hanapin ang Aking Mobile'),
    ['I-tap ang switch ng ‘Payagang mahanap ang teleponong ito’ para i-on.', 'Dapat naka-sign in ka sa Samsung account.'], ['Kapag nawala ang telepono, pumunta sa smartthingsfind.samsung.com mula sa ibang device.']]),
  'g16-setup': L('I-set up ang bagong Galaxy sa unang pagkakataon.', [
    ['Pindutin nang matagal ang Side button para buksan ang telepono.'], ['Suriin ang wika at i-tap ang ‘Simulan’.'], ['Pumili ng Wi-Fi at kumonekta.'], ['Para sa natitira, sundin ang screen at i-tap ang ‘Susunod’.']]),
  'g16-sim': L('Alamin kung ano ang SIM card at eSIM, at tingnan ang numero mo sa SIM manager.', [
    ['Ang SIM (Nano-SIM) ay maliit na card mula sa iyong network.'], ['Ang eSIM ay SIM na dina-download sa telepono nang walang card.', '', 'Nakadepende sa modelo at network ang suporta sa eSIM at dalawang numero.'],
    ...settings('Mga Koneksyon', 'SIM manager'), ['Tingnan kung lumalabas ang numero at network mo.']]),
  'g16-account': L('Suriin kung naka-sign in ang telepono sa Samsung account at Google account.', [
    ...settings('Mga account at backup', 'Pamahalaan ang mga account'),
    ['Tiyaking may isang Samsung account at isang Google account.', 'Kailangan ang mga ito sa backup, pag-install ng app at paghanap ng telepono. Itala ang username at password.']]),
  'g16-switch': L('Ilipat ang mga contact, larawan at iba pa sa bagong Galaxy gamit ang Smart Switch.', [
    ...settings('Mga account at backup', 'Magdala ng data mula sa lumang device'), ['Sa bagong telepono, piliin ang ‘Tumanggap ng data’.'], ['Ilapit ang dalawang telepono at sundin ang screen.']]),
  'g16-backup': L('Suriin kung kailan huling na-back up ang telepono sa Samsung Cloud.', [...settings('Mga account at backup', 'Samsung Cloud'), ['Tingnan ang petsa ng huling backup.']]),
  'g16-restore': L('Ibalik ang iyong data mula sa backup sa Samsung Cloud.', [
    ...settings('Mga account at backup', 'Samsung Cloud'), ['I-tap ang ‘Ibalik ang data’.'], ['Piliin ang device at mga item.'], ['I-tap ang ‘Ibalik’.']]),
  'g17-magnify': L('I-on ang shortcut ng pag-magnify at palakihin ang bahagi ng screen sa tatlong tap.', [
    ...settings('Accessibility', 'Mga pagpapahusay sa paningin', 'Pag-magnify'), ['I-tap ang ‘Shortcut ng pag-magnify’.'], ['I-tap ang switch ng ‘Shortcut ng pag-magnify’ para i-on.'],
    ['I-tap ang ‘I-tap nang tatlong beses ang screen’.'], ['I-tap nang mabilis nang tatlong beses ang lugar na palalakihin.']]),
  'g17-contrast': L('I-on ang high contrast na font para lumutang ang teksto sa background.', [
    ...settings('Accessibility', 'Mga pagpapahusay sa paningin'), ['I-tap ang switch ng ‘High contrast na font’ para i-on.', 'Magkakaroon ng madilim na gilid ang mga letra at lulutang sa background.']]),
  'g17-talkback': L('I-on ang TalkBack para basahin nang malakas ang screen, pagkatapos malaman kung paano ito i-off.', [
    [...open('Mga Setting'), 'Kapag naka-on ang TalkBack, nagbabago ang paraan ng pag-tap. Basahin muna kung paano ito i-off.'], ...sub('Accessibility', 'TalkBack'), ['Basahin muna kung paano ito i-off.'],
    ['I-tap ang switch ng ‘TalkBack’ para i-on.', 'Kapag naka-on, binabasa ng isang tap at binubuksan ng dobleng tap.']]),
  'g17-caption': L('I-on ang Live Caption para sa video at Mono audio para makarinig gamit ang isang tainga.', [
    ...settings('Accessibility', 'Mga pagpapahusay sa pandinig'), ['I-tap ang ‘Live Caption’.'], ['I-tap ang switch ng ‘Gamitin ang Live Caption’ para i-on.', 'Lalabas bilang teksto ang salita sa mga video.'], BACK,
    ['I-tap ang switch ng ‘Mono audio’ para i-on.', 'Maririnig mo ang tunog ng magkabilang panig kahit sa isang tainga.']]),
  'g17-hearing': L('I-on ang compatibility sa hearing aid para mas malinaw na marinig ang tawag.', [
    ...settings('Accessibility', 'Mga pagpapahusay sa pandinig', 'Suporta sa hearing aid'),
    ['I-tap ang switch ng ‘Compatibility sa hearing aid’ para i-on.', 'Mas malinaw ang tawag gamit ang hearing aid.'], ['Ikonekta ang Bluetooth hearing aid sa menu ng Bluetooth.']]),
  'g17-touch': L('Padaliin ang paghawak: sumagot sa isang tap, baguhin ang tagal ng pagpindot at mag-set ng shortcut ng accessibility.', [
    ...settings('Accessibility', 'Interaksyon at kahusayan'), ['I-tap ang switch ng ‘Single tap mode’ para i-on.', 'Sasagutin mo ang tawag sa isang tap sa halip na i-swipe.'],
    ['I-tap ang ‘Antala ng pagpindot nang matagal’.', 'Kung hirap kang pumindot nang matagal, pahabain ang tagal.'], ['Piliin ang gustong tagal.'], ['I-tap nang dalawang beses ang button na Bumalik.'],
    ['I-tap ang ‘Shortcut ng accessibility’.', 'Mabubuksan mo ang madalas gamiting feature ng accessibility sa isang button.']]),
  'g18-usage': L('Hanapin ang mga app na pinakamalakas gumamit ng baterya.', [
    ...settings('Baterya', 'Araw-araw na paggamit'), ['Tingnan ang mga app na pinakamalakas gumamit ng baterya.', 'Kung malakas gumamit ang app na bihira mong gamitin, isara o i-uninstall ito.']]),
  'g18-saver': L('I-on ang Pagtitipid ng power para mas tumagal ang baterya.', [
    ...settings('Baterya'), ['I-tap ang switch ng ‘Pagtitipid ng power’ para i-on.', 'Mas tatagal ang baterya. Maaaring maantala ang ilang notification.', 'Mabubuksan din ito sa button na ‘Pagtitipid ng power’ sa panel ng Mabilisang setting.']]),
  'g18-storage': L('Suriin kung gaano karaming storage ang natitira sa telepono.', [
    ...settings('Pangangalaga ng device', 'Storage'), ['Tingnan ang natitirang espasyo.', 'Nakapagbibigay ng espasyo ang pag-empty ng Recycle bin at pagbura ng dobleng file.']]),
  'g18-clean': L('Hanapin at burahin sa Aking Mga File ang malalaking file na hindi na kailangan.', [
    open('Aking Mga File'), ['I-tap ang ‘Pamahalaan ang storage’.'], ['I-tap ang ‘Malalaking file’.'], ['Piliin lang ang hindi kailangang file at i-tap ang ‘Burahin’.']]),
  'g18-care': L('Suriin at ayusin ang telepono gamit ang Pangangalaga ng device.', [...settings('Pangangalaga ng device'), ['I-tap ang ‘I-optimize ngayon’.', 'Isinasara nito ang hindi ginagamit na app at sinusuri ang telepono.']]),
  'g18-update': L('Suriin at i-install ang mga software update ng iyong Galaxy.', [
    ...settings('Software update'), ['I-tap ang ‘I-download at i-install’.', 'Kung may bagong bersyon, ida-download at ii-install ito. Gawin ito habang naka-Wi-Fi at nagcha-charge.']]),
  'g18-version': L('Hanapin ang pangalan ng modelo at bersyon ng One UI sa Mga Setting → Tungkol sa telepono.', [
    ...settings('Tungkol sa telepono'), ['Tingnan ang pangalan ng modelo sa itaas.'], ['I-tap ang ‘Impormasyon ng software’.'], ['Tingnan ang ‘Bersyon ng One UI’.', 'Sabihin ito sa service center kasama ang pangalan ng modelo.']]),
  'g19-bixby': L('Gawing pambukas ng Bixby ang Side button at humingi ng tulong kay Bixby gamit ang boses.', [
    ...settings('Mga advanced na feature', 'Side button'), ['I-tap ang ‘Gisingin si Bixby’.', 'Ngayon, bubukas si Bixby kapag pinindot nang matagal ang Side button.'],
    ['Pindutin nang matagal ang Side button at sabihin ang gusto mo.', 'Halimbawa: “Mag-set ng alarm bukas nang 7 ng umaga.”'], ['Bitawan ang button kapag tapos ka nang magsalita.']]),
  'g19-circle': L('Hanapin ang anumang nasa screen sa pagbilog dito gamit ang Circle to Search.', [
    ['Pindutin nang matagal ang button na Home sa ibaba ng screen.'], ['Bilugan gamit ang daliri ang bagay na hinahanap.'],
    ['Basahin ang mga resulta sa ibaba.', '', 'May Bixby Vision ang Galaxy S25, S24 at S23 series. Ginagamit ng S26 ang paraang ito (Circle to Search).']]),
  'g19-interpret': L('I-on ang Live translate sa app na Telepono at gamitin ito habang tumatawag.', [
    open('Telepono'), ['I-tap ang tatlong tuldok sa kanang itaas.'], ['I-tap ang ‘Mga Setting’.'], ['I-tap ang ‘Live translate’.'], ['I-tap ang switch ng ‘Live translate’ para i-on.'],
    ['Habang tumatawag, i-tap ang ‘Call assist’.'], ['I-tap ang ‘Live translate’.']]),
  'g19-write': L('Iwasto ang baybay at gramatika ng mensahe gamit ang tool ng Galaxy AI sa keyboard.', [
    open('Mga Mensahe'), ['I-tap ang isang usapan.'], ['I-type ang iyong mensahe.'], ['I-tap ang icon ng Galaxy AI sa kaliwang itaas ng keyboard.'], ['I-tap ang ‘Baybay at gramatika’.', 'Itatama ang mga mali. Pinaiikli ng ‘Ibuod’ ang mahahabang teksto.']]),
  'g19-transcribe': L('Gawing teksto ang recording ng boses gamit ang Galaxy AI sa Voice Recorder.', [
    open('Voice Recorder'), ['I-tap ang recording na gagawing teksto.'], AI_ICON, ['I-tap ang ‘I-transcribe’.'], ['Basahin ang nagawang teksto.']]),
  'g19-photo': L('Burahin ang tao o bagay sa larawan gamit ang Galaxy AI sa Gallery.', [
    GALLERY, ['I-tap ang larawang ie-edit.'], AI_ICON, ['I-tap ang ‘Object eraser’.'], ['Gamit ang daliri, guhitan ang paligid ng tao o bagay na buburahin.'], ['I-tap ang ‘Burahin’.'],
    ['Kung gusto mo ang resulta, i-tap ang ‘I-save’.']]),
  'g19-support': L('Tingnan sa Mga Setting kung aling feature ng Galaxy AI ang suportado ng telepono mo.', [
    ...settings('Galaxy AI'), ['Tingnan ang listahan ng mga AI feature na magagamit ng telepono mo.', 'Hindi suportado sa modelong ito ang mga feature na wala sa listahan.', 'Nakadepende sa modelo at network ang ilang feature o kailangan ng internet.']]),
  'g20-smartview': L('Ipakita ang screen ng telepono sa TV gamit ang Smart View.', [
    QUICK, ['I-tap ang ‘Smart View’.'], ['I-tap ang pangalan ng TV.', 'Pinakamahusay itong gumagana kapag nasa iisang Wi-Fi ang TV at telepono.'], ['I-tap ang ‘Simulan ngayon’.']]),
  'g20-pc': L('Ikonekta ang Galaxy sa Windows na computer gamit ang Link to Windows.', [
    ...settings('Mga konektadong device', 'Link to Windows'), ['Basahin ang mga tagubilin sa screen.'], ['Buksan sa computer ang address na ipinakita para makumpleto ang koneksyon.']]),
  'g20-dex': L('Alamin kung ano ang Samsung DeX at kung nasaan ang setting nito.', [...settings('Mga konektadong device', 'Samsung DeX'), ['Basahin ang impormasyon.']]),
  'g20-watch': L('Ikonekta ang Galaxy na relo o earbuds gamit ang app na Galaxy Wearable.', [
    ['I-tap ang app na ‘Galaxy Wearable’.', 'Kung wala sa Home screen, hanapin sa screen ng Mga App.'], ['I-tap ang ‘Simulan’.'], ['Sundin ang screen para makumpleto ang koneksyon.']]),
  'g20-smartthings': L('Ikonekta ang mga appliance sa telepono gamit ang SmartThings.', [
    open('SmartThings'), ['I-tap ang ‘+’ (Idagdag) sa itaas.'], ['Piliin ang appliance na ikokonekta.'], ['Sundin ang screen para makumpleto ang koneksyon.']]),
  'g20-musicshare': L('I-on ang Music Share para makapagpatugtog ang mga kaibigan sa iyong Bluetooth speaker.', [
    ...settings('Mga konektadong device', 'Music Share'), ['I-tap ang switch ng ‘Music Share’ para i-on.', 'Maipapatugtog ng mga kaibigan ang musika ng kanilang telepono sa iyong Bluetooth speaker.']]),
  'g21-split': L('Gumamit ng dalawang app nang sabay gamit ang split screen.', [
    ['I-tap ang button na Mga Kamakailan sa kaliwang ibaba.'], ['I-tap ang maliit na icon sa itaas ng isang app.'], ['I-tap ang ‘Buksan sa split screen view’.'], ['Piliin ang ikalawang app para sa ibabang kalahati.']]),
  'g21-modes': L('I-on ang Sleep mode sa Mga Mode at Routine.', [
    ...settings('Mga Mode at Routine', 'Mga Mode'), ['I-tap ang ‘Matulog’.'], ['I-tap ang ‘I-on’.', 'Habang natutulog, tatahimik ang notification at didilim ang screen.']]),
  'g21-aod': L('Ipakita ang orasan kahit nakapatay ang screen gamit ang Always On Display.', [
    ...settings('Lock screen at AOD'), ['I-tap ang switch ng ‘Always On Display’ para i-on.', 'Makikita mo ang orasan kahit nakapatay ang screen. Bahagyang mas maraming baterya ang nagagamit.'],
    ['Para baguhin ang istilo ng orasan, pindutin nang matagal ang lock screen.']]),
  'g21-wellbeing': L('Tingnan kung gaano katagal mong ginamit ang telepono ngayon at mag-set ng app timer.', [
    ...settings('Digital Wellbeing at parental control'), ['Tingnan ang oras ng paggamit mo ngayon.'], ['I-tap ang ‘Mga app timer’.', 'Makapaglalagay ka ng limitasyon sa oras bawat araw para sa bawat app.']]),
  'g21-apps': L('Kilalanin ang Samsung Health, Samsung Kids at Game Booster.', [
    ['I-tap ang app na ‘Samsung Health’.', 'Kung wala sa Home screen, hanapin sa screen ng Mga App.'], ['Tingnan ang bilang ng hakbang at tala ng ehersisyo.'],
    ...settings('Mga App', 'Samsung Kids'), ['I-tap ang ‘I-on’.', 'Makapipili ka ng mga app at limitasyon sa oras para sa mga apo.'], ['Habang naglalaro, i-tap ang icon ng Game Booster sa ibaba ng screen.']]),
  'g21-samsung': L('Hanapin ang mga app na Samsung.com at Samsung Global Goals, at ang Samsung News.', [
    open('Samsung.com'), ['Dito ka nagbabasa ng balita sa produkto ng Samsung at kumukuha ng suporta.'], HOME_BTN,
    ['I-tap ang app na ‘Samsung Global Goals’.', 'Hanapin ang ‘Samsung Global Goals’ sa screen ng Mga App.'], ['Hanapin ang Samsung News gamit ang paghahanap sa screen ng Mga App.']]),
  'g21-spen': L('Ilabas ang S Pen, buksan ang menu nito at subukan ang PENUP sa mga suportadong Ultra.', [
    ['Bahagyang diinan ang dulo ng S Pen sa ilalim ng telepono.'], ['I-tap ang gustong feature sa menu sa screen.'], open('PENUP'), ['Kapag tapos na, itulak pabalik ang S Pen hanggang mag-klik.']]),
  'g22-ring': L('Ano ang susuriin kapag hindi tumutunog ang telepono.', [
    QUICK, ['I-tap ang button na ‘Tunog’.', 'Kung naka-Mute o Vibrate, i-tap para lumipat sa Tunog.'], ['Kung asul (naka-on) ang ‘Huwag istorbohin’, i-tap para i-off.'], ['Pindutin ang Volume up sa gilid para lakasan.']]),
  'g22-network': L('Ano ang susuriin kapag hindi gumagana ang tawag o internet.', [
    QUICK, ['Kung naka-on ang ‘Airplane mode’, i-tap para i-off.'], ['Kung naka-off ang ‘Mobile data’, i-tap para i-on.'], ['Kung mahina ang signal, subukang lumipat ng lugar.'], ['Kung hindi pa rin gumagana, i-restart ang telepono.']]),
  'g22-charge': L('Ano ang susuriin kapag hindi nagcha-charge ang iyong Galaxy.', [
    ['Tiyaking mahigpit na nakakabit ang cable at charger.'], ['Kung basa ang port, hintaying matuyo nang lubos bago mag-charge.'], ...settings('Baterya', 'Mga setting ng pag-charge'),
    ['Kung hindi pa rin nagcha-charge, dalhin ang telepono, charger at cable sa service center.']]),
  'g22-hot': L('Ano ang gagawin kapag umiinit ang telepono.', [
    ['Kung nagcha-charge, tanggalin ang charger.'], ['I-tap ang button na Mga Kamakailan.'], ['I-tap ang ‘Isara lahat’ para isara ang mga app.'], ['Huwag munang gamitin at hayaang lumamig sa malamig na lugar.']]),
  'g22-freeze': L('Puwersahang i-restart ang naka-freeze na Galaxy gamit ang dalawang button.', [
    ['Pindutin nang matagal ang Side button at Volume down nang sabay nang higit 7 segundo.', 'Ituloy ang pagpindot hanggang mamatay ang screen.'], ['Kapag namatay ang screen, bitawan at maghintay.']]),
  'g22-water': L('Ano ang susuriin at gagawin kapag nabasa ang telepono.', [
    ['Patuyuin nang lubos gamit ang malambot na tela.'], ['Huwag isaksak ang charger hanggang ganap na tuyo.'], ['Kung tubig-dagat, pool o may sabon, banlawan ng malinis na tubig at patuyuin.'], ['Kung may kakaiba, dalhin agad sa service center.']]),
  'g22-members': L('Hanapin ang problema gamit ang Phone diagnostics sa Samsung Members.', [
    ['I-tap ang app na ‘Samsung Members’.', 'Kung wala sa Home screen, hanapin sa screen ng Mga App.'], ['I-tap ang ‘Suporta’.'], ['I-tap ang ‘Phone diagnostics’.'], ['I-tap ang ‘Subukan lahat’ o ang item na gusto mong suriin.']]),
  'g22-service': L('Itala ang modelo at problema bago makipag-ugnayan sa service ng Samsung.', [
    ...settings('Tungkol sa telepono'), ['Itala ang model number (halimbawa, SM-S942N).'], ['Itala kung kailan at paano nangyari ang problema.'],
    ['Makipag-ugnayan sa suporta ng Samsung sa inyong bansa o magpa-appointment sa service.', 'Hanapin ang pahina ng suporta ng inyong bansa sa samsung.com/support.']]),
};
