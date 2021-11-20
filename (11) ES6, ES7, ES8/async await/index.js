



/*
async await

async ve await ES7 ile birlikte asenkron programlama yapmayı daha da kolay hale getiren anahtar kelimelerdir.
async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken await ise sonucu Promise olan fonksiyonun bitmesini bekler.

await : await yukarıdan aşşağıya akan kod okuma mantığında sunucudan bir veri beklerken veya uzun bir işlemin yapılması beklenirken
        onu await içerine alırız ve bu işlem sonlanınca ana işleme müdehale ederek sayfayı yenilemeden bölgesel güncelleme yapar.
async : bir fonksiyonun başında kullanılır.   ve yapının başlaması için bir başlangıç kodudur.

not: await bir konksiyounun içinde kullanılırken fonksiyonun async şeklinde tanımlanması zorunludur.
*/


async function myDisplay() {
    // buradan bir promise tanımlıyoruz 
    let myPromise = new Promise(function(resolve) {
// burada 1 saniye sonra çalışacak bir fonksiyon tanımladık
      setTimeout(function() {
          // 1 dakika sonra resolve yani olumlu cevap değeri döndürülür.
          resolve("I love You !!");
        }, 1000);
    });
    // burada id'si demo lan tag'ın içerisine myPromise fonksiyonumuzun içinden gelen değer gelecektir.
    // burada tanımlanan await'in anlamı cevap gelene kadar beni bekle manasındadır.
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();

  // --------------------------------------------------------------------

  /*
  async await ile en çok karşılaştırılan yap promise yapısıdır.
  onun için aynı işlemi fake bir api ile karşılaştıralım.
  */


  // async await örneği


  // await yapısını içeride kullanabilmemiz için fonksiyonun içerisine async kullanıyoruz.
  async function toplaGel() {

   /*
    sonuc değişkeninin içerinde getch api ile fake bir api çekiyoruz.
    bu sırada da await yapısı ile uzak apiden veri gelene kadar beklemesini söylüyoruz.
    burada kodlarımızın tamamı okunur ama buradaki cevap gelene kadar hata vermeden bekle manasına geliyor.
        await ile söz veriyoruz ben sana istediğini vereceğim ama biraz bekle manasına gelir.
   */
    let sonuc = await fetch('https://jsonplaceholder.typicode.com/users');
    // gelen sonucun geldiğinde bunu json formatına çeviriyoruz. ama sonuç gelmez ise onu da beklediğimiz için await koyuyoruz.
    let veriler = await sonuc.json();

    console.log(veriler);
  }

  toplaGel();

  // promise örneği 
// fetch yapısı ile veri çekiyoruz.
  fetch('https://jsonplaceholder.typicode.com/users')
  // then yapısı ile veri gelene kadar bekliyoruz ve geldikten sonra bunu json formatına çevirip
  // return ile aşşağıdaki then yapısına gönderiyoruz.
    .then(sonuc => { return sonuc.json(); })
    // ardından konsola yazdırıyoruz.
    .then(veriler => console.log(veriler));


      // ----------------- örnek-1 ---------------------------------------------------

      let adi = null;

      // Uzun bir AJAX veya Fetch API isteği
      function islem() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              // Uzun işlemler
              adi = 'Yusuf SEZER';
              resolve();
            } catch (hata) {
              reject(hata);
            }
          }, 2000);
        });
      }
    
      // Yazdırma işlemi
      function yazdir() {
        setTimeout(() => {
          console.log(adi);
        }, 1000);
      }
    
      async function calistir() {
        await islem();
        yazdir();
      }
    
      calistir();



// ------------------- örnek-2 -----------------------------------------------------------------


//  burada bir promise tanımladık ve olumlu değeri resolve ile döndürdük.
function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve( console.log("which topping would you love?") )
  
      },3000)
    })
  }
// async fonksiyonu ile bir fonksiyon işlemi yaptırıyoruz.
  async function kitchen(){

    // önce bunlar çalışılır.
    console.log("A")
    console.log("B")
    console.log("C")
    
    /*
buradaki yapı çok dikkat etmemiz gerekiyor.
burada promise'den gelen değerin beklenmesi gerekiyor. bu bizim için 3dk kadar bir süre sürecektir.
bu arada bizim fonksiyonumuzun daha altındaki kdolar çalışmaz await'ten gelecek olan değerin döndürülmesi beklenir.

ama async ile tanımladığımız fonksiyonumuzun sayfamızdaki diğer kodların okunmasına engel olmaz.
sayfa zaman kaybetmeden diğer kodlarımızı okur.
await'ten değer dönünce de o değeri ve await'in altında yazdığımız diğer kodlarımızı okumaya devam eder.
ve gerekirse sayfayı güncellemeden bölgesel güncellemeler yapar.
    */
    await toppings_choice()
    
    console.log("D")
    console.log("E")
  
  }
  
  // Trigger the function
  
  kitchen();

  // 2. olarak burası kullanılır.
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")