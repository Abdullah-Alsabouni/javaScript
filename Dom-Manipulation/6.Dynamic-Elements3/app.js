// Elementleri değiştirme

const cardbody = document.querySelectorAll(".card-body")[1]; // Ana sınıf seçme işlemi
// Yeni Element
const newElement = document.createElement("h3");
newElement.id = "taks-title";
newElement.textContent = "Yeni todolar";

// Eski Element

const oldElement = document.querySelector("#tasks-title"); //<h5 class="card-title" id = "tasks-title">Todolar</h5>
// Element değiştirme işlemi

cardbody.replaceChild(newElement, oldElement); // carbody'nin içinedeki <h5 class ="card-title"...... ===> <h3 id = "taks-title">Yeni Todolar</h3>

console.log(cardbody);


//////////////////////////////

const todoInput = document.getElementById("todo");
let elemen;

element = todoInput;
element = todoInput.classList;

element = todoInput;
element = todoInput.ariaPlaceholder;
element = todoInput.getAttribute("placeholder");//==> Bir Todo Girin // <input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">
todoInput.setAttribute("placeholder", "Hello"); //==> placeholder'u değiştir
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

element = todoInput;
//element = todoInput.hasAttribute("required"); // "required" diy eattribute varmı? Yok==> false


console.log(element);

