// Evet : Buton basma tıklama Input'a odaklanma gibi olaylar

const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", sumbitForm);

function sumbitForm(e) {
    console.log("Sumbit event");

    e.preventDefault(); // Sayfanın yenillenmesini önler
}

    /* 1.Yöntem */ 
// filterInput.onfocus = function() { // filter Id'li bir inputa odaklandığında "Naber" yazısını görüntüle
//     console.log("Naber");
// }
    /* 2.Yöntem */ 

//  filterInput.addEventListener("focus",function(){
//      console.log("Naber");
// });

// filterInput.addEventListener("focus",function(e){
//     console.log(e); // e => Bir FocusEvent objesi
//     console.log(e.type); //  e objesinin tipi  ==> focus
//     console.log(e.target); // e objesinin olduğu <input> etiketini görüntüler
//     console.log(e.target.placeholder); // Bir Todo Arayın
//     console.log(e.target.className); // form-control
// });





// console.log(filterInput);
