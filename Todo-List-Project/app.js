
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("clear-todos");


eventListeners();

function eventListeners() { 
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI); // Sayfa yenillendiğinde eklenen ve yapılan değişiklikler silinmez
    secondCardBody.addEventListener("click", deleteTodo); 
}
/////////////////////////////
function deleteTodo(e) {
    if (e.target.className === "fa fa-remove"){ //"fa fa-remove" sınıfın olan "X" simgesine tıklandığında silme işlemi olsun
        e.target.parentElement.parentElement.remove(); // "fa fa-remove" parent ==> <a href = "#" class ="delete-item"> parent ==> <li class="list-group-item d-flex justify-content-between"> ==> Todo'yu sil.
        showAlert("success", "Todo başariyla silindi");
    }
}
////////////////////////////
 function loadAllTodosToUI() { // Todos'ları arayüze'de görüntüle
     let todos = getTodosFromStorage();

     todos.forEach(function(todo){
         addTodoUI(todo);

     })
 }
//////////////////////////

function addTodo(e) {
    const newTodo = todoInput.value.trim(); // trim metodu Inputtaki girilen string'in gereksiz boşluklarını kaldırır

    if(newTodo === "") {
    //     <div class="alert alert-danger" role="alert">
    //     This is a danger alert—check it out!
    //   </div>
        showAlert("danger", "Lütfen bir todo girin...");  // (type = "danger", message = "Lütfen bir todo girin")
    }
    else {
        addTodoUI(newTodo); // Arayüze todo ekle
        addTodoStorage(newTodo); // Depolamak
        showAlert("success", "Todo başarıyla eklendi..."); // Uyarı
    }

    
    

    e.preventDefault();
}

// Storage'den Todoları alma fonksiyonu

function getTodosFromStorage(){ 
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

// Girilen todo'ları Depolama fonksiyonu

function addTodoStorage(newTodo) {
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

}
/////////////////////////////

function addTodoStorage(newTodo) {
    let todos = getTodosFromStorage(); // storage'dan aldıktan sonra...

    todos.push(newTodo); // Application kısmına ekleme işlemi...

    localStorage.setItem("todos",JSON.stringify(todos)); // Application kısmına ekleme işlemi...
}


/////////////////////////////
function showAlert(type, message) { // if koşulunda Boş bir todo gönderildiğinde Uyarı göster fonksiyonu
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

   // console.log(alert); // <div class = `alert alert-danger`>Lütfen bir todo girin...</div>

   firstCardBody.appendChild(alert);
 
   // setTimeout 

   setTimeout(function(){

    alert.remove(); // Uyarıyı bir saniye sonra sil
   },1000); // 1000 ==> 1 saniyedir


}


function addTodoUI(newTodo) { // Inputtaki girilen string değerinin list item(Todo-list-item) olarak ekelnecek yeni todo
//      <li class="list-group-item d-flex justify-content-between">
//     Todo 1
//     <a href = "#" class ="delete-item">
//         <i class = "fa fa-remove"></i>
//     </a>

// </li> 
    // List Item Oluştuma
    const listItem = document.createElement("li");
    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Todo list'e List Item'ı ekleme

    todoList.appendChild(listItem);
    todoInput.value = ""; // Bir Input göderildikten sonra Input alanını boşaltır

    // Not : Üstteki kodları yazarak sayfayı yenillediğimizde yaptığımız değişiklikler silinir. Çünkü local Storage'a yüklemedik

}
