// 1) Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let [str_1, str_2, str_3] = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(str_1.length, str_2.length, str_3.length)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str_1.toUpperCase(), str_2.toUpperCase(), str_3.toUpperCase())
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let [strUpper, strUpper_2, strUpper_3] = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
console.log(strUpper.toLowerCase(), strUpper_2.toLowerCase(), strUpper_3.toLowerCase())
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string    '
console.log(strDirty.trim())
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5) Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
const stringToArray = (str) => str.split(' ')
console.log('Ревуть воли: ', stringToArray(str));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6) є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const turnToString = (arr) => arr.map(item => item.toString())
console.log('Стрінгові числа: ', turnToString([10, 8, -7, 55, 987, -1011, 0, 1050, 0]));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7) створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, condition) => {
    if (condition === 'ascending') {
        arr.sort((a, b) => a - b)
    }
    if (condition === 'descending') {
        arr.sort((a, b) => b - a)
    }
    return arr
}
console.log('Сортування: ', sortNums(nums, 'ascending'));
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 8) є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log('Сортування спадіння: ', coursesAndDurationArray)

const newArray = coursesAndDurationArray.map((item, idx) => ({id: idx + 1, ...item}))
    .filter(item => item.monthDuration > 5)

console.log('Додавання ID ', newArray)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 9)   описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
//}

const cardSuit = ['spade', 'diamond', 'heart', 'clubs']
const value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace',]
const color = ['red', 'black']

//Створити масть
const createSuit = (variable, cardSuit, value, color) => {
    for(let i = 0; i < 9; i++) {
        return variable.push({cardSuit, value, color})
    }
}
//Створити колоду
const createCards = (arrSuit, arrValue, arrColor, callBack) => {
    const cardsSpade = [], cardsDiamond = [], cardsHeart = [], cardsClubs = [];
    for (let i = 0; i < 9; i++) {
        callBack(cardsSpade, arrSuit[0], arrValue[i], arrColor[1])
        callBack(cardsDiamond, arrSuit[1], arrValue[i], arrColor[0])
        callBack(cardsHeart, arrSuit[2], arrValue[i], arrColor[0])
        callBack(cardsClubs, arrSuit[3], arrValue[i], arrColor[1])
    }
    return [...cardsSpade, ...cardsClubs, ...cardsHeart, ...cardsDiamond]
}

const cards = createCards(cardSuit, value, color, createSuit)
///////////////////////////////////////////////////////////////////////////////////////////////////


// - знайти піковий туз
const findAce = (arr) => {
    let ace = []
    arr.forEach(item => {
        if (item.cardSuit === 'spade' && item.value === 'ace') {
            ace.push(item)
        }
    })
    return ace
}
console.log('Туз пік: ', findAce(cards));
/////////////////////////////////////////////


// - всі шістки
const findAllSix = (arr) => {
    return arr.filter(item => item.value === '6')
}
console.log('Шістки: ', findAllSix(cards));
////////////////////////////////////////////////


//- всі буби
const showDiamonds = (arr) => {
    return arr.filter(item => item.cardSuit === 'diamond')
}
console.log('Всі буби: ', showDiamonds(cards));
///////////////////////////////////////////////////////////////////////////////

//- всі трефи від 9 та більше
const showClubs = (arr) => {
    return arr.filter(item => item.cardSuit === 'clubs').slice(3)
}
console.log('Всі трефи від 9 та більше: ', showClubs(cards));
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 10)    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardsReduce = cards.reduce((acc, item) => {
    item.cardSuit === 'spade' && acc.spades.push(item)
    item.cardSuit === 'clubs' && acc.clubs.push(item)
    item.cardSuit === 'heart' && acc.hearts.push(item)
    item.cardSuit === 'diamond' && acc.diamonds.push(item)
    return acc
}, {
    spades: [], diamonds: [], hearts: [], clubs: []
})
console.log('Сортування Reduce: ', cardsReduce);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// 11)    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let coursesArray = [
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
            'python advanced', 'sass']
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
const findSass = (arr) => {
    let user = []
    arr.forEach(item => {
        if (item.modules.includes('sass')) {
            user.push(item)
        }
    })
    return user
}
console.log('Користувач з Sass: ', findSass(coursesArray));
///////////////////////////////////////////////////////////////////////////////////////////////////


// --написати пошук всіх об'єктів, в який в modules є docker
const findDocker = (arr) => {
    let user = []
    arr.forEach(item => {
        if (item.modules.includes('docker')) {
            user.push(item)
        }
    })
    return user
}
console.log('Користувач з Docker: ', findDocker(coursesArray));