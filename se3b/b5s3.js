let tongYeuCau = 0;
let soThanhCong = 0;
let soTuChoi = 0;
let soChoXetDuyet = 0;

while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (tiepTuc === "không") {
        break;
    }

    if (tiepTuc === "có") {
        let tenBanDoc = prompt("Tên bạn đọc");
        let maSach = prompt("Mã sách muốn đặt trước");
        let tenSach = prompt("Tên sách");
        let soNgayCho = Number(prompt("Số ngày dự kiến chờ (số nguyên >= 1)"));
        let uuTien = Number(prompt("Ưu tiên (1 - Sinh viên, 2 - Giảng viên, 3 - Đặc cách)"));

        tongYeuCau++;

        if (soNgayCho > 45) {
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            soTuChoi++;
        } else if (uuTien === 3) {
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
            soThanhCong++;
        } else if (uuTien === 2 && soNgayCho <= 30) {
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
            soThanhCong++;
        } else if (uuTien === 1 && soNgayCho <= 21) {
            console.log("Đặt trước thành công");
            soThanhCong++;
        } else {
            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
            soChoXetDuyet++;
        }
    }
}

console.log("--- BÁO CÁO KẾT THÚC CA ---");
console.log("Tổng số yêu cầu đã xử lý: " + tongYeuCau);
console.log("Số yêu cầu được đặt trước thành công: " + soThanhCong);
console.log("Số yêu cầu bị từ chối: " + soTuChoi);
console.log("Số yêu cầu chờ xét duyệt: " + soChoXetDuyet);

alert("Đã kết thúc ca làm việc. Vui lòng kiểm tra tab Console để xem báo cáo chi tiết.");