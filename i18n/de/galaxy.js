// Galaxy-Lektionen auf Deutsch (Entwurf, ungeprüft → noindex, nicht in der Sitemap).
// steps[i] entspricht der koreanischen Karte i derselben Lektion.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Grundlagen', life: 'Alltag', apply: 'Weitere Funktionen', adv: 'Fortgeschritten und Problemlösung' };

export const CATEGORIES = {
  1: ['Handy ein- und ausschalten', 'Tasten, Laden, Ein/Aus und Sperrbildschirm'],
  2: ['Tippen, halten und wischen', 'Die Grundgesten und die Navigationstasten'],
  3: ['Schrift und Ton angenehmer', 'Größere Schrift, Helligkeit, Bildschirmzeit und Lautstärke'],
  4: ['Anrufen und Anrufe annehmen', 'Anrufen, annehmen, Lautsprecher und sperren'],
  5: ['Kontakte speichern und finden', 'Neue Kontakte, Suche, Bearbeiten und Favoriten'],
  6: ['Nachrichten senden', 'Schreiben, korrigieren, kopieren und Fotos anhängen'],
  7: ['Benachrichtigungen und Schnelleinstellungen', 'Benachrichtigungsfeld, Taschenlampe, Drehen und Nicht stören'],
  8: ['WLAN, Daten und Bluetooth', 'Mit dem Internet und anderen Geräten verbinden'],
  9: ['Im Internet suchen und Apps installieren', 'Browser, QR-Codes, Downloads und App-Stores'],
  10: ['Fotos und Videos aufnehmen', 'Kamera, Selfies, Zoom, Timer und Video'],
  11: ['Fotos und Dateien ordnen', 'Galerie, Bearbeiten, Wiederherstellen und Eigene Dateien'],
  12: ['Startbildschirm und Werkzeuge', 'Apps, Ordner, Hintergrund, Wecker, Kalender und Notizen'],
  13: ['Fotos mit der Familie teilen', 'E-Mail, Videos und Videoanrufe'],
  14: ['Mit Samsung Wallet bezahlen', 'Wallet öffnen und eine Karte wählen'],
  15: ['Das Handy sicher nutzen', 'Sperre, Biometrie, Berechtigungen und Notfall-SOS'],
  16: ['Auf ein neues Handy umziehen', 'Einrichtung, Konten, Smart Switch und Sicherung'],
  17: ['Sehen, Hören und Bedienen', 'Vergrößerung, Kontrast, TalkBack und Untertitel'],
  18: ['Akku und Speicher', 'Energiesparen, Speicher, Gerätewartung und Updates'],
  19: ['Galaxy AI und Bixby', 'Sprachbefehle und Galaxy-AI-Funktionen'],
  20: ['Mit Fernseher, PC und Uhr verbinden', 'Smart View, PC, DeX, Wearables und SmartThings'],
  21: ['Weitere nützliche Funktionen', 'Geteilter Bildschirm, Modi und Routinen, Always On Display'],
  22: ['Wenn etwas nicht funktioniert', 'Kein Ton, kein Netz, Laden, Hitze und Einfrieren'],
};

export const TITLES = {
  'g01-buttons': ['seitentasten', 'Die Seitentasten finden'], 'g01-charge': ['handy-laden', 'Das Handy laden'],
  'g01-power': ['aus-und-einschalten', 'Das Handy aus- und wieder einschalten'], 'g01-restart': ['neu-starten', 'Das Handy neu starten'],
  'g01-lock': ['sperren-und-entsperren', 'Den Bildschirm sperren und entsperren'], 'g02-tap': ['tippen', 'Einmal tippen'],
  'g02-hold': ['beruehren-und-halten', 'Berühren und halten'], 'g02-swipe': ['wischen', 'Wischen, um sich zu bewegen'],
  'g02-pinch': ['zoomen-mit-zwei-fingern', 'Mit zwei Fingern vergrößern'], 'g02-back': ['zurueck-taste', 'Zurückgehen'],
  'g02-home': ['home-taste', 'Zum Startbildschirm gehen'], 'g02-recent': ['letzte-apps', 'Zuletzt verwendete Apps öffnen'],
  'g03-font': ['schrift-vergroessern', 'Die Schrift vergrößern'], 'g03-zoom': ['bildschirmzoom', 'Bildschirm und Symbole vergrößern'],
  'g03-easy': ['einfacher-modus', 'Den Einfachen Modus einschalten'], 'g03-bright': ['helligkeit', 'Die Helligkeit einstellen'],
  'g03-timeout': ['bildschirm-timeout', 'Ändern, wann der Bildschirm ausgeht'], 'g03-sound': ['klingelton-und-vibration', 'Klingeltonlautstärke und Vibration einstellen'],
  'g04-call': ['anrufen', 'Über das Tastenfeld anrufen'], 'g04-answer': ['anruf-annehmen-ablehnen', 'Einen Anruf annehmen oder ablehnen'],
  'g04-speaker': ['lautsprecher', 'Während eines Anrufs den Lautsprecher einschalten'], 'g04-missed': ['verpassten-anruf-zurueckrufen', 'Einen verpassten Anruf zurückrufen'],
  'g04-log': ['anrufliste', 'Die Anrufliste ansehen'], 'g04-block': ['nummern-sperren', 'Spam-Nummern sperren'],
  'g05-new': ['kontakt-speichern', 'Einen neuen Kontakt speichern'], 'g05-search': ['kontakt-suchen', 'Einen Kontakt nach Namen suchen'],
  'g05-edit': ['nummer-aendern', 'Eine Telefonnummer ändern'], 'g05-speed': ['kurzwahl', 'Häufig angerufene Personen hinzufügen'],
  'g05-share': ['kontakt-teilen', 'Einen Kontakt teilen'], 'g06-send': ['nachrichten-senden', 'Nachrichten senden und beantworten'],
  'g06-type': ['buchstaben-zahlen-zeichen', 'Buchstaben, Zahlen und Zeichen eingeben'], 'g06-fix': ['tippfehler-korrigieren', 'Tippfehler korrigieren'],
  'g06-copy': ['kopieren-und-einfuegen', 'Kopieren und einfügen'], 'g06-photo': ['foto-anhaengen', 'Ein Foto an eine Nachricht anhängen'],
  'g06-translate': ['text-uebersetzen', 'Einen Text übersetzen'], 'g07-noti': ['benachrichtigungen', 'Benachrichtigungen ansehen und löschen'],
  'g07-appnoti': ['app-benachrichtigungen', 'App-Benachrichtigungen einstellen'], 'g07-quick': ['schnelleinstellungen', 'Das Schnelleinstellungsfeld öffnen'],
  'g07-flash': ['taschenlampe', 'Die Taschenlampe einschalten'], 'g07-rotate': ['bildschirm-drehen', 'Die Bildschirmdrehung steuern'],
  'g07-dnd': ['nicht-stoeren-flugmodus', 'Nicht stören und Flugmodus nutzen'], 'g08-wifi': ['wlan-verbinden', 'Mit einem WLAN verbinden'],
  'g08-data': ['mobile-daten', 'Mobile Daten ein- und ausschalten'], 'g08-usage': ['datennutzung', 'Die Datennutzung ansehen'],
  'g08-bt': ['bluetooth-kopfhoerer', 'Bluetooth-Kopfhörer verbinden'], 'g08-hotspot': ['mobiler-hotspot', 'Den mobilen Hotspot nutzen'],
  'g08-location': ['standort-und-nfc', 'Standort- und NFC-Einstellungen finden'], 'g09-search': ['im-samsung-internet-suchen', 'Im Samsung Internet suchen'],
  'g09-bookmark': ['seiten-speichern', 'Oft besuchte Seiten speichern'], 'g09-qr': ['qr-code-oeffnen', 'Einen QR-Code öffnen'],
  'g09-files': ['heruntergeladene-dateien', 'Heruntergeladene Dateien finden'], 'g09-stores': ['play-store-galaxy-store', 'Play Store und Galaxy Store nutzen'],
  'g09-install': ['apps-installieren-aktualisieren-loeschen', 'Apps installieren, aktualisieren und löschen'], 'g09-google': ['google-apps-finden', 'Google- und Anbieter-Apps finden'],
  'g10-open': ['kamera-oeffnen', 'Die Kamera öffnen'], 'g10-focus': ['scharfstellen', 'Die Kamera scharfstellen'],
  'g10-switch': ['kamera-wechseln', 'Zwischen Front- und Rückkamera wechseln'], 'g10-selfie': ['selfie', 'Ein Selfie machen'],
  'g10-zoom': ['zoomen', 'Beim Fotografieren heranzoomen'], 'g10-timer': ['kamera-timer', 'Den Kamera-Timer nutzen'],
  'g10-modes': ['portraet-und-nacht', 'Porträt- und Nachtmodus ausprobieren'], 'g10-video': ['video-aufnehmen', 'Ein Video aufnehmen'],
  'g10-capture': ['screenshot-bildschirmaufnahme', 'Screenshot oder Bildschirmaufnahme machen'], 'g11-latest': ['neuestes-foto', 'Das gerade aufgenommene Foto finden'],
  'g11-album': ['album-erstellen', 'Ein Album erstellen'], 'g11-edit': ['foto-zuschneiden-aufhellen', 'Ein Foto zuschneiden und aufhellen'],
  'g11-text': ['text-aus-foto', 'Text aus einem Foto kopieren'], 'g11-multi': ['mehrere-fotos-teilen', 'Mehrere Fotos teilen'],
  'g11-restore': ['geloeschte-fotos', 'Gelöschte Fotos wiederherstellen'], 'g11-docs': ['dokumente-eigene-dateien', 'Dokumente in Eigene Dateien finden'],
  'g11-quickshare': ['quick-share', 'Dateien mit Quick Share senden'], 'g12-addapp': ['app-auf-startbildschirm', 'Eine App auf den Startbildschirm legen'],
  'g12-folder': ['ordner-und-widgets', 'Ordner und Widgets erstellen'], 'g12-wallpaper': ['hintergrund-design-sperrbildschirm', 'Hintergrund, Design und Sperrbildschirm ändern'],
  'g12-alarm': ['wecker-und-timer', 'Einen Wecker und einen Timer stellen'], 'g12-calendar': ['termin-im-kalender', 'Einen Termin in den Kalender eintragen'],
  'g12-reminder': ['erinnerungen', 'Erinnerungen an Aufgaben bekommen'], 'g12-note': ['samsung-notes', 'Samsung Notes verwenden'],
  'g12-recorder': ['sprachaufnahme', 'Die eigene Stimme aufnehmen'], 'g12-tools': ['wetter-rechner-radio', 'Wetter, Rechner und Radio nutzen'],
  'x13-gmail': ['fotos-per-gmail', 'Fotos per E-Mail mit Gmail senden'], 'x13-video': ['video-an-familie', 'Ein Video an die Familie senden'],
  'x13-meet': ['videoanruf-google-meet', 'Einen Videoanruf mit Google Meet machen'], 'g14-open': ['samsung-wallet-oeffnen', 'Samsung Wallet öffnen'],
  'g14-add': ['karte-hinzufuegen', 'Den Bildschirm zum Hinzufügen einer Karte ansehen'], 'g14-pay': ['karte-zum-bezahlen', 'Eine Karte zum Bezahlen wählen'],
  'g15-pin': ['pin-erstellen', 'Eine PIN erstellen'], 'g15-bio': ['fingerabdruck-und-gesicht', 'Fingerabdruck und Gesicht registrieren'],
  'g15-perm': ['berechtigungen-standort', 'App-Berechtigungen und Standort prüfen'], 'g15-folder': ['sicherer-ordner-samsung-pass', 'Sicherer Ordner und Samsung Pass kennenlernen'],
  'g15-medical': ['medizinische-infos-notfallkontakte', 'Medizinische Infos und Notfallkontakte hinzufügen'], 'g15-sos': ['notfall-sos', 'Die Notfall-SOS-Einstellungen prüfen'],
  'g15-find': ['samsung-find', 'Das Handy mit Samsung Find finden'], 'g16-setup': ['ersteinrichtung', 'Das Handy zum ersten Mal einrichten'],
  'g16-sim': ['sim-und-esim', 'SIM und eSIM kennenlernen'], 'g16-account': ['samsung-und-google-konto', 'Samsung- und Google-Konto prüfen'],
  'g16-switch': ['smart-switch', 'Kontakte und Fotos mit Smart Switch übertragen'], 'g16-backup': ['sicherung-pruefen', 'Den Sicherungsstatus prüfen'],
  'g16-restore': ['sicherung-wiederherstellen', 'Aus einer Sicherung wiederherstellen'], 'g17-magnify': ['vergroesserung', 'Einen Teil des Bildschirms vergrößern'],
  'g17-contrast': ['kontrastreiche-schrift', 'Den Textkontrast erhöhen'], 'g17-talkback': ['talkback', 'Den Bildschirm mit TalkBack vorlesen lassen'],
  'g17-caption': ['ton-und-untertitel', 'Ton und Untertitel einstellen'], 'g17-hearing': ['hoergeraete', 'Hörgeräte-Unterstützung prüfen'],
  'g17-touch': ['beruehrung-und-kurzbefehl', 'Berührung und Bedienungshilfen-Kurzbefehl einstellen'], 'g18-usage': ['akkuverbrauch-apps', 'Apps mit hohem Akkuverbrauch finden'],
  'g18-saver': ['energiesparmodus', 'Den Energiesparmodus einschalten'], 'g18-storage': ['speicher-pruefen', 'Den Speicher prüfen'],
  'g18-clean': ['grosse-dateien', 'Große Dateien aufräumen'], 'g18-care': ['geraetewartung', 'Das Handy mit der Gerätewartung prüfen'],
  'g18-update': ['software-update', 'Die Software aktualisieren'], 'g18-version': ['modell-und-one-ui-version', 'Modell und One-UI-Version prüfen'],
  'g19-bixby': ['bixby-fragen', 'Bixby per Sprache fragen'], 'g19-circle': ['circle-to-search', 'Nach Dingen auf dem Bildschirm suchen'],
  'g19-interpret': ['anruf-uebersetzung', 'Anrufübersetzung und Dolmetscher kennenlernen'], 'g19-write': ['text-verbessern-zusammenfassen', 'Text verbessern und zusammenfassen'],
  'g19-transcribe': ['aufnahmen-transkribieren', 'Aufnahmen in Text umwandeln'], 'g19-photo': ['fotos-mit-ki-bearbeiten', 'Fotos mit KI bearbeiten'],
  'g19-support': ['funktionen-je-modell', 'Funktionen je Modell prüfen'], 'g20-smartview': ['smart-view', 'Den Bildschirm mit Smart View auf dem Fernseher zeigen'],
  'g20-pc': ['mit-pc-verbinden', 'Mit einem PC verbinden'], 'g20-dex': ['samsung-dex', 'Samsung DeX kennenlernen'],
  'g20-watch': ['uhr-und-kopfhoerer', 'Uhr und Kopfhörer verbinden'], 'g20-smartthings': ['smartthings', 'Haushaltsgeräte mit SmartThings verbinden'],
  'g20-musicshare': ['music-share', 'Music Share kennenlernen'], 'g21-split': ['geteilter-bildschirm', 'Zwei Apps im geteilten Bildschirm nutzen'],
  'g21-modes': ['modi-und-routinen', 'Modi und Routinen einrichten'], 'g21-aod': ['always-on-display', 'Eine Uhr auf dem Sperrbildschirm anzeigen'],
  'g21-wellbeing': ['digital-wellbeing', 'Die Nutzungszeit mit Digital Wellbeing sehen'], 'g21-apps': ['samsung-health-kids-game-booster', 'Samsung Health, Samsung Kids und Game Booster kennenlernen'],
  'g21-samsung': ['samsung-news-samsung-com', 'Samsung News, Samsung.com und Global Goals finden'], 'g21-spen': ['s-pen', 'Den S Pen auf unterstützten Modellen nutzen'],
  'g22-ring': ['kein-klingelton', 'Wenn der Klingelton nicht ertönt'], 'g22-network': ['kein-anruf-kein-internet', 'Wenn Anrufe oder Internet nicht funktionieren'],
  'g22-charge': ['laedt-nicht', 'Wenn das Handy nicht lädt'], 'g22-hot': ['handy-heiss', 'Wenn das Handy heiß wird'],
  'g22-freeze': ['bildschirm-eingefroren', 'Wenn der Bildschirm einfriert'], 'g22-water': ['handy-nass', 'Was tun, wenn das Handy nass wird'],
  'g22-members': ['samsung-members-diagnose', 'Mit Samsung Members eine Diagnose machen'], 'g22-service': ['vor-dem-service', 'Modell und Problem vor dem Service notieren'],
};

