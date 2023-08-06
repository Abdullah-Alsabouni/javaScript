var varible = "Değer" // Erişebilir
function sayiUret(UstLimit) {
    return Math.ceil(Math.random() * UstLimit)
   // var varible = "Değer"  // Erişelemez
}

sayiUret()

var sayi1 = sayiUret(345)
var sayi2 = sayiUret() //  NaN (Parametresiz)

console.log(sayi1 + ' ' + sayi2)

// 12 NaN