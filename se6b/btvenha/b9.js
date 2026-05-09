let arr = [];
let run = true;

while (run) {
    let menu = "================== MENU ==================\n\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n\n" +
        "==========================================\n" +
        "Lựa chọn của bạn:";

    let choice = Number(prompt(menu));

    if (choice === 1) {
        let n = Number(prompt("Nhập số lượng phần tử muốn nhập:"));
        arr = [];
        for (let i = 0; i < n; i++) {
            let val = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
            arr.push(val);
        }
        alert("Đã nhập thành công!");

    } else if (choice === 2) {
        alert("Các phần tử trong mảng: " + arr);

    } else if (choice === 3) {
        let evenNumbers = [];
        let sumEven = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]);
                sumEven += arr[i];
            }
        }
        alert("Các số chẵn: " + evenNumbers + "\nTổng số chẵn: " + sumEven);

    } else if (choice === 4) {
        if (arr.length === 0) {
            alert("Mảng rỗng!");
        } else {
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) max = arr[i];
                if (arr[i] < min) min = arr[i];
            }
            alert("Max: " + max + "\nMin: " + min);
        }

    } else if (choice === 5) {
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
        alert("Các số nguyên tố: " + primes + "\nTổng số nguyên tố: " + sumPrime);

    } else if (choice === 6) {
        let searchNum = Number(prompt("Nhập số cần thống kê:"));
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchNum) {
                count++;
            }
        }
        alert("Số " + searchNum + " xuất hiện " + count + " lần trong mảng.");

    } else if (choice === 7) {
        let val = Number(prompt("Nhập giá trị cần thêm:"));
        let index = Number(prompt("Nhập vị trí index muốn chèn:"));
        
        if (index >= 0 && index <= arr.length) {
            arr.splice(index, 0, val);
            alert("Đã thêm thành công!");
        } else {
            alert("Vị trí không hợp lệ!");
        }

    } else if (choice === 8) {
        run = false;
        alert("Đã thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1-8.");
    }
}