const PHONE = open('Telefon');
const CONTACTS = open('Kontakte');
const MESSAGES = open('Nachrichten');
const CAMERA = open('Kamera');
const GALLERY = open('Galerie');
const SHUTTER = ['Tippen Sie auf den weißen Auslöser.'];
const REAL = 'Diese Lektion ändert echte Einstellungen oder hat echte Folgen. Lesen Sie zuerst alle Schritte und führen Sie sie dann am Handy aus.';
const AI_ICON = ['Tippen Sie auf das Galaxy-AI-Symbol.'];
const CHECK = 'Neue Lektion für die internationale Seite. Die Bildschirme von Google-Apps ändern sich oft; bitte am echten Handy prüfen.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Erfahren Sie, wo Lauter, Leiser und die Seitentaste eines Galaxy-Handys sind und wofür sie da sind.', [
    ['Sehen Sie sich die rechte Seite des Handys an.', 'Dort sind drei Tasten. Von oben: Lauter, Leiser und die Seitentaste.'],
    ['Drücken Sie im Bild die Seitentaste.', 'Das ist die unterste Taste. Damit schalten Sie das Handy ein und aus oder den Bildschirm ab.'],
    ['Drücken Sie im Bild die Taste Leiser.', 'Das ist die mittlere Taste. Sie macht den Ton leiser.'],
    ['Drücken Sie im Bild die Taste Lauter.', 'Das ist die oberste Taste. Sie macht den Ton lauter.']]),
  'g01-charge': L('Laden Sie Ihr Galaxy Schritt für Schritt: Ladegerät einstecken, Kabel anschließen und Ladezeichen prüfen.', [
    ['Stecken Sie das Ladegerät in die Steckdose.'],
    ['Stecken Sie das Kabelende unten in den Anschluss des Handys.', 'Ist der Anschluss nass, lassen Sie ihn erst ganz trocknen.'],
    ['Prüfen Sie, ob das Ladezeichen auf dem Bildschirm erscheint.'],
    ['Ziehen Sie das Kabel ab, wenn das Laden fertig ist.']]),
  'g01-power': L('Schalten Sie ein Galaxy mit der Seitentaste und der Taste Leiser aus und wieder ein.', [
    ['Halten Sie die Seitentaste und die Taste Leiser gleichzeitig gedrückt.', 'Drücken Sie beide zusammen und warten Sie, bis das Menü erscheint.'],
    ['Tippen Sie auf Ausschalten.'],
    ['Tippen Sie noch einmal auf Ausschalten.', 'Wenn der Bildschirm dunkel ist, gehen Sie zum nächsten Schritt und schalten es wieder ein.'],
    ['Halten Sie die Seitentaste gedrückt, um das Handy einzuschalten.', 'Halten Sie sie einige Sekunden, bis das Samsung-Logo erscheint. Dann entsperren Sie den Bildschirm.']]),
  'g01-restart': L('Starten Sie ein Galaxy neu, wenn es langsam ist oder sich seltsam verhält.', [
    ['Halten Sie die Seitentaste und die Taste Leiser gleichzeitig gedrückt.', 'Halten Sie sie, bis das Ein/Aus-Menü erscheint.'],
    ['Tippen Sie auf Neu starten.'], ['Tippen Sie noch einmal auf Neu starten.'],
    ['Warten Sie, bis das Handy aus- und wieder angeht.', '', 'Ist der Bildschirm eingefroren und kein Menü erscheint, halten Sie beide Tasten länger als 7 Sekunden.']]),
  'g01-lock': L('Sperren Sie den Bildschirm mit der Seitentaste und entsperren Sie ihn durch Wischen nach oben.', [
    ['Drücken Sie einmal kurz die Seitentaste.', 'Der Bildschirm geht aus und wird automatisch gesperrt.'],
    ['Drücken Sie die Seitentaste wieder kurz.', 'Der Sperrbildschirm geht an. Zweimal auf den Bildschirm tippen geht auch.'],
    ['Wischen Sie auf dem Bildschirm nach oben.', 'Wenn Sie eine PIN oder einen Fingerabdruck eingerichtet haben, entsperren Sie damit.']]),
  'g02-tap': L('Üben Sie die einfachste Geste: einmal tippen, um eine App zu öffnen.', [
    ['Tippen Sie mit der Fingerspitze einmal leicht auf Galerie.', 'Nicht fest drücken. Ein leichtes Tippen öffnet die App.'],
    ['Tippen Sie unten in der Mitte auf die Home-Taste.', 'Sie kehren zum ersten Bildschirm (Startbildschirm) zurück.']]),
  'g02-hold': L('Üben Sie Berühren und Halten, um das Menü einer App zu öffnen.', [
    ['Berühren und halten Sie Galerie 2 Sekunden lang.', 'Lassen Sie den Finger liegen, bis ein Menü erscheint.'],
    ['Prüfen Sie, ob ein Menü erschienen ist.', 'Berühren und Halten zeigt, was Sie mit der App tun können.'],
    ['Tippen Sie auf die Zurück-Taste, um das Menü zu schließen.']]),
  'g02-swipe': L('Wischen Sie, um Startbildschirmseiten zu wechseln und den Apps-Bildschirm zu öffnen.', [
    ['Wischen Sie auf dem Bildschirm nach links.', 'Sie gelangen zur nächsten Seite des Startbildschirms.'],
    ['Wischen Sie auf dem Startbildschirm von unten nach oben.', 'Der Apps-Bildschirm mit allen Apps öffnet sich.'],
    ['Wischen Sie auf dem Apps-Bildschirm nach unten.', 'Sie kehren zum Startbildschirm zurück.']]),
  'g02-pinch': L('Spreizen Sie zwei Finger, um ein Foto zu vergrößern, und ziehen Sie sie zusammen, um es zu verkleinern.', [
    open('Galerie'), ['Tippen Sie auf das Foto, das Sie sehen möchten.'],
    ['Legen Sie zwei Finger auf das Foto und spreizen Sie sie.', 'Spreizen Sie Daumen und Zeigefinger, um es zu vergrößern.'],
    ['Ziehen Sie die beiden Finger zusammen.', 'Das Foto wird wieder kleiner.']]),
  'g02-back': L('Mit der Zurück-Taste kehren Sie zum vorherigen Bildschirm zurück.', [
    ...settings('Anzeige'),
    ['Tippen Sie unten rechts auf die Zurück-Taste.', 'Sie kehren zum vorherigen Bildschirm (Einstellungen) zurück.', 'Die Reihenfolge der Tasten ändern Sie unter Einstellungen → Anzeige → Navigationsleiste.']]),
  'g02-home': L('Kehren Sie mit der Home-Taste aus jeder App zum Startbildschirm zurück.', [
    open('Einstellungen'), HOME_BTN,
    ['Prüfen Sie, ob der Startbildschirm erscheint.', 'In jeder App bringt Sie die Home-Taste hierher.', 'Sehen Sie keine Tasten, wischen Sie vom unteren Rand ein wenig nach oben.']]),
  'g02-recent': L('Öffnen Sie die zuletzt verwendeten Apps, um zu wechseln oder alle zu schließen.', [
    ['Tippen Sie unten links auf die Taste Zuletzt verwendet.', 'Kürzlich genutzte Apps erscheinen wie Karten.'],
    ['Tippen Sie auf die App, die Sie wieder nutzen möchten.', 'Wischen Sie seitlich, um andere Apps zu sehen.'],
    ['Tippen Sie erneut auf die Taste Zuletzt verwendet.'], ['Tippen Sie auf ‘Alle schließen’.', 'Alle geöffneten Apps werden geschlossen.']]),
  'g03-font': L('Machen Sie die Schrift größer und fett unter Einstellungen → Anzeige → Schriftgröße und -stil.', [
    ...settings('Anzeige', 'Schriftgröße und -stil'),
    ['Ziehen Sie den Kreis auf dem Größenbalken nach rechts.', 'Je weiter rechts, desto größer die Schrift.'],
    ['Tippen Sie auf den Schalter ‘Fett’, um ihn einzuschalten.', 'Fette Schrift ist leichter zu lesen.'],
    ['Prüfen Sie, ob die Schrift größer geworden ist.']]),
  'g03-zoom': L('Vergrößern Sie Symbole und Tasten mit dem Bildschirmzoom unter Einstellungen → Anzeige.', [
    ...settings('Anzeige', 'Bildschirmzoom'), ['Ziehen Sie den Kreis auf dem Balken nach rechts.', 'Je weiter rechts, desto größer Symbole und Tasten.'],
    ['Prüfen Sie, ob Symbole und Tasten größer geworden sind.']]),
  'g03-easy': L('Schalten Sie den Einfachen Modus ein für einen einfacheren Startbildschirm mit großer Schrift und großen Symbolen.', [
    ...settings('Anzeige', 'Einfacher Modus'), ['Tippen Sie auf den Schalter ‘Einfacher Modus’, um ihn einzuschalten.', 'Schrift und Symbole auf dem Startbildschirm werden größer.'],
    ['Prüfen Sie, ob Schrift und Symbole auf dem Startbildschirm größer sind.']]),
  'g03-bright': L('Stellen Sie die Bildschirmhelligkeit im Schnelleinstellungsfeld ein.', [
    ['Wischen Sie von oben rechts nach unten.', 'Das Schnelleinstellungsfeld öffnet sich.'],
    ['Ziehen Sie den Helligkeitsbalken nach rechts.', 'Nach links wird der Bildschirm dunkler.'], ['Wischen Sie nach oben, um das Feld zu schließen.']]),
  'g03-timeout': L('Ändern Sie unter Einstellungen → Anzeige → Bildschirm-Timeout, wie lange der Bildschirm an bleibt.', [
    ...settings('Anzeige', 'Bildschirm-Timeout'), ['Tippen Sie auf ‘5 Minuten’.', 'Wählen Sie die gewünschte Zeit. Je länger, desto mehr Akku wird verbraucht.']]),
  'g03-sound': L('Machen Sie den Klingelton lauter und lassen Sie das Handy beim Klingeln vibrieren.', [
    ...settings('Töne und Vibration', 'Lautstärke'), ['Ziehen Sie den Balken Klingelton nach rechts.', 'Je weiter rechts, desto lauter klingelt es.'],
    BACK, ['Tippen Sie auf ‘Ton’.', 'Für nur Vibration tippen Sie auf ‘Vibrieren’.'],
    ['Tippen Sie auf den Schalter ‘Beim Klingeln vibrieren’, um ihn einzuschalten.', 'Ton und Vibration melden sich gemeinsam.']]),
  'g04-call': L('Rufen Sie mit einem Galaxy an, indem Sie die Nummer auf dem Tastenfeld eingeben.', [
    PHONE, ['Tippen Sie unten auf ‘Tastenfeld’.'], ['Tippen Sie die Ziffern der Nummer der Reihe nach.', 'Bei einem Fehler löschen Sie mit der Löschtaste unten rechts.'],
    ['Tippen Sie auf die grüne Anruftaste.'], ['Tippen Sie nach dem Gespräch auf die rote Auflegen-Taste.']]),
  'g04-answer': L('Nehmen Sie einen Anruf durch Wischen der grünen Taste an, lehnen Sie mit der roten ab oder mit einer Nachricht.', [
    ['Berühren und halten Sie die grüne Annehmen-Taste und wischen Sie nach oben.', 'Ziehen Sie sie aus dem Kreis, um den Anruf anzunehmen.'],
    ['Zum Ablehnen berühren und halten Sie die rote Taste und wischen nach oben.'],
    ['Zum Ablehnen mit einer Nachricht wischen Sie unten ‘Nachricht senden’ nach oben.', 'Wählen Sie einen Text, er wird an den Anrufer gesendet.', 'Unter Einstellungen → Eingabehilfe → Interaktion und Geschicklichkeit können Sie Anrufe mit einmal Tippen annehmen.']]),
  'g04-speaker': L('Schalten Sie im Gespräch den Lautsprecher ein, um ohne Handy am Ohr zu sprechen.', [
    ['Rufen Sie an oder nehmen Sie einen Anruf an.'], ['Tippen Sie auf ‘Lautsprecher’.', 'Sie hören und sprechen mit dem Handy vom Ohr entfernt.'],
    ['Zum Ausschalten tippen Sie noch einmal auf ‘Lautsprecher’.']]),
  'g04-missed': L('Rufen Sie einen verpassten Anruf aus der Liste Zuletzt in der Telefon-App zurück.', [
    PHONE, ['Tippen Sie unten auf ‘Zuletzt’.'],
    ['Wischen Sie die verpasste Nummer nach rechts.', 'Wischen nach rechts ruft sofort an.', 'Klappt das nicht, tippen Sie auf die Nummer und dann auf die Anruftaste.']]),
  'g04-log': L('Sehen Sie in der Liste Zuletzt der Telefon-App, wer wann angerufen hat.', [
    PHONE, ['Tippen Sie unten auf ‘Zuletzt’.'], ['Tippen Sie auf einen Namen, um Details zu sehen.', 'Sie sehen, wann Sie gesprochen haben.']]),
  'g04-block': L('Sperren Sie eine Spam-Nummer in den Einstellungen der Telefon-App.', [
    PHONE, ['Tippen Sie oben rechts auf die drei Punkte (Weitere Optionen).'], ['Tippen Sie auf ‘Einstellungen’.'], ['Tippen Sie auf ‘Nummern sperren’.'],
    ['Tippen Sie auf ‘Telefonnummer hinzufügen’.', '', 'Der Bildschirm kann je nach Version etwas anders aussehen.'], ['Geben Sie die zu sperrende Nummer ein.'], ['Tippen Sie auf ‘Speichern’.']]),
  'g05-new': L('Speichern Sie in der Kontakte-App einen neuen Kontakt mit Name und Nummer.', [
    CONTACTS, ['Tippen Sie oben rechts auf ‘+’ (Kontakt erstellen).'], ['Tippen Sie auf das Feld Name.'], ['Geben Sie den Namen ein.'],
    ['Tippen Sie auf das Feld Telefon.'], ['Geben Sie die Telefonnummer ein.'], ['Tippen Sie auf ‘Speichern’.']]),
  'g05-search': L('Finden Sie einen Kontakt schnell, indem Sie nach dem Namen suchen.', [
    CONTACTS, ['Tippen Sie oben auf die Lupe (Suchen).'], ['Geben Sie den gesuchten Namen ein.'], ['Tippen Sie auf den gefundenen Namen.']]),
  'g05-edit': L('Ändern Sie die gespeicherte Telefonnummer eines Kontakts.', [
    CONTACTS, ['Tippen Sie auf den Namen der Person.'], ['Tippen Sie unten auf ‘Bearbeiten’.'], ['Tippen Sie auf das Feld Telefon.'],
    ['Löschen Sie die alte Nummer und geben Sie die neue ein.'], ['Tippen Sie auf ‘Speichern’.']]),
  'g05-speed': L('Richten Sie eine Kurzwahl ein, um durch Halten einer Ziffer anzurufen.', [
    PHONE, ['Tippen Sie unten auf ‘Tastenfeld’.'], ['Tippen Sie oben rechts auf die drei Punkte (Weitere Optionen).'], ['Tippen Sie auf ‘Kurzwahlnummern’.'],
    ['Tippen Sie auf die Ziffer ‘2’.', 'Wählen Sie eine freie Ziffer.'], ['Wählen Sie die Person aus Ihren Kontakten.'],
    ['Halten Sie auf dem Tastenfeld die ‘2’ gedrückt, um anzurufen.', 'Probieren Sie es im Übungsbild aus.']]),
  'g05-share': L('Senden Sie die Kontaktdaten einer Person per Nachricht an jemand anderen.', [
    CONTACTS, ['Tippen Sie auf den Namen der Person, die Sie teilen möchten.'], ['Tippen Sie unten auf ‘Teilen’.'], ['Tippen Sie auf ‘Nachrichten’.'],
    ['Wählen Sie den Empfänger.'], ['Tippen Sie auf die Senden-Taste.']]),
  'g06-send': L('Senden und beantworten Sie Textnachrichten in der Nachrichten-App.', [
    MESSAGES, ['Tippen Sie auf das Gespräch, auf das Sie antworten möchten.', 'Für eine neue Nachricht tippen Sie unten rechts auf Chat starten.'],
    ['Tippen Sie unten auf das Nachrichtenfeld.'], ['Schreiben Sie Ihre Nachricht.'], ['Tippen Sie rechts auf die Senden-Taste.']]),
  'g06-type': L('Geben Sie Buchstaben, Zahlen und Zeichen ein und wechseln Sie die Tastatursprache.', [
    ['Schreiben Sie ‘Hallo’ auf der Tastatur.'], ['Für Zahlen oder Zeichen tippen Sie auf ‘!#1’.'], ['Zurück zu den Buchstaben tippen Sie an derselben Stelle auf ‘ABC’.'],
    ['Für eine andere Sprache wischen Sie die Leertaste nach links oder rechts.', 'Es erscheinen nur Sprachen, die Sie in den Tastatureinstellungen hinzugefügt haben.']]),
  'g06-fix': L('Korrigieren Sie Tippfehler mit der Löschtaste und durch Verschieben des Cursors.', [
    ['Tippen Sie einmal auf die Löschtaste (⌫).', 'Der Buchstabe direkt vor dem Cursor wird gelöscht.'], ['Geben Sie den richtigen Buchstaben ein.'],
    ['Um einen Buchstaben in der Mitte zu ändern, tippen Sie auf diese Stelle.', 'Der Cursor (der blinkende Strich) springt dorthin.']]),
  'g06-copy': L('Kopieren Sie Text und fügen Sie ihn an anderer Stelle ein.', [
    ['Berühren und halten Sie den Text, den Sie kopieren möchten.'], ['Tippen Sie auf ‘Kopieren’.'], ['Berühren und halten Sie das Feld, in das Sie einfügen möchten.'], ['Tippen Sie auf ‘Einfügen’.']]),
  'g06-photo': L('Hängen Sie ein Foto aus der Galerie an eine Textnachricht an.', [
    MESSAGES, ['Tippen Sie auf das Gespräch, an das Sie das Foto senden möchten.'], ['Tippen Sie links neben dem Nachrichtenfeld auf ‘+’.'], ['Tippen Sie auf ‘Galerie’.'],
    ['Tippen Sie auf das Foto, das Sie senden möchten.'], ['Tippen Sie auf die Senden-Taste.']]),
  'g06-translate': L('Übersetzen Sie ein Gespräch in Nachrichten mit dem Galaxy-AI-Werkzeug der Tastatur.', [
    MESSAGES, ['Tippen Sie auf das Gespräch, das Sie übersetzen möchten.'], ['Tippen Sie unten auf das Nachrichtenfeld.'],
    ['Tippen Sie oben links auf der Tastatur auf das Galaxy-AI-Symbol.'], ['Tippen Sie auf ‘Chat-Übersetzung’.'], ['Wählen Sie die Sprachen im Feld oben.']]),
  'g07-noti': L('Öffnen Sie das Benachrichtigungsfeld, lesen Sie eine Benachrichtigung und löschen Sie alle.', [
    ['Wischen Sie von oben links nach unten.', 'Das Benachrichtigungsfeld öffnet sich.'], ['Tippen Sie auf die Benachrichtigung, die Sie lesen möchten.', 'Dabei öffnet sich die zugehörige App.'],
    ['Wischen Sie von oben links nach unten.', 'Das Benachrichtigungsfeld öffnet sich.'], ['Tippen Sie auf ‘Löschen’.', 'Alle Benachrichtigungen werden entfernt.']]),
  'g07-appnoti': L('Schalten Sie Benachrichtigungen von Apps aus, die Sie nicht brauchen.', [
    ...settings('Benachrichtigungen', 'App-Benachrichtigungen'), ['Tippen Sie auf den Schalter einer App, um ihre Benachrichtigungen auszuschalten.', 'Lassen Sie wichtige Nachrichten-Apps eingeschaltet.']]),
  'g07-quick': L('Öffnen Sie das Schnelleinstellungsfeld und lernen Sie seine Tasten kennen.', [
    QUICK, ['Sehen Sie sich die Tasten im Feld an.', 'Blaue Tasten sind eingeschaltet. Tippen Sie auf eine Taste, um sie ein- oder auszuschalten.'],
    ['Berühren und halten Sie die Taste ‘WLAN’.', 'Halten öffnet die genauen Einstellungen.'], ['Wischen Sie nach oben, um das Feld zu schließen.']]),
  'g07-flash': L('Schalten Sie die Taschenlampe im Schnelleinstellungsfeld ein und aus.', [
    QUICK, ['Tippen Sie auf ‘Taschenlampe’.', 'Das Licht auf der Rückseite geht an.'], ['Zum Ausschalten tippen Sie erneut auf ‘Taschenlampe’.']]),
  'g07-rotate': L('Legen Sie fest, ob sich der Bildschirm dreht, wenn Sie das Handy quer halten.', [
    QUICK, ['Tippen Sie auf ‘Automatisch drehen’.', 'Ist es an, dreht sich der Bildschirm mit. Ist es aus, bleibt er hochkant.'], ['Halten Sie das Handy quer, um es auszuprobieren.']]),
  'g07-dnd': L('Schalten Sie Anrufe und Hinweise mit Nicht stören stumm und nutzen Sie im Flugzeug den Flugmodus.', [
    QUICK, ['Tippen Sie auf ‘Nicht stören’.', 'Anrufe und Benachrichtigungen klingeln nicht. Noch einmal tippen schaltet es aus.'],
    ['Tippen Sie erneut auf ‘Nicht stören’, um es auszuschalten.'], ['Tippen Sie auf ‘Flugmodus’.', 'Anrufe und Internet werden getrennt. Nutzen Sie ihn im Flugzeug.'],
    ['Tippen Sie nach dem Flug erneut darauf, um ihn auszuschalten.']]),
  'g08-wifi': L('Verbinden Sie Ihr Galaxy unter Einstellungen → Verbindungen → WLAN mit einem WLAN.', [
    ...settings('Verbindungen', 'WLAN'), ['Tippen Sie auf den Schalter ‘WLAN’, um ihn einzuschalten.', 'Eine Liste der WLANs in der Nähe erscheint.'],
    ['Tippen Sie auf den Namen des WLANs.', 'Ein Schloss bedeutet, dass ein Passwort nötig ist.'], ['Geben Sie das WLAN-Passwort ein.', 'Es steht oft auf der Rückseite des Routers.'], ['Tippen Sie auf ‘Verbinden’.']]),
  'g08-data': L('Schalten Sie mobile Daten unter Einstellungen → Verbindungen → Datennutzung ein oder aus.', [
    ...settings('Verbindungen', 'Datennutzung'), ['Tippen Sie auf den Schalter ‘Mobile Daten’, um ihn einzuschalten.', 'Ist er aus, funktioniert das Internet nur im WLAN.']]),
  'g08-usage': L('Sehen Sie, wie viele mobile Daten Sie diesen Monat verbraucht haben und welche Apps am meisten.', [
    ...settings('Verbindungen', 'Datennutzung'), ['Tippen Sie auf ‘Mobile Datennutzung’.'],
    ['Prüfen Sie, wie viel Sie diesen Monat verbraucht haben.', 'Apps mit dem größten Verbrauch stehen oben. Die App Ihres Anbieters zeigt, wie viel übrig ist.']]),
  'g08-bt': L('Koppeln Sie Bluetooth-Kopfhörer mit Ihrem Galaxy.', [
    ['Schalten Sie die Kopfhörer in den Kopplungsmodus.'], ...settings('Verbindungen', 'Bluetooth'), ['Tippen Sie auf den Schalter ‘Bluetooth’, um ihn einzuschalten.'],
    ['Tippen Sie in der Liste auf den Namen Ihrer Kopfhörer.'], ['Tippen Sie auf ‘Verbinden’.']]),
  'g08-hotspot': L('Teilen Sie die Internetverbindung des Handys mit dem mobilen Hotspot.', [
    ...settings('Verbindungen', 'Mobile Hotspot und Tethering', 'Mobile Hotspot'), ['Tippen Sie auf den Schalter ‘Mobile Hotspot’, um ihn einzuschalten.', '', 'Das kann zusätzliche Kosten verursachen. Prüfen Sie vorher Ihren Tarif.'],
    ['Wählen Sie am anderen Gerät den Namen Ihres Handys in der WLAN-Liste.']]),
  'g08-location': L('Finden Sie die Schalter für Standort und NFC in den Einstellungen.', [
    ...settings('Standort'), ['Tippen Sie auf den Schalter ‘Standort’, um ihn einzuschalten.', 'Karten- und Wetter-Apps wissen dann, wo Sie sind.'], BACK, item('Verbindungen'),
    ['Tippen Sie auf den Schalter ‘NFC und kontaktlose Zahlungen’, um ihn einzuschalten.', 'Schalten Sie ihn ein, um mit dem Handy zu bezahlen oder Fahrkarten zu nutzen.']]),
  'g09-search': L('Suchen Sie mit dem Browser Samsung Internet im Web.', [
    [...open('Samsung Internet'), 'Je nach Version heißt die App ‘Samsung Internet’ oder ‘Browser’.'], ['Tippen Sie oben auf die Adressleiste.'], ['Geben Sie ein, was Sie suchen.'],
    ['Tippen Sie unten rechts auf der Tastatur auf Los (↵).'], ['Tippen Sie auf das Ergebnis, das Sie lesen möchten.']]),
  'g09-bookmark': L('Speichern Sie oft besuchte Seiten als Lesezeichen und öffnen Sie sie später.', [
    open('Samsung Internet'), ['Tippen Sie rechts neben der Adressleiste auf den Stern (☆).', 'Die aktuelle Seite wird in den Lesezeichen gespeichert.'],
    ['Zum späteren Öffnen tippen Sie unten auf den Stern (Lesezeichen).'], ['Tippen Sie auf die gespeicherte Seite.']]),
  'g09-qr': L('Öffnen Sie einen QR-Code mit der Galaxy-Kamera.', [
    CAMERA, ['Richten Sie die Kamera auf den QR-Code.', 'Im Fotomodus den Code in die Bildmitte halten.'],
    ['Tippen Sie auf den gelben Link auf dem Bildschirm.', 'Vorsicht bei QR-Codes von unbekannten Orten.']]),
  'g09-files': L('Finden Sie heruntergeladene Dateien in der App Eigene Dateien.', [open('Eigene Dateien'), ['Tippen Sie auf ‘Downloads’.'], ['Tippen Sie auf die Datei, die Sie öffnen möchten.']]),
  'g09-stores': L('Lernen Sie den Unterschied zwischen Google Play Store und Samsung Galaxy Store.', [
    open('Play Store'), ['Das ist der App-Store von Google, in dem Sie Apps finden und laden.', 'Sie müssen sich mit einem Google-Konto anmelden.'], HOME_BTN,
    open('Galaxy Store'), ['Das ist der App-Store von Samsung mit vielen Samsung-Apps und Designs.']]),
  'g09-install': L('Installieren Sie eine App im Play Store, aktualisieren Sie Apps im Galaxy Store und deinstallieren Sie eine App.', [
    open('Play Store'), ['Tippen Sie oben auf die Suchleiste.'], ['Geben Sie den Namen der App ein.'], ['Tippen Sie neben dem App-Namen auf ‘Installieren’.'],
    ['Tippen Sie auf die App ‘Galaxy Store’.', 'Jetzt aktualisieren wir Apps.'], ['Tippen Sie unten auf ‘Menü’.'], ['Tippen Sie auf ‘Updates’.'], ['Tippen Sie auf ‘Alle aktualisieren’.'],
    ['Berühren und halten Sie auf dem Startbildschirm die App, die Sie entfernen möchten.'], ['Tippen Sie auf ‘Deinstallieren’.'],
    ['Tippen Sie auf ‘OK’.', 'Eine entfernte App können Sie im Store wieder installieren.']]),
  'g09-google': L('Finden Sie Google-Apps und die App Ihres Anbieters über die Suche im Apps-Bildschirm.', [
    ['Wischen Sie auf dem Startbildschirm nach oben, um den Apps-Bildschirm zu öffnen.'], ['Tippen Sie oben auf ‘Suchen’.'],
    ['Geben Sie den Namen der App ein.', 'Probieren Sie Google, YouTube oder den Namen Ihres Mobilfunkanbieters.'], ['Tippen Sie auf die gefundene App.']]),
  'g10-open': L('Öffnen Sie die Kamera-App und finden Sie den Auslöser.', [CAMERA, ['Prüfen Sie, ob der Kamerabildschirm erscheint.', 'Der weiße Kreis unten in der Mitte ist der Auslöser.']]),
  'g10-focus': L('Tippen Sie auf den Bildschirm, um vor dem Foto scharfzustellen.', [
    CAMERA, ['Tippen Sie auf die Stelle, die scharf sein soll.', 'Erscheint ein gelber Kreis, ist scharfgestellt.'],
    ['Tippen Sie auf den weißen Auslöser.', 'Sind Fotos unscharf, wischen Sie die Linse mit einem weichen Tuch ab.']]),
  'g10-switch': L('Wechseln Sie zwischen Rückkamera und Frontkamera (Selfie).', [
    CAMERA, ['Tippen Sie unten rechts auf die Pfeile im Kreis.', 'Auch Wischen nach oben oder unten wechselt die Kamera.'], ['Prüfen Sie, ob die Frontkamera Ihr Gesicht zeigt.']]),
  'g10-selfie': L('Machen Sie ein Selfie mit der Frontkamera.', [
    CAMERA, ['Tippen Sie unten rechts auf die Pfeile im Kreis.'], ['Halten Sie das Handy so, dass Ihr Gesicht in der Mitte ist.'], SHUTTER]),
  'g10-zoom': L('Zoomen Sie beim Fotografieren an weit entfernte Dinge heran.', [
    CAMERA, ['Tippen Sie unten auf die Zahl ‘3’.', 'Entferntes wird dreimal größer. ‘1x’ geht zurück.', 'Die Zahlen hängen vom Modell ab (Ultra-Modelle zoomen weiter).'], SHUTTER]),
  'g10-timer': L('Nutzen Sie den Kamera-Timer, damit das Foto ein paar Sekunden später aufgenommen wird.', [
    CAMERA, ['Tippen Sie oben auf das Symbol Schnellsteuerung (⌄).'], ['Tippen Sie auf das Timer-Symbol.'], ['Tippen Sie auf ‘5 Sekunden’.'], SHUTTER,
    ['Das Foto wird nach dem Countdown aufgenommen.']]),
  'g10-modes': L('Probieren Sie den Porträtmodus für unscharfen Hintergrund und den Nachtmodus für dunkle Orte.', [
    CAMERA, ['Tippen Sie unten auf ‘Porträt’.', 'Die Person ist scharf, der Hintergrund unscharf.'], SHUTTER, ['Tippen Sie unten auf ‘Mehr’.'],
    ['Tippen Sie auf ‘Nacht’.', 'An dunklen Orten werden Fotos ohne Blitz hell. Halten Sie das Handy dabei ruhig.']]),
  'g10-video': L('Nehmen Sie mit der Galaxy-Kamera ein Video auf.', [CAMERA, ['Tippen Sie unten auf ‘Video’.'], ['Tippen Sie auf die rote Aufnahmetaste.'], ['Wenn Sie fertig sind, tippen Sie auf Stopp.']]),
  'g10-capture': L('Machen Sie mit zwei Tasten einen Screenshot und nehmen Sie den Bildschirm über die Schnelleinstellungen auf.', [
    ['Drücken Sie kurz gleichzeitig die Seitentaste und die Taste Leiser.', 'Mit einem Klick wird der Bildschirm als Bild gespeichert. Sie finden es in der Galerie.'], QUICK,
    ['Tippen Sie auf ‘Bildschirmaufnahme’.', 'Sehen Sie es nicht, wischen Sie im Feld noch einmal nach unten.'], ['Tippen Sie auf ‘Aufnahme starten’.'],
    ['Zum Beenden tippen Sie oben auf dem Bildschirm auf Stopp.']]),
  'g11-latest': L('Finden Sie in der Galerie das Foto, das Sie gerade aufgenommen haben.', [
    GALLERY, ['Tippen Sie auf das erste Foto (oben links).', 'Das neueste Foto steht immer vorne.'], ['Wischen Sie nach links, um das nächste Foto zu sehen.']]),
  'g11-album': L('Erstellen Sie in der Galerie ein neues Album, um Fotos zusammenzufassen.', [
    GALLERY, ['Tippen Sie unten auf ‘Alben’.'], ['Tippen Sie oben auf ‘+’ (Hinzufügen).'], ['Tippen Sie auf ‘Album’.'], ['Geben Sie einen Namen für das Album ein.'],
    ['Tippen Sie auf ‘Erstellen’.', 'Wählen Sie dann die Fotos aus, die hinein sollen.']]),
  'g11-edit': L('Schneiden Sie ein Foto in der Galerie zu und hellen Sie es auf.', [
    GALLERY, ['Tippen Sie auf das Foto, das Sie bearbeiten möchten.'], ['Tippen Sie unten auf den Stift (Bearbeiten).'], ['Ziehen Sie eine Ecke des Fotos nach innen, um es zuzuschneiden.'],
    ['Tippen Sie unten auf ‘Farbton’.'], ['Ziehen Sie den Helligkeitsbalken nach rechts.'], ['Tippen Sie auf ‘Speichern’.']]),
  'g11-text': L('Kopieren Sie Text aus einem Foto in der Galerie und fügen Sie ihn in eine Nachricht oder Notiz ein.', [
    GALLERY, ['Tippen Sie auf ein Foto mit Text.'], ['Tippen Sie auf das gelbe ‘T’-Symbol.', 'Es erscheint nur, wenn das Foto Text enthält.'],
    ['Berühren und halten Sie den Text, den Sie kopieren möchten.'], ['Tippen Sie auf ‘Kopieren’.', 'Sie können ihn in eine Nachricht oder Notiz einfügen.']]),
  'g11-multi': L('Wählen Sie in der Galerie mehrere Fotos aus und teilen Sie sie auf einmal.', [
    GALLERY, ['Berühren und halten Sie eines der Fotos, die Sie senden möchten.'], ['Tippen Sie auf weitere Fotos.', 'Ein Häkchen im Kreis bedeutet, dass es ausgewählt ist.'],
    ['Tippen Sie unten auf ‘Teilen’.'], ['Tippen Sie auf die App zum Senden (zum Beispiel Nachrichten).'], ['Wählen Sie den Empfänger und senden Sie.']]),
  'g11-restore': L('Holen Sie gelöschte Fotos aus dem Papierkorb der Galerie zurück.', [
    GALLERY, ['Tippen Sie unten auf ‘Menü’.'], ['Tippen Sie auf ‘Papierkorb’.'], ['Tippen Sie auf das Foto, das Sie zurückholen möchten.', 'Gelöschte Fotos bleiben eine Weile im Papierkorb.'],
    ['Tippen Sie auf ‘Wiederherstellen’.']]),
  'g11-docs': L('Finden Sie auf dem Handy gespeicherte Dokumente in der App Eigene Dateien.', [open('Eigene Dateien'), ['Tippen Sie auf ‘Dokumente’.'], ['Tippen Sie auf das Dokument, das Sie öffnen möchten.']]),
  'g11-quickshare': L('Senden Sie ein Foto mit Quick Share an ein Handy in der Nähe.', [
    GALLERY, ['Tippen Sie auf das Foto, das Sie senden möchten.'], ['Tippen Sie unten auf ‘Teilen’.'],
    ['Tippen Sie auf ‘Quick Share’.', '', 'Das andere Handy muss Quick Share ebenfalls eingeschaltet haben (Einstellungen → Verbundene Geräte → Quick Share).'],
    ['Tippen Sie auf den Namen des Empfänger-Handys.'], ['Tippen Sie auf dem Empfänger-Handy auf ‘Annehmen’.']]),
  'g12-addapp': L('Legen Sie eine App aus dem Apps-Bildschirm auf den Startbildschirm.', [
    ['Wischen Sie auf dem Startbildschirm nach oben, um den Apps-Bildschirm zu öffnen.'], ['Berühren und halten Sie die gewünschte App.'], ['Tippen Sie auf ‘Zur Startseite hinzufügen’.']]),
  'g12-folder': L('Fassen Sie Apps in einem Ordner zusammen und fügen Sie dem Startbildschirm ein Wetter-Widget hinzu.', [
    ['Berühren und halten Sie eine App und ziehen Sie sie auf eine andere.', 'Ein Ordner mit beiden Apps entsteht.'], ['Tippen Sie auf den Ordnernamen und geben Sie einen Namen ein.'],
    ['Berühren und halten Sie eine leere Stelle auf dem Startbildschirm.'], ['Tippen Sie auf ‘Widgets’.'], ['Tippen Sie auf ‘Wetter’.'], ['Tippen Sie auf ‘Hinzufügen’.']]),
  'g12-wallpaper': L('Verwenden Sie eines Ihrer Fotos als Hintergrund für Sperr- oder Startbildschirm.', [
    ...settings('Hintergrund und Stil'), ['Tippen Sie auf ‘Hintergründe ändern’.'], ['Für ein eigenes Foto tippen Sie auf ‘Galerie’.'], ['Tippen Sie auf das gewünschte Foto.'],
    ['Wählen Sie Sperrbildschirm, Startbildschirm oder beide.'], ['Tippen Sie auf ‘Fertig’.']]),
  'g12-alarm': L('Stellen Sie in der Uhr-App einen Wecker und starten Sie einen Timer.', [
    open('Uhr'), ['Tippen Sie unten auf ‘Wecker’.'], ['Tippen Sie unten rechts auf ‘+’.'], ['Wischen Sie die Zahlen nach oben oder unten, um die Zeit einzustellen.'], ['Tippen Sie auf ‘Speichern’.'],
    ['Für einen Timer tippen Sie unten auf ‘Timer’.'], ['Stellen Sie die Zeit ein und tippen Sie auf ‘Start’.']]),
  'g12-calendar': L('Tragen Sie einen Termin in die Kalender-App ein.', [
    open('Kalender'), ['Tippen Sie unten rechts auf ‘+’ (Termin hinzufügen).'], ['Tippen Sie auf das Feld Titel.'], ['Geben Sie den Namen des Termins ein.'],
    ['Tippen Sie auf ‘Beginn’, um Datum und Uhrzeit zu wählen.'], ['Tippen Sie auf ‘Speichern’.']]),
  'g12-reminder': L('Lassen Sie sich an eine Aufgabe erinnern, indem Sie einem Termin eine Erinnerung hinzufügen.', [
    open('Kalender'), ['Tippen Sie unten rechts auf ‘+’ (Termin hinzufügen).'], ['Geben Sie die Aufgabe als Titel ein.'], ['Tippen Sie auf ‘Erinnerung’.'],
    ['Tippen Sie auf den Zeitpunkt der Erinnerung (zum Beispiel 10 Minuten vorher).'], ['Tippen Sie auf ‘Speichern’.', 'Die Erinnerung kommt zur gewählten Zeit.']]),
  'g12-note': L('Schreiben Sie eine schnelle Notiz in Samsung Notes.', [
    open('Samsung Notes'), ['Tippen Sie unten rechts auf ‘+’.'], ['Schreiben Sie, was Sie notieren möchten.'], ['Wenn Sie fertig sind, tippen Sie auf die Zurück-Taste.', 'Die Notiz wird automatisch gespeichert.']]),
  'g12-recorder': L('Nehmen Sie Ihre Stimme mit der App Sprachrekorder auf.', [
    open('Sprachrekorder'), ['Tippen Sie auf die Aufnahmetaste.'], ['Sprechen Sie in das Handy.'], ['Tippen Sie auf ‘Stopp’.', 'Die Aufnahme wird in der Liste gespeichert.']]),
  'g12-tools': L('Sehen Sie das Wetter, rechnen Sie mit dem Rechner und hören Sie Radio.', [
    open('Wetter'), ['Sehen Sie sich das Wetter und die Temperatur von heute an.', 'Der Standort muss eingeschaltet sein, um das Wetter vor Ort zu sehen.'], HOME_BTN, open('Rechner'),
    ['Tippen Sie Zahlen, + und = zum Rechnen.'],
    ['Tippen Sie auf die App ‘Radio’.', 'Das Radio braucht kabelgebundene Kopfhörer, die als Antenne dienen.', 'Manche Modelle und Anbieter haben keine Radio-App.']]),
  'x13-gmail': L('Senden Sie Fotos mit der Gmail-App per E-Mail an Ihre Familie.', [
    open('Gmail'), ['Tippen Sie unten rechts auf ‘Schreiben’.'], ['Geben Sie die E-Mail-Adresse der Person in das Feld ‘An’ ein.'], ['Tippen Sie oben auf die Büroklammer (Anhängen).'],
    ['Tippen Sie auf das Foto, das Sie senden möchten.', 'Sie können mehrere Fotos antippen.'], ['Geben Sie einen kurzen Betreff ein.'], ['Tippen Sie oben auf Senden (Papierflieger).']], { check: CHECK }),
  'x13-video': L('Senden Sie ein Video aus der Galerie mit der Nachrichten-App an ein Familienmitglied.', [
    GALLERY, ['Tippen Sie auf das Video, das Sie senden möchten.'], ['Tippen Sie unten auf ‘Teilen’.'], ['Tippen Sie auf ‘Nachrichten’.'], ['Wählen Sie den Empfänger.'],
    ['Tippen Sie auf die Senden-Taste.', '', 'Lange Videos können für eine Nachricht zu groß sein. Nutzen Sie dann Quick Share oder E-Mail.']], { check: CHECK }),
  'x13-meet': L('Machen Sie mit der App Google Meet einen Videoanruf mit Ihrer Familie.', [
    open('Meet'), ['Tippen Sie auf ‘Neu’.'], ['Tippen Sie auf den Namen der Person, die Sie anrufen möchten.', 'Die Person braucht ebenfalls Google Meet oder ein Google-Konto.'],
    ['Tippen Sie auf die Videoanruf-Taste.'], ['Tippen Sie zum Beenden auf die rote Auflegen-Taste.']], { check: CHECK }),
  'g14-open': L('Öffnen Sie Samsung Wallet und sehen Sie sich Karten und Menüs an.', [
    ['Tippen Sie auf die App ‘Samsung Wallet’.', 'Sie öffnet sich auch, wenn Sie das Kartenbild unten am Bildschirm nach oben wischen.'],
    ['Sehen Sie sich Ihre gespeicherten Karten und die Menüs an.', 'Beim ersten Mal sind noch keine Karten da. Die nächste Lektion zeigt den Bildschirm zum Hinzufügen.']]),
  'g14-add': L('Sehen Sie sich den Bildschirm zum Hinzufügen einer Zahlungskarte in Samsung Wallet an.', [
    [...open('Samsung Wallet'), REAL], ['Tippen Sie oben auf ‘+’ (Hinzufügen).'], ['Sehen Sie nach, was Sie hinzufügen können.', 'Je nach Land Zahlungskarten, Fahrkarten und mehr.'],
    ['Tippen Sie auf ‘Zahlungskarte’.'], ['Lesen Sie die Anleitung zum Hinzufügen einer Karte.']]),
  'g14-pay': L('Wählen Sie in Samsung Wallet eine Karte und bezahlen Sie, indem Sie das Handy ans Kartenterminal halten.', [
    [...open('Samsung Wallet'), REAL], ['Tippen Sie auf die Karte, mit der Sie zahlen möchten.'], ['Nutzen Sie Ihren Fingerabdruck oder geben Sie die Zahlungs-PIN ein.'],
    ['Halten Sie die Rückseite des Handys nah an das Kartenterminal.']]),
  'g15-pin': L('Schützen Sie Ihr Handy mit einer PIN-Bildschirmsperre.', [
    [...open('Einstellungen'), REAL], ...sub('Sperrbildschirm und AOD', 'Bildschirmsperre und Biometrie'), ['Tippen Sie auf ‘Sperrbildschirmtyp’.'], ['Tippen Sie auf ‘PIN’.'],
    ['Geben Sie mindestens 4 Ziffern ein, die Sie sich gut merken können.', 'Vermeiden Sie leicht zu erratende Zahlen wie Geburtstag oder Telefonnummer.'], ['Geben Sie dieselben Ziffern zur Bestätigung noch einmal ein.']]),
  'g15-bio': L('Registrieren Sie Ihren Fingerabdruck und auf Wunsch Ihr Gesicht zum Entsperren.', [
    [...open('Einstellungen'), REAL], ...sub('Sicherheit und Datenschutz', 'Bildschirmsperre und Biometrie'), ['Tippen Sie auf ‘Fingerabdrücke’.'],
    ['Geben Sie Ihre PIN ein.', 'Ohne PIN erstellen Sie zuerst eine.'],
    ['Legen Sie den Finger immer wieder auf das Fingerabdruckzeichen unten und heben Sie ihn an.', 'Nehmen Sie einen oft genutzten Finger und verschieben Sie ihn jedes Mal etwas.'],
    ['Um auch Ihr Gesicht hinzuzufügen, tippen Sie auf demselben Bildschirm auf ‘Gesichtserkennung’.']]),
  'g15-perm': L('Sehen Sie, welche Apps Standort, Kamera oder Mikrofon genutzt haben, und entziehen Sie unnötige Zugriffe.', [
    ...settings('Sicherheit und Datenschutz', 'In den letzten 24 Stunden verwendete Berechtigungen'), ['Sehen Sie, welche Apps Standort, Kamera oder Mikrofon genutzt haben.'],
    ['Tippen Sie auf ‘Standort’.'], ['Ändern Sie unbekannte Apps auf ‘Nicht zulassen’.']]),
  'g15-folder': L('Finden Sie den Sicheren Ordner und Samsung Pass in den Einstellungen.', [
    ...settings('Sicherheit und Datenschutz', 'Weitere Sicherheitseinstellungen'), ['Tippen Sie auf ‘Sicherer Ordner’.'], ['Lesen Sie die Informationen zum Sicheren Ordner.'], BACK,
    ['Tippen Sie auf ‘Passwörter, Passkeys und Autofill’.', 'Hier finden Sie Samsung Pass. Er hilft beim Anmelden per Fingerabdruck.']]),
  'g15-medical': L('Hinterlegen Sie medizinische Infos und Notfallkontakte, die im Notfall helfen.', [
    ...settings('Sicherheit und Notfall', 'Medizinische Informationen'), ['Geben Sie Name, Blutgruppe, Medikamente und Allergien ein.'], BACK,
    ['Tippen Sie auf ‘Notfallkontakte’.'], ['Fügen Sie Familienmitglieder als Kontakte hinzu.']]),
  'g15-sos': L('Sehen Sie, wie Notfall-SOS auf Ihrem Handy funktioniert, ohne einen Anruf auszulösen.', [
    [...open('Einstellungen'), 'Wenn Sie die Tasten wirklich drücken, wird der Notruf gewählt. In dieser Lektion nur den Bildschirm ansehen.'],
    ...sub('Sicherheit und Notfall', 'Notfall-SOS'),
    ['Lesen Sie, wie oft die Seitentaste gedrückt werden muss.', 'Drücken Sie die Seitentaste so oft wie angegeben, wird die eingestellte Nummer angerufen.']]),
  'g15-find': L('Schalten Sie die Einstellung ein, mit der Sie das Handy bei Verlust mit Samsung Find finden.', [
    ...settings('Sicherheit und Datenschutz', 'Schutz bei Geräteverlust', 'Find My Mobile'),
    ['Tippen Sie auf den Schalter ‘Auffinden dieses Telefons zulassen’, um ihn einzuschalten.', 'Sie müssen in Ihrem Samsung-Konto angemeldet sein.'],
    ['Haben Sie das Handy verloren, öffnen Sie auf einem anderen Gerät smartthingsfind.samsung.com.']]),
  'g16-setup': L('Richten Sie ein neues Galaxy zum ersten Mal ein.', [
    ['Halten Sie die Seitentaste gedrückt, um das Handy einzuschalten.'], ['Prüfen Sie die Sprache und tippen Sie auf ‘Start’.'], ['Wählen Sie ein WLAN und verbinden Sie sich.'],
    ['Folgen Sie für den Rest den Anweisungen und tippen Sie auf ‘Weiter’.']]),
  'g16-sim': L('Erfahren Sie, was SIM-Karte und eSIM sind, und sehen Sie Ihre Nummer im SIM-Manager.', [
    ['Die SIM (Nano-SIM) ist eine kleine Karte von Ihrem Mobilfunkanbieter.'], ['Die eSIM wird ohne Karte auf das Handy geladen.', '', 'eSIM und zwei Nummern hängen von Modell und Anbieter ab.'],
    ...settings('Verbindungen', 'SIM-Manager'), ['Prüfen Sie, ob Ihre Nummer und Ihr Anbieter angezeigt werden.']]),
  'g16-account': L('Prüfen Sie, ob das Handy mit einem Samsung-Konto und einem Google-Konto angemeldet ist.', [
    ...settings('Konten und Sicherung', 'Konten verwalten'),
    ['Prüfen Sie, ob ein Samsung-Konto und ein Google-Konto vorhanden sind.', 'Sie brauchen sie für Sicherungen, App-Installationen und die Handysuche. Notieren Sie Benutzername und Passwort.']]),
  'g16-switch': L('Übertragen Sie Kontakte, Fotos und mehr mit Smart Switch auf ein neues Galaxy.', [
    ...settings('Konten und Sicherung', 'Daten vom alten Gerät übertragen'), ['Wählen Sie auf dem neuen Handy ‘Daten empfangen’.'], ['Legen Sie beide Handys nah zusammen und folgen Sie den Anweisungen.']]),
  'g16-backup': L('Prüfen Sie, wann das Handy zuletzt in der Samsung Cloud gesichert wurde.', [...settings('Konten und Sicherung', 'Samsung Cloud'), ['Prüfen Sie das Datum der letzten Sicherung.']]),
  'g16-restore': L('Stellen Sie Ihre Daten aus einer Samsung-Cloud-Sicherung wieder her.', [
    ...settings('Konten und Sicherung', 'Samsung Cloud'), ['Tippen Sie auf ‘Daten wiederherstellen’.'], ['Wählen Sie das Gerät und die Inhalte aus.'], ['Tippen Sie auf ‘Wiederherstellen’.']]),
  'g17-magnify': L('Schalten Sie den Vergrößerungs-Kurzbefehl ein und vergrößern Sie per dreimal Tippen.', [
    ...settings('Eingabehilfe', 'Verbesserungen der Sichtbarkeit', 'Vergrößerung'), ['Tippen Sie auf ‘Vergrößerungs-Kurzbefehl’.'], ['Tippen Sie auf den Schalter ‘Vergrößerungs-Kurzbefehl’, um ihn einzuschalten.'],
    ['Tippen Sie auf ‘Dreimal auf Bildschirm tippen’.'], ['Tippen Sie schnell dreimal auf die Stelle, die Sie vergrößern möchten.']]),
  'g17-contrast': L('Schalten Sie kontrastreiche Schriftarten ein, damit Text sich vom Hintergrund abhebt.', [
    ...settings('Eingabehilfe', 'Verbesserungen der Sichtbarkeit'), ['Tippen Sie auf den Schalter ‘Schriftarten mit hohem Kontrast’, um ihn einzuschalten.', 'Buchstaben bekommen einen dunkleren Rand und heben sich ab.']]),
  'g17-talkback': L('Schalten Sie TalkBack ein, damit der Bildschirm vorgelesen wird – nachdem Sie gelernt haben, es auszuschalten.', [
    [...open('Einstellungen'), 'Mit TalkBack ändert sich die Bedienung. Lesen Sie zuerst, wie Sie es ausschalten.'], ...sub('Eingabehilfe', 'TalkBack'),
    ['Lesen Sie zuerst, wie Sie es ausschalten.'], ['Tippen Sie auf den Schalter ‘TalkBack’, um ihn einzuschalten.', 'Dann liest einmal Tippen vor und zweimal Tippen öffnet.']]),
  'g17-caption': L('Schalten Sie Live Caption für Videos und Mono-Audio für einseitiges Hören ein.', [
    ...settings('Eingabehilfe', 'Verbesserungen fürs Hören'), ['Tippen Sie auf ‘Live Caption’.'],
    ['Tippen Sie auf den Schalter ‘Live Caption verwenden’, um ihn einzuschalten.', 'Gesprochenes in Videos wird als Text gezeigt.'], BACK,
    ['Tippen Sie auf den Schalter ‘Mono-Audio’, um ihn einzuschalten.', 'Sie hören beide Seiten auch mit nur einem Ohr.']]),
  'g17-hearing': L('Schalten Sie die Hörgerätekompatibilität für klarere Anrufe ein.', [
    ...settings('Eingabehilfe', 'Verbesserungen fürs Hören', 'Hörgeräte-Unterstützung'),
    ['Tippen Sie auf den Schalter ‘Hörgerätekompatibilität’, um ihn einzuschalten.', 'Anrufe klingen mit Hörgerät klarer.'], ['Verbinden Sie Bluetooth-Hörgeräte im Bluetooth-Menü.']]),
  'g17-touch': L('Erleichtern Sie die Bedienung: Anrufe mit einmal Tippen annehmen, Haltedauer ändern und Kurzbefehl einrichten.', [
    ...settings('Eingabehilfe', 'Interaktion und Geschicklichkeit'),
    ['Tippen Sie auf den Schalter ‘Einmal-Tippen-Modus’, um ihn einzuschalten.', 'Sie nehmen Anrufe mit einmal Tippen statt Wischen an.'],
    ['Tippen Sie auf ‘Verzögerung für Berühren und Halten’.', 'Fällt Halten schwer, wählen Sie eine längere Zeit.'], ['Wählen Sie die gewünschte Zeit.'],
    ['Tippen Sie zweimal auf die Zurück-Taste.'], ['Tippen Sie auf ‘Eingabehilfe-Kurzbefehl’.', 'Eine oft genutzte Eingabehilfe schalten Sie dann mit einer Taste ein.']]),
  'g18-usage': L('Finden Sie heraus, welche Apps am meisten Akku verbrauchen.', [
    ...settings('Akku', 'Täglicher Verbrauch'), ['Sehen Sie sich die Apps mit dem höchsten Verbrauch an.', 'Verbraucht eine selten genutzte App viel, schließen oder entfernen Sie sie.']]),
  'g18-saver': L('Schalten Sie den Energiesparmodus ein, damit der Akku länger hält.', [
    ...settings('Akku'), ['Tippen Sie auf den Schalter ‘Energiesparmodus’, um ihn einzuschalten.', 'Der Akku hält länger. Manche Benachrichtigungen kommen später.', 'Sie können ihn auch über die Taste ‘Energiesparmodus’ in den Schnelleinstellungen einschalten.']]),
  'g18-storage': L('Prüfen Sie, wie viel Speicherplatz noch frei ist.', [
    ...settings('Gerätewartung', 'Speicher'), ['Prüfen Sie den freien Speicher.', 'Papierkorb leeren und doppelte Dateien löschen schafft Platz.']]),
  'g18-clean': L('Finden und löschen Sie große Dateien, die Sie nicht mehr brauchen, in Eigene Dateien.', [
    open('Eigene Dateien'), ['Tippen Sie auf ‘Speicher verwalten’.'], ['Tippen Sie auf ‘Große Dateien’.'], ['Wählen Sie nur nicht benötigte Dateien und tippen Sie auf ‘Löschen’.']]),
  'g18-care': L('Prüfen und optimieren Sie Ihr Handy mit der Gerätewartung.', [...settings('Gerätewartung'), ['Tippen Sie auf ‘Jetzt optimieren’.', 'Nicht genutzte Apps werden geschlossen und das Handy geprüft.']]),
  'g18-update': L('Suchen und installieren Sie Software-Updates auf Ihrem Galaxy.', [
    ...settings('Software-Update'), ['Tippen Sie auf ‘Herunterladen und installieren’.', 'Gibt es eine neue Version, wird sie geladen und installiert. Am besten im WLAN und beim Laden.']]),
  'g18-version': L('Finden Sie Modellname und One-UI-Version unter Einstellungen → Telefoninfo.', [
    ...settings('Telefoninfo'), ['Prüfen Sie den Modellnamen oben.'], ['Tippen Sie auf ‘Softwareinformationen’.'], ['Prüfen Sie die ‘One UI-Version’.', 'Nennen Sie sie dem Service zusammen mit dem Modellnamen.']]),
  'g19-bixby': L('Lassen Sie die Seitentaste Bixby starten und bitten Sie Bixby per Sprache um Hilfe.', [
    ...settings('Erweiterte Funktionen', 'Seitentaste'), ['Tippen Sie auf ‘Bixby aktivieren’.', 'Halten der Seitentaste startet jetzt Bixby.'],
    ['Halten Sie die Seitentaste gedrückt und sagen Sie, was Sie möchten.', 'Zum Beispiel: „Stell einen Wecker für morgen 7 Uhr.“'], ['Lassen Sie die Taste los, wenn Sie fertig gesprochen haben.']]),
  'g19-circle': L('Suchen Sie etwas auf dem Bildschirm, indem Sie es mit Circle to Search einkreisen.', [
    ['Berühren und halten Sie die Home-Taste unten auf dem Bildschirm.'], ['Zeichnen Sie mit dem Finger einen Kreis um das Gesuchte.'],
    ['Lesen Sie die Suchergebnisse unten.', '', 'Bixby Vision gibt es bei den Serien Galaxy S25, S24 und S23. Das S26 nutzt diese Methode (Circle to Search).']]),
  'g19-interpret': L('Schalten Sie in der Telefon-App die Live-Übersetzung ein und nutzen Sie sie im Gespräch.', [
    open('Telefon'), ['Tippen Sie oben rechts auf die drei Punkte.'], ['Tippen Sie auf ‘Einstellungen’.'], ['Tippen Sie auf ‘Live-Übersetzung’.'],
    ['Tippen Sie auf den Schalter ‘Live-Übersetzung’, um ihn einzuschalten.'], ['Tippen Sie während eines Anrufs auf ‘Anrufassistent’.'], ['Tippen Sie auf ‘Live-Übersetzung’.']]),
  'g19-write': L('Korrigieren Sie Rechtschreibung und Grammatik einer Nachricht mit dem Galaxy-AI-Werkzeug der Tastatur.', [
    open('Nachrichten'), ['Tippen Sie auf ein Gespräch.'], ['Schreiben Sie Ihre Nachricht.'], ['Tippen Sie oben links auf der Tastatur auf das Galaxy-AI-Symbol.'],
    ['Tippen Sie auf ‘Rechtschreibung und Grammatik’.', 'Fehler werden korrigiert. ‘Zusammenfassen’ kürzt lange Texte.']]),
  'g19-transcribe': L('Wandeln Sie eine Sprachaufnahme mit Galaxy AI im Sprachrekorder in Text um.', [
    open('Sprachrekorder'), ['Tippen Sie auf die Aufnahme, die Sie umwandeln möchten.'], AI_ICON, ['Tippen Sie auf ‘Transkribieren’.'], ['Lesen Sie den erstellten Text.']]),
  'g19-photo': L('Entfernen Sie mit Galaxy AI in der Galerie eine Person oder einen Gegenstand aus einem Foto.', [
    GALLERY, ['Tippen Sie auf das Foto, das Sie bearbeiten möchten.'], AI_ICON, ['Tippen Sie auf ‘Objektradierer’.'], ['Umfahren Sie mit dem Finger die Person oder den Gegenstand.'],
    ['Tippen Sie auf ‘Löschen’.'], ['Gefällt Ihnen das Ergebnis, tippen Sie auf ‘Speichern’.']]),
  'g19-support': L('Sehen Sie in den Einstellungen, welche Galaxy-AI-Funktionen Ihr Handy unterstützt.', [
    ...settings('Galaxy AI'), ['Sehen Sie sich die Liste der KI-Funktionen an, die Ihr Handy nutzen kann.', 'Funktionen, die nicht aufgeführt sind, werden auf diesem Modell nicht unterstützt.', 'Manche Funktionen hängen von Modell und Anbieter ab oder brauchen Internet.']]),
  'g20-smartview': L('Zeigen Sie den Handybildschirm mit Smart View auf dem Fernseher.', [
    QUICK, ['Tippen Sie auf ‘Smart View’.'], ['Tippen Sie auf den Namen des Fernsehers.', 'Am besten sind Fernseher und Handy im selben WLAN.'], ['Tippen Sie auf ‘Jetzt starten’.']]),
  'g20-pc': L('Verbinden Sie Ihr Galaxy mit Link zu Windows mit einem Windows-PC.', [
    ...settings('Verbundene Geräte', 'Link zu Windows'), ['Lesen Sie die Anweisungen auf dem Bildschirm.'], ['Öffnen Sie am Computer die angezeigte Adresse, um die Verbindung abzuschließen.']]),
  'g20-dex': L('Erfahren Sie, was Samsung DeX ist und wo die Einstellungen sind.', [...settings('Verbundene Geräte', 'Samsung DeX'), ['Lesen Sie die Informationen.']]),
  'g20-watch': L('Verbinden Sie eine Galaxy-Uhr oder Galaxy-Kopfhörer mit der App Galaxy Wearable.', [
    ['Tippen Sie auf die App ‘Galaxy Wearable’.', 'Ist sie nicht auf dem Startbildschirm, suchen Sie sie im Apps-Bildschirm.'], ['Tippen Sie auf ‘Start’.'], ['Folgen Sie den Anweisungen, um die Verbindung abzuschließen.']]),
  'g20-smartthings': L('Verbinden Sie Haushaltsgeräte mit SmartThings mit dem Handy.', [
    open('SmartThings'), ['Tippen Sie oben auf ‘+’ (Hinzufügen).'], ['Wählen Sie das Gerät aus, das Sie verbinden möchten.'], ['Folgen Sie den Anweisungen, um die Verbindung abzuschließen.']]),
  'g20-musicshare': L('Schalten Sie Music Share ein, damit Freunde Musik über Ihren Bluetooth-Lautsprecher abspielen.', [
    ...settings('Verbundene Geräte', 'Music Share'), ['Tippen Sie auf den Schalter ‘Music Share’, um ihn einzuschalten.', 'Freunde können Musik von ihrem Handy über Ihren Bluetooth-Lautsprecher abspielen.']]),
  'g21-split': L('Nutzen Sie zwei Apps gleichzeitig im geteilten Bildschirm.', [
    ['Tippen Sie unten links auf die Taste Zuletzt verwendet.'], ['Tippen Sie oben auf das kleine Symbol einer App.'], ['Tippen Sie auf ‘In geteilter Bildschirmansicht öffnen’.'], ['Wählen Sie die zweite App für die untere Hälfte.']]),
  'g21-modes': L('Schalten Sie in Modi und Routinen den Schlafmodus ein.', [
    ...settings('Modi und Routinen', 'Modi'), ['Tippen Sie auf ‘Schlafen’.'], ['Tippen Sie auf ‘Einschalten’.', 'Im Schlaf werden Benachrichtigungen leise und der Bildschirm dunkler.']]),
  'g21-aod': L('Zeigen Sie mit Always On Display eine Uhr auch bei ausgeschaltetem Bildschirm an.', [
    ...settings('Sperrbildschirm und AOD'), ['Tippen Sie auf den Schalter ‘Always On Display’, um ihn einzuschalten.', 'Die Uhr ist auch bei dunklem Bildschirm zu sehen. Das braucht etwas mehr Akku.'],
    ['Um den Uhrstil zu ändern, berühren und halten Sie den Sperrbildschirm.']]),
  'g21-wellbeing': L('Sehen Sie, wie lange Sie das Handy heute genutzt haben, und stellen Sie App-Timer ein.', [
    ...settings('Digital Wellbeing'), ['Sehen Sie sich Ihre heutige Nutzungszeit an.'], ['Tippen Sie auf ‘App-Timer’.', 'Sie können für jede App ein Tageslimit festlegen.']]),
  'g21-apps': L('Lernen Sie Samsung Health, Samsung Kids und Game Booster kennen.', [
    ['Tippen Sie auf die App ‘Samsung Health’.', 'Ist sie nicht auf dem Startbildschirm, suchen Sie sie im Apps-Bildschirm.'], ['Sehen Sie sich Ihre Schritte und Trainingsdaten an.'],
    ...settings('Apps', 'Samsung Kids'), ['Tippen Sie auf ‘Öffnen’.', 'Sie können Apps und Zeitlimits für Ihre Enkel festlegen.'], ['Tippen Sie beim Spielen unten auf das Game-Booster-Symbol.']]),
  'g21-samsung': L('Finden Sie die Apps Samsung.com und Samsung Global Goals sowie Samsung News.', [
    open('Samsung.com'), ['Hier lesen Sie Neuigkeiten zu Samsung-Produkten und bekommen Hilfe.'], HOME_BTN,
    ['Tippen Sie auf die App ‘Samsung Global Goals’.', 'Suchen Sie ‘Samsung Global Goals’ im Apps-Bildschirm.'], ['Suchen Sie Samsung News über die Suche im Apps-Bildschirm.']]),
  'g21-spen': L('Nehmen Sie den S Pen heraus, öffnen Sie sein Menü und probieren Sie PENUP auf unterstützten Ultra-Modellen.', [
    ['Drücken Sie leicht auf das Ende des S Pen unten am Handy.'], ['Tippen Sie im Menü auf die gewünschte Funktion.'], open('PENUP'), ['Schieben Sie den S Pen danach hinein, bis er einrastet.']]),
  'g22-ring': L('Was Sie prüfen sollten, wenn das Handy nicht klingelt.', [
    QUICK, ['Tippen Sie auf die Taste ‘Ton’.', 'Steht sie auf Stumm oder Vibrieren, tippen Sie darauf, um auf Ton zu wechseln.'],
    ['Ist ‘Nicht stören’ blau (an), tippen Sie darauf, um es auszuschalten.'], ['Drücken Sie seitlich die Taste Lauter, um den Ton lauter zu machen.']]),
  'g22-network': L('Was Sie prüfen sollten, wenn Anrufe oder Internet nicht mehr funktionieren.', [
    QUICK, ['Ist der ‘Flugmodus’ an, tippen Sie darauf, um ihn auszuschalten.'], ['Sind ‘Mobile Daten’ aus, tippen Sie darauf, um sie einzuschalten.'],
    ['Ist der Empfang schwach, wechseln Sie den Ort.'], ['Funktioniert es weiterhin nicht, starten Sie das Handy neu.']]),
  'g22-charge': L('Was Sie prüfen sollten, wenn Ihr Galaxy nicht lädt.', [
    ['Prüfen Sie, ob Kabel und Ladegerät fest eingesteckt sind.'], ['Ist der Anschluss nass, lassen Sie ihn vor dem Laden ganz trocknen.'],
    ...settings('Akku', 'Ladeeinstellungen'), ['Lädt es immer noch nicht, bringen Sie Handy, Ladegerät und Kabel zum Service.']]),
  'g22-hot': L('Was Sie tun können, wenn das Handy heiß wird.', [
    ['Ziehen Sie beim Laden das Ladegerät ab.'], ['Tippen Sie auf die Taste Zuletzt verwendet.'], ['Tippen Sie auf ‘Alle schließen’, um die Apps zu schließen.'],
    ['Nutzen Sie das Handy eine Weile nicht und lassen Sie es an einem kühlen Ort abkühlen.']]),
  'g22-freeze': L('Erzwingen Sie bei einem eingefrorenen Galaxy mit zwei Tasten einen Neustart.', [
    ['Halten Sie die Seitentaste und die Taste Leiser zusammen länger als 7 Sekunden gedrückt.', 'Halten Sie sie, bis der Bildschirm ausgeht.'], ['Wenn der Bildschirm aus ist, lassen Sie los und warten Sie.']]),
  'g22-water': L('Was Sie prüfen und tun sollten, wenn das Handy nass wird.', [
    ['Trocknen Sie das Handy mit einem weichen Tuch vollständig ab.'], ['Stecken Sie das Ladegerät erst ein, wenn es ganz trocken ist.'],
    ['War es Meer-, Schwimmbad- oder Seifenwasser, spülen Sie es mit klarem Wasser ab und trocknen Sie es.'], ['Wirkt etwas seltsam, bringen Sie es sofort zum Service.']]),
  'g22-members': L('Suchen Sie mit der Telefondiagnose in Samsung Members nach Problemen.', [
    ['Tippen Sie auf die App ‘Samsung Members’.', 'Ist sie nicht auf dem Startbildschirm, suchen Sie sie im Apps-Bildschirm.'], ['Tippen Sie auf ‘Support’.'], ['Tippen Sie auf ‘Telefondiagnose’.'],
    ['Tippen Sie auf ‘Alle testen’ oder auf den Punkt, den Sie prüfen möchten.']]),
  'g22-service': L('Notieren Sie Modell und Problem, bevor Sie sich an den Samsung-Service wenden.', [
    ...settings('Telefoninfo'), ['Notieren Sie die Modellnummer (zum Beispiel SM-S942N).'], ['Notieren Sie, wann und wie das Problem auftritt.'],
    ['Wenden Sie sich an den Samsung-Support Ihres Landes oder vereinbaren Sie einen Servicetermin.', 'Die Supportseite Ihres Landes finden Sie unter samsung.com/support.']]),
};
