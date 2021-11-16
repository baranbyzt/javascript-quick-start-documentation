


/*
javasicript'te mantıksal operatörler çok önemli bir yere sahiptir.
çeişitli hesaplamalar yaparken bizlere yardımcı olurlar.

1) Matamatiksel operatörler : 
+ toplama operatörü : +
+ çıkartma operatörü : -
+ çarpma operatörü : *
+ bölme operatörü : /
+ mod alma operatörü : % (bir değerin başka bir ile bölümünü küsüratlı verir.)
+ (++a) önden 1 arttırma operatörü, a'nın değerini 1 arttırır, sonra bu değeri f'ye atar. 
+ (a++) sondan 1 arttırma operatörü a'yı g'ye atar, sonra a'nın değerini 1 arttırır.
+ (--a) önden 1 eksiltme operatörü a'nın değerini 1 eksiltilir, sonra bu değeri h'ye atar.
+ (a--) sondan 1 eksiltme operatörü a'yı i'ye atar, sonra a'nın değerini 1 eksiltir.
*/
var a;
a = 0;	// normal atama
a += 6;	// toplayarak atama. a = a+6'ya denk.
a -= 6;	// çıkararak atama. a = a-6'ya denk.
a *= 6;	// çarparak atama. a = a*6'ya denk.
a /= 6;	// bölerek atama. a = a/6'ya denk.
a %= 6;	// mod alarak atama. a = a%6'ya denk.

/*
String operatörleri :
+ metinleri yanyana ekleme
*/
var s="metin1 "+"metin2";
console.log(s);

/*
Karşılaştırma operatörleri :
+ (a = b) bu bir atama operatörüdür. a'nın değerini b'ye atar.
+ (a == b) burada a ve b değerlerinin eşit olup olmadığı karşılaştırılır. eşit ise true değer döner.
+ (a === b) burada a ve b değerleri hem türleri hem de değerleri eşit mi diye kontrol edilir. ture/false değer döner
+ (a != b) burada a ve b eşit değil mi ? a ve b eşit değil ise true değer döner.
+ (a > b) a,b'den büyük mü ? eğer b,a'dan büyük ise false değer döner.
+ (a < b) burada b,a'dan büyük mü kontrolü yapılır.
+ (a >= b) burada a,b'den büyük veya b'ye eşit mi kontrolü yapılır.
+ (a <= b) a,b'den küçük veya b'ye eşit mi ?
*/

/*
Mantıksal operatörler :
var a = true; ,var b = true; için
+ var c = a&&b a ve b'nin ikiside true ise true,aksi halde false değer döndürür.
+ c=a||b a ve b'nin en az birisi true ise true, aksi halde false değer döndürür.
+ c !=a; a'nın değeri true ise false, false ise true üretir.
*/

