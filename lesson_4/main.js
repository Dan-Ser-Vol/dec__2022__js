// 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangularAreaCalc(a, b) {
    return a * b
}

console.log(rectangularAreaCalc(5, 4));


// 2) створити функцію яка обчислює та повертає площу кола з радіусом r
function calcAreaCircle(r) {
    const PI = 3.14
    return PI * (r ** 2)
}

console.log(calcAreaCircle(5));

// 3)  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуом r
function calcAreaCylinder(r, h) {
    const PI = 3.14
    return 2 * PI * r * (r + h)

}

console.log(calcAreaCylinder(5, 1));

// 4) створити функцію яка приймає масив та виводить кожен його елемент
const arr = [3, 45, 454, 23, 9, 6, 'hello']

function showArrItem(arr) {
    for (const arrElement of arr) console.log(arrElement);
}

showArrItem(arr)

// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createText(text) {
    document.write(`<p class="old">${text}</p>`)
}

createText('Some text')

// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createListText(text) {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`)
}

createListText('Some text for li')

// 7) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListIter(text, n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`<ul>`)
}

createListIter('Some text for iterator li ', 3)

// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr2 = [3, 45, 23, 9, 6, 'hello', true,]

function listIter(items) {
    document.write(`<ul>`)
    for (let j = 0; j < items.length; j++) {
        const item = items[j];
        document.write(`<li>${item}</li>`)
    }
    document.write(`<ul>`)
}

listIter(arr2)

// 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const usersItems = [
    {id: 1, name: 'Joo', age: 34},
    {id: 2, name: 'Bruce', age: 34,},
    {id: 3, name: 'Boo', age: 34},
    {id: 4, name: 'Paulo', age: 34},
    {id: 5, name: 'Tom', age: 34},
    {id: 6, name: 'Jerry', age: 34,},
];

function showUserElem(arr) {
    for (let j = 0; j < arr.length; j++) {
        const item = arr[j];
        document.write(`<div class="user_green">ID: ${item.id} NAME: ${item.name} AGE: ${item.age}</divcla>`)
    }
}

showUserElem(usersItems)

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
function sum(arr) {
    let res = 0
    for (const arrElement of arr) {
        res = res + arrElement
    }
    return res
}

console.log(sum(numArr))

// 12) створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const arrSwap = [1, 2, 3, 4, 6, 7, 8, 9]

function swap(arr, index1, index2) {
    let a = arr[index1], b = arr[index2];
    let temp
    temp = a
    a = b
    b = temp
    arr[index1] = a
    arr[index2] = b
    return arr
}
console.log(swap(arrSwap, 0, 7))


// 13) Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const currencyArr = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyElem of currencyValues) {
        if (currencyElem.currency === 'USD') {
            return sumUAH / currencyElem.value
        }
        if (currencyElem.currency === 'EUR') {
            return sumUAH / currencyElem.value
        }
    }
}

console.log(exchange(10000, currencyArr, 'USD'));