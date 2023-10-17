// Değişken oluşturma

// var a = 20;
// var b = 120;
// var c = 320;

// console.log(a, b, c); //=>> 20 120 320

// Primitive //

// var a = 10; // Numeber veri tipi
// var b = 3.14; // Number veri tipi
// console.log(typeof a); // Number
// console.log(typeof b); // Number

// String 
 
// var name = "Abdullah";
// console.log(name);
// console.log(typeof name); // string

// Boolean 
// var a = true; // Sadece true ve false var
// console.log(typeof a); // Boolean

// Null 

// var a = null; // null

// console.log(a); // object

// console.log(typeof a);

// var a;

// console.log(a); // undefiner



//  Reference Veri Tipleri // 

// var numbers = [1, 2, 3, 4, 5]; 

// console.log(numbers); // [ 1, 2, 3, 4, 5 ] 
// console.log(typeof numbers); //object
// console.log(numbers[0]); // ==> 1

// var person = {
//     name: "Abdullah",
//     age: 25
// }

// console.log(person); // { name: 'Abdullah', age: 25 }
// console.log(typeof person); // object

// var date = new Date();

// console.log(date); //2023-10-17T12:02:11.456Z ==> Saat
// console.log(typeof date); // object

// var merhaba = function() {
//     console.log("Merhaba");
// }
// console.log(merhaba); // [Function: merhaba]
// console.log(typeof merhaba); // function

var a = [1, 2, 3];  // a ve elenamları bellekte ayrı ayrı yer ayrlıyor
// Referanslar Bellekte bir yer gösteren bir vei tipidir

var b = a; // b için yer ayrılıyor fakat b nin elemanları a nın elemanlarını gösterdiği referansa eşit oluyor 
a.push(4);
console.log(b); // [ 1, 2, 3, 4 ]
