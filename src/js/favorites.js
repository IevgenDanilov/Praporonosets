// function markFavorites(id) {}

function addToFavorites(id) {
  let heart = document.getElementById(id);
  heart.classList.toggle('chosen');

  let products = document.getElementsByClassName('products-item');
  products = Array.from(products);

  products.map(item => {
    let chosen = item.getElementsByClassName('chosen');
    if (chosen.length) {
      item.classList.add('favorites');
    } else {
      item.classList.remove('favorites');
    }
  });

  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];

  let favorites = document.getElementsByClassName('favorites');

  favorites = Array.from(favorites);

  // wishList = [...wishList, ...favorites];

  favorites.map(item => {
    // wishList.push(item);
    wishList.push('<li class="products-item favorites show">' + item.innerHTML + '</li>');
  });

  // for (const key in favorites) {
  //   if (Object.hasOwnProperty.call(favorites, key)) {
  //     const element = favorites[key];
  //     wishList.push('<li class="products-item favorites show">' + element.innerHTML + '</li>');
  //   }
  // }

  const uniqWishList = wishList.filter((el, ind) => ind === wishList.indexOf(el));

  window.localStorage.setItem('wishList', JSON.stringify(uniqWishList));
}
