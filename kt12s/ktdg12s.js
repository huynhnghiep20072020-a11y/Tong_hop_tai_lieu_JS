const cart = [
    { id: 1, name: 'iPhone 15 Pro', price: 25000000, quantity: 1, inStock: true },
    { id: 2, name: 'Ốp lưng Silicon', price: 150000, quantity: 3, inStock: true },
    { id: 3, name: 'Sạc dự phòng', price: 800000, quantity: 0, inStock: false },
    { id: 4, name: 'Tai nghe Bluetooth', price: 3000000, quantity: 2, inStock: true }
];

const highValueProducts = cart.filter(item => item.price > 2000000);
console.log(highValueProducts);

const hasInvalidItem = cart.some(item => item.inStock === false || item.quantity === 0);
if (hasInvalidItem) {
    console.log("Cần xem lại giỏ hàng");
} else {
    console.log("Đủ điều kiện thanh toán");
}

const invoiceItems = cart.map(item => {
    return `${item.name} x ${item.quantity} = ${item.price * item.quantity}`;
});
console.log(invoiceItems);

const totalAmount = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log(totalAmount);