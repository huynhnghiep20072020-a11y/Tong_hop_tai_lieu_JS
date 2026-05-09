const form = document.querySelector("form");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const courseSelect = document.getElementById("course");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const student = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    course: courseSelect.value
  };

  console.log(student);

  const courseName = courseSelect.options[courseSelect.selectedIndex].text;
  alert("Đăng ký thành công cho khóa học: " + courseName);
});