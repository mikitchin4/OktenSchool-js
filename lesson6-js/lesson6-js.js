// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string = ['hello world', 'lorem ipsum', 'javascript is cool'];
// console.log(string[0].length)
// console.log(string[1].length)
// console.log(string[2].length)
// console.log(string.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string = ['hello world', 'lorem ipsum', 'javascript is cool'];
// console.log(string[0].toUpperCase());
// console.log(string[1].toUpperCase());
// console.log(string[2].toUpperCase());

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// console.log(string[0].toLowerCase());
// console.log(string[1].toLowerCase());
// console.log(string[2].toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.length)
//
// let newString = str.trim();
// console.log(newString.length)

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let string = str.split(' ');
// console.log(string)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.

// const arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// const newArray = arr.map(arr => arr.toString())
// console.log(newArray)
// console.log(arr)

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const nums = [11,21,3];
//
// const sortNums = nums.toSorted((number1, number2) => number1 - number2);
// console.log(sortNums)
// const sortNums1 = nums.toSorted((number1, number2) => number2 - number1);
// console.log(sortNums1)

// ==========================
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// const sortByMonthDuration = coursesAndDurationArray.sort((course1, course2) => course1.monthDuration - course2.monthDuration);
// console.log(sortByMonthDuration)

// -- відфільтрувати, залишивши тільки курси з тривалістю більше ніж 5 місяців

// const filterWithMonth = coursesAndDurationArray.filter(course => course.monthDuration > 5);
// console.log(filterWithMonth)


// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

// const courseId = coursesAndDurationArray.map((value, index) => {
//     return{id: index + 1, ...value}
//     // return{id: index + 1, title : value.title, monthDuration : value.monthDuration} - 2-ий спосіб
// });
// console.log(courseId);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const deckCards = [
    {id: 6, cardSuit: 'space', color: 'black'},
    {id: 6, cardSuit: 'diamond', color: 'red'},
    {id: 6, cardSuit: 'heart', color: 'red'},
    {id: 6, cardSuit: 'clubs', color: 'black'},
    {id: 7, cardSuit: 'space', color: 'black'},
    {id: 7, cardSuit: 'diamond', color: 'red'},
    {id: 7, cardSuit: 'heart', color: 'red'},
    {id: 7, cardSuit: 'clubs', color: 'black'},
    {id: 8, cardSuit: 'space', color: 'black'},
    {id: 8, cardSuit: 'diamond', color: 'red'},
    {id: 8, cardSuit: 'heart', color: 'red'},
    {id: 8, cardSuit: 'clubs', color: 'black'},
    {id: 9, cardSuit: 'space', color: 'black'},
    {id: 9, cardSuit: 'diamond', color: 'red'},
    {id: 9, cardSuit: 'heart', color: 'red'},
    {id: 9, cardSuit: 'clubs', color: 'black'},
    {id: 10, cardSuit: 'space', color: 'black'},
    {id: 10, cardSuit: 'diamond', color: 'red'},
    {id: 10, cardSuit: 'heart', color: 'red'},
    {id: 10, cardSuit: 'clubs', color: 'black'},
    {id: 'jack', cardSuit: 'space', color: 'black'},
    {id: 'jack', cardSuit: 'diamond', color: 'red'},
    {id: 'jack', cardSuit: 'heart', color: 'red'},
    {id: 'jack', cardSuit: 'clubs', color: 'black'},
    {id: 'queen', cardSuit: 'space', color: 'black'},
    {id: 'queen', cardSuit: 'diamond', color: 'red'},
    {id: 'queen', cardSuit: 'heart', color: 'red'},
    {id: 'queen', cardSuit: 'clubs', color: 'black'},
    {id: 'king', cardSuit: 'space', color: 'black'},
    {id: 'king', cardSuit: 'diamond', color: 'red'},
    {id: 'king', cardSuit: 'heart', color: 'red'},
    {id: 'king', cardSuit: 'clubs', color: 'black'},
    {id: 'ace', cardSuit: 'space', color: 'black'},
    {id: 'ace', cardSuit: 'diamond', color: 'red'},
    {id: 'ace', cardSuit: 'heart', color: 'red'},
    {id: 'ace', cardSuit: 'clubs', color: 'black'},
];


// - знайти піковий туз

// let aceClubs = deckCards.find(value => value.id === 'ace' && value.cardSuit === 'clubs');
// console.log(aceClubs)


// - всі шістки

// let sixes = deckCards.filter(value => value.id === 6);
// console.log(sixes)

// - всі червоні карти

// let redCards = deckCards.filter(value => value.color === 'red');
// console.log(redCards)

// - всі буби

// let diamond = deckCards.filter(value => value.cardSuit === 'diamond');
// console.log(diamond);


// - всі хрести від 9 та більше

// const clubsCards = deckCards.filter(value => {
//     if (value.cardSuit === 'clubs'){
//         if (typeof value.id === 'number'){
//             return value.id > 9;
//         }
//         return true;
//     }
// })
// console.log(clubsCards);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// const suit = deckCards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'space'){
//         accumulator.spades.push(card)
//     }
//     if (card.cardSuit === 'diamond'){
//         accumulator.diamonds.push(card)
//     }
//     if (card.cardSuit === 'heart'){
//         accumulator.hearts.push(card)
//     }
//     if (card.cardSuit === 'clubs'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
//
// console.log(suit)

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass

// let modulesSass = []
// coursesArray.forEach(value => {
//     if (value.modules.includes('sass')){
//         modulesSass.push(value);
//     }
// })
// console.log(modulesSass)

// --написати пошук всіх об'єктів, в який в modules є docker

// let modulesDocker = []
// coursesArray.forEach(value => {
//     if (value.modules.includes('docker')){
//         modulesDocker.push(value)
//     }
// });
//
// console.log(modulesDocker)