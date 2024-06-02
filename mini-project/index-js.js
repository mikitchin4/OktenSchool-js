// В index.html
// 1 отримати масив об'єктів з endpoint https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
        .then(users => {
            const usersContainer = document.getElementById('usersContainer');

            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'userDiv';

                const userId = document.createElement('p');
                userId.innerText = `ID: ${user.id}`;
                userDiv.appendChild(userId);

                const userName = document.createElement('p');
                userName.innerText = `Name: ${user.name}`;
                userDiv.appendChild(userName);

                const userLink = document.createElement('a');
                userLink.href = `user-details-html.html?id=${user.id}`;
                userLink.innerText = 'User Details';
                userDiv.appendChild(userLink);

                usersContainer.appendChild(userDiv);
            });
        });

