// Session storage - Key and value

//console.log(window); // session storage window objesinde bir obje

//  Butonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addkey = document.querySelector("#addkey"); // Anahtar ve değer : Anahtar kısmı ==> Anahtar kısmı için girdi = "I am" 
const addvalue = document.querySelector("#addvalue"); // Anahtar ve değer : Değer kısmı ==> Değer kısmı için girdi = "the best ever"
const deletekey = document.querySelector("#deletekey"); // Anahtar : Delete kısmı

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);
// session storage online oturum açık olduğu sürece girdilri depolar
function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value); // setItem(key, value)(Eleman ekle) ==>  Key : I am , Value : The best ever 
   // Depolanmış bir key'inin aynısı eklersek sadece yeni gelen value güncellenir
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value); // silme işlemi sadece Key ister
}

function clearItem(e) {
    sessionStorage.clear();
}

