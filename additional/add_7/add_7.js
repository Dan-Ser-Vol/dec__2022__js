// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// const userInfo = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// class User {
//     constructor(userInfo) {
//         this.id = userInfo.id
//         this.name = userInfo.name
//         this.username = userInfo.username
//         this.email = userInfo.email
//         this.address = new Address(userInfo.address)
//         this.phone = userInfo.phone
//         this.website = userInfo.website
//         this.company = new Company(userInfo.company)
//     }
// }
//
//
// class Address {
//     constructor(address) {
//         this.street = address.street
//         this.suite = address.suite
//         this.city = address.city
//         this.zipcode = address.zipcode
//         this.geo = new Geo(address.geo)
//     }
// }
//
// class Geo {
//     constructor(geo) {
//         this.lat = geo.lat
//         this.lng = geo.lng
//     }
// }
//
// class Company {
//     constructor(company) {
//         this.name = company.name
//         this.catchPhrase = company.catchPhrase
//         this.bs = company.bs
//     }
// }
//
// const newUser = new User(userInfo)
// newUser.name = 'Petro'
// console.log(newUser)






// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

class Tag {
    constructor(teg) {
        this.title = teg.title
        this.descripton = teg.description
        this.attributes = teg.attributes
    }
}


const tags =[
    {
        title: 'a',
        description: 'HTML теґ "a" створює посилання на іншу або на певний елемент цієї сторінки',
        attributes: [
            {title: 'href', description:'Вказує місце, куди буде посилатися створене посилання'},
            {title: 'download', description:'Пропонує завантажити вказаний за посиланням файл'},
            {title: 'target', description:'Ім\'я вікна або фрейму, куди браузер буде завантажувати документ'},
        ]
    },
    {
        title: 'div',
        description: 'використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS',
        attributes: [
            {title: 'class', description:'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).'},
            {title: 'id', description:'Задає унікальний ідентифікатор для елемента.'},
            {title: 'style', description:'Задає вбудований (inline) CSS стиль для елемента.'},
        ]
    },
    {
        title: 'h1',
        description: ' визначає найбільш важливі заголовки',
        attributes: [
            {title: 'class', description:'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).'},
            {title: 'id', description:'Задає унікальний ідентифікатор для елемента.'},
            {title: 'style', description:'Задає вбудований (inline) CSS стиль для елемента.'},
        ]
    },
    {
        title: 'span',
        description: 'являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом',
        attributes: [
            {title: 'class', description:'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).'},
            {title: 'lang', description:'Визначає основну мову вмісту елемента'},
            {title: 'style', description:'Задає вбудований (inline) CSS стиль для елемента.'},
        ]
    },
    {
        title: 'input',
        description: 'є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу',
        attributes: [
            {title: 'autofocus', description:'Автоматичне отримання фокусу елементом форми відразу після повного завантаження сторінки.'},
            {title: 'checked', description:'Активує прапорець/перемикач (для type="checkbox" чи type="radio")'},
            {title: 'form', description:'Пов\'язує поле з формою по її ідентифікатору.'},
        ]
    },
    {
        title: 'form',
        description: 'використовується для створення HTML форми на сторінці.',
        attributes: [
            {title: 'method', description:'HTTP-метод відправки даних.'},
            {title: 'autocomplete', description:'Включає або відключає автозаповнення текстових полів форми.'},
            {title: 'target', description:'Фрейм або вікно в яке буде завантажена відповідь сервера.'},
        ]
    },
    {
        title: 'option',
        description: 'призначений для створення пункту списку для тега select чи datalist.',
        attributes: [
            {title: 'disabled', description:'Відключає пункт списку.'},
            {title: 'label', description:'Вказує короткий опис для пункту списку'},
            {title: 'value', description:'Задає значення елементу `select`, яке буде обробляти скрипт.'},
        ]
    },
    {
        title: 'select',
        description: 'дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором.',
        attributes: [
            {title: 'disabled', description:'Відключає пункт списку.'},
            {title: 'multiple', description:'Множинний вибір'},
            {title: 'size', description:'Кількість видимих елементів спску.'},
        ]
    },

]

const newTag = new Tag(tags)
console.log(newTag)

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }