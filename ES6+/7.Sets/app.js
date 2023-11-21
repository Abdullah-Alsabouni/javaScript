const mySet = new Set();

mySet.add(100);
mySet.add(100); // 100 elemanı bie kere eklenir
mySet.add("Abdullah");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({a: 1,b: 2});

const mySet2 = new Set([100, 3.14, "Abdullah"]);


// console.log(mySet); // Set(5) {100, 'Abdullah', true, Array(3), {…}}
// console.log(mySet2); // Set(3) {100, 3.14, 'Abdullah'}

// console.log(mySet.size); // 5

////// 

// mySet.delete("Abdullah");

// console.log(mySet); // Set(5) {100, 'Abdullah', true, Array(3), {…}}

// Has method 

// console.log(mySet.has("Abdullah")); // "Abdullah" elemanı var mı?   // true
// console.log(mySet.has([1, 2, 3])); // false ==> dizi kümede mevcüt fakat dizi bir referans veri tipi olduğu için adresi soruluyor burda

// For Each 

// mySet.forEach(function(value) {
//     console.log(value); // 100 \n Abdullah \n true \n [1, 2, 3] \n {a: 1,b: 2}
// })

// For of 

// for (let value of mySet) {
//     console.log(value); // 100 \n Abdullah \n true \n [1, 2, 3] \n {a: 1,b: 2}
// }

const array = Array.from(mySet);

console.log(array); // 100 \n Abdullah \n true \n [1, 2, 3] \n {a: 1,b: 2}
