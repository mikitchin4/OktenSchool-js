// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const id = new URLSearchParams(window.location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((value) => value.json())
    .then((user) => {
        const userDetails = document.getElementById('userDetails');
        userDetails.innerHTML = `
               <h2>${user.name}</h2>
               <h3>${user.username}</h3>
                <p>Email: ${user.email}</p>
                <p>Address street: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}, Zipcode: ${user.address.zipcode}</p>
                <p>Geolocation: lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Company name: ${user.company.name}</p>
                <p>Company Catch Phrase: ${user.company.catchPhrase}</p>
                <p>Company BS: ${user.company.bs}</p>`;
    });

    document.getElementById('postsOfCurrentUser')
    addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(posts => {
                const postsContainer = document.getElementById('userPost');

                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.className = 'postDiv';

                    const postTitle = document.createElement('p');
                    postTitle.innerText = `${post.title}`;
                    postDiv.appendChild(postTitle);

                    const postLink = document.createElement('a');
                    postLink.href = `post-details-html.html?id=${post.id}`;
                    postLink.innerText = 'Post Details';
                    postDiv.appendChild(postLink);

                    postsContainer.appendChild(postDiv);
                });
            });
        });