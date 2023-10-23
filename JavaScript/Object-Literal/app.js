let value;
const programmer = {
    name: "Abdullah",
    age: 21,
    email: "abdullah21yos@gmail.com",
    langs: ["java", "C", "JavaScript"],

    address : {
        city : "Samsun",
        street : "Atakum"
    },

    work : function() {
        console.log("I am working");
    }
}

value = programmer;

value = programmer.email; //abdullah21yos@gmail.com
value = programmer["email"]; // Üstteki satırla aynı sonucu verir

value = programmer.langs; // [ 'java', 'C', 'JavaScript' ]

value = programmer.address.city; // Samsun

value = programmer.work(); //I am working  \n undefined


const programmers =  [
    {name: "Abdullah Alsabouni", age:21},
    {name: "Ali Yusuf", age: 30},
];

value = programmers[0].name; // Abdullah Alsabouni
console.log(value);
