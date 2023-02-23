'use strict'

// 1) Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const cutString = (str, n) => {
    let newStrArr = []
    for (let i = 0; i < str.length; i += n) {
        newStrArr.push(str.substring(i, i + n))
    }
    return newStrArr
}
// console.log(cutString('наслаждение', 3))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';
const delete_characters = (str, length) => {
    return str.slice(0, length)
}
// console.log(delete_characters(str, 7));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str_1 = 'HTML JavaScript PHP';
const insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase()
}
// console.log(insert_dash(str_1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let name = 'sergiy'
let first = name.charAt(0).toUpperCase()
let res = [...first, ...name.slice(1)].join('')
// console.log(res)
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// - Дано список імен.
let n2 = 'Ron---Whisley'
let n1 = 'Harry..Potter'
let n3 = 'Hermione__Granger'

function cleanName(name) {
    let newName = '';
    for (const elem of name) {
        if (elem === '.' || elem === '-' || elem === '_') {
            newName += ' ';
        } else {
            newName += elem;
        }
    }
    return newName.replaceAll('  ', ' ');
}

// console.log(cleanName(n1));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randomNumbers = (num) => {
    let numbers = []
    for (let i = 0; i <= num; i++) {
        let generateNum = Math.floor(Math.random() * 101)
        numbers.push(generateNum)
    }
    return numbers
}
//console.log(randomNumbers(10));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(randomNumbers(10).sort((a, b)=> a-b));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

//console.log(randomNumbers(10).filter((item)=> item % 2===0 ));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//endregion
const capitalize = (str) => {
    let newStr = str.split(' ')
    let resArr = []
    newStr.forEach((item) => {
        resArr.push(item[0].toUpperCase() + item.slice(1))
    })
    return resArr.join(' ')
}
// console.log(capitalize('hello world java script'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
function validatorEmail(email) {
    const atIdx = email.indexOf('@')
    const dotIdx = email.indexOf('.')
    if (atIdx < 1 || atIdx === email.length - 1) {
        console.log('incorrect @', false);
    } else if (atIdx + 3 >= dotIdx || dotIdx === email.length - 1) {
        console.log('incorrect . ', false);
    } else {
        console.log(true)
    }
}

// validatorEmail('someeMAIL@gmail.com')
books.forEach()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - є масивlet
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
const sortedArr = coursesArray.sort((a, b) => b.modules.length - a.modules.length)
// console.log(sortedArr)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let sym = 'о'
let someStr = 'Астрономия это наука о небесных объектах';

const count = (str, sym) => {
    let newStr = str.split('')
    let count = 0
    newStr.forEach(item => {
        if (item === sym) {
            count++
        }
    })
    return count
}
// console.log(count(someStr, sym));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str_2 = 'Сила тяжести приложена к центру масс тела';
const cutStr = (string, n) => {
    let newStr = string.split(' ').slice(0, n)
    return newStr.join(' ')
}
// console.log(cutStr(str_2, 5));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: 'To Kill a Mockingbird',
        pageCount: 281,
        authors: ['Harper Lee'],
        genres: ['Classic', 'Fiction']
    },
    {
        title: '1984',
        pageCount: 328,
        authors: ['George Orwell', 'George Orwell'],
        genres: ['Classic', 'Science Fiction', 'Dystopian']
    },
    {
        title: 'The Great Gatsby',
        pageCount: 180,
        authors: ['Fitzgerald', 'sdfsfds', 'aerxcgdfufdar'],
        genres: ['Classic', 'Fiction']
    },
    {
        title: 'Pride and Prejudice',
        pageCount: 279,
        authors: ['Jane Austen', 'sesdfsfsdf', 'ssdfdsfdddf', 'sdfsfsdfsd'],
        genres: ['Classic', 'Romance']
    },
];

// -знайти наібльшу книжку.
const maxPage = (arr) => {
  let found  = arr.sort((a, b)=> b.pageCount - a.pageCount )
    return found[0]
}
//console.log(maxPage(books));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - знайти книжку/ки з найбільшою кількістю жанрів
const maxGenres = (arr) => {
    let found  = arr.sort((a, b)=> b.genres.length - a.genres.length )
    return found[0]
}
// console.log(maxGenres(books));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - знайти книжку/ки з найдовшою назвою
const maxTitle = (arr) => {
    let found  = arr.sort((a, b)=> b.title.length - a.title.length )
    return found[0]
}
//console.log(maxTitle(books));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - знайти книжку/ки які писали 2 автори
const wroteTwo = (arr) => {
    return  arr.filter((book) => book.authors.length === 2 )
}
//console.log(wroteTwo(books));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - знайти книжку/ки які писав 1 автор
const wroteOne = (arr) => {
    return  arr.filter((book) => book.authors.length === 1 )
}
//console.log(wroteOne(books));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - вісортувати книжки по кількості сторінок по зростанню
const sortBooksPageCount = (arr) => {
    return arr.sort((a, b)=> a.pageCount - b.pageCount)
}
// console.log(sortBooksPageCount(books));
