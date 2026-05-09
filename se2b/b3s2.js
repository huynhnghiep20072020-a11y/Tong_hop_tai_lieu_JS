let tenSach = prompt("Nhập tên sách:");
let theLoai = prompt("Nhập thể loại (Khoa học, Lịch sử, Văn học, Truyện):");
let tinhTrangInput = prompt("Tình trạng sách (Nhập 'true' nếu có sẵn, khác 'true' là đã mượn):");

let isAvailable = (tinhTrangInput === "true");

if (theLoai === "Khoa học" || theLoai === "Lịch sử") {
    if (isAvailable) {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (theLoai === "Văn học" || theLoai === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}