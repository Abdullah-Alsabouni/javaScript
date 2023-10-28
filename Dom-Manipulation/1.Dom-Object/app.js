// Window Object
let value;

value = document;
value = document.all;
value = document.all.length; // html etiketlrinin elemanlarının sayısını gösteriyor
value = document.all[0]; // ==> <html lang = "en">...</html>  // html etiketlerini ilk elemanı
value = document.all[document.all.length - 1]; // Etiketlerin son elemanını verir

// const elements = document.all; // html collection

// // for(let i = 0; i < elements.length; i++) {
// //     console.log(elements[i]); // html etiketlrinin elemanlarının sayısını gösteriyor
// // }

// // elements.forEach(function(element){
// //     console.log(element); // Hata verir sadece for döngüsünde çalışır. Çalışması için array'e çevirmek lazım
// // });

// const collection = Array.from(document.all); // Array'e çevirme işlemi

// collection.forEach(function(collection){
//     console.log(collection);
// });

value = document.all[8]; // body etiketleri 
value = document.body; // body etiketleri
value = document.head; // head etiketleri
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.URL;
value = document.characterSet; // UTF-8



console.log(value)
