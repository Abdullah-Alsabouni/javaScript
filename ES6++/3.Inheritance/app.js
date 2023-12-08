/* Eski Yöntem*/ 

// function Person(name, age){
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.showIfos = function(){
//     console.log(this, name, age);
// }

// function Employee(name, age, salary){
//     Person.call(this, name, age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// } 
// Employee.prototype.showIfos = function(){
//     console.log(" Isim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }
// const emp = new Employee("Ahmet", 24, 4000);

/*  ES6  */

class Person {
    constructor(name, age){ // Super class, Base class
        this.name = name;
        this.age = age;

    }
    showInfos(){
        console.log(" Isim: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary) { // Derived class, Sub class, Child class
        // this.name = name; 
        // this.age = age;
        super(name, age); // Üstteki iki satır yerine bu yazılır ==> super anahtar kelimesiyle istediğimiz sınıfı veya metodu üst sınıftan miras alabiliriz
        // super.showInfos();
        this.salary = salary;
    }
    showInfos(){ // Override
        console.log(" Isim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
    toString(){ // Override
        console.log("Employee");
    }
    raiseSalary(amount) { // Ekstra metod
        this.salary += amount; 
    }
}

const emp = new Employee("Ahmet", 24, 4000);
emp.raiseSalary(500); // Maaş arttırma işlemi metodu

//console.log(emp); // Employee {name: 'Ahmet', age: 24, salary: 4000}

emp.showInfos(); // Isim: Ahmet Yaş: 24 4500
emp.toString(); // Employee
