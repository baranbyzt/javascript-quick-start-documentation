

   // Tek satırlı yorumdur
   
      /*

	Çok satırlı yorumdur
    
      */



/*

javasicript içerisinde  ";" ifadesini yazdığımız kodların sonhuna ekleyebilirsiniz.
ya da eklemeyebilirsiniz. js bu konudaki tercihi sizlere bırakmıştır.
(kod okunabilirliği açısından  ";"  ifadesini kodlarınızın sonuna eklemenizi öneririm.)

*/


var sayi1, sayi2, toplam;
sayi1 = 2;
sayi2 = 3;
toplam = sayi1 + sayi2;

console.log(toplam)

/*

javascript yukarıdan aşşağıya doğru okunan bir dildir. yukarıdaki örnekte de gördüğünüz gibi önce
sayi1 ve yasi2 değişkenleriniz tanımlandı ardından onlara bir değer verdikten sonra
toplam değişkenine yeni değerler tanımlayıp bunu geliştirici konsolumuzda gösterdik.

*/



/*
toString : intager değerinde bir değeri String bir değere dönüştürmek için kullanılır.
*/
let num = 15;
let n = num.toString();
console.log(n)


/*
şimdi index.js dosyamızın içerisinden new.js dosyamızın içerisinde bulunan değişkenleri seçelim 
ve index.js dosyamız içerisinde kullanalım.
nor: ES6 ve sonrasındaki javasicript versiyonlarında daha farklı yapılar kullanılıyor (export/import) 
ama şimdilik bu yöntemi öğrenelim.
*/


console.log(element_abc);

/*
burada kodumuzun hata vermemesi için HTML içerisinde new.js dosyamızı
index.js dosyasından daha önce porjemize dahil etmeyi unutmayalım.
*/



// burada bektick ler arasına ${} işareti ile özel değerlerimizi çekip string ifade şeklinde yazdırabiliriz.
let ozel_sayi = 23;
console.log(`sayı :  ${ozel_sayi}`)