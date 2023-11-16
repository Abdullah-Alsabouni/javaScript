
//let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

// [number1, number2] = arr;// Destruct // number1 = 100, number2 = 200

// const [number1, number2] = arr; // const number1, number2; ve [number1, number2] = arr; Yerine bu satır kullanılır


// console.log(number1, number2);

// Obje Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// };

// const {number1, number2, number3} = numbers;

// console.log(number1, number2, number3); // undefined undefined undefined

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// };

// const {a, c, e} = numbers; // {a: number1, c: number2, e: number3} kullanılabilir

// console.log(a, c, e); // 10 30 50  // console.log(number1, number2, number3) kullanulabilir


// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1, lang2, lang3); // Pyton Java C++

// Obje 

const person = {
    name: "Abdullah alsabouni",
    year: 2001,
    langs : 3,
    showInfos : () => console.log("Bilgiler gösteriliyor...")
}

const {name : isim, year : yil, langs: diller, showInfos: bilgileriGoster} = person;

console.log(isim, yil, diller);// console.log(name, year, langs) ==> Yanlış  // Abdullah alsabouni 2001 3

bilgileriGoster(); // Bilgiler göstriliyor...
