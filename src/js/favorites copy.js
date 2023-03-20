function addToFavorites(id) {
  let heart = document.getElementById(id);
  heart.classList.toggle('chosen');

  let products = document.getElementsByClassName('products-item');
  products = Array.from(products);

  products.map(item => {
    let chosen = item.getElementsByClassName('chosen') || [];
    if (chosen.length) {
      item.classList.add('favorites');
    } else {
      item.classList.remove('favorites');
    }
  });

  for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
      const item = products[key];
      let chosen = null;
      chosen = item.getElementsByClassName('chosen');
      if (chosen.length) {
        item.classList.add('favorites');
      } else {
        item.classList.remove('favorites');
      }
    }
  }

  const favorites = document.getElementsByClassName('favorites');
  let domElements = JSON.parse(window.localStorage.getItem('favorites')) || [];

  for (const key in favorites) {
    if (Object.hasOwnProperty.call(favorites, key)) {
      const element = favorites[key];
      domElements.push('<li class="products-item favorites show">' + element.innerHTML + '</li>');
    }
  }

  const uniqArr = domElements.filter((el, ind) => ind === domElements.indexOf(el));

  window.localStorage.setItem('favorites', JSON.stringify(uniqArr));
  // window.localStorage.setItem('favorites', '');
}
