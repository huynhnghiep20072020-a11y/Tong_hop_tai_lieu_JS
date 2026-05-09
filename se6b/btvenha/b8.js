let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    alert("Không phải dãy số fibonacci");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let val = Number(prompt("Nhập giá trị phần tử thứ " + (i + 1) + ":"));
        arr.push(val);
    }

    let isFibonacci = true;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }

    if (isFibonacci) {
        alert("Là dãy số fibonacci");
    } else {
        alert("Không phải dãy số fibonacci");
    }
}