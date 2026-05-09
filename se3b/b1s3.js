let tongSoLuot = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

for (let i = 1; i <= tongSoLuot; i++) {
    let tenNguoi = prompt("Nhập tên người mượn thứ " + i);
    let tenSach = prompt("Nhập tên sách");
    let soNgayMuon = Number(prompt("Nhập số ngày mượn (từ 1 đến 30 ngày)"));

    if (soNgayMuon > 14) {
        alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        alert("Mượn thành công");
    }
}

alert("Tổng số lượt mượn trong ngày: " + tongSoLuot);