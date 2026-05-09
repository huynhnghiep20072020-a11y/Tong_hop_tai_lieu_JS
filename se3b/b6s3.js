let tongSoPhanHoi = 0;
let soNghiemTrong = 0;
let soTrungBinh = 0;
let soNhe = 0;
let soDeXuat = 0;
let soTichCuc = 0;

while (true) {
    let tiepTuc = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (tiepTuc === "không") {
        break;
    }

    if (tiepTuc === "có") {
        let tenBanDoc = "";
        while (tenBanDoc === "") {
            tenBanDoc = prompt("Tên bạn đọc (không được để trống):");
        }

        let maThe = prompt("Mã thẻ bạn đọc (nếu có):");
        let loaiPhanHoi = Number(prompt("Loại phản hồi (1 = Khiếu nại, 2 = Đề xuất, 3 = Tích cực):"));
        let mucDo = 0;

        if (loaiPhanHoi === 1) {
            mucDo = Number(prompt("Mức độ nghiêm trọng (1 = Nhẹ, 2 = Trung bình, 3 = Nghiêm trọng):"));
        }

        let noiDung = prompt("Nội dung ngắn gọn:");

        tongSoPhanHoi++;

        if (loaiPhanHoi === 1 && mucDo === 3) {
            console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            soNghiemTrong++;
        } else if (loaiPhanHoi === 1 && mucDo === 2) {
            console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            soTrungBinh++;
        } else if (loaiPhanHoi === 1 && mucDo === 1) {
            console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
            soNhe++;
        } else if (loaiPhanHoi === 2) {
            console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
            soDeXuat++;
        } else if (loaiPhanHoi === 3) {
            console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
            soTichCuc++;
        }
    }
}

console.log("--- BÁO CÁO TỔNG HỢP CA LÀM VIỆC ---");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + tongSoPhanHoi);
console.log("Số khiếu nại nghiêm trọng (mức 3): " + soNghiemTrong);
console.log("Số khiếu nại trung bình (mức 2): " + soTrungBinh);
console.log("Số khiếu nại nhẹ (mức 1): " + soNhe);
console.log("Số đề xuất cải thiện: " + soDeXuat);
console.log("Số phản hồi tích cực: " + soTichCuc);

alert("Đã kết thúc ca. Vui lòng xem báo cáo chi tiết trong tab Console.");