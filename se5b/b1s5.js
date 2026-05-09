let danhSachSach = [];

let soLuong = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách ?"));

for (let i = 0; i < soLuong; i++) {
    let tenSach = prompt("Nhập tên sách thứ " + (i + 1));
    danhSachSach.push(tenSach);
}

console.log("Tổng số sách đã được trả: " + danhSachSach.length);

console.log("Danh sách các cuốn sách:");
for (let j = 0; j < danhSachSach.length; j++) {
    console.log(danhSachSach[j]);
}