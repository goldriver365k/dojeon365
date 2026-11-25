export const FIND = 'Si no está en la pantalla de inicio, desliza hacia arriba para buscarla en la pantalla de aplicaciones.';
export const SCROLL = 'Si no lo ves, desliza hacia arriba para buscarlo.';
export const open = (app) => [`Toca la aplicación ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Toca ‘${name}’.`, hint];
export const settings = (...names) => [open('Ajustes'), ...names.map((n) => item(n))];
