
 /*    ES6 öncesi     */
// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("Isim: " + this.name + "Yaş: " + this.age + "Maaş: " + this.salary);
// }

// const emp = new Employee("Ahmet", 23, 4000);

// console.log(emp); // Employee {name: 'Ahmet', age: 23, salary: 4000}

/*   ES6 sonrası    */

class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log(" Isim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("Ahmet", 25, 4000);

console.log(emp);// Employee {name: 'Ahmet', age: 23, salary: 4000}
emp.showInfos(); // Isim: Ahmet Yaş: 25 Maaş: 4000

// ARKA PLANDA HER İKİ YÖNTEM AYNI İŞİ YAPAR !!!
