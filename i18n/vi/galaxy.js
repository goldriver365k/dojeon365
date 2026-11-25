// Bài học Galaxy bằng tiếng Việt (bản nháp, chưa xem lại → noindex, không có trong sitemap).
// steps[i] tương ứng với thẻ tiếng Hàn thứ i của cùng bài học.
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

export const GROUPS = { basic: 'Cơ bản', life: 'Hằng ngày', apply: 'Tính năng khác', adv: 'Nâng cao và khắc phục sự cố' };

export const CATEGORIES = {
  1: ['Bật và tắt điện thoại', 'Phím, sạc pin, nguồn và màn hình khóa'],
  2: ['Chạm, giữ và vuốt', 'Thao tác cơ bản và các nút điều hướng'],
  3: ['Chữ và âm thanh dễ chịu hơn', 'Chữ to hơn, độ sáng, thời gian tắt màn hình và âm lượng'],
  4: ['Gọi và nghe điện thoại', 'Gọi, nghe, loa ngoài và chặn số'],
  5: ['Lưu và tìm danh bạ', 'Liên hệ mới, tìm kiếm, sửa và yêu thích'],
  6: ['Gửi tin nhắn', 'Viết, sửa, sao chép và đính kèm ảnh'],
  7: ['Thông báo và cài đặt nhanh', 'Bảng thông báo, đèn pin, xoay màn hình và Không làm phiền'],
  8: ['Wi-Fi, dữ liệu và Bluetooth', 'Kết nối Internet và thiết bị khác'],
  9: ['Tìm trên Internet và cài ứng dụng', 'Trình duyệt, mã QR, tải xuống và kho ứng dụng'],
  10: ['Chụp ảnh và quay video', 'Máy ảnh, ảnh tự chụp, thu phóng, hẹn giờ và video'],
  11: ['Sắp xếp ảnh và tệp', 'Bộ sưu tập, chỉnh sửa, khôi phục và Tệp của bạn'],
  12: ['Màn hình Chính và công cụ', 'Ứng dụng, thư mục, hình nền, báo thức, lịch và ghi chú'],
  13: ['Chia sẻ ảnh với gia đình', 'Email, video và gọi video'],
  14: ['Thanh toán bằng Samsung Wallet', 'Mở Wallet và chọn thẻ'],
  15: ['Dùng điện thoại an toàn', 'Khóa màn hình, sinh trắc học, quyền và SOS khẩn cấp'],
  16: ['Chuyển sang điện thoại mới', 'Cài đặt ban đầu, tài khoản, Smart Switch và sao lưu'],
  17: ['Thị giác, thính giác và cảm ứng', 'Phóng to, độ tương phản, TalkBack và phụ đề'],
  18: ['Pin và bộ nhớ', 'Tiết kiệm pin, bộ nhớ, chăm sóc thiết bị và cập nhật'],
  19: ['Galaxy AI và Bixby', 'Yêu cầu bằng giọng nói và tính năng Galaxy AI'],
  20: ['Kết nối với TV, máy tính và đồng hồ', 'Smart View, PC, DeX, thiết bị đeo và SmartThings'],
  21: ['Tính năng hữu ích khác', 'Chia đôi màn hình, chế độ và quy trình, Always On Display'],
  22: ['Khi có sự cố', 'Không có tiếng, không có sóng, sạc, nóng máy và treo máy'],
};

