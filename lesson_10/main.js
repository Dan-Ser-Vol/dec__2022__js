// 1) Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

const button = document.querySelector('#click');
const form = document.form_1;

const user = {};
function displayObj(e) {
    const blockDivUser = document.querySelector('#user');
    blockDivUser.innerHTML = '';
    e.preventDefault();

    const name = form.name.value.trim();
    const surname = form.surname.value.trim();

    if (user[name] && user[name].surname === surname) {
        alert('Цей користувач вже існує');
        return;
    }

    const age = form.age.value.trim();
    user[name] = { surname, age };

    for (const name in user) {
        const { surname, age } = user[name];
        const block = document.createElement('div');
        block.innerText = `${name}: ${surname}, ${age}`;
        blockDivUser.append(block);
    }
}

button.addEventListener('click', displayObj);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        let number = JSON.parse(localStorage.getItem('number'))
        const divNum = document.querySelector('.number');
        divNum.innerText = number
        number += 1;
        localStorage.setItem('number', JSON.stringify(number))
        divNum.innerText = JSON.parse(localStorage.getItem('number'))
        if (number >= 10) {
            localStorage.removeItem('number')
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// =========================

const buttonCheck = document.querySelector('.check_time')

const now = new Date();
const nowTime = {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
    hours: now.getHours(),
    minutes: now.getMinutes()
};

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(nowTime);
localStorage.setItem('sessions', JSON.stringify(sessions));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const objArr = []
for (let i = 0; i < 100; i++) {
    const newObj = {id: i + 1, name: `Object ${i + 1}`}
    objArr.push(newObj)
}


const pageSize = 10;
let currentPage = 0;


function displayObjects() {
    const container = document.querySelector('.container');
    container.innerHTML = '';


    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const pageObjects = objArr.slice(startIndex, endIndex);


    pageObjects.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('obj')
        div.textContent = `ID: ${obj.id}, Name: ${obj.name}`;
        container.appendChild(div);
    });
}


document.getElementById('next').addEventListener('click', () => {
    if (currentPage < objArr.length / pageSize - 1) {
        currentPage++;
        displayObjects();
    }
});


document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayObjects();
    }
});

displayObjects();


// 4) *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const createTableBtn = document.getElementById('createTable');
const tableContainer = document.getElementById('tableContainer');

function createTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const content = document.getElementById('content').value;

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = content;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}

createTableBtn.addEventListener('click', createTable);