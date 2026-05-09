let tongSoLuot = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let soLuotMuon = 0;

for (let i = 1; i <= tongSoLuot; i++) {
    let tenNguoi = prompt("Nhập tên người trả thứ " + i);
    let tenSach = prompt("Nhập tên sách");
    let soNgay = Number(prompt("Nhập số ngày đã mượn thực tế"));

    while (soNgay < 1) {
        soNgay = Number(prompt("Số ngày không hợp lệ. Vui lòng nhập lại số nguyên từ 1 trở lên:"));
    }

    if (soNgay <= 14) {
        alert("Trả đúng hạn");
    } else if (soNgay <= 21) {
        alert("Trả muộn nhẹ - Phạt nhắc nhở");
        soLuotMuon++;
    } else {
        alert("Quá hạn nghiêm trọng - Cần ghi biên bản phạt");
        soLuotMuon++;
    }
}

alert("Tổng số lượt trả sách: " + tongSoLuot + "\nSố lượt trả muộn (từ 15 ngày trở lên): " + soLuotMuon);