// Khởi tạo danh sách sinh viên ban đầu (Mảng quản lý tổng)
let students = [
    { id: 1, name: "Nguyen Van A", age: 20, gpa: 7.5, status: "active" },
    { id: 2, name: "Tran Thi B", age: 19, gpa: 8.5, status: "active" },
    { id: 3, name: "Le Van C", age: 17, gpa: 6.0, status: "inactive" }
];

let isRunning = true;

while (isRunning) {
    let menu = `
    --- ỨNG DỤNG QUẢN LÝ SINH VIÊN ---
    1. Create: Thêm sinh viên mới
    2. Read: Xem danh sách sinh viên
    3. Filter: Lọc sinh viên giỏi (GPA > 8.0)
    4. Update: Cập nhật thông tin (Tên, GPA)
    5. Delete: Xóa sinh viên
    6. Compliance: Kiểm tra điều kiện (Tuổi < 18, Trạng thái Active)
    7. Statistics: Tính điểm trung bình (GPA) toàn trường
    8. Normalization: Chuẩn hóa tên (In hoa)
    0. Thoát
    ----------------------------------
    Nhập lựa chọn của bạn (0-8):`;

    let choice = Number(prompt(menu));

    switch (choice) {
        case 1: // Create Student
            let id = Number(prompt("Nhập ID:"));
            let name = prompt("Nhập tên:");
            let age = Number(prompt("Nhập tuổi:"));
            let gpa = Number(prompt("Nhập GPA:"));
            let status = prompt("Nhập trạng thái (active/inactive):");

            // Đóng gói đối tượng
            let newStudent = {
                id: id,
                name: name,
                age: age,
                gpa: gpa,
                status: status
            };
            
            // Đẩy vào mảng tổng
            students.push(newStudent);
            alert("Thêm sinh viên thành công!");
            break;

        case 2: // Read All Students
            let listString = "--- DANH SÁCH SINH VIÊN ---\n";
            if (students.length === 0) {
                listString += "Danh sách trống.";
            } else {
                students.forEach(st => {
                    listString += `ID: ${st.id} | Tên: ${st.name} | Tuổi: ${st.age} | GPA: ${st.gpa} | Status: ${st.status}\n`;
                });
            }
            console.log(students); // Log ra console để xem dạng bảng nếu cần
            alert(listString);
            break;

        case 3: // Filter Scholarship Candidates (GPA > 8.0)
            let scholarshipList = students.filter(st => st.gpa > 8.0);
            
            let filterResult = "--- SINH VIÊN ĐẠT HỌC BỔNG (GPA > 8.0) ---\n";
            scholarshipList.forEach(st => {
                filterResult += `${st.name} - GPA: ${st.gpa}\n`;
            });
            alert(filterResult);
            break;

        case 4: // Update Student Profile
            let updateId = Number(prompt("Nhập ID sinh viên cần sửa:"));
            let studentToUpdate = students.find(st => st.id === updateId);

            if (studentToUpdate) {
                let newName = prompt("Nhập tên mới:", studentToUpdate.name);
                let newGpa = Number(prompt("Nhập GPA mới:", studentToUpdate.gpa));
                
                // Ghi đè thông tin
                studentToUpdate.name = newName;
                studentToUpdate.gpa = newGpa;
                alert("Cập nhật thành công!");
            } else {
                alert("Không tìm thấy sinh viên có ID này.");
            }
            break;

        case 5: // Delete Record
            let deleteId = Number(prompt("Nhập ID sinh viên cần xóa:"));
            let initialLength = students.length;
            
            // Lọc ra danh sách mới không chứa ID cần xóa (cách an toàn để xóa)
            students = students.filter(st => st.id !== deleteId);

            if (students.length < initialLength) {
                alert("Đã xóa sinh viên thành công.");
            } else {
                alert("Không tìm thấy ID để xóa.");
            }
            break;

        case 6: // Compliance Verification
            // Kiểm tra có ai dưới 18 không (some)
            let hasUnderage = students.some(st => st.age < 18);
            
            // Kiểm tra tất cả có phải active không (every)
            let isAllActive = students.every(st => st.status === "active");

            let complianceMsg = "--- KIỂM TRA ĐIỀU KIỆN ---\n";
            complianceMsg += `Có sinh viên dưới 18 tuổi (age < 18): ${hasUnderage}\n`;
            complianceMsg += `Tất cả sinh viên đều 'active': ${isAllActive}`;
            
            alert(complianceMsg);
            break;

        case 7: // Academic Statistics (Average GPA)
            if (students.length === 0) {
                alert("Danh sách trống, không thể tính trung bình.");
            } else {
                // Sử dụng reduce để tích lũy tổng điểm
                let totalGpa = students.reduce((sum, st) => sum + st.gpa, 0);
                let avgGpa = totalGpa / students.length;
                alert(`Điểm trung bình (GPA) toàn danh sách: ${avgGpa.toFixed(2)}`);
            }
            break;

        case 8: // Data Normalization (Uppercase Name)
            // Map để tạo ra mảng mới với tên viết hoa
            let normalizedList = students.map(st => {
                // Copy đối tượng cũ để không ảnh hưởng mảng gốc (Shallow copy)
                return { 
                    ...st, 
                    name: st.name.toUpperCase() 
                };
            });

            let normString = "--- DANH SÁCH CHUẨN HÓA (PREVIEW) ---\n";
            normalizedList.forEach(st => {
                normString += `[${st.id}] ${st.name}\n`;
            });
            alert(normString);
            break;

        case 0:
            isRunning = false;
            alert("Đã thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
}