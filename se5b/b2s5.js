let danhSachTraMuon = [];

let soLuong = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

for (let i = 0; i < soLuong; i++) {
    let tenSach = prompt("Nhập tên sách bị trả muộn thứ " + (i + 1));
    danhSachTraMuon.push(tenSach);
}

console.log("Tổng số sách bị trả muộn: " + danhSachTraMuon.length);

console.log("Danh sách chi tiết:");
let soSachDai = 0;

for (let j = 0; j < danhSachTraMuon.length; j++) {
    console.log((j + 1) + " - " + danhSachTraMuon[j]);

    if (danhSachTraMuon[j].length > 20) {
        soSachDai++;
    }
}

console.log("Số lượng sách có tên dài hơn 20 ký tự: " + soSachDai);