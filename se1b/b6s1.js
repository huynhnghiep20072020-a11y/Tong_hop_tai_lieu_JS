let tenSach = prompt("Nhập tên sách:");
let soThuTu = prompt("Nhập số thứ tự của sách:");

let tenChuanHoa = tenSach.trim().toUpperCase();
let maSach = "LIB - " + tenChuanHoa + " - " + soThuTu;

console.log("Tên sách gốc: " + tenSach);
console.log("Mã sách sau chuẩn hóa: " + maSach);