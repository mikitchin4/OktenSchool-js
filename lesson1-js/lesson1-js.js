// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a)

let b = 'owu';
console.log(b)

let c = 'com';
console.log(c)

let d = 'ua';
console.log(d)

let e = 1;
console.log(e)

let f = 10;
console.log(f)

let g = -999;
console.log(g)

let h = 123;
console.log(h)

let i = 3.14;
console.log(i)

let j = 2.7;
console.log(j)

let k = 16;
console.log(k)

let l = false;
console.log(l)

let m = true;
console.log(m)

// console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);//------можна вивести ще так але виведеться воно в рядок-------\\


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yura';
let middleName = 'Repetylo';
let lastName = 'Olegovych';

// let space = ' ';
// let person = firstName + space + middleName + space + lastName;

person =`${firstName} ${middleName} ${lastName}`;

console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let ab = 100;
let bc = '100';
let cd = true;

console.log(typeof ab);
console.log(typeof bc);
console.log(typeof cd);

// Додаткове для тих хто цікавився prompt`om
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім`ям, По-батькові та роками. та вивести в консоль

let name = prompt();
let last = prompt();
let age = prompt();

console.log(name)
console.log(last)
console.log(age)