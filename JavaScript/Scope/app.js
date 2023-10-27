// Scope Kavramı
// // 1. Global Scope: Genel kapsam, program içerisindeki tüm yeri eriş

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func() {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3);
// }
// Func(); // 40 50 60 // Funk fonksiyonu diğer değişkenlerden bağımsız bellekte yer kapsar.Fakar çağırlıdığında fonksiyonun içindeki tanımlana değişkenler silinir. 

//console.log(value1,value2,value3); // 10 20 30

// if(true) {
//     var a = 10;
//     let b = 20;
//     const c =30;
//     // console.log(a, b, c);
// }

// console.log(a); // 10
// console.log(b); // Referans Hatası
// console.log(c); // Referans Hatası

// if(true) { // let ve const sadece blok scope'ta çalışır
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1, value2, value3); // 40 50 60

// }

// console.log(value1, value2, value3); // 40 20 30  // var'ın değeri değişti



