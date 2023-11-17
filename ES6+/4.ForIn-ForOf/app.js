const person = {
    name : "Abdullah Alsabouni",
    age : 22,
    salary : 1000000
};

const langs = ["JavaScript", "C", "Java"];

const name = "Abdullah";

// For In  ==> index üzerinde gezer

// for(let prop in person) {
//     console.log(prop); // name \n age \n salary
// }

// for(let prop in person) {
//     console.log(prop, person[prop]); // name Abdullah Alsabouni \n age 22 \n salary 1000000
// }

// for(let index in langs) {
//     console.log(index, langs[index]); // 0 JavaScript \n 1 C \n 2 Java
// }

// for(let index in name) {
//     console.log(index, name[index]);  // 0 A \ 1 b\ ...... 7 h
// }

// for (let lang in langs) {
//     console.log(lang);
// }

// For Of ==> Değerler üzerinde gezer ==>  Objeler üzerinde gezinemiyoruz

// for (let value of langs) {
//     console.log(value); // JavaScript \n C \n Java
// }

for (let character of name) {
    console.log(character); //0 A \n 1 b\n ...... 7 h
}


