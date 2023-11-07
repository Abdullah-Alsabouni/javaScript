const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load); // Sayfa yenillendiğinde load fonksiyonunu çalıştırır

// function load(e) {
//     console.log("Sayfa yüklendi");
// }



// filter.addEventListener("focus", run); // Input'a girdiğinde ==> focus 
// filter.addEventListener("blur", run); // Input'tan çıkıldığında ==> blur 

// filter.addEventListener("paste", run); 
// filter.addEventListener("copy", run);
// filter.addEventListener("cut", run);

filter.addEventListener("select", run); // Input'un içindeki yazıda her hangi seçme işlemi için sayaç artar


function run(e) {
    console.log(e.type); // Input'a girdiğinde ==> focus sayacı artar
}

