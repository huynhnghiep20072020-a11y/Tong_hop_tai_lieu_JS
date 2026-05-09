let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let val = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        arr.push(val);
    }

    let sum = 0;
    let foundNumber = false;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i].trim() !== "") {
            sum += Number(arr[i]);
            foundNumber = true;
        }
    }

    if (foundNumber) {
        alert(sum);
    } else {
        alert("Không có phần tử nào là số");
    }
}