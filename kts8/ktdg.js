let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let hasNegativeRevenue = revenues.some(function(revenue) {
    return revenue < 0;
});
console.log("Có đơn hàng âm: " + hasNegativeRevenue);

let isAllAbove500 = revenues.every(function(revenue) {
    return revenue > 500;
});
console.log("Tất cả trên 500: " + isAllAbove500);

let netProfits = revenues.map(function(revenue) {
    return revenue * 0.9;
});
console.log(netProfits);