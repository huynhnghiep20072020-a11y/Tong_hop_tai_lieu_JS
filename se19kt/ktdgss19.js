let students = [{ id: "SV001", name: "Nguyễn Văn A", score: 8.5 }];
let currentPage = 1, limit = 5, isEditing = false, editId = "";

const studentIdInput = document.getElementById("studentId");
const studentNameInput = document.getElementById("studentName");
const studentScoreInput = document.getElementById("studentScore");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const studentList = document.getElementById("studentList");
const pagination = document.getElementById("pagination");

function validate(id, name, score) {
    if (!id) { alert("Mã sinh viên không được để trống!"); return false; }
    if ((!isEditing || id !== editId) && students.some(s => s.id === id)) { 
        alert("Mã sinh viên đã tồn tại!"); return false; 
    }
    if (!name) { alert("Tên sinh viên không được để trống!"); return false; }
    if (name.length < 5) { alert("Tên sinh viên phải có ít nhất 5 ký tự!"); return false; }
    if (!score) { alert("Điểm TB không được để trống!"); return false; }
    
    let num = Number(score);
    if (isNaN(num) || num < 0 || num > 10) { 
        alert("Điểm TB phải là số trong khoảng từ 0 đến 10!"); return false; 
    }
    return true;
}

function render() {
    let start = (currentPage - 1) * limit;
    let currentStudents = students.slice(start, start + limit);
    
    studentList.innerHTML = currentStudents.map((st, i) => `
        <tr>
            <td>${start + i + 1}</td>
            <td>${st.id}</td>
            <td>${st.name}</td>
            <td>${st.score}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editStudent('${st.id}')">Sửa</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent('${st.id}')">Xóa</button>
            </td>
        </tr>
    `).join("");
    
    renderPagination();
}

function renderPagination() {
    let totalPages = Math.ceil(students.length / limit) || 1;
    let html = `<button class="btn btn-sm" onclick="changePage(${currentPage - 1})">&laquo; Trước</button>`;
    
    for (let i = 1; i <= totalPages; i++) {
        let activeClass = i === currentPage ? "active" : "";
        html += `<button class="btn btn-sm ${activeClass}" onclick="changePage(${i})">${i}</button>`;
    }
    
    html += `<button class="btn btn-sm" onclick="changePage(${currentPage + 1})">Sau &raquo;</button>`;
    pagination.innerHTML = html;
}

function changePage(page) {
    let totalPages = Math.ceil(students.length / limit) || 1;
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        render();
    }
}

submitBtn.onclick = function() {
    let id = studentIdInput.value.trim();
    let name = studentNameInput.value.trim();
    let score = studentScoreInput.value.trim();

    if (validate(id, name, score)) {
        if (isEditing) {
            let index = students.findIndex(s => s.id === editId);
            students[index] = { id, name, score };
            alert("Cập nhật sinh viên thành công!");
        } else {
            students.push({ id, name, score });
            alert("Thêm sinh viên thành công!");
        }
        resetForm();
        render();
    }
};

function editStudent(id) {
    let st = students.find(s => s.id === id);
    if (st) {
        studentIdInput.value = st.id;
        studentNameInput.value = st.name;
        studentScoreInput.value = st.score;
        isEditing = true;
        editId = id;
        submitBtn.innerText = "Cập nhật";
    }
}

function deleteStudent(id) {
    let st = students.find(s => s.id === id);
    if (st && confirm(`Bạn có chắc chắn muốn xóa sinh viên ${st.name}?`)) {
        students = students.filter(s => s.id !== id);
        let totalPages = Math.ceil(students.length / limit) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        alert("Xóa sinh viên thành công!");
        render();
    }
}

function resetForm() {
    studentIdInput.value = "";
    studentNameInput.value = "";
    studentScoreInput.value = "";
    isEditing = false;
    editId = "";
    submitBtn.innerText = "Thêm sinh viên";
}

resetBtn.onclick = resetForm;
render();