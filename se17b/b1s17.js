const todos = [
            { id: 1, task: "Mua bánh chưng", done: false },
            { id: 2, task: "Dọn nhà đón Tết", done: false },
            { id: 3, task: "Gói bánh chưng", done: false },
            { id: 4, task: "Trang trí nhà cửa", done: false }
        ];

        const todoListElement = document.getElementById("todo-list");

        let currentTodos = todos;

        const checkStorage = localStorage.getItem("myTodos");

        if (!checkStorage) {
            localStorage.setItem("myTodos", JSON.stringify(todos));
        } else {
            currentTodos = JSON.parse(checkStorage);
        }

        for (let i = 0; i < currentTodos.length; i++) {
            const li = document.createElement("li");
            li.className = "todo-item";
            
            const statusText = currentTodos[i].done ? "Đã làm" : "Chưa làm";

            li.innerHTML = `
                <span class="task-name">🌸 ${currentTodos[i].task}</span>
                <span class="task-status">${statusText}</span>
            `;
            
            todoListElement.appendChild(li);
        }