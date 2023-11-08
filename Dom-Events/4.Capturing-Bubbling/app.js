// Bubbilnig (köpürme işlemi parent sınıflara adım adım ilerler)


// document.querySelector(".container").addEventListener("click", function(){
//     console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click", function(){
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
//     console.log("Card Body"); // click eventi cardbody sonra üst sınıfa olan Card row'a gider ve en kapsayan parent'a kadar köpürme işlemini yapar
// });

// // Carbody \n Card Row \n Div container 


// Capturing(Delegation) 

// Bu özellik sayesinde elementler arasında event yakalma işlemini yapabiliriz. Ve eğer yeni elementleri Event'lerini yakalar

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run); 

function run(e) {
    if (e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreme İşlemi");
    }
    if(e.target.id ==="clear-todos") {
        console.log("Tüm taskları silme işlemi");
    }
}

// function run(e) {
//     console.log("Hello");// ==> carbody'nin her elemanına tıklandığında "hello" sayacı artacak
// }
