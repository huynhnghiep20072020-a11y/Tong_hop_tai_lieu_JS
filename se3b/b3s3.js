let soLanThanhCong = 0;
let soLanThatBai = 0;

while (true) {
    let traLoi = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (traLoi === "không") {
        break;
    }

    if (traLoi === "có") {
        let tenBanDoc = prompt("Nhập tên bạn đọc");
        let tenSach = prompt("Nhập tên sách");
        let soNgayDaMuon = Number(prompt("Số ngày đã mượn hiện tại"));
        let soNgayGiaHan = Number(prompt("Số ngày muốn gia hạn thêm"));
        
        let tongThoiGian = soNgayDaMuon + soNgayGiaHan;

        if (tongThoiGian > 60) {
            alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
            soLanThatBai++;
        } else if (soNgayDaMuon > 45) {
            alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
            soLanThatBai++;
        } else {
            alert("Gia hạn thành công");
            soLanThanhCong++;
        }
    }
}

alert("Thống kê ca làm việc:\nSố lần gia hạn thành công: " + soLanThanhCong + "\nSố lần gia hạn không thành công: " + soLanThatBai);