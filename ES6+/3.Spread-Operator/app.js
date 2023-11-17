
// const langs = ["JavaScript", "C", "Java", "Ruby"];

// console.log(langs[0], langs[1], langs[2], langs[3]);// Eski yöntem // JavaScript C Java Ruby

// console.log(...langs);// Dizinin elemanlarını yazdırır // JavaScript C Java Ruby

// const langs2 = ["Css", "Dart", langs[0], langs[1], langs[2], langs[3]]; // Eski yöntem

// const langs2 = ["css", "Dart",...langs ]

// console.log(langs2); // Css Dart JavaScript C Java Ruby

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [a,b,...numbers2] = numbers;

// console.log(a, b); // 1 2
// console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9]

const addNumbers = (a, b, c) => console.log(a + b + c);

const numbers = [100, 200, 300];

// addNumbers(numbers[0], numbers[1], numbers[2]); // Eski yöntem

addNumbers(...numbers); // 600

