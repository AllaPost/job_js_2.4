// Задание 1: Использование условных конструкций if-else

let age = 67; 

if (age < 18) {
  console.log("Вы слишком молоды.");
} else if (age >= 18 && age <= 65) {
  console.log("Добро пожаловать!");
} else {
  console.log("Вам пора на пенсию.");
}

// Задание 2: Реализация условий с помощью конструкции switch

let day = 5; 

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный день");
}

// Задание 3: Подсчет суммы всех четных чисел от 0 до n

let n = 326; 
let sum = 0;

for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`Сумма всех четных чисел от 0 до ${n} равна ${sum}`);

// Задание 4: Подсчет количества совпадений подстроки

let str = "Hello, how are you? Hello again!"; 
let subStr = "Hello"; 
let count = 0;
let pos = 0;

while ((pos = str.indexOf(subStr, pos)) !== -1) {
  count++;
  pos += subStr.length; 
}

console.log(`Количество вхождений подстроки "${subStr}" в строке: ${count}`);

// Задание 5: Применение циклов и условных конструкций совместно

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Задание 6: Реализация условий с использованием if-else if и switch

let season = 'autumn'; 

// Версия с if-else if

if (season === 'winter') {
    console.log('Зима — это время снега и холода.');
} else if (season === 'spring') {
    console.log('Весна — это время пробуждения природы.');
} else if (season === 'summer') {
    console.log('Лето — это время солнца и отдыха.');
} else if (season === 'autumn') {
    console.log('Осень — это время сбора урожая и золотых листьев.');
} else {
    console.log('Неправильное значение сезона.');
}

// Версия с switch

switch (season) {
    case 'winter':
        console.log('Зима — это время для катания на лыжах и уютных вечеров у камина.');
        break;
    case 'spring':
        console.log('Весна — это время цветущих деревьев и теплых дождей.');
        break;
    case 'summer':
        console.log('Лето — это время пляжного отдыха и длинных дней на свежем воздухе.');
        break;
    case 'autumn':
        console.log('Осень — это время сбора грибов и ярких осенних пейзажей.');
        break;
    default:
        console.log('Неправильное значение сезона.');
}

// Задание 7: Создание цикла с выходом по условию

let number = 0;

while (number <= 10) {
    number = prompt("Введите число (больше 10 для выхода):");
    number = Number(number); // Преобразуем строку в число
}

console.log("Число больше 10 введено!");

// Задание 8: Применение цикла do-while

let number = 0;

do {
    number = prompt("Введите число:"); 
    number = Number(number); 
} while (number <= 10); 

console.log("Число больше 10 введено!");

