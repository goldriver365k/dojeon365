export const FIND = 'Se não estiver na tela inicial, deslize para cima para encontrá-lo na tela de aplicativos.';
export const SCROLL = 'Se não aparecer, deslize para cima para encontrar.';
export const open = (app) => [`Toque no aplicativo ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Toque em ‘${name}’.`, hint];
export const settings = (...names) => [open('Configurações'), ...names.map((n) => item(n))];
export const BACK = ['Toque no botão Voltar, embaixo.', 'Você volta para a tela anterior.'];
export const QUICK = ['Deslize para baixo a partir do canto superior direito da tela.', 'Abre o painel de configurações rápidas. Do canto superior esquerdo abrem as notificações.'];
export const HOME_BTN = ['Toque no botão Início, embaixo no centro.', 'Você volta para a primeira tela (a tela inicial).'];
