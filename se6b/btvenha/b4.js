let n = Number(prompt("Nhập số lượng phần tử n:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let char = prompt("Nhập ký tự thứ " + (i + 1) + ":");
    arr.push(char);
}

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i].trim() !== "") {
        count++;
    }
}

if (count > 0) {
    alert(count);
} else {
    alert("Không có ký tự số");
}