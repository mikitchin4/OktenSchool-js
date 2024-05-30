// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


// users.onsubmit = function (e) {
//     e.preventDefault()
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const age = document.getElementById('age').value;
//
//     const user = {
//         name: name,
//         surname: surname,
//         age: age
//     };
//
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = `
//                 <h3>Введені дані:</h3>
//                 <p><strong>Ім'я:</strong> ${user.name}</p>
//                 <p><strong>Прізвище:</strong> ${user.surname}</p>
//                 <p><strong>Вік:</strong> ${user.age}</p>
//             `;
// };

// ==========================
// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// const container = document.createElement('div')
// container.innerText = '10';
// container.id = 'container'
// document.body.appendChild(container)
//
// let count = localStorage.getItem('container') ? parseInt(localStorage.getItem('container')) : 10;
//
// count += 1;
//
// localStorage.setItem('container', count);
//
// document.getElementById('container').innerText = count;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію

// let now = new Date().toLocaleString();
//
// let sessions = JSON.parse(localStorage.getItem('sessions'));
//
// sessions.push(now);
//
// localStorage.setItem('sessions', JSON.stringify(sessions));
//


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//

// const objects = Array.from({ length: 100 }, (v, i) => `Об'єкт ${i + 1}`);
//
// let currentPage = 1;
// const itemsPerPage = 10;
//
// const objectList = document.getElementById('object-list');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
//
// function displayObjects(page) {
//     objectList.innerHTML = '';
//
//     const start = (page - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const pageObjects = objects.slice(start, end);
//
//     pageObjects.forEach(object => {
//         const item = document.createElement('div');
//         item.textContent = object;
//         objectList.appendChild(item);
//     });
//
//     prev.classList.toggle('hidden', page === 1);
//     next.classList.toggle('hidden', end >= objects.length);
// }
//
//
// prev.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayObjects(currentPage);
//     }
// });
//
// next.addEventListener('click', () => {
//     if (currentPage * itemsPerPage < objects.length) {
//         currentPage++;
//         displayObjects(currentPage);
//     }
// });
//
// displayObjects(currentPage);

//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

// const textElement = document.getElementById('text');
// const hideBtn = document.getElementById('button');
//
// hideBtn.onclick = function () {
//     textElement.remove();
// };

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпут та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//

// const input = document.getElementById('age');
// const button = document.getElementById('button');
// const text = document.getElementById('text');
//
// button.onclick = function () {
//     const age = parseInt(input.value);
//     if (age < 18) {
//         text.innerText = 'do not';
//     }
//     else if (age >= 18){
//         text.innerText = 'congratulations';
//     }
// };

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100 грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається