let arr = [];
let running = true;

while (running) {
    let menu = "--- MENU QUẢN LÝ MẢNG ---\n" +
        "1. Nhập dãy số (cách nhau bởi dấu phẩy)\n" +
        "2. Hiển thị mảng hiện tại\n" +
        "3. Tìm giá trị lớn nhất (Max) và nhỏ nhất (Min)\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm kiếm phần tử\n" +
        "6. Đảo ngược mảng\n" +
        "7. Thoát chương trình\n\n" +
        "Nhập lựa chọn của bạn (1-7):";

    let choice = Number(prompt(menu));

    if (choice === 1) {
        let input = prompt("Nhập dãy số (ví dụ: 1,2,3,4):");
        if (input) {
            let tempArr = input.split(",");
            arr = [];
            for (let i = 0; i < tempArr.length; i++) {
                arr.push(Number(tempArr[i]));
            }
            alert("Đã nhập dữ liệu thành công!");
        } else {
            alert("Bạn chưa nhập dữ liệu!");
        }

    } else if (choice === 2) {
        if (arr.length === 0) {
            alert("Mảng đang rỗng!");
        } else {
            let output = "";
            for (let i = 0; i < arr.length; i++) {
                output += arr[i];
                if (i < arr.length - 1) {
                    output += " - ";
                }
            }
            alert("Mảng hiện tại: " + output);
        }

    } else if (choice === 3) {
        if (arr.length === 0) {
            alert("Mảng rỗng, không thể tìm Max/Min!");
        } else {
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            alert("Giá trị lớn nhất (Max): " + max + "\nGiá trị nhỏ nhất (Min): " + min);
        }

    } else if (choice === 4) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        alert("Tổng các phần tử trong mảng là: " + sum);

    } else if (choice === 5) {
        let searchNum = Number(prompt("Nhập số cần tìm:"));
        let foundIndex = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchNum) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            alert("Số " + searchNum + " được tìm thấy tại vị trí index: " + foundIndex);
        } else {
            alert("Không tìm thấy số " + searchNum + " trong mảng.");
        }

    } else if (choice === 6) {
        arr.reverse();
        let output = "";
        for (let i = 0; i < arr.length; i++) {
            output += arr[i];
            if (i < arr.length - 1) {
                output += " - ";
            }
        }
        alert("Đã đảo ngược mảng: " + output);

    } else if (choice === 7) {
        running = false;
        alert("Cảm ơn bạn đã sử dụng chương trình!");
    } else {
        alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7!");
    }
}