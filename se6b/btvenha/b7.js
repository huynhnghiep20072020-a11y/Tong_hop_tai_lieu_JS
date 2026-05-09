let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    alert("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let val = Number(prompt("Nhập giá trị phần tử thứ " + (i + 1) + ":"));
        arr.push(val);
    }

    arr.sort(function(a, b) {
        return b - a;
    });

    let max = arr[0];
    let secondMax = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            secondMax = arr[i];
            break;
        }
    }

    if (secondMax !== null) {
        alert(secondMax);
    } else {
        alert("Không có số lớn thứ hai");
    }
}