
/*
DOM nedir (Document Object Model)

HTML DOM ile, javaScript kullanarak bir HTML belgesinin tüm elementlerine ulaşıp, değiştirebilirsiniz.
Tarayıcı bir Web sayfasını yüklendiğinde DOM nesnesini de oluşturur. Yüklenen DOM, belge için bir dizi 
düğüm ve nesne sunmaktadır. Düğümler ile ayrıca olaylar ve tetikleyiciler eklenebilir. Özetle programlama
dilini WEB sayfasına bağlamak için kullanılır.

 DOM yapısını bir ağaca benzetebiliriz. bir başlangıç noktası ve dalları olan bir ağaca.
JavaScript, Nesne Modelini kullanarak  HTML belgesini düzenlemek için gerekli tüm yetkilere sahiptir. 
Aşağıdaki gibi belge üzerinde tüm işlemleri gerçekleştirebiliriz.

+ JavaScript sayfadaki tüm HTML öğrelerini değiştirebilir.
+ JavaScript sayfadaki tüm HTML niteliklerini değiştirebilir.
+ JavaScript sayfadaki tüm CSS stillerini değiştirebilir.
+ JavaScript mevcut HTML belgesindeki nitelikleri kaldırabilir.
+ JavaScript yeni HTML öğeleri ve nitelikleri ekleyebilir.
+ JavaScript sayfadaki tüm HTML olaylarına tepki gösterebilir.
+ JavaScript yeni HTML olayları oluşturabilir.

bu bölümde DOM'da kullanabileceğimiz basit şeylerden bahsedeceğiz.
ardından DOM'un ana elemanlarını kullanarak html tagrarımıza erişip orada değişiklikler yapacağız.

+ getElementById()
+ getElementsByClassName()
+ getElementsByTagName()
+ querySelector()
+ querySelectorAll()

*/



/*
DOM manipülasyonundaki "document" ne işe yarıyor ?

document : bir html içerisindeki her şeye erişebilmesini sağlar
html öeğerine header,body,div ve daha fazlasına erişebiliriz. ve onları değiştirebiliriz.
*/

// burada bütün html ve daha fazla içeriğine ulaşabiliriz.
console.log(document);

// burada bizim domain adresimize ulaşabiliriz. --> 127.0.0.1
console.log(document.domain);

// burada sayfa başlağımıza ulaşabiliriz. --> javasicript DOM-1
console.log(document.title);

// burada sayfamızın büyün domainine ulaşabiliriz. --> http://127.0.0.1:5500/DOM%20manipulation%2010/part-1/index.html
console.log(document.URL);

// burada html elementlerimizden head tagı altındaki değerlerimizi döndürür.
console.log(document.head);

// burada html elementlerimizden body tagı altındaki değerlerimizi döndürür.
console.log(document.body);

//  buradaki dizide bütün html içeriğine ulaşabiliriz.
console.log(document.all);

//  burada bütün dizi şeklindeki elemanlarımıza tek tek ulaşabliriz.
console.log(document.all[3]);


// console.dir içerisindekileri bir dizi olarak konsola yazdırır.
console.dir([1,2])

// console.log ise içerisindekileri bir nesne olarak konsola yazdırır.
console.log([1,2])

console.log("----------------------------------------------------------");



/*
getElementById() : --> id niteliği ile eşleşen ilk kaydı getirir.

Bir HTML etiketine erişmek için kullanılan en sık yöntemlerden biridir. Etiketin id niteliğini kullanır.
id sayfada sadece birkere tanımlanabileceği için  sadece id değeri ile getElementById() kullanarak ulaşabiliriz.
*/
 
/* burada degisken_1 isimli oluşturduğumuz değerin içerine document nesnemizin altındaki getElementById()
methodu ile eriştik ve burada id'si id_1 olan değişkene ulaştık
*/
let degisken_1 = document.getElementById("id_1");

// burada id_1 id'li değişkenimizi konsola yazdırıyoruz.
console.log(degisken_1)

// burada degisken_1 değerinin innerHTML değerini konsola yazdırıyoruz.
console.log(degisken_1.innerHTML)

