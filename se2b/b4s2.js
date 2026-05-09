let tenSach = prompt("Nhập tên sách:");
let tenNguoiMuon = prompt("Nhập tên người mượn:");
let mucDoYeuThich = Number(prompt("Nhập mức độ yêu thích (từ 1 đến 5):"));

if (mucDoYeuThich === 5 || mucDoYeuThich === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (mucDoYeuThich === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (mucDoYeuThich === 2 || mucDoYeuThich === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}