export const TITLES = {
  'g01-buttons': ['phim-ben-canh', 'Tìm các phím bên cạnh'], 'g01-charge': ['sac-pin', 'Sạc pin điện thoại'],
  'g01-power': ['tat-va-bat-lai', 'Tắt và bật lại điện thoại'], 'g01-restart': ['khoi-dong-lai', 'Khởi động lại điện thoại'],
  'g01-lock': ['khoa-mo-khoa-man-hinh', 'Khóa và mở khóa màn hình'], 'g02-tap': ['cham-mot-lan', 'Chạm một lần'],
  'g02-hold': ['cham-va-giu', 'Chạm và giữ'], 'g02-swipe': ['vuot', 'Vuốt để di chuyển'],
  'g02-pinch': ['phong-to-hai-ngon', 'Phóng to bằng hai ngón tay'], 'g02-back': ['nut-quay-lai', 'Quay lại'],
  'g02-home': ['nut-man-hinh-chinh', 'Về màn hình Chính'], 'g02-recent': ['ung-dung-gan-day', 'Mở ứng dụng gần đây'],
  'g03-font': ['chu-to-hon', 'Làm chữ to hơn'], 'g03-zoom': ['thu-phong-man-hinh', 'Làm màn hình và biểu tượng to hơn'],
  'g03-easy': ['che-do-de-dang', 'Bật Chế độ dễ dàng'], 'g03-bright': ['do-sang', 'Chỉnh độ sáng'],
  'g03-timeout': ['thoi-gian-tat-man-hinh', 'Đổi thời gian màn hình tự tắt'], 'g03-sound': ['nhac-chuong-rung', 'Chỉnh âm lượng nhạc chuông và rung'],
  'g04-call': ['goi-dien', 'Gọi điện bằng bàn phím số'], 'g04-answer': ['nghe-hoac-tu-choi', 'Nghe hoặc từ chối cuộc gọi'],
  'g04-speaker': ['loa-ngoai', 'Bật loa ngoài khi đang gọi'], 'g04-missed': ['goi-lai-cuoc-goi-nho', 'Gọi lại cuộc gọi nhỡ'],
  'g04-log': ['nhat-ky-cuoc-goi', 'Xem nhật ký cuộc gọi'], 'g04-block': ['chan-so', 'Chặn số rác'],
  'g05-new': ['luu-lien-he', 'Lưu liên hệ mới'], 'g05-search': ['tim-lien-he', 'Tìm liên hệ theo tên'],
  'g05-edit': ['sua-so', 'Sửa số điện thoại'], 'g05-speed': ['quay-so-nhanh', 'Thêm người hay gọi'],
  'g05-share': ['chia-se-lien-he', 'Chia sẻ liên hệ'], 'g06-send': ['gui-tra-loi-tin-nhan', 'Gửi và trả lời tin nhắn'],
  'g06-type': ['chu-so-ky-hieu', 'Gõ chữ, số và ký hiệu'], 'g06-fix': ['sua-loi-go', 'Sửa lỗi gõ'],
  'g06-copy': ['sao-chep-dan', 'Sao chép và dán'], 'g06-photo': ['dinh-kem-anh', 'Đính kèm ảnh vào tin nhắn'],
  'g06-translate': ['dich-van-ban', 'Dịch văn bản'], 'g07-noti': ['thong-bao', 'Xem và xóa thông báo'],
  'g07-appnoti': ['thong-bao-ung-dung', 'Chỉnh thông báo ứng dụng'], 'g07-quick': ['cai-dat-nhanh', 'Mở bảng cài đặt nhanh'],
  'g07-flash': ['den-pin', 'Bật đèn pin'], 'g07-rotate': ['xoay-man-hinh', 'Điều khiển xoay màn hình'],
  'g07-dnd': ['khong-lam-phien-che-do-may-bay', 'Dùng Không làm phiền và Chế độ máy bay'], 'g08-wifi': ['ket-noi-wifi', 'Kết nối Wi-Fi'],
  'g08-data': ['du-lieu-di-dong', 'Bật và tắt dữ liệu di động'], 'g08-usage': ['su-dung-du-lieu', 'Xem lượng dữ liệu đã dùng'],
  'g08-bt': ['tai-nghe-bluetooth', 'Kết nối tai nghe Bluetooth'], 'g08-hotspot': ['diem-truy-cap-di-dong', 'Dùng Điểm truy cập di động'],
  'g08-location': ['vi-tri-nfc', 'Tìm cài đặt vị trí và NFC'], 'g09-search': ['tim-tren-samsung-internet', 'Tìm kiếm trên Samsung Internet'],
  'g09-bookmark': ['luu-trang', 'Lưu trang hay xem'], 'g09-qr': ['mo-ma-qr', 'Mở mã QR'],
  'g09-files': ['tep-da-tai', 'Tìm tệp đã tải xuống'], 'g09-stores': ['play-store-galaxy-store', 'Dùng Play Store và Galaxy Store'],
  'g09-install': ['cai-cap-nhat-xoa-ung-dung', 'Cài, cập nhật và xóa ứng dụng'], 'g09-google': ['ung-dung-google', 'Tìm ứng dụng Google và nhà mạng'],
  'g10-open': ['mo-may-anh', 'Mở máy ảnh'], 'g10-focus': ['lay-net', 'Lấy nét máy ảnh'],
  'g10-switch': ['doi-camera', 'Đổi giữa camera trước và sau'], 'g10-selfie': ['chup-anh-tu-suong', 'Chụp ảnh tự sướng'],
  'g10-zoom': ['phong-to-khi-chup', 'Phóng to khi chụp'], 'g10-timer': ['hen-gio-may-anh', 'Dùng hẹn giờ của máy ảnh'],
  'g10-modes': ['chan-dung-dem', 'Thử chế độ Chân dung và Đêm'], 'g10-video': ['quay-video', 'Quay video'],
  'g10-capture': ['chup-ghi-man-hinh', 'Chụp hoặc ghi màn hình'], 'g11-latest': ['anh-moi-chup', 'Tìm ảnh vừa chụp'],
  'g11-album': ['tao-album', 'Tạo album'], 'g11-edit': ['cat-lam-sang-anh', 'Cắt và làm sáng ảnh'],
  'g11-text': ['sao-chep-chu-trong-anh', 'Sao chép chữ trong ảnh'], 'g11-multi': ['chia-se-nhieu-anh', 'Chia sẻ nhiều ảnh'],
  'g11-restore': ['khoi-phuc-anh', 'Khôi phục ảnh đã xóa'], 'g11-docs': ['tai-lieu-tep-cua-ban', 'Tìm tài liệu trong Tệp của bạn'],
  'g11-quickshare': ['quick-share', 'Gửi tệp bằng Quick Share'], 'g12-addapp': ['ung-dung-man-hinh-chinh', 'Đặt ứng dụng lên màn hình Chính'],
  'g12-folder': ['thu-muc-tien-ich', 'Tạo thư mục và tiện ích'], 'g12-wallpaper': ['hinh-nen-chu-de', 'Đổi hình nền, chủ đề và màn hình khóa'],
  'g12-alarm': ['bao-thuc-hen-gio', 'Đặt báo thức và hẹn giờ'], 'g12-calendar': ['lich-hen', 'Thêm lịch hẹn vào lịch'],
  'g12-reminder': ['nhac-viec', 'Nhận nhắc việc'], 'g12-note': ['samsung-notes', 'Dùng Samsung Notes'],
  'g12-recorder': ['ghi-am', 'Ghi âm giọng nói'], 'g12-tools': ['thoi-tiet-may-tinh-radio', 'Dùng thời tiết, máy tính và radio'],
  'x13-gmail': ['gui-anh-qua-gmail', 'Gửi ảnh qua email bằng Gmail'], 'x13-video': ['gui-video-cho-gia-dinh', 'Gửi video cho gia đình'],
  'x13-meet': ['goi-video-google-meet', 'Gọi video bằng Google Meet'], 'g14-open': ['mo-samsung-wallet', 'Mở Samsung Wallet'],
  'g14-add': ['them-the', 'Xem màn hình thêm thẻ'], 'g14-pay': ['chon-the-thanh-toan', 'Chọn thẻ để thanh toán'],
  'g15-pin': ['tao-ma-pin', 'Tạo mã PIN'], 'g15-bio': ['van-tay-khuon-mat', 'Đăng ký vân tay và khuôn mặt'],
  'g15-perm': ['quyen-vi-tri', 'Kiểm tra quyền ứng dụng và vị trí'], 'g15-folder': ['thu-muc-bao-mat-samsung-pass', 'Tìm hiểu Thư mục bảo mật và Samsung Pass'],
  'g15-medical': ['thong-tin-y-te-lien-he-khan-cap', 'Thêm thông tin y tế và liên hệ khẩn cấp'], 'g15-sos': ['sos-khan-cap', 'Kiểm tra SOS khẩn cấp'],
  'g15-find': ['samsung-find', 'Tìm điện thoại bằng Samsung Find'], 'g16-setup': ['cai-dat-ban-dau', 'Cài đặt điện thoại lần đầu'],
  'g16-sim': ['sim-esim', 'Tìm hiểu SIM và eSIM'], 'g16-account': ['tai-khoan-samsung-google', 'Kiểm tra tài khoản Samsung và Google'],
  'g16-switch': ['smart-switch', 'Chuyển danh bạ và ảnh bằng Smart Switch'], 'g16-backup': ['kiem-tra-sao-luu', 'Kiểm tra sao lưu'],
  'g16-restore': ['khoi-phuc-sao-luu', 'Khôi phục từ bản sao lưu'], 'g17-magnify': ['phong-to', 'Phóng to một phần màn hình'],
  'g17-contrast': ['phong-chu-tuong-phan-cao', 'Tăng độ tương phản của chữ'], 'g17-talkback': ['talkback', 'Đọc màn hình bằng TalkBack'],
  'g17-caption': ['am-thanh-phu-de', 'Chỉnh âm thanh và phụ đề'], 'g17-hearing': ['may-tro-thinh', 'Kiểm tra hỗ trợ máy trợ thính'],
  'g17-touch': ['cai-dat-cham', 'Chỉnh cảm ứng và phím tắt hỗ trợ'], 'g18-usage': ['ung-dung-ton-pin', 'Tìm ứng dụng tốn pin'],
  'g18-saver': ['tiet-kiem-pin', 'Bật Tiết kiệm pin'], 'g18-storage': ['kiem-tra-bo-nho', 'Kiểm tra bộ nhớ'],
  'g18-clean': ['tep-lon', 'Dọn tệp lớn'], 'g18-care': ['cham-soc-thiet-bi', 'Kiểm tra máy bằng Chăm sóc thiết bị'],
  'g18-update': ['cap-nhat-phan-mem', 'Cập nhật phần mềm'], 'g18-version': ['kieu-may-phien-ban-one-ui', 'Kiểm tra kiểu máy và phiên bản One UI'],
  'g19-bixby': ['hoi-bixby', 'Nhờ Bixby bằng giọng nói'], 'g19-circle': ['khoanh-tron-de-tim', 'Tìm thứ đang thấy trên màn hình'],
  'g19-interpret': ['dich-cuoc-goi', 'Tìm hiểu dịch cuộc gọi và Phiên dịch'], 'g19-write': ['chinh-tom-tat-van-ban', 'Chỉnh sửa và tóm tắt văn bản'],
  'g19-transcribe': ['chuyen-ghi-am-thanh-chu', 'Chuyển bản ghi âm thành chữ'], 'g19-photo': ['sua-anh-bang-ai', 'Sửa ảnh bằng AI'],
  'g19-support': ['tinh-nang-theo-kieu-may', 'Xem tính năng theo kiểu máy'], 'g20-smartview': ['smart-view', 'Chiếu màn hình lên TV bằng Smart View'],
  'g20-pc': ['ket-noi-may-tinh', 'Kết nối với máy tính'], 'g20-dex': ['samsung-dex', 'Tìm hiểu Samsung DeX'],
  'g20-watch': ['dong-ho-tai-nghe', 'Kết nối đồng hồ và tai nghe'], 'g20-smartthings': ['smartthings', 'Kết nối thiết bị gia dụng bằng SmartThings'],
  'g20-musicshare': ['music-share', 'Tìm hiểu Music Share'], 'g21-split': ['chia-doi-man-hinh', 'Dùng hai ứng dụng bằng chia đôi màn hình'],
  'g21-modes': ['che-do-quy-trinh', 'Thiết lập Chế độ và Quy trình'], 'g21-aod': ['always-on-display', 'Hiện đồng hồ khi tắt màn hình'],
  'g21-wellbeing': ['digital-wellbeing', 'Xem thời gian dùng máy với Sức khỏe kỹ thuật số'], 'g21-apps': ['samsung-health-kids-game-booster', 'Tìm hiểu Samsung Health, Samsung Kids và Game Booster'],
  'g21-samsung': ['samsung-news-samsung-com', 'Tìm Samsung News, Samsung.com và Global Goals'], 'g21-spen': ['s-pen', 'Dùng bút S Pen trên kiểu máy hỗ trợ'],
  'g22-ring': ['khong-co-chuong', 'Khi nhạc chuông không kêu'], 'g22-network': ['khong-goi-khong-internet', 'Khi không gọi được hoặc không có Internet'],
  'g22-charge': ['khong-sac-duoc', 'Khi điện thoại không sạc được'], 'g22-hot': ['may-nong', 'Khi điện thoại bị nóng'],
  'g22-freeze': ['man-hinh-bi-treo', 'Khi màn hình bị treo'], 'g22-water': ['may-bi-uot', 'Cần kiểm tra gì khi máy bị ướt'],
  'g22-members': ['chan-doan-samsung-members', 'Chẩn đoán bằng Samsung Members'], 'g22-service': ['truoc-khi-bao-hanh', 'Ghi lại kiểu máy và triệu chứng trước khi đi bảo hành'],
};

const PHONE = open('Điện thoại');
const CONTACTS = open('Danh bạ');
const MESSAGES = open('Tin nhắn');
const CAMERA = open('Máy ảnh');
const GALLERY = open('Bộ sưu tập');
const SHUTTER = ['Chạm vào nút chụp màu trắng.'];
const REAL = 'Bài này thay đổi cài đặt thật hoặc có kết quả thật. Hãy đọc hết các bước trước rồi mới làm trên điện thoại.';
const AI_ICON = ['Chạm vào biểu tượng Galaxy AI.'];
const CHECK = 'Bài học mới viết cho trang quốc tế. Giao diện ứng dụng Google hay thay đổi; hãy kiểm tra trên điện thoại thật.';
const sub = (...names) => names.map((n) => item(n));
const L = (desc, steps, extra = {}) => ({ desc, steps, ...extra });

