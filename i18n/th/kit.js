export const FIND = 'หากไม่มีบนหน้าจอหลัก ให้ปัดขึ้นเพื่อหาในหน้าจอแอป';
export const SCROLL = 'หากมองไม่เห็น ให้ปัดขึ้นเพื่อหา';
export const open = (app) => [`แตะแอป ‘${app}’`, FIND];
export const item = (name, hint = SCROLL) => [`แตะ ‘${name}’`, hint];
export const settings = (...names) => [open('การตั้งค่า'), ...names.map((n) => item(n))];
export const BACK = ['แตะปุ่มย้อนกลับด้านล่าง', 'จะกลับไปที่หน้าจอก่อนหน้า'];
export const QUICK = ['ปัดลงจากมุมขวาบนของหน้าจอ', 'แผงการตั้งค่าด่วนจะเปิดขึ้น หากปัดจากมุมซ้ายบนจะเป็นการแจ้งเตือน'];
export const HOME_BTN = ['แตะปุ่มหน้าหลักตรงกลางด้านล่าง', 'จะกลับไปที่หน้าจอแรก (หน้าจอหลัก)'];
