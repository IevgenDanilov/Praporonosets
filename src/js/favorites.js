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

  // console.log('item', products[0].outerHTML);

  // const listItem = document.querySelector('products-list');

  // wishList.map(item => {
  //   console.log('item', item);

  //   String.prototype.toDOM = function () {
  //     var d = document,
  //       i,
  //       a = d.createElement('div'),
  //       b = d.createDocumentFragment();
  //     a.innerHTML = this;
  //     while ((i = a.firstChild)) b.appendChild(i);
  //     return b;
  //   };

  //   console.log('item', item.toDOM());

  //   item = item.toDOM();

  const newList = document.createElement('ul');
  newList.innerHTML = wishList;
  console.log('newList', newList);

  let heartElArr = newList.getElementsByClassName('heart');
  console.log('heartElArr', heartElArr);
  heartElArr = Array.from(heartElArr);

  heartElArr.map(item => {
    let fin = document.getElementById(item.id);
    fin.classList.add('chosen');
    console.log('fin', fin);
    console.log('fin.parentElement', fin.parentElement.parentElement);
    fin.parentElement.parentElement.classList.add('favorites');
    // console.log('fin.parentNode', fin.parentNode.parentNode);
  });

  // newList.parentNode.replaceChild(newList.firstChild, newList.lastChild);

  // item.classList.remove('favorites');

  // if (products.indexOf(item) !== -1) {
  // let heartBtn = item.getElementsByClassName('heart');
  // console.log('heartBtn', heartBtn);
  // let heartId = heartBtn[0].id;
  // console.log('heartId', heartId);

  // let currentHeart = document.getElementById(heartId);
  // currentHeart.classList.add('chosen');
  // }
  // });

  // console.log('products', products);
}

function addToFavorites(id) {
  let heart = document.getElementById(id);
  heart.classList.toggle('chosen');
  // heart.parentElement.parentElement.classList.toggle('favorites');

  let products = document.getElementsByClassName('products-item');
  products = Array.from(products);

  products.map(item => {
    // let localHearts = [];
    // localHearts.push(item.id);

    let chosen = item.getElementsByClassName('chosen');

    console.log('chosen', chosen);
    if (chosen.length) {
      item.classList.add('favorites');
    } else {
      item.classList.remove('favorites');
    }
  });

  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];
  // wishList = Array.from(wishList);

  let favorites = document.getElementsByClassName('favorites');

  favorites = Array.from(favorites);

  // wishList = [...wishList, ...favorites];

  favorites.map(item => {
    // if (wishList.indexOf(item.outerHTML) !== -1) {
    wishList.push(item.outerHTML);
    // }
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
