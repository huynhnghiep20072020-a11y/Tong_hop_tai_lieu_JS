let input = prompt("Nhập dãy số, cách nhau bởi dấu phẩy (Ví dụ: 1,22,12,8,7,9):");
let arr = input.split(",");
let result = [];

for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num >= 10) {
        result.push(num);
    }
}

if (result.length > 0) {
    alert(result.join(" "));
} else {
    alert("Không có số nào lớn hơn 10");
}