


/*
nesneler :
Bir nesne, bir referans veri türüdür. Bir referans değeri atanan değişkenlere bu değere bir referans veya bir işaretçi verilir. Bu referans veya işaretçi,
nesnenin depolandığı bellekteki konumu gösterir. Değişkenler aslında değeri saklamaz.
Genel olarak, JavaScript'teki nesneler, "anahtar: değer" çiftleri biçiminde, ilkel veya referans türlerinin ilgili verilerin sıralanmamış 
bir koleksiyonu olarak tanımlanabilir. Bu anahtarlar değişkenler veya işlevler olabilir ve bir nesne bağlamında sırasıyla özellikler ve methodlar olarak adlandırılır.
*/



/*
burtada kitap isiminde bir nesne tanımlıyoruz ve bu nesne içerisine  istediğimiz değişkenleri tanımlıyoruz
bu değikenlere ekleme,çıkartma veya değiştirme gibi bir çok işlemi yaptırabiliriz.
*/
let kitap = [
    "bilgisayar"
    , "php öğreniyorum", 
    700
];
kitap[1] =800; 
console.log(kitap);



/*
burada ise personel isiminde bir nesne tanımlıyoruz. ve bu nesnenin
ierisine name ve age isimli 2 farklı key tanımlıyruz.
ardından bu keylere value'ler atıyarak bunları kullanıyoruz.
*/
const personel = { 
    name: 'Ahmet',
    age: 25
};
console.log( personel);

// nesnelerin içerisine function'da atayabilirsin.
let araba = {
    name: 'Murat',
    model: '1980',
    start: function () {
        console.log('Çalışıyor');
    }
};

araba.start(); // Çıktı: Çalışıyor
araba["start"](); // Çıktı: Çalışıyor






let adres = {
    mahalle: 'yeni',
    no: 20,
    ulke:'Türkiye'
};
adres.mahalle = 'kaletepe'; 

//mahalle özelliğini değiştiriyoruz.

console.log(adres);







// burada nesne içerisnde nesne ve function kullanımına bir örnek yapılmıştır.

let city = {
    adi: 'İstanbul',
    no: 34,
    getir: function () {
        return this.no+ ' ' + this.adi;
    },
    person:{
    	adi:'ahmet',
    	no:25,
    	getir: function () {
        return this.adi+ ' ' + this.no;
    },

    }
    
};

console.log(city.person.getir());






/*

*/