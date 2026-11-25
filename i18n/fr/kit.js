export const FIND = 'Si elle n’est pas sur l’écran d’accueil, balayez vers le haut pour la trouver dans l’écran des applications.';
export const SCROLL = 'Si vous ne le voyez pas, balayez vers le haut.';
export const open = (app) => [`Touchez l’application ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Touchez ‘${name}’.`, hint];
export const settings = (...names) => [open('Paramètres'), ...names.map((n) => item(n))];
export const BACK = ['Touchez la touche Retour en bas.', 'Vous revenez à l’écran précédent.'];
export const QUICK = ['Balayez vers le bas depuis le coin supérieur droit de l’écran.', 'Le volet des paramètres rapides s’ouvre. Depuis le coin supérieur gauche, ce sont les notifications.'];
export const HOME_BTN = ['Touchez la touche Accueil, en bas au centre.', 'Vous revenez au premier écran (l’écran d’accueil).'];
