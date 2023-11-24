function Employee(name, age){
    this.name = name;
    this.age = age;
    // this.showInfos = function() {
    //     console.log("Isim: " + this.name + "Yaş: " + this.age);
    // }
}
Employee.prototype.showInfos = function() { // Employee ==Miras==> "Prototype" objesine metod ekleme işlemi
    console.log("Isim: " + this.name + " Yaş: " + this.age);
}



const emp1 = new Employee("Abdullah", 22); // showInfos = function() metodu  emp1 ve emp2 de mevcüt
const emp2 = new Employee("Ahmet", 24); // showInfos = function() metodunu emp1,2'in Prototype üst sınıfına yazarsak emp1,2...n bir çok object oluşturup her objecte aynı metodu yazmak yerine tek sınıfa yazmış oluruz. Ve bellek tasarrufunu elde etmiş oluruz

emp1.showInfos(); // Isim: Abdullah Yaş: 22 // Employee objesini kontrol et ==> Yok ==> üst sınıfa git ==> Prototype objesini kontrol et var ==> Görüntüle

console.log(emp1); 
console.log(emp2);
