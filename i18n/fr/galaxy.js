// Leçons Galaxy en français (brouillon, non relu → noindex, hors sitemap).
// steps[i] correspond à la carte coréenne i de la même leçon.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Les bases', life: 'Au quotidien', apply: 'Plus de fonctions', adv: 'Avancé et dépannage' };

export const CATEGORIES = {
  1: ['Allumer et éteindre le téléphone', 'Touches, charge, alimentation et écran de verrouillage'],
  2: ['Toucher, maintenir et balayer', 'Les gestes de base et les touches de navigation'],
  3: ['Texte et son plus confortables', 'Texte plus grand, luminosité, mise en veille et volume'],
  4: ['Appeler et répondre', 'Appeler, répondre, haut-parleur et blocage'],
  5: ['Enregistrer et trouver des contacts', 'Nouveaux contacts, recherche, modification et favoris'],
  6: ['Envoyer des messages', 'Écrire, corriger, copier et joindre des photos'],
  7: ['Notifications et paramètres rapides', 'Volet des notifications, lampe torche, rotation et Ne pas déranger'],
  8: ['Wi-Fi, données et Bluetooth', 'Se connecter à Internet et à d’autres appareils'],
  9: ['Chercher sur Internet et installer des applis', 'Navigateur, QR codes, téléchargements et boutiques'],
  10: ['Prendre des photos et des vidéos', 'Appareil photo, selfies, zoom, minuteur et vidéo'],
  11: ['Ranger photos et fichiers', 'Galerie, retouche, récupération et Mes fichiers'],
  12: ['Écran d’accueil et outils', 'Applis, dossiers, fond d’écran, alarmes, agenda et notes'],
  13: ['Partager des photos en famille', 'E-mail, vidéos et appels vidéo'],
  14: ['Payer avec Samsung Wallet', 'Ouvrir Wallet et choisir une carte'],
  15: ['Utiliser son téléphone en sécurité', 'Verrouillage, biométrie, autorisations et SOS d’urgence'],
  16: ['Passer à un nouveau téléphone', 'Configuration, comptes, Smart Switch et sauvegarde'],
  17: ['Vue, ouïe et toucher', 'Agrandissement, contraste, TalkBack et sous-titres'],
  18: ['Batterie et stockage', 'Économie d’énergie, stockage, maintenance et mises à jour'],
  19: ['Galaxy AI et Bixby', 'Demandes vocales et fonctions Galaxy AI'],
  20: ['Connecter à la TV, au PC et à la montre', 'Smart View, PC, DeX, objets connectés et SmartThings'],
  21: ['Autres fonctions utiles', 'Écran partagé, modes et routines, Always On Display'],
  22: ['Quand quelque chose ne va pas', 'Pas de son, pas de réseau, charge, chaleur et blocage'],
};

export const TITLES = {
  'g01-buttons': ['touches-laterales', 'Trouver les touches latérales'], 'g01-charge': ['charger-le-telephone', 'Charger le téléphone'],
  'g01-power': ['eteindre-et-rallumer', 'Éteindre et rallumer le téléphone'], 'g01-restart': ['redemarrer', 'Redémarrer le téléphone'],
  'g01-lock': ['verrouiller-deverrouiller', 'Verrouiller et déverrouiller l’écran'], 'g02-tap': ['toucher', 'Toucher une fois'],
  'g02-hold': ['maintenir-appuye', 'Maintenir appuyé'], 'g02-swipe': ['balayer', 'Balayer pour se déplacer'],
  'g02-pinch': ['zoom-deux-doigts', 'Agrandir avec deux doigts'], 'g02-back': ['touche-retour', 'Revenir en arrière'],
  'g02-home': ['touche-accueil', 'Aller à l’écran d’accueil'], 'g02-recent': ['applis-recentes', 'Ouvrir les applis récentes'],
  'g03-font': ['texte-plus-grand', 'Agrandir le texte'], 'g03-zoom': ['zoom-ecran', 'Agrandir l’écran et les icônes'],
  'g03-easy': ['mode-facile', 'Activer le Mode facile'], 'g03-bright': ['luminosite', 'Régler la luminosité'],
  'g03-timeout': ['mise-en-veille-ecran', 'Changer le délai de mise en veille'], 'g03-sound': ['sonnerie-et-vibration', 'Régler le volume de la sonnerie et la vibration'],
  'g04-call': ['passer-un-appel', 'Appeler avec le clavier'], 'g04-answer': ['repondre-ou-refuser', 'Répondre ou refuser un appel'],
  'g04-speaker': ['haut-parleur', 'Activer le haut-parleur pendant un appel'], 'g04-missed': ['rappeler-appel-manque', 'Rappeler un appel manqué'],
  'g04-log': ['journal-appels', 'Voir le journal des appels'], 'g04-block': ['bloquer-numeros', 'Bloquer les numéros indésirables'],
  'g05-new': ['enregistrer-contact', 'Enregistrer un nouveau contact'], 'g05-search': ['chercher-contact', 'Chercher un contact par son nom'],
  'g05-edit': ['modifier-numero', 'Modifier un numéro'], 'g05-speed': ['numerotation-rapide', 'Ajouter les personnes appelées souvent'],
  'g05-share': ['partager-contact', 'Partager un contact'], 'g06-send': ['envoyer-repondre-messages', 'Envoyer et répondre à des messages'],
  'g06-type': ['lettres-chiffres-symboles', 'Saisir lettres, chiffres et symboles'], 'g06-fix': ['corriger-fautes', 'Corriger les fautes de frappe'],
  'g06-copy': ['copier-coller', 'Copier et coller'], 'g06-photo': ['joindre-photo', 'Joindre une photo à un message'],
  'g06-translate': ['traduire-texte', 'Traduire un texte'], 'g07-noti': ['notifications', 'Voir et effacer les notifications'],
  'g07-appnoti': ['notifications-applis', 'Régler les notifications des applis'], 'g07-quick': ['parametres-rapides', 'Ouvrir le volet des paramètres rapides'],
  'g07-flash': ['lampe-torche', 'Allumer la lampe torche'], 'g07-rotate': ['rotation-ecran', 'Gérer la rotation de l’écran'],
  'g07-dnd': ['ne-pas-deranger-mode-avion', 'Utiliser Ne pas déranger et le mode Avion'], 'g08-wifi': ['connexion-wifi', 'Se connecter à un Wi-Fi'],
  'g08-data': ['donnees-mobiles', 'Activer et désactiver les données mobiles'], 'g08-usage': ['utilisation-donnees', 'Voir l’utilisation des données'],
  'g08-bt': ['ecouteurs-bluetooth', 'Connecter des écouteurs Bluetooth'], 'g08-hotspot': ['point-acces-mobile', 'Utiliser le point d’accès mobile'],
  'g08-location': ['localisation-nfc', 'Trouver les réglages de localisation et NFC'], 'g09-search': ['chercher-samsung-internet', 'Chercher avec Samsung Internet'],
  'g09-bookmark': ['enregistrer-pages', 'Enregistrer les pages visitées souvent'], 'g09-qr': ['ouvrir-qr-code', 'Ouvrir un QR code'],
  'g09-files': ['fichiers-telecharges', 'Trouver les fichiers téléchargés'], 'g09-stores': ['play-store-galaxy-store', 'Utiliser le Play Store et le Galaxy Store'],
  'g09-install': ['installer-mettre-a-jour-supprimer', 'Installer, mettre à jour et supprimer des applis'], 'g09-google': ['applis-google', 'Trouver les applis Google et de l’opérateur'],
  'g10-open': ['ouvrir-appareil-photo', 'Ouvrir l’appareil photo'], 'g10-focus': ['mise-au-point', 'Faire la mise au point'],
  'g10-switch': ['changer-de-camera', 'Passer de la caméra arrière à l’avant'], 'g10-selfie': ['selfie', 'Prendre un selfie'],
  'g10-zoom': ['zoomer', 'Zoomer en prenant une photo'], 'g10-timer': ['minuteur-photo', 'Utiliser le minuteur de l’appareil photo'],
  'g10-modes': ['portrait-et-nuit', 'Essayer les modes Portrait et Nuit'], 'g10-video': ['filmer-video', 'Filmer une vidéo'],
  'g10-capture': ['capture-enregistrement-ecran', 'Faire une capture ou enregistrer l’écran'], 'g11-latest': ['derniere-photo', 'Trouver la photo qu’on vient de prendre'],
  'g11-album': ['creer-album', 'Créer un album'], 'g11-edit': ['recadrer-eclaircir', 'Recadrer et éclaircir une photo'],
  'g11-text': ['copier-texte-photo', 'Copier le texte d’une photo'], 'g11-multi': ['partager-plusieurs-photos', 'Partager plusieurs photos'],
  'g11-restore': ['recuperer-photos', 'Récupérer des photos supprimées'], 'g11-docs': ['documents-mes-fichiers', 'Trouver des documents dans Mes fichiers'],
  'g11-quickshare': ['quick-share', 'Envoyer des fichiers avec Quick Share'], 'g12-addapp': ['appli-ecran-accueil', 'Mettre une appli sur l’écran d’accueil'],
  'g12-folder': ['dossiers-widgets', 'Créer des dossiers et des widgets'], 'g12-wallpaper': ['fond-theme-verrouillage', 'Changer le fond d’écran, le thème et l’écran de verrouillage'],
  'g12-alarm': ['alarme-minuteur', 'Régler une alarme et un minuteur'], 'g12-calendar': ['rendez-vous-agenda', 'Ajouter un rendez-vous à l’agenda'],
  'g12-reminder': ['rappels', 'Recevoir des rappels de tâches'], 'g12-note': ['samsung-notes', 'Utiliser Samsung Notes'],
  'g12-recorder': ['enregistreur-vocal', 'Enregistrer sa voix'], 'g12-tools': ['meteo-calculatrice-radio', 'Utiliser la météo, la calculatrice et la radio'],
  'x13-gmail': ['photos-par-gmail', 'Envoyer des photos par e-mail avec Gmail'], 'x13-video': ['video-a-la-famille', 'Envoyer une vidéo à la famille'],
  'x13-meet': ['appel-video-google-meet', 'Passer un appel vidéo avec Google Meet'], 'g14-open': ['ouvrir-samsung-wallet', 'Ouvrir Samsung Wallet'],
  'g14-add': ['ajouter-carte', 'Voir l’écran d’ajout de carte'], 'g14-pay': ['choisir-carte-paiement', 'Choisir la carte pour payer'],
  'g15-pin': ['creer-code-pin', 'Créer un code PIN'], 'g15-bio': ['empreintes-visage', 'Enregistrer empreintes et visage'],
  'g15-perm': ['autorisations-localisation', 'Vérifier les autorisations et la localisation'], 'g15-folder': ['dossier-securise-samsung-pass', 'Découvrir le Dossier sécurisé et Samsung Pass'],
  'g15-medical': ['infos-medicales-contacts-urgence', 'Ajouter infos médicales et contacts d’urgence'], 'g15-sos': ['sos-urgence', 'Vérifier le SOS d’urgence'],
  'g15-find': ['samsung-find', 'Retrouver le téléphone avec Samsung Find'], 'g16-setup': ['premiere-configuration', 'Configurer le téléphone la première fois'],
  'g16-sim': ['sim-esim', 'Comprendre la SIM et l’eSIM'], 'g16-account': ['comptes-samsung-google', 'Vérifier les comptes Samsung et Google'],
  'g16-switch': ['smart-switch', 'Transférer contacts et photos avec Smart Switch'], 'g16-backup': ['verifier-sauvegarde', 'Vérifier la sauvegarde'],
  'g16-restore': ['restaurer-sauvegarde', 'Restaurer une sauvegarde'], 'g17-magnify': ['agrandissement', 'Agrandir une partie de l’écran'],
  'g17-contrast': ['polices-contraste', 'Augmenter le contraste du texte'], 'g17-talkback': ['talkback', 'Faire lire l’écran avec TalkBack'],
  'g17-caption': ['son-sous-titres', 'Régler le son et les sous-titres'], 'g17-hearing': ['appareils-auditifs', 'Vérifier la compatibilité avec les appareils auditifs'],
  'g17-touch': ['reglages-toucher', 'Régler le toucher et le raccourci d’accessibilité'], 'g18-usage': ['applis-batterie', 'Trouver les applis qui consomment le plus'],
  'g18-saver': ['economie-energie', 'Activer l’économie d’énergie'], 'g18-storage': ['verifier-stockage', 'Vérifier le stockage'],
  'g18-clean': ['gros-fichiers', 'Supprimer les gros fichiers'], 'g18-care': ['maintenance-appareil', 'Vérifier le téléphone avec Maintenance de l’appareil'],
  'g18-update': ['mise-a-jour-logicielle', 'Mettre à jour le logiciel'], 'g18-version': ['modele-version-one-ui', 'Vérifier son modèle et la version One UI'],
  'g19-bixby': ['demander-a-bixby', 'Demander à Bixby à voix haute'], 'g19-circle': ['entourer-pour-chercher', 'Chercher ce qui est à l’écran'],
  'g19-interpret': ['traduction-appels', 'Découvrir la traduction d’appels et l’Interprète'], 'g19-write': ['ameliorer-resumer-texte', 'Améliorer et résumer un texte'],
  'g19-transcribe': ['transcrire-enregistrements', 'Transformer des enregistrements en texte'], 'g19-photo': ['retouche-photo-ia', 'Retoucher des photos avec l’IA'],
  'g19-support': ['fonctions-par-modele', 'Voir les fonctions selon le modèle'], 'g20-smartview': ['smart-view', 'Afficher l’écran sur la TV avec Smart View'],
  'g20-pc': ['connecter-pc', 'Connecter à un PC'], 'g20-dex': ['samsung-dex', 'Découvrir Samsung DeX'],
  'g20-watch': ['montre-ecouteurs', 'Connecter une montre et des écouteurs'], 'g20-smartthings': ['smartthings', 'Connecter des appareils avec SmartThings'],
  'g20-musicshare': ['music-share', 'Découvrir Music Share'], 'g21-split': ['ecran-partage', 'Utiliser deux applis en écran partagé'],
  'g21-modes': ['modes-routines', 'Configurer Modes et routines'], 'g21-aod': ['always-on-display', 'Afficher l’heure écran éteint'],
  'g21-wellbeing': ['bien-etre-numerique', 'Voir le temps d’utilisation avec Bien-être numérique'], 'g21-apps': ['samsung-health-kids-game-booster', 'Découvrir Samsung Health, Samsung Kids et Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Trouver Samsung News, Samsung.com et Global Goals'], 'g21-spen': ['s-pen', 'Utiliser le S Pen sur les modèles compatibles'],
  'g22-ring': ['pas-de-sonnerie', 'Quand la sonnerie ne retentit pas'], 'g22-network': ['pas-appels-internet', 'Quand les appels ou Internet ne marchent pas'],
  'g22-charge': ['ne-charge-pas', 'Quand le téléphone ne charge pas'], 'g22-hot': ['telephone-chaud', 'Quand le téléphone chauffe'],
  'g22-freeze': ['ecran-bloque', 'Quand l’écran se bloque'], 'g22-water': ['telephone-mouille', 'Que vérifier si le téléphone est mouillé'],
  'g22-members': ['diagnostic-samsung-members', 'Faire un diagnostic avec Samsung Members'], 'g22-service': ['avant-le-sav', 'Noter le modèle et le problème avant le SAV'],
};

