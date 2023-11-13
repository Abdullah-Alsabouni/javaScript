
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("clear-todos");


eventListener();

function eventListener() { 
    form.addEventListener("submit", addTodo);
}


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
        showAlert("success", "Todo başarıyla eklendi...");
    }
    
    

    e.preventDefault();
}

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
