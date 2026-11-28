// Lezioni Galaxy in italiano (bozza, non revisionata → noindex, fuori dalla sitemap).
// steps[i] corrisponde alla scheda coreana i della stessa lezione.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Le basi', life: 'Uso quotidiano', apply: 'Altre funzioni', adv: 'Avanzato e risoluzione dei problemi' };

export const CATEGORIES = {
  1: ['Accendere e spegnere il telefono', 'Tasti, ricarica, accensione e schermata di blocco'],
  2: ['Toccare, tenere premuto e scorrere', 'I gesti di base e i tasti di navigazione'],
  3: ['Testo e suoni più comodi', 'Testo più grande, luminosità, spegnimento schermo e volume'],
  4: ['Chiamare e rispondere', 'Chiamare, rispondere, vivavoce e blocco'],
  5: ['Salvare e trovare contatti', 'Nuovi contatti, ricerca, modifica e preferiti'],
  6: ['Inviare messaggi', 'Scrivere, correggere, copiare e allegare foto'],
  7: ['Notifiche e impostazioni rapide', 'Pannello notifiche, torcia, rotazione e Non disturbare'],
  8: ['Wi-Fi, dati e Bluetooth', 'Collegarsi a Internet e ad altri dispositivi'],
  9: ['Cercare su Internet e installare app', 'Browser, codici QR, download e negozi di app'],
  10: ['Scattare foto e girare video', 'Fotocamera, selfie, zoom, timer e video'],
  11: ['Ordinare foto e file', 'Galleria, modifica, ripristino e Archivio'],
  12: ['Schermata Home e strumenti', 'App, cartelle, sfondo, sveglie, calendario e note'],
  13: ['Condividere foto con la famiglia', 'Email, video e videochiamate'],
  14: ['Pagare con Samsung Wallet', 'Aprire Wallet e scegliere una carta'],
  15: ['Usare il telefono in sicurezza', 'Blocco, biometria, autorizzazioni e SOS di emergenza'],
  16: ['Passare a un nuovo telefono', 'Configurazione, account, Smart Switch e backup'],
  17: ['Vista, udito e tatto', 'Ingrandimento, contrasto, TalkBack e sottotitoli'],
  18: ['Batteria e memoria', 'Risparmio energetico, memoria, manutenzione e aggiornamenti'],
  19: ['Galaxy AI e Bixby', 'Richieste vocali e funzioni Galaxy AI'],
  20: ['Collegare a TV, PC e orologio', 'Smart View, PC, DeX, dispositivi indossabili e SmartThings'],
  21: ['Altre funzioni utili', 'Schermo diviso, modalità e routine, Always On Display'],
  22: ['Quando qualcosa non va', 'Nessun suono, nessuna rete, ricarica, calore e blocchi'],
};

