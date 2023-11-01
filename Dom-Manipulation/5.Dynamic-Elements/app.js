// Yeni element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a"); // Yeni bir a etiketi yarat
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos"; // Oluşturulan yeni a etiketi(id belirleme) ==>  <a id = "clear-todos"></a>
newLink.className = "btn btn-danger"; // Sınıf belirleme ==> <a id = "clear-todos" class = "btn btn-danger"></a>
newLink.href = "http://www.google.com.tr";
newLink.target = "_blank";


// Text Content

//newLink.textContent = "farklı sayfaya git"; // ==> <a id = "clear-todos" class = "btn btn-danger" href = "http://www.google.com.tr" target = "_blank">farklı sayfaya git</a>

// !!!!! textcontent kullanmanın dezavantajları : yeni bir text ataması yapıldığında  ana sınıfın tüm özelliklerini silip yeni bir text yazısı oluşturur

//console.log(cardbody);// textcontent'ten önce //<div>.... <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> </div>

//cardbody.textContent = "Yeni text yazısı";

//console.log(cardbody); // textcontent'ten sonra // <div class = "card-body">YEni bir text yazısı</div>

// Text Node 

// const text = document.createTextNode("Hello"); // textcontent yerin doğru kullanım 
// cardbody.appendChild(text); // Yeni bir text(a etiketi) ekleme

newLink.appendChild(document.createTextNode("Yeni sayfa"));

cardbody.appendChild(newLink);


console.log(newLink);
