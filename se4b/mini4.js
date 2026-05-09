function kiemTraNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function chayChuongTrinh() {
    let luaChon;
    
    do {
        let menu = "Chọn chức năng:\n" +
                   "1. Kiểm tra số chẵn / lẻ\n" +
                   "2. Kiểm tra số âm / dương\n" +
                   "3. Tìm ước số\n" +
                   "4. Tính giai thừa\n" +
                   "5. Kiểm tra số nguyên tố\n" +
                   "6. In dãy số nguyên tố\n" +
                   "7. Tính tổng các chữ số\n" +
                   "8. In dãy Fibonacci\n" +
                   "9. Kiểm tra số hoàn hảo\n" +
                   "10. Thoát";
        
        luaChon = parseInt(prompt(menu));

        if (luaChon >= 1 && luaChon <= 9) {
            let n = parseInt(prompt("Nhập vào một số nguyên n:"));
            
            if (isNaN(n)) {
                alert("Vui lòng nhập một số hợp lệ!");
                continue; 
            }

            switch (luaChon) {
                case 1:
                    if (n % 2 === 0) alert(n + " là số CHẴN.");
                    else alert(n + " là số LẺ.");
                    break;

                case 2:
                    if (n > 0) alert(n + " là số DƯƠNG.");
                    else if (n < 0) alert(n + " là số ÂM.");
                    else alert("Số này là số 0.");
                    break;

                case 3:
                    let uocSo = "";
                    for (let i = 1; i <= n; i++) {
                        if (n % i === 0) uocSo += i + " ";
                    }
                    alert("Các ước số của " + n + " là: " + uocSo);
                    break;

                case 4:
                    if (n < 0) {
                        alert("Không tính giai thừa cho số âm.");
                    } else {
                        let gt = 1;
                        for (let i = 1; i <= n; i++) gt *= i;
                        alert("Giai thừa của " + n + " là: " + gt);
                    }
                    break;

                case 5:
                    if (kiemTraNguyenTo(n)) alert(n + " LÀ số nguyên tố.");
                    else alert(n + " KHÔNG PHẢI số nguyên tố.");
                    break;

                case 6:
                    let dem = 0;
                    let soCanCheck = 2;
                    let ketQuaSNT = "";
                    while (dem < n) {
                        if (kiemTraNguyenTo(soCanCheck)) {
                            ketQuaSNT += soCanCheck + " ";
                            dem++;
                        }
                        soCanCheck++;
                    }
                    alert(n + " số nguyên tố đầu tiên là: " + ketQuaSNT);
                    break;

                case 7:
                    let sum = 0;
                    let tempN = Math.abs(n);
                    while (tempN > 0) {
                        sum += tempN % 10;
                        tempN = Math.floor(tempN / 10);
                    }
                    alert("Tổng các chữ số của " + n + " là: " + sum);
                    break;

                case 8:
                    let fib = [];
                    if (n >= 1) fib.push(0);
                    if (n >= 2) fib.push(1);
                    for (let i = 2; i < n; i++) {
                        fib[i] = fib[i - 1] + fib[i - 2];
                    }
                    alert(n + " số đầu tiên trong dãy Fibonacci: " + fib.join(", "));
                    break;

                case 9:
                    let tongUoc = 0;
                    for (let i = 1; i < n; i++) {
                        if (n % i === 0) tongUoc += i;
                    }
                    if (tongUoc === n && n !== 0) alert(n + " LÀ số hoàn hảo.");
                    else alert(n + " KHÔNG PHẢI số hoàn hảo.");
                    break;
            }
        } else if (luaChon !== 10) {
            alert("Chức năng không tồn tại. Vui lòng chọn từ 1 đến 10.");
        }

    } while (luaChon !== 10);
    
    alert("Đã thoát chương trình.");
}