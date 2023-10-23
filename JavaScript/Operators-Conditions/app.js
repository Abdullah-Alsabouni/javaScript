// Karşılaştırma Operatörleri

// ==    Boolean bie değer döner
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log("js" == "Java"); // false
// console.log("5" == 5);  // true

// console.log(3 === "3");// false // Hem sayı değerini hem de değişken tipini kontrol eder

//console.log(!( 2 != 2 )); // !false = true

// And Operatörü ==> &&

// Or Operatörü ==> ||

// const process = "3";

// if(process === "1") {
//     console.log("işlem1");
// }

// else if(process === "2") {
//     console.log("işlem2");
// }

// else if(process === "3") {
//     console.log("işlem3");
// }

// else if(process === "4") {
//     console.log("işlem4");
// }
// else {
//     console.log("Geçersiz işlem");
// }


//const number = 120;
/*
if (number === 100) {
    console.log("Sayı 100'e eşit");
}
else {
    console.log("Sayı 100'e eşit değil");
}

*/
// Ternary Operator

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");

// if (number === 100)  console.log("Sayı 100'e eşit"); // Koşullarda tek satırlık işlem varsa parantezleri yazmaya gerek yok
// else console.log("Sayı 100 değil");

/* Switch-Case */ 

const process = 2;

switch (process){
    case 1: 
        console.log("İşlem 1");
        break; // Bu durumda break kullanılmasaydı ==> işlem 1 \n İşlem 2 
    case 2:
        console.log("İşlem 2");
        break;
    case 3: 
    console.log("İşlem 3");
    break;
        
    default:
        console.log("Geçersiz İşlem");
}


