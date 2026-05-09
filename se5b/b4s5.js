let booksId = [];
let booksName = [];
let bookStatus = [];

let soLuong = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

for (let i = 0; i < soLuong; i++) {
    let id = prompt("Nhập mã sách thứ " + (i + 1));
    let name = prompt("Nhập tên sách thứ " + (i + 1));
    let statusNum = Number(prompt("Nhập tình trạng (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp):"));
    
    let statusString = "";
    if (statusNum === 1) {
        statusString = "Hỏng nhẹ";
    } else if (statusNum === 2) {
        statusString = "Hỏng nặng";
    } else if (statusNum === 3) {
        statusString = "Cần sửa gấp";
    } else {
        statusString = "Hỏng nhẹ";
    }

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(statusString);
}

console.log("--- DANH SÁCH BAN ĐẦU (" + booksId.length + " cuốn) ---");
for (let i = 0; i < booksId.length; i++) {
    console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
}

let running = true;

while (running) {
    let option = Number(prompt("CHẾ ĐỘ CHỈNH SỬA:\n1: Sửa tình trạng\n2: Loại bỏ (xóa) sách\n0: Kết thúc và xem báo cáo"));

    if (option === 0) {
        running = false;
    } else if (option === 1) {
        let searchId = prompt("Nhập mã sách cần sửa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === searchId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            let newStatusNum = Number(prompt("Chọn tình trạng mới:\n1: Hỏng nhẹ\n2: Hỏng nặng\n3: Cần sửa gấp\n4: Đã sửa xong\n5: Loại bỏ"));
            let newStatusStr = "";
            if (newStatusNum === 1) newStatusStr = "Hỏng nhẹ";
            else if (newStatusNum === 2) newStatusStr = "Hỏng nặng";
            else if (newStatusNum === 3) newStatusStr = "Cần sửa gấp";
            else if (newStatusNum === 4) newStatusStr = "Đã sửa xong";
            else if (newStatusNum === 5) newStatusStr = "Loại bỏ";
            
            bookStatus[index] = newStatusStr;
            console.log("Đã cập nhật trạng thái sách: " + booksId[index]);
        } else {
            console.log("Không tìm thấy mã sách này!");
        }
        
        console.log("\n--- DANH SÁCH HIỆN TẠI ---");
        for (let i = 0; i < booksId.length; i++) {
            console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
        }

    } else if (option === 2) {
        let searchId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === searchId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            console.log("Đã xóa sách khỏi danh sách.");
        } else {
            console.log("Không tìm thấy mã sách này!");
        }

        console.log("\n--- DANH SÁCH HIỆN TẠI ---");
        for (let i = 0; i < booksId.length; i++) {
            console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
        }
    }
}

console.log("\n=========================");
console.log("BÁO CÁO CUỐI CÙNG");
console.log("Tổng số sách còn lại trong danh sách: " + booksId.length);

let countDaSua = 0;
let countLoaiBoStatus = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") {
        countDaSua++;
    }
    if (bookStatus[i] === "Loại bỏ") {
        countLoaiBoStatus++;
    }
}

console.log("Số sách 'Đã sửa xong': " + countDaSua);
console.log("Số sách có trạng thái 'Loại bỏ': " + countLoaiBoStatus);

console.log("Chi tiết danh sách còn lại:");
for (let i = 0; i < booksId.length; i++) {
    console.log(booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
}