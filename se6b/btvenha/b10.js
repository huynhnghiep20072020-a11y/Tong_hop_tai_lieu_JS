let arr = [];
let choice;

do {
    let menu = 
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
        "5. In ra các số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
        "0. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn:";

    choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập số lượng phần tử n:"));
            arr = []; 
            for (let i = 0; i < n; i++) {
                let val = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
                arr.push(val);
            }
            alert("Đã nhập dữ liệu thành công!");
            break;

        case 2:
            alert("Mảng đang quản lý: " + arr.join(", "));
            break;

        case 3:
            let evenNumbers = [];
            let sumEven = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    evenNumbers.push(arr[i]);
                    sumEven += arr[i];
                }
            }
            
            evenNumbers.sort(function(a, b) { return b - a; });
            alert("Số chẵn (giảm dần): " + evenNumbers.join(", ") + "\nTổng số chẵn: " + sumEven);
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng rỗng!");
            } else {
                let max = arr[0], maxIndex = 0;
                let min = arr[0], minIndex = 0;
                
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        maxIndex = i;
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                        minIndex = i;
                    }
                }
                alert("Max: " + max + " (Index: " + maxIndex + ")\nMin: " + min + " (Index: " + minIndex + ")");
            }
            break;

        case 5:
            let primes = [];
            let sumPrime = 0;
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                let isPrime = true;
                if (num < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(num); j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    primes.push(num);
                    sumPrime += num;
                }
            }
            alert("Các số nguyên tố: " + primes.join(", ") + "\nTổng: " + sumPrime);
            break;

        case 6:
            let searchNum = Number(prompt("Nhập số cần đếm:"));
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === searchNum) count++;
            }
            alert("Số " + searchNum + " xuất hiện " + count + " lần.");
            break;

        case 7:
            let addVal = Number(prompt("Nhập giá trị cần thêm:"));
            let addIndex = Number(prompt("Nhập vị trí (index) muốn chèn:"));
            
            arr.splice(addIndex, 0, addVal);
            alert("Đã thêm thành công! Mảng mới: " + arr.join(", "));
            break;

        case 8:
            let delVal = Number(prompt("Nhập giá trị muốn xóa:"));
            let indexDel = -1;
            
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === delVal) {
                    indexDel = i;
                    break;
                }
            }
            if (indexDel !== -1) {
                arr.splice(indexDel, 1);
                alert("Đã xóa phần tử " + delVal);
            } else {
                alert("Không tìm thấy giá trị này trong mảng!");
            }
            break;

        case 9:
            let sortType = Number(prompt("Nhập 1 để Tăng dần, 2 để Giảm dần:"));
            if (sortType === 1) {
                arr.sort(function(a, b) { return a - b; });
                alert("Đã sắp xếp TĂNG dần: " + arr.join(", "));
            } else if (sortType === 2) {
                arr.sort(function(a, b) { return b - a; });
                alert("Đã sắp xếp GIẢM dần: " + arr.join(", "));
            } else {
                alert("Lựa chọn không hợp lệ!");
            }
            break;

        case 0:
            alert("Tạm biệt!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập từ 0-9!");
    }

} while (choice !== 0);