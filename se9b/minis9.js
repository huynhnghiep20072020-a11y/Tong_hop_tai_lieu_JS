let names = ["iPhone 15", "Samsung S24", "Tai nghe Sony", "Chuột Logitech", "Bàn phím cơ"];
let prices = [1200, 900, 150, 30, 80];
let stocks = [10, 5, 20, 50, 0];
let choice;

do {
    let menu = 
        "--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---\n" +
        "1. Lọc sản phẩm cao cấp (>500)\n" +
        "2. Kiểm định trạng thái dữ liệu\n" +
        "3. Phân tích giá trị vốn hóa\n" +
        "4. Triển khai chiến dịch chiết khấu (Giảm 10%)\n" +
        "5. Truy vấn sản phẩm theo từ khóa\n" +
        "6. Báo cáo tình trạng tồn kho\n" +
        "7. Thoát chương trình\n" +
        "Vui lòng nhập lựa chọn (1-7):";

    choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            let highValue = [];
            for (let i = 0; i < names.length; i++) {
                if (prices[i] > 500) {
                    highValue.push(names[i]);
                }
            }
            alert("Danh sách sản phẩm > 500:\n" + highValue.join(", "));
            break;

        case 2:
            let hasZero = stocks.some(s => s === 0);
            let allAbove100 = prices.every(p => p > 100);
            alert("Có sản phẩm hết hàng: " + hasZero + "\nTất cả giá > 100: " + allAbove100);
            break;

        case 3:
            let total = prices.reduce((acc, curr, index) => {
                return acc + (curr * stocks[index]);
            }, 0);
            alert("Tổng giá trị kho hàng: " + total);
            break;

        case 4:
            prices = prices.map(p => p * 0.9);
            alert("Đã giảm giá 10% thành công.");
            break;

        case 5:
            let kw = prompt("Nhập từ khóa tìm kiếm:");
            let found = "";
            if (kw) {
                for (let i = 0; i < names.length; i++) {
                    if (names[i].toLowerCase().includes(kw.toLowerCase())) {
                        found += names[i] + " - " + prices[i] + " - " + stocks[i] + "\n";
                    }
                }
            }
            alert(found ? found : "Không tìm thấy sản phẩm nào.");
            break;

        case 6:
            let report = "";
            for (let i = 0; i < names.length; i++) {
                let status = stocks[i] > 0 ? "Còn hàng" : "Hết hàng";
                report += names[i] + ": " + status + "\n";
            }
            alert(report);
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ.");
    }

} while (choice !== 7);