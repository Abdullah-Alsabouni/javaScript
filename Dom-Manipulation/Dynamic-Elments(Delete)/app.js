// Dinamik element silme

const todoList = document.querySelector("ul.first-group");
const todos = document.querySelectorAll("li.list.group-item");

// Remove

//todos[0].remove(); // li.list.group-item ilk elemanı Todo1 silindi

// Remove Child

todoList.removeChild(todoList.lastElementChild);

todoList.removeChild(todoList[3]);



console.log(todos);
console.log(todoList);
