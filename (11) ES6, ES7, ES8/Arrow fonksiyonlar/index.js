


/*
Arrow Function 

Ecmascript 6 ile beraber gelen arrow function,javascript fonksiyon yazımında adeta küçük bir devrim yaptı.
her fonksiyon tanımında kullanılan function anahtar kelimesinin kullanımını kaldırarak yerine bu şık ifadeyi getirdi

( ) => { }

*/

// eski function örneği
const elements = function (num_eski) {
    console.log(num_eski)
  }
  elements("eski fonksiyon")

// oldukça basit bir arrow fonksiyon örneği
const elementss = (num) => {
    console.log(num)
}
elementss("burası num")



// eğer işlemimiz için tek satır kullanacak kadar kıs bir kodumuz varsa arrow fonksiyonları bu şekilde de kullanabiliriz.
const xyz = (num2) => console.log(num2)
xyz("selam")

let yeni = () =>
{
    console.log('burada işlem var')
    return "yeni değerler burada ";
}

console.log(yeni());

