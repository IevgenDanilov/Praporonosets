// function addToFavorites(id) {
//   var heart;

//   heart = document.getElementById(id);

//   heart.classList.toggle('favorites');
// }

function addToFavorites(id) {
  var heart;
  let favorites;

  heart = document.getElementById(id);
  favorites = document.getElementsByClassName('products-item');

  heart.classList.toggle('chosen');

  for (const key in favorites) {
    if (Object.hasOwnProperty.call(favorites, key)) {
      const item = favorites[key];
      item.classList.toggle('favorites');
    }
  }

  console.log('favorites', favorites);
}