// burada yeni değerler ekleyebiliriz. veya tamamen değiştirebiliriz.
degisken_1.innerHTML = "yeni değer"

/*
bizim birçok attiribütümüz var ve biz bunları kullanarak çeşitli işlemler yaptırabiliriz. 
bunlara daha sonra değineceğiz. şimdilik değişken seçme işlemlerine değiniyoruz.
*/




/*
getElementsByClassName() --> class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.

biz sayfamız içerinde birden fazla class tanımlayıp bu değerlere çeşitli işlemler yaptırmak isteyebiliriz.
burada class değerlerini seçebilmemizi sağlayan özelliğimiz getElementByClassName() methodumuzdur.
*/

/*
burada degisken_2 isimli oluşturduğumuz değerin içerine document nesnemizin altındaki getElementsByClassName()
methodu ile eriştik ve burada class_1'si class_1 olan değişkene ulaştık

not: bizim methodumuzun yanına [0] yazmamızın sebebi class anahtar değerine sahip birçok  değer 
olabileceğinden class_1 classına sahip değerlerin hepsi bizlere bir dizi halinde gelirler. ve bizde
aralarından ilkini veya sonuncusu gibi istediğimiz değeri seçebiliriz.
*/
let degisken_2 = document.getElementsByClassName("class_1")[0];

// degisken_2 değerini ekrana yazıyoruz.
console.log(degisken_2);


/*
getElementsByTagName() --> etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.

bu bizim html sayfamız içerisindeki HTML taglarını seçip kullanabilmemize yarar.
*/

// burada small tegini seçtik ve degisken_3 degerine atadık
let degisken_3 = document.getElementsByTagName("small");

// burada da birçok small etiketi o lduğu için bize dizi halinde gelenler arasından kaçıncı indisteki değeri seçeceğimizi belirliyoruz.
console.log(degisken_3[0])

function changeStyling() {

// buton tıklandığında seçtiğimiz değişkenlere style atamasını yapıyoruz.
degisken_3[0].style.background = 'yellow';
degisken_3[1].style.background = 'blue';
degisken_3[2].style.background = 'green';
degisken_3[3].style.background = 'red';

degisken_3[4].style.background = 'black';
degisken_3[4].style.color = 'white';
degisken_3[4].innerHTML = "this is new ";
}

/*
querySelector() -->  seçici ile eşleşen ilk kaydı getirir.

HTML içerisindeki herhangi bir tag ,id veya class'a ulaşabilir.
ve bunları dilediğimiz gibi güncelleyebilir veya tamamen kaldırabiliriz.

querySelector() methodu eşleştiği ilk öğeyi bize getirir.
*/
console.log(document.querySelector(".aa"));

/*
querySelectorAll() --> seçici ile eşleşen tüm kayıtları dizi olarak getir.

en çok kullanılan element genelde querySelectorAll() methodudur.
querySelectorAll() methodumuz bizlere HTML içerisnde istediğimiz herhangi bir class,id veya tag'a ulaşabilmemizi sağlar.
querySelector'den ayrılan yönü ise eşleştiği elemanların ilk elemanını getirmek yerine hepsini getirir ve biz aralarından seçim yapabiliriz.
*/

console.log("-----------------------------------------------------------------------");

// burada class'ı h3_1 olan <h3> tagımızı seçiyoruz ve style ataması verip konsola yazdırıyoruz.
let degerler_4 = document.querySelectorAll(".h3_1");
degerler_4[0].style.background = "blue";
console.log(degerler_4[0]);

// burada id'si h3_2 olan <h3> tagımızı seçiyoruz ve style ataması verip konsola yazdırıyoruz.
let degerler_5 = document.querySelectorAll("#h3_2");
degerler_5[0].style.background = "yellow";
console.log(degerler_5[0])

// burada <h3> tagımızın 3. elemanını seçiyoruz ve style ataması verip konsola yazdırıyoruz.
let degerler_6 = document.querySelectorAll("h3");
degerler_6[2].style.background = "green";
console.log(degerler_6[2])



