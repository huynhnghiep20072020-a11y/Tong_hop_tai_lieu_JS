let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let soLuong = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

for (let i = 0; i < soLuong; i++) {
    let id = prompt("Nhập mã sách:");
    let name = prompt("Nhập tên sách:");
    let qty = Number(prompt("Nhập số lượng tồn kho (>=0):"));

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(qty);
}

console.log("Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):");

let countLowStock = 0;
let outOfStockString = "";

for (let i = 0; i < booksId.length; i++) {
    console.log((i + 1) + ". Mã: " + booksId[i] + " - Tên: " + booksName[i] + " - Còn: " + inventoryQuantity[i] + " bản");

    if (inventoryQuantity[i] <= 5) {
        countLowStock++;
    }

    if (inventoryQuantity[i] === 0) {
        if (outOfStockString === "") {
            outOfStockString += booksId[i];
        } else {
            outOfStockString += ", " + booksId[i];
        }
    }
}

console.log("");
console.log("Số sách có tồn kho <= 5 bản: " + countLowStock + " loại");
console.log("Các mã sách đã hết hàng (0 bản): " + outOfStockString);