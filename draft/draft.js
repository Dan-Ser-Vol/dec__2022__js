// let [a, b, c, d, e, r, t, g, j, l, m, n, x, ...[]] = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
//
// let arr = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
// arr[arr.length] = "hello world"
//
// const user = {
//  name: "John",
//     age: 23,
//     skills: ['js', 'python', 'c++']
//
// }
// console.log(user['skills'][1]);
// console.log(user.skills[0]);

const checkTypeAge = (num) => {
    let res = typeof num;
    switch (res) {
        case "number":
            console.log("number");
            break;
        case  'string':
            console.log("string");
            break;
        case NaN:
            console.log("Nan");
            break;
        default:
            console.log("default");
    }


};

let userData = prompt("Введіть число");
checkTypeAge(userData);