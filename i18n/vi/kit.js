export const FIND = 'Nếu không có trên màn hình Chính, hãy vuốt lên để tìm trong màn hình Ứng dụng.';
export const SCROLL = 'Nếu không thấy, hãy vuốt lên để tìm.';
export const open = (app) => [`Chạm vào ứng dụng ‘${app}’.`, FIND];
export const item = (name, hint = SCROLL) => [`Chạm vào ‘${name}’.`, hint];
export const settings = (...names) => [open('Cài đặt'), ...names.map((n) => item(n))];
export const BACK = ['Chạm vào nút Quay lại ở phía dưới.', 'Bạn trở về màn hình trước.'];
export const QUICK = ['Vuốt xuống từ góc trên bên phải màn hình.', 'Bảng cài đặt nhanh mở ra. Vuốt từ góc trên bên trái sẽ mở thông báo.'];
export const HOME_BTN = ['Chạm vào nút Màn hình chính ở giữa phía dưới.', 'Bạn trở về màn hình đầu tiên (màn hình Chính).'];
