export const FIND = 'Si no está en la pantalla de inicio, desliza hacia arriba para buscarla en la pantalla de aplicaciones.';
export const SCROLL = 'Si no lo ves, desliza hacia arriba para buscarlo.';
export const open = (app) => [`Toca la aplicación ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Toca ‘${name}’.`, hint];
export const settings = (...names) => [open('Ajustes'), ...names.map((n) => item(n))];
export const BACK = ['Toca el botón Atrás, abajo.', 'Vuelves a la pantalla anterior.'];
export const QUICK = ['Desliza hacia abajo desde la parte superior derecha de la pantalla.', 'Se abre el panel de ajustes rápidos. Desde la parte superior izquierda se abren las notificaciones.'];
