let value;

const firstName = "Abdullah";
const lastName = "Alsabouni";

const langs = "Java, C, Ruby";

value = firstName + lastName; // AbdullahAlsabouni
value = firstName + " " + lastName; // Abdullah Alsabouni

value = value + " is the best in the world";// value += " the best in the world" // Abdullah Alsabouni is the best in the world

value = firstName.length; // 8
value = firstName.concat(" ", lastName, " ", "İron"); // firstName + " " + lastName + "iron"

value = firstName.toLocaleLowerCase(); // abdullah
value = firstName.toLocaleUpperCase(); // ABDULLAH

value = firstName[0]; // A
value = firstName[8]; // undifined
value = firstName[firstName.length - 1]; // h

value = firstName.indexOf("b"); // 1 ==> Birinci index
value = firstName.indexOf("f"); // -1 ==> Bulunmayan index

// Char At

value = firstName.charAt(0); // A ==> ilk karakteri al
value = firstName.charAt(firstName.length - 1); // h

// Split

value = langs.split(","); // [ 'Java', ' C', ' Ruby' ]
// replace
value = langs.replace("Ruby", "JavaScript"); // Java, C, JavaScript // Ruby yerine JavaScript

// Includes ==> (Boolean response)

value = langs.includes("Java"); // true



console.log(value);
