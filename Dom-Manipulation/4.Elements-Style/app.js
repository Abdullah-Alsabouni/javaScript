// const element = document.querySelector("#clear-todos");

// Element özellikleri

// console.log(element.id); // clear-todos
// console.log(element.classList[1]); // btn-dark
// console.log(element.textContent); 
// console.log(element.innerHTML);
// console.log(element.href);
//console.log(element.style);

// Style ve element özelliklerini değiştirme

// element.className = "btn btn-primary"; // "a" etiketinin özelliklerini değiştirilir. 
// element.style.color = "#000"; // "a" etiketinin rengini siyah yap
// element.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

// console.log(element.textContent);

// element.textContent = "silin"; // text'in içeriğini "silin" yap
// // element.textContent = "<span>Silin<span>"; // "<span>Silin<span>"  html kodu olarak çalışmaz. innerHTML anahtarıyla çalışır
// element.innerHTML = "<span style = 'color:green'>Silin<span>"

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el) {
//     el.style.color = "red";
//     el.style.background = "black";
// });

let element2 = document.querySelector("li:first-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");

element2.forEach(function(el){
    el.style.background = "black";
    el.style.color = "red";
});

console.log(element2);


