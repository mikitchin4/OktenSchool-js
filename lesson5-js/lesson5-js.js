// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a,b) => 0.5 * (a + b);
// console.log(calc(16,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (r) => 3.14 * (r * 2);
// console.log(calc(9))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// let calc = (h,r) => 2 * 3.14 * r * (h + r);
// console.log(calc(10,20))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let usersArray = (users) => {
//     for (let i = 0; i < users.length; i++) {
//     }
//     return users
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(usersArray(users))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (productTitle) =>{
//     document.write(
//         `<p>${productTitle}</p>`
//     )
// }
// paragraph('i love my mam');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let bed = (productTitle) => {
//     document.write(`<ul>`)
//         document.write(`<li>${productTitle}</li>`)
//         document.write(`<li>${productTitle}</li>`)
//         document.write(`<li>${productTitle}</li>`)
//     document.write(`</ul>`)
// }
// bed('i love coffee')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let bed = (productTitle,numberTitle) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < numberTitle; i++) {
//         document.write(`<li>${productTitle}</li>`)
//     }
//     document.write(`</ul>`)
// }
// bed('i love coffee', 6)

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

// let arrays = (users) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         document.write(`<li>${user}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let array = ['max',true,48,'ivan',false,34,'ostap',true,96]
// arrays(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

// let user = (userList) => {
//     for (let list of userList){
//         document.write(
//             `<div>
//                 ${list.name}
//                 ${list.age}
//                 ${list.status}
//             </div>`
//         )
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(user(users));

// - створити функцію яка повертає найменьше число з масиву

// let number = (array) => {
//     let smallNumber = array[0]
//     for (let arr of array){
//         if (smallNumber > arr){
//             smallNumber = arr
//         }
//     }
//     console.log(smallNumber)
// }
// let numbers = [1978,1956,2001,2014,1932,1965,1999,2024]
// number(numbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

// let sum = (numbers) => {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     return total;
// }
//
// let array = [1978,1956,2001,2014,1932,1965,1999,2024];
// console.log(sum(array))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (array, index1, index2) =>{
//             if (array >= index1 || index1 < array.length || index2 < array || array.length > index2){
//                 let number = array[index1];
//                 array[index1] = array[index2]
//                 array[index2] = number
//                 return array
//             }
// }
// let array = [11,22,33,44]
// console.log(swap(array,0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency){
//             return sumUAH / currency.value
//         }
//     }
//     return 'Error'
// }
//
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))