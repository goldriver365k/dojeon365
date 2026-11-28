export const FIND = 'अगर होम स्क्रीन पर नहीं है, तो ऊपर स्वाइप करके ऐप्स स्क्रीन में ढूँढें।';
export const SCROLL = 'अगर नहीं दिखे, तो ऊपर स्वाइप करके ढूँढें।';
export const open = (app) => [`‘${app}’ ऐप पर टैप करें।`, FIND];
export const item = (name, hint = SCROLL) => [`‘${name}’ पर टैप करें।`, hint];
export const settings = (...names) => [open('सेटिंग्स'), ...names.map((n) => item(n))];
export const BACK = ['नीचे वापस बटन पर टैप करें।', 'आप पिछली स्क्रीन पर लौट आएँगे।'];
export const QUICK = ['स्क्रीन के ऊपर दाएँ कोने से नीचे स्वाइप करें।', 'क्विक सेटिंग्स पैनल खुलेगा। ऊपर बाएँ से स्वाइप करने पर सूचनाएँ खुलती हैं।'];
export const HOME_BTN = ['नीचे बीच में होम बटन पर टैप करें।', 'आप पहली स्क्रीन (होम स्क्रीन) पर लौट आएँगे।'];
