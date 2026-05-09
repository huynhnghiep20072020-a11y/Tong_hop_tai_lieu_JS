const productForm = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");

productForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newProduct = {
    name: nameInput.value,
    price: priceInput.value
  };

  const newListItem = document.createElement("li");
  newListItem.className = "product-item";
  
  newListItem.innerHTML = `<span>${newProduct.name}</span> - <span>${newProduct.price} VNĐ</span>`;

  productList.appendChild(newListItem);

  nameInput.value = "";
  priceInput.value = "";
});