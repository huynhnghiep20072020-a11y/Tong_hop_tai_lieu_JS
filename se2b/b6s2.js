let tenSach = prompt("Nhập tên sách:");
let tenNguoiMuon = prompt("Nhập tên người mượn:");
let tinhTrang = prompt("Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):");
let soNgayMuon = Number(prompt("Nhập số ngày đã mượn (nhập 0 nếu chưa mượn):"));
let theThuVienInput = prompt("Bạn có thẻ thư viện không? (nhập 'có' hoặc 'true'):");

let coTheThuVien = (theThuVienInput === "có" || theThuVienInput === "true");

if (tinhTrang === "có sẵn" && coTheThuVien) {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} else if (tinhTrang === "đã mượn" && soNgayMuon < 30) {
    if (coTheThuVien) {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} else if (tinhTrang === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}