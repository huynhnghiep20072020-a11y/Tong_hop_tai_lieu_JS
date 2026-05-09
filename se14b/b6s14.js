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
const searchInput = document.getElementById("search-input");
const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");

function formatCurrency(number) {
  return Number(number).toLocaleString("en-US");
}

for (let i = 0; i < products.length; i++) {
  let li = document.createElement("li");
  li.className = "product-item";
  li.setAttribute("data-price", products[i].price);
  li.innerHTML = `<span class="name">${products[i].name}</span> - <span class="price">${formatCurrency(products[i].price)} VND</span> <button class="delete-btn">Xóa</button> <button class="edit-price-btn">Sửa giá</button>`;
  productList.appendChild(li);
}

productForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let li = document.createElement("li");
  li.className = "product-item";
  li.setAttribute("data-price", priceInput.value);
  li.innerHTML = `<span class="name">${nameInput.value}</span> - <span class="price">${formatCurrency(priceInput.value)} VND</span> <button class="delete-btn">Xóa</button> <button class="edit-price-btn">Sửa giá</button>`;
  
  productList.appendChild(li);

  nameInput.value = "";
  priceInput.value = "";
});

productList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (confirmDelete) {
      event.target.parentElement.remove();
    }
  }

  if (event.target.classList.contains("edit-price-btn")) {
    let newPrice = prompt("Nhập giá mới (VND):");
    if (newPrice !== null && newPrice !== "") {
      let liElement = event.target.parentElement;
      liElement.setAttribute("data-price", newPrice);
      
      let priceSpan = liElement.querySelector(".price");
      priceSpan.innerText = `${formatCurrency(newPrice)} VND`;
    }
  }
});

searchInput.addEventListener("input", function() {
  let searchValue = searchInput.value.toLowerCase();
  let items = document.getElementsByClassName("product-item");

  for (let i = 0; i < items.length; i++) {
    let productName = items[i].querySelector(".name").innerText.toLowerCase();
    
    if (productName.includes(searchValue)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
});

function sortProducts(order) {
  let items = Array.from(document.getElementsByClassName("product-item"));
  
  items.sort(function(a, b) {
    let priceA = Number(a.getAttribute("data-price"));
    let priceB = Number(b.getAttribute("data-price"));
    
    if (order === "asc") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  productList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    productList.appendChild(items[i]);
  }
}

sortAscBtn.addEventListener("click", function() {
  sortProducts("asc");
});

sortDescBtn.addEventListener("click", function() {
  sortProducts("desc");
});