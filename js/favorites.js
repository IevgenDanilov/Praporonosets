// function addToFavorites(id) {
//   var heart;

//   heart = document.getElementById(id);

//   heart.classList.toggle('favorites');
// }

function addToFavorites(id) {
  var heart;
  let products;

  heart = document.getElementById(id);
  products = document.getElementsByClassName('products-item');

  heart.classList.toggle('chosen');

  // for (const key in products) {
  //   if (Object.hasOwnProperty.call(products, key)) {
  //     const item = products[key];
  //     item.classList.toggle('favorites');
  //   }
  // }

  // console.log('products', products);

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

  let favorites = document.getElementsByClassName('favorites');
  let domElements = JSON.parse(window.localStorage.getItem('favorites')) || [];

  for (const key in favorites) {
    if (Object.hasOwnProperty.call(favorites, key)) {
      const element = favorites[key];
      // console.log('element', element);
      domElements.push('class="products-item"' + element.innerHTML + '</li>');
    }
  }

  // let data = domElements.join('<!-- NEXT DOM ELEMENT -->');
  // window.localStorage.setItem('favorites', data);

  // let prew = JSON.parse(window.localStorage.getItem('favorites')) || [];
  // let Arr = [...prew, ...domElements];
  let uniqArr = domElements.filter((el, ind) => ind === domElements.indexOf(el));

  window.localStorage.setItem('favorites', JSON.stringify(uniqArr));
  // window.localStorage.setItem('favorites', JSON.stringify(null));

  // .trim(',')

  // let localStorage1 = window.localStorage.getItem('favorites');
  // console.log('localStorage1:', localStorage1);

  // var cart = document.getElementById('cart');
  // cart.innerHTML = JSON.parse(window.localStorage.getItem('favorites'));
}
