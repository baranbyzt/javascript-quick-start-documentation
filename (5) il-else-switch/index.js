


/*
if-else-switch:
if else switch konusu yazılımda oldukça önemli bir yere sahiptir.
yazacağımız programa sadece if else gibi temel komutlarla istediğimiz şeyi yaptırabiliriz.
altına yatan mantık oldukça basittir.

if: blirli bir koşul doğruysa yürütülecek kod bloğu belirtmek için kullanılır.
else: aynı koşul yanlış ise yürütülecek kod bloğunu belirtmek için kullanılır.
else if: ilk koşul yanlış ise,test edilecek yeni bir koşul belirtmek için kullanın.
switch: yürütülecek birçok alternatif kod bloğu belirtmek için kullanılır.

*/




/*
if (condition) {
  //  block of code to be executed if the condition is true
}
*/
let hour = 9
if (hour < 12) {
  console.log("good morning everyone");
}
/*
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/
let hour1 = 11;
if (hour1 < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
console.log(greeting) // bu şekilde de farklı bir kullanım kullanabilirsiniz.
/*;
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/

let hour2 = 21;
if (hour2 < 12) {
  console.log("good morning everyone");
}
else if (hour2 > 20) {
console.log("good night everynoe");
}
else {
    console.log("good afternoon everone");
}

/*
Switch : yürütülecek switch birçok kod bloğundan birini seçmek için kullanılır.

+ switch ifadesi bir kez değerlendirilir.
+ ifadenin değeri, her bir durumun değerleri ile karşılaştırılır.
+ bir eşleşme varsa ilgili kod bloğu çalıştırılır.
+ eşleşme yoksa, varsayılan kod bloğu yürütülür.
+ break : bu komut ile döngünün sonlanmasını istediğimiz anlamına gelir.
+ default : eğer herhangi bir komut satırı çalıştıralamassa otomatikmen default değeri çalıştırılır.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

let days = 1; // istersen switch koşulunun içerisnde bunu da kullanabilirsin. 
// new Date().getDay() : burada içinde bulunduğunuz haftanın gününü alıyoruz ve switch içerisinde kullanacağız.

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      console.log("this is monday")
      // buraya özellikle seçilmiş case'in altında çalışmasını istediğimiz kod satırını girebiliriz.
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
console.log(day);



















/*

*/