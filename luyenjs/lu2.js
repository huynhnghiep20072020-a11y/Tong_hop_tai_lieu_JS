let employees = [
    { id: 1, fullName: "Nguyen Van A", baseSalary: 10000000, workDays: 26, department: "IT" },
    { id: 2, fullName: "Tran Thi B", baseSalary: 12000000, workDays: 24, department: "HR" },
    { id: 3, fullName: "Le Van C", baseSalary: 15000000, workDays: 28, department: "Sales" },
    { id: 4, fullName: "Pham Thi D", baseSalary: 9000000, workDays: 22, department: "Marketing" }
];

function themNhanVien() {
    let id = Number(prompt("Nhap ma nhan vien (ID):"));
    let name = prompt("Nhap ho va ten:");
    let salary = Number(prompt("Nhap luong co ban:"));

    if (salary < 0) {
        alert("Loi: Luong khong duoc nho hon 0!");
        return;
    }

    let days = Number(prompt("Nhap so ngay cong:"));
    let dept = prompt("Nhap phong ban:");

    let newEmployee = {
        id: id,
        fullName: name,
        baseSalary: salary,
        workDays: days,
        department: dept
    };

    employees.push(newEmployee);
    alert("Da them nhan vien thanh cong!");
}

function xemDanhSach() {
    let viewList = employees.map(item => {
        return {
            ...item,
            thucLinh: (item.baseSalary * item.workDays / 26).toFixed(0)
        };
    });
    console.table(viewList);
}

function locNhanVienXuatSac() {
    let highPerformers = employees.filter(item => item.workDays >= 26);
    console.table(highPerformers);
}

function capNhatLuong() {
    let id = Number(prompt("Nhap ID nhan vien can sua:"));
    let emp = employees.find(item => item.id === id);

    if (emp) {
        let newSalary = Number(prompt("Nhap luong moi:"));
        let newDept = prompt("Nhap phong ban moi:");
        
        emp.baseSalary = newSalary;
        emp.department = newDept;
        alert("Da cap nhat thong tin.");
    } else {
        alert("Khong tim thay ID.");
    }
}

function xoaNhanVien() {
    let id = Number(prompt("Nhap ID can xoa:"));
    let initialLength = employees.length;
    employees = employees.filter(item => item.id !== id);

    if (employees.length < initialLength) {
        alert("Da xoa nhan vien.");
    } else {
        alert("Khong tim thay ID.");
    }
}

function kiemTraDuLieu() {
    let checkDays = employees.some(item => item.workDays < 0 || item.workDays > 31);
    let checkDept = employees.every(item => item.department === "IT");
    
    console.log("Co nhan vien sai ngay cong: " + checkDays);
    console.log("Tat ca la nhan vien IT: " + checkDept);
}

function tinhTongQuyLuong() {
    let total = employees.reduce((sum, item) => {
        return sum + (item.baseSalary * item.workDays / 26);
    }, 0);
    alert("Tong quy luong: " + total.toFixed(0));
}

function chuanHoaDuLieu() {
    let newList = employees.map(item => {
        return {
            name: item.fullName,
            dept: item.department.toUpperCase() + "-DEPT"
        };
    });
    console.table(newList);
}

function chayChuongTrinh() {
    let isRunning = true;
    while (isRunning) {
        let menu = `
        --- QUAN LY NHAN SU ---
        1. Them nhan vien moi
        2. Xem danh sach nhan vien
        3. Loc nhan vien xuat sac
        4. Cap nhat luong
        5. Xoa nhan vien
        6. Kiem tra du lieu
        7. Tinh tong quy luong
        8. Chuan hoa du lieu
        0. Thoat
        Nhap lua chon (0-8):`;

        let choice = Number(prompt(menu));

        switch (choice) {
            case 1:
                themNhanVien();
                break;
            case 2:
                xemDanhSach();
                break;
            case 3:
                locNhanVienXuatSac();
                break;
            case 4:
                capNhatLuong();
                break;
            case 5:
                xoaNhanVien();
                break;
            case 6:
                kiemTraDuLieu();
                break;
            case 7:
                tinhTongQuyLuong();
                break;
            case 8:
                chuanHoaDuLieu();
                break;
            case 0:
                isRunning = false;
                alert("Da thoat chuong trinh.");
                break;
            default:
                alert("Lua chon khong hop le.");
        }
    }
}

chayChuongTrinh();