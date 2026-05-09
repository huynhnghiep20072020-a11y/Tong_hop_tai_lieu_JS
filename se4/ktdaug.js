console.log("Câu 1:");

let n = 20;

if (n % 2 === 0) {
    console.log("Số " + n + " là số chẵn");
} else {
    console.log("Số " + n + " là số lẻ");
}

if (n > 0) {
    console.log("Số " + n + " là số dương");
} else if (n < 0) {
    console.log("Số " + n + " là số âm");
} else {
    console.log("Số " + n + " là số 0");
}

if (n > 0) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i + " ";
    }
    console.log(result);
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}

console.log("Câu 2:");

let tongFizz = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
        tongFizz += i;
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("Tổng của tất cả các số in ra chữ Fizz là: " + tongFizz);