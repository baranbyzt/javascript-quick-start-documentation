
/*
öncelikle tanımlarımıza gös atalım:

 var --> function scope --> global scope
 let --> block scope
 const --> block scope

Global Scope
JavaScript kodunda herhangi bir yerde tanımlanan değişkenlerdir. Bu değişkenlere her yerden erişebilirsiniz.

Local Scope
Sadece tanımlandığı fonksiyon içinde geçerli olan değişkenlerdir. Dışarıdan bu değişkenlere erişemezsiniz. Function scope diye de anılır.

Block Scope : Block scope ise her türlü { } süslü parantez arasında olan kısma denir. if-for da dahildir yani.

var : bir function scope'tur
bir fonksiyon içinde tanımladıktan sonra fonksiyon dışarısından erişemez veya kullanamassın.
artıca sadece fonksiyonlarda değil if-for gibi değişkenlerden dışarıya da uylaşamassın.
*/

function foo(){
    var pi = 3.14 
    console.log(pi);
    //3.14
 }
 foo();
 // console.log(pi); burada hata alacaksın
 //undefined
/*
var'da değişkenlere sonradan ulaşıp değerlerini değiştirebilirsin.
*/
var deger = 12;
console.log(deger);
deger = 18;
console.log(deger);

/*
const : 'constant' kelimesinden gelir ve sabit anlamındadır.
değikenlerin değerini sonradan değiştiremezsiniz. yani değişkenin değeri sabittir.
daha sonradan ekleme veya çıkartma yapamazssın. 
ayrıca aynı isim ile başka bir değişken tanımlayamassın.
*/

const pia= 3;
console.log(pia); 
// 3
 // pia= 3.14;           burada hata alacaksın
// console.log(pia);  burada hata alacaksın
//pi'nin değerini sonradan değiştirirseniz bu hatayı alırsınız.

/*
const block scope’tur. Yani sadece tanımlandığı { } süslü parantez içerisinden erişilebilir.
*/
{
    const names = 'büşra';
    console.log(names);
    // büşra
 }
  // console.log(names); burada const global tanımlanmadığından erişemessin. ve hata alacakısın.
 // undefined

 /*
let : let ile tanımladığın bir şeyin değerini sonradan atayabilirsin.
 */
let abc = 33;
console.log(abc);

abc = 22;
console.log(abc);

let kıreş;
kıreş = "çocukların bulunduğu bir ortam.."
/*
let ile tanımladığın bir değişkenin isimini başka bir yerde bir daha tanımlayamassın.
*/
let sss = 8;
console.log(sss);

// let sss = 34324234214324; burada hata alacaksın. sünkü 
console.log(sss)
/*
 let block scope’tur.
*/
for(let i = 0; i < 10; i++){
    console.log(i);
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 }
 // console.log(i); burada hata alacaksın. çünkü let bir block scope elementtir.
 // yani bir block içinde tanımlandıktan sorna dışarıdan çağırılamaz.
 //  i is not defined