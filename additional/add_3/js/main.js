// створити масив з:
// 1)    - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const arr_1 = ['hello', 'world', 'js', 'java', 'python', true, 1, 2, 3, 4, 5]

// 2) Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// const arr_2 = []
// arr_2[0] = 'hello'
// arr_2[1] = 2
// arr_2[2] = 10
// arr_2[3] = 'world'
// arr_2[4] = true
// console.log(arr_2);

//3) є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while +++
// 2. перебрати його циклом for +++
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом +++
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом +++
// 5. перебрати циклом while та вивести  числа тільки парні  значення +++
// 6. перебрати циклом for та вивести  числа тільки парні  значення +++
// 7. замінити кожне число кратне 3 на слово "okten" +++
// 8. вивести масив в зворотньому порядку. +++
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)+++

// const arr_3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// let i = 0
// while (i < arr_3.length) {
//     if (arr_3[i] % 2 !== 0) console.log(arr_3[i])
//     i++
// }
//
// for (const number of arr_3) {
//     if (number % 2 !== 0) console.log(number)
//
// }

// for (let number of arr_3) {
//     if (number % 3 === 0) number = "okten"
//     console.log(number)
// }

// for (let i = arr_3.length; i >= 0; i--) {
//     console.log(arr_3[i]);
//
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 100; i > 0; i--) {
    if(i % 2 !== 0){
        console.log(i)
    }

}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).+++





const books = [
    {id: 1, title: 'book_1', countPages: 577, authors: ['name_1', 'name-2'], genres: ['genre_1', 'genre_2', 'genre_3']},
    {id: 2, title: 'book_22', countPages: 234, authors: ['name_1', 'name-2'], genres: ['genre_1', 'genre_2']},
    {id: 3, title: 'book_333', countPages: 789, authors: ['name_1'], genres: ['genre_1',]},
    {id: 4, title: 'book_4444', countPages: 223, authors: ['name_1'], genres: ['genre_1', 'genre_2',]},
    {id: 5, title: 'book_55555', countPages: 999, authors: ['name_1'], genres: ['genre_1',]},
    {id: 6, title: 'book_666666', countPages: 123, authors: ['name_1', 'name-2', 'name-3'], genres: ['genre_1', 'genre_2', 'genre_3', 'sdfsd']}
]


// -знайти наібльшу книжку.+++
// const findMaxCountPages =  (arr) => {
//     let maxPages = arr[0].countPages
//     for (const arrElem of arr) {
//         if (arrElem.countPages>maxPages){
//             maxPages = arrElem.countPages
//         }
//     }
//     return maxPages
// }
// console.log(findMaxCountPages(books))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - знайти книжку/ки з найбільшою кількістю жанрів+++
// const findMaxCountGenres =  (arr) => {
//     let maxGenres = arr[0].genres.length
//     let titleBook = ''
//     for (const arrElem of arr) {
//      if (arrElem.genres.length > maxGenres) {
//          titleBook = arrElem.title
//      }else { titleBook = arr[0].title}
//     }
//     return titleBook
// }
// console.log(findMaxCountGenres(books))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - знайти книжку/ки з найдовшою назвою+++
// const findMaxLongTitle =  (arr) => {
//     let maxLong = arr[0].title
//     for (const arrElem of arr) {
//         if (arrElem.title > maxLong) {
//             maxLong = arrElem.title
//         }
//     }
//     return maxLong
// }
// console.log(findMaxLongTitle(books))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - знайти книжку/ки які писали 2 автори +++
// const findTwoAuthor =  (arr) => {
//     let maxAuthors = arr[0].authors.length
//     let bookTitle = ''
//     for (const arrElem of arr) {
//         if (arrElem.authors.length > maxAuthors) {
//             bookTitle = arrElem.title
//         }else { bookTitle = arr[0].title}
//     }
//     return bookTitle
// }
// console.log(findTwoAuthor(books))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - знайти книжку/ки які писав 1 автор
// const findOneAuthor =   (arr) => {
//     let oneAuthor = arr[0].authors.length
//     let bookTitle = ''
//     for (const authorElem of arr) {
//         if (authorElem.authors.length < oneAuthor) {
//             oneAuthor = authorElem.authors.length
//             bookTitle = authorElem.title
//         }
//     }
//     return  bookTitle
// }
// console.log(findOneAuthor(books))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
