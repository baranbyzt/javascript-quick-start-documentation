


/*
Döngüler yazılımda çok kritik bir yere sahiptir.
yapacağımız yazılımda işlerimizi kolaylaştıran ve ve hızlandıran bir yapıya sahiptir.
javasicript içerisindeki göngü çeşitleri şu şekildedir:
+ for
+ forEach 
+ while
+ do while

döngülere yardımcı komutlar
+ break
+ continue

şimdi bunları tek tek açılamaya ve örneklendirmeye çalışalım.
*/


/*
for döngüsü :
for döngüsü genellikle koşul ile belirtilen tekrar sayısı kadar kod bloğunun çalışması için kullanılır.
javasicript for göngüsünün kullanımı aşşağıdaki gibidir.

for(Komut 1; Koşul; Komut 2) {
  // çalıştırılacak kodlar
}

komut 1 : döngü başlangıcının nereden başlanacağını belirtir.
koşul : döngünün hangi koşullar veya şartlar dahilinde çalışacağı bildirilir.
koşul 2 : koşulumuza uygun bir şekilde çalışan kodumuzda her döngü döndüşünde ne gibi bir işlem yaptırmak isteyeceğimizi belirtiriz.

*/

let ii = 1;
for (ii;ii < 5; ii++){
    console.log(ii + ' ');
}

/*
burada i değişkenini tanımladık.
ardından bunun başlangıç değerini bildirerek koşul 1'deki yerine yerleştirdik.
burada değişkenimizin 1'den başlayacağını döngümüze bildirmiş olduk.

koşul kısımında ise değişkenimizin 5'ten küçük olduğu durumlar içinde çalışacağını döngümüze belirtmiş olduk.

koşul 2 kısımında ise koşulumuza uygun olarak i'den başlayan değişkenimiz her 5'ten küçük olduğu durumda göngümüzün içindeki kod satırını çalıştır
ve her döngü döndüğü zaman değişkenenimizi 1 arttırıyoruz.
ta ki koşulumuzun dışına çıktığı zmaana kadar. yani değişkenimiz 5'e eşit olduğunda döngüden çıkılır.

*/

var i, sonuc = 0;

for(i = 0; i < 3;) {
  sonuc += i;
  i += 2;
}
console.log(sonuc);
/*
for of döngüsü : 
for of,for in  gibi döndüler neden ortaya çıktı sorusu çok kritik bir sorudur.
javasicript içersinde bulunan while,for,do while gibi döngüler aslında bir çok işimizi halledebileceğimiz döngülerdir.
ama for of,for in  gibi döngü çeşitlerinin bizlere katısını şu şekilde açıklayabiliriz:
uygulamalarda farklı farklı veri yapıları bulunmaktadır. bunlar String,Array,LinkList,Set,Map,Trie Tree,Graph vs..
bu veri yapılarında gezinmek istediğimizde yukarıda bahsettiğimiz döngülerden daha kolay göntemlere ihtiyaç duyarız. 
bu tip yapılar hem dod yazmamızı hem de kodun okunabilirliğini daha da arttırmaktadırlar

*/
const arr=[1,2,2,4,5];
const str='12245'
const set=new Set([1,1,2,4])
const map=new Map([['a',1],['b',2],['c',3]]);
for(let val of arr) console.log(val);
for(let val of str) console.log(val);
for(let val of set) console.log(val);
for(let val of map) console.log(val);

/*
Burada kısaca for…in döngüsünden de bahsetmek istiyorum. Örneğin bir objeniz var ve bunun property dönmek istiyorsunuz bunun için for…in kullanabilirsiniz.
*/
const me={name:"Onur", age:39, height:180};
for(let key in me)
{
   console.log(key+":"+me[key]); 
} 

/*
for of döngüsü:
bunrada String, Array, LinkList, Set, Map, Trie Tree, Graph  tarzı bir verimiz varolduğunu farzedelim.
for of ile bu değerlerin orjinalliğini bozmadan içersine girebilir ve farklı farklı işlemler yaptırabiliriz.
*/

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value + " ***");
}
/*
burada array1'in bütün elemanlartını const ile tanımladığımız element değerimizin içerisine attık
ve burada element değerinde istediğimiz gibi değişiklikler yapabilir ve bu değerleri veritabanına kaydetmek için 
backend tarafına REST APİ ler ile atabiliriz. veya istediğimiz herhangi bir değişikliği yaptırabiliriz.
*/

/*
for eatch : 
forEach()net ve öz bir şekilde bir dizi üzerinde yineler. Öncülünden ( fordöngü) farklı olarak,
 döngünün dizinin uzunluğu boyunca çalışması gerektiğini belirtmeniz gerekmez. Sadece yapıyor!

forEach() Dizi yöntem, bir dizideki her bir eleman için bir kere bir işlev gerçekleştirir. 
Üzerinde yinelediğiniz orijinal diziyi değiştirmez. Dizi olacağı bu araçlar değil değiştirin.
*/
let dizii = [
  "baran",
  "kerem",
  'azat'
]
dizii.forEach(function (par) {
  console.log(par);
})
/*
while göngüsü :
while döngüsünde biz bir koşul belirtiriz. ve bizim belirttiğimiz koşul karşılandığı takdirde 
while döngümüzün içerisine girilir ve göngü başlatılmış olur.
*/
let aa=1;
 while(aa < 5) {
     
    console.log(aa + '--'); 
    aa ++
// burada aa değerimiz 5'ten her küçük olduğu anda göngü tekrar başlatılır. ve aa++ komutu ile göngü her döndüğünde 1 arttırılır.

};



/*
do while göngüsü:
bura while göngüsüne çok benzer bir yapı vardır ama biraz farklılıklar gösterir.
*/
let bb=1; 
do{ 
    console.log(bb); bb++
} while(bb<5) ;
/*
burada bir koşula bağlı kalmaksızın önce do komutunun içerisindekiler çalıştırılır.
do içerisindeki komutlar okunduktan sorna while koşulunun olduğu bölüme gelinilir ve while koşulunun true/false
değerine bakılır.

while true verir ise göngüden çıkılır. ama while false verirse yani koşul karşılanmaz ise do göngüsünün içerisndeki
kodlar bir kez daha çalıştırılır.
bu while döngüsünün true değer vermesine kadar gider.
*/


/*
break ve continue :
break ve continue döngü yapılarında bizim oldukça işimize yarayan 2 konudur.
bunları tek tek anlatmaya çalışalım.

break : (işlemi durdur)
eğer bir döngüde işimizi bitirirsek ve döngüden çıkılmasını istiyorsak break komutunu kullanabiliriz.
*/

for (let ff = 0; ff < 10; ff++) {
  if (ff === 6) { // burada ff değerimizin 3'e eşit olduğu koşuluda if'in içindeki kodun çalıştırılmasını istediğimizi belirtiyoruz.
    break; // burada döngüden çıkılmasını istediğimizi belirtiyoruz (buradaki döngümüz if değil for döngüsüdür.)
  }
 console.log("The number is " + ff )
}

/* 
continue : (devam etmek)
continue bir döngü içerisinde kullanıldığı herhangi bir yerde döngüyü yeniden başlatılmasını istediğimiz anlamına gelir.

*/


for (var gg = 0; gg < 12; gg++) {
  if (gg < 4) 
{ // burada gg değerimiz 4'e eşit olduğu durumda çalıştırılmasını istediğimiz kodlar yer alır.
  continue; // burada gg değerimiz 4'e eşit olunca döngünun geri kalanını çalıştıma ve döngüyü yeniden başlat komutunu veriyoruz.
}
console.log(gg)
}



