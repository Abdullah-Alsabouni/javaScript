// While

// let i = 0;

// while(i < 10) {
//     console.log(`Number ${i}`);
//     i++;
// }

// Break ve continue

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     if (i == 4) {
//         break; // 4'ten sonra döngüyü kır
//     }
//     i++; 
// }

// while(i < 10) {
//     if (i == 3 || i == 5) {
//         i++; // Bu satırda i++ olmasaydı sonsuz döngüye girerdi 3 elemanına geldiğinde dögüyü baştan başlatıcak
//         continue; // 3 ve 5'e geldiğinde es geçip döngüye devam edecek
//     }
//     console.log(i);
//     i++;
// }

// Do while

// let i = 0;
// do {
//     console.log(i);
//     i++;

// } while(i < 10);

// For

const langs = ["Ruby", "C", "JavaScript"];

// let i = 0;
// while(  i < langs.length) {

//     console.log(langs[i]);
//     i++;
// }

// for( i = 0; i <langs.length; i++) {
//     console.log(langs[i]);
// } 

// For each

// langs.forEach(function(langs,i) { // Dizinin içindeki elemanlara gezinmeyi sağlıyor
//     console.log(langs,i); // Ruby 0 \n C 1 \n JavaScript 2

// });

// Map 

// const users = [
//     {name: "Abdullah", age: "22"},
//     {name: "David", age: "50"},
//     {name: "lionel", age: "36"}
// ];

// // users.forEach(function(name, age) {
// //     console.log(name,age); // forEach döngüsü dizideki name ve age'i obje olarak algılamaz ==> name = index içeriği , age = index sayısı  // { name: 'Abdullah', age: '22' } 0 \n  { name: 'David', age: '50' } 1 \n { name: 'lionel', age: '36' } 2
// // })

//  const names = users.map(function(user) { // names isteğe bağlı verilen bir isim
//      return user.name;
//  });

//  const ages = users.map(function(user) { // ages isteğe bağlı verilen bir isim
//     return user.age;
//  });
//  console.log(names); // [ 'Abdullah', 'David', 'lionel' ]
//  console.log(ages); // [ '22', '50', '36' ]


const user = {
    name : "Abdullah", // name ==> key
    age : 22,
};

for( let key in user) { // key isteğe bağlı verilen bir isim
    console.log(key, user[key]); // name Abdullah \n age 22
}
