const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false }
];

let todos = [];
const storedData = localStorage.getItem("myTodos");

if (storedData) {
    todos = JSON.parse(storedData);
} else {
    todos = initialTodos;
    localStorage.setItem("myTodos", JSON.stringify(todos));
}

const listContainer = document.getElementById("todo-list");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

function renderTodos() {
    listContainer.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const divElement = document.createElement("div");
        
        if (item.done) {
            divElement.className = "todo-item completed";
        } else {
            divElement.className = "todo-item pending";
        }

        const icon = item.done ? "✓" : "○";

        divElement.innerHTML = `
            <div class="task-content">
                <span class="icon">${icon}</span>
                <span class="task-text">${item.task}</span>
            </div>
            <div class="actions">
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        divElement.querySelector(".task-content").onclick = function(event) {
            if (event.target.tagName.toLowerCase() === "input") {
                return;
            }
            todos[i].done = !todos[i].done;
            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        };

        const textSpan = divElement.querySelector(".task-text");
        const editBtn = divElement.querySelector(".edit-btn");

        editBtn.onclick = function(event) {
            event.stopPropagation();

            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.className = "edit-input";
            inputElement.value = item.task;

            textSpan.replaceWith(inputElement);
            inputElement.focus();
            inputElement.select();

            inputElement.onkeydown = function(e) {
                if (e.key === "Enter") {
                    const newValue = inputElement.value.trim();
                    if (newValue !== "") {
                        todos[i].task = newValue;
                        localStorage.setItem("myTodos", JSON.stringify(todos));
                    } else {
                        alert("Tên công việc không được để trống!");
                    }
                    renderTodos();
                } else if (e.key === "Escape") {
                    renderTodos();
                }
            };
        };

        divElement.querySelector(".delete-btn").onclick = function(event) {
            event.stopPropagation();
            const isConfirm = confirm(`Bạn có chắc chắn muốn xóa công việc "${item.task}" ?`);
            
            if (isConfirm) {
                todos.splice(i, 1);
                localStorage.setItem("myTodos", JSON.stringify(todos));
                renderTodos();
            }
        };

        listContainer.appendChild(divElement);
    }
}

function addNewTask() {
    const taskName = taskInput.value.trim();
    
    if (taskName === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    let newId = 1;
    if (todos.length > 0) {
        newId = todos[todos.length - 1].id + 1;
    }

    const newTask = {
        id: newId,
        task: taskName,
        done: false
    };

    todos.push(newTask);
    localStorage.setItem("myTodos", JSON.stringify(todos));
    
    taskInput.value = "";
    renderTodos();
}

addBtn.onclick = function() {
    addNewTask();
};

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});

renderTodos();