export const LESSONS = {
  'g01-buttons': L('Biết vị trí phím Tăng âm lượng, Giảm âm lượng và phím Cạnh trên điện thoại Galaxy và công dụng của chúng.', [
    ['Nhìn vào cạnh phải điện thoại.', 'Có ba phím. Từ trên xuống: Tăng âm lượng, Giảm âm lượng và phím Cạnh.'],
    ['Bấm phím Cạnh trong hình.', 'Đây là phím dưới cùng. Dùng để bật, tắt điện thoại hoặc tắt màn hình.'],
    ['Bấm phím Giảm âm lượng trong hình.', 'Đây là phím ở giữa. Nó làm nhỏ tiếng.'],
    ['Bấm phím Tăng âm lượng trong hình.', 'Đây là phím trên cùng. Nó làm to tiếng.']]),
  'g01-charge': L('Sạc điện thoại Galaxy từng bước: cắm sạc, nối dây và xem biểu tượng sạc.', [
    ['Cắm cục sạc vào ổ điện.'], ['Cắm đầu dây vào cổng ở đáy điện thoại.', 'Nếu cổng bị ướt, hãy để khô hẳn trước.'], ['Xem biểu tượng sạc có hiện trên màn hình không.'], ['Rút dây khi sạc xong.']]),
  'g01-power': L('Tắt điện thoại Galaxy bằng phím Cạnh và Giảm âm lượng, rồi bật lại.', [
    ['Nhấn giữ cùng lúc phím Cạnh và phím Giảm âm lượng.', 'Nhấn cả hai cùng lúc và chờ menu hiện ra.'],
    ['Chạm vào Tắt nguồn.'], ['Chạm vào Tắt nguồn một lần nữa.', 'Khi màn hình tối, chuyển sang bước tiếp để bật lại.'],
    ['Nhấn giữ phím Cạnh để bật điện thoại.', 'Giữ vài giây đến khi logo Samsung hiện ra. Sau đó mở khóa màn hình.']]),
  'g01-restart': L('Khởi động lại điện thoại Galaxy khi máy chậm hoặc lạ.', [
    ['Nhấn giữ cùng lúc phím Cạnh và phím Giảm âm lượng.', 'Giữ đến khi menu nguồn hiện ra.'], ['Chạm vào Khởi động lại.'], ['Chạm vào Khởi động lại một lần nữa.'],
    ['Chờ điện thoại tắt rồi bật lại.', '', 'Nếu màn hình bị treo và không hiện menu, hãy giữ cả hai phím hơn 7 giây.']]),
  'g01-lock': L('Khóa màn hình bằng phím Cạnh và mở khóa bằng cách vuốt lên.', [
    ['Bấm nhanh phím Cạnh một lần.', 'Màn hình tắt và tự khóa.'], ['Bấm nhanh phím Cạnh lần nữa.', 'Màn hình khóa sáng lên. Chạm hai lần vào màn hình cũng được.'],
    ['Vuốt màn hình lên.', 'Nếu đã đặt mã PIN hoặc vân tay, hãy dùng để mở khóa.']]),
  'g02-tap': L('Tập thao tác cơ bản nhất: chạm một lần để mở ứng dụng.', [
    ['Chạm nhẹ một lần vào Bộ sưu tập bằng đầu ngón tay.', 'Đừng ấn mạnh. Chạm nhẹ là ứng dụng mở ra.'], HOME_BTN]),
  'g02-hold': L('Tập chạm và giữ để mở menu của ứng dụng.', [
    ['Chạm và giữ Bộ sưu tập trong 2 giây.', 'Đừng nhấc tay cho đến khi menu hiện ra.'], ['Xem menu đã hiện ra chưa.', 'Chạm và giữ cho biết bạn có thể làm gì với ứng dụng đó.'],
    ['Chạm vào nút Quay lại để đóng menu.']]),
  'g02-swipe': L('Vuốt để chuyển trang màn hình Chính và mở màn hình Ứng dụng.', [
    ['Vuốt màn hình sang trái.', 'Bạn chuyển sang trang tiếp theo của màn hình Chính.'], ['Vuốt từ dưới lên trên màn hình Chính.', 'Màn hình Ứng dụng với tất cả ứng dụng mở ra.'],
    ['Vuốt xuống trên màn hình Ứng dụng.', 'Bạn trở về màn hình Chính.']]),
  'g02-pinch': L('Tách hai ngón tay để phóng to ảnh và chụm lại để thu nhỏ.', [
    open('Bộ sưu tập'), ['Chạm vào ảnh muốn xem.'], ['Đặt hai ngón tay lên ảnh rồi tách ra.', 'Tách ngón cái và ngón trỏ để phóng to.'], ['Chụm hai ngón tay lại.', 'Ảnh nhỏ lại như cũ.']]),
  'g02-back': L('Dùng nút Quay lại để trở về màn hình trước.', [
    ...settings('Màn hình'),
    ['Chạm vào nút Quay lại ở góc dưới bên phải.', 'Bạn trở về màn hình trước (Cài đặt).', 'Có thể đổi thứ tự các nút trong Cài đặt → Màn hình → Thanh điều hướng.']]),
  'g02-home': L('Về màn hình Chính từ bất kỳ ứng dụng nào bằng nút Màn hình chính.', [
    open('Cài đặt'), HOME_BTN,
    ['Xem màn hình Chính đã hiện ra chưa.', 'Đang dùng ứng dụng nào, nút Màn hình chính cũng đưa bạn về đây.', 'Nếu không thấy các nút, hãy vuốt nhẹ lên từ mép dưới màn hình.']]),
  'g02-recent': L('Mở ứng dụng gần đây để chuyển ứng dụng hoặc đóng tất cả.', [
    ['Chạm vào nút Gần đây ở góc dưới bên trái.', 'Các ứng dụng vừa dùng hiện ra như những tấm thẻ.'], ['Chạm vào ứng dụng muốn dùng lại.', 'Vuốt sang bên để xem ứng dụng khác.'],
    ['Chạm lại vào nút Gần đây.'], ['Chạm vào ‘Đóng tất cả’.', 'Tất cả ứng dụng đang mở được đóng lại.']]),
  'g03-font': L('Làm chữ to và đậm hơn trong Cài đặt → Màn hình → Kích cỡ và kiểu phông chữ.', [
    ...settings('Màn hình', 'Kích cỡ và kiểu phông chữ'), ['Kéo vòng tròn trên thanh cỡ chữ sang phải.', 'Càng sang phải chữ càng to.'],
    ['Chạm vào công tắc ‘Phông chữ đậm’ để bật.', 'Chữ đậm dễ đọc hơn.'], ['Xem chữ đã to hơn chưa.']]),
  'g03-zoom': L('Làm biểu tượng và nút to hơn bằng Thu phóng màn hình trong Cài đặt → Màn hình.', [
    ...settings('Màn hình', 'Thu phóng màn hình'), ['Kéo vòng tròn trên thanh sang phải.', 'Càng sang phải biểu tượng và nút càng to.'], ['Xem biểu tượng và nút đã to hơn chưa.']]),
  'g03-easy': L('Bật Chế độ dễ dàng để màn hình Chính đơn giản hơn, chữ và biểu tượng to.', [
    ...settings('Màn hình', 'Chế độ dễ dàng'), ['Chạm vào công tắc ‘Chế độ dễ dàng’ để bật.', 'Chữ và biểu tượng trên màn hình Chính to hơn.'], ['Xem chữ và biểu tượng trên màn hình Chính đã to hơn chưa.']]),
  'g03-bright': L('Chỉnh độ sáng màn hình từ bảng cài đặt nhanh.', [
    ['Vuốt xuống từ góc trên bên phải màn hình.', 'Bảng cài đặt nhanh mở ra.'], ['Kéo thanh độ sáng sang phải.', 'Kéo sang trái để màn hình tối hơn.'], ['Vuốt lên để đóng bảng.']]),
  'g03-timeout': L('Đổi thời gian màn hình tự tắt trong Cài đặt → Màn hình → Thời gian chờ màn hình.', [
    ...settings('Màn hình', 'Thời gian chờ màn hình'), ['Chạm vào ‘5 phút’.', 'Chọn thời gian bạn muốn. Càng lâu càng tốn pin.']]),
  'g03-sound': L('Làm nhạc chuông to hơn và cho máy rung khi đổ chuông.', [
    ...settings('Âm thanh và rung', 'Âm lượng'), ['Kéo thanh Nhạc chuông sang phải.', 'Càng sang phải chuông càng to.'], BACK,
    ['Chạm vào ‘Âm thanh’.', 'Chỉ muốn rung thì chạm vào ‘Rung’.'], ['Chạm vào công tắc ‘Rung khi đổ chuông’ để bật.', 'Âm thanh và rung cùng báo.']]),
  'g04-call': L('Gọi điện trên Galaxy bằng cách bấm số trên bàn phím.', [
    PHONE, ['Chạm vào ‘Bàn phím’ ở dưới.'], ['Chạm lần lượt các số điện thoại.', 'Bấm nhầm thì xóa bằng nút xóa ở góc dưới bên phải.'], ['Chạm vào nút gọi màu xanh.'], ['Nói xong, chạm vào nút kết thúc màu đỏ.']]),
  'g04-answer': L('Nghe máy bằng cách vuốt nút xanh, từ chối bằng nút đỏ hoặc bằng tin nhắn.', [
    ['Chạm giữ nút nghe màu xanh rồi vuốt lên.', 'Vuốt ra khỏi vòng tròn để nghe.'], ['Muốn từ chối, chạm giữ nút đỏ rồi vuốt lên.'],
    ['Muốn từ chối bằng tin nhắn, vuốt ‘Gửi tin nhắn’ ở dưới lên.', 'Chọn một câu, tin nhắn được gửi cho người gọi.', 'Trong Cài đặt → Hỗ trợ → Tương tác và thao tác có thể đặt nghe máy bằng một lần chạm.']]),
  'g04-speaker': L('Bật loa ngoài khi đang gọi để nói chuyện mà không cần áp máy vào tai.', [
    ['Gọi hoặc nghe một cuộc gọi.'], ['Chạm vào ‘Loa ngoài’.', 'Bạn nghe và nói được khi để điện thoại xa tai.'], ['Muốn tắt, chạm lại vào ‘Loa ngoài’.']]),
  'g04-missed': L('Gọi lại cuộc gọi nhỡ từ danh sách Gần đây trong ứng dụng Điện thoại.', [
    PHONE, ['Chạm vào ‘Gần đây’ ở dưới.'], ['Vuốt số gọi nhỡ sang phải.', 'Vuốt sang phải là gọi ngay.', 'Nếu không gọi được, chạm vào số rồi chạm nút gọi.']]),
  'g04-log': L('Xem ai đã gọi và lúc nào trong danh sách Gần đây của ứng dụng Điện thoại.', [PHONE, ['Chạm vào ‘Gần đây’ ở dưới.'], ['Chạm vào một tên để xem chi tiết.', 'Bạn xem được lúc nói chuyện.']]),
  'g04-block': L('Chặn số rác trong cài đặt của ứng dụng Điện thoại.', [
    PHONE, ['Chạm vào ba chấm (Tùy chọn khác) ở góc trên bên phải.'], ['Chạm vào ‘Cài đặt’.'], ['Chạm vào ‘Chặn số’.'], ['Chạm vào ‘Thêm số điện thoại’.', '', 'Màn hình có thể hơi khác tùy phiên bản.'],
    ['Nhập số muốn chặn.'], ['Chạm vào ‘Lưu’.']]),
  'g05-new': L('Lưu liên hệ mới với tên và số trong ứng dụng Danh bạ.', [
    CONTACTS, ['Chạm vào ‘+’ (Tạo liên hệ) ở góc trên bên phải.'], ['Chạm vào ô Tên.'], ['Nhập tên.'], ['Chạm vào ô Điện thoại.'], ['Nhập số điện thoại.'], ['Chạm vào ‘Lưu’.']]),
  'g05-search': L('Tìm nhanh liên hệ bằng cách tìm theo tên.', [CONTACTS, ['Chạm vào kính lúp (Tìm kiếm) ở trên.'], ['Nhập tên cần tìm.'], ['Chạm vào tên tìm thấy.']]),
  'g05-edit': L('Đổi số điện thoại đã lưu của một liên hệ.', [
    CONTACTS, ['Chạm vào tên người đó.'], ['Chạm vào ‘Sửa’ ở dưới.'], ['Chạm vào ô Điện thoại.'], ['Xóa số cũ và nhập số mới.'], ['Chạm vào ‘Lưu’.']]),
  'g05-speed': L('Đặt quay số nhanh để gọi bằng cách giữ một số trên bàn phím.', [
    PHONE, ['Chạm vào ‘Bàn phím’ ở dưới.'], ['Chạm vào ba chấm (Tùy chọn khác) ở góc trên bên phải.'], ['Chạm vào ‘Số quay nhanh’.'], ['Chạm vào số ‘2’.', 'Chọn số nào còn trống.'],
    ['Chọn người đó trong danh bạ.'], ['Chạm và giữ số ‘2’ trên bàn phím để gọi.', 'Thử giữ số ‘2’ trên hình luyện tập.']]),
  'g05-share': L('Gửi thông tin liên hệ của một người cho người khác qua tin nhắn.', [
    CONTACTS, ['Chạm vào tên người muốn chia sẻ.'], ['Chạm vào ‘Chia sẻ’ ở dưới.'], ['Chạm vào ‘Tin nhắn’.'], ['Chọn người nhận.'], ['Chạm vào nút Gửi.']]),
  'g06-send': L('Gửi tin nhắn và trả lời tin nhắn trong ứng dụng Tin nhắn.', [
    MESSAGES, ['Chạm vào cuộc trò chuyện muốn trả lời.', 'Gửi tin mới thì chạm nút Bắt đầu trò chuyện ở góc dưới bên phải.'], ['Chạm vào ô nhập tin nhắn ở dưới.'], ['Nhập nội dung.'], ['Chạm vào nút Gửi bên phải.']]),
  'g06-type': L('Gõ chữ, số và ký hiệu, và đổi ngôn ngữ trên Bàn phím Samsung.', [
    ['Gõ ‘Xin chào’ trên bàn phím.'], ['Muốn gõ số hoặc ký hiệu, chạm vào ‘!#1’.'], ['Muốn quay lại chữ, chạm vào ‘ABC’ ở cùng chỗ.'],
    ['Muốn gõ ngôn ngữ khác, vuốt phím cách sang trái hoặc phải.', 'Chỉ những ngôn ngữ đã thêm trong cài đặt bàn phím mới hiện ra.']]),
  'g06-fix': L('Sửa lỗi gõ bằng phím xóa và di chuyển con trỏ.', [
    ['Chạm một lần vào phím xóa (⌫).', 'Chữ ngay trước con trỏ bị xóa.'], ['Gõ lại chữ đúng.'], ['Muốn sửa chữ ở giữa, chạm vào chỗ đó.', 'Con trỏ (vạch nhấp nháy) chuyển đến chỗ bạn chạm.']]),
  'g06-copy': L('Sao chép chữ và dán vào chỗ khác.', [['Chạm và giữ chữ muốn sao chép.'], ['Chạm vào ‘Sao chép’.'], ['Chạm và giữ ô muốn dán.'], ['Chạm vào ‘Dán’.']]),
  'g06-photo': L('Đính kèm ảnh từ Bộ sưu tập vào tin nhắn.', [
    MESSAGES, ['Chạm vào cuộc trò chuyện muốn gửi ảnh.'], ['Chạm vào ‘+’ bên trái ô nhập tin.'], ['Chạm vào ‘Bộ sưu tập’.'], ['Chạm vào ảnh muốn gửi.'], ['Chạm vào nút Gửi.']]),
  'g06-translate': L('Dịch cuộc trò chuyện trong Tin nhắn bằng công cụ Galaxy AI trên bàn phím.', [
    MESSAGES, ['Chạm vào cuộc trò chuyện muốn dịch.'], ['Chạm vào ô nhập tin ở dưới.'], ['Chạm vào biểu tượng Galaxy AI ở góc trên bên trái bàn phím.'], ['Chạm vào ‘Dịch trò chuyện’.'], ['Chọn ngôn ngữ ở khung phía trên.']]),
  'g07-noti': L('Mở bảng thông báo, đọc một thông báo và xóa tất cả.', [
    ['Vuốt xuống từ góc trên bên trái màn hình.', 'Bảng thông báo mở ra.'], ['Chạm vào thông báo muốn đọc.', 'Ứng dụng của thông báo đó sẽ mở.'],
    ['Vuốt xuống từ góc trên bên trái màn hình.', 'Bảng thông báo mở ra.'], ['Chạm vào ‘Xóa’.', 'Tất cả thông báo được xóa.']]),
  'g07-appnoti': L('Tắt thông báo của các ứng dụng không cần thiết.', [
    ...settings('Thông báo', 'Thông báo ứng dụng'), ['Chạm vào công tắc của ứng dụng để tắt thông báo.', 'Hãy để bật thông báo của ứng dụng nhắn tin quan trọng.']]),
  'g07-quick': L('Mở bảng cài đặt nhanh và tìm hiểu các nút.', [
    QUICK, ['Nhìn các nút trên bảng.', 'Nút màu xanh là đang bật. Chạm vào nút để bật hoặc tắt.'], ['Chạm và giữ nút ‘Wi-Fi’.', 'Giữ nút sẽ mở cài đặt chi tiết.'], ['Vuốt lên để đóng bảng.']]),
  'g07-flash': L('Bật và tắt đèn pin từ bảng cài đặt nhanh.', [QUICK, ['Chạm vào ‘Đèn pin’.', 'Đèn ở mặt sau điện thoại sáng lên.'], ['Muốn tắt, chạm lại vào ‘Đèn pin’.']]),
  'g07-rotate': L('Chọn màn hình có xoay theo khi bạn nghiêng điện thoại hay không.', [
    QUICK, ['Chạm vào ‘Tự động xoay’.', 'Khi bật, màn hình xoay theo máy. Khi tắt, màn hình giữ dọc.'], ['Nghiêng điện thoại sang ngang để thử.']]),
  'g07-dnd': L('Tắt tiếng cuộc gọi và thông báo bằng Không làm phiền, dùng Chế độ máy bay khi đi máy bay.', [
    QUICK, ['Chạm vào ‘Không làm phiền’.', 'Cuộc gọi và thông báo không kêu. Chạm lại để tắt.'], ['Chạm lại vào ‘Không làm phiền’ để tắt.'],
    ['Chạm vào ‘Chế độ máy bay’.', 'Cuộc gọi và Internet bị ngắt. Dùng khi đi máy bay.'], ['Xuống máy bay, chạm lại để tắt.']]),
  'g08-wifi': L('Kết nối Galaxy với Wi-Fi trong Cài đặt → Kết nối → Wi-Fi.', [
    ...settings('Kết nối', 'Wi-Fi'), ['Chạm vào công tắc ‘Wi-Fi’ để bật.', 'Danh sách Wi-Fi xung quanh hiện ra.'], ['Chạm vào tên Wi-Fi.', 'Biểu tượng ổ khóa nghĩa là cần mật khẩu.'],
    ['Nhập mật khẩu Wi-Fi.', 'Thường được ghi ở mặt sau bộ phát.'], ['Chạm vào ‘Kết nối’.']]),
  'g08-data': L('Bật hoặc tắt dữ liệu di động trong Cài đặt → Kết nối → Sử dụng dữ liệu.', [
    ...settings('Kết nối', 'Sử dụng dữ liệu'), ['Chạm vào công tắc ‘Dữ liệu di động’ để bật.', 'Khi tắt, chỉ dùng được Internet qua Wi-Fi.']]),
  'g08-usage': L('Xem tháng này đã dùng bao nhiêu dữ liệu di động và ứng dụng nào dùng nhiều nhất.', [
    ...settings('Kết nối', 'Sử dụng dữ liệu'), ['Chạm vào ‘Sử dụng dữ liệu di động’.'],
    ['Xem lượng đã dùng trong tháng.', 'Ứng dụng dùng nhiều nhất ở trên cùng. Ứng dụng của nhà mạng cho biết còn lại bao nhiêu.']]),
  'g08-bt': L('Ghép nối tai nghe Bluetooth với Galaxy.', [
    ['Bật tai nghe ở chế độ ghép nối.'], ...settings('Kết nối', 'Bluetooth'), ['Chạm vào công tắc ‘Bluetooth’ để bật.'], ['Chạm vào tên tai nghe trong danh sách.'], ['Chạm vào ‘Kết nối’.']]),
  'g08-hotspot': L('Chia sẻ Internet của điện thoại cho thiết bị khác bằng Điểm truy cập di động.', [
    ...settings('Kết nối', 'Điểm truy cập di động và Chia sẻ kết nối', 'Điểm truy cập di động'), ['Chạm vào công tắc ‘Điểm truy cập di động’ để bật.', '', 'Có thể tốn thêm phí. Hãy kiểm tra gói cước trước.'],
    ['Trên thiết bị kia, chọn tên điện thoại của bạn trong danh sách Wi-Fi.']]),
  'g08-location': L('Tìm công tắc Vị trí và NFC trong Cài đặt.', [
    ...settings('Vị trí'), ['Chạm vào công tắc ‘Vị trí’ để bật.', 'Ứng dụng bản đồ và thời tiết sẽ biết bạn ở đâu.'], BACK, item('Kết nối'),
    ['Chạm vào công tắc ‘NFC và thanh toán không tiếp xúc’ để bật.', 'Bật để thanh toán hoặc dùng thẻ đi lại bằng điện thoại.']]),
  'g09-search': L('Tìm trên web bằng trình duyệt Samsung Internet.', [
    [...open('Samsung Internet'), 'Tùy phiên bản, ứng dụng có tên ‘Samsung Internet’ hoặc ‘Trình duyệt’.'], ['Chạm vào thanh địa chỉ ở trên.'], ['Nhập điều muốn tìm.'],
    ['Chạm vào phím Đi (↵) ở góc dưới bên phải bàn phím.'], ['Chạm vào kết quả muốn đọc.']]),
  'g09-bookmark': L('Lưu trang hay xem vào dấu trang và mở lại sau.', [
    open('Samsung Internet'), ['Chạm vào ngôi sao (☆) bên phải thanh địa chỉ.', 'Trang đang xem được lưu vào dấu trang.'], ['Muốn mở lại, chạm vào ngôi sao (Dấu trang) ở dưới.'], ['Chạm vào trang đã lưu.']]),
  'g09-qr': L('Mở mã QR bằng máy ảnh Galaxy.', [
    CAMERA, ['Hướng máy ảnh vào mã QR.', 'Ở chế độ Ảnh, để mã ở giữa màn hình.'], ['Chạm vào đường dẫn màu vàng hiện ra.', 'Cẩn thận với mã QR ở nơi lạ.']]),
  'g09-files': L('Tìm tệp đã tải xuống trong ứng dụng Tệp của bạn.', [open('Tệp của bạn'), ['Chạm vào ‘Tải về’.'], ['Chạm vào tệp muốn mở.']]),
  'g09-stores': L('Hiểu sự khác nhau giữa Google Play Store và Samsung Galaxy Store.', [
    open('Play Store'), ['Đây là kho ứng dụng của Google, nơi tìm và tải ứng dụng.', 'Cần đăng nhập tài khoản Google.'], HOME_BTN, open('Galaxy Store'),
    ['Đây là kho ứng dụng của Samsung, có nhiều ứng dụng và chủ đề Samsung.']]),
  'g09-install': L('Cài ứng dụng từ Play Store, cập nhật ứng dụng trong Galaxy Store và gỡ cài đặt ứng dụng.', [
    open('Play Store'), ['Chạm vào thanh tìm kiếm ở trên.'], ['Nhập tên ứng dụng.'], ['Chạm vào ‘Cài đặt’ cạnh tên ứng dụng.'], ['Chạm vào ứng dụng ‘Galaxy Store’.', 'Giờ ta cập nhật ứng dụng.'],
    ['Chạm vào ‘Menu’ ở dưới.'], ['Chạm vào ‘Cập nhật’.'], ['Chạm vào ‘Cập nhật tất cả’.'], ['Trên màn hình Chính, chạm và giữ ứng dụng muốn xóa.'], ['Chạm vào ‘Gỡ cài đặt’.'],
    ['Chạm vào ‘OK’.', 'Ứng dụng đã xóa có thể cài lại từ kho.']]),
  'g09-google': L('Tìm ứng dụng Google và ứng dụng nhà mạng bằng ô tìm kiếm trên màn hình Ứng dụng.', [
    ['Vuốt lên trên màn hình Chính để mở màn hình Ứng dụng.'], ['Chạm vào ‘Tìm kiếm’ ở trên.'], ['Nhập tên ứng dụng.', 'Thử Google, YouTube hoặc tên nhà mạng của bạn.'], ['Chạm vào ứng dụng tìm thấy.']]),
  'g10-open': L('Mở ứng dụng Máy ảnh và tìm nút chụp.', [CAMERA, ['Xem màn hình máy ảnh đã hiện ra chưa.', 'Vòng tròn trắng ở giữa phía dưới là nút chụp.']]),
  'g10-focus': L('Chạm vào màn hình để lấy nét trước khi chụp.', [
    CAMERA, ['Chạm vào chỗ muốn rõ nét trên màn hình.', 'Khi vòng tròn vàng hiện ra là đã lấy nét.'], ['Chạm vào nút chụp màu trắng.', 'Nếu ảnh bị mờ, hãy lau ống kính bằng vải mềm.']]),
  'g10-switch': L('Đổi giữa camera sau và camera trước (tự sướng).', [
    CAMERA, ['Chạm vào mũi tên vòng ở góc dưới bên phải.', 'Vuốt màn hình lên hoặc xuống cũng đổi camera.'], ['Xem camera trước đã hiện khuôn mặt bạn chưa.']]),
  'g10-selfie': L('Chụp ảnh tự sướng bằng camera trước.', [CAMERA, ['Chạm vào mũi tên vòng ở góc dưới bên phải.'], ['Cầm máy sao cho mặt bạn ở giữa màn hình.'], SHUTTER]),
  'g10-zoom': L('Phóng to vật ở xa khi chụp ảnh.', [
    CAMERA, ['Chạm vào số ‘3’ ở dưới.', 'Vật ở xa trông to gấp 3 lần. Chạm ‘1x’ để trở lại.', 'Các con số khác nhau tùy kiểu máy (dòng Ultra phóng to xa hơn).'], SHUTTER]),
  'g10-timer': L('Dùng hẹn giờ để máy chụp sau vài giây.', [
    CAMERA, ['Chạm vào biểu tượng Điều khiển nhanh (⌄) ở trên.'], ['Chạm vào biểu tượng hẹn giờ.'], ['Chạm vào ‘5 giây’.'], SHUTTER, ['Ảnh được chụp sau khi đếm ngược.']]),
  'g10-modes': L('Thử chế độ Chân dung để làm mờ phông nền và chế độ Đêm cho nơi tối.', [
    CAMERA, ['Chạm vào ‘Chân dung’ ở dưới.', 'Người rõ nét, phông nền mờ.'], SHUTTER, ['Chạm vào ‘Khác’ ở dưới.'],
    ['Chạm vào ‘Đêm’.', 'Ở nơi tối ảnh vẫn sáng mà không cần đèn flash. Giữ máy thật yên khi chụp.']]),
  'g10-video': L('Quay video bằng máy ảnh Galaxy.', [CAMERA, ['Chạm vào ‘Video’ ở dưới.'], ['Chạm vào nút quay màu đỏ.'], ['Quay xong, chạm vào nút dừng.']]),
  'g10-capture': L('Chụp màn hình bằng hai phím và ghi màn hình từ cài đặt nhanh.', [
    ['Bấm nhanh cùng lúc phím Cạnh và Giảm âm lượng.', 'Có tiếng tách và màn hình được lưu thành ảnh. Xem trong Bộ sưu tập.'], QUICK,
    ['Chạm vào ‘Ghi màn hình’.', 'Nếu không thấy, hãy vuốt bảng xuống thêm lần nữa.'], ['Chạm vào ‘Bắt đầu ghi’.'], ['Muốn dừng, chạm vào biểu tượng dừng ở trên màn hình.']]),
  'g11-latest': L('Tìm trong Bộ sưu tập ảnh vừa chụp.', [GALLERY, ['Chạm vào ảnh đầu tiên (góc trên bên trái).', 'Ảnh mới nhất luôn ở đầu.'], ['Vuốt sang trái để xem ảnh tiếp theo.']]),
  'g11-album': L('Tạo album mới trong Bộ sưu tập để gom ảnh lại.', [
    GALLERY, ['Chạm vào ‘Album’ ở dưới.'], ['Chạm vào ‘+’ (Thêm) ở trên.'], ['Chạm vào ‘Album’.'], ['Nhập tên album.'], ['Chạm vào ‘Tạo’.', 'Sau đó chọn ảnh để cho vào.']]),
  'g11-edit': L('Cắt ảnh và làm sáng ảnh trong Bộ sưu tập.', [
    GALLERY, ['Chạm vào ảnh muốn sửa.'], ['Chạm vào cây bút (Sửa) ở dưới.'], ['Kéo một góc ảnh vào trong để cắt.'], ['Chạm vào ‘Tông màu’ ở dưới.'], ['Kéo thanh độ sáng sang phải.'], ['Chạm vào ‘Lưu’.']]),
  'g11-text': L('Sao chép chữ trong ảnh ở Bộ sưu tập và dán vào tin nhắn hoặc ghi chú.', [
    GALLERY, ['Chạm vào ảnh có chữ.'], ['Chạm vào biểu tượng ‘T’ màu vàng.', 'Chỉ hiện khi trong ảnh có chữ.'], ['Chạm và giữ chữ muốn sao chép.'], ['Chạm vào ‘Sao chép’.', 'Bạn có thể dán vào tin nhắn hoặc ghi chú.']]),
  'g11-multi': L('Chọn nhiều ảnh trong Bộ sưu tập và chia sẻ một lần.', [
    GALLERY, ['Chạm và giữ một ảnh muốn gửi.'], ['Chạm thêm các ảnh khác muốn gửi cùng.', 'Có dấu trong vòng tròn là đã chọn.'], ['Chạm vào ‘Chia sẻ’ ở dưới.'], ['Chạm vào ứng dụng để gửi (ví dụ Tin nhắn).'],
    ['Chọn người nhận rồi gửi.']]),
  'g11-restore': L('Khôi phục ảnh đã xóa từ Thùng rác của Bộ sưu tập.', [
    GALLERY, ['Chạm vào ‘Menu’ ở dưới.'], ['Chạm vào ‘Thùng rác’.'], ['Chạm vào ảnh muốn khôi phục.', 'Ảnh đã xóa được giữ trong Thùng rác một thời gian.'], ['Chạm vào ‘Khôi phục’.']]),
  'g11-docs': L('Tìm tài liệu đã lưu trên máy bằng ứng dụng Tệp của bạn.', [open('Tệp của bạn'), ['Chạm vào ‘Tài liệu’.'], ['Chạm vào tài liệu muốn mở.']]),
  'g11-quickshare': L('Gửi ảnh sang điện thoại ở gần bằng Quick Share.', [
    GALLERY, ['Chạm vào ảnh muốn gửi.'], ['Chạm vào ‘Chia sẻ’ ở dưới.'], ['Chạm vào ‘Quick Share’.', '', 'Điện thoại nhận cũng phải bật Quick Share (Cài đặt → Thiết bị đã kết nối → Quick Share).'],
    ['Chạm vào tên điện thoại nhận.'], ['Trên điện thoại nhận, chạm vào ‘Chấp nhận’.']]),
  'g12-addapp': L('Đặt ứng dụng từ màn hình Ứng dụng lên màn hình Chính.', [
    ['Vuốt lên trên màn hình Chính để mở màn hình Ứng dụng.'], ['Chạm và giữ ứng dụng muốn đặt.'], ['Chạm vào ‘Thêm vào màn hình Chính’.']]),
  'g12-folder': L('Gom ứng dụng vào thư mục và thêm tiện ích thời tiết vào màn hình Chính.', [
    ['Chạm giữ một ứng dụng trên màn hình Chính rồi kéo lên ứng dụng khác.', 'Một thư mục chứa hai ứng dụng được tạo.'], ['Chạm vào tên thư mục rồi nhập tên.'],
    ['Chạm và giữ chỗ trống trên màn hình Chính.'], ['Chạm vào ‘Tiện ích’.'], ['Chạm vào ‘Thời tiết’.'], ['Chạm vào ‘Thêm’.']]),
  'g12-wallpaper': L('Dùng ảnh của bạn làm hình nền màn hình khóa hoặc màn hình Chính.', [
    ...settings('Hình nền và kiểu'), ['Chạm vào ‘Đổi hình nền’.'], ['Muốn dùng ảnh của mình, chạm vào ‘Bộ sưu tập’.'], ['Chạm vào ảnh muốn dùng.'], ['Chọn màn hình khóa, màn hình Chính hoặc cả hai.'], ['Chạm vào ‘Xong’.']]),
  'g12-alarm': L('Đặt báo thức và bắt đầu hẹn giờ trong ứng dụng Đồng hồ.', [
    open('Đồng hồ'), ['Chạm vào ‘Báo thức’ ở dưới.'], ['Chạm vào ‘+’ ở góc dưới bên phải.'], ['Vuốt các con số lên xuống để chỉnh giờ.'], ['Chạm vào ‘Lưu’.'], ['Muốn hẹn giờ, chạm vào ‘Hẹn giờ’ ở dưới.'],
    ['Đặt thời gian rồi chạm vào ‘Bắt đầu’.']]),
  'g12-calendar': L('Thêm lịch hẹn vào ứng dụng Lịch.', [
    open('Lịch'), ['Chạm vào ‘+’ (Thêm sự kiện) ở góc dưới bên phải.'], ['Chạm vào ô Tiêu đề.'], ['Nhập tên lịch hẹn.'], ['Chạm vào ‘Bắt đầu’ để chọn ngày giờ.'], ['Chạm vào ‘Lưu’.']]),
  'g12-reminder': L('Nhận nhắc việc bằng cách thêm lời nhắc vào sự kiện trong lịch.', [
    open('Lịch'), ['Chạm vào ‘+’ (Thêm sự kiện) ở góc dưới bên phải.'], ['Nhập việc cần làm làm tiêu đề.'], ['Chạm vào ‘Lời nhắc’.'], ['Chạm vào thời điểm muốn nhắc (ví dụ 10 phút trước).'],
    ['Chạm vào ‘Lưu’.', 'Lời nhắc sẽ đến vào giờ đã chọn.']]),
  'g12-note': L('Viết ghi chú nhanh trong Samsung Notes.', [
    open('Samsung Notes'), ['Chạm vào ‘+’ ở góc dưới bên phải.'], ['Viết điều muốn ghi lại.'], ['Viết xong, chạm vào nút Quay lại.', 'Ghi chú tự động được lưu.']]),
  'g12-recorder': L('Ghi âm giọng nói bằng ứng dụng Ghi âm.', [open('Ghi âm'), ['Chạm vào nút Ghi.'], ['Nói vào điện thoại.'], ['Chạm vào ‘Dừng’.', 'Bản ghi được lưu trong danh sách.']]),
  'g12-tools': L('Xem thời tiết, dùng máy tính và nghe radio.', [
    open('Thời tiết'), ['Xem thời tiết và nhiệt độ hôm nay.', 'Cần bật vị trí để xem thời tiết nơi bạn ở.'], HOME_BTN, open('Máy tính'), ['Chạm các số, + và = để tính.'],
    ['Chạm vào ứng dụng ‘Radio’.', 'Radio cần tai nghe có dây làm ăng-ten.', 'Một số kiểu máy và nhà mạng không có ứng dụng Radio.']]),
  'x13-gmail': L('Gửi ảnh cho gia đình qua email bằng ứng dụng Gmail.', [
    open('Gmail'), ['Chạm vào ‘Soạn thư’ ở góc dưới bên phải.'], ['Nhập email của người nhận vào ô ‘Đến’.'], ['Chạm vào kẹp giấy (Đính kèm) ở trên.'],
    ['Chạm vào ảnh muốn gửi.', 'Có thể chạm nhiều ảnh.'], ['Nhập tiêu đề ngắn.'], ['Chạm vào nút Gửi (máy bay giấy) ở trên.']], { check: CHECK }),
  'x13-video': L('Gửi video từ Bộ sưu tập cho người thân bằng ứng dụng Tin nhắn.', [
    GALLERY, ['Chạm vào video muốn gửi.'], ['Chạm vào ‘Chia sẻ’ ở dưới.'], ['Chạm vào ‘Tin nhắn’.'], ['Chọn người nhận.'],
    ['Chạm vào nút Gửi.', '', 'Video dài có thể quá lớn để gửi qua tin nhắn. Khi đó hãy dùng Quick Share hoặc email.']], { check: CHECK }),
  'x13-meet': L('Gọi video cho gia đình bằng ứng dụng Google Meet.', [
    open('Meet'), ['Chạm vào ‘Mới’.'], ['Chạm vào tên người muốn gọi.', 'Người đó cũng cần Google Meet hoặc tài khoản Google.'], ['Chạm vào nút gọi video.'], ['Gọi xong, chạm vào nút kết thúc màu đỏ.']], { check: CHECK }),
  'g14-open': L('Mở Samsung Wallet và xem thẻ cùng các menu.', [
    ['Chạm vào ứng dụng ‘Samsung Wallet’.', 'Cũng có thể mở bằng cách vuốt hình thẻ ở cuối màn hình lên.'],
    ['Xem các thẻ đã lưu và menu.', 'Lần đầu thì chưa có thẻ. Bài sau sẽ cho xem màn hình thêm thẻ.']]),
  'g14-add': L('Xem màn hình thêm thẻ thanh toán vào Samsung Wallet.', [
    [...open('Samsung Wallet'), REAL], ['Chạm vào ‘+’ (Thêm) ở trên.'], ['Xem những gì có thể thêm.', 'Thẻ thanh toán, thẻ đi lại và nhiều thứ khác, tùy quốc gia.'], ['Chạm vào ‘Thẻ thanh toán’.'], ['Đọc hướng dẫn thêm thẻ.']]),
  'g14-pay': L('Chọn thẻ trong Samsung Wallet và thanh toán bằng cách đưa điện thoại gần máy POS.', [
    [...open('Samsung Wallet'), REAL], ['Chạm vào thẻ muốn dùng.'], ['Dùng vân tay hoặc nhập mã PIN thanh toán.'], ['Đưa mặt sau điện thoại lại gần máy quẹt thẻ.']]),
  'g15-pin': L('Bảo vệ điện thoại bằng khóa màn hình mã PIN.', [
    [...open('Cài đặt'), REAL], ...sub('Màn hình khóa và AOD', 'Khóa màn hình và sinh trắc học'), ['Chạm vào ‘Kiểu khóa màn hình’.'], ['Chạm vào ‘Mã PIN’.'],
    ['Nhập ít nhất 4 số dễ nhớ với bạn.', 'Tránh số dễ đoán như ngày sinh hay số điện thoại.'], ['Nhập lại các số đó để xác nhận.']]),
  'g15-bio': L('Đăng ký vân tay và nếu muốn, cả khuôn mặt để mở khóa.', [
    [...open('Cài đặt'), REAL], ...sub('Bảo mật và quyền riêng tư', 'Khóa màn hình và sinh trắc học'), ['Chạm vào ‘Vân tay’.'], ['Nhập mã PIN.', 'Nếu chưa có mã PIN, hãy tạo trước.'],
    ['Đặt rồi nhấc ngón tay trên dấu vân tay ở dưới màn hình nhiều lần.', 'Dùng ngón hay dùng và dịch nhẹ mỗi lần.'], ['Muốn thêm khuôn mặt, chạm vào ‘Nhận diện khuôn mặt’ trên cùng màn hình.']]),
  'g15-perm': L('Xem ứng dụng nào đã dùng vị trí, máy ảnh hay micrô và gỡ quyền không cần thiết.', [
    ...settings('Bảo mật và quyền riêng tư', 'Quyền đã dùng trong 24 giờ qua'), ['Xem ứng dụng nào đã dùng vị trí, máy ảnh hoặc micrô.'], ['Chạm vào ‘Vị trí’.'],
    ['Nếu có ứng dụng lạ, đổi sang ‘Không cho phép’.']]),
  'g15-folder': L('Tìm Thư mục bảo mật và Samsung Pass trong Cài đặt.', [
    ...settings('Bảo mật và quyền riêng tư', 'Cài đặt bảo mật khác'), ['Chạm vào ‘Thư mục bảo mật’.'], ['Đọc thông tin về Thư mục bảo mật.'], BACK,
    ['Chạm vào ‘Mật khẩu, mã khóa và tự động điền’.', 'Samsung Pass ở đây. Giúp đăng nhập bằng vân tay.']]),
  'g15-medical': L('Thêm thông tin y tế và liên hệ khẩn cấp để giúp khi có việc gấp.', [
    ...settings('An toàn và khẩn cấp', 'Thông tin y tế'), ['Nhập tên, nhóm máu, thuốc đang dùng và dị ứng.'], BACK, ['Chạm vào ‘Liên hệ khẩn cấp’.'], ['Thêm người nhà vào danh sách.']]),
  'g15-sos': L('Xem SOS khẩn cấp hoạt động thế nào mà không gọi thật.', [
    [...open('Cài đặt'), 'Nếu bấm phím thật sẽ gọi cấp cứu. Trong bài này chỉ xem màn hình.'], ...sub('An toàn và khẩn cấp', 'SOS khẩn cấp'),
    ['Đọc cần bấm phím Cạnh bao nhiêu lần để gọi.', 'Bấm phím Cạnh đủ số lần ghi trên màn hình sẽ gọi đến số đã đặt.']]),
  'g15-find': L('Bật cài đặt giúp tìm điện thoại bằng Samsung Find khi bị mất.', [
    ...settings('Bảo mật và quyền riêng tư', 'Bảo vệ thiết bị bị mất', 'Tìm thiết bị di động'),
    ['Chạm vào công tắc ‘Cho phép tìm điện thoại này’ để bật.', 'Bạn phải đăng nhập tài khoản Samsung.'], ['Nếu mất máy, hãy vào smartthingsfind.samsung.com trên thiết bị khác.']]),
  'g16-setup': L('Cài đặt điện thoại Galaxy mới lần đầu.', [
    ['Nhấn giữ phím Cạnh để bật điện thoại.'], ['Kiểm tra ngôn ngữ rồi chạm vào ‘Bắt đầu’.'], ['Chọn Wi-Fi rồi kết nối.'], ['Phần còn lại, làm theo hướng dẫn trên màn hình và chạm ‘Tiếp’.']]),
  'g16-sim': L('Tìm hiểu thẻ SIM và eSIM, rồi xem số của bạn trong Quản lý SIM.', [
    ['SIM (Nano-SIM) là thẻ nhỏ do nhà mạng cấp.'], ['eSIM là SIM tải vào điện thoại, không cần thẻ.', '', 'Hỗ trợ eSIM và hai số tùy kiểu máy và nhà mạng.'],
    ...settings('Kết nối', 'Quản lý SIM'), ['Xem số và nhà mạng của bạn có hiện ra không.']]),
  'g16-account': L('Kiểm tra điện thoại đã đăng nhập tài khoản Samsung và Google chưa.', [
    ...settings('Tài khoản và sao lưu', 'Quản lý tài khoản'), ['Xem có tài khoản Samsung và tài khoản Google không.', 'Cần tài khoản để sao lưu, cài ứng dụng và tìm điện thoại. Hãy ghi lại tên đăng nhập và mật khẩu.']]),
  'g16-switch': L('Chuyển danh bạ, ảnh và dữ liệu khác sang Galaxy mới bằng Smart Switch.', [
    ...settings('Tài khoản và sao lưu', 'Mang dữ liệu từ thiết bị cũ'), ['Trên điện thoại mới, chọn ‘Nhận dữ liệu’.'], ['Để hai máy gần nhau và làm theo hướng dẫn trên màn hình.']]),
  'g16-backup': L('Xem lần sao lưu gần nhất lên Samsung Cloud.', [...settings('Tài khoản và sao lưu', 'Samsung Cloud'), ['Xem ngày sao lưu gần nhất.']]),
  'g16-restore': L('Khôi phục dữ liệu từ bản sao lưu Samsung Cloud.', [
    ...settings('Tài khoản và sao lưu', 'Samsung Cloud'), ['Chạm vào ‘Khôi phục dữ liệu’.'], ['Chọn thiết bị và mục cần khôi phục.'], ['Chạm vào ‘Khôi phục’.']]),
  'g17-magnify': L('Bật phím tắt phóng to và phóng to một phần màn hình bằng chạm ba lần.', [
    ...settings('Hỗ trợ', 'Cải thiện khả năng nhìn', 'Phóng to'), ['Chạm vào ‘Phím tắt phóng to’.'], ['Chạm vào công tắc ‘Phím tắt phóng to’ để bật.'],
    ['Chạm vào ‘Chạm ba lần vào màn hình’.'], ['Chạm nhanh ba lần vào chỗ muốn phóng to.']]),
  'g17-contrast': L('Bật phông chữ tương phản cao để chữ nổi rõ trên nền.', [
    ...settings('Hỗ trợ', 'Cải thiện khả năng nhìn'), ['Chạm vào công tắc ‘Phông chữ tương phản cao’ để bật.', 'Chữ có viền đậm hơn và nổi bật khỏi nền.']]),
  'g17-talkback': L('Bật TalkBack để máy đọc màn hình, sau khi học cách tắt.', [
    [...open('Cài đặt'), 'Khi bật TalkBack, cách chạm sẽ thay đổi. Hãy đọc cách tắt trước.'], ...sub('Hỗ trợ', 'TalkBack'), ['Đọc cách tắt trước.'],
    ['Chạm vào công tắc ‘TalkBack’ để bật.', 'Khi bật, chạm một lần để đọc, chạm hai lần để mở.']]),
  'g17-caption': L('Bật Phụ đề trực tiếp cho video và Âm thanh mono để nghe bằng một tai.', [
    ...settings('Hỗ trợ', 'Cải thiện khả năng nghe'), ['Chạm vào ‘Phụ đề trực tiếp’.'], ['Chạm vào công tắc ‘Sử dụng Phụ đề trực tiếp’ để bật.', 'Lời nói trong video hiện thành chữ.'], BACK,
    ['Chạm vào công tắc ‘Âm thanh mono’ để bật.', 'Bạn nghe được cả hai bên dù chỉ dùng một tai.']]),
  'g17-hearing': L('Bật tương thích máy trợ thính để nghe cuộc gọi rõ hơn.', [
    ...settings('Hỗ trợ', 'Cải thiện khả năng nghe', 'Hỗ trợ máy trợ thính'),
    ['Chạm vào công tắc ‘Tương thích máy trợ thính’ để bật.', 'Cuộc gọi rõ hơn khi dùng máy trợ thính.'], ['Kết nối máy trợ thính Bluetooth trong menu Bluetooth.']]),
  'g17-touch': L('Chạm dễ hơn: nghe máy bằng một chạm, đổi thời gian chạm giữ và đặt phím tắt hỗ trợ.', [
    ...settings('Hỗ trợ', 'Tương tác và thao tác'), ['Chạm vào công tắc ‘Chế độ một chạm’ để bật.', 'Bạn nghe máy bằng một lần chạm thay vì vuốt.'],
    ['Chạm vào ‘Độ trễ chạm và giữ’.', 'Nếu khó giữ lâu, hãy chọn thời gian dài hơn.'], ['Chọn thời gian bạn muốn.'], ['Chạm nút Quay lại hai lần.'],
    ['Chạm vào ‘Phím tắt hỗ trợ’.', 'Có thể bật tính năng hỗ trợ hay dùng bằng một nút.']]),
  'g18-usage': L('Tìm xem ứng dụng nào tốn pin nhất.', [
    ...settings('Pin', 'Sử dụng hằng ngày'), ['Xem các ứng dụng dùng nhiều pin nhất.', 'Nếu ứng dụng ít dùng mà tốn pin, hãy đóng hoặc xóa.']]),
  'g18-saver': L('Bật Tiết kiệm pin để pin dùng lâu hơn.', [
    ...settings('Pin'), ['Chạm vào công tắc ‘Tiết kiệm pin’ để bật.', 'Pin dùng lâu hơn. Một số thông báo có thể đến chậm.', 'Cũng có thể bật bằng nút ‘Tiết kiệm pin’ trong bảng cài đặt nhanh.']]),
  'g18-storage': L('Kiểm tra dung lượng bộ nhớ còn trống.', [
    ...settings('Chăm sóc thiết bị', 'Lưu trữ'), ['Xem dung lượng còn lại.', 'Dọn thùng rác và xóa tệp trùng sẽ có thêm chỗ.']]),
  'g18-clean': L('Tìm và xóa tệp lớn không cần nữa trong Tệp của bạn.', [
    open('Tệp của bạn'), ['Chạm vào ‘Quản lý bộ nhớ’.'], ['Chạm vào ‘Tệp lớn’.'], ['Chỉ chọn tệp không cần rồi chạm vào ‘Xóa’.']]),
  'g18-care': L('Kiểm tra và tối ưu điện thoại bằng Chăm sóc thiết bị.', [...settings('Chăm sóc thiết bị'), ['Chạm vào ‘Tối ưu ngay’.', 'Máy đóng ứng dụng không dùng và kiểm tra điện thoại.']]),
  'g18-update': L('Kiểm tra và cài bản cập nhật phần mềm cho Galaxy.', [
    ...settings('Cập nhật phần mềm'), ['Chạm vào ‘Tải về và cài đặt’.', 'Nếu có bản mới, máy sẽ tải và cài. Nên làm khi có Wi-Fi và đang sạc.']]),
  'g18-version': L('Xem tên kiểu máy và phiên bản One UI trong Cài đặt → Thông tin điện thoại.', [
    ...settings('Thông tin điện thoại'), ['Xem tên kiểu máy ở trên cùng.'], ['Chạm vào ‘Thông tin phần mềm’.'], ['Xem ‘Phiên bản One UI’.', 'Báo cho trung tâm bảo hành cùng với tên kiểu máy.']]),
  'g19-bixby': L('Đặt phím Cạnh để gọi Bixby và nhờ bằng giọng nói.', [
    ...settings('Tính năng nâng cao', 'Phím cạnh'), ['Chạm vào ‘Đánh thức Bixby’.', 'Giờ giữ phím Cạnh sẽ mở Bixby.'],
    ['Nhấn giữ phím Cạnh và nói điều bạn muốn.', 'Ví dụ: “Đặt báo thức 7 giờ sáng mai.”'], ['Nói xong thì thả phím ra.']]),
  'g19-circle': L('Tìm thứ đang thấy trên màn hình bằng cách khoanh tròn với Khoanh tròn để tìm kiếm.', [
    ['Chạm và giữ nút Màn hình chính ở cuối màn hình.'], ['Dùng ngón tay vẽ vòng quanh thứ muốn tìm.'],
    ['Đọc kết quả tìm kiếm ở dưới.', '', 'Bixby Vision có trên dòng Galaxy S25, S24 và S23. S26 dùng cách này (Khoanh tròn để tìm kiếm).']]),
  'g19-interpret': L('Bật Dịch trực tiếp trong ứng dụng Điện thoại và dùng khi đang gọi.', [
    open('Điện thoại'), ['Chạm vào ba chấm ở góc trên bên phải.'], ['Chạm vào ‘Cài đặt’.'], ['Chạm vào ‘Dịch trực tiếp’.'], ['Chạm vào công tắc ‘Dịch trực tiếp’ để bật.'],
    ['Khi đang gọi, chạm vào ‘Hỗ trợ cuộc gọi’.'], ['Chạm vào ‘Dịch trực tiếp’.']]),
  'g19-write': L('Sửa chính tả và ngữ pháp tin nhắn bằng công cụ Galaxy AI trên bàn phím.', [
    open('Tin nhắn'), ['Chạm vào một cuộc trò chuyện.'], ['Nhập tin nhắn.'], ['Chạm vào biểu tượng Galaxy AI ở góc trên bên trái bàn phím.'], ['Chạm vào ‘Chính tả và ngữ pháp’.', 'Lỗi sẽ được sửa. ‘Tóm tắt’ rút gọn văn bản dài.']]),
  'g19-transcribe': L('Chuyển bản ghi âm thành chữ bằng Galaxy AI trong ứng dụng Ghi âm.', [
    open('Ghi âm'), ['Chạm vào bản ghi muốn chuyển thành chữ.'], AI_ICON, ['Chạm vào ‘Chuyển thành văn bản’.'], ['Đọc phần chữ được tạo.']]),
  'g19-photo': L('Xóa người hoặc vật khỏi ảnh bằng Galaxy AI trong Bộ sưu tập.', [
    GALLERY, ['Chạm vào ảnh muốn sửa.'], AI_ICON, ['Chạm vào ‘Tẩy vật thể’.'], ['Dùng ngón tay vẽ quanh người hoặc vật muốn xóa.'], ['Chạm vào ‘Xóa’.'], ['Nếu ưng ý, chạm vào ‘Lưu’.']]),
  'g19-support': L('Xem trong Cài đặt điện thoại hỗ trợ những tính năng Galaxy AI nào.', [
    ...settings('Galaxy AI'), ['Xem danh sách tính năng AI mà máy dùng được.', 'Tính năng không có trong danh sách thì kiểu máy này không hỗ trợ.', 'Một số tính năng tùy kiểu máy và nhà mạng, hoặc cần Internet.']]),
  'g20-smartview': L('Chiếu màn hình điện thoại lên TV bằng Smart View.', [
    QUICK, ['Chạm vào ‘Smart View’.'], ['Chạm vào tên TV.', 'Hoạt động tốt nhất khi TV và điện thoại dùng cùng Wi-Fi.'], ['Chạm vào ‘Bắt đầu ngay’.']]),
  'g20-pc': L('Kết nối Galaxy với máy tính Windows bằng Liên kết với Windows.', [
    ...settings('Thiết bị đã kết nối', 'Liên kết với Windows'), ['Đọc hướng dẫn trên màn hình.'], ['Trên máy tính, mở địa chỉ hiển thị để hoàn tất kết nối.']]),
  'g20-dex': L('Tìm hiểu Samsung DeX là gì và cài đặt nằm ở đâu.', [...settings('Thiết bị đã kết nối', 'Samsung DeX'), ['Đọc thông tin.']]),
  'g20-watch': L('Kết nối đồng hồ hoặc tai nghe Galaxy bằng ứng dụng Galaxy Wearable.', [
    ['Chạm vào ứng dụng ‘Galaxy Wearable’.', 'Nếu không có trên màn hình Chính, hãy tìm trong màn hình Ứng dụng.'], ['Chạm vào ‘Bắt đầu’.'], ['Làm theo hướng dẫn trên màn hình để hoàn tất.']]),
  'g20-smartthings': L('Kết nối thiết bị gia dụng với điện thoại bằng SmartThings.', [
    open('SmartThings'), ['Chạm vào ‘+’ (Thêm) ở trên.'], ['Chọn thiết bị muốn kết nối.'], ['Làm theo hướng dẫn trên màn hình để hoàn tất.']]),
  'g20-musicshare': L('Bật Music Share để bạn bè phát nhạc qua loa Bluetooth của bạn.', [
    ...settings('Thiết bị đã kết nối', 'Music Share'), ['Chạm vào công tắc ‘Music Share’ để bật.', 'Bạn bè có thể phát nhạc từ điện thoại của họ qua loa Bluetooth của bạn.']]),
  'g21-split': L('Dùng hai ứng dụng cùng lúc bằng chia đôi màn hình.', [
    ['Chạm vào nút Gần đây ở góc dưới bên trái.'], ['Chạm vào biểu tượng nhỏ trên đầu một ứng dụng.'], ['Chạm vào ‘Mở ở chế độ chia đôi màn hình’.'], ['Chọn ứng dụng thứ hai cho nửa dưới.']]),
  'g21-modes': L('Bật chế độ Ngủ trong Chế độ và Quy trình.', [
    ...settings('Chế độ và Quy trình', 'Chế độ'), ['Chạm vào ‘Ngủ’.'], ['Chạm vào ‘Bật’.', 'Khi ngủ, thông báo im lặng và màn hình tối hơn.']]),
  'g21-aod': L('Hiện đồng hồ ngay cả khi tắt màn hình bằng Always On Display.', [
    ...settings('Màn hình khóa và AOD'), ['Chạm vào công tắc ‘Always On Display’ để bật.', 'Đồng hồ vẫn hiện khi màn hình tắt. Tốn thêm chút pin.'], ['Muốn đổi kiểu đồng hồ, chạm và giữ màn hình khóa.']]),
  'g21-wellbeing': L('Xem hôm nay đã dùng điện thoại bao lâu và đặt hẹn giờ ứng dụng.', [
    ...settings('Sức khỏe kỹ thuật số'), ['Xem thời gian dùng điện thoại hôm nay.'], ['Chạm vào ‘Hẹn giờ ứng dụng’.', 'Bạn có thể giới hạn thời gian dùng mỗi ngày cho từng ứng dụng.']]),
  'g21-apps': L('Tìm hiểu Samsung Health, Samsung Kids và Game Booster.', [
    ['Chạm vào ứng dụng ‘Samsung Health’.', 'Nếu không có trên màn hình Chính, hãy tìm trong màn hình Ứng dụng.'], ['Xem số bước và lịch sử tập luyện.'],
    ...settings('Ứng dụng', 'Samsung Kids'), ['Chạm vào ‘Mở’.', 'Bạn có thể chọn ứng dụng và giới hạn thời gian cho cháu.'], ['Khi chơi game, chạm vào biểu tượng Game Booster ở cuối màn hình.']]),
  'g21-samsung': L('Tìm ứng dụng Samsung.com, Samsung Global Goals và Samsung News.', [
    open('Samsung.com'), ['Ở đây bạn đọc tin sản phẩm Samsung và nhận hỗ trợ.'], HOME_BTN,
    ['Chạm vào ứng dụng ‘Samsung Global Goals’.', 'Tìm ‘Samsung Global Goals’ trong màn hình Ứng dụng.'], ['Tìm Samsung News bằng ô tìm kiếm trên màn hình Ứng dụng.']]),
  'g21-spen': L('Rút bút S Pen, mở menu của bút và thử ứng dụng PENUP trên dòng Ultra hỗ trợ.', [
    ['Nhấn nhẹ đầu bút S Pen ở đáy điện thoại.'], ['Chạm vào tính năng muốn dùng trong menu.'], open('PENUP'), ['Dùng xong, đẩy bút S Pen vào đến khi nghe tiếng tách.']]),
  'g22-ring': L('Cần kiểm tra gì khi điện thoại không đổ chuông.', [
    QUICK, ['Chạm vào nút ‘Âm thanh’.', 'Nếu đang ở Im lặng hoặc Rung, chạm để đổi sang Âm thanh.'], ['Nếu ‘Không làm phiền’ màu xanh (đang bật), chạm để tắt.'], ['Bấm phím Tăng âm lượng ở cạnh để to tiếng hơn.']]),
  'g22-network': L('Cần kiểm tra gì khi không gọi được hoặc mất Internet.', [
    QUICK, ['Nếu ‘Chế độ máy bay’ đang bật, chạm để tắt.'], ['Nếu ‘Dữ liệu di động’ đang tắt, chạm để bật.'], ['Nếu sóng yếu, thử đổi chỗ.'], ['Nếu vẫn không được, khởi động lại điện thoại.']]),
  'g22-charge': L('Cần kiểm tra gì khi Galaxy không sạc được.', [
    ['Xem dây và cục sạc đã cắm chặt chưa.'], ['Nếu cổng sạc bị ướt, để khô hẳn rồi mới sạc.'], ...settings('Pin', 'Cài đặt sạc'), ['Nếu vẫn không sạc, mang điện thoại, cục sạc và dây đến trung tâm bảo hành.']]),
  'g22-hot': L('Nên làm gì khi điện thoại bị nóng.', [
    ['Nếu đang sạc, rút cục sạc ra.'], ['Chạm vào nút Gần đây.'], ['Chạm vào ‘Đóng tất cả’ để đóng ứng dụng.'], ['Ngừng dùng máy một lúc và để nguội ở nơi thoáng mát.']]),
  'g22-freeze': L('Buộc khởi động lại Galaxy bị treo bằng hai phím.', [
    ['Nhấn giữ cùng lúc phím Cạnh và Giảm âm lượng hơn 7 giây.', 'Giữ đến khi màn hình tắt.'], ['Khi màn hình tắt, thả tay ra và chờ.']]),
  'g22-water': L('Cần kiểm tra và làm gì khi điện thoại bị ướt.', [
    ['Lau bằng vải mềm cho đến khi khô hẳn.'], ['Đừng cắm sạc cho đến khi máy khô hoàn toàn.'], ['Nếu dính nước biển, nước hồ bơi hay nước xà phòng, rửa bằng nước sạch rồi lau khô.'],
    ['Nếu thấy có gì lạ, mang ngay đến trung tâm bảo hành.']]),
  'g22-members': L('Kiểm tra lỗi điện thoại bằng Chẩn đoán điện thoại trong Samsung Members.', [
    ['Chạm vào ứng dụng ‘Samsung Members’.', 'Nếu không có trên màn hình Chính, hãy tìm trong màn hình Ứng dụng.'], ['Chạm vào ‘Hỗ trợ’.'], ['Chạm vào ‘Chẩn đoán điện thoại’.'], ['Chạm vào ‘Kiểm tra tất cả’ hoặc mục muốn kiểm tra.']]),
  'g22-service': L('Ghi lại kiểu máy và triệu chứng trước khi liên hệ bảo hành Samsung.', [
    ...settings('Thông tin điện thoại'), ['Ghi lại số kiểu máy (ví dụ SM-S942N).'], ['Ghi lại lỗi xảy ra khi nào và thế nào.'],
    ['Liên hệ hỗ trợ Samsung tại nước bạn hoặc đặt lịch ở trung tâm bảo hành.', 'Tìm trang hỗ trợ của nước bạn tại samsung.com/support.']]),
};
