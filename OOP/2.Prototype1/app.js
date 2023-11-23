// JavaScript class tabanlı bir dil değil (prototype) tabanalı bir dildir. 
// JavaScript'te class yazılır fakat arka planda her class prototype Objesine sahip olur dönüşür
// Prototupe objei birçok metod içerir
// Object constructor

// const object = new Object(); // Object literal
// const object1 = new Object(); // object ve object1 objeleri ortak Prototype objesine sahipler
// object.name = "Abdullah";
// console.log(object); // {name: 'Abdullah'} ==>      name: "Abdullah"  >[[Prototype]] : Object


// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("Bilgiler gösteriliyor");
//     }
// }

// const emp1 = new Employee("Abdullah", 22);


// console.log(emp1); // Employee Object == Miras ===> Prototype object(cons. : f Employee(name, age)) == Miras ===> Prototype Object(Genel Object)

// console.log(emp1.toString()); // [object Object]   ==> // emp1 nesnesinde "toString()" özelliğini oluşturmadık. fakat // Employee Object == Miras ===> Prototype object(cons. : f Employee(name, age)) == Miras ===> Prototype Object(Genel Object)'den miras alındı
// console.log(emp1.deneme()); //  Uncaught TypeError: emp1.deneme is not a function // Hiç bir sınıfta bulunmayan bir fonksiyon


function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler gösteriliyor");
    }
    this.toString = function() {
        console.log("Bu bir Employee objesi");
    }
}

const emp2 = new Employee("Ahmet", 24);

console.log(emp2.toString());// Miras almaya gerek yok  // Bu bir Employee objesi

