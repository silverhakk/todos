// --------------------------------------------------------------
// 1. ASYNC FUNCTION to fetch data from JSONPlaceholder
// -----------------------------------------------------------
async function geTodos() {
  const statusEl =document.getElementById(('status'))
  const listellement=document.getElementById('todoList') 
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
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
