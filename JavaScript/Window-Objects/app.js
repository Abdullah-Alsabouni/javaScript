// Window objesi javascript'te en genel olan obje
// console.log(this); // Bulunduğumuz objeyi tanımlar // ör: alert() metodu window objesinin içinde yer alıyor
// console.log(window); // Üstteki satıra aynı sonuç verir

// const cevap = confirm("Emin misiniz?"); // confirm: Onaylamak için bir pencere verir. Ok veya cancel seçeneklerini verir

//console.log(cevap); // ok => true , cancel => false

// if (cevap) {
//     console.log("Sil");
// }
// else{
//     console.log("Silme");
// }

// if (confirm("Emin misiniz")) {
//     console.log("Sil");
// }
// else {
//     console.log("Silme");
// }

// const cevap = prompt("2 + 2 = ?"); // Kullanıcıdan bir girdi penceresi verir 

// if (cevap == "4") {
//     console.log("Doğru");
// }
// else {
//     console.log("Yanlış");
// }

let value;

value = window;
value = window.location; // Window objesinin alt metodlarına erişilebilir
value = window.location.host;
value = window.location.href; //http://127.0.0.1:5500/13.Window-Objects/index.html

// if (confirm("Sayfa yenilensin mi?")) {
//     window.location.reload(); // reload : Tarayıcı sayfasını yeniler
// }
// else {
//     console.log("Sayfa yenilenmedi");
// }

value = window.outerHeight; // 829 ==> Tarayıcı sayfasının uzunluğunu verir // Dış kısmıyla beraber sayfanın uzunluğu
value = window.outerWidth; 

value = window.innerHeight; // İncele kısmını ve üst pencere yazıları barlar vb. saymadan sayfanın uzunluğunu verir
value = window.innerWidth;


value = window.scrollX; // X ekseninde navbar'ı ne kadar sağ tarafa kaydırdığımızı görüntüler
value = window.scrollY;

console.log(value); 
