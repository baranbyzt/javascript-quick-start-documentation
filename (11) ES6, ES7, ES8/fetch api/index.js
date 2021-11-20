



/*
Javascript fetch api nedir, nasıl kullanılır

Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. 
Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar. Promise tabanlı olduğu için async bir yapıdır. 
Promise ES6 ile gelen bir özelliktir. Callback fonksiyonlarının yerine kullanabiliyoruz. Fetch API'da promise yapısını
kullanarak bizim Ajax'ın yerine kullanabileceğimiz bir yapı sunuyor. Ayrıca Fetch API window objesi ile birlikte geliyor.
Eğer window objesini konsolda yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.

Fetch API ile yapabildiğimiz şey bir veri sunucudan geldikten sonra işlem yapabilmektir.
 Peki bu ne demektir? Diyelim ki bir yere gittiniz ve sipariş veriyorsunuz. Kasadaki kişi siparişi
 aldıktan sonra kasada beklersek bir sonraki kişinin siparişinin vermesini engelleriz. Belki de bir
 sonraki kişinin siparişi çok daha hızlı hazırlanabilirdi. Bu durumda şunu da unutmamak lazım biz ne 
 zaman sipariş ettiğimiz ürünleri gidip almak isteriz? Tabii ki siparişimiz hazırlandıktan sonra.
 Burada aslında yeni gelen kavramlardan bir tanesi olan Promise'i kullanırız.

 fetch() : 
 bu yöntem dışarıdan bir kaynak (URL) almak için kullanılır.

 Headers :
 response:/request başlıklarını temsil ederek bunları sorgulamamızı ve 
 sonuçlara bağlı olarak farklı eylemler gerçekleştirmemize olanak tanır.

 request :
 bir kaynak talebini temsil eder.

 response :
 bir isteğe verilen yanıtı temsil eder.

 fetch bir api, bir getirme ve gönderme işlemi olduğundan CRUD  işlemlerine de kısaca değinmek istiyorum

GET  — API'den veri alın. Örneğin, kullanıcı adına göre bir twitter kullanıcısı edinin.
POST  — Verileri API'ye aktarın. Örneğin, ad, yaş ve e-posta adresiyle yeni bir kullanıcı kaydı oluşturun.
PUT  — Mevcut bir kaydı yeni verilerle güncelleyin. Örneğin, bir kullanıcının e-posta adresini güncelleyin.
DELETE  — Bir kaydı kaldırın. Örneğin, bir kullanıcıyı veritabanından silin.
*/

/*
basit bir fetch api örneği vererek olayın nası çalıştığını anlamaya çalışalım.
*/

// fetch içerisine url'mizi vererek buradaki url üzerinde işlem yapmak istediğimizi bilgiriyoruz (CRUD)
fetch('https://jsonplaceholder.typicode.com/todos/1')
// ardından bir promise yapısı ile url mizin altında gelen verileri ayaırarak işlem yaptırmaya başlıyruz
// buradaki yapı async/await yapısıyla da basitçe kurulabilirdir. biz burada promise kullandık.
  .then(response => response.json()) // ardından bize gelen response içerisindeki json() methodu ile json formatına çevirdik.
  .then(json => {
      // ardından json formatındaki veriyi json diye bir değişkene atadık ve url altında gelen kulçanıcı bilgilerini ayırarak konsola yazdırdık.
    console.log(json.userId )
    console.log(json.id )
    console.log(json.title )
    console.log( json.completed)
  })
  // not : biz header içerisde herhangi bir method belirlemez isek otomatik olarak GET default değeri ile işleme devam ederiz.



// --------------------------------------




// burada fetch klasörü altındaki index.txt verisinin yolunu fetch'in içerisine tanımlıyrouz.
fetch('index.txt')
// ardından dönen değeri response değişkeiyle alıp bir fonksiyorun içerinde text() methodu ile txt formatına çeviriyrouz.
.then((response) => response.text())
.then((data) => {
    // ardından data değişkeinne dönen cevabı alıp bunu başka bir arrow function içerisinde data içerinde konsola yazdırıyoruz.
  console.log(data) 
})
.catch(error => console.error(error))// olası bir hata durumunda çalışacak yapı



// json.json dosyamızın içerisindeki json formatındaki verileri üzerinde işlem yaptığımızı fetch içerinde bildiriyoruz.
fetch('json.json')
.then((response) => response.json()) // vburada gelen değerlerin bir json formatında işlem yaptırmak istediğimizi belirtiyoruz.
.then((data) => {
    // ardından data değişkeni ile konsola yazdırıyrouzç.
  console.log(data) 
})
.catch(error => console.error(error)) // olası bir hata durumunda çalışacak yapı
.finally( console.log("burası her zaman çalışır"));





/*
fetch içerisindeki 2. parametreler olan diğer değişkenleri (method,body,headers) açıklamaya çalışalım.

method: CRUD işlemlerinden hangisini yaptırmak istiyorusak onu belirtiyoruz.
body: göndermek istediğimiz içeriği burada tanımlıyrouz (json,txt,video,jpg vs..)
headers: burada genel olarak fortmatları tanımlıyoruz. mesela UTF-8 türkçe içerikleri de destekleyen bir yazım standartıdır.
*/



// data to be sent to the POST request
let _data = {   
    title: "foo",
    body: "bar", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))


let _data = { // burada POST ile göndermek istediğimiz şeyin içeriğini yazıyrouz.
    title: "foo",
    body: "bar", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST", // veritabanına gönderme işlemi yaptırmak istediğimizi bildiriyoruz.
    body: JSON.stringify(_data),  // json fortmatındaki veriyi string'e dönüştürüyoruz.
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));
  
