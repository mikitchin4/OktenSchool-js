// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let massif;
    massif = [26, 27, 28, -0.14, 'yura', 'petya', true, false, 1948, 'finish']
    console.log(massif[0])
    console.log(massif[1])
    console.log(massif[2])
    console.log(massif[3])
    console.log(massif[4])
    console.log(massif[5])
    console.log(massif[6])
    console.log(massif[7])
    console.log(massif[8])
    console.log(massif[9])
        // console.log(massif.length)  - визначає скільки елементів є в масиві


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
let book = {
        title : 'harry potter',
        pageCount : 121,
        genre : 'fantasy'
}
console.log(book)


let book1 = {
    title : 'harry potter 2',
    pageCount : 256,
    genre : 'fantasy'
}
console.log(book1)


let book2 = {
    title : 'harry potter 3',
    pageCount : 178,
    genre : 'fantasy'
}
console.log(book2)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.



let book3 = {
        title : 'the Lord of the Rings',
        pageCount: 234,
        genre : 'fantasy',
        authors: [
            {name : 'tolkina', age : 81}
        ]
}
console.log(book3)


let book4 = {
    title : 'the Lord of the Rings',
    pageCount: 115,
    genre : 'fantasy',
    authors: [
        {name : 'tolkina', age : 81}
    ]
}
console.log(book4)


let book5 = {
    title : 'the Lord of the Rings',
    pageCount: 348,
    genre : 'fantasy',
    authors: [
        {name : 'tolkina', age : 81}
    ]
}
console.log(book5)

// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username, password.
// Вивести в консоль пароль кожного користувача

let users;
    users = [
        {name : 'petya', username : 'ivanov', password : '56789'},
        {name : 'ivan', username : 'pupkin', password : 'asffd'},
        {name : 'yura', username : 'sharc', password : 'ghjut'},
        {name : 'stepan', username : 'dimov', password : '98765'},
        {name : 'vitaliy', username : 'zverev', password : '43562'},
        {name : 'vova', username : 'nadal', password : '15263'},
        {name : 'kolya', username : 'rafa', password : '67890'},
        {name : 'vlad', username : 'zukov', password : 'fhg12'},
        {name : 'nazar', username : 'sudakov', password : 'asd12'},
        {name : 'akakiy', username : 'mudryk', password : 'asd34'}
    ]

console.log(users)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2.Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу


let weather;
    weather = [
        {morning : 12, afternoon : 20, evening : 17},
        {morning : 8, afternoon : 20, evening : 14},
        {morning : 10, afternoon : 30, evening : 25},
        {morning : 12, afternoon : 24, evening : 19},
        {morning : 5, afternoon : 13, evening : 8},
        {morning : 15, afternoon : 29, evening : 26},
        {morning : 7, afternoon : 18, evening : 13}
    ]
console.log(weather)


/////// ------ Приклад 2 --------\\\\\\\\


// let day = {
//         morning : '', afternoon : '', evening : ''
// }
// let week = [
//     {sunday:day},
//     {monday:day},
//     {tuesday:day},
//     {wednesday:day},
//     {thursday:day},
//     {friday:day},
//     {saturday:day}
// ]
// console.log(week)






