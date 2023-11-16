// const hello = function() {
//     console.log("Hello");
// }

// hello();

// Arrow function

// Alttaki fonksiyon kullanımı üstteki fonksiyon ile aynı
// const hello = () => {
//     console.log("Hello");

// }
// hello();


// const hello = (firstName) => { // Fonksiyon tek parametre alırsa "firstName"i () parantezleri arasında yazmaya gerek yok ==> const hello = firstName => {.... // Hiç parametresi yoksa ==> const hello = () => {.....
//     console.log("Hello", firstName);
// }

// hello("Abdullah"); // Hello Abdullah 

// const hello = (firstName, lastName) => { // Fonksiyon tej işlem yapıyorsa {} parantezleri arasında yazmaya gerek yok ==> const hello = (firstName, lastName) => console.log("Hello", firstName, lastName);
//     console.log("Hello", firstName, lastName); 
// }

// hello("Abdullah", "Alsabouni"); // Hello Abdullah Alsabouni

// const cube = function(x){
//     return x * x * x;
// }

// const cube = x => {
//     return x *x *x;
// }

const cube = x => x * x * x;
console.log(cube(4)); // 64
