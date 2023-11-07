const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event

// title.addEventListener("click", run); // "#tasks-title" için Mouse'ın her tıklaması click sayacını arttırır
// title.addEventListener("dbclick", run); // Her Çft tıklama
// title.addEventListener("mousedown",run); // click'e çok benzer 
// title.addEventListener("mouseup", run); // Basılı tutulduğunda sayaç artmaz
// title.addEventListener("mouseover", run); // "#tasks-title" üzerine gelindiğinde sayaç artar
// title.addEventListener("mouseout", run); // "#tasks-title" üzerine geldikten sonra üzerinden çıkması

// cardBody.addEventListener("mouseover",run); // cardbody'nin elementleri üzerinde
// cardBody.addEventListener("mouseout", run); // cardbody'nin elementleri dışında

cardBody.addEventListener("mouseenter", run); // cardbody'nin üzerinde mouseenter
cardBody.addEventListener("mouseleave", run); // cardbody'nin dışında mouseleave



function run(e) {
    console.log(e.type);
}
