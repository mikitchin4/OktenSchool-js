// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//

// const basketBlock = document.getElementsByClassName('basket')[0];
//
// fetch('https://dummyjson.com/carts')
//     .then((value) => value.json())
//     .then((basket) => {
//
//         let carts = basket.carts
//         for (const cart of carts) {
//             let cartContainer = document.createElement('div');
//             cartContainer.classList.add('cartContainer')
//
//
//             let divDescription = document.createElement('div');
//             divDescription.innerText = `id: ${cart.id}`;
//             cartContainer.appendChild(divDescription);
//
//                 let products = cart.products
//                     for (const product of products) {
//                     let productContainer = document.createElement('div')
//
//                     let discriptionProduct = document.createElement('div');
//                     discriptionProduct.classList.add('discriptionProduct')
//                     discriptionProduct.innerText = `Product Id: ${product.id},
//                                                     Title: ${product.title},
//                                                     Price: ${product.price},
//                                                     Quantity: ${product.quantity},
//                                                     Total: ${product.total},
//                                                     DiscountPercentage: ${product.discountPercentage},
//                                                     DiscountedTotal: ${product.discountedTotal}`;
//                     let divImg = document.createElement('img');
//                     divImg.src = product.thumbnail;
//
//                     productContainer.append(discriptionProduct, divImg);
//                     cartContainer.appendChild(productContainer);
//                 }
//
//             let divDescription2 = document.createElement('div');
//             divDescription2.innerText = `total: ${cart.total},
//                                         discountedTotal: ${cart.discountedTotal},
//                                         userId: ${cart.userId},
//                                         totalProducts: ${cart.totalProducts},
//                                         totalQuantity: ${cart.totalQuantity}`;
//             cartContainer.appendChild(divDescription2);
//
//             basketBlock.appendChild(cartContainer);
//         }
//     });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//

// fetch('https://dummyjson.com/recipes')
//     .then(response => response.json())
//     .then(data => recipesId(data.recipes))
//
// function recipesId(recipes) {
//     const recipesContainer = document.getElementById('recipes');
//
//     recipes.forEach(recipe => {
//         const recipeDiv = document.createElement('div');
//
//         recipeDiv.innerHTML = `
//                     <h2>${recipe.name}</h2>
//                     <img src="${recipe.image}" alt="${recipe.name}">
//                     <p>Prep Time: ${recipe.prepTimeMinutes}</p>
//                     <p>Cook Time: ${recipe.cookTimeMinutes}</p>
//                     <p>Servings: ${recipe.servings}</p>
//                     <p>Difficulty: ${recipe.difficulty}</p>
//                     <p>Cuisine: ${recipe.cuisine}</p>
//                     <p>Calories Per Serving: ${recipe.caloriesPerServing}</p>
//                     <p>Rating: ${recipe.rating} (${recipe.reviewCount})</p>
//                     <p>Meal Type: ${recipe.mealType[0]}</p>
//                     <p>Tags: ${recipe.tags[0]}, ${recipe.tags[1]}</p>
//                     <h3>Ingredients:</h3>
//                     <ul>
//                         ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
//                     </ul>
//                     <h3>Instructions:</h3>
//                     <ol>
//                         ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
//                     </ol>
//                 `;
//         recipesContainer.append(recipeDiv);
//     });
// }

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX де ХХХ - айді користувача)

const id = new URLSearchParams(window.location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const userDetails = document.getElementById('userDetails');
        userDetails.innerHTML = `
               <h2>${user.name}</h2>
                <p>ID: ${user.id}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Company name: ${user.company.name}</p>
                <p>Company Catch Phrase: ${user.company.catchPhrase}</p>
                <p>Company BS: ${user.company.bs}</p>`;
    })

