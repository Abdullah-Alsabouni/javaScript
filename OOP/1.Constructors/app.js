// console.log(this); // ==> Window // window objesi en global objedir

// const emp1 = { // Object Literal
//     name: "Abdullah",
//     age: 22,
//     showInfos: function() {console.log("Bilgiler gösteriliyor");}
// };

// const emp2 = {
//     name: "Ahmet",
//     age: 24
// };

// emp2.salary = 3000;
// emp1.showInfos(); // Bilgiler gösteriliyor
// console.log(emp1); // {name: 'Abdullah', age: 22, showInfos: ƒ}

/* 1.Yöntem (Kullanılması tam doğru değil)*/
// function Employee() { // Constructor (Yapıcı Fonksiyon)
//     this.name = "Abdullah";
// }

// const emp1 = new Employee(); // Employee fonksiyonundan bir obje oluşturma işlemi
// const emp2 = new Employee();


// console.log(emp1); // Employee {name: 'Abdullah'}
// console.log(emp2); // Employee {name: 'Abdullah'}

function Employee(name, age, salary) { // Constructor (Yapıcı Fonksiyon)
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function() {console.log(this.name, this.age, this.salary);}
    
    // console.log(this); // > Employee {name: 'Abdullah', age: 22, salary: 10000000000} \n Employee {name: 'Ahmet', age: 24, salary: 3000}
}

const emp1 = new Employee("Abdullah", 22, 10000000000);
const emp2 = new Employee("Ahmet", 24, 3000);


emp1.showInfos(); // Abdullah 22 10000000000
emp2.showInfos(); // Ahmet 24 3000

// console.log(emp1); // Employee {name: 'Abdullah', age: 22, salary: 10000000000}
