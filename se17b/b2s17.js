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

        function renderTodos() {
            listContainer.innerHTML = "";

            for (let i = 0; i < todos.length; i++) {
                const item = todos[i];
                const divElement = document.createElement("div");
                
                if (item.done) {
                    divElement.className = "todo-item completed";
                    divElement.innerHTML = `<span class="icon">✓</span> <span>${item.task}</span>`;
                } else {
                    divElement.className = "todo-item pending";
                    divElement.innerHTML = `<span class="icon">○</span> <span>${item.task}</span>`;
                }

                divElement.onclick = function() {
                    todos[i].done = !todos[i].done;
                    localStorage.setItem("myTodos", JSON.stringify(todos));
                    renderTodos();
                };

                listContainer.appendChild(divElement);
            }
        }

        renderTodos();