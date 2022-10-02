/*//Вывести любой текст с помощью alert() 
alert("Привет, мир. Че там?");
//Вывести что-нибудь в консоль
console.log('//Вывести что-нибудь в консоль')
//Создать две переменные с правильным именем
let currentUserName = 'Мухаммад';
let age = '26';

//и две переменные с неправильным.
/* 
let current-User-Name= 'Мухаммад';
let 1age= '26';

//Какой тип данных нужно использовать, чтобы задать дату формата 28.02.1999?
let date1 = new Date(1999,1,28);
console.log(date1);
//Какой тип данных нужен для сохранения числа ПИ 3.14?
let p = 3.14;
console.log(p);
//Создать константу с любым значением и попытаться изменить это значение. Выяснить что в итоге получится.
const version = 1.5;
// version = 3;   Не получается изменить значение так как константа не меняется.
console.log(version);
/*Создать переменные name, address, phone в которых с помощью prompt() будет храниться значения имени, адреса и 
номер телефона. Вывести в консоль текст “Студент . Адрес: , Номер телефона: ___” 
где вместо пропусков будут соответствующие переменные.
let name = prompt('Введите выше имя и фамилию');
let address = prompt('Введите свой адрес проживания');
let phone = prompt('Введите номер телефона');
console.log(`Студент ${name}, Адрес: ${address}, Номер телефона: ${phone}`);
/*Создать программу, в которой две переменные - курс рубля к доллару и количество доступных рублей.
Вывести в консоль сколько долларов можно купить на доступные рубли.
let courseToDollar = 58.45;
let summToTranslate = 500;
let dollar = Math.trunc(summToTranslate/courseToDollar);
console.log (dollar + ' долларов');
//Запустив следующий код, вы получите число 16. Измените вторую строку так, чтобы получить число 15.
let a = 5, b = 10, c;
c = ++a + --b;
 console.log(c);
 console.log('start')
 if (true) {
  console.log('code')
 }
 console.log('end')
 let a = 3;
 let b = 5;
  
 if (a > b){
  console.log('code');
 } else if (a < b){
  console.log('code else');
 } else {
  console.log('else');
 }
 let nameDate = 'Ali';
 let passwordDate = '1234';
 let name = prompt('login?');
 let password = prompt('password');
 
 if (nameDate === name){
  if(passwordDate === password){
  console.log('Welcome');
  } else {
    console.log('password error');
  } 
 } else {
  console.log('error login');
 }
 if (nameDate === name && passwordDate === password){
  console.log('Welcome')
  } 
  else {
  console.log('error login');
 }

 let aa = 2;
 let bb = 3;
 let result = aa > 1? 'aa':'bb'
 console.log(result);
 let code = 'js'
 switch(code){
   case ('html'):
   console.log('html');
   break;
   case ('css'):
   console.log('css');
   break;
   case ('js'):
   console.log('js');
   break;
  case ('react'):
   console.log('react');
   break;
   default:
    console.log('default');
 }
 /*1. Создать константу с любым числовым значением. 
 Если значение константы меньше 10, то вывести в консоль текст “константа меньше 10”, 
 иначе вывести “константа не меньше 10”
 const toTen = 20;
  if (toTen < 10){
  console.log('константа меньше 10')
 } else {
  console.log('константа не меньше 10')
 }*/



 // УРОК 16

 /* 1 - Задание
 Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, 
 то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
let x = 10, y = 7; 
*/
let x = 10;
let y = 7;
let result = x > y ? 'x больше, чем y':'x не больше, чем y';
console.log(result);
/* 2 - Задание
Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».
Если посетитель вводит четное число, то выводить «Число ${ num} четное», если нечетное: Число ${num} нечетное.
*/
let num = prompt('Введите число')
if ( (num % 2) == 0) {
  console.log (`Число ${num} четное`);
} else {
  console.log (`Число ${num} нечетное`);
}
/* 3 - Задание
Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код, который должен определять, 
какое из введенных чисел является наибольшим.*/
let a = Number(prompt('Первое число'));
let b = Number(prompt('Второе число'));
let c = Number(prompt('Третье число'))

if (a > b && a > c ) {
  console.log(a);
} else if (b > a && b > c){
    console.log(b);
  } else if (c > a && c > b){
    console.log(c);
  }