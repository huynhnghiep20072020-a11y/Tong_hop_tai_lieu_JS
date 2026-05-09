let cardIds = [];
let names = [];
let borrowedBooks = [];
let overdueDays = [];

let soLuong = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

for (let i = 0; i < soLuong; i++) {
    let id;
    let isDuplicate;
    
    do {
        isDuplicate = false;
        id = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1) + ":");
        for (let j = 0; j < cardIds.length; j++) {
            if (cardIds[j] === id) {
                isDuplicate = true;
                alert("Mã thẻ đã tồn tại, vui lòng nhập lại!");
                break;
            }
        }
    } while (isDuplicate);

    let name = prompt("Nhập tên bạn đọc:");
    let books = prompt("Nhập mã sách đang mượn (cách nhau bởi dấu phẩy):");
    let days = Number(prompt("Nhập số ngày quá hạn (>= 0):"));

    cardIds.push(id);
    names.push(name);
    borrowedBooks.push(books);
    overdueDays.push(days);
}

console.log("Danh sách bạn đọc quá hạn (" + cardIds.length + " người):");

let countOver10 = 0;
let listJsPyt = "";
let maxDays = -1;
let maxName = "";
let countOver7 = 0;

for (let i = 0; i < cardIds.length; i++) {
    console.log((i + 1) + ". Mã thẻ: " + cardIds[i] + " | Tên: " + names[i] + " | Sách đang mượn: " + borrowedBooks[i] + " | Quá hạn: " + overdueDays[i] + " ngày");

    if (overdueDays[i] >= 10) {
        countOver10++;
    }

    if (borrowedBooks[i].includes("JS") && borrowedBooks[i].includes("PYT")) {
        if (listJsPyt === "") {
            listJsPyt += cardIds[i];
        } else {
            listJsPyt += ", " + cardIds[i];
        }
    }

    if (overdueDays[i] > maxDays) {
        maxDays = overdueDays[i];
        maxName = names[i];
    }

    if (overdueDays[i] >= 7) {
        countOver7++;
    }
}

console.log("-----------------------------------------");
console.log("Tổng số bạn đọc quá hạn >= 10 ngày: " + countOver10 + " người");
console.log("Các bạn đọc đang mượn cả sách JS* và PYT*: " + listJsPyt);
console.log("Bạn đọc có số ngày quá hạn cao nhất: " + maxName + " (" + maxDays + " ngày)");

if (countOver7 === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (countOver7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}