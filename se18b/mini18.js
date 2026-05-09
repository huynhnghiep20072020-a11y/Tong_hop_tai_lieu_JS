const STORAGE_KEY = 'products_data';

let appData = {
    products: [],
    idCounter: 1
};

let editingId = null;

const form = document.getElementById('product-form');
const formTitle = document.getElementById('form-title');
const btnSubmit = document.getElementById('btn-submit');
const btnCancel = document.getElementById('btn-cancel');
const btnDeleteAll = document.getElementById('btn-delete-all');

const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');

const tableBody = document.getElementById('table-body');
const tableResponsive = document.querySelector('.table-responsive');
const emptyState = document.getElementById('empty-state');

const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const descInput = document.getElementById('description');

const statTotalProducts = document.getElementById('stat-total-products');
const statTotalValue = document.getElementById('stat-total-value');
const statTotalQuantity = document.getElementById('stat-total-quantity');

const formatCurrency = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number) + ' đ';
};

const saveToLocalStorage = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (error) {
        console.error("Lỗi khi lưu vào LocalStorage:", error);
        alert("Không thể lưu dữ liệu. Có thể bộ nhớ LocalStorage đã đầy!");
    }
};

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const parsedData = JSON.parse(data);
            appData.products = Array.isArray(parsedData.products) ? parsedData.products : [];
            appData.idCounter = typeof parsedData.idCounter === 'number' ? parsedData.idCounter : 1;
        }
    } catch (error) {
        console.error("Dữ liệu LocalStorage bị lỗi/corrupt. Trả về trạng thái mặc định.", error);
        appData = { products: [], idCounter: 1 };
    }
};

const resetFormState = () => {
    form.reset();
    editingId = null;
    formTitle.textContent = "Thêm Sản Phẩm Mới";
    btnSubmit.innerHTML = `<i class="fas fa-plus-circle"></i> <span>Thêm Sản Phẩm</span>`;
    btnSubmit.classList.replace('btn-warning', 'btn-primary');
    btnCancel.classList.add('hidden');
};

const updateStats = () => {
    const totalProducts = appData.products.length;
    let totalValue = 0;
    let totalQuantity = 0;

    appData.products.forEach(p => {
        totalValue += (p.price * p.quantity);
        totalQuantity += p.quantity;
    });

    statTotalProducts.textContent = totalProducts;
    statTotalValue.textContent = formatCurrency(totalValue);
    statTotalQuantity.textContent = totalQuantity;
};

const renderTable = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filterCat = filterCategory.value;

    const filteredProducts = appData.products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchTerm) || 
                            (p.description && p.description.toLowerCase().includes(searchTerm));
        const matchCategory = filterCat === 'all' || p.category === filterCat;
        return matchSearch && matchCategory;
    });

    tableBody.innerHTML = '';

    if (filteredProducts.length === 0) {
        tableResponsive.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        tableResponsive.style.display = 'block';
        emptyState.style.display = 'none';

        filteredProducts.forEach(p => {
            const tr = document.createElement('tr');
            
            const qtyClass = p.quantity < 10 ? 'qty-danger' : '';

            tr.innerHTML = `
                <td class="col-id">#${p.id}</td>
                <td><strong>${p.name}</strong></td>
                <td><span class="badge">${p.category}</span></td>
                <td class="price-text">${formatCurrency(p.price)}</td>
                <td class="${qtyClass}">${p.quantity}</td>
                <td class="col-desc"><div class="desc-text" title="${p.description || ''}">${p.description || '-'}</div></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-warning" onclick="editProduct(${p.id})">
                            <i class="fas fa-edit"></i> Sửa
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id}, '${p.name}')">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </div>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    updateStats();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value;
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);
    const description = descInput.value.trim();

    if (!name || !category || isNaN(price) || isNaN(quantity)) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
        return;
    }

    if (price < 0) {
        alert("Giá sản phẩm không được là số âm!");
        priceInput.focus();
        return;
    }

    if (quantity < 0) {
        alert("Số lượng tồn kho không được là số âm!");
        quantityInput.focus();
        return;
    }

    const timestamp = new Date().toISOString();

    if (editingId) {
        const index = appData.products.findIndex(p => p.id === editingId);
        if (index !== -1) {
            appData.products[index] = {
                ...appData.products[index],
                name, category, price, quantity, description,
                updatedAt: timestamp
            };
        }
    } else {
        const newProduct = {
            id: appData.idCounter++,
            name, category, price, quantity, description,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        appData.products.push(newProduct);
    }

    saveToLocalStorage();
    renderTable();
    resetFormState();
});

window.editProduct = (id) => {
    const product = appData.products.find(p => p.id === id);
    if (!product) return;

    editingId = id;
    
    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    quantityInput.value = product.quantity;
    descInput.value = product.description || '';

    formTitle.textContent = "Chỉnh Sửa Sản Phẩm (ID: #" + id + ")";
    btnSubmit.innerHTML = `<i class="fas fa-save"></i> <span>Cập Nhật</span>`;
    btnSubmit.classList.replace('btn-primary', 'btn-warning');
    btnCancel.classList.remove('hidden');

    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
};

btnCancel.addEventListener('click', resetFormState);

window.deleteProduct = (id, name) => {
    if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${name}" không?\nHành động này không thể hoàn tác.`)) {
        appData.products = appData.products.filter(p => p.id !== id);
        
        if (editingId === id) resetFormState();

        saveToLocalStorage();
        renderTable();
    }
};

btnDeleteAll.addEventListener('click', () => {
    if (appData.products.length === 0) return;
    
    if (confirm("CẢNH BÁO NGUY HIỂM!\nBạn có chắc chắn muốn xóa TẤT CẢ sản phẩm?\nHành động này sẽ làm sạch hoàn toàn bộ nhớ và không thể khôi phục!")) {
        appData = { products: [], idCounter: 1 };
        resetFormState();
        saveToLocalStorage();
        renderTable();
        
        searchInput.value = '';
        filterCategory.value = 'all';
    }
});

searchInput.addEventListener('input', renderTable);
filterCategory.addEventListener('change', renderTable);

const initApp = () => {
    loadFromLocalStorage();
    renderTable();
};

initApp();