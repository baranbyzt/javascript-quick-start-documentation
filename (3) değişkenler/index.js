


/*
javasicript'te değişken tanımlanırken bir değişken ve bir değer olmak üzere 2 değişkenden oluşturulur.

değişken tanımlanırken
+ ilk karakter sayı olmaz
+ değişken adlarının başında harf kullanamassın.
+ değikenlerde (_) ve ($) kullanılabilir.
+ değişken adları büyük ve küçük harfe duyarlıdı. javasicriptte adSoyad ve AdSoyad farklı değişkenlerdir.
+ if.var,let,for,while gibi değişkenler özel isim olduklarından değikenlere isim verilirken kullanılamazlar.
*/

var adSoyad;
var tckn;
var dogumTarihi;
var a;
var b;

/*
Değişken veri tipleri:

String: 
+ (") ve (') işaretleri kullanılabilir.
+ string veri tipinde txt format daha çok tercih edilebilir ama sayı değerleri de girilebilir.
*/

let degisken1 = 'bu bir değisken 1 dir.'
console.log(degisken1)
/*
Number:
+ içerisinde sayısal bir veri barındırır.(.) işareti kullanarak ondaliklı sayı tanımlayabiliriz
+ örnek olarak yaş,yıl,gün ve sadece sayısal veriler kullanılabilir.
*/
let degisken2 = 2134556;
console.log(degisken2);

/*
Boolean:
+ boolean değişken tipi sadece 2 farklı değer alabilir (true/false) evet/hayır  var/yok gibi düşünebilirsiniz.
+ örneğin: seb 30 yaşındamısın ? (true) böylece 30 yaşında olduğuna evet yanıtı gelmiştir.
*/
let degisken3 = true;
console.log(degisken3);

/*
Dizi (Array) :
+ aynı veri tipinde istediğimiz kadar oluşturabiliriz.
+ [] köşeli parantezler içerisinde kullanılabilir.
örneğin: Türkiye'de yer alan tüm şehirlerin isimlerini değişkende tutmak istersek şehir1,şehir2 gibi...
*/
let sehirler = [ "İstanbul", "Antalya", "Ankara", "İzmir" ];
console.log(sehirler);

/*
Nesne (Object) : 
+ object süslü parentezler içerisinde kullanılır.({})
+ önreğin : farklı veri tiplerindeki belli bir öğrencinin verilerini bir arada tutmak için kullanılırlar
*/

var ogrenci = { 
    ad : "Gökhan",
     soyad : "Kurt", 
     bolum : "Yazılım", 
     yas : 33, 
     but : false
    };
console.log(ogrenci);



/*
array ve nesne gibi veritiplerine daha sonradan daha detaylı bahsedeceğiz.
*;/
























