// Всі функції повинні бути описані стрілочним типом!!!!
// 1) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найменше. (Без Math.max!)
const showMinNumber = (num_1, num_2, num_3) => {
    let temp = num_1
    if (temp > num_2) {
        temp = num_2
    } else if (temp > num_3) {
        temp = num_3
    }
    return temp
}
// console.log(showMinNumber(3, 22, 12));


// 2) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const showMaxNumber = (num_1, num_2, num_3) => {
    let temp = num_1
    if (temp < num_2) {
        temp = num_2
    } else if (temp < num_3) {
        temp = num_3
    }
    return temp
}
// console.log(showMaxNumber(3, 22, 12));


// 3) створити функцію яка повертає найбільше число з масиву
const numbers = [3, 34, 56, 56, 344, 6, 42, 32, 43, 2, 2, 34, 5,]
const returnMaxNum = (arr) => {
    let temp = arr[0]
    for (const elem of arr) {
        if (temp < elem) {
            temp = elem
        }
    }
    return temp
}
// console.log(returnMaxNum(numbers));

// 4) створити функцію яка повертає найменьше число з масиву
const returnMinNum = (arr) => {
    let temp = arr[0]
    for (const elem of arr) {
        if (temp > elem) {
            temp = elem
        }
    }
    return temp
}
// console.log(returnMinNum(numbers));


// 5) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const returnSumNum = (arr) => {
    let temp = arr[0]
    for (const elem of arr) {
        temp += elem
    }
    return temp
}
// console.log(returnSumNum(numbers));


// 6) Дано натуральное число n. Выведите все числа от 1 до n.
const showNumbers = (n) => {
    if (n > 0) {
        showNumbers(n - 1)
    }
    // console.log(n)
}
showNumbers(10)

// 7) Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const showNumbers_2 = (a, b) => {
    if (a < b) {
        showNumbers_2(a + 1, b)
    }
    // console.log(a)
}
showNumbers_2(11, 15)

// 8) функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const foo = (arr, i) => {
    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    return arr
}
// console.log(foo([9, 8, 0, 4], 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const foo2 = (arr) => {
    const arrItem=[] , arrZero = [];
    for (const item of arr) {
        if (item) {
            arrItem.push(item)
        } else {
            arrZero.push(item)
        }
    }
    return [...arrItem, ...arrZero]
}
console.log(foo2([1, 0, 6, 0, 3, 45, 45, 77, 0, 8, 0, 0, 7, 0]));

