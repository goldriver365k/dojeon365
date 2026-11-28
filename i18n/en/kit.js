// Shared English step helpers. A step is [text, hint?, note?].
export const FIND = 'If it is not on the Home screen, swipe up to find it on the Apps screen.';
export const SCROLL = 'If you cannot see it, swipe up to find it.';
export const open = (app) => [`Tap the ‘${app}’ app.`, FIND];
export const item = (name, hint = SCROLL) => [`Tap ‘${name}’.`, hint];
export const settings = (...names) => [open('Settings'), ...names.map((n) => item(n))];
export const BACK = ['Tap the Back button at the bottom.', 'You go back to the previous screen.'];
export const QUICK = ['Swipe down from the top right of the screen.', 'The quick settings panel opens. Swiping down from the top left opens notifications.'];
