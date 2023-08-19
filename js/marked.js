markFavorites();
markOrdered();

function markFavorites() {
  let wishList = JSON.parse(window.localStorage.getItem('marked')) || [];

  const wishListDom = document.createElement('ul');
  wishListDom.innerHTML = wishList;

  let favoritesHeartsArr = wishListDom.querySelectorAll('.chosen-heart');
  favoritesHeartsArr = Array.from(favoritesHeartsArr);

  favoritesHeartsArr.map(item => {
    let heartBtn = document.getElementById(item.id);
    heartBtn &&
      heartBtn.classList.add('chosen-heart') &&
      heartBtn.parentElement.parentElement.classList.add('favorites');
  });
}

function toggleFavorites(id) {
  const heart = document.getElementById(id);

  const product = heart.parentElement.parentElement;

  heart.classList.toggle('chosen-heart');
  product.classList.toggle('favorites');

  let marked = JSON.parse(window.localStorage.getItem('marked')) || [];
  marked = Array.from(marked);

  marked = marked.filter(item => !item.includes(product.id));

  if (product.classList.contains('favorites') || product.classList.contains('ordered')) {
    marked.push(product.outerHTML);
  }

  window.localStorage.setItem('marked', JSON.stringify(marked));
}

function markOrdered() {
  let cartList = JSON.parse(window.localStorage.getItem('marked')) || [];

  const cartListDom = document.createElement('ul');
  cartListDom.innerHTML = cartList;

  let orderedCartsArr = cartListDom.querySelectorAll('.chosen-cart');
  orderedCartsArr = Array.from(orderedCartsArr);

  orderedCartsArr.map(item => {
    let cartBtn = document.getElementById(item.id);
    cartBtn &&
      cartBtn.classList.add('chosen-cart') &&
      cartBtn.parentElement.parentElement.classList.add('ordered');
  });
}

function toggleOrdered(id) {
  const cart = document.getElementById(id);
  const product = cart.parentElement.parentElement;

  cart.classList.toggle('chosen-cart');
  product.classList.toggle('ordered');

  let marked = JSON.parse(window.localStorage.getItem('marked')) || [];
  marked = Array.from(marked);

  marked = marked.filter(item => !item.includes(product.id));

  if (product.classList.contains('favorites') || product.classList.contains('ordered')) {
    // const num = product.querySelector('.num');
    // const quantity = product.querySelector('.quantity');
    // const sum = product.querySelector('.sum');
    // const uah = product.querySelector('.uah');

    // num.remove();
    // quantity.remove();
    // sum.remove();
    // uah.remove();

    marked.push(product.outerHTML);
  }

  window.localStorage.setItem('marked', JSON.stringify(marked));
}
