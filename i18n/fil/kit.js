export const FIND = 'Kung wala sa Home screen, mag-swipe pataas para hanapin ito sa screen ng Mga App.';
export const SCROLL = 'Kung hindi mo makita, mag-swipe pataas para hanapin ito.';
export const open = (app) => [`I-tap ang app na ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`I-tap ang ‘${name}’.`, hint];
export const settings = (...names) => [open('Mga Setting'), ...names.map((n) => item(n))];
export const BACK = ['I-tap ang button na Bumalik sa ibaba.', 'Babalik ka sa naunang screen.'];
export const QUICK = ['Mag-swipe pababa mula sa kanang itaas ng screen.', 'Bubukas ang panel ng Mabilisang setting. Kapag mula sa kaliwang itaas, bubukas ang mga notification.'];
export const HOME_BTN = ['I-tap ang button na Home sa gitna sa ibaba.', 'Babalik ka sa unang screen (Home screen).'];
