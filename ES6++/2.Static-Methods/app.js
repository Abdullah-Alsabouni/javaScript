
// class Matematik {

//     cube(x) {
//         console.log(x * x * x);
//     }
// }

// const math = new Matematik();
// math.cube(3); // 27
// console.log(math); // Matematik {}

class Matematik {
    square(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}

const math = new Matematik();



console.log(math); // Matematik sınıfının prototype'ında cube metodu bulunmuyor
Matematik.cube(3); //==> 27 // statik metodlarla sadece sınıf üzerinde erişilir
math.square(5); // 25  // square metodu statik değil
Matematik.square(5); // statik olmayan metodlar sınıf ile çağırılmaz
// math.cube(3); // Hata verir 

// Object.create(); // create metodu Object objesinde statik bir metod
// Math.sqrt(); // sqrt metodu Math objesinde statik bir metod
