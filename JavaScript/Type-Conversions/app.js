let value;

// Veri tiplerini String'e Çevirme

value = 123;

value = String(123);
value = String(2.34);
value = String(true); // Tüm veri tipleri String'e dönüştürülebilir
value = (10).toString();


console.log(value); // 10
console.log(typeof value); // string

// Veritiplerini Sayılara çevirme

value = Number("165");
value = Number(null);
console.log(value); // 0
console.log(typeof value); // number

//////////////////////

value = Number(undefined);
console.log(value); // NaN
console.log(typeof value); // number
/////////////////////

value = Number("Hello world");
console.log(value); // NaN
console.log(typeof value); // number

///////////////////////

value = Number(function(){console.log()});
console.log(value); // NaN
console.log(typeof value); // number

// Array'da Number'a çevirilince NaN verir
////////////////////////

value = Number("3.14");
value = parseFloat("3.14");

console.log(value); // 3.14
console.log(typeof value); // number
///////////////////////

value = parseInt("3.14");
console.log(value); // 3
console.log(typeof value); // number

///////////////////////

const a = "Hello" + 35; // JavaScript otomatik olarak 35'i String'e çevirir

console.log(a); // Hello35
console.log(typeof a); // string
