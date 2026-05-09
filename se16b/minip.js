let employees = [];
let nextId = 1;
let editingId = null;

const formTitle = document.getElementById("form-title");
const employeeForm = document.getElementById("employee-form");
const nameInput = document.getElementById("emp-name");
const emailInput = document.getElementById("emp-email");
const dobInput = document.getElementById("emp-dob");
const addressInput = document.getElementById("emp-address");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const employeeList = document.getElementById("employee-list");
const employeeCount = document.getElementById("employee-count");
const errorMessage = document.getElementById("error-message");

function formatDate(dateString) {
    if (!dateString) return "";
    let parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function renderTable() {
    employeeList.innerHTML = "";
    
    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${employees[i].id}</td>
            <td>${employees[i].name}</td>
            <td>${formatDate(employees[i].dob)}</td>
            <td>${employees[i].email}</td>
            <td>${employees[i].address}</td>
            <td class="action-btns">
                <button class="edit-btn" data-id="${employees[i].id}">✏️ Sửa</button>
                <button class="delete-btn" data-id="${employees[i].id}">🗑️ Xóa</button>
            </td>
        `;
        employeeList.appendChild(tr);
    }
    
    employeeCount.innerText = employees.length;
}

function resetForm() {
    employeeForm.reset();
    editingId = null;
    formTitle.innerText = "Thêm Nhân Viên Mới";
    submitBtn.innerHTML = "➕ Thêm Nhân Viên";
    cancelBtn.style.display = "none";
    errorMessage.style.display = "none";
}

employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    errorMessage.style.display = "none";

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let dob = dobInput.value;
    let address = addressInput.value.trim();

    if (name === "" || email === "" || dob === "" || address === "") {
        errorMessage.innerText = "Vui lòng nhập đầy đủ thông tin vào các trường có dấu * !";
        errorMessage.style.display = "block";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.innerText = "Email không đúng định dạng!";
        errorMessage.style.display = "block";
        return;
    }

    if (editingId !== null) {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === editingId) {
                employees[i].name = name;
                employees[i].email = email;
                employees[i].dob = dob;
                employees[i].address = address;
                break;
            }
        }
    } else {
        let newEmployee = {
            id: nextId,
            name: name,
            email: email,
            dob: dob,
            address: address
        };
        employees.push(newEmployee);
        nextId++;
    }

    renderTable();
    resetForm();
});

cancelBtn.addEventListener("click", function() {
    resetForm();
});

employeeList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        let id = Number(event.target.getAttribute("data-id"));
        let empName = "";
        
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                empName = employees[i].name;
                break;
            }
        }

        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${empName}?`);
        
        if (confirmDelete) {
            let newArray = [];
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id !== id) {
                    newArray.push(employees[i]);
                }
            }
            employees = newArray;

            if (editingId === id) {
                resetForm();
            }
            renderTable();
        }
    }

    if (event.target.classList.contains("edit-btn")) {
        let id = Number(event.target.getAttribute("data-id"));
        
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                editingId = id;
                nameInput.value = employees[i].name;
                emailInput.value = employees[i].email;
                dobInput.value = employees[i].dob;
                addressInput.value = employees[i].address;

                formTitle.innerText = "Chỉnh Sửa Nhân Viên";
                submitBtn.innerHTML = "✏️ Cập Nhật";
                cancelBtn.style.display = "block";
                errorMessage.style.display = "none";
                
                window.scrollTo({ top: 0, behavior: "smooth" });
                break;
            }
        }
    }
});