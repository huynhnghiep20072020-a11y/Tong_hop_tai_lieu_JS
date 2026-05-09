let contacts = [
  { name: 'Nguyễn Văn An', phone: '0901234567', email: 'nguyenvanan@email.com' },
  { name: 'Trần Thị Bình', phone: '0912345678', email: 'tranthibinh@email.com' },
  { name: 'Lê Văn Cường', phone: '0923456789', email: 'levancuong@email.com' },
  { name: 'Phạm Thị Dung', phone: '0934567890', email: 'phamthidung@email.com' },
  { name: 'Hoàng Văn Em', phone: '0945678901', email: 'hoangvanem@email.com' }
];

let editingIndex = null;

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const phoneInput = document.getElementById('contact-phone');
const emailInput = document.getElementById('contact-email');
const tbody = document.getElementById('contact-tbody');
const submitBtn = document.querySelector('.btn-add');

function renderTable() {
  tbody.innerHTML = '';
  
  contacts.forEach((contact, index) => {
    const tr = document.createElement('tr');
    
    const sttCell = document.createElement('td');
    sttCell.textContent = index + 1;
    tr.appendChild(sttCell);
    
    const nameCell = document.createElement('td');
    nameCell.textContent = contact.name;
    tr.appendChild(nameCell);
    
    const phoneCell = document.createElement('td');
    phoneCell.textContent = contact.phone;
    tr.appendChild(phoneCell);
    
    const emailCell = document.createElement('td');
    emailCell.textContent = contact.email;
    tr.appendChild(emailCell);
    
    const actionCell = document.createElement('td');
    const actionDiv = document.createElement('div');
    actionDiv.className = 'action-buttons';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.textContent = 'Sửa';
    editBtn.onclick = () => editContact(index);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Xóa';
    deleteBtn.onclick = () => deleteContact(index);
    
    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(deleteBtn);
    actionCell.appendChild(actionDiv);
    tr.appendChild(actionCell);
    
    tbody.appendChild(tr);
  });
}

function validateContact(name, phone, email, isAdding) {
  if (!name || name === '') {
    alert('Họ tên không được để trống!');
    return false;
  }
  
  if (name.length < 2) {
    alert('Họ tên phải có ít nhất 2 ký tự!');
    return false;
  }
  
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!nameRegex.test(name)) {
    alert('Họ tên không được chứa số hoặc ký tự đặc biệt!');
    return false;
  }
  
  if (!phone || phone === '') {
    alert('Số điện thoại không được để trống!');
    return false;
  }
  
  const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)');
    return false;
  }
  
  if (!email || email === '') {
    alert('Email không được để trống!');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Email không hợp lệ!');
    return false;
  }
  
  if (isAdding) {
    const isDuplicate = contacts.some(c => c.email.toLowerCase() === email.toLowerCase());
    if (isDuplicate) {
      alert('Email đã tồn tại trong danh bạ!');
      return false;
    }
  }
  
  return true;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  
  const isAdding = editingIndex === null;
  
  if (!validateContact(name, phone, email, isAdding)) {
    return;
  }
  
  if (isAdding) {
    contacts.push({ name, phone, email });
    alert('Thêm liên hệ thành công!');
  } else {
    contacts[editingIndex] = { name, phone, email };
    alert('Cập nhật liên hệ thành công!');
    
    editingIndex = null;
    submitBtn.textContent = 'Thêm';
  }
  
  renderTable();
  form.reset();
});

function editContact(index) {
  editingIndex = index;
  const contact = contacts[index];
  
  nameInput.value = contact.name;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
  
  submitBtn.textContent = 'Cập nhật';
}

function deleteContact(index) {
  if (confirm('Bạn có chắc chắn muốn xóa liên hệ này?')) {
    contacts.splice(index, 1);
    renderTable();
    alert('Xóa liên hệ thành công!');
    
    if (editingIndex === index) {
      form.reset();
      editingIndex = null;
      submitBtn.textContent = 'Thêm';
    }
  }
}

renderTable();