export const FIND = 'إن لم يكن على الشاشة الرئيسية، اسحب لأعلى وابحث عنه في شاشة التطبيقات.';
export const SCROLL = 'إن لم تره، اسحب لأعلى للبحث عنه.';
export const open = (app) => [`اضغط على تطبيق «${app}».`, FIND];
export const item = (name, hint = SCROLL) => [`اضغط على «${name}».`, hint];
export const settings = (...names) => [open('الإعدادات'), ...names.map((n) => item(n))];
export const BACK = ['اضغط زر الرجوع في الأسفل.', 'ستعود إلى الشاشة السابقة.'];
export const QUICK = ['اسحب لأسفل من أعلى يمين الشاشة.', 'ستُفتح لوحة الإعدادات السريعة. السحب من أعلى اليسار يفتح الإشعارات.'];
export const HOME_BTN = ['اضغط زر الشاشة الرئيسية في منتصف الأسفل.', 'ستعود إلى الشاشة الأولى (الشاشة الرئيسية).'];
