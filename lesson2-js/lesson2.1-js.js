// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

////-------приклад 1 ------\\\\\\
// let a = 1;
// let x = 0;
// if (x!==a){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// ////-------приклад 2 ------\\\\\\
// let a = 0;
// let x = 0;
// if (x!==a){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

////-------приклад 3 ------\\\\\\
// let a = -3;
// let x = 0;
// if (x!==a){
//     console.log(true)
// }
// else {
//     console.log(false)
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 25;
//     if (time>=0 && time<15){
//         console.log('first quarter')
//     }
//     else if (time>=15 && time<30){
//         console.log("second quarter")
//     }
//     else if (time>=30 && time<45){
//         console.log('third quarter')
//     }
//     else if (time>=45 && time<59){
//         console.log('fourth quarter')
//     }
//     else {
//         console.log('error')
//     }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 17;
//     if (day>0 && day<11){
//         console.log('first decade')
//     }
//     else if (day>=11 && day<21){
//         console.log('second decade')
//     }
//     else if (day>=21 && day<31){
//         console.log('third decade')
//     }
//     else{
//         console.log('error')
//     }


// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let day = prompt('choose a day of the week');
// switch (day){
//     case '1':
//         console.log('Sunday')
//         break
//     case '2':
//         console.log('Monday')
//         break
//     case '3':
//         console.log('Tuesday')
//         break
//     case '4':
//         console.log('Wednesday')
//         break
//     case '5':
//         console.log('Thursday')
//         break
//     case '6':
//         console.log('Friday')
//         break
//     case '7':
//         console.log('Saturday')
//         break
//     default:
//         console.log(Error)
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.

// let a = prompt('Enter a number');
// let b = prompt('Enter a number');
//
// let ter = a >= b ? a : b;
//
// console.log(ter)







//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і т.д включно). Напишіть код який,
//         буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибно подібні, тобто ті, які приводиться до false, а це 0 null undefined і т.д).

// let x = 0;
// x = x ? x : 'default';
//
// console.log(x)



//     - з файлу arrays.js (лежить в папка 2023 plan) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('super')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Super')
}
