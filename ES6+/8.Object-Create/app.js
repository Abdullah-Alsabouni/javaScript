// const obj = {

//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }

// // console.log(obj);

// const emp = Object.create(obj);

// emp.name = "Abdullah";
// emp.age = 22;



// console.log(emp); // (emp) bir obje  içinde (obj) objesini prototype objesiyle oluşturuyor ==> emp ==> {name: 'Abdullah', age: 22} >>   age:22   name: "Abdullah"  >[[Prototype]]: Object >>   test1:f() >test2: f() >[[Prototype]]: Object

function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test 1");
}
Person.prototype.test2 = function() {
    console.log("Test 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype); 
Employee.prototype.myTest = function() {
    console.log("My Test");
}
const emp = new Employee("Abdullah", 22);

console.log(emp);

// emp.test1();
 
