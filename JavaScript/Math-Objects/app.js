let value;

value = Math.PI; // 3.141592653589793
value = Math.E; // 2.718281828459045

value = Math.round(3.5); // 4 ==> yuvarlama işlemi yapıldı 3.5 ve üzeri yukarıya doğru yuvarlama yapar tamsayıya yuvarlar
value = Math.ceil(4.1); // 5 ==> Sadec yukarıya doğru yuvarlama yapar
value = Math.floor(7.8); // 7 ==> Sadece aşağıya doğru yuvarlama yapar

value = Math.sqrt(25); // 5
value = Math.pow(2, 3); // 8

value = Math.abs(-10); // 10 ==> Mutlak değer

value = Math.max(90, 30, 46, 13); // 90
value = Math.min(90, 30, 46, 13); // 13

value = Math.random(); // [0, 1) sayıları arasında rastgele bir ondalıklı sayı üretir
value = Math.random() * 40; // [0, 40)
value = Math.floor(Math.random()) * 30; // [0, 30) tam sayı üretir

console.log(value); 
