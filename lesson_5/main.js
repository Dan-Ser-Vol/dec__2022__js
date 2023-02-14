const PI = 3.14
// 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangularCalc = (a, b) => a * b
console.log(rectangularCalc(5, 4));


// 2) створити функцію яка обчислює та повертає площу кола з радіусом r
const calcCircle = (r) => {
    return PI * (r ** 2)
}
console.log(calcCircle(5));


// 3)  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуом r
const calcCylinder = (r, h) => {
    return 2 * PI * r * (r + h)
}
console.log(calcCylinder(5, 1));


// 4) створити функцію яка приймає масив та виводить кожен його елемент
const array = [3, 45, 454, 23, 9, 6, 'hello']
const showArrItem = (arr) => {
    for (const arrElement of arr) console.log(arrElement);
}
showArrItem(array)


// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createTextParagraph = (text) => {
    document.write(`<p class="old">${text}</p>`)
}
createTextParagraph('Some text')


// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (text) => {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`)
}
createList('Some text for li')


// 7) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const printList = (text, n) => {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`<ul>`)
}
printList('Some text for iterator li ', 3)


// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr3 = [3, 45, 23, 9, 6, 'hello', true,]
const listIter = (items) => {
    document.write(`<ul>`)
    for (let j = 0; j < items.length; j++) {
        const item = items[j];
        document.write(`<li>${item}</li>`)
    }
    document.write(`<ul>`)
}
listIter(arr3)

// 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const userItems = [
    {id: 1, name: 'Joo', age: 34},
    {id: 2, name: 'Bruce', age: 34,},
    {id: 3, name: 'Boo', age: 34},
    {id: 4, name: 'Paulo', age: 34},
    {id: 5, name: 'Tom', age: 34},
    {id: 6, name: 'Jerry', age: 34,},
];

const showUserElem = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        const item = arr[j];
        document.write(`<div class="user_green">ID: ${item.id} NAME: ${item.name} AGE: ${item.age}</divcla>`)
    }
}
showUserElem(userItems)

// 10) створити функцію яка повертає найменьше число з масиву
const numArr = [7, 1, 8, 2, 9, 10, 4, 5, 6, 3,]
const showMinNumber = (arr) => {
    let minNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i]
        }
    }
    return minNum
}
console.log(showMinNumber(numArr))


// 11) створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let res = 0
    for (const arrElement of arr) {
        res += arrElement
    }
    return res
}
console.log('sum', sum(numArr))


// 12) створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const arrSwap = [1, 2, 3, 4, 6, 7, 8, 9]
const swap = (arr, idx1, idx2) => {
    [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
    return arr
}
console.log(swap(arrSwap, 0, 7))


// 13) Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const currencyArr = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyElem of currencyValues) {
        if (currencyElem.currency === exchangeCurrency) {
            return sumUAH / currencyElem.value
        }
    }
}
console.log(exchange(10000, currencyArr, 'USD'));