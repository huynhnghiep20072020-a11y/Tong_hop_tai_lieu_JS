let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
    alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let val = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
        arr.push(val);
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] < 0) {
            count++;
        }
    }
    alert(count);
}