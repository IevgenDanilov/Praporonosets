markFavorites();

function markFavorites() {
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];
  wishList = Array.from(wishList);

  let products = document.getElementsByClassName('products-item');
  products = Array.from(products);

  // console.log('wishList', wishList);
  // console.log('products', products);

  // let product1 = $('products-item'[0].html());
  // console.log('product1', product1);
  console.log('product1', products[0].outerHTML);

  wishList.map(item => {
    console.log('item', item);

    if (products.indexOf(item) !== -1) {
      let heartBtn = item.getElementsByClassName('heart');
      // console.log('heartBtn', heartBtn);
      let heartId = heartBtn[0].id;
      // console.log('heartId', heartId);

      let currentHeart = document.getElementById(heartId);
      currentHeart.classList.add('chosen');
    }
  });

  // console.log('products', products);
}

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
