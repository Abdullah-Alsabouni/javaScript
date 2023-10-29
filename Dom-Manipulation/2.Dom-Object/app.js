// Element Id

let element;

element = document.getElementById("todo-form"); // "todo form" adlı bi id'yi görüntüle // Bulunamayan bir Id'se null görüntüle
element = document.getElementById("tasks-title");

// Element class

element = document.getElementsByClassName("list-groupe-item")[0]; // class'larda arrray elemalnarı olarak kullanılır
element  =document.getElementsByClassName("card-header");

// Element tag

element = document.getElementsByTagName("div"); // dic etiketlerini görüntüle

// Query Selector - Css Selector - A single Element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li"); // html sayfasında bulduğu ilk li etiketini görüntüler

// Query Selector - Select all elements
element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el); // Seçilen tüm ".list-group-item" elemanlarını görüntüleyen bir fonksiyon
});

//console.log(element);
