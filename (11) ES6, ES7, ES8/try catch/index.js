


/*
try catch :
hataları yakalamak ve hataları yönetmek için kullanılırlar.

try : kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.
catch : yazdığımız kodlarda çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.
throw : anahtar kelimesi özel hata oluşturmayı sağlar.
finally : anahtar kelimesi hata oluşması veya oluşmaması durumunda çalışacak kodları yazdırmak için kullanılır.

 
*/

try {
   console.log(' Kodları test etmek için çalıştırılacak kod bloğu');
}
catch(e) { // dışarıdan aldığı e değeri hata durumunda konsola yazdırmak  için kullanılan bir hata nesnesinin değeridir.
    console.log('Hata oluşursa çalıştırılacak kod bloğu');
}


/*
throw
JavaScript kodları çalıştırılırken hata meydana geldiğinde JavaScript durur ve throw hata mesajı üretir.
JavaScript hata oluştuğunda name ve message özelliklerine sahip Error nesnesi oluşturacaktır.
JavaScript throw anahtar kelimesi ile özel hata oluşturabiliriz.
JavaScript hata mesajları metin, sayı, mantık ve nesne türünden olabilir.
*/
var yas = prompt();

try {
  if(yas == "") throw "Boş değer";
  if(isNaN(yas)) throw "Sayı değil";
  yas = Number(yas);
  if(yas < 18) throw "Yaşın 18'den küçük";
  if(yas > 65) throw "Yaşın 65'den büyük"
}
catch(hata) {
  alert(hata);
}

/*
finally
JavaScript finally anahtar kelimesi sonuç ne olursa olsun çalıştırılacak kodların yazılmasını sağlar.
*/
try {
    console.log(' Kodları test etmek için çalıştırılacak kod bloğu');
 }
 catch(e) { // dışarıdan aldığı e değeri hata durumunda konsola yazdırmak  için kullanılan bir hata nesnesinin değeridir.
     console.log('Hata oluşursa çalıştırılacak kod bloğu');
 }
 finally {
     console.log("burası her zaman çalışacak bir finally methodudur.")
 }
 

 var adi = "Yusuf";
 try {
   adi.toPrecision(100);
 }
 catch(hata) {
   alert("Hata Türü : " + hata.name);
   alert("Hata Mesajı : " + hata.message)
 }