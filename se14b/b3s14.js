const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");

for (let i = 0; i < products.length; i++) {
  let li = document.createElement("li");
  li.className = "product-item";
  li.innerHTML = `<span>${products[i].name}</span> - <span>${products[i].price} VNĐ</span> <button class="delete-btn">Xóa</button>`;
  productList.appendChild(li);
}

productForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let li = document.createElement("li");
  li.className = "product-item";
  li.innerHTML = `<span>${nameInput.value}</span> - <span>${priceInput.value} VNĐ</span> <button class="delete-btn">Xóa</button>`;
  
  productList.appendChild(li);

  nameInput.value = "";
  priceInput.value = "";
});

productList.addEventListener("click", function(event) {
  if (event.target.className === "delete-btn") {
    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (confirmDelete) {
      event.target.parentElement.remove();
    }
  }
});