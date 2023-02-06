// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [10, 'hello', 5, false, 79, 'cat', 'user', 98, 3, true,];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'First Book', pageCount: 100, genre: 'fantasy'};
let book2 = {title: 'Second Book', pageCount: 266, genre: 'drama'};
let book3 = {title: 'Third', pageCount: 399, genre: 'action'}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'First Book', pageCount: 100, genre: 'fantasy', authors: [{name: 'Peter', age: 34}]};
let book5 = {title: 'Second Book', pageCount: 266, genre: 'drama', authors: [{name: 'John', age: 23}]};
let book6 = {title: 'third Book', pageCount: 399, genre: 'action', authors: [{name: 'Lena', age: 67}]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: 'Petr', userName: 'Userenko1', password: '345345'},
    {name: 'Nick', userName: 'Userenko2', password: '565465'},
    {name: 'Lee', userName: 'Userenko3', password: '678687'},
    {name: 'Oleg', userName: 'Userenko4', password: '123345'},
    {name: 'Vasya', userName: 'Userenko5', password: '544665'},
    {name: 'Sergiy', userName: 'Userenko6', password: '456343'},
    {name: 'Olia', userName: 'Userenko7', password: '567868'},
    {name: 'Pepe', userName: 'Userenko8', password: '546865'},
    {name: 'Nona', userName: 'Userenko9', password: '806876'},
    {name: 'Coca', userName: 'Userenko0', password: '645332'}
];
console.log(`user password: ${users[0]['password']}`);
console.log(`user password: ${users[1]['password']}`);
console.log(`user password: ${users[2]['password']}`);
console.log(`user password: ${users[3]['password']}`);
console.log(`user password: ${users[4]['password']}`);
console.log(`user password: ${users[5]['password']}`);
console.log(`user password: ${users[6]['password']}`);
console.log(`user password: ${users[7]['password']}`);
console.log(`user password: ${users[8]['password']}`);
console.log(`user password: ${users[9]['password']}`);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
x !== 0 ? console.log('Вірно') : console.log('Невірно');
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 33;
if (time <= 15) {
    console.log(` ${time} попадає в першу чверть години`);
} else if (time <= 30) {
    console.log(` ${time} попадає в другу чверть години`);
} else if (time <= 45) {
    console.log(` ${time} попадає в третю чверть години`);
} else if (time <= 59) {
    console.log(` ${time} попадає в четверту чверть години`);
} else {
    console.log(`Ви ввели некоректне значення! Введіть число від 0 до 59`);
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 23;
if ((day >= 1) && (day <= 10)) {
    console.log(` ${day} попадає в першу декаду місяця`);
} else if ((day >= 11) && (day <= 20)) {
    console.log(`${day} попадає в другу декаду місяця`);
} else if ((day >= 21) && (day <= 31)) {
    console.log(` ${day} попадає в третю декаду місяця`);
} else {
    console.log(`Ви ввели некоректне значення! Введіть число від 0 до 31`);
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let i = parseInt(prompt('Введіть порядковий номер дня тижня напрклад  для Понеділок 1'));
switch (i) {
    case 1 :
        alert('Monday');
        break;
    case 2 :
        alert('Tuesday');
        break;
    case 3 :
        alert('Wednesday');
        break;
    case 4 :
        alert('Thursday');
        break;
    case 5 :
        alert('Friday');
        break;
    case 6 :
        alert('Saturday');
        break;
    case 7 :
        alert('Sunday');
        break;
    default:
        alert('Ви ввели неправильне значення');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 2;
let b = 2;
if (a > b) {
    console.log(`Більше число ${a}`);
} else if (a < b) {
    console.log(`Більше число ${b}`);
} else if (a === b) {
    console.log(`Числа рівні ${a} = ${b}`);
}

//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x = NaN
x = x || 'default'
console.log(x)

//
// let x = 1
// !!x === false? console.log(x = 'default') : console.log(x)

// let x2 = undefined;
// if (!!x2 === false || !!x2 === 0 || !!x2 === '' || !!x2 === null || !!x2 === undefined || !!x2 === NaN || !!x2 === -0) {
//     x2 = 'default';
//     console.log(x2);
// } else {
//     console.log(x2);
// }


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[0]['title']}   Super!`);
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[1]['title']}   Super!`);
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[2]['title']}   Super!`);
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[3]['title']}   Super!`);
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[4]['title']}   Super!`);
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log(` ${coursesAndDurationArray[5]['title']}   Super!`);
}