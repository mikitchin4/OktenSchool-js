// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1,'Yura', 'Repetylo', 'repetylo94@gmail.com', 380976695269);
// console.log(user1)


// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, age, status) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// const users = [];
//
// users.push(new User(1, 'Yura', 32, true))
// users.push(new User(2, 'Stepan', 33,false))
// users.push(new User(3, 'Viktor', 84,false))
// users.push(new User(4, 'Serhiy', 12,true))
// users.push(new User(5, 'Vitaliy', 34,false))
// users.push(new User(6, 'Bogdan', 25,true))
// users.push(new User(7, 'Petro', 25,false))
// users.push(new User(8, 'Ostap', 28,false))
// users.push(new User(9, 'Roman', 23,true))
// users.push(new User(10, 'Rostyk', 26,true))
//
// console.log(users)

//
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

// const usersId= users.filter(value => value.id % 2 === 0)
// console.log(usersId)

//
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const sortUserID = users.sort((user1, user2) => user1.id - user2.id)
// console.log(sortUserID)


//
// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const user1 = new Client(1, 'Yura', 'Repetylo', 'repetylo94@gmail.com', 380976695269, ['product1', 'product2', 'product3'])
// console.log(user1)

// - створити пустий масив, наповнити його 10 об'єктами Client

// const clients = []
// clients.push(new Client(1, 'Yura', 'Repetylo', 'repetylo94@gmail.com', 380976695269, ['product1', 'product2', 'product3']));
// clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['product1', 'product3']));
// clients.push(new Client(2, 'Jane', 'Doe', 'jane.doe@example.com', '234-567-8901', ['product3']));
// clients.push(new Client(3, 'Sam', 'Smith', 'sam.smith@example.com', '345-678-9012', ['product4', 'product5', 'product6']));
// clients.push(new Client(4, 'Alice', 'Johnson', 'alice.johnson@example.com', '456-789-0123', ['product7']));
// clients.push(new Client(5, 'Bob', 'Brown', 'bob.brown@example.com', '567-890-1234', ['product8', 'product9']));
// clients.push(new Client(6, 'Karen', 'Wilson', 'karen.wilson@example.com', '678-901-2345', ['product10']));
// clients.push(new Client(7, 'Chris', 'Davis', 'chris.davis@example.com', '789-012-3456', []));
// clients.push(new Client(8, 'Pat', 'Martinez', 'pat.martinez@example.com', '890-123-4567', ['product11', 'product12', 'product13']));
// clients.push(new Client(9, 'Terry', 'Anderson', 'terry.anderson@example.com', '901-234-5678', ['product14']));


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по-кількості товарів в полі order по зростанню. (sort)

// const clientOrder = clients.sort((order1, order2) => order2.order.length + order1.order.length);
// console.log(clientOrder)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:

// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = null;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//
//     this.info = function () {
//         console.log(`Model - ${this.model}`)
//         console.log(`Manufacturer - ${this.manufacturer}`)
//         console.log(`Year - ${this.year}`)
//         console.log(`Maximal Speed - ${this.maxSpeed}`)
//         console.log(`Engine Volume - ${this.engineVolume}`)
//     }
//
//     this.increaseMaxSpeed = function (NewSpeed) {
//         this.maxSpeed += NewSpeed
//         console.log(this.maxSpeed)
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//         console.log(this.year)
//     };
//
//     this.addDriver = function (addDriver){
//         this.driver = addDriver
//         console.log(this.driver)
//     }
// }

// const newCar = new Car ("Model S", "Tesla", 2020, 250, 2.0);
//
// console.log(newCar)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// newCar.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// newCar.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// newCar.increaseMaxSpeed(20);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// newCar.changeYear(2023)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// newCar.addDriver({name: "Yura", age: 30, licenseNumber: "BC1234AM"});

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume,) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.driver = null;
//     }
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//
//    info () {
//         console.log(`Model - ${this.model}`)
//         console.log(`Manufacturer - ${this.manufacturer}`)
//         console.log(`Year - ${this.year}`)
//         console.log(`Maximal Speed - ${this.maxSpeed}`)
//         console.log(`Engine Volume - ${this.engineVolume}`)
//     }
//
//     increaseMaxSpeed (NewSpeed) {
//         this.maxSpeed += NewSpeed
//         console.log(this.maxSpeed)
//     }
//
//     changeYear (newValue){
//         this.year = newValue
//         console.log(this.year)
//     }
//
//     addDriver (addDriver){
//         this.driver = addDriver
//         console.log(this.driver)
//     }
// }

// let car = new Car("Model S", "Tesla", 2020, 250, 2.0);
// console.log(car)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// car.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// car.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// car.increaseMaxSpeed(20)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// car.changeYear(2023)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// car.addDriver({name: "Yura", age: 30, licenseNumber: "BC1234AM"})


//
//
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name, age, shoeSize) {
//         this.name = name
//         this.age = age
//         this.shoeSize = shoeSize
//     }
// }
//
// const cinderellas = [
//     new Cinderella('ira', 32, 38),
//     new Cinderella('sofi', 33,30),
//     new Cinderella('katia', 84,31),
//     new Cinderella('vlada', 12,35),
//     new Cinderella('ivanna', 34,33),
//     new Cinderella('Bogdana', 25,37),
//     new Cinderella('olena', 25,36),
//     new Cinderella('olenka', 28,26),
//     new Cinderella('stefania', 23,34),
//     new Cinderella('diana', 26,45)
// ];
//
// console.log(cinderellas)

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name
//         this.age = age
//         this.shoeSize = shoeSize
//     }
//
//     findCinderella(cinderellas) {
//         for (let cinderella of cinderellas) {
//             if (cinderella.shoeSize === this.shoeSize) {
//                 return cinderella
//             }
//         }
//         return 'Error'
//     }
// }


// const prince = new Prince('Yura', 23, 33);
// console.log(prince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// const foundCinderella = prince.findCinderella(cinderellas);
// console.log(foundCinderella)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const foundCanderella = cinderellas.find(cinderella => cinderella.shoeSize === prince.shoeSize)
// console.log(foundCanderella)
//
// Через Array.prototype. створити власний foreach, filter, map

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };
// const arr = ['yura', 32, true, 'vitaliy', 33, false];
//
// arr.myForEach((element, index, array) => {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// });

// Array.prototype.myFilter = function(callback) {
//     const resulted = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             resulted.push(this[i]);
//         }
//     }
//     return resulted;
// };
//
// const arr = ['yura', 32, true, 'vitaliy', 33, false];
// const filterArr = arr.myFilter(value => value === true);
// console.log(filterArr);

// Array.prototype.myMap = function(callback) {
//     const resulted = [];
//     for (let i = 0; i < this.length; i++) {
//         resulted.push(callback(this[i], i, this));
//     }
//     return resulted;
// };
//
// const arr = ['yura', 32, true, 'vitaliy', 33, false];
// const mapArr = arr.myMap(value => !value === true);
// console.log(mapArr);