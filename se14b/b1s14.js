const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

const productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
  let productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `<span>${products[i].name}</span> - <span>${products[i].price} VNĐ</span>`;
  productList.appendChild(productDiv);
}