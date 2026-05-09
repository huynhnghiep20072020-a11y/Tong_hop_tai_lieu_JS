let students = [
    { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
    { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
    { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
    { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
    { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

let excellentStudents = students.filter(student => student.score >= 8.0);
console.log(excellentStudents);

let hasWeakStudent = students.some(student => student.score < 4.0);
if (hasWeakStudent) {
    console.log("Có sinh viên yếu");
} else {
    console.log("Không có sinh viên yếu");
}

let studentLabels = students.map(student => "Tên: " + student.name + " - Điểm: " + student.score);
console.log(studentLabels);