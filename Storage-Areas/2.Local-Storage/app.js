
// localStorage.setItem("hareket", "burpee"); // Ekleme işlemi
//localStorage.setItem("tekrar", 50); // 50'yi string'e çevirir

// const value = localStorage.getItem("tekrar");
// console.log(value); // ==> 50
// console.log(typeof value); // ==> string


// localStorage.clear(); // tüm eklenenleri temizleme

// localStorage.setItem("hareket", "burpee"); 
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport")); // ==> null (olmayan bir anahtar)

// if(localStorage.getItem("sport") === null) {
//     console.log("sorguladığınız veri bulunmuyor");
// }


// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos", todos); // todos = Key, Value = Todo 1,Todo 2,Todo 3

// console.log(typeof localStorage.getItem("todos")); // string

// localStorage.setItem("todos", JSON.stringify(todos)); // todos'u array olarak ekliyor

// const value = JSON.parse(localStorage.getItem("todos")); // todos'un anahtarını tanımlandığı gibi array olarak görüntüleyecek
// console.log(value); // ["Todo 1", "Todo 2", "Todo 3"]

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit", addTodo);

function addTodo(e) {
const value = todoInput.value;

let todos;s

if (localStorage.getItem("todos") === null) {
    todos = [];
}
else {
    todos = JSON.parse(localStorage.getItem("todos"));
}

todos.push(value);


localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}
