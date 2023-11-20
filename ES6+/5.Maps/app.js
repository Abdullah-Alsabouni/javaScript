// Meps ==> (key, value) key ve value tüm veir tiplerini alabilen yapılar

// let MyMap = new Map();

// // console.log(typeof MyMap); // object

// const key1 = "Abdullah";
// const key2 = {a: 30, b: 40};
// const key3 = () => 2;

//  Set
// MyMap.set(key1, "String value");
// MyMap.set(key2, "object literal value");
// MyMap.set(key3, "Function value");

// Get

// console.log(MyMap.get(key1)); // String value
// console.log(MyMap.get(key2)); // object literal value
// console.log(MyMap.get(key3)); // Function value

// console.log(MyMap); // ==> Map(3) {'Abdullah' => 'String value', {…} => 'object literal value', ƒ => 'Function value'}

// console.log(MyMap.size); // ==> 3

//const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("Samsun", 2);
// cities.set("istanbul", 16);

// For Each

// cities.forEach(function(value, key) {
//     console.log(key, value); // Ankara 5 \n Samsun 2 \n istanbul 16
// })

// for(let value of cities) { 
//     console.log(value); // ['Ankara', 5] \n ['Samsun', 2] \n ['istanbul', 16]
// }

// for(let [key, value] of cities) { 
//     console.log(value); // 5 \n 2 \16
// }

// for(let [key, value] of cities) { 
//     console.log(key, value); // Ankara 5 \n Samsun 2 \n istanbul 16 
// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key); // Ankara \n Samsun \n istanbul
// }

// for( let value of cities.values()){
//     console.log(value); // 5 \n 2 \n 16
// }

// const array = [["key1", "value1"],["key2", "value2"]]; // İç içe diziler

// const lastMap = new Map(array);

// console.log(lastMap); // Map(2) {'key1' => 'value1', 'key2' => 'value2'}

// Maplerden Array oluşturma 

const cities = new Map(); 

cities.set("Ankara", 5);
cities.set("Samsun", 2);
cities.set("istanbul", 16);

const array = Array.from(cities); // cities Map'i arraye dönüştür

console.log(array); // [Array(2), Array(2), Array(2)]
