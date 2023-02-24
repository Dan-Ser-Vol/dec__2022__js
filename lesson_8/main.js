// 1) Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = []
for (let i = 0; i < 10; i++) {
    users.push(new User(i + 1, 'Boris' + i, 'Jhonsonyuk', 'dan@lit.com', '065454545' + i))
}
console.log('Масив users',users)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const userFilter = users.filter(item => item.id % 2 === 0)
console.log( 'Парні id' ,userFilter);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3) Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const userSort = users.sort((a, b) => a - b)
 console.log('Сортування по зростанню',userSort);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4) створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor({id, name, surname, email, phone, order}) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }

    createClients() {
        const clients = []
        for (let i = 0; i <= 10; i++) {
            clients.push({
                id: this.id + i,
                name: this.name + (i + 1 ),
                surname: this.surname,
                email: i + this.email,
                phone: this.phone + i,
                order: this.order.slice(1, i + 1)
            })
        }
        return clients
    }
}

const objClients = {
    id: 1,
    name: 'Bob',
    surname: 'Spoon',
    email: 'bob@spoon.bs',
    phone: 685454545,
    order: ['TV', 'PC', 'Notebooks', 'Smartphones', ' frigs', 'tables', 'Phones', 'Monitors', 'Cables']
}
const newClient = new Client(objClients)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//5) створити пустий масив, наповнити його 10 об'єктами Client
const clients = newClient.createClients()
console.log( 'Масив clients', clients);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//6) Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientsSort = clients.sort((a, b) => a.order.length - b.order.length)
console.log('Сорт по кількості товарів' ,clientsSort);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7) Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function CreateCar(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfManufacture = yearOfManufacture
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = () => console.log(`Ми їдемо зі швидкістю ${maxSpeed} на годину`)
    this.info = () => {
        console.log({
                model: this.model,
                manufacturer: this.manufacturer,
                yearOfManufacture: this.manufacturer,
                maxSpeed: this.maxSpeed,
                engineVolume: this.engineVolume
            }
        )
    }
    this.increaseMaxSpeed = (newSpeed) => {
         console.log( 'max speed', this.maxSpeed + newSpeed)
    }
    this.changeYear = (newYear) => {
         console.log( 'change Year', this.yearOfManufacture = newYear)
    }
    this.addDriver = (driver) => {
       return  this.driver = driver;
    }

}

const  newCar = new CreateCar('TT', 'AUDI', 2004, 280, '250')

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 newCar.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
newCar.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
newCar.increaseMaxSpeed(20)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
 newCar.changeYear(2015)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(newCar.addDriver({name: ' Michael', lastName:'Schumacher',  age: 30}));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// - (Те саме, тільки через клас)
// 8) Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {

    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
        this.model = model
        this.manufacturer = manufacturer
        this.yearOfManufacture = yearOfManufacture
        this.maxSpeed = maxSpeed
        this.engineVolume = engineVolume
    }

    drive () {
        console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info(){
        console.log({
                model: this.model,
                manufacturer: this.manufacturer,
                yearOfManufacture: this.manufacturer,
                maxSpeed: this.maxSpeed,
                engineVolume: this.engineVolume
            }
        )
    }
    increaseMaxSpeed(newSpeed){
        console.log( 'max speed', this.maxSpeed + newSpeed)
    }
    changeYear (newYear) {
        console.log( 'change Year', this.yearOfManufacture = newYear)
    }
    addDriver  (driver)  {
        return  this.driver = driver;
    }

}

const car = new Car('TT', 'AUDI', 2004, 280, '250')

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car.increaseMaxSpeed(20)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear(2015)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(car.addDriver({name: ' Michael', lastName:'Schumacher',  age: 30}));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 9) створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

const cinderellaArray = [
    new Cinderella('Bridget', 29, 49),
    new Cinderella('Julia', 18, 36),
    new Cinderella('Anna', 22, 38),
    new Cinderella('Dianna', 66, 42),
    new Cinderella('Marry', 21, 39),
    new Cinderella('Jenifer', 73, 41),
    new Cinderella('Lona', 50, 35),
    new Cinderella('Galina', 20, 46),
    new Cinderella('Natasha', 27, 36),
    new Cinderella('Sofia', 21, 39),
];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 10)  Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

// Приклад створення об'єкта класу "Принц"
const prince = new Prince('Petro', 45, 46);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellaArray) {
    if (prince.shoe === cinderella.footSize)
    console.log(`З цим принцом ${prince.name} повинна бути ця попелюшка ${cinderella.name}`)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findCinderella = cinderellaArray.find(item => item.footSize === prince.shoe )
console.log(findCinderella);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////