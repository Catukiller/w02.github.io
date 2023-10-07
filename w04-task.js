let myProfile = {
    name: "Sebastian Berlanga Diaz",
    age: 25,
    location: "Arequipa",
    interests: ["MTB", "Downhill"],
  };
  
  let myProfile = {
    name: "Patrick Juarez",
    favoriteFoods: [
      "Sushi",
      "Pizza",
      "Chocolate Chip Cookies",
      "Avocado Toast"
    ],
    placesLived: []
  };
  
  myProfile.placesLived.push(
    {
      place: 'Peru, Arequipa',
      length: '1 year'
    }
  );

document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
