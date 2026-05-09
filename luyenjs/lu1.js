let employee=[
    {id:1,fullName: "Nguyen Van A",baseSalary:1000000, workDays:26, department:"IT"},
    {id:2,fullName: "Tran Thi B",baseSalary:1200000, workDays:24, department:"HR"},
    {id:3,fullName: "Le Van C",baseSalary:1500000, workDays:28, department:"Sales"},
    {id:4,fullName: "Pham Thi D",baseSalary:900000, workDays:22, department:"Marketing"}
];
function hhhh(){
    let id=Number(prompt("Nhap ID nhan vien moi:"));
    let name=prompt("Nhap ho va ten nhan vien moi:");
    let salary=Number(prompt("Nhap luong co ban nhan vien moi:"));
    let days=Number(prompt("Nhap so ngay cong nhan vien moi:"));
    let dept=prompt("Nhap phong ban nhan vien moi:");

    if(salary<0){
        alert("Loi: Luong khong duoc am!");
        return;
    }

    let newEmployee={
        id:id,
        fullName:name,
        baseSalary:salary,
        workDays:days,
        department:dept
    };
    employee.push(newEmployee);
}
function xemDanhSach(){
    let viewList=employee.map(item=>{
        return{
            id:item.id,         
            fullName:item.fullName,
            baseSalary:item.baseSalary,
            workDays:item.workDays,
            department:item.department
        };
    });
    console.log(viewList);
}

function locNhanVienXuatSac(){
    let highPerformers=employee.filter(item=>item.workDays>=26);
    console.log(highPerformers);
}
function capNhatLuong(){
    let id=Number(prompt("Nhap ID nhan vien can cap nhat:"));
    let emp=employee.find(item=>item.id===id);  
    if(emp){
        let newSalary=Number(prompt("Nhap luong moi:"));
        let newDept=prompt("Nhap phong ban moi:");  
        emp.baseSalary=newSalary;
        emp.department=newDept;
        alert("Da cap nhat thong tin nhan vien.");
    }else{
        alert("Khong tim thay ID nhan vien.");
    }
}

function chạychuongtrinh(){
    let isRunning =true;
    while(isRunning){
        let menu =`
        ----quan li nhan su ----
        1. Them nhan vien
        2. Xem danh sach nhan vien
        3. Loc nhan vien xuat sac
        4. Cap nhat luong nhan vien
        5. Thoat
        -----------------------
        Nhap lua chon cua ban (1-5):`;
        let choice =Number(prompt (menu));
        switch(choice){
            case 1:
                hhhh();
                break;
        }
    }
}
chaychuongtrinh();

