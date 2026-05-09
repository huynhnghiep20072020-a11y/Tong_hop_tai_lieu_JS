let str = "Quý, Nam, Lan, Hùng, Nam";
let students = str.split(", ");
console.log("Cau 1");
console.log("Mảng sau khi tách:", students);
students.reverse();
console.log("Mảng sau khi đảo ngược:", students);
if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}
console.log("Vị trí (index) đầu tiên của tên Nam:", students.indexOf("Nam"));
console.log("\nCau 2");
let prices = [100, 200, 300, 400];
console.log("Duyệt bằng for...of:");
for (let price of prices) {
    console.log(price);
}
console.log("Duyệt bằng for...in:");
for (let index in prices) {
    console.log(index);
}
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    if (i % 2 === 0) {
        sum += prices[i];
    }
}
console.log("Tổng các phần tử ở vị trí index chẵn: " + sum);