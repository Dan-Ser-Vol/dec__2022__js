// 1) створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const div = document.createElement('div')
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.style.backgroundColor = 'green'
div.innerText = 'це дів'
const body = document.querySelector('body')
body.append(div)
const div2 = div.cloneNode(true)
body.append(div2)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arr = ['Main', 'Products', 'About us', 'Contacts']
const ul = document.createElement('ul')
for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.innerText = arr[i]
    ul.append(li)
}
body.append(ul)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const block = document.createElement('div')
    block.classList.add('card')
    block.innerText = ` title -  ${coursesAndDurationArray[i].title} 
    mothDuration - ${coursesAndDurationArray[i].monthDuration}`
    body.append(block)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4)  - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const block = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    block.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')
    block.append(h1, p)
    h1.innerText = `title -  ${coursesAndDurationArray[i].title}`
    p.innerText = `mothDuration - ${coursesAndDurationArray[i].monthDuration}`
    body.append(block)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5) є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (let i = 0; i < simpsons.length; i++) {
    const block = document.createElement('div')
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')
    img.src = simpsons[i].photo
    img.setAttribute('alt', ` ${simpsons[i].photo}`)
    block.classList.add('member')
    h1.classList.add('heading')
    p.classList.add('description')
    block.append(h1, h3, img, p,)
    h1.innerText = `${simpsons[i].name}  ${simpsons[i].surname}`
    h3.innerText = ` Age: ${simpsons[i].age}`
    p.innerText = `${simpsons[i].info}`
    body.append(block)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6) Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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

for (let i = 0; i < coursesArray.length; i++) {
    const elem = coursesArray[i]
    const blockFlex = document.createElement('div')
    blockFlex.classList.add('block_flex')

    const blockContain = document.createElement('div')
    blockContain.classList.add('container')

    const blockTitle = document.createElement('div')
    blockTitle.classList.add('title')

    const blockMonth = document.createElement('div')
    blockMonth.classList.add('month')

    const blockHour = document.createElement('div')
    blockHour.classList.add('hour')

    const ul = document.createElement('ul')

    blockTitle.innerText = `${elem.title}`
    blockMonth.innerText = `monthDuration: ${elem.monthDuration}`
    blockHour.innerText = `hourDuration: ${elem.hourDuration}`

    for (let j = 0; j < elem.modules.length; j++) {
        const moduleElement = elem.modules[j];
        const li = document.createElement('li')
        blockHour.classList.add('li')
        li.innerText = `${moduleElement}`
        ul.append(li)
    }
    blockFlex.append(blockMonth, blockHour,)
    blockContain.append(blockTitle, blockFlex, ul)
    body.append(blockContain)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7) Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const someBlock = document.createElement('p')
someBlock.innerText = 'Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,'
const button = document.createElement('button')
button.innerText = 'CLICK'
button.onclick = function () {
    someBlock.classList.toggle('hidden')
}
body.append(someBlock, button)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 8) створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let button1 = document.getElementsByTagName('button')[0]

button1.onclick = function () {
    let age = document.getElementById('check_age').value;
    if (age < 18) {
        alert('Ви ще надто молоді!');
    } else {
        alert('Ваш вік дозволяє вам!');
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
