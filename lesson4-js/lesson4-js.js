// - створити функцію яка обчислює та повертає площу прямокутника зі, сторонами, а і б

// function area(a,b){
//     return 0.5 * (a + b);
// }
// console.log(area(13,18))
// area(13,18)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area(r){
//     return 3.14 * (r * 2);
// }
// console.log(area(7))
// area(7)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function area(h,r){
//     return 2 * 3.14 * r * (h + r);
// }
// console.log(area(13,5))
// area(13,5)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function elementArrays(arrays){
//     for (const array of arrays) {
//         console.log(array)
//     }
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
// ]
// elementArrays(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(productTitle){
//     document.write(
//         `<p>${productTitle}</p>`
//     )
// }
// paragraph('i love coffee')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function bed(text) {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// bed('i am pozym')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом,
//   який є числовим (тут використовувати цикл)

// function bad(text,number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// bad('i am ronaldo', 3)

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

// function elements(users){
//     document.write(`<ol>`)
//     for (const user of users) {
//         document.write(`<li>${user}</li>`)
//     }
//     document.write(`</ol>`)
// }
// let arrays = ['yura',23,true,'vitaliy',31,true]
// elements(arrays)

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

// function elements(lists){
//     for (let list of lists){
//         document.write(
//             `<div>
//                 ${list.id}
//                 ${list.name}
//                 ${list.age}
//             </div>`
//         )
//     }
// }
// let users = [
//     {id:1, name: 'vasya', age: 31},
//     {id:2, name: 'petya', age: 30},
//     {id:3, name: 'kolya', age: 29},
//     {id:4, name: 'olya', age: 28},
//     {id:5, name: 'anya', age: 31},
//     {id:6, name: 'oleg', age: 28},
//     {id:7, name: 'andrey', age: 29},
//     {id:8, name: 'masha', age: 30},
//     {id:9, name: 'olya', age: 31},
//     {id:10, name: 'max', age: 31}
// ];
// elements(users)

// - створити функцію яка повертає найменьше число з масиву

// function array(lists){
//     let smallNumber = lists[0];
//     for (let list of lists) {
//         if (smallNumber > list){
//             smallNumber = list
//         }
//     }
//     console.log(smallNumber)
// }
// let numbers = [11,22,66,44,98,23,64,9]
// array(numbers)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// let arr = [11,22,66,44,98,23,64,9];
// console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     if (index1 >= 0 || index1 < arr.length || index2 >= 0 || index2 < arr.length){
//         arr[index1] = arr[index2] + arr[index1];
//         arr[index2] = arr[index1] - arr[index2];
//         arr[index1] = arr[index1] - arr[index2];
//         return arr
//     }
// }
// let arr = [48,22,66,44]
// let result = swap(arr,0,2)
// console.log(result)


// function swap(arr,index1,index2){
// let newArr=arr[index1];
// arr[index1]=arr[index2];
// arr[index2]=newArr;
//     return arr
// }
// let arr=['yura',true,333,'bogdan'];
// const res = swap(arr,1,3);
// console.log(res)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     debugger
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency){
//             return sumUAH / currency.value
//         }
//     }
//     return 'Error'
// }
//
// console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
