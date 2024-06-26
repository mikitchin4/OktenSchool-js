// - створити блок

// let newDiv = document.createElement('div');
// document.body.appendChild(newDiv);

// - додати йому класи wrap, collapse, alpha, beta

// newDiv.classList.add('wrap', 'collapse', 'alpha', 'betawrap');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// newDiv.innerText = 'Hello Mentor';

// - додати цей блок в body.

// document.body.appendChild(newDiv);

// - клонувати його повністю, та додати клон в body.

// let clonedDiv = newDiv.cloneNode(true);
// document.body.appendChild(clonedDiv);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let info = ['Main','Products','About us','Contacts'];
//
// let ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// info.forEach(item => {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let ul = document.createElement('ul');
// document.body.append(ul);
//
//
// for (const course of coursesAndDurationArray) {
//     let li = document.createElement('li');
//     li.innerText = `title : ${course.title}   monthDuration : ${course.monthDuration}`;
//     ul.append(li);
// }


// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скрипта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//
//     let text = document.createElement('p');
//     text.classList.add('description');
//     text.innerText = `Тривалість навчання ${course.monthDuration}`;
//
//
//     div.appendChild(h1);
//     div.appendChild(text);
//
//     document.body.appendChild(div);
// }

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// Проітерувати його, створити для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

// for (const simpson of simpsons) {
//     let member = document.createElement('div');
//     member.classList.add('member');
//
//     let name = document.createElement('h3');
//     name.classList.add('name');
//     name.innerText = `name: ${simpson.name}`;
//
//     let surname = document.createElement('h3');
//     surname.classList.add('surname');
//     surname.innerText = `surname: ${simpson.surname}`;
//
//     let age = document.createElement('p');
//     age.classList.add('age');
//     age.innerText = `age: ${simpson.age}`;
//
//     let info = document.createElement('p');
//     info.classList.add('info');
//     info.innerText = simpson.info;
//
//     let photo = document.createElement('img');
//     photo.classList.add('photo');
//     photo.src = simpson.photo;
//     photo.alt = `${simpson.name} ${simpson.surname}`;
//
//     member.appendChild(name);
//     member.appendChild(surname);
//     member.appendChild(age);
//     member.appendChild(info);
//     member.appendChild(photo);
//
//     document.body.appendChild(member);
// }

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
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
//
// const courses = document.getElementById('courses');
//
// coursesArray.forEach(course => {
//     const courseDiv = document.createElement('div');
//     courseDiv.className = 'course';
//
//     const titleDiv = document.createElement('div');
//     titleDiv.innerText = `Title: ${course.title}`;
//     courseDiv.appendChild(titleDiv);
//
//     const monthAndHour = document.createElement('div');
//     monthAndHour.className = 'monthAndHour';
//     courseDiv.appendChild(monthAndHour);
//
//     const monthDuration = document.createElement('div');
//     monthDuration.innerText = `Month Duration: ${course.monthDuration}`;
//     monthAndHour.appendChild(monthDuration);
//
//     const hourDuration = document.createElement('div');
//     hourDuration.className = 'hour';
//     hourDuration.innerText = `Hour Duration: ${course.hourDuration}`;
//     monthAndHour.appendChild(hourDuration);
//
//     const modules = document.createElement('div');
//     const modulesTitle = document.createElement('h4');
//     modulesTitle.innerText = 'Modules:';
//     modules.appendChild(modulesTitle);
//
//     const modulesList = document.createElement('ul');
//     course.modules.forEach(module => {
//         const modulesItem = document.createElement('li');
//         modulesItem.innerText = module;
//         modulesList.appendChild(modulesItem);
//     });
//
//     modules.appendChild(modulesList);
//
//     courseDiv.appendChild(modules);
//     courses.appendChild(courseDiv);
// });

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
// ------------------