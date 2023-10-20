const name = "Abdullah Alsabouni";
const department = "Web";
const salary = 100000;

// const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Maaş: " + salary;
// const a = `isim:${name}\nDepartman:${department}\nMaaş:${salary}`; // Üstteki satır yerine template literal kullanılır(Alt Gr + 2 defa üst üstte ";") basarak yazılır // ES6 yeni java script özelliği
// const html = "<ul> " + 
//            "<li> " + name + "<li>" + 
//            "<li> " + department + "<li>" +
//            "<li> " + salary + "<li>" +
//            "</ul>";
function a() {
    return "Merhaba";
}
const html = `
      <ul>
      <li>${name}</li>
      <li>${department}</li>
      <li>${salary}</li>
      <li>${10 / 4}</li>
      <li>${a()}</li>
      </ul>
      `;


document.body.innerHTML = html;           
