// // Var
// var name = "Abdullah Alsabouni"
// console.log(name); // ==> Abdullah Alsabouni
// name = "Abdullah"; 
// console.log(name); // ==> Abdullah


// Let

// let name = "Abdullah Alsabouni";
// let name = "Abdullah"; // Hata mesajı: bu değişken önceden tanımlanmış ==>  Uncaught SyntaxError: Identifier 'name' has already been declared
// name değişkenini console'da yazdırdığımzda yeni bir değer atanabilir

// // Const
// const name  ="Abdullah Alsabouni";

// console.log(name);

// name = "Abdullah"; // const : ilk atanan değerden başka hiç bir şekilde kabul etmez
// console.log(name); // Uncaught TypeError: Assignment to constant variable.

/**************************/

// const a;
// a = 10;
                // Hata verir
// console.log(a);  

/**************************/

const a = [1, 2, 3, 4, 5];
console.log(a); // [ 1, 2, 3, 4, 5 ]
// a = [1, 2, 3, 4, 5, 6]; // Hata verir ==> a'nın değerini değiştiriyoruz
a.push(6);
console.log(a) ; //[ 1, 2, 3, 4, 5, 6] ==> Hata vermez  a'nın referans ettiği adresin değerini değiştiriyoruz