const PHONE = open('Téléphone');
const CONTACTS = open('Contacts');
const MESSAGES = open('Messages');
const CAMERA = open('Appareil photo');
const GALLERY = open('Galerie');
const SHUTTER = ['Touchez le déclencheur blanc.'];
const REAL = 'Cette leçon modifie de vrais réglages ou a de vrais effets. Lisez d’abord toutes les étapes, puis faites-les sur le téléphone.';
const AI_ICON = ['Touchez l’icône Galaxy AI.'];
const CHECK = 'Nouvelle leçon écrite pour le site international. Les écrans des applis Google changent souvent ; vérifiez sur un vrai téléphone.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Découvrez où sont les touches Volume haut, Volume bas et la touche latérale d’un Galaxy, et à quoi elles servent.', [
    ['Regardez le bord droit du téléphone.', 'Il y a trois touches. De haut en bas : Volume haut, Volume bas et la touche latérale.'],
    ['Appuyez sur la touche latérale dans l’image.', 'C’est la touche du bas. Elle sert à allumer et éteindre le téléphone ou l’écran.'],
    ['Appuyez sur la touche Volume bas dans l’image.', 'C’est la touche du milieu. Elle baisse le son.'],
    ['Appuyez sur la touche Volume haut dans l’image.', 'C’est la touche du haut. Elle monte le son.']]),
  'g01-charge': L('Chargez votre Galaxy pas à pas : branchez le chargeur, connectez le câble et vérifiez le signe de charge.', [
    ['Branchez le chargeur sur la prise électrique.'], ['Branchez le bout du câble dans le port en bas du téléphone.', 'Si le port est mouillé, laissez-le sécher complètement.'],
    ['Vérifiez que le signe de charge apparaît à l’écran.'], ['Débranchez le câble quand la charge est terminée.']]),
  'g01-power': L('Éteignez un Galaxy avec la touche latérale et Volume bas, puis rallumez-le.', [
    ['Maintenez appuyées en même temps la touche latérale et la touche Volume bas.', 'Appuyez sur les deux et attendez que le menu apparaisse.'],
    ['Touchez Éteindre.'], ['Touchez encore Éteindre.', 'Quand l’écran s’éteint, passez à l’étape suivante pour le rallumer.'],
    ['Maintenez la touche latérale appuyée pour allumer le téléphone.', 'Maintenez quelques secondes jusqu’au logo Samsung. Puis déverrouillez l’écran.']]),
  'g01-restart': L('Redémarrez un Galaxy quand il est lent ou se comporte bizarrement.', [
    ['Maintenez appuyées en même temps la touche latérale et la touche Volume bas.', 'Maintenez jusqu’à l’apparition du menu d’alimentation.'],
    ['Touchez Redémarrer.'], ['Touchez encore Redémarrer.'],
    ['Attendez que le téléphone s’éteigne et se rallume.', '', 'Si l’écran est bloqué et que le menu n’apparaît pas, maintenez les deux touches plus de 7 secondes.']]),
  'g01-lock': L('Verrouillez l’écran avec la touche latérale et déverrouillez-le en balayant vers le haut.', [
    ['Appuyez brièvement une fois sur la touche latérale.', 'L’écran s’éteint et se verrouille tout seul.'],
    ['Appuyez à nouveau brièvement sur la touche latérale.', 'L’écran de verrouillage s’allume. Toucher deux fois l’écran marche aussi.'],
    ['Balayez l’écran vers le haut.', 'Si vous avez un code PIN ou une empreinte, utilisez-les pour déverrouiller.']]),
  'g02-tap': L('Entraînez-vous au geste le plus simple : toucher une fois pour ouvrir une appli.', [
    ['Touchez légèrement une fois Galerie du bout du doigt.', 'N’appuyez pas fort. Un léger toucher ouvre l’appli.'], HOME_BTN]),
  'g02-hold': L('Entraînez-vous à maintenir appuyé pour ouvrir le menu d’une appli.', [
    ['Maintenez Galerie appuyé pendant 2 secondes.', 'Gardez le doigt posé jusqu’à l’apparition d’un menu.'],
    ['Vérifiez qu’un menu est apparu.', 'Maintenir appuyé montre ce que vous pouvez faire avec l’appli.'], ['Touchez la touche Retour pour fermer le menu.']]),
  'g02-swipe': L('Balayez pour changer de page d’accueil et ouvrir l’écran des applications.', [
    ['Balayez l’écran vers la gauche.', 'Vous passez à la page suivante de l’écran d’accueil.'],
    ['Balayez vers le haut depuis le bas de l’écran d’accueil.', 'L’écran des applications avec toutes vos applis s’ouvre.'],
    ['Balayez vers le bas sur l’écran des applications.', 'Vous revenez à l’écran d’accueil.']]),
  'g02-pinch': L('Écartez deux doigts pour agrandir une photo et rapprochez-les pour la réduire.', [
    open('Galerie'), ['Touchez la photo que vous voulez voir.'], ['Posez deux doigts sur la photo et écartez-les.', 'Écartez le pouce et l’index pour l’agrandir.'],
    ['Rapprochez les deux doigts.', 'La photo redevient plus petite.']]),
  'g02-back': L('Utilisez la touche Retour pour revenir à l’écran précédent.', [
    ...settings('Affichage'),
    ['Touchez la touche Retour en bas à droite.', 'Vous revenez à l’écran précédent (Paramètres).', 'Vous pouvez changer l’ordre des touches dans Paramètres → Affichage → Barre de navigation.']]),
  'g02-home': L('Revenez à l’écran d’accueil depuis n’importe quelle appli avec la touche Accueil.', [
    open('Paramètres'), HOME_BTN,
    ['Vérifiez que l’écran d’accueil apparaît.', 'Depuis n’importe quelle appli, la touche Accueil vous ramène ici.', 'Si vous ne voyez pas les touches, balayez un peu vers le haut depuis le bas de l’écran.']]),
  'g02-recent': L('Ouvrez les applis récentes pour changer d’appli ou toutes les fermer.', [
    ['Touchez la touche Récentes en bas à gauche.', 'Les applis utilisées récemment apparaissent comme des cartes.'],
    ['Touchez l’appli que vous voulez réutiliser.', 'Balayez sur les côtés pour voir d’autres applis.'], ['Touchez à nouveau la touche Récentes.'],
    ['Touchez ‘Tout fermer’.', 'Toutes les applis ouvertes sont fermées.']]),
  'g03-font': L('Agrandissez le texte et mettez-le en gras dans Paramètres → Affichage → Taille et style de police.', [
    ...settings('Affichage', 'Taille et style de police'), ['Faites glisser le rond de la barre de taille vers la droite.', 'Plus il est à droite, plus le texte est grand.'],
    ['Touchez l’interrupteur ‘Police en gras’ pour l’activer.', 'Le texte en gras se lit plus facilement.'], ['Vérifiez que le texte est plus grand.']]),
  'g03-zoom': L('Agrandissez icônes et boutons avec le Zoom de l’écran dans Paramètres → Affichage.', [
    ...settings('Affichage', 'Zoom de l’écran'), ['Faites glisser le rond de la barre vers la droite.', 'Plus il est à droite, plus les icônes et boutons sont grands.'],
    ['Vérifiez que les icônes et boutons sont plus grands.']]),
  'g03-easy': L('Activez le Mode facile pour un écran d’accueil plus simple, avec texte et icônes grands.', [
    ...settings('Affichage', 'Mode facile'), ['Touchez l’interrupteur ‘Mode facile’ pour l’activer.', 'Le texte et les icônes de l’écran d’accueil grandissent.'],
    ['Vérifiez que le texte et les icônes de l’écran d’accueil sont plus grands.']]),
  'g03-bright': L('Réglez la luminosité de l’écran depuis le volet des paramètres rapides.', [
    ['Balayez vers le bas depuis le coin supérieur droit de l’écran.', 'Le volet des paramètres rapides s’ouvre.'],
    ['Faites glisser la barre de luminosité vers la droite.', 'Vers la gauche, l’écran s’assombrit.'], ['Balayez vers le haut pour fermer le volet.']]),
  'g03-timeout': L('Changez le délai avant que l’écran s’éteigne dans Paramètres → Affichage → Mise en veille de l’écran.', [
    ...settings('Affichage', 'Mise en veille de l’écran'), ['Touchez ‘5 minutes’.', 'Choisissez la durée voulue. Plus elle est longue, plus la batterie s’use.']]),
  'g03-sound': L('Augmentez le volume de la sonnerie et faites vibrer le téléphone pendant la sonnerie.', [
    ...settings('Sons et vibrations', 'Volume'), ['Faites glisser la barre Sonnerie vers la droite.', 'Plus elle est à droite, plus la sonnerie est forte.'],
    BACK, ['Touchez ‘Son’.', 'Pour vibrer seulement, touchez ‘Vibreur’.'], ['Touchez l’interrupteur ‘Vibrer pendant la sonnerie’ pour l’activer.', 'Le son et la vibration vous préviennent ensemble.']]),
  'g04-call': L('Appelez avec un Galaxy en composant le numéro sur le clavier.', [
    PHONE, ['Touchez ‘Clavier’ en bas.'], ['Touchez les chiffres du numéro dans l’ordre.', 'En cas d’erreur, effacez avec la touche d’effacement en bas à droite.'],
    ['Touchez le bouton vert d’appel.'], ['À la fin, touchez le bouton rouge pour raccrocher.']]),
  'g04-answer': L('Répondez en faisant glisser le bouton vert, refusez avec le rouge ou par message.', [
    ['Maintenez le bouton vert Répondre et faites-le glisser vers le haut.', 'Sortez-le du cercle pour décrocher.'],
    ['Pour refuser, maintenez le bouton rouge et faites-le glisser vers le haut.'],
    ['Pour refuser par message, faites glisser vers le haut ‘Envoyer un message’ en bas.', 'Choisissez un message, il est envoyé à l’appelant.', 'Dans Paramètres → Accessibilité → Interaction et dextérité, vous pouvez répondre d’un seul toucher.']]),
  'g04-speaker': L('Activez le haut-parleur pendant un appel pour parler sans tenir le téléphone à l’oreille.', [
    ['Passez ou recevez un appel.'], ['Touchez ‘Haut-parleur’.', 'Vous entendez et parlez avec le téléphone loin de l’oreille.'], ['Pour l’arrêter, touchez de nouveau ‘Haut-parleur’.']]),
  'g04-missed': L('Rappelez un appel manqué depuis la liste Récents de l’appli Téléphone.', [
    PHONE, ['Touchez ‘Récents’ en bas.'],
    ['Faites glisser le numéro manqué vers la droite.', 'Glisser vers la droite appelle tout de suite.', 'Si ça n’appelle pas, touchez le numéro puis le bouton d’appel.']]),
  'g04-log': L('Voyez qui a appelé et quand dans la liste Récents de l’appli Téléphone.', [
    PHONE, ['Touchez ‘Récents’ en bas.'], ['Touchez un nom pour voir les détails.', 'Vous voyez quand vous avez parlé.']]),
  'g04-block': L('Bloquez un numéro indésirable dans les paramètres de l’appli Téléphone.', [
    PHONE, ['Touchez les trois points (Plus d’options) en haut à droite.'], ['Touchez ‘Paramètres’.'], ['Touchez ‘Bloquer des numéros’.'],
    ['Touchez ‘Ajouter un numéro de téléphone’.', '', 'L’écran peut être un peu différent selon la version.'], ['Saisissez le numéro à bloquer.'], ['Touchez ‘Enregistrer’.']]),
  'g05-new': L('Enregistrez un nouveau contact avec nom et numéro dans l’appli Contacts.', [
    CONTACTS, ['Touchez ‘+’ (Créer un contact) en haut à droite.'], ['Touchez le champ Nom.'], ['Saisissez le nom.'], ['Touchez le champ Téléphone.'],
    ['Saisissez le numéro de téléphone.'], ['Touchez ‘Enregistrer’.']]),
  'g05-search': L('Trouvez vite un contact en cherchant son nom.', [
    CONTACTS, ['Touchez la loupe (Rechercher) en haut.'], ['Saisissez le nom recherché.'], ['Touchez le nom trouvé.']]),
  'g05-edit': L('Modifiez le numéro de téléphone enregistré d’un contact.', [
    CONTACTS, ['Touchez le nom de la personne.'], ['Touchez ‘Modifier’ en bas.'], ['Touchez le champ Téléphone.'], ['Effacez l’ancien numéro et saisissez le nouveau.'], ['Touchez ‘Enregistrer’.']]),
  'g05-speed': L('Configurez la numérotation rapide pour appeler en maintenant un chiffre du clavier.', [
    PHONE, ['Touchez ‘Clavier’ en bas.'], ['Touchez les trois points (Plus d’options) en haut à droite.'], ['Touchez ‘Numéros abrégés’.'],
    ['Touchez le chiffre ‘2’.', 'Choisissez un chiffre libre.'], ['Choisissez la personne dans vos contacts.'],
    ['Maintenez le ‘2’ du clavier pour l’appeler.', 'Essayez de maintenir le ‘2’ dans l’image d’entraînement.']]),
  'g05-share': L('Envoyez les coordonnées d’un contact à quelqu’un par message.', [
    CONTACTS, ['Touchez le nom de la personne à partager.'], ['Touchez ‘Partager’ en bas.'], ['Touchez ‘Messages’.'], ['Choisissez le destinataire.'], ['Touchez le bouton Envoyer.']]),
  'g06-send': L('Envoyez un SMS et répondez à un message dans l’appli Messages.', [
    MESSAGES, ['Touchez la conversation à laquelle vous voulez répondre.', 'Pour un nouveau message, touchez Démarrer une discussion en bas à droite.'],
    ['Touchez la zone de message en bas.'], ['Écrivez votre message.'], ['Touchez le bouton Envoyer à droite.']]),
  'g06-type': L('Saisissez lettres, chiffres et symboles, et changez la langue du Clavier Samsung.', [
    ['Écrivez ‘Bonjour’ sur le clavier.'], ['Pour les chiffres ou symboles, touchez ‘!#1’.'], ['Pour revenir aux lettres, touchez ‘ABC’ au même endroit.'],
    ['Pour écrire dans une autre langue, faites glisser la barre d’espace à gauche ou à droite.', 'Seules les langues ajoutées dans les paramètres du clavier apparaissent.']]),
  'g06-fix': L('Corrigez les fautes avec la touche d’effacement et en déplaçant le curseur.', [
    ['Touchez une fois la touche d’effacement (⌫).', 'La lettre juste avant le curseur est effacée.'], ['Saisissez la bonne lettre.'],
    ['Pour corriger une lettre au milieu, touchez cet endroit.', 'Le curseur (le trait qui clignote) s’y déplace.']]),
  'g06-copy': L('Copiez un texte et collez-le ailleurs.', [
    ['Maintenez appuyé le texte à copier.'], ['Touchez ‘Copier’.'], ['Maintenez appuyée la zone où coller.'], ['Touchez ‘Coller’.']]),
  'g06-photo': L('Joignez une photo de la Galerie à un SMS.', [
    MESSAGES, ['Touchez la conversation où envoyer la photo.'], ['Touchez ‘+’ à gauche de la zone de message.'], ['Touchez ‘Galerie’.'], ['Touchez la photo à envoyer.'], ['Touchez le bouton Envoyer.']]),
  'g06-translate': L('Traduisez une conversation de Messages avec l’outil Galaxy AI du clavier.', [
    MESSAGES, ['Touchez la conversation à traduire.'], ['Touchez la zone de message en bas.'], ['Touchez l’icône Galaxy AI en haut à gauche du clavier.'],
    ['Touchez ‘Traduction de discussion’.'], ['Choisissez les langues dans le cadre du haut.']]),
  'g07-noti': L('Ouvrez le volet des notifications, lisez-en une et effacez-les toutes.', [
    ['Balayez vers le bas depuis le coin supérieur gauche de l’écran.', 'Le volet des notifications s’ouvre.'], ['Touchez la notification à lire.', 'Son appli s’ouvre.'],
    ['Balayez vers le bas depuis le coin supérieur gauche de l’écran.', 'Le volet des notifications s’ouvre.'], ['Touchez ‘Effacer’.', 'Toutes les notifications disparaissent.']]),
  'g07-appnoti': L('Désactivez les notifications des applis dont vous n’avez pas besoin.', [
    ...settings('Notifications', 'Notifications des applis'), ['Touchez l’interrupteur d’une appli pour couper ses notifications.', 'Gardez celles des applis de messages importantes.']]),
  'g07-quick': L('Ouvrez le volet des paramètres rapides et découvrez ses boutons.', [
    QUICK, ['Regardez les boutons du volet.', 'Les boutons bleus sont activés. Touchez un bouton pour l’activer ou le désactiver.'],
    ['Maintenez appuyé le bouton ‘Wi-Fi’.', 'Maintenir ouvre ses réglages détaillés.'], ['Balayez vers le haut pour fermer le volet.']]),
  'g07-flash': L('Allumez et éteignez la lampe torche depuis le volet des paramètres rapides.', [
    QUICK, ['Touchez ‘Lampe torche’.', 'La lumière au dos du téléphone s’allume.'], ['Pour l’éteindre, touchez de nouveau ‘Lampe torche’.']]),
  'g07-rotate': L('Choisissez si l’écran pivote quand vous tournez le téléphone.', [
    QUICK, ['Touchez ‘Rotation auto’.', 'Activée, l’écran pivote avec le téléphone. Désactivée, il reste vertical.'], ['Tournez le téléphone sur le côté pour essayer.']]),
  'g07-dnd': L('Coupez appels et alertes avec Ne pas déranger et utilisez le mode Avion en avion.', [
    QUICK, ['Touchez ‘Ne pas déranger’.', 'Appels et notifications ne sonnent plus. Touchez encore pour désactiver.'], ['Touchez de nouveau ‘Ne pas déranger’ pour le désactiver.'],
    ['Touchez ‘Mode Avion’.', 'Appels et Internet sont coupés. À utiliser en avion.'], ['À la descente de l’avion, touchez-le de nouveau pour le désactiver.']]),
  'g08-wifi': L('Connectez votre Galaxy à un Wi-Fi dans Paramètres → Connexions → Wi-Fi.', [
    ...settings('Connexions', 'Wi-Fi'), ['Touchez l’interrupteur ‘Wi-Fi’ pour l’activer.', 'La liste des Wi-Fi proches apparaît.'],
    ['Touchez le nom du Wi-Fi.', 'Un cadenas signifie qu’un mot de passe est nécessaire.'], ['Saisissez le mot de passe Wi-Fi.', 'Il est souvent écrit au dos de la box.'], ['Touchez ‘Connecter’.']]),
  'g08-data': L('Activez ou désactivez les données mobiles dans Paramètres → Connexions → Utilisation des données.', [
    ...settings('Connexions', 'Utilisation des données'), ['Touchez l’interrupteur ‘Données mobiles’ pour l’activer.', 'Désactivé, Internet ne marche qu’en Wi-Fi.']]),
  'g08-usage': L('Voyez combien de données mobiles vous avez utilisées ce mois-ci et quelles applis en consomment le plus.', [
    ...settings('Connexions', 'Utilisation des données'), ['Touchez ‘Utilisation des données mobiles’.'],
    ['Regardez combien vous avez utilisé ce mois-ci.', 'Les applis qui consomment le plus sont en haut. L’appli de votre opérateur montre ce qui reste.']]),
  'g08-bt': L('Associez des écouteurs Bluetooth à votre Galaxy.', [
    ['Mettez les écouteurs en mode d’association.'], ...settings('Connexions', 'Bluetooth'), ['Touchez l’interrupteur ‘Bluetooth’ pour l’activer.'],
    ['Touchez le nom de vos écouteurs dans la liste.'], ['Touchez ‘Connecter’.']]),
  'g08-hotspot': L('Partagez la connexion Internet du téléphone avec un autre appareil grâce au point d’accès mobile.', [
    ...settings('Connexions', 'Point d’accès mobile et modem', 'Point d’accès mobile'), ['Touchez l’interrupteur ‘Point d’accès mobile’ pour l’activer.', '', 'Cela peut coûter plus cher. Vérifiez d’abord votre forfait.'],
    ['Sur l’autre appareil, choisissez le nom de votre téléphone dans la liste Wi-Fi.']]),
  'g08-location': L('Trouvez les interrupteurs Localisation et NFC dans les Paramètres.', [
    ...settings('Localisation'), ['Touchez l’interrupteur ‘Localisation’ pour l’activer.', 'Les applis de cartes et de météo savent alors où vous êtes.'], BACK, item('Connexions'),
    ['Touchez l’interrupteur ‘NFC et paiements sans contact’ pour l’activer.', 'Activez-le pour payer ou utiliser des titres de transport avec le téléphone.']]),
  'g09-search': L('Cherchez sur le Web avec le navigateur Samsung Internet.', [
    [...open('Samsung Internet'), 'Selon la version, l’appli s’appelle ‘Samsung Internet’ ou ‘Navigateur’.'], ['Touchez la barre d’adresse en haut.'], ['Saisissez ce que vous cherchez.'],
    ['Touchez la touche OK (↵) en bas à droite du clavier.'], ['Touchez le résultat à lire.']]),
  'g09-bookmark': L('Enregistrez en favoris les pages visitées souvent et ouvrez-les plus tard.', [
    open('Samsung Internet'), ['Touchez l’étoile (☆) à droite de la barre d’adresse.', 'La page affichée est ajoutée aux favoris.'],
    ['Pour l’ouvrir plus tard, touchez l’étoile (Favoris) en bas.'], ['Touchez la page enregistrée.']]),
  'g09-qr': L('Ouvrez un QR code avec l’appareil photo du Galaxy.', [
    CAMERA, ['Pointez l’appareil photo vers le QR code.', 'En mode Photo, gardez le code au milieu de l’écran.'],
    ['Touchez le lien jaune qui apparaît.', 'Méfiez-vous des QR codes d’endroits que vous ne connaissez pas.']]),
  'g09-files': L('Trouvez les fichiers téléchargés dans l’appli Mes fichiers.', [open('Mes fichiers'), ['Touchez ‘Téléchargements’.'], ['Touchez le fichier à ouvrir.']]),
  'g09-stores': L('Découvrez la différence entre Google Play Store et Samsung Galaxy Store.', [
    open('Play Store'), ['C’est la boutique d’applis de Google, où trouver et télécharger des applis.', 'Il faut se connecter avec un compte Google.'], HOME_BTN,
    open('Galaxy Store'), ['C’est la boutique d’applis de Samsung, avec beaucoup d’applis et de thèmes Samsung.']]),
  'g09-install': L('Installez une appli depuis le Play Store, mettez à jour les applis dans le Galaxy Store et désinstallez une appli.', [
    open('Play Store'), ['Touchez la barre de recherche en haut.'], ['Saisissez le nom de l’appli.'], ['Touchez ‘Installer’ à côté du nom de l’appli.'],
    ['Touchez l’appli ‘Galaxy Store’.', 'Maintenant, mettons les applis à jour.'], ['Touchez ‘Menu’ en bas.'], ['Touchez ‘Mises à jour’.'], ['Touchez ‘Tout mettre à jour’.'],
    ['Sur l’écran d’accueil, maintenez appuyée l’appli à supprimer.'], ['Touchez ‘Désinstaller’.'], ['Touchez ‘OK’.', 'Une appli supprimée peut être réinstallée depuis la boutique.']]),
  'g09-google': L('Trouvez les applis Google et celle de votre opérateur avec la recherche de l’écran des applications.', [
    ['Balayez vers le haut sur l’écran d’accueil pour ouvrir l’écran des applications.'], ['Touchez ‘Rechercher’ en haut.'],
    ['Saisissez le nom de l’appli.', 'Essayez Google, YouTube ou le nom de votre opérateur.'], ['Touchez l’appli trouvée.']]),
  'g10-open': L('Ouvrez l’appli Appareil photo et trouvez le déclencheur.', [CAMERA, ['Vérifiez que l’écran de l’appareil photo apparaît.', 'Le rond blanc en bas au centre est le déclencheur.']]),
  'g10-focus': L('Touchez l’écran pour faire la mise au point avant la photo.', [
    CAMERA, ['Touchez l’endroit qui doit être net.', 'Quand un cercle jaune apparaît, la mise au point est faite.'],
    ['Touchez le déclencheur blanc.', 'Si les photos sont floues, essuyez l’objectif avec un chiffon doux.']]),
  'g10-switch': L('Passez de la caméra arrière à la caméra avant (selfie).', [
    CAMERA, ['Touchez les flèches en cercle en bas à droite.', 'Balayer vers le haut ou le bas change aussi de caméra.'], ['Vérifiez que la caméra avant montre votre visage.']]),
  'g10-selfie': L('Prenez un selfie avec la caméra avant.', [
    CAMERA, ['Touchez les flèches en cercle en bas à droite.'], ['Tenez le téléphone pour que votre visage soit au milieu de l’écran.'], SHUTTER]),
  'g10-zoom': L('Zoomez sur les choses lointaines en prenant une photo.', [
    CAMERA, ['Touchez le chiffre ‘3’ en bas.', 'Ce qui est loin paraît 3 fois plus grand. Touchez ‘1x’ pour revenir.', 'Les chiffres varient selon le modèle (les Ultra zooment plus).'], SHUTTER]),
  'g10-timer': L('Utilisez le minuteur pour que la photo soit prise quelques secondes plus tard.', [
    CAMERA, ['Touchez l’icône Commandes rapides (⌄) en haut.'], ['Touchez l’icône du minuteur.'], ['Touchez ‘5 secondes’.'], SHUTTER, ['La photo est prise après le compte à rebours.']]),
  'g10-modes': L('Essayez le mode Portrait pour flouter le fond et le mode Nuit pour les endroits sombres.', [
    CAMERA, ['Touchez ‘Portrait’ en bas.', 'La personne est nette et le fond flou.'], SHUTTER, ['Touchez ‘Plus’ en bas.'],
    ['Touchez ‘Nuit’.', 'Dans le noir, les photos sont claires sans flash. Gardez le téléphone immobile pendant la prise.']]),
  'g10-video': L('Filmez une vidéo avec l’appareil photo du Galaxy.', [CAMERA, ['Touchez ‘Vidéo’ en bas.'], ['Touchez le bouton rouge d’enregistrement.'], ['À la fin, touchez le bouton Arrêter.']]),
  'g10-capture': L('Faites une capture avec deux touches et enregistrez l’écran depuis les paramètres rapides.', [
    ['Appuyez brièvement en même temps sur la touche latérale et Volume bas.', 'Un déclic, et l’écran est enregistré comme image. Elle est dans la Galerie.'], QUICK,
    ['Touchez ‘Enregistreur d’écran’.', 'Si vous ne le voyez pas, balayez encore le volet vers le bas.'], ['Touchez ‘Démarrer l’enregistrement’.'],
    ['Pour arrêter, touchez l’icône Arrêter en haut de l’écran.']]),
  'g11-latest': L('Trouvez dans la Galerie la photo que vous venez de prendre.', [
    GALLERY, ['Touchez la première photo (en haut à gauche).', 'La photo la plus récente est toujours en premier.'], ['Balayez vers la gauche pour voir la suivante.']]),
  'g11-album': L('Créez un album dans la Galerie pour regrouper des photos.', [
    GALLERY, ['Touchez ‘Albums’ en bas.'], ['Touchez ‘+’ (Ajouter) en haut.'], ['Touchez ‘Album’.'], ['Saisissez un nom pour l’album.'], ['Touchez ‘Créer’.', 'Choisissez ensuite les photos à y mettre.']]),
  'g11-edit': L('Recadrez une photo et éclaircissez-la dans la Galerie.', [
    GALLERY, ['Touchez la photo à modifier.'], ['Touchez le crayon (Modifier) en bas.'], ['Faites glisser un coin de la photo vers l’intérieur pour recadrer.'],
    ['Touchez ‘Ton’ en bas.'], ['Faites glisser la barre de luminosité vers la droite.'], ['Touchez ‘Enregistrer’.']]),
  'g11-text': L('Copiez le texte d’une photo dans la Galerie et collez-le dans un message ou une note.', [
    GALLERY, ['Touchez une photo contenant du texte.'], ['Touchez l’icône jaune ‘T’.', 'Elle n’apparaît que s’il y a du texte.'],
    ['Maintenez appuyé le texte à copier.'], ['Touchez ‘Copier’.', 'Vous pouvez le coller dans un message ou une note.']]),
  'g11-multi': L('Sélectionnez plusieurs photos dans la Galerie et partagez-les d’un coup.', [
    GALLERY, ['Maintenez appuyée une des photos à envoyer.'], ['Touchez d’autres photos à envoyer avec.', 'Une coche dans le cercle signifie qu’elle est choisie.'],
    ['Touchez ‘Partager’ en bas.'], ['Touchez l’appli pour envoyer (par exemple Messages).'], ['Choisissez le destinataire et envoyez.']]),
  'g11-restore': L('Récupérez des photos supprimées dans la Corbeille de la Galerie.', [
    GALLERY, ['Touchez ‘Menu’ en bas.'], ['Touchez ‘Corbeille’.'], ['Touchez la photo à récupérer.', 'Les photos supprimées restent un moment dans la Corbeille.'], ['Touchez ‘Restaurer’.']]),
  'g11-docs': L('Trouvez les documents enregistrés sur le téléphone avec l’appli Mes fichiers.', [open('Mes fichiers'), ['Touchez ‘Documents’.'], ['Touchez le document à ouvrir.']]),
  'g11-quickshare': L('Envoyez une photo à un téléphone proche avec Quick Share.', [
    GALLERY, ['Touchez la photo à envoyer.'], ['Touchez ‘Partager’ en bas.'],
    ['Touchez ‘Quick Share’.', '', 'L’autre téléphone doit aussi avoir Quick Share activé (Paramètres → Appareils connectés → Quick Share).'],
    ['Touchez le nom du téléphone destinataire.'], ['Sur le téléphone qui reçoit, touchez ‘Accepter’.']]),
  'g12-addapp': L('Mettez sur l’écran d’accueil une appli de l’écran des applications.', [
    ['Balayez vers le haut sur l’écran d’accueil pour ouvrir l’écran des applications.'], ['Maintenez appuyée l’appli voulue.'], ['Touchez ‘Ajouter à l’accueil’.']]),
  'g12-folder': L('Regroupez des applis dans un dossier et ajoutez un widget météo à l’écran d’accueil.', [
    ['Maintenez une appli de l’écran d’accueil et faites-la glisser sur une autre.', 'Un dossier avec les deux applis est créé.'], ['Touchez le nom du dossier et saisissez un nom.'],
    ['Maintenez appuyé un espace vide de l’écran d’accueil.'], ['Touchez ‘Widgets’.'], ['Touchez ‘Météo’.'], ['Touchez ‘Ajouter’.']]),
  'g12-wallpaper': L('Utilisez une de vos photos comme fond d’écran de verrouillage ou d’accueil.', [
    ...settings('Fond d’écran et style'), ['Touchez ‘Changer les fonds d’écran’.'], ['Pour une photo à vous, touchez ‘Galerie’.'], ['Touchez la photo voulue.'],
    ['Choisissez l’écran de verrouillage, l’écran d’accueil ou les deux.'], ['Touchez ‘Terminé’.']]),
  'g12-alarm': L('Réglez une alarme et lancez un minuteur dans l’appli Horloge.', [
    open('Horloge'), ['Touchez ‘Alarme’ en bas.'], ['Touchez ‘+’ en bas à droite.'], ['Faites défiler les chiffres pour régler l’heure.'], ['Touchez ‘Enregistrer’.'],
    ['Pour un minuteur, touchez ‘Minuteur’ en bas.'], ['Réglez la durée et touchez ‘Démarrer’.']]),
  'g12-calendar': L('Ajoutez un rendez-vous dans l’appli Agenda.', [
    open('Agenda'), ['Touchez ‘+’ (Ajouter un événement) en bas à droite.'], ['Touchez le champ Titre.'], ['Saisissez le nom du rendez-vous.'],
    ['Touchez ‘Début’ pour choisir la date et l’heure.'], ['Touchez ‘Enregistrer’.']]),
  'g12-reminder': L('Recevez un rappel pour une tâche en ajoutant une alerte à un événement.', [
    open('Agenda'), ['Touchez ‘+’ (Ajouter un événement) en bas à droite.'], ['Saisissez la tâche comme titre.'], ['Touchez ‘Rappel’.'],
    ['Touchez le moment du rappel (par exemple 10 minutes avant).'], ['Touchez ‘Enregistrer’.', 'Le rappel arrive à l’heure choisie.']]),
  'g12-note': L('Écrivez une note rapide dans Samsung Notes.', [
    open('Samsung Notes'), ['Touchez ‘+’ en bas à droite.'], ['Écrivez ce que vous voulez noter.'], ['Quand vous avez fini, touchez la touche Retour.', 'La note est enregistrée automatiquement.']]),
  'g12-recorder': L('Enregistrez votre voix avec l’appli Enregistreur vocal.', [
    open('Enregistreur vocal'), ['Touchez le bouton Enregistrer.'], ['Parlez vers le téléphone.'], ['Touchez ‘Arrêter’.', 'L’enregistrement est rangé dans la liste.']]),
  'g12-tools': L('Consultez la météo, utilisez la calculatrice et écoutez la radio.', [
    open('Météo'), ['Regardez la météo et la température du jour.', 'La localisation doit être activée pour voir la météo là où vous êtes.'], HOME_BTN, open('Calculatrice'),
    ['Touchez les chiffres, + et = pour calculer.'], ['Touchez l’appli ‘Radio’.', 'La radio a besoin d’écouteurs filaires, qui servent d’antenne.', 'Certains modèles et opérateurs n’ont pas d’appli Radio.']]),
  'x13-gmail': L('Envoyez des photos à votre famille par e-mail avec l’appli Gmail.', [
    open('Gmail'), ['Touchez ‘Nouveau message’ en bas à droite.'], ['Saisissez l’adresse e-mail de la personne dans le champ ‘À’.'], ['Touchez le trombone (Joindre) en haut.'],
    ['Touchez la photo à envoyer.', 'Vous pouvez en toucher plusieurs.'], ['Saisissez un objet court.'], ['Touchez le bouton Envoyer (avion en papier) en haut.']], { check: CHECK }),
  'x13-video': L('Envoyez une vidéo de la Galerie à un proche avec l’appli Messages.', [
    GALLERY, ['Touchez la vidéo à envoyer.'], ['Touchez ‘Partager’ en bas.'], ['Touchez ‘Messages’.'], ['Choisissez le destinataire.'],
    ['Touchez le bouton Envoyer.', '', 'Les longues vidéos peuvent être trop lourdes pour un message. Utilisez alors Quick Share ou l’e-mail.']], { check: CHECK }),
  'x13-meet': L('Passez un appel vidéo à votre famille avec l’appli Google Meet.', [
    open('Meet'), ['Touchez ‘Nouveau’.'], ['Touchez le nom de la personne à appeler.', 'Elle doit aussi avoir Google Meet ou un compte Google.'],
    ['Touchez le bouton d’appel vidéo.'], ['À la fin, touchez le bouton rouge pour raccrocher.']], { check: CHECK }),
  'g14-open': L('Ouvrez Samsung Wallet et regardez les cartes et les menus.', [
    ['Touchez l’appli ‘Samsung Wallet’.', 'Elle s’ouvre aussi en faisant glisser vers le haut l’image de carte en bas de l’écran.'],
    ['Regardez vos cartes enregistrées et les menus.', 'La première fois, il n’y a pas encore de carte. La leçon suivante montre l’écran d’ajout.']]),
  'g14-add': L('Regardez l’écran d’ajout d’une carte de paiement dans Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['Touchez ‘+’ (Ajouter) en haut.'], ['Regardez ce que vous pouvez ajouter.', 'Cartes de paiement, titres de transport et plus, selon le pays.'],
    ['Touchez ‘Carte de paiement’.'], ['Lisez les instructions pour ajouter une carte.']]),
  'g14-pay': L('Choisissez une carte dans Samsung Wallet et payez en approchant le téléphone du terminal.', [
    [...open('Samsung Wallet'), REAL], ['Touchez la carte avec laquelle payer.'], ['Utilisez votre empreinte ou saisissez le code de paiement.'], ['Approchez le dos du téléphone du terminal de paiement.']]),
  'g15-pin': L('Protégez votre téléphone avec un verrouillage par code PIN.', [
    [...open('Paramètres'), REAL], ...sub('Écran de verrouillage et AOD', 'Verrouillage de l’écran et biométrie'), ['Touchez ‘Type de verrouillage de l’écran’.'], ['Touchez ‘Code PIN’.'],
    ['Saisissez au moins 4 chiffres faciles à retenir pour vous.', 'Évitez les chiffres faciles à deviner, comme votre anniversaire ou votre numéro.'], ['Saisissez à nouveau les mêmes chiffres pour confirmer.']]),
  'g15-bio': L('Enregistrez votre empreinte et, si vous le voulez, votre visage pour déverrouiller.', [
    [...open('Paramètres'), REAL], ...sub('Sécurité et confidentialité', 'Verrouillage de l’écran et biométrie'), ['Touchez ‘Empreintes digitales’.'],
    ['Saisissez votre code PIN.', 'Sans code PIN, créez-en un d’abord.'],
    ['Posez et levez le doigt sur le symbole d’empreinte en bas de l’écran, plusieurs fois.', 'Prenez un doigt que vous utilisez souvent et décalez-le un peu à chaque fois.'],
    ['Pour ajouter votre visage, touchez ‘Reconnaissance faciale’ sur le même écran.']]),
  'g15-perm': L('Voyez quelles applis ont utilisé la localisation, l’appareil photo ou le micro et retirez les accès inutiles.', [
    ...settings('Sécurité et confidentialité', 'Autorisations utilisées ces dernières 24 heures'), ['Regardez quelles applis ont utilisé la localisation, l’appareil photo ou le micro.'],
    ['Touchez ‘Localisation’.'], ['Pour une appli inconnue, choisissez ‘Ne pas autoriser’.']]),
  'g15-folder': L('Trouvez le Dossier sécurisé et Samsung Pass dans les Paramètres.', [
    ...settings('Sécurité et confidentialité', 'Autres paramètres de sécurité'), ['Touchez ‘Dossier sécurisé’.'], ['Lisez les informations sur le Dossier sécurisé.'], BACK,
    ['Touchez ‘Mots de passe, clés d’accès et saisie automatique’.', 'Samsung Pass est ici. Il aide à se connecter avec l’empreinte.']]),
  'g15-medical': L('Ajoutez des infos médicales et des contacts d’urgence utiles en cas d’urgence.', [
    ...settings('Sécurité et urgence', 'Infos médicales'), ['Saisissez votre nom, groupe sanguin, médicaments et allergies.'], BACK, ['Touchez ‘Contacts d’urgence’.'], ['Ajoutez des membres de votre famille.']]),
  'g15-sos': L('Découvrez le fonctionnement du SOS d’urgence sans passer d’appel.', [
    [...open('Paramètres'), 'Appuyer vraiment sur les touches appelle les secours. Dans cette leçon, regardez seulement l’écran.'], ...sub('Sécurité et urgence', 'SOS d’urgence'),
    ['Lisez combien de fois il faut appuyer sur la touche latérale.', 'En appuyant le nombre de fois indiqué, le numéro choisi est appelé.']]),
  'g15-find': L('Activez le réglage qui permet de retrouver le téléphone avec Samsung Find en cas de perte.', [
    ...settings('Sécurité et confidentialité', 'Protection en cas de perte', 'Localiser mon mobile'),
    ['Touchez l’interrupteur ‘Autoriser la localisation de ce téléphone’ pour l’activer.', 'Vous devez être connecté à votre compte Samsung.'],
    ['Si vous perdez le téléphone, allez sur smartthingsfind.samsung.com depuis un autre appareil.']]),
  'g16-setup': L('Configurez un nouveau Galaxy pour la première fois.', [
    ['Maintenez la touche latérale pour allumer le téléphone.'], ['Vérifiez votre langue et touchez ‘Démarrer’.'], ['Choisissez un Wi-Fi et connectez-vous.'],
    ['Pour le reste, suivez les instructions à l’écran et touchez ‘Suivant’.']]),
  'g16-sim': L('Comprenez ce que sont la carte SIM et l’eSIM, et voyez votre numéro dans le Gestionnaire de cartes SIM.', [
    ['La SIM (Nano-SIM) est une petite carte fournie par votre opérateur.'], ['L’eSIM est une SIM téléchargée dans le téléphone, sans carte.', '', 'L’eSIM et l’usage de deux numéros dépendent du modèle et de l’opérateur.'],
    ...settings('Connexions', 'Gestionnaire de cartes SIM'), ['Vérifiez que votre numéro et votre opérateur apparaissent.']]),
  'g16-account': L('Vérifiez que le téléphone est connecté à un compte Samsung et à un compte Google.', [
    ...settings('Comptes et sauvegarde', 'Gérer les comptes'),
    ['Vérifiez qu’il y a un compte Samsung et un compte Google.', 'Ils servent aux sauvegardes, à installer des applis et à retrouver le téléphone. Notez identifiant et mot de passe.']]),
  'g16-switch': L('Transférez contacts, photos et plus vers un nouveau Galaxy avec Smart Switch.', [
    ...settings('Comptes et sauvegarde', 'Transférer les données de l’ancien appareil'), ['Sur le nouveau téléphone, choisissez ‘Recevoir les données’.'],
    ['Placez les deux téléphones côte à côte et suivez les instructions.']]),
  'g16-backup': L('Vérifiez la date de la dernière sauvegarde dans Samsung Cloud.', [...settings('Comptes et sauvegarde', 'Samsung Cloud'), ['Regardez la date de la dernière sauvegarde.']]),
  'g16-restore': L('Restaurez vos données depuis une sauvegarde Samsung Cloud.', [
    ...settings('Comptes et sauvegarde', 'Samsung Cloud'), ['Touchez ‘Restaurer les données’.'], ['Choisissez l’appareil et les éléments.'], ['Touchez ‘Restaurer’.']]),
  'g17-magnify': L('Activez le raccourci d’agrandissement et agrandissez une partie de l’écran en touchant trois fois.', [
    ...settings('Accessibilité', 'Améliorations de la visibilité', 'Agrandissement'), ['Touchez ‘Raccourci d’agrandissement’.'], ['Touchez l’interrupteur ‘Raccourci d’agrandissement’ pour l’activer.'],
    ['Touchez ‘Toucher l’écran trois fois’.'], ['Touchez vite trois fois l’endroit à agrandir.']]),
  'g17-contrast': L('Activez les polices à contraste élevé pour que le texte ressorte du fond.', [
    ...settings('Accessibilité', 'Améliorations de la visibilité'), ['Touchez l’interrupteur ‘Polices à contraste élevé’ pour l’activer.', 'Les lettres ont un contour plus foncé et ressortent.']]),
  'g17-talkback': L('Activez TalkBack pour que l’écran soit lu à voix haute, après avoir appris à le désactiver.', [
    [...open('Paramètres'), 'Avec TalkBack, la façon de toucher change. Lisez d’abord comment le désactiver.'], ...sub('Accessibilité', 'TalkBack'),
    ['Lisez d’abord comment le désactiver.'], ['Touchez l’interrupteur ‘TalkBack’ pour l’activer.', 'Ensuite, un toucher lit l’élément et deux touchers l’ouvrent.']]),
  'g17-caption': L('Activez Sous-titres instantanés pour les vidéos et Audio mono pour écouter d’une oreille.', [
    ...settings('Accessibilité', 'Améliorations de l’audition'), ['Touchez ‘Sous-titres instantanés’.'],
    ['Touchez l’interrupteur ‘Utiliser Sous-titres instantanés’ pour l’activer.', 'Les paroles des vidéos s’affichent en texte.'], BACK,
    ['Touchez l’interrupteur ‘Audio mono’ pour l’activer.', 'Vous entendez les deux côtés même avec une seule oreille.']]),
  'g17-hearing': L('Activez la compatibilité avec les appareils auditifs pour mieux entendre les appels.', [
    ...settings('Accessibilité', 'Améliorations de l’audition', 'Prise en charge des appareils auditifs'),
    ['Touchez l’interrupteur ‘Compatibilité avec les appareils auditifs’ pour l’activer.', 'Les appels sont plus clairs avec un appareil auditif.'], ['Connectez les appareils auditifs Bluetooth dans le menu Bluetooth.']]),
  'g17-touch': L('Facilitez le toucher : répondre d’un toucher, régler le délai d’appui et créer un raccourci d’accessibilité.', [
    ...settings('Accessibilité', 'Interaction et dextérité'),
    ['Touchez l’interrupteur ‘Mode toucher unique’ pour l’activer.', 'Vous répondez aux appels d’un toucher au lieu de glisser.'],
    ['Touchez ‘Délai d’appui prolongé’.', 'Si maintenir est difficile, allongez le délai.'], ['Choisissez la durée voulue.'], ['Touchez deux fois la touche Retour.'],
    ['Touchez ‘Raccourci d’accessibilité’.', 'Une fonction d’accessibilité souvent utilisée s’active d’un bouton.']]),
  'g18-usage': L('Découvrez quelles applis consomment le plus de batterie.', [
    ...settings('Batterie', 'Utilisation quotidienne'), ['Regardez les applis qui ont le plus consommé.', 'Si une appli peu utilisée consomme beaucoup, fermez-la ou supprimez-la.']]),
  'g18-saver': L('Activez l’économie d’énergie pour que la batterie dure plus longtemps.', [
    ...settings('Batterie'), ['Touchez l’interrupteur ‘Économie d’énergie’ pour l’activer.', 'La batterie dure plus. Certaines notifications peuvent arriver plus tard.', 'Vous pouvez aussi l’activer avec le bouton ‘Économie d’énergie’ des paramètres rapides.']]),
  'g18-storage': L('Voyez combien d’espace de stockage il reste.', [
    ...settings('Maintenance de l’appareil', 'Stockage'), ['Regardez l’espace restant.', 'Vider la corbeille et supprimer les doublons libère de la place.']]),
  'g18-clean': L('Trouvez et supprimez dans Mes fichiers les gros fichiers inutiles.', [
    open('Mes fichiers'), ['Touchez ‘Gérer le stockage’.'], ['Touchez ‘Fichiers volumineux’.'], ['Choisissez seulement les fichiers inutiles et touchez ‘Supprimer’.']]),
  'g18-care': L('Vérifiez et optimisez le téléphone avec Maintenance de l’appareil.', [...settings('Maintenance de l’appareil'), ['Touchez ‘Optimiser maintenant’.', 'Les applis inutilisées sont fermées et le téléphone est vérifié.']]),
  'g18-update': L('Recherchez et installez les mises à jour logicielles de votre Galaxy.', [
    ...settings('Mise à jour logicielle'), ['Touchez ‘Télécharger et installer’.', 'S’il y a une nouvelle version, elle se télécharge et s’installe. Faites-le en Wi-Fi et en charge.']]),
  'g18-version': L('Trouvez le modèle et la version One UI dans Paramètres → À propos du téléphone.', [
    ...settings('À propos du téléphone'), ['Regardez le nom du modèle en haut.'], ['Touchez ‘Informations sur le logiciel’.'], ['Regardez la ‘Version de One UI’.', 'Donnez-la au SAV avec le nom du modèle.']]),
  'g19-bixby': L('Faites lancer Bixby par la touche latérale et demandez-lui des choses à voix haute.', [
    ...settings('Fonctions avancées', 'Touche latérale'), ['Touchez ‘Activer Bixby’.', 'Maintenir la touche latérale lance maintenant Bixby.'],
    ['Maintenez la touche latérale et dites ce que vous voulez.', 'Par exemple : « Mets une alarme demain à 7 heures. »'], ['Relâchez la touche quand vous avez fini de parler.']]),
  'g19-circle': L('Cherchez quelque chose à l’écran en l’entourant avec Entourer pour chercher.', [
    ['Maintenez la touche Accueil en bas de l’écran.'], ['Dessinez un cercle avec le doigt autour de ce que vous cherchez.'],
    ['Lisez les résultats en bas.', '', 'Bixby Vision existe sur les séries Galaxy S25, S24 et S23. Le S26 utilise cette méthode (Entourer pour chercher).']]),
  'g19-interpret': L('Activez la Traduction en direct dans l’appli Téléphone et utilisez-la pendant un appel.', [
    open('Téléphone'), ['Touchez les trois points en haut à droite.'], ['Touchez ‘Paramètres’.'], ['Touchez ‘Traduction en direct’.'],
    ['Touchez l’interrupteur ‘Traduction en direct’ pour l’activer.'], ['Pendant un appel, touchez ‘Assistant d’appel’.'], ['Touchez ‘Traduction en direct’.']]),
  'g19-write': L('Corrigez orthographe et grammaire d’un message avec l’outil Galaxy AI du clavier.', [
    open('Messages'), ['Touchez une conversation.'], ['Écrivez votre message.'], ['Touchez l’icône Galaxy AI en haut à gauche du clavier.'],
    ['Touchez ‘Orthographe et grammaire’.', 'Les fautes sont corrigées. ‘Résumer’ raccourcit les longs textes.']]),
  'g19-transcribe': L('Transformez un enregistrement vocal en texte avec Galaxy AI dans l’Enregistreur vocal.', [
    open('Enregistreur vocal'), ['Touchez l’enregistrement à transformer.'], AI_ICON, ['Touchez ‘Transcrire’.'], ['Lisez le texte obtenu.']]),
  'g19-photo': L('Retirez une personne ou un objet d’une photo avec Galaxy AI dans la Galerie.', [
    GALLERY, ['Touchez la photo à modifier.'], AI_ICON, ['Touchez ‘Gomme à objets’.'], ['Entourez du doigt la personne ou l’objet à retirer.'], ['Touchez ‘Effacer’.'],
    ['Si le résultat vous plaît, touchez ‘Enregistrer’.']]),
  'g19-support': L('Voyez dans les Paramètres quelles fonctions Galaxy AI votre téléphone prend en charge.', [
    ...settings('Galaxy AI'), ['Regardez la liste des fonctions IA disponibles sur votre téléphone.', 'Les fonctions absentes de la liste ne sont pas prises en charge sur ce modèle.', 'Certaines fonctions dépendent du modèle et de l’opérateur, ou demandent Internet.']]),
  'g20-smartview': L('Affichez l’écran du téléphone sur une TV avec Smart View.', [
    QUICK, ['Touchez ‘Smart View’.'], ['Touchez le nom de la TV.', 'Ça marche mieux si la TV et le téléphone sont sur le même Wi-Fi.'], ['Touchez ‘Démarrer maintenant’.']]),
  'g20-pc': L('Connectez votre Galaxy à un PC Windows avec Lien avec Windows.', [
    ...settings('Appareils connectés', 'Lien avec Windows'), ['Lisez les instructions à l’écran.'], ['Sur l’ordinateur, ouvrez l’adresse indiquée pour terminer la connexion.']]),
  'g20-dex': L('Découvrez ce qu’est Samsung DeX et où sont ses réglages.', [...settings('Appareils connectés', 'Samsung DeX'), ['Lisez les informations.']]),
  'g20-watch': L('Connectez une montre ou des écouteurs Galaxy avec l’appli Galaxy Wearable.', [
    ['Touchez l’appli ‘Galaxy Wearable’.', 'Si elle n’est pas sur l’écran d’accueil, cherchez-la dans l’écran des applications.'], ['Touchez ‘Démarrer’.'], ['Suivez les instructions à l’écran pour terminer.']]),
  'g20-smartthings': L('Connectez des appareils ménagers au téléphone avec SmartThings.', [
    open('SmartThings'), ['Touchez ‘+’ (Ajouter) en haut.'], ['Choisissez l’appareil à connecter.'], ['Suivez les instructions à l’écran pour terminer.']]),
  'g20-musicshare': L('Activez Music Share pour que vos amis diffusent leur musique sur votre enceinte Bluetooth.', [
    ...settings('Appareils connectés', 'Music Share'), ['Touchez l’interrupteur ‘Music Share’ pour l’activer.', 'Vos amis peuvent jouer la musique de leur téléphone sur votre enceinte Bluetooth.']]),
  'g21-split': L('Utilisez deux applis en même temps avec l’écran partagé.', [
    ['Touchez la touche Récentes en bas à gauche.'], ['Touchez la petite icône en haut d’une appli.'], ['Touchez ‘Ouvrir en mode écran partagé’.'], ['Choisissez la deuxième appli pour la moitié du bas.']]),
  'g21-modes': L('Activez le mode Sommeil dans Modes et routines.', [
    ...settings('Modes et routines', 'Modes'), ['Touchez ‘Sommeil’.'], ['Touchez ‘Activer’.', 'Pendant votre sommeil, les notifications se taisent et l’écran s’assombrit.']]),
  'g21-aod': L('Affichez l’heure même écran éteint avec Always On Display.', [
    ...settings('Écran de verrouillage et AOD'), ['Touchez l’interrupteur ‘Always On Display’ pour l’activer.', 'L’heure reste visible écran éteint. Cela consomme un peu plus de batterie.'],
    ['Pour changer le style d’horloge, maintenez appuyé l’écran de verrouillage.']]),
  'g21-wellbeing': L('Voyez combien de temps vous avez utilisé le téléphone aujourd’hui et réglez des minuteurs d’applis.', [
    ...settings('Bien-être numérique'), ['Regardez votre temps d’utilisation du jour.'], ['Touchez ‘Minuteurs d’applis’.', 'Vous pouvez fixer une limite quotidienne pour chaque appli.']]),
  'g21-apps': L('Découvrez Samsung Health, Samsung Kids et Game Booster.', [
    ['Touchez l’appli ‘Samsung Health’.', 'Si elle n’est pas sur l’écran d’accueil, cherchez-la dans l’écran des applications.'], ['Regardez vos pas et vos activités.'],
    ...settings('Applications', 'Samsung Kids'), ['Touchez ‘Ouvrir’.', 'Vous choisissez les applis et le temps d’utilisation pour vos petits-enfants.'], ['Pendant un jeu, touchez l’icône Game Booster en bas de l’écran.']]),
  'g21-samsung': L('Trouvez les applis Samsung.com et Samsung Global Goals, ainsi que Samsung News.', [
    open('Samsung.com'), ['Ici, vous lisez les nouveautés des produits Samsung et obtenez de l’aide.'], HOME_BTN,
    ['Touchez l’appli ‘Samsung Global Goals’.', 'Cherchez ‘Samsung Global Goals’ dans l’écran des applications.'], ['Cherchez Samsung News avec la recherche de l’écran des applications.']]),
  'g21-spen': L('Sortez le S Pen, ouvrez son menu et essayez PENUP sur les modèles Ultra compatibles.', [
    ['Appuyez doucement sur le bout du S Pen, en bas du téléphone.'], ['Touchez la fonction voulue dans le menu.'], open('PENUP'), ['À la fin, remettez le S Pen jusqu’au déclic.']]),
  'g22-ring': L('Que vérifier quand le téléphone ne sonne pas.', [
    QUICK, ['Touchez le bouton ‘Son’.', 'S’il est sur Silencieux ou Vibreur, touchez-le pour passer sur Son.'], ['Si ‘Ne pas déranger’ est bleu (activé), touchez-le pour le désactiver.'],
    ['Appuyez sur la touche Volume haut sur le côté pour monter le son.']]),
  'g22-network': L('Que vérifier quand les appels ou Internet ne fonctionnent plus.', [
    QUICK, ['Si le ‘Mode Avion’ est activé, touchez-le pour le désactiver.'], ['Si les ‘Données mobiles’ sont désactivées, touchez-les pour les activer.'],
    ['Si le signal est faible, changez d’endroit.'], ['Si ça ne marche toujours pas, redémarrez le téléphone.']]),
  'g22-charge': L('Que vérifier quand votre Galaxy ne charge pas.', [
    ['Vérifiez que le câble et le chargeur sont bien branchés.'], ['Si le port est mouillé, laissez-le sécher complètement avant de charger.'],
    ...settings('Batterie', 'Paramètres de charge'), ['Si ça ne charge toujours pas, apportez téléphone, chargeur et câble au SAV.']]),
  'g22-hot': L('Que faire quand le téléphone chauffe.', [
    ['S’il est en charge, débranchez le chargeur.'], ['Touchez la touche Récentes.'], ['Touchez ‘Tout fermer’ pour fermer les applis.'], ['Arrêtez de l’utiliser un moment et laissez-le refroidir au frais.']]),
  'g22-freeze': L('Forcez le redémarrage d’un Galaxy bloqué avec deux touches.', [
    ['Maintenez ensemble la touche latérale et Volume bas plus de 7 secondes.', 'Maintenez jusqu’à ce que l’écran s’éteigne.'], ['Quand l’écran s’éteint, relâchez et attendez.']]),
  'g22-water': L('Que vérifier et faire si le téléphone est mouillé.', [
    ['Séchez-le complètement avec un chiffon doux.'], ['Ne branchez pas le chargeur avant qu’il soit complètement sec.'],
    ['Si c’était de l’eau de mer, de piscine ou savonneuse, rincez-le à l’eau claire puis séchez-le.'], ['Si quelque chose semble anormal, apportez-le tout de suite au SAV.']]),
  'g22-members': L('Cherchez les problèmes avec le Diagnostic du téléphone de Samsung Members.', [
    ['Touchez l’appli ‘Samsung Members’.', 'Si elle n’est pas sur l’écran d’accueil, cherchez-la dans l’écran des applications.'], ['Touchez ‘Assistance’.'], ['Touchez ‘Diagnostic du téléphone’.'],
    ['Touchez ‘Tout tester’ ou l’élément à vérifier.']]),
  'g22-service': L('Notez le modèle et le problème avant de contacter le SAV Samsung.', [
    ...settings('À propos du téléphone'), ['Notez le numéro de modèle (par exemple SM-S942N).'], ['Notez quand et comment le problème arrive.'],
    ['Contactez l’assistance Samsung de votre pays ou prenez rendez-vous au SAV.', 'Trouvez la page d’assistance de votre pays sur samsung.com/support.']]),
};
