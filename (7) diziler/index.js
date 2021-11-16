


/*
Diziler : (Dizi özel bir çeşit objedir, verilerin sıralı bir şekilde saklanması için uygun bir tiptir.)
diziler çok kullanışlı bir yapıdır.
vertabanından yaş,isilm,maaş gibi bilgileri bir liste halinde çekmemize ve bunları bir
list item olarak kullanıcının önüne getirmemize yarayabilir.

let meyveler = ["Elma", "Portakal", "Erik"];
diziler bu şekilde tanımlanır.
önce bir değişken tanımlarız ve köşeli parentezler içersinde dizi elemanlarımızı aralarına 
virgül işareti koyarak tek tek listeleriz.
*/

let meyveler = ["Elma", "Portakal", "Erik"];

console.log( meyveler[0] ); // Elma
console.log( meyveler[1] ); // Portakal
console.log( meyveler[2] ); // Erik


/*
ayrıca daha sonradan dizinin elemanlarını değiştirmemiz mümkündür.
*/

meyveler[2] = 'Armut'; // burada 3. dizi elemanını seçiyoruz ve ona "Armut değerini atıyoruz.

/*
veya dizimize yeni bir eleman da ekleyebiliriz.
*/
meyveler[3] = 'Limon'; // artık dizimizin 4. elemanı var ve bunun değeri "limon"


/*
dizimizin uzunluğunu .length komutu ile öğrenebiliriz.
*/
console.log(meyveler.length);


/*
dizi içerisinde farklı elemanlar da bulundurabiliriz.
*/
let arr1 = [123123 , "baran" , {başak:"kerem"}];
console.log(arr1);


/*
push : sona eleman ekler.
+ push komutu ile dizimizin sonuna farklı bir değer eleyebiliriz.
pop : sondan eleman alır.
+ pop komutu ile dizinin sonundaki eloemanı silebiliriz.
*/
console.log("----------------------------------");
meyveler.push(11);
console.log(meyveler);

meyveler.pop(11);
console.log(meyveler);

/*
shift : dizinin ilk elemanını döndürür.
*/
console.log(meyveler.shift());


/*
unshift : dizinin başlangıcına eleman eklemesi yapar.
*/
meyveler.unshift('er');
meyveler.unshift("Ananas", "Limon"); //diziye aynı anda birden fazla değer ekleyebilirsin.
console.log( meyveler );






