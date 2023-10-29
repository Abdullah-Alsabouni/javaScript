let value;

value = document;

// Scripts

value = document.scripts; // html'in script etiketlerini array olarak görütüler
value = document.scripts.length;
value = document.scripts[0];

// Links

value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class"); // btn btn-dark // linkleri son elemanının class attribute'unu görünüle
value = document.links[document.links.length - 1].className; // Üstteki satırla aynı sonucu verir
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].classList; // Üstteki satırla aynı sonucu verir

// Formlar

value = document.forms;
value = document.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].id; // todo-form
value = document.forms[0].getAttribute("id"); // todo-form
value = document.forms[0].name;
value = document.form[0].method; // Eitkette metod tanımlanmamışsa defualt olarak "get" gelir

console.log(value);
