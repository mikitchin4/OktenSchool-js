// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижче інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

    const id = new URLSearchParams(window.location.search).get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(value => value.json())
        .then(post => {
            const postDetails = document.getElementById('postDetails');
            postDetails.innerHTML = `
               <h3>User Id: ${post.userId}</h3>
               <h3>Post id: ${post.id}</h3>
               <p>Title: ${post.title}</p>
               <p>Body: ${post.body}</p>`

            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(value => value.json())
                .then(comments => {

                    const commentsTitle = document.createElement('h1');
                    commentsTitle.innerText = 'Comments:';
                    postDetails.appendChild(commentsTitle);

                    const commentDetailsDiv = document.getElementById('commentDetails');

                    comments.forEach(comment => {
                        const commentDiv = document.createElement('div');
                        commentDiv.className = 'postClass';

                        for (const key in comment) {
                            const commentDetails = document.createElement('p');
                            commentDetails.innerText = `${key}: ${comment[key]}`;
                            commentDiv.appendChild(commentDetails);
                        }
                        commentDetailsDiv.appendChild(commentDiv)
                    });
                });
        });
