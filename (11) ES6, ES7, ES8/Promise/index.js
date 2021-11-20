

/*
Promise: “Söz vermek”

Promise kelime manasıyla “söz vermek” olarak geçiyor. Yani biz bunu kullandığımızda fonksiyonumuz bize bir söz veriyor.
 Ve mutlaka bize işin sonucunu bildiriyor. Yani başarılı olsa da başarısız durumunda kalsa da bize bir çıktı vermek zorunda.
  Şimdi çalışma mantığına bakalım.
*/

/*
Neden Promise kullanmalıyım?

Bunun hem çok kısa hem çok uzun cevabı olabilir. Ama şöyle düşünelim.
 Kullanıcı adı kontrolü yaptınız daha sonra giriş saatini veritabanına ekleyeceksiniz daha sonra 
 kullanıcıya ait bilgileri getireceksiniz diyelim. Bunların her birini bir öncekinin “resolve” olduğu 
 yerde yaparsak bir problem olmayacaktır. Çünkü eğer kullanıcı adı yanlışsa diğer kısımlara hiç girilmeyecek bile.
Diyelim kullanıcı adını kontrol ettikten sonra veritabanında sıkıntı oluştu: kullanıcı adı doğru ama 
veritabanına giriş saatini eklerken hata oluşacak ve kullanıcıya ait bilgileri getirmeye hiç çalışmayacak. 
Büyük çapta bir projelerde sadece if else yetersiz kalacaktır.

ör: 
kullanıcı giriş ekranında kullanıcı verilerini alıyoruz ve bizim istediğimiz standartlara uygun olup olmadığını
then ile değerlendiriyoruz. eğer uygun ise bunu bir sonraki işleme yani veritabanı ile bağlantı kurarak
veri tabanına gönderiyoruz.
*/

/*
then,cath ve finally

then :
 eğer bizim verdiğimiz bir değer doğruysa aşşağıdaki işlemden devam eder ve bizim programımızda 
belirlediğimiz kadar ilerler.

catch :
ama eğer bir sorun ile karşılaşırsa catch içerisine düşer ve kurduğumuz sistem daha fazla
then içerisine girmeden kendini catch içerisinde sonlandırır.

finally :
bizim yazdığımız promise yapısında then ya da catch komutlarımızın çalışmasından bağımsız olarak
işlemimiz sonlandığında (then ya da catch içerisinde) her daim finally içerisindeki kod bloğumuz 
çalıştırılacaktır.
*/


/*
resolve : 
resolve promise yapımızın then ve catch değerlerimiz ile işleme girmeden önce her şeyin yolunda olduğunu bildiren bir değerdir.
resolve true değerini koruduğu sürece projemizde than yapıları ile devam edecektir.

reject :
reject değerimiz eğer aktif ise bir şeyler yanlış gidiyor manasına gelir ve hiç then yapılarına uğramadan direk
catch değerine ilerler ve işlem sonlanır.
*/

/*
burada bir promise  tanımlıyrouz ve bunu bir p değişkeni içerisine atıyoruz.
ardından promise'nin içerine kullanabileceğimiz bir function tanımlıyoruz ve içerine resolve ve reject yerleştiriyoruz.
(bunlar başka herhangi isimler ile yerlerine yerleştirilebilirler) 
*/

// promise yapısının en basit şablonu :
function kitchen(){

  return new Promise ((resolve, reject)=>{
    if(true){
       resolve("promise is fulfilled")
    }

    else{
        reject("error caught here")
    }
  })
}

kitchen()  // kodu çalıştır.
.then()    // sıradaki adım
.then()    // sıradaki adım
.catch()   // hata sonucunu yakalar
.finally() // promise yapısı bittikten sonra çalışır. (tercihendir.)
// -----------------------------------

var p = new Promise(function(resolve,reject) {
// ardından bir if/else ile resolve veya reject eğerlerimizden hangisi ile işlemlerimize başlayacağımızı tanımlıyoruz.
    if(false) {
        resolve('success');
    }
    else {
        reject('erorr');
    }
    
    });
    
    // eğer resolve değeri dönerse promise içerinden resolvenin aldığı değer data nesnesine tanımlanır ve ilk then yapısı çalışır.
    p.then(function(data){
        console.log(data)
    }).catch(function(error){
        console.log(error)
    });
    
console.log('-----------------------------------------------------');

/*
burada da aslında benzer bir değer vardır ama ilk örneğimizden farklı olarak then değerimiz true değerini
koruduğu müddetçe kendi içerisindeki işlemi sonlandırdıktan sonra return değeri ile kendinden bir sonraki
then değerine veri döndürür ve işlemleri devam etmesini sağlar.
*/

let countValue = new Promise(function (resolve, reject) {
    resolve(10);
    // burada promise yapısı içerinden herhangi bir extra işlem yaptırmadan resolve değerini döndürüyoruz ve değer olarak da 10 değerini veriyoruz.
  });
  
  
  countValue // hangi promise değerleri için işlem yapıyor isek onun değerini çekiyoruz ve işlemlerimize başlıyoruz.
    .then(function successValue(result) {
      console.log(result);
// ilk then fonksiyorumuz resolve'denj aldığı değeri resul değişkenine atıyor ve bunu konsola yazdırkıttan sonra return ile değişiklik yaptıktan sonra döndrüyor.
      return result*result
    })
  // 2. then değerimiz yeni değeri alıyro ve result değişkenine aktararak başka bir işlem yapıyor.
    .then(function successValue1(result) {
      console.log(result);
    });
// istediğimiz kadar then methodu yazabiliriz. ve yazdığımız projeye istediğimiz işelemleri yaptırabiliriz.

console.log('-----------------------------------------------------');

/*
bu örnekte aslında promise'yi güzel özetleyen bir örnektir.

tom'un annesi eğer mutluysa tom'a telefon alacaktır.
willGetNewPhone isiminde bir promise nesnesi tanımladık ve içerisine phone 
nesnesi tanımlayıp içerisine değerlerimizi yerleştirip resolve ile döndürk.

tomun annesininin mutlu olup olmadığını isMomHappy değişkeni ile belirledik
ardından promise içerisinde if/else sorgusu ile then/catch yapılarına pasladık.

ardından askMom() function'u ile than/catch yapısını yazdık.
promise içerinden resolve döneceğinden resolvenin değeri otomatik olarak ilk
then içerine tanımlanır.

resolvenin içerisinde phone nesnesi olduğundan dolayı konsola telefon nesnei yazıdırılır.
*/

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject) => {
if(isMomHappy) {
    const phone = {
        name : 'iphone 8',
        price : 4045,
        color : 'red'
    }
    resolve(phone);
}else {
    const error = new Error('mom is not happy');
    reject(error);
}
})


const askMom = function(){

willGetNewPhone
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})  
// en son kısım olarak ta finally kısımı çalışır demiştirk. burada da istediğimiz bir işlem yaptırabiliriz.
.finally( function param() {
    console.log('finally çalıştır.')
})


}

askMom();


console.log('-----------------------------------------------------');

/*
final örneği :

burada iç içe promise örneği verilmiş.
projemizin yapısına göre bu şekilde bir mimari de tasarlayabiliriz.
*/

let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
      resolve('Cleaned The Room');
    });
  };
  
  let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + ' remove Garbage');
    });
  };
  
  let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve( message + ' won Icecream');
    });
  };
  
  cleanRoom().then(function(result){
      return removeGarbage(result);
  }).then(function(result){
      return winIcecream(result);
  }).then(function(result){
      console.log('finished ' + result);
  })








/*

*/