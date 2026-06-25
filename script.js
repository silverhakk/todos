// --------------------------------------------------------------
// 1. ASYNC FUNCTION to fetch data from JSONPlaceholder
// -----------------------------------------------------------
async function geTodos() {
  const statusEl = document.getElementById("status");
  const listellement = document.getElementById("todoList");
  statusEl.textContent = "fetching todos ... ";
  listellement.innerHTML.trimRight = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("unable to fetch data");
    const data = await res.json();
    const todos = data.slice(0, 10);
    if (todos.length === 0) {
      listellement.innerHTML = `
  <li>no todos at the moment</li>
  `;
    }

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      li.className = "todo-item";
      if (todo.completed) {
        li.style.textDecoration = "line-through";
      }

      listellement.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

geTodos();
// --------------------------------------------------------------
// 6. DISPLAY FUNCTION - renders todos in the list
// --------------------------------------------------------------

// --------------------------------------------------------------
// 7. HELPER: prevent XSS (just good practice)
// --------------------------------------------------------------

// --------------------------------------------------------------
// 8. CALL THE FUNCTION
// --------------------------------------------------------------
