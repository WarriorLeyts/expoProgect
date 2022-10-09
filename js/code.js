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

 /*
 Создать функцию передать  любое число.
  Если значение константы меньше 10, то вывести в консоль текст “константа меньше 10”, 
  иначе вывести “константа не меньше 10”
  function toTen(random){
    if (random < 10) {
      return console.log('константа меньше 10');
    } else if (random > 10) {
      return console.log('константа не меньше 10');
    }
  }
  toTen(50);
  /* 2 - Задание 
  Создать и вызвать функцию, которая выводит алерт с текстом “Привет, Мир”.
  function helloWorld(){
    alert('Привет, Мир');
  }
  helloWorld()
 /* 3 - Задание  
 Создать функцию, которая выводит в консоль текст “JavaScript” 
 function java(){
  console.log('JavaScript')
 }
 java();
 /*4 - Задание 
 Создать переменную text c любым текстовым значением. 
 Написать функцию, которая если внутри переменной text находится слово “lorem” выведет в консоль “У вас ошибка в тексте”, 
 иначе выведет в консоль “Содержимое переменной: ***” - где вместо звездочек должно быть содержимое переменной. 
 let text = 'Я хороший программист, надеюсь.'

 function lorem(){
  if (text === 'lorem') {
    return console.log('У вас ошибка в тексте');
  } else {
    return console.log(`Содержимое переменной: ${text}`)
  }
 }
 lorem();

 /* ДОП 
 1 - Задание
 Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, 
 то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
let x = 10, y = 7; 

let x = 10;
let y = 7;
let result = x > y ? 'x больше, чем y':'x не больше, чем y';
console.log(result);
/* 2 - Задание
Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».
Если посетитель вводит четное число, то выводить «Число ${ num} четное», если нечетное: Число ${num} нечетное.

let num = prompt('Введите число')
if ( (num % 2) == 0) {
  console.log (`Число ${num} четное`);
} else {
  console.log (`Число ${num} нечетное`);
}
/* 3 - Задание
Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код, который должен определять, 
какое из введенных чисел является наибольшим.
let a = Number(prompt('Первое число'));
let b = Number(prompt('Второе число'));
let c = Number(prompt('Третье число'))

if (a > b && a > c ) {
  console.log(a);
} else if (b > a && b > c){
    console.log(b);
  } else if (c > a && c > b){
    console.log(c);
  }*/
 
// УРОК 18
/*Дз: 
- Создать объект man с информацией о человеке (имя, фамилия, возраст, рост, логин, пароль, сумма денег на счете)
- После создания отдельно добавить свойство с информацией об адресе.
- Создать переменную и присвоить ей любое текстовое значение. 
Написать условие, по которому проверяется соответствует ли значение этой переменной паролю человека. 
Если соответствует, то вывести в консоль “Добро пожаловать, [имя фамилия].  Ваш логин[логин]". 
Иначе вывести "Указанный пароль [пароль из переменной] не верен. Попробуйте еще раз". 

const man ={
  name: 'Рустам',
  family: 'Алероев',
  age: 29,
  height: 170,
  login: 'Aleroev93',
  password: 'rustam1993',
  'money in the account': 50000,
} 
 man.adress = 'г. Грозный ул. Мира 45';
 console.log(man);
 let userPassword = 'rustam1993'
 if (userPassword == man.password){
  console.log(`Добро пожаловать, ${man.name} ${man.family}.  Ваш логин ${man.login}, деньги на счете ${man['money in the account']} руб.`)
 } else{
  console.log(`Указанный пароль ${userPassword} не верен. Попробуйте еще раз.`)
 }

 for (const key in man){
  console.log(key);
  console.log(man[key]);
 }
 // форма регистрации от себя 
/*
 let name = prompt('Введите ваше имя: ');
 let family = prompt('Введите ваше фамилие: ');
 let age = prompt('Сколько вам лет: ');
 let height = prompt('Ваш рост: ');
 let login = prompt('Придумайте логин: ');
 let password = prompt('Придумайте пароль: ');
 let money = prompt('Какую сумму вы хотите занести: ');
 
 let user = {
   name,
   family,
   age,
   height,
   login,
   password,
   'money in the account': money,
 }
 let userAdd = prompt('Какую информацию вы хотите еще добавить');
  
 user[userAdd] = prompt(`Пишите ${userAdd}`);
console.log(user)*/

/*
1) Дан массив let a = ['lorem', 123, true, 'ipsum'];
 Вывести длинну массива.*/
 let a = ['lorem', 123, true, 'ipsum'];
 console.log(a.length);
 /*
  2) Для того же массива выведите первый элемент и последний элемент 
  (с учетом того, что количество элементов может меняться, а ваш код должен всегда работать)*/
 console.log(`Первый элемент ${a[0]}, Последний элемент ${a[a.length-1]}`);
 /*
 3) Дан пусто массив let em = []; Заполните его 5-ю различными элементами. Используйте методы для работы с массивами*/
 let em = [];
 em.push(true); 
 em.unshift(251);
 em.push('Имя');
 em.unshift(100);
 em.push('Солнце');
 //4) Добавьте в начало предыдущего массива 3 новых элемента
 em.unshift('первый','второй','третий');
 //5) Удалите один элемент с начала массива и два элемента с конца
em.splice(0,1);
em.splice(-2);
console.log(em);
//6) Дан массив с нечетными числами let number = [1, 3, 5, 7, 9]. Выведите консоль все элементы сделав их четными

let number = [1, 3, 5, 7, 9];

number.forEach(function(item, index, array) {
  return array[index] = item + 1;
});
console.log(number);
//7) Удалите элементы из массива по середине. Замените элементы массива

number.splice(Math.trunc(number.length/2),(Math.trunc(number.length/2)-1),'Замена вместо 6');
console.log(number);



 