export const TITLES = {
  'g01-buttons': ['tasti-laterali', 'Trovare i tasti laterali'], 'g01-charge': ['ricaricare-il-telefono', 'Ricaricare il telefono'],
  'g01-power': ['spegnere-e-riaccendere', 'Spegnere e riaccendere il telefono'], 'g01-restart': ['riavviare', 'Riavviare il telefono'],
  'g01-lock': ['bloccare-sbloccare', 'Bloccare e sbloccare lo schermo'], 'g02-tap': ['toccare', 'Toccare una volta'],
  'g02-hold': ['tenere-premuto', 'Tenere premuto'], 'g02-swipe': ['scorrere', 'Scorrere per spostarsi'],
  'g02-pinch': ['zoom-due-dita', 'Ingrandire con due dita'], 'g02-back': ['tasto-indietro', 'Tornare indietro'],
  'g02-home': ['tasto-home', 'Andare alla schermata Home'], 'g02-recent': ['app-recenti', 'Aprire le app recenti'],
  'g03-font': ['testo-piu-grande', 'Ingrandire il testo'], 'g03-zoom': ['zoom-schermo', 'Ingrandire schermo e icone'],
  'g03-easy': ['modalita-facile', 'Attivare la Modalità facile'], 'g03-bright': ['luminosita', 'Regolare la luminosità'],
  'g03-timeout': ['spegnimento-schermo', 'Cambiare dopo quanto si spegne lo schermo'], 'g03-sound': ['suoneria-vibrazione', 'Regolare volume della suoneria e vibrazione'],
  'g04-call': ['fare-una-chiamata', 'Chiamare dalla tastiera'], 'g04-answer': ['rispondere-rifiutare', 'Rispondere o rifiutare una chiamata'],
  'g04-speaker': ['vivavoce', 'Attivare il vivavoce durante una chiamata'], 'g04-missed': ['richiamare-chiamata-persa', 'Richiamare una chiamata persa'],
  'g04-log': ['registro-chiamate', 'Vedere il registro chiamate'], 'g04-block': ['bloccare-numeri', 'Bloccare i numeri indesiderati'],
  'g05-new': ['salvare-contatto', 'Salvare un nuovo contatto'], 'g05-search': ['cercare-contatto', 'Cercare un contatto per nome'],
  'g05-edit': ['modificare-numero', 'Modificare un numero'], 'g05-speed': ['chiamata-rapida', 'Aggiungere le persone che chiami spesso'],
  'g05-share': ['condividere-contatto', 'Condividere un contatto'], 'g06-send': ['inviare-rispondere-messaggi', 'Inviare e rispondere ai messaggi'],
  'g06-type': ['lettere-numeri-simboli', 'Scrivere lettere, numeri e simboli'], 'g06-fix': ['correggere-errori', 'Correggere gli errori di battitura'],
  'g06-copy': ['copiare-incollare', 'Copiare e incollare'], 'g06-photo': ['allegare-foto', 'Allegare una foto a un messaggio'],
  'g06-translate': ['tradurre-testo', 'Tradurre un testo'], 'g07-noti': ['notifiche', 'Vedere e cancellare le notifiche'],
  'g07-appnoti': ['notifiche-app', 'Regolare le notifiche delle app'], 'g07-quick': ['impostazioni-rapide', 'Aprire il pannello delle impostazioni rapide'],
  'g07-flash': ['torcia', 'Accendere la torcia'], 'g07-rotate': ['rotazione-schermo', 'Gestire la rotazione dello schermo'],
  'g07-dnd': ['non-disturbare-modalita-aereo', 'Usare Non disturbare e la Modalità aereo'], 'g08-wifi': ['connessione-wifi', 'Collegarsi a una rete Wi-Fi'],
  'g08-data': ['dati-mobili', 'Attivare e disattivare i dati mobili'], 'g08-usage': ['utilizzo-dati', 'Vedere l’utilizzo dei dati'],
  'g08-bt': ['auricolari-bluetooth', 'Collegare auricolari Bluetooth'], 'g08-hotspot': ['hotspot-mobile', 'Usare l’hotspot mobile'],
  'g08-location': ['posizione-nfc', 'Trovare le impostazioni di posizione e NFC'], 'g09-search': ['cercare-samsung-internet', 'Cercare con Samsung Internet'],
  'g09-bookmark': ['salvare-pagine', 'Salvare le pagine che visiti spesso'], 'g09-qr': ['aprire-codice-qr', 'Aprire un codice QR'],
  'g09-files': ['file-scaricati', 'Trovare i file scaricati'], 'g09-stores': ['play-store-galaxy-store', 'Usare Play Store e Galaxy Store'],
  'g09-install': ['installare-aggiornare-eliminare-app', 'Installare, aggiornare ed eliminare app'], 'g09-google': ['app-google', 'Trovare le app Google e dell’operatore'],
  'g10-open': ['aprire-fotocamera', 'Aprire la fotocamera'], 'g10-focus': ['mettere-a-fuoco', 'Mettere a fuoco'],
  'g10-switch': ['cambiare-fotocamera', 'Passare dalla fotocamera posteriore a quella anteriore'], 'g10-selfie': ['selfie', 'Scattare un selfie'],
  'g10-zoom': ['zoom-foto', 'Fare zoom mentre scatti'], 'g10-timer': ['timer-fotocamera', 'Usare il timer della fotocamera'],
  'g10-modes': ['ritratto-notte', 'Provare le modalità Ritratto e Notte'], 'g10-video': ['registrare-video', 'Registrare un video'],
  'g10-capture': ['screenshot-registrazione-schermo', 'Fare uno screenshot o registrare lo schermo'], 'g11-latest': ['ultima-foto', 'Trovare la foto appena scattata'],
  'g11-album': ['creare-album', 'Creare un album'], 'g11-edit': ['ritagliare-schiarire', 'Ritagliare e schiarire una foto'],
  'g11-text': ['copiare-testo-foto', 'Copiare il testo da una foto'], 'g11-multi': ['condividere-piu-foto', 'Condividere più foto'],
  'g11-restore': ['recuperare-foto', 'Recuperare foto eliminate'], 'g11-docs': ['documenti-archivio', 'Trovare documenti in Archivio'],
  'g11-quickshare': ['quick-share', 'Inviare file con Quick Share'], 'g12-addapp': ['app-schermata-home', 'Mettere un’app nella schermata Home'],
  'g12-folder': ['cartelle-widget', 'Creare cartelle e widget'], 'g12-wallpaper': ['sfondo-tema-blocco', 'Cambiare sfondo, tema e schermata di blocco'],
  'g12-alarm': ['sveglia-timer', 'Impostare una sveglia e un timer'], 'g12-calendar': ['appuntamento-calendario', 'Aggiungere un appuntamento al calendario'],
  'g12-reminder': ['promemoria', 'Ricevere promemoria per le cose da fare'], 'g12-note': ['samsung-notes', 'Usare Samsung Notes'],
  'g12-recorder': ['registratore-vocale', 'Registrare la propria voce'], 'g12-tools': ['meteo-calcolatrice-radio', 'Usare meteo, calcolatrice e radio'],
  'x13-gmail': ['foto-via-gmail', 'Inviare foto via email con Gmail'], 'x13-video': ['video-alla-famiglia', 'Inviare un video alla famiglia'],
  'x13-meet': ['videochiamata-google-meet', 'Fare una videochiamata con Google Meet'], 'g14-open': ['aprire-samsung-wallet', 'Aprire Samsung Wallet'],
  'g14-add': ['aggiungere-carta', 'Vedere la schermata per aggiungere una carta'], 'g14-pay': ['scegliere-carta', 'Scegliere la carta per pagare'],
  'g15-pin': ['creare-pin', 'Creare un PIN'], 'g15-bio': ['impronte-volto', 'Registrare impronte e volto'],
  'g15-perm': ['autorizzazioni-posizione', 'Controllare autorizzazioni delle app e posizione'], 'g15-folder': ['cartella-protetta-samsung-pass', 'Scoprire Cartella protetta e Samsung Pass'],
  'g15-medical': ['info-mediche-contatti-emergenza', 'Aggiungere info mediche e contatti di emergenza'], 'g15-sos': ['sos-emergenza', 'Controllare l’SOS di emergenza'],
  'g15-find': ['samsung-find', 'Trovare il telefono con Samsung Find'], 'g16-setup': ['prima-configurazione', 'Configurare il telefono la prima volta'],
  'g16-sim': ['sim-esim', 'Conoscere SIM ed eSIM'], 'g16-account': ['account-samsung-google', 'Controllare gli account Samsung e Google'],
  'g16-switch': ['smart-switch', 'Trasferire contatti e foto con Smart Switch'], 'g16-backup': ['controllare-backup', 'Controllare il backup'],
  'g16-restore': ['ripristinare-backup', 'Ripristinare un backup'], 'g17-magnify': ['ingrandimento', 'Ingrandire una parte dello schermo'],
  'g17-contrast': ['caratteri-alto-contrasto', 'Aumentare il contrasto del testo'], 'g17-talkback': ['talkback', 'Far leggere lo schermo con TalkBack'],
  'g17-caption': ['suono-sottotitoli', 'Regolare suono e sottotitoli'], 'g17-hearing': ['apparecchi-acustici', 'Controllare la compatibilità con apparecchi acustici'],
  'g17-touch': ['impostazioni-tocco', 'Regolare il tocco e la scorciatoia di accessibilità'], 'g18-usage': ['app-batteria', 'Trovare le app che consumano più batteria'],
  'g18-saver': ['risparmio-energetico', 'Attivare il risparmio energetico'], 'g18-storage': ['controllare-memoria', 'Controllare la memoria'],
  'g18-clean': ['file-grandi', 'Eliminare i file grandi'], 'g18-care': ['manutenzione-dispositivo', 'Controllare il telefono con Manutenzione dispositivo'],
  'g18-update': ['aggiornamento-software', 'Aggiornare il software'], 'g18-version': ['modello-versione-one-ui', 'Controllare modello e versione One UI'],
  'g19-bixby': ['chiedere-a-bixby', 'Chiedere a Bixby con la voce'], 'g19-circle': ['cerchia-e-cerca', 'Cercare ciò che vedi sullo schermo'],
  'g19-interpret': ['traduzione-chiamate', 'Scoprire la traduzione delle chiamate e l’Interprete'], 'g19-write': ['migliorare-riassumere-testo', 'Migliorare e riassumere un testo'],
  'g19-transcribe': ['trascrivere-registrazioni', 'Trasformare le registrazioni in testo'], 'g19-photo': ['modificare-foto-ia', 'Modificare le foto con l’IA'],
  'g19-support': ['funzioni-per-modello', 'Vedere le funzioni per modello'], 'g20-smartview': ['smart-view', 'Mostrare lo schermo sulla TV con Smart View'],
  'g20-pc': ['collegare-pc', 'Collegare a un PC'], 'g20-dex': ['samsung-dex', 'Scoprire Samsung DeX'],
  'g20-watch': ['orologio-auricolari', 'Collegare orologio e auricolari'], 'g20-smartthings': ['smartthings', 'Collegare elettrodomestici con SmartThings'],
  'g20-musicshare': ['music-share', 'Scoprire Music Share'], 'g21-split': ['schermo-diviso', 'Usare due app con lo schermo diviso'],
  'g21-modes': ['modalita-routine', 'Configurare Modalità e routine'], 'g21-aod': ['always-on-display', 'Mostrare l’orologio a schermo spento'],
  'g21-wellbeing': ['benessere-digitale', 'Vedere il tempo di utilizzo con Benessere digitale'], 'g21-apps': ['samsung-health-kids-game-booster', 'Scoprire Samsung Health, Samsung Kids e Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Trovare Samsung News, Samsung.com e Global Goals'], 'g21-spen': ['s-pen', 'Usare la S Pen sui modelli compatibili'],
  'g22-ring': ['nessuna-suoneria', 'Quando la suoneria non suona'], 'g22-network': ['niente-chiamate-internet', 'Quando chiamate o Internet non funzionano'],
  'g22-charge': ['non-si-ricarica', 'Quando il telefono non si ricarica'], 'g22-hot': ['telefono-caldo', 'Quando il telefono si scalda'],
  'g22-freeze': ['schermo-bloccato', 'Quando lo schermo si blocca'], 'g22-water': ['telefono-bagnato', 'Cosa controllare se il telefono si bagna'],
  'g22-members': ['diagnostica-samsung-members', 'Fare una diagnosi con Samsung Members'], 'g22-service': ['prima-dell-assistenza', 'Annotare modello e problema prima dell’assistenza'],
};

const PHONE = open('Telefono');
const CONTACTS = open('Rubrica');
const MESSAGES = open('Messaggi');
const CAMERA = open('Fotocamera');
const GALLERY = open('Galleria');
const SHUTTER = ['Tocca il pulsante bianco di scatto.'];
const REAL = 'Questa lezione cambia impostazioni reali o ha effetti reali. Leggi prima tutti i passi, poi falli sul telefono.';
const AI_ICON = ['Tocca l’icona di Galaxy AI.'];
const CHECK = 'Nuova lezione scritta per il sito internazionale. Le schermate delle app Google cambiano spesso; controlla su un telefono vero.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Scopri dove sono i tasti Volume su, Volume giù e il tasto laterale di un Galaxy e a cosa servono.', [
    ['Guarda il lato destro del telefono.', 'Ci sono tre tasti. Dall’alto: Volume su, Volume giù e il tasto laterale.'],
    ['Premi il tasto laterale nell’immagine.', 'È il tasto in basso. Serve ad accendere e spegnere il telefono o lo schermo.'],
    ['Premi il tasto Volume giù nell’immagine.', 'È il tasto centrale. Abbassa il volume.'],
    ['Premi il tasto Volume su nell’immagine.', 'È il tasto in alto. Alza il volume.']]),
  'g01-charge': L('Ricarica il tuo Galaxy passo dopo passo: collega il caricabatterie, il cavo e controlla il simbolo di ricarica.', [
    ['Collega il caricabatterie alla presa di corrente.'], ['Collega l’estremità del cavo alla porta in basso del telefono.', 'Se la porta è bagnata, lasciala asciugare del tutto.'],
    ['Controlla che compaia il simbolo di ricarica sullo schermo.'], ['Stacca il cavo quando la ricarica è finita.']]),
  'g01-power': L('Spegni un Galaxy con il tasto laterale e Volume giù, poi riaccendilo.', [
    ['Tieni premuti insieme il tasto laterale e il tasto Volume giù.', 'Premili insieme e aspetta che compaia il menu.'],
    ['Tocca Spegni.'], ['Tocca di nuovo Spegni.', 'Quando lo schermo si spegne, passa al passo successivo per riaccenderlo.'],
    ['Tieni premuto il tasto laterale per accendere il telefono.', 'Tienilo qualche secondo finché compare il logo Samsung. Poi sblocca lo schermo.']]),
  'g01-restart': L('Riavvia un Galaxy quando è lento o si comporta in modo strano.', [
    ['Tieni premuti insieme il tasto laterale e il tasto Volume giù.', 'Tienili finché compare il menu di spegnimento.'], ['Tocca Riavvia.'], ['Tocca di nuovo Riavvia.'],
    ['Aspetta che il telefono si spenga e si riaccenda.', '', 'Se lo schermo è bloccato e il menu non compare, tieni premuti i due tasti per più di 7 secondi.']]),
  'g01-lock': L('Blocca lo schermo con il tasto laterale e sbloccalo scorrendo verso l’alto.', [
    ['Premi brevemente una volta il tasto laterale.', 'Lo schermo si spegne e si blocca da solo.'],
    ['Premi di nuovo brevemente il tasto laterale.', 'Si accende la schermata di blocco. Funziona anche toccare due volte lo schermo.'],
    ['Scorri lo schermo verso l’alto.', 'Se hai impostato un PIN o un’impronta, usali per sbloccare.']]),
  'g02-tap': L('Esercitati nel gesto più semplice: toccare una volta per aprire un’app.', [
    ['Tocca leggermente una volta Galleria con la punta del dito.', 'Non premere forte. Un tocco leggero apre l’app.'], HOME_BTN]),
  'g02-hold': L('Esercitati a tenere premuto per aprire il menu di un’app.', [
    ['Tieni premuto Galleria per 2 secondi.', 'Non alzare il dito finché compare un menu.'], ['Controlla che sia comparso un menu.', 'Tenendo premuto vedi cosa puoi fare con l’app.'],
    ['Tocca il tasto Indietro per chiudere il menu.']]),
  'g02-swipe': L('Scorri per cambiare pagina nella schermata Home e aprire la schermata delle app.', [
    ['Scorri lo schermo verso sinistra.', 'Passi alla pagina successiva della schermata Home.'], ['Scorri dal basso verso l’alto nella schermata Home.', 'Si apre la schermata con tutte le app.'],
    ['Scorri verso il basso nella schermata delle app.', 'Torni alla schermata Home.']]),
  'g02-pinch': L('Allarga due dita per ingrandire una foto e avvicinale per rimpicciolirla.', [
    open('Galleria'), ['Tocca la foto che vuoi vedere.'], ['Appoggia due dita sulla foto e allargale.', 'Allarga pollice e indice per vederla più grande.'], ['Avvicina le due dita.', 'La foto torna piccola.']]),
  'g02-back': L('Usa il tasto Indietro per tornare alla schermata precedente.', [
    ...settings('Schermo'),
    ['Tocca il tasto Indietro in basso a destra.', 'Torni alla schermata precedente (Impostazioni).', 'Puoi cambiare l’ordine dei tasti in Impostazioni → Schermo → Barra di navigazione.']]),
  'g02-home': L('Torna alla schermata Home da qualsiasi app con il tasto Home.', [
    open('Impostazioni'), HOME_BTN,
    ['Controlla che compaia la schermata Home.', 'Da qualsiasi app, il tasto Home ti porta qui.', 'Se non vedi i tasti, scorri un po’ verso l’alto dal bordo inferiore.']]),
  'g02-recent': L('Apri le app recenti per cambiare app o chiuderle tutte.', [
    ['Tocca il tasto App recenti in basso a sinistra.', 'Le app usate da poco compaiono come schede.'], ['Tocca l’app che vuoi riusare.', 'Scorri di lato per vedere altre app.'],
    ['Tocca di nuovo il tasto App recenti.'], ['Tocca ‘Chiudi tutte’.', 'Tutte le app aperte vengono chiuse.']]),
  'g03-font': L('Ingrandisci il testo e mettilo in grassetto in Impostazioni → Schermo → Dimensione e stile carattere.', [
    ...settings('Schermo', 'Dimensione e stile carattere'), ['Trascina il cerchio della barra della dimensione verso destra.', 'Più è a destra, più il testo è grande.'],
    ['Tocca l’interruttore ‘Carattere grassetto’ per attivarlo.', 'Il testo in grassetto si legge meglio.'], ['Controlla che il testo sia più grande.']]),
  'g03-zoom': L('Ingrandisci icone e pulsanti con lo Zoom schermo in Impostazioni → Schermo.', [
    ...settings('Schermo', 'Zoom schermo'), ['Trascina il cerchio della barra verso destra.', 'Più è a destra, più icone e pulsanti sono grandi.'], ['Controlla che icone e pulsanti siano più grandi.']]),
  'g03-easy': L('Attiva la Modalità facile per una schermata Home più semplice, con testo e icone grandi.', [
    ...settings('Schermo', 'Modalità facile'), ['Tocca l’interruttore ‘Modalità facile’ per attivarlo.', 'Testo e icone della schermata Home diventano più grandi.'],
    ['Controlla che testo e icone della schermata Home siano più grandi.']]),
  'g03-bright': L('Regola la luminosità dello schermo dal pannello delle impostazioni rapide.', [
    ['Scorri verso il basso dall’angolo in alto a destra.', 'Si apre il pannello delle impostazioni rapide.'], ['Trascina la barra della luminosità verso destra.', 'Verso sinistra lo schermo diventa più scuro.'],
    ['Scorri verso l’alto per chiudere il pannello.']]),
  'g03-timeout': L('Cambia dopo quanto si spegne lo schermo in Impostazioni → Schermo → Spegnimento schermo.', [
    ...settings('Schermo', 'Spegnimento schermo'), ['Tocca ‘5 minuti’.', 'Scegli il tempo che preferisci. Più è lungo, più batteria consuma.']]),
  'g03-sound': L('Alza il volume della suoneria e fai vibrare il telefono mentre squilla.', [
    ...settings('Suoni e vibrazione', 'Volume'), ['Trascina la barra Suoneria verso destra.', 'Più è a destra, più forte squilla.'], BACK,
    ['Tocca ‘Suono’.', 'Per la sola vibrazione, tocca ‘Vibrazione’.'], ['Tocca l’interruttore ‘Vibra durante lo squillo’ per attivarlo.', 'Suono e vibrazione avvisano insieme.']]),
  'g04-call': L('Chiama con un Galaxy digitando il numero sulla tastiera.', [
    PHONE, ['Tocca ‘Tastiera’ in basso.'], ['Tocca le cifre del numero in ordine.', 'Se sbagli, cancella con il tasto in basso a destra.'], ['Tocca il pulsante verde di chiamata.'],
    ['Alla fine, tocca il pulsante rosso per chiudere.']]),
  'g04-answer': L('Rispondi trascinando il pulsante verde, rifiuta con quello rosso o con un messaggio.', [
    ['Tieni premuto il pulsante verde Rispondi e trascinalo verso l’alto.', 'Portalo fuori dal cerchio per rispondere.'],
    ['Per rifiutare, tieni premuto il pulsante rosso e trascinalo verso l’alto.'],
    ['Per rifiutare con un messaggio, trascina verso l’alto ‘Invia messaggio’ in basso.', 'Scegli un messaggio e viene inviato a chi chiama.', 'In Impostazioni → Accessibilità → Interazione e destrezza puoi rispondere con un solo tocco.']]),
  'g04-speaker': L('Attiva il vivavoce durante una chiamata per parlare senza tenere il telefono all’orecchio.', [
    ['Fai o ricevi una chiamata.'], ['Tocca ‘Altoparlante’.', 'Senti e parli con il telefono lontano dall’orecchio.'], ['Per disattivarlo, tocca di nuovo ‘Altoparlante’.']]),
  'g04-missed': L('Richiama una chiamata persa dall’elenco Recenti dell’app Telefono.', [
    PHONE, ['Tocca ‘Recenti’ in basso.'], ['Trascina verso destra il numero perso.', 'Trascinando a destra si chiama subito.', 'Se non chiama, tocca il numero e poi il pulsante di chiamata.']]),
  'g04-log': L('Vedi chi ha chiamato e quando nell’elenco Recenti dell’app Telefono.', [PHONE, ['Tocca ‘Recenti’ in basso.'], ['Tocca un nome per vedere i dettagli.', 'Vedi quando avete parlato.']]),
  'g04-block': L('Blocca un numero indesiderato nelle impostazioni dell’app Telefono.', [
    PHONE, ['Tocca i tre puntini (Altre opzioni) in alto a destra.'], ['Tocca ‘Impostazioni’.'], ['Tocca ‘Blocca numeri’.'],
    ['Tocca ‘Aggiungi numero di telefono’.', '', 'La schermata può essere un po’ diversa a seconda della versione.'], ['Scrivi il numero da bloccare.'], ['Tocca ‘Salva’.']]),
  'g05-new': L('Salva un nuovo contatto con nome e numero nell’app Rubrica.', [
    CONTACTS, ['Tocca ‘+’ (Crea contatto) in alto a destra.'], ['Tocca il campo Nome.'], ['Scrivi il nome.'], ['Tocca il campo Telefono.'], ['Scrivi il numero di telefono.'], ['Tocca ‘Salva’.']]),
  'g05-search': L('Trova subito un contatto cercando il nome.', [CONTACTS, ['Tocca la lente (Cerca) in alto.'], ['Scrivi il nome che cerchi.'], ['Tocca il nome trovato.']]),
  'g05-edit': L('Cambia il numero di telefono salvato di un contatto.', [
    CONTACTS, ['Tocca il nome della persona.'], ['Tocca ‘Modifica’ in basso.'], ['Tocca il campo Telefono.'], ['Cancella il vecchio numero e scrivi quello nuovo.'], ['Tocca ‘Salva’.']]),
  'g05-speed': L('Imposta la chiamata rapida per chiamare tenendo premuta una cifra della tastiera.', [
    PHONE, ['Tocca ‘Tastiera’ in basso.'], ['Tocca i tre puntini (Altre opzioni) in alto a destra.'], ['Tocca ‘Numeri di chiamata rapida’.'], ['Tocca la cifra ‘2’.', 'Scegli una cifra libera.'],
    ['Scegli la persona dalla rubrica.'], ['Tieni premuto il ‘2’ sulla tastiera per chiamarla.', 'Prova a tenere premuto il ‘2’ nell’immagine di esercizio.']]),
  'g05-share': L('Invia i dati di un contatto a un’altra persona con un messaggio.', [
    CONTACTS, ['Tocca il nome della persona da condividere.'], ['Tocca ‘Condividi’ in basso.'], ['Tocca ‘Messaggi’.'], ['Scegli il destinatario.'], ['Tocca il pulsante Invia.']]),
  'g06-send': L('Invia un SMS e rispondi a un messaggio nell’app Messaggi.', [
    MESSAGES, ['Tocca la conversazione a cui vuoi rispondere.', 'Per un nuovo messaggio, tocca Avvia chat in basso a destra.'], ['Tocca il campo del messaggio in basso.'],
    ['Scrivi il messaggio.'], ['Tocca il pulsante Invia a destra.']]),
  'g06-type': L('Scrivi lettere, numeri e simboli e cambia lingua sulla Tastiera Samsung.', [
    ['Scrivi ‘Ciao’ sulla tastiera.'], ['Per numeri o simboli, tocca ‘!#1’.'], ['Per tornare alle lettere, tocca ‘ABC’ nello stesso punto.'],
    ['Per scrivere in un’altra lingua, scorri la barra spaziatrice a sinistra o a destra.', 'Compaiono solo le lingue aggiunte nelle impostazioni della tastiera.']]),
  'g06-fix': L('Correggi gli errori con il tasto Cancella e spostando il cursore.', [
    ['Tocca una volta il tasto Cancella (⌫).', 'Si cancella la lettera subito prima del cursore.'], ['Scrivi la lettera giusta.'],
    ['Per correggere una lettera in mezzo, tocca quel punto.', 'Il cursore (la lineetta che lampeggia) si sposta lì.']]),
  'g06-copy': L('Copia un testo e incollalo altrove.', [
    ['Tieni premuto il testo da copiare.'], ['Tocca ‘Copia’.'], ['Tieni premuto il campo dove incollare.'], ['Tocca ‘Incolla’.']]),
  'g06-photo': L('Allega una foto della Galleria a un SMS.', [
    MESSAGES, ['Tocca la conversazione a cui inviare la foto.'], ['Tocca ‘+’ a sinistra del campo del messaggio.'], ['Tocca ‘Galleria’.'], ['Tocca la foto da inviare.'], ['Tocca il pulsante Invia.']]),
  'g06-translate': L('Traduci una conversazione in Messaggi con lo strumento Galaxy AI della tastiera.', [
    MESSAGES, ['Tocca la conversazione da tradurre.'], ['Tocca il campo del messaggio in basso.'], ['Tocca l’icona di Galaxy AI in alto a sinistra della tastiera.'],
    ['Tocca ‘Traduzione chat’.'], ['Scegli le lingue nel riquadro in alto.']]),
  'g07-noti': L('Apri il pannello delle notifiche, leggine una e cancellale tutte.', [
    ['Scorri verso il basso dall’angolo in alto a sinistra.', 'Si apre il pannello delle notifiche.'], ['Tocca la notifica da leggere.', 'Si apre la sua app.'],
    ['Scorri verso il basso dall’angolo in alto a sinistra.', 'Si apre il pannello delle notifiche.'], ['Tocca ‘Cancella’.', 'Tutte le notifiche vengono rimosse.']]),
  'g07-appnoti': L('Disattiva le notifiche delle app che non ti servono.', [
    ...settings('Notifiche', 'Notifiche delle app'), ['Tocca l’interruttore di un’app per disattivarne le notifiche.', 'Lascia attive quelle delle app di messaggi importanti.']]),
  'g07-quick': L('Apri il pannello delle impostazioni rapide e scopri i suoi pulsanti.', [
    QUICK, ['Guarda i pulsanti del pannello.', 'I pulsanti blu sono attivi. Tocca un pulsante per attivarlo o disattivarlo.'],
    ['Tieni premuto il pulsante ‘Wi-Fi’.', 'Tenendolo premuto si aprono le impostazioni.'], ['Scorri verso l’alto per chiudere il pannello.']]),
  'g07-flash': L('Accendi e spegni la torcia dal pannello delle impostazioni rapide.', [QUICK, ['Tocca ‘Torcia’.', 'Si accende la luce sul retro del telefono.'], ['Per spegnerla, tocca di nuovo ‘Torcia’.']]),
  'g07-rotate': L('Scegli se lo schermo ruota quando giri il telefono di lato.', [
    QUICK, ['Tocca ‘Rotazione automatica’.', 'Se è attiva, lo schermo ruota con il telefono. Se no, resta in verticale.'], ['Gira il telefono di lato per provare.']]),
  'g07-dnd': L('Silenzia chiamate e avvisi con Non disturbare e usa la Modalità aereo in aereo.', [
    QUICK, ['Tocca ‘Non disturbare’.', 'Chiamate e notifiche non suonano. Tocca di nuovo per disattivare.'], ['Tocca di nuovo ‘Non disturbare’ per disattivarlo.'],
    ['Tocca ‘Modalità aereo’.', 'Chiamate e Internet si interrompono. Usala in aereo.'], ['Dopo il volo, toccala di nuovo per disattivarla.']]),
  'g08-wifi': L('Collega il tuo Galaxy a una rete Wi-Fi in Impostazioni → Connessioni → Wi-Fi.', [
    ...settings('Connessioni', 'Wi-Fi'), ['Tocca l’interruttore ‘Wi-Fi’ per attivarlo.', 'Compare l’elenco delle reti vicine.'], ['Tocca il nome della rete Wi-Fi.', 'Il lucchetto indica che serve una password.'],
    ['Scrivi la password del Wi-Fi.', 'Spesso è scritta sul retro del router.'], ['Tocca ‘Connetti’.']]),
  'g08-data': L('Attiva o disattiva i dati mobili in Impostazioni → Connessioni → Utilizzo dati.', [
    ...settings('Connessioni', 'Utilizzo dati'), ['Tocca l’interruttore ‘Dati mobili’ per attivarlo.', 'Se è spento, Internet funziona solo con il Wi-Fi.']]),
  'g08-usage': L('Vedi quanti dati mobili hai usato questo mese e quali app ne usano di più.', [
    ...settings('Connessioni', 'Utilizzo dati'), ['Tocca ‘Utilizzo dati mobili’.'],
    ['Guarda quanto hai usato questo mese.', 'Le app che consumano di più sono in alto. L’app del tuo operatore mostra quanto ti resta.']]),
  'g08-bt': L('Abbina auricolari Bluetooth al tuo Galaxy.', [
    ['Accendi gli auricolari in modalità di abbinamento.'], ...settings('Connessioni', 'Bluetooth'), ['Tocca l’interruttore ‘Bluetooth’ per attivarlo.'],
    ['Tocca il nome dei tuoi auricolari nell’elenco.'], ['Tocca ‘Connetti’.']]),
  'g08-hotspot': L('Condividi la connessione Internet del telefono con un altro dispositivo usando l’hotspot mobile.', [
    ...settings('Connessioni', 'Router Wi-Fi e tethering', 'Router Wi-Fi'), ['Tocca l’interruttore ‘Router Wi-Fi’ per attivarlo.', '', 'Può costare di più. Controlla prima la tua offerta.'],
    ['Sull’altro dispositivo, scegli il nome del tuo telefono nell’elenco Wi-Fi.']]),
  'g08-location': L('Trova gli interruttori di Posizione e NFC nelle Impostazioni.', [
    ...settings('Posizione'), ['Tocca l’interruttore ‘Posizione’ per attivarlo.', 'Così le app di mappe e meteo sanno dove sei.'], BACK, item('Connessioni'),
    ['Tocca l’interruttore ‘NFC e pagamenti contactless’ per attivarlo.', 'Attivalo per pagare o usare biglietti con il telefono.']]),
  'g09-search': L('Cerca sul web con il browser Samsung Internet.', [
    [...open('Samsung Internet'), 'A seconda della versione, l’app si chiama ‘Samsung Internet’ o ‘Browser’.'], ['Tocca la barra degli indirizzi in alto.'], ['Scrivi cosa cerchi.'],
    ['Tocca il tasto Vai (↵) in basso a destra della tastiera.'], ['Tocca il risultato da leggere.']]),
  'g09-bookmark': L('Salva nei preferiti le pagine che visiti spesso e aprile più tardi.', [
    open('Samsung Internet'), ['Tocca la stella (☆) a destra della barra degli indirizzi.', 'La pagina aperta viene salvata nei preferiti.'],
    ['Per aprirla più tardi, tocca la stella (Preferiti) in basso.'], ['Tocca la pagina salvata.']]),
  'g09-qr': L('Apri un codice QR con la fotocamera del Galaxy.', [
    CAMERA, ['Inquadra il codice QR con la fotocamera.', 'In modalità Foto, tieni il codice al centro dello schermo.'],
    ['Tocca il collegamento giallo che compare.', 'Attenzione ai codici QR di posti che non conosci.']]),
  'g09-files': L('Trova i file scaricati nell’app Archivio.', [open('Archivio'), ['Tocca ‘Download’.'], ['Tocca il file da aprire.']]),
  'g09-stores': L('Scopri la differenza tra Google Play Store e Samsung Galaxy Store.', [
    open('Play Store'), ['È il negozio di app di Google, dove trovi e scarichi app.', 'Serve un account Google.'], HOME_BTN, open('Galaxy Store'),
    ['È il negozio di app di Samsung, con tante app e temi Samsung.']]),
  'g09-install': L('Installa un’app dal Play Store, aggiorna le app nel Galaxy Store e disinstalla un’app.', [
    open('Play Store'), ['Tocca la barra di ricerca in alto.'], ['Scrivi il nome dell’app.'], ['Tocca ‘Installa’ accanto al nome dell’app.'],
    ['Tocca l’app ‘Galaxy Store’.', 'Ora aggiorniamo le app.'], ['Tocca ‘Menu’ in basso.'], ['Tocca ‘Aggiornamenti’.'], ['Tocca ‘Aggiorna tutto’.'],
    ['Nella schermata Home, tieni premuta l’app da rimuovere.'], ['Tocca ‘Disinstalla’.'], ['Tocca ‘OK’.', 'Puoi reinstallare dal negozio un’app rimossa.']]),
  'g09-google': L('Trova le app Google e quella del tuo operatore con la ricerca della schermata delle app.', [
    ['Scorri verso l’alto nella schermata Home per aprire la schermata delle app.'], ['Tocca ‘Cerca’ in alto.'],
    ['Scrivi il nome dell’app.', 'Prova Google, YouTube o il nome del tuo operatore.'], ['Tocca l’app trovata.']]),
  'g10-open': L('Apri l’app Fotocamera e trova il pulsante di scatto.', [CAMERA, ['Controlla che compaia la schermata della fotocamera.', 'Il cerchio bianco in basso al centro è il pulsante di scatto.']]),
  'g10-focus': L('Tocca lo schermo per mettere a fuoco prima di scattare.', [
    CAMERA, ['Tocca il punto che vuoi nitido.', 'Quando compare un cerchio giallo, è a fuoco.'], ['Tocca il pulsante bianco di scatto.', 'Se le foto sono sfocate, pulisci l’obiettivo con un panno morbido.']]),
  'g10-switch': L('Passa dalla fotocamera posteriore a quella anteriore (selfie).', [
    CAMERA, ['Tocca le frecce in cerchio in basso a destra.', 'Anche scorrere in su o in giù cambia fotocamera.'], ['Controlla che la fotocamera anteriore mostri il tuo viso.']]),
  'g10-selfie': L('Scatta un selfie con la fotocamera anteriore.', [
    CAMERA, ['Tocca le frecce in cerchio in basso a destra.'], ['Tieni il telefono con il viso al centro dello schermo.'], SHUTTER]),
  'g10-zoom': L('Fai zoom sulle cose lontane mentre scatti.', [
    CAMERA, ['Tocca il numero ‘3’ in basso.', 'Ciò che è lontano sembra 3 volte più grande. Tocca ‘1x’ per tornare.', 'I numeri cambiano a seconda del modello (gli Ultra ingrandiscono di più).'], SHUTTER]),
  'g10-timer': L('Usa il timer perché la foto venga scattata qualche secondo dopo.', [
    CAMERA, ['Tocca l’icona Controlli rapidi (⌄) in alto.'], ['Tocca l’icona del timer.'], ['Tocca ‘5 secondi’.'], SHUTTER, ['La foto viene scattata dopo il conto alla rovescia.']]),
  'g10-modes': L('Prova la modalità Ritratto per sfocare lo sfondo e Notte per i luoghi bui.', [
    CAMERA, ['Tocca ‘Ritratto’ in basso.', 'La persona è nitida e lo sfondo sfocato.'], SHUTTER, ['Tocca ‘Altro’ in basso.'],
    ['Tocca ‘Notte’.', 'Al buio le foto vengono chiare senza flash. Tieni fermo il telefono durante lo scatto.']]),
  'g10-video': L('Registra un video con la fotocamera del Galaxy.', [CAMERA, ['Tocca ‘Video’ in basso.'], ['Tocca il pulsante rosso di registrazione.'], ['Quando hai finito, tocca il pulsante Stop.']]),
  'g10-capture': L('Fai uno screenshot con due tasti e registra lo schermo dalle impostazioni rapide.', [
    ['Premi brevemente insieme il tasto laterale e Volume giù.', 'Con un clic lo schermo viene salvato come immagine. La trovi in Galleria.'], QUICK,
    ['Tocca ‘Registrazione schermo’.', 'Se non lo vedi, scorri di nuovo il pannello verso il basso.'], ['Tocca ‘Avvia registrazione’.'], ['Per finire, tocca l’icona Stop in alto.']]),
  'g11-latest': L('Trova in Galleria la foto che hai appena scattato.', [
    GALLERY, ['Tocca la prima foto (in alto a sinistra).', 'La foto più recente è sempre la prima.'], ['Scorri a sinistra per vedere la successiva.']]),
  'g11-album': L('Crea un nuovo album in Galleria per raccogliere le foto.', [
    GALLERY, ['Tocca ‘Album’ in basso.'], ['Tocca ‘+’ (Aggiungi) in alto.'], ['Tocca ‘Album’.'], ['Scrivi un nome per l’album.'], ['Tocca ‘Crea’.', 'Poi scegli le foto da inserire.']]),
  'g11-edit': L('Ritaglia una foto e schiariscila in Galleria.', [
    GALLERY, ['Tocca la foto da modificare.'], ['Tocca la matita (Modifica) in basso.'], ['Trascina un angolo della foto verso l’interno per ritagliarla.'], ['Tocca ‘Tono’ in basso.'],
    ['Trascina la barra della luminosità verso destra.'], ['Tocca ‘Salva’.']]),
  'g11-text': L('Copia il testo di una foto in Galleria e incollalo in un messaggio o una nota.', [
    GALLERY, ['Tocca una foto con del testo.'], ['Tocca l’icona gialla ‘T’.', 'Compare solo se nella foto c’è del testo.'], ['Tieni premuto il testo da copiare.'],
    ['Tocca ‘Copia’.', 'Puoi incollarlo in un messaggio o una nota.']]),
  'g11-multi': L('Seleziona più foto in Galleria e condividile in una volta.', [
    GALLERY, ['Tieni premuta una delle foto da inviare.'], ['Tocca altre foto da inviare insieme.', 'Un segno nel cerchio indica che è selezionata.'], ['Tocca ‘Condividi’ in basso.'],
    ['Tocca l’app con cui inviare (per esempio Messaggi).'], ['Scegli il destinatario e invia.']]),
  'g11-restore': L('Recupera le foto eliminate dal Cestino della Galleria.', [
    GALLERY, ['Tocca ‘Menu’ in basso.'], ['Tocca ‘Cestino’.'], ['Tocca la foto da recuperare.', 'Le foto eliminate restano per un po’ nel Cestino.'], ['Tocca ‘Ripristina’.']]),
  'g11-docs': L('Trova i documenti salvati sul telefono con l’app Archivio.', [open('Archivio'), ['Tocca ‘Documenti’.'], ['Tocca il documento da aprire.']]),
  'g11-quickshare': L('Invia una foto a un telefono vicino con Quick Share.', [
    GALLERY, ['Tocca la foto da inviare.'], ['Tocca ‘Condividi’ in basso.'],
    ['Tocca ‘Quick Share’.', '', 'Anche l’altro telefono deve avere Quick Share attivo (Impostazioni → Dispositivi connessi → Quick Share).'],
    ['Tocca il nome del telefono che riceve.'], ['Sul telefono che riceve, tocca ‘Accetta’.']]),
  'g12-addapp': L('Metti nella schermata Home un’app della schermata delle app.', [
    ['Scorri verso l’alto nella schermata Home per aprire la schermata delle app.'], ['Tieni premuta l’app che vuoi.'], ['Tocca ‘Aggiungi a Home’.']]),
  'g12-folder': L('Raccogli le app in una cartella e aggiungi un widget meteo alla schermata Home.', [
    ['Tieni premuta un’app della schermata Home e trascinala sopra un’altra.', 'Si crea una cartella con le due app.'], ['Tocca il nome della cartella e scrivi un nome.'],
    ['Tieni premuto uno spazio vuoto della schermata Home.'], ['Tocca ‘Widget’.'], ['Tocca ‘Meteo’.'], ['Tocca ‘Aggiungi’.']]),
  'g12-wallpaper': L('Usa una tua foto come sfondo della schermata di blocco o della Home.', [
    ...settings('Sfondo e stile'), ['Tocca ‘Cambia sfondi’.'], ['Per una tua foto, tocca ‘Galleria’.'], ['Tocca la foto da usare.'], ['Scegli schermata di blocco, Home o entrambe.'], ['Tocca ‘Fine’.']]),
  'g12-alarm': L('Imposta una sveglia e avvia un timer nell’app Orologio.', [
    open('Orologio'), ['Tocca ‘Sveglia’ in basso.'], ['Tocca ‘+’ in basso a destra.'], ['Scorri i numeri in su o in giù per impostare l’ora.'], ['Tocca ‘Salva’.'],
    ['Per il timer, tocca ‘Timer’ in basso.'], ['Imposta il tempo e tocca ‘Avvia’.']]),
  'g12-calendar': L('Aggiungi un appuntamento nell’app Calendario.', [
    open('Calendario'), ['Tocca ‘+’ (Aggiungi evento) in basso a destra.'], ['Tocca il campo Titolo.'], ['Scrivi il nome dell’appuntamento.'], ['Tocca ‘Inizio’ per scegliere data e ora.'], ['Tocca ‘Salva’.']]),
  'g12-reminder': L('Ricevi un avviso per una cosa da fare aggiungendo un promemoria a un evento.', [
    open('Calendario'), ['Tocca ‘+’ (Aggiungi evento) in basso a destra.'], ['Scrivi la cosa da fare come titolo.'], ['Tocca ‘Promemoria’.'],
    ['Tocca quando vuoi l’avviso (per esempio 10 minuti prima).'], ['Tocca ‘Salva’.', 'L’avviso arriva all’ora scelta.']]),
  'g12-note': L('Scrivi una nota veloce in Samsung Notes.', [
    open('Samsung Notes'), ['Tocca ‘+’ in basso a destra.'], ['Scrivi ciò che vuoi annotare.'], ['Quando hai finito, tocca il tasto Indietro.', 'La nota si salva da sola.']]),
  'g12-recorder': L('Registra la tua voce con l’app Registratore vocale.', [
    open('Registratore vocale'), ['Tocca il pulsante Registra.'], ['Parla verso il telefono.'], ['Tocca ‘Stop’.', 'La registrazione viene salvata nell’elenco.']]),
  'g12-tools': L('Guarda il meteo, usa la calcolatrice e ascolta la radio.', [
    open('Meteo'), ['Guarda il tempo e la temperatura di oggi.', 'La posizione deve essere attiva per vedere il meteo dove sei.'], HOME_BTN, open('Calcolatrice'),
    ['Tocca i numeri, + e = per calcolare.'], ['Tocca l’app ‘Radio’.', 'La radio ha bisogno di auricolari con filo, che fanno da antenna.', 'Alcuni modelli e operatori non hanno l’app Radio.']]),
  'x13-gmail': L('Invia foto alla famiglia via email con l’app Gmail.', [
    open('Gmail'), ['Tocca ‘Scrivi’ in basso a destra.'], ['Scrivi l’indirizzo email della persona nel campo ‘A’.'], ['Tocca la graffetta (Allega) in alto.'],
    ['Tocca la foto da inviare.', 'Puoi toccarne più di una.'], ['Scrivi un oggetto breve.'], ['Tocca il pulsante Invia (aeroplanino) in alto.']], { check: CHECK }),
  'x13-video': L('Invia un video della Galleria a un familiare con l’app Messaggi.', [
    GALLERY, ['Tocca il video da inviare.'], ['Tocca ‘Condividi’ in basso.'], ['Tocca ‘Messaggi’.'], ['Scegli il destinatario.'],
    ['Tocca il pulsante Invia.', '', 'I video lunghi possono essere troppo grandi per un messaggio. In quel caso usa Quick Share o l’email.']], { check: CHECK }),
  'x13-meet': L('Fai una videochiamata alla famiglia con l’app Google Meet.', [
    open('Meet'), ['Tocca ‘Nuova’.'], ['Tocca il nome della persona da chiamare.', 'Anche lei deve avere Google Meet o un account Google.'], ['Tocca il pulsante della videochiamata.'],
    ['Alla fine, tocca il pulsante rosso per chiudere.']], { check: CHECK }),
  'g14-open': L('Apri Samsung Wallet e guarda carte e menu.', [
    ['Tocca l’app ‘Samsung Wallet’.', 'Si apre anche trascinando verso l’alto l’immagine della carta in basso.'],
    ['Guarda le carte salvate e i menu.', 'La prima volta non ci sono ancora carte. La prossima lezione mostra la schermata per aggiungerle.']]),
  'g14-add': L('Guarda la schermata per aggiungere una carta di pagamento a Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['Tocca ‘+’ (Aggiungi) in alto.'], ['Guarda cosa puoi aggiungere.', 'Carte di pagamento, biglietti dei trasporti e altro, a seconda del paese.'],
    ['Tocca ‘Carta di pagamento’.'], ['Leggi le istruzioni per aggiungere una carta.']]),
  'g14-pay': L('Scegli una carta in Samsung Wallet e paga avvicinando il telefono al POS.', [
    [...open('Samsung Wallet'), REAL], ['Tocca la carta con cui pagare.'], ['Usa l’impronta o inserisci il PIN di pagamento.'], ['Avvicina il retro del telefono al POS.']]),
  'g15-pin': L('Proteggi il telefono con un blocco schermo a PIN.', [
    [...open('Impostazioni'), REAL], ...sub('Schermata di blocco e AOD', 'Blocco schermo e biometria'), ['Tocca ‘Tipo di blocco schermo’.'], ['Tocca ‘PIN’.'],
    ['Scrivi almeno 4 cifre facili da ricordare per te.', 'Evita cifre facili da indovinare, come il compleanno o il numero di telefono.'], ['Riscrivi le stesse cifre per confermare.']]),
  'g15-bio': L('Registra la tua impronta e, se vuoi, il tuo volto per sbloccare.', [
    [...open('Impostazioni'), REAL], ...sub('Sicurezza e privacy', 'Blocco schermo e biometria'), ['Tocca ‘Impronte digitali’.'], ['Inserisci il PIN.', 'Se non hai un PIN, crealo prima.'],
    ['Appoggia e solleva il dito sul simbolo dell’impronta in basso, più volte.', 'Usa un dito che usi spesso e spostalo un po’ ogni volta.'],
    ['Per aggiungere anche il volto, tocca ‘Riconoscimento del volto’ nella stessa schermata.']]),
  'g15-perm': L('Vedi quali app hanno usato posizione, fotocamera o microfono e togli gli accessi inutili.', [
    ...settings('Sicurezza e privacy', 'Autorizzazioni usate nelle ultime 24 ore'), ['Guarda quali app hanno usato posizione, fotocamera o microfono.'], ['Tocca ‘Posizione’.'],
    ['Se c’è un’app che non conosci, cambiala in ‘Non consentire’.']]),
  'g15-folder': L('Trova Cartella protetta e Samsung Pass nelle Impostazioni.', [
    ...settings('Sicurezza e privacy', 'Altre impostazioni di sicurezza'), ['Tocca ‘Cartella protetta’.'], ['Leggi le informazioni sulla Cartella protetta.'], BACK,
    ['Tocca ‘Password, passkey e compilazione automatica’.', 'Qui trovi Samsung Pass. Ti aiuta ad accedere con l’impronta.']]),
  'g15-medical': L('Aggiungi informazioni mediche e contatti di emergenza utili in caso di emergenza.', [
    ...settings('Sicurezza ed emergenza', 'Informazioni mediche'), ['Scrivi nome, gruppo sanguigno, medicine e allergie.'], BACK, ['Tocca ‘Contatti di emergenza’.'], ['Aggiungi i tuoi familiari.']]),
  'g15-sos': L('Scopri come funziona l’SOS di emergenza senza fare chiamate.', [
    [...open('Impostazioni'), 'Premere davvero i tasti chiama i soccorsi. In questa lezione guarda solo lo schermo.'], ...sub('Sicurezza ed emergenza', 'SOS di emergenza'),
    ['Leggi quante volte premere il tasto laterale per chiamare.', 'Premendo il tasto laterale le volte indicate, si chiama il numero impostato.']]),
  'g15-find': L('Attiva l’impostazione che permette di trovare il telefono con Samsung Find se lo perdi.', [
    ...settings('Sicurezza e privacy', 'Protezione dispositivo smarrito', 'Trova il mio dispositivo'),
    ['Tocca l’interruttore ‘Consenti di trovare questo telefono’ per attivarlo.', 'Devi aver effettuato l’accesso all’account Samsung.'],
    ['Se perdi il telefono, apri smartthingsfind.samsung.com da un altro dispositivo.']]),
  'g16-setup': L('Configura un nuovo Galaxy per la prima volta.', [
    ['Tieni premuto il tasto laterale per accendere il telefono.'], ['Controlla la lingua e tocca ‘Avvia’.'], ['Scegli una rete Wi-Fi e collegati.'], ['Per il resto, segui le istruzioni e tocca ‘Avanti’.']]),
  'g16-sim': L('Scopri cosa sono la SIM e l’eSIM e vedi il tuo numero in Gestione SIM.', [
    ['La SIM (Nano-SIM) è una piccola scheda che ti dà l’operatore.'], ['L’eSIM è una SIM scaricata nel telefono, senza scheda.', '', 'eSIM e doppio numero dipendono da modello e operatore.'],
    ...settings('Connessioni', 'Gestione SIM'), ['Controlla che compaiano il tuo numero e l’operatore.']]),
  'g16-account': L('Controlla che il telefono abbia un account Samsung e un account Google.', [
    ...settings('Account e backup', 'Gestisci account'),
    ['Controlla che ci siano un account Samsung e un account Google.', 'Servono per backup, installare app e trovare il telefono. Annota nome utente e password.']]),
  'g16-switch': L('Trasferisci contatti, foto e altro su un nuovo Galaxy con Smart Switch.', [
    ...settings('Account e backup', 'Trasferisci dati dal vecchio dispositivo'), ['Sul nuovo telefono, scegli ‘Ricevi dati’.'], ['Metti i due telefoni vicini e segui le istruzioni.']]),
  'g16-backup': L('Controlla quando è stato fatto l’ultimo backup su Samsung Cloud.', [...settings('Account e backup', 'Samsung Cloud'), ['Guarda la data dell’ultimo backup.']]),
  'g16-restore': L('Ripristina i dati da un backup Samsung Cloud.', [
    ...settings('Account e backup', 'Samsung Cloud'), ['Tocca ‘Ripristina dati’.'], ['Scegli il dispositivo e i contenuti.'], ['Tocca ‘Ripristina’.']]),
  'g17-magnify': L('Attiva la scorciatoia di ingrandimento e ingrandisci una parte dello schermo toccando tre volte.', [
    ...settings('Accessibilità', 'Miglioramenti visibilità', 'Ingrandimento'), ['Tocca ‘Scorciatoia ingrandimento’.'], ['Tocca l’interruttore ‘Scorciatoia ingrandimento’ per attivarlo.'],
    ['Tocca ‘Tocca lo schermo tre volte’.'], ['Tocca velocemente tre volte il punto da ingrandire.']]),
  'g17-contrast': L('Attiva i caratteri ad alto contrasto perché il testo risalti sullo sfondo.', [
    ...settings('Accessibilità', 'Miglioramenti visibilità'), ['Tocca l’interruttore ‘Caratteri ad alto contrasto’ per attivarlo.', 'Le lettere hanno un bordo più scuro e risaltano.']]),
  'g17-talkback': L('Attiva TalkBack per far leggere lo schermo ad alta voce, dopo aver imparato a disattivarlo.', [
    [...open('Impostazioni'), 'Con TalkBack cambia il modo di toccare. Leggi prima come disattivarlo.'], ...sub('Accessibilità', 'TalkBack'),
    ['Leggi prima come disattivarlo.'], ['Tocca l’interruttore ‘TalkBack’ per attivarlo.', 'Poi un tocco legge l’elemento e due tocchi lo aprono.']]),
  'g17-caption': L('Attiva Sottotitoli automatici per i video e Audio mono per sentire con un orecchio.', [
    ...settings('Accessibilità', 'Miglioramenti udito'), ['Tocca ‘Sottotitoli automatici’.'],
    ['Tocca l’interruttore ‘Usa Sottotitoli automatici’ per attivarlo.', 'Il parlato dei video appare come testo.'], BACK,
    ['Tocca l’interruttore ‘Audio mono’ per attivarlo.', 'Senti entrambi i lati anche con un solo orecchio.']]),
  'g17-hearing': L('Attiva la compatibilità con apparecchi acustici per sentire meglio le chiamate.', [
    ...settings('Accessibilità', 'Miglioramenti udito', 'Supporto apparecchi acustici'),
    ['Tocca l’interruttore ‘Compatibilità apparecchi acustici’ per attivarlo.', 'Le chiamate sono più chiare con l’apparecchio acustico.'], ['Collega gli apparecchi acustici Bluetooth dal menu Bluetooth.']]),
  'g17-touch': L('Rendi più facile il tocco: rispondi con un tocco, cambia il ritardo e crea una scorciatoia di accessibilità.', [
    ...settings('Accessibilità', 'Interazione e destrezza'),
    ['Tocca l’interruttore ‘Modalità tocco singolo’ per attivarlo.', 'Rispondi alle chiamate con un tocco invece di scorrere.'],
    ['Tocca ‘Ritardo tocco prolungato’.', 'Se tenere premuto è difficile, allunga il tempo.'], ['Scegli il tempo che preferisci.'], ['Tocca due volte il tasto Indietro.'],
    ['Tocca ‘Scorciatoia accessibilità’.', 'Una funzione di accessibilità usata spesso si attiva con un pulsante.']]),
  'g18-usage': L('Scopri quali app consumano più batteria.', [
    ...settings('Batteria', 'Utilizzo giornaliero'), ['Guarda le app che hanno consumato di più.', 'Se un’app poco usata consuma molto, chiudila o rimuovila.']]),
  'g18-saver': L('Attiva il risparmio energetico perché la batteria duri di più.', [
    ...settings('Batteria'), ['Tocca l’interruttore ‘Risparmio energetico’ per attivarlo.', 'La batteria dura di più. Alcune notifiche possono arrivare più tardi.', 'Puoi attivarlo anche con il pulsante ‘Risparmio energetico’ delle impostazioni rapide.']]),
  'g18-storage': L('Controlla quanto spazio di memoria resta.', [
    ...settings('Manutenzione dispositivo', 'Memoria archiviazione'), ['Guarda lo spazio rimasto.', 'Svuotare il cestino ed eliminare i file doppi libera spazio.']]),
  'g18-clean': L('Trova ed elimina in Archivio i file grandi che non servono più.', [
    open('Archivio'), ['Tocca ‘Gestisci memoria’.'], ['Tocca ‘File di grandi dimensioni’.'], ['Seleziona solo i file inutili e tocca ‘Elimina’.']]),
  'g18-care': L('Controlla e ottimizza il telefono con Manutenzione dispositivo.', [...settings('Manutenzione dispositivo'), ['Tocca ‘Ottimizza ora’.', 'Chiude le app non usate e controlla il telefono.']]),
  'g18-update': L('Cerca e installa gli aggiornamenti software del tuo Galaxy.', [
    ...settings('Aggiornamento software'), ['Tocca ‘Scarica e installa’.', 'Se c’è una nuova versione, viene scaricata e installata. Fallo con il Wi-Fi e in carica.']]),
  'g18-version': L('Trova modello e versione One UI in Impostazioni → Info sul telefono.', [
    ...settings('Info sul telefono'), ['Guarda il nome del modello in alto.'], ['Tocca ‘Informazioni software’.'], ['Guarda la ‘Versione One UI’.', 'Comunicala all’assistenza insieme al modello.']]),
  'g19-bixby': L('Fai avviare Bixby dal tasto laterale e chiedigli le cose con la voce.', [
    ...settings('Funzioni avanzate', 'Tasto laterale'), ['Tocca ‘Avvia Bixby’.', 'Ora tenendo premuto il tasto laterale si apre Bixby.'],
    ['Tieni premuto il tasto laterale e di’ cosa vuoi.', 'Per esempio: “Metti una sveglia alle 7 di domani mattina.”'], ['Lascia il tasto quando hai finito di parlare.']]),
  'g19-circle': L('Cerca qualcosa sullo schermo cerchiandolo con Cerchia e cerca.', [
    ['Tieni premuto il tasto Home in basso sullo schermo.'], ['Disegna un cerchio con il dito intorno a ciò che cerchi.'],
    ['Leggi i risultati in basso.', '', 'Bixby Vision è disponibile sulle serie Galaxy S25, S24 e S23. Il S26 usa questo metodo (Cerchia e cerca).']]),
  'g19-interpret': L('Attiva la Traduzione dal vivo nell’app Telefono e usala durante una chiamata.', [
    open('Telefono'), ['Tocca i tre puntini in alto a destra.'], ['Tocca ‘Impostazioni’.'], ['Tocca ‘Traduzione dal vivo’.'], ['Tocca l’interruttore ‘Traduzione dal vivo’ per attivarlo.'],
    ['Durante una chiamata, tocca ‘Assistente chiamate’.'], ['Tocca ‘Traduzione dal vivo’.']]),
  'g19-write': L('Correggi ortografia e grammatica di un messaggio con lo strumento Galaxy AI della tastiera.', [
    open('Messaggi'), ['Tocca una conversazione.'], ['Scrivi il messaggio.'], ['Tocca l’icona di Galaxy AI in alto a sinistra della tastiera.'],
    ['Tocca ‘Ortografia e grammatica’.', 'Corregge gli errori. ‘Riassumi’ accorcia i testi lunghi.']]),
  'g19-transcribe': L('Trasforma una registrazione vocale in testo con Galaxy AI nel Registratore vocale.', [
    open('Registratore vocale'), ['Tocca la registrazione da trasformare.'], AI_ICON, ['Tocca ‘Trascrivi’.'], ['Leggi il testo creato.']]),
  'g19-photo': L('Togli una persona o un oggetto da una foto con Galaxy AI in Galleria.', [
    GALLERY, ['Tocca la foto da modificare.'], AI_ICON, ['Tocca ‘Gomma oggetti’.'], ['Contorna con il dito la persona o l’oggetto da togliere.'], ['Tocca ‘Cancella’.'], ['Se il risultato ti piace, tocca ‘Salva’.']]),
  'g19-support': L('Vedi nelle Impostazioni quali funzioni Galaxy AI supporta il tuo telefono.', [
    ...settings('Galaxy AI'), ['Guarda l’elenco delle funzioni IA disponibili sul tuo telefono.', 'Le funzioni non in elenco non sono supportate su questo modello.', 'Alcune funzioni dipendono da modello e operatore, o richiedono Internet.']]),
  'g20-smartview': L('Mostra lo schermo del telefono su una TV con Smart View.', [
    QUICK, ['Tocca ‘Smart View’.'], ['Tocca il nome della TV.', 'Funziona meglio se TV e telefono sono sulla stessa rete Wi-Fi.'], ['Tocca ‘Avvia ora’.']]),
  'g20-pc': L('Collega il tuo Galaxy a un PC Windows con Collegamento a Windows.', [
    ...settings('Dispositivi connessi', 'Collegamento a Windows'), ['Leggi le istruzioni sullo schermo.'], ['Sul computer, apri l’indirizzo indicato per completare il collegamento.']]),
  'g20-dex': L('Scopri cos’è Samsung DeX e dove sono le sue impostazioni.', [...settings('Dispositivi connessi', 'Samsung DeX'), ['Leggi le informazioni.']]),
  'g20-watch': L('Collega un orologio o auricolari Galaxy con l’app Galaxy Wearable.', [
    ['Tocca l’app ‘Galaxy Wearable’.', 'Se non è nella schermata Home, cercala nella schermata delle app.'], ['Tocca ‘Avvia’.'], ['Segui le istruzioni per completare il collegamento.']]),
  'g20-smartthings': L('Collega gli elettrodomestici al telefono con SmartThings.', [
    open('SmartThings'), ['Tocca ‘+’ (Aggiungi) in alto.'], ['Scegli l’elettrodomestico da collegare.'], ['Segui le istruzioni per completare il collegamento.']]),
  'g20-musicshare': L('Attiva Music Share perché gli amici facciano suonare la musica sul tuo altoparlante Bluetooth.', [
    ...settings('Dispositivi connessi', 'Music Share'), ['Tocca l’interruttore ‘Music Share’ per attivarlo.', 'Gli amici possono riprodurre musica dal loro telefono sul tuo altoparlante Bluetooth.']]),
  'g21-split': L('Usa due app insieme con lo schermo diviso.', [
    ['Tocca il tasto App recenti in basso a sinistra.'], ['Tocca la piccola icona in alto su un’app.'], ['Tocca ‘Apri in visualizzazione schermo diviso’.'], ['Scegli la seconda app per la metà inferiore.']]),
  'g21-modes': L('Attiva la modalità Sonno in Modalità e routine.', [
    ...settings('Modalità e routine', 'Modalità'), ['Tocca ‘Sonno’.'], ['Tocca ‘Attiva’.', 'Mentre dormi le notifiche tacciono e lo schermo si scurisce.']]),
  'g21-aod': L('Mostra l’orologio anche a schermo spento con Always On Display.', [
    ...settings('Schermata di blocco e AOD'), ['Tocca l’interruttore ‘Always On Display’ per attivarlo.', 'Vedi l’orologio a schermo spento. Consuma un po’ più di batteria.'],
    ['Per cambiare lo stile dell’orologio, tieni premuta la schermata di blocco.']]),
  'g21-wellbeing': L('Vedi quanto hai usato il telefono oggi e imposta timer per le app.', [
    ...settings('Benessere digitale e controllo genitori'), ['Guarda quanto tempo hai usato il telefono oggi.'], ['Tocca ‘Timer app’.', 'Puoi impostare un limite giornaliero per ogni app.']]),
  'g21-apps': L('Scopri Samsung Health, Samsung Kids e Game Booster.', [
    ['Tocca l’app ‘Samsung Health’.', 'Se non è nella schermata Home, cercala nella schermata delle app.'], ['Guarda i tuoi passi e gli esercizi.'],
    ...settings('Applicazioni', 'Samsung Kids'), ['Tocca ‘Apri’.', 'Puoi scegliere app e tempi di utilizzo per i nipoti.'], ['Mentre giochi, tocca l’icona di Game Booster in basso.']]),
  'g21-samsung': L('Trova le app Samsung.com e Samsung Global Goals, e Samsung News.', [
    open('Samsung.com'), ['Qui leggi le novità dei prodotti Samsung e chiedi assistenza.'], HOME_BTN,
    ['Tocca l’app ‘Samsung Global Goals’.', 'Cerca ‘Samsung Global Goals’ nella schermata delle app.'], ['Cerca Samsung News con la ricerca della schermata delle app.']]),
  'g21-spen': L('Estrai la S Pen, apri il suo menu e prova PENUP sui modelli Ultra compatibili.', [
    ['Premi leggermente l’estremità della S Pen, in basso sul telefono.'], ['Tocca la funzione che vuoi nel menu.'], open('PENUP'), ['Alla fine, reinserisci la S Pen finché scatta.']]),
  'g22-ring': L('Cosa controllare quando il telefono non squilla.', [
    QUICK, ['Tocca il pulsante ‘Suono’.', 'Se è su Silenzioso o Vibrazione, toccalo per passare a Suono.'], ['Se ‘Non disturbare’ è blu (attivo), toccalo per disattivarlo.'],
    ['Premi il tasto Volume su di lato per alzare il volume.']]),
  'g22-network': L('Cosa controllare quando chiamate o Internet smettono di funzionare.', [
    QUICK, ['Se la ‘Modalità aereo’ è attiva, toccala per disattivarla.'], ['Se i ‘Dati mobili’ sono spenti, toccali per attivarli.'], ['Se il segnale è debole, prova a spostarti.'],
    ['Se ancora non funziona, riavvia il telefono.']]),
  'g22-charge': L('Cosa controllare quando il tuo Galaxy non si ricarica.', [
    ['Controlla che cavo e caricabatterie siano ben inseriti.'], ['Se la porta è bagnata, lasciala asciugare del tutto prima di ricaricare.'],
    ...settings('Batteria', 'Impostazioni ricarica'), ['Se ancora non si ricarica, porta telefono, caricabatterie e cavo all’assistenza.']]),
  'g22-hot': L('Cosa fare quando il telefono si scalda.', [
    ['Se è in carica, stacca il caricabatterie.'], ['Tocca il tasto App recenti.'], ['Tocca ‘Chiudi tutte’ per chiudere le app.'], ['Smetti di usarlo per un po’ e lascialo raffreddare in un posto fresco.']]),
  'g22-freeze': L('Forza il riavvio di un Galaxy bloccato con due tasti.', [
    ['Tieni premuti insieme il tasto laterale e Volume giù per più di 7 secondi.', 'Tienili finché lo schermo si spegne.'], ['Quando lo schermo si spegne, lascia i tasti e aspetta.']]),
  'g22-water': L('Cosa controllare e fare se il telefono si bagna.', [
    ['Asciugalo completamente con un panno morbido.'], ['Non collegare il caricabatterie finché non è del tutto asciutto.'],
    ['Se era acqua di mare, di piscina o saponata, sciacqualo con acqua pulita e poi asciugalo.'], ['Se qualcosa non va, portalo subito all’assistenza.']]),
  'g22-members': L('Cerca problemi con la Diagnostica del telefono di Samsung Members.', [
    ['Tocca l’app ‘Samsung Members’.', 'Se non è nella schermata Home, cercala nella schermata delle app.'], ['Tocca ‘Supporto’.'], ['Tocca ‘Diagnostica telefono’.'],
    ['Tocca ‘Prova tutto’ o la voce da controllare.']]),
  'g22-service': L('Annota modello e problema prima di contattare l’assistenza Samsung.', [
    ...settings('Info sul telefono'), ['Annota il numero di modello (per esempio SM-S942N).'], ['Annota quando e come succede il problema.'],
    ['Contatta l’assistenza Samsung del tuo paese o prenota un centro assistenza.', 'Trovi la pagina di assistenza del tuo paese su samsung.com/support.']]),
};
