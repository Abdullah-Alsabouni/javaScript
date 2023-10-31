let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// Child Nodes - text dahil (satır atlamalarıları)

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Sadece element

value = todoList.children; // HTMLCollection(4)
value = todoList.children[0]; // li elemnetlerin ilk çocuğu
value = todoList.children[todoList.children.length - 1]; // Son çocuğu
value = todoList.children[2].textContent = "Değişti";



value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti";


value = todoList;
value = todoList.children[0]; // Bunun yerine bu da kullanılır ==> value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount; // length gibi işlem yapar


value = cardrow;
value = cardrow.parentElement; // Üst sınıfa ulaşır ==> div.container
value = cardrow.parentElement.parentElement; // <body>...</body>


// Element kardeşleri

value = todo;
value = todo.previousElementSibling;// Önceki kardeş geç // todo ==> list-group-item:nth-child(2) bu anahtardan sonraki hali ====> list-group-item:nth-child(1)
value = todo.nextElementSibling; // Sonraki kardeşe geç
value = todo.previousElementSibling.previousElementSibling; // null ==> bulunamayan kardeş



console.log(value);
