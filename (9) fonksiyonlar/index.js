


/*
fonksiyonlar javasicriptin es6 sıtandartları ile değiştirilmiştir.
biz burada eski function ları anlatacağız. yeni es6 standartları ile gelen functionları
daha sonradan işleyeceğiz.
*/

/*
fonksiyonlar javasicriptin kalbidir.
bir işlemi tekrar tekrar yaptırmak yerine bu işlem için özel bir fonksiyon yazarız ve bu fonksiyonu
gerekli her yerde kullanabiliriz.

mesela veritabanına sürekli istekte bulunan bir kod bloğumuz var. ve bu kodları yazılımımızın bir çok yerinde kullanıyoruz.
kod karmaşasının önlenmesi ve okunabilirliği arttırmakk için onunla alakalı bir function yazarız ve bu fonksiyonu kullanırız.

fonksiyonların iki farklı çeşidi vardır. bunlar değer almayan fonksiyon ve geriye değer döndüren fonksiyon olarak ikiye ayrılır.
*/





/*
geriye depğer döndürmeye fonksiyon :
bu fonksiyon dışarıdan herhangi bir değer almaz ve sadece belirli bir işlemi yapmak için kullanılırlar.
*/


function bubirfunction () {
    console.log(' bu bir geriye değer döndermeyen foksiyondur ');
  }


bubirfunction();

/*
geriye değer döndüren fonksiyonlar :
bu fonksiyonl dışarıdan değer alır ve bu alınan değerler ile farklı farklı işlemler yaparak bunları dışarıya
return ile değer döndürmeye yarayabilir.
*/

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

  console.log(myFunction(12,2));




  function ShowMessage(firstName, lastName) {
    console.log("Hello " + arguments[0] + " " + arguments[1]);
}

ShowMessage("Steve", "Jobs"); 





















/*

*/








