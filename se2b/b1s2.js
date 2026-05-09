let tenSach = prompt("Mời bạn nhập tên sách:");
let tacGia = prompt("Mời bạn nhập tên tác giả:");
let namXuatBan = Number(prompt("Mời bạn nhập năm xuất bản:"));

let namHienTai = new Date().getFullYear();
let tuoiSach = namHienTai - namXuatBan;

console.log("--- THÔNG TIN SÁCH: " + tenSach + " ---");

if (namXuatBan === namHienTai) {
    console.log("Đây là sách mới!");
} else if (tuoiSach <= 5 && tuoiSach >= 0) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}