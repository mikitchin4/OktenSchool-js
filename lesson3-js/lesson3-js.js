// --створити масив з:
// - з 5 числових значень

// let number = [12,24,45,67,87]

// - з 5 стрічкових значень

// let tape = ['apple','mum','dad','banana','magic']

// - з 5 значень стрічкового, числового та булевого типу

// let booleang = ['Yura',1978,true,2001,false]

// - та вивести його в консоль

// console.log(number,tape,booleang)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty  = [];
// empty[0] = 'Yura';
// empty[1] = 23;
// empty[2] = 'Repetylo';
//
// console.log(empty)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let numbers = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// let i = 0;
// while (i < numbers.length){
//     let number = numbers[i];
//     i++
//     console.log(number)
// }

// 2. перебрати його циклом for

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }

// 3. перебрати циклом while та вивести числа тільки з непарним індексом

// let i = 1
// while (i < numbers.length){
//     let number = numbers[i];
//     i += 2;
//     console.log(number)
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// for (let i = 1; i < numbers.length; i += 2){
//     let number = numbers[i];
//     console.log(number)
// }

// 5. перебрати циклом while та вивести числа тільки парні значення

// let i = 0
// while (i <numbers.length){
//     let number = numbers[i];
//     i += 2
//     console.log(number)
// }

// 6. перебрати циклом for та вивести числа тільки парні значення

// for (let i = 0; i < numbers.length; i += 2){
//     let number = numbers[i];
//     console.log(number)
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++){
//     let number = numbers[i];
//     if (number % 3 === 0){
//         number = 'okten';
//     }
//     console.log(number)
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = numbers.length - 1; i >= 0; i--) {
//     let number = numbers[i];
//     console.log(number)
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = numbers.length -1;
// while (i >= 0){
//     let number = numbers[i];
//     i--
//     console.log(number)
// }

// for (let i = numbers.length - 1; i >= 0; i--) {
//     let number = numbers[i];
//     console.log(number)
// }

// let i = numbers.length -1;
// while (i >= 0){
//     let number = numbers[i];
//     i -= 2;
//     console.log(number)
// }

// for (let i = numbers.length -1; i >= 0; i -= 2){
//     let number = numbers[i];
//     console.log(number)
// }

// let i = numbers.length -2
// while (i >= 0){
//     let number = numbers[i];
//     i -= 2
//     console.log(number)
// }

// for (let i = numbers.length -2; i >= 0; i -= 2){
//     let number = numbers[i];
//     console.log(number)
// }

// for (let i = numbers.length -1; i >= 0; i--){
//     let number = numbers[i];
//     if (number % 3 === 0){
//         number = 'okten';
//     }
//     console.log(number)
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number)
// }

// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

// let users = ['Yura','Ivan','Stepan','Mykola','Vitaliy','Petro','Ostap','Maks','Danilo','Akakiy']
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrays = ['Yura','Ivanna',2001,1978,false,34,true,'Ivan',false,'Roman']
//
// for (let i = 0; i < arrays.length; i++) {
//     const array = arrays[i];
//     console.log(array)
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrays = ['Yura','Ivanna',2001,1978,false,34,true,'Ivan',false,'Roman']
//
// for (let i = 0; i < arrays.length; i++) {
//     const array = arrays[i];
//     if (typeof array === 'boolean'){
//         console.log(array)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrays = ['Yura','Ivanna',2001,1978,false,34,true,'Ivan',false,'Roman']
//
// for (let i = 0; i < arrays.length; i++) {
//     const array = arrays[i];
//     if (typeof array === 'number'){
//         console.log(array)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrays = ['Yura','Ivanna',2001,1978,false,34,true,'Ivan',false,'Roman']
//
// for (let i = 0; i < arrays.length; i++) {
//     const array = arrays[i];
//     if (typeof array === 'string'){
//         console.log(array)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let masif = [];
// masif[0] = {name : 'yura', surname : 'ivanovich', age : 23};
// masif[1] = {name : 'ivan', surname : 'dimitrivich', age : 25};
// masif[2] = {name : 'roma', surname : 'ivanovich', age : 27};
// masif[3] = {name : 'dima', surname : 'stepanovich', age : 28};
// masif[4] = {name : 'stepan', surname : 'maksimovich', age : 10};
// masif[5] = {name : 'vitaliy', surname : 'ivanovich', age : 32};
// masif[6] = {name : 'ivanna', surname : 'ivanovich', age : 37};
// masif[7] = {name : 'lesyk', surname : 'ivanovich', age : 31};
// masif[8] = {name : 'yulik', surname : 'ivanovich', age : 98};
// masif[9] = {name : 'maks', surname : 'ivanovich', age : 11};
//
// for (const masifElement of masif) {
//     console.log(masifElement)
// }

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`${i + 1}`);
//     document.write(`${i + 1}`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`${i + 1}`);
//     document.write(`${i + 1}`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`${i + 2}`);
//     document.write(`${i + 2}`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(`${i + 1}`);
//     document.write(`${i + 1}`);
// }

// створити масив книжок (назва, кількість сторінок, автори, жанри).
// - знайти найбільшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
