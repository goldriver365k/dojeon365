export const FIND = 'Se non è nella schermata Home, scorri verso l’alto per trovarla nella schermata delle app.';
export const SCROLL = 'Se non lo vedi, scorri verso l’alto.';
export const open = (app) => [`Tocca l’app ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Tocca ‘${name}’.`, hint];
export const settings = (...names) => [open('Impostazioni'), ...names.map((n) => item(n))];
export const BACK = ['Tocca il tasto Indietro in basso.', 'Torni alla schermata precedente.'];
export const QUICK = ['Scorri verso il basso dall’angolo in alto a destra.', 'Si apre il pannello delle impostazioni rapide. Dall’angolo in alto a sinistra si aprono le notifiche.'];
export const HOME_BTN = ['Tocca il tasto Home, in basso al centro.', 'Torni alla prima schermata (la schermata Home).'];
