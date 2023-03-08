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
      console.log('chosen', chosen);
      console.log('item', item);
    }
  }
}
