const fullName = 'Sebastian Berlanga';

const currentYear = new Date().getFullYear();

const profilePicture = 'yo.png';

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img[src="yo.png"]');

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);


// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Sushi', 'Burgers'];

// Modify the HTML element with the id of "food" to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the new favorite food item to your favorite food array using push()
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of "food"
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array after removing the first element
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
