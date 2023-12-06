function Person(name, age) {
    this.name = name;
    this.age = age;

}

Person.prototype.showInfos = function(){
    console.log("isim: " + this.name + "Yaş: " + this.age);
}



// const person = new Person("Abdullah", 22);
// console.log(person);

function Employee(name, age, salary) {
    //  this.name = name;
    //  this.age = age;
    Person.call(this, name, age); // Üstteki iki satır yerine yazılır
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype); // showInfos metodu emp ile çağırılabilir
/* Override */ 
Employee.prototype.toString = function(){
    console.log("Employee");
}
/* Override */
Employee.prototype.showInfos = function() {
    console.log("isim: " + this.name + "Yaş: " + this.age + "Maaş " + this.salary);
}


const emp = new Employee("Ahmet ", 24, 4000);

// emp.showInfos();//  // isim: Ahmet Yaş: 24  // salary özelliği yok ????
// console.log(emp.toString());// Employee'da tanımlanmamışsa ==> // [object Object] ==> genel object özelliği
// console.log(toString()); // Employee'da tanımlanmışsa ==> tanımlanan metodu çalıştırır  ==> Employee \n undefined
// emp.toString();// Employee'da tanımlanmışsa ==> tanımlanan metodu çalıştırır ==> Employee

console.log(emp); // call kullanıldıktan sonra ==> // Employee {name: 'Ahmet ', age: 24, salary: 4000}
