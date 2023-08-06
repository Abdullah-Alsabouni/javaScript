function sayiUret(){
    return Math.ceil(Math.random() * 38)
}

sayiUret()

var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret()

console.log('Kolon : ' + sayi1 + ' ' + sayi2 + ' ' + sayi3)

/*var sayi1 = Math.random()  // 0 ile 1 arasında rastgele bir ondalıklı bir sayı üretir
var sayi2 = Math.random() * 23  // 1 ile 23 arasında rastgele bir ondalıklı bir sayı üretir
var sayi3 = Math.ceil(Math.random() * 45) // 1 ile 45 arasında rastgele bir tamsayı üretir // Math.ceil sayesinde sayı yuvarlandı

console.log('Kolon : ' + sayi1 + ' ' + sayi2 + ' ' + sayi3)

// Kolon : 0.7130603739991339 13.033735277226048 4 */
