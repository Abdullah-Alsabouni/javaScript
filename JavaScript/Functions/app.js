// // Fonksiyon Tanımlama

// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok") { // Bu satırdaki tanım fonksiyonun değerleri atanmadığı zaman alttaki if koşullarındaki gibi sonuç verir

//     // if(typeof name === "undefined") 
//     // name = "Bilgi Yok";

//     // if(typeof age === "undefined") 
//     // age = "Bilgi Yok";


//     console.log(`isim: ${name} Yaş: ${age}`);
// }

// merhaba("Abdullah",22 ); // isim: Abdullah Yaş: 22 // Fonksiyon Çağırısı (Function Call)

// merhaba("david", 50); // isim: david Yaş: 50

// merhaba(); // isim: undefined Yaş: undefined ==> if koşulları verdiğimizde sonuç = isim: Bilgi Yok Yaş: Bilgi Yok

// merhaba("goggins"); // isim: goggins Yaş: Bilgi Yok


/* return */

/* 1.Durum */ 
// function square(x) {
//     console.log(Math.pow(x, 2));
// }
// function cube(x) {
//     console.log(Math.pow(x, 3));
// }

// let a = square(12);  // 144

// a = cube(a); // NaN ==> Not a number

/* 2.Durum */ 

//  function square(x) {
//     console.log(x*x);
//     return x; // ==> 12'i döndür
//  }
//  function cube(x) { 
//     console.log(x*x*x);
//     return x;
//  }

//  let a = square(12);  // 144

//  a = cube(a); // 12 * 12 * 12 = 1728

/* 3.Durum */

// function square(x) {
//     console.log(x*x);
//     return x * x; // ==> 144
//     console.log("Merhaba"); // Hiç bir zaman çalıştırılmaz
// }

// function cube(x) {
//     console.log(x*x*x);
//     return x * x * x;
// }
// let a = square(12);  // 144

// a = cube(a); // 144 * 144 * 144

// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba()); // ==> Merhaba

// Function Expression

// const merhaba = function(name) {
//     console.log("Merhaba " + name);
// }

// merhaba("Abdullah"); // Merhaba Abdullah

/* Immediately Invoked Function Exression (IIFE) (Tanımlandiğı blokta çalışan foksiyon) */

// (function(name) {
//     console.log("Merhaba " + name);
// })("Abdullah"); // Merhaba Abdullah

const database = {
    host: "localhost",
    add: function() {
        console.log("Eklendi");
    },
    get:function() {
        console.log("Alindi");
    },
    update:function(id) {
        console.log(`Id ${id} Güncellendi`);
    },
    delete:function(id) {
        console.log(`Id ${id} Silindi`);
    }
}

console.log(database.host); // localhost

database.add(); // Eklendi

database.delete(10); // Id 10 Silindi
