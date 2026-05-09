let tongSoSach = 0;
let soSachMat = 0;
let soSachHet = 0;

while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (tiepTuc === "không") {
        break;
    }

    if (tiepTuc === "có") {
        let maSach = prompt("Nhập mã sách");
        
        while (maSach === "") {
            maSach = prompt("Mã sách không được để trống. Vui lòng nhập lại:");
        }

        let tenSach = prompt("Nhập tên sách");
        let soLuong = Number(prompt("Số lượng thực tế đang có"));
        let tinhTrang = Number(prompt("Tình trạng sách (1 - Bình thường, 2 - Mất)"));

        tongSoSach++;

        
        if (tinhTrang === 2) {
            alert("Phân loại: Sách mất");
            soSachMat++;
        } else if (tinhTrang === 1 && soLuong === 0) {
            alert("Phân loại: Sách hết");
            soSachHet++;
        } else if (tinhTrang === 1 && soLuong >= 10) {
            alert("Phân loại: Sách tồn kho nhiều");
        } else if (tinhTrang === 1 && soLuong > 0) {
            alert("Phân loại: Sách tồn kho bình thường");
        }
    }
}

alert("Báo cáo kiểm kê:\nTổng số sách đã kiểm kê: " + tongSoSach + "\nSố sách mất: " + soSachMat + "\nSố sách hết hàng: " + soSachHet);