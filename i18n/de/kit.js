export const FIND = 'Wenn sie nicht auf dem Startbildschirm ist, wischen Sie nach oben und suchen Sie sie im Apps-Bildschirm.';
export const SCROLL = 'Wenn Sie es nicht sehen, wischen Sie nach oben.';
export const open = (app) => [`Tippen Sie auf die App ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Tippen Sie auf ‘${name}’.`, hint];
export const settings = (...names) => [open('Einstellungen'), ...names.map((n) => item(n))];
export const BACK = ['Tippen Sie unten auf die Zurück-Taste.', 'Sie kehren zum vorherigen Bildschirm zurück.'];
export const QUICK = ['Wischen Sie von oben rechts nach unten.', 'Das Schnelleinstellungsfeld öffnet sich. Von oben links öffnen sich die Benachrichtigungen.'];
export const HOME_BTN = ['Tippen Sie unten in der Mitte auf die Home-Taste.', 'Sie kehren zum ersten Bildschirm (Startbildschirm) zurück.'];
