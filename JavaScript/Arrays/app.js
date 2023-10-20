let value;

const numbers = [32, 45, 67, 35, 65, 24, 56];

// const numbers2 = new Array(1, 3, 6, 6, 5); // farklı yöntem

const langs = ["Python", "Java", "C", "Ruby"];

const a = ["merahaba", 56, null, undefined, 6.78];

value = numbers.length; // 5

value = numbers[3]; // 35

// İndex değeri değiştirme

numbers[0] = 99; // 32 ==> 99

// index Of

value = numbers.indexOf(67); // 2

numbers.push(23); // Arrayin sonuna 23 elemanını ekle
numbers.unshift(9); // Arrayin başına 9 elemanını ekle
numbers.pop(); // Arrayın sounundan eleman sil
numbers.shift(); // Arrayın başından eleman sil
console.log(numbers);

numbers.splice(0,3); // 0 1 2 indexleri silenecek

value = numbers;

// Reverse // ters çevirir
numbers.reverse();

value = value.sort(); // karakterin ilk elemanına göre sıralar

value = numbers.sort(function(x, y){
   return x - y;  
}
); // Küçükten büyüyüğe sıralayan fonksiyon

value = numbers.sort(function(x, y){
    return y - x;  s
 }
 ); // Büyükten küçüğe sıralayan fonksiyon

console.log(value);
