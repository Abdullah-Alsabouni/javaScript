// Keyboard Events


// keypress

// document.addEventListener("keypress", run); // "keypress" anahtarı Web sayfasında her hangi bier tuşa basıldığında events oluşur sayaç artar 

// function run(e) {
//    // console.log(e.which); // Basılan karekterin ASCII tablosundaki değerini yazdırır
//     //console.log("Naber"); // ==> console ===> x Naber(x : tuşlara basma sayısı)
//     console.log(e.key); // Basılan karakterlerini gösterir görüntüler (yön tuşlarını ve tab'ı Shift Insert vb. içermiyor)
// } 



// keydown

//  document.addEventListener("keydown", run); // "keydown" tüm tuşları kapsar

//  function run(e) {
   
//      console.log(e.key); 

//  } 


// keyup

// document.addEventListener("keyup",run); // "keyup" "keydown" dan farkı tuşa basılı tutulduğunda sayaç bırakılıncaya kadar artmaz

// function run(e){
//      console.log(e.key); 
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    //console.log(e.key); // Input'ta basılan karakteri görüntüler
    //header.textContent = e.target.value; // Input'ta yenilen her değeri header'ın yazısına ata
    console.log(e.target.value); // Input'u  görüntüler
}

