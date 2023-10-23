let value;

const now = new Date(); // Şu anki zamanı almamızı sağlıyor..

const date1 = new Date("11-23-2001 13:24:00");

const date2 = new Date("November 23 2001");

const date3 = new Date("23/11/2001");

value = date1;

value = date1.getMonth(); // aylar sıfırdan başlar  November ==> 10
value = date1.getDate(); // 1 den başlar ==> gün ==> 23
value = date1.getDay(); // pazar = 0 'dan başlar


value = date1.getHours(); // 13
value = date1.getMinutes(); // 24
value = date1.getSeconds(); // 0
value = date1.getMilliseconds(); // 0



// Tarih oluşturma

date1.setMonth(7);
date1.setDate(16);
date1.setFullYear(2004);
date1.setHours(0);
date1.setMinutes(16);
date1.setSeconds(21);

value = date1;


console.log(value); // Thu Aug 16 2001 00:16:21 GMT+0300 (GMT+03:00)
