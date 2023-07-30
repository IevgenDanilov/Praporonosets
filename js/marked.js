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
  // знаходимо кнопку сердечко по id
  const heart = document.getElementById(id);

  // визначаємо продукт який містить цю кнопку
  const product = heart.parentElement.parentElement;

  // змінюємо клас в сердечку
  heart.classList.toggle('chosen-heart');
  // змінюємо клас в продукті
  product.classList.toggle('favorites');

  // Отримуємо зі сховища масив позначених товарів
  let marked = JSON.parse(window.localStorage.getItem('marked')) || [];
  marked = Array.from(marked);

  // попередній варіант продукту (при наявності) прибираємо з масиву marked
  marked = marked.filter(item => !item.includes(product.id));

  // якщо продукт містить клас favorites чи ordered то його оновлений варіант записуємо в масив marked
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

  // попередній варіант продукту (при наявності) прибираємо з масиву marked
  marked = marked.filter(item => !item.includes(product.id));

  // якщо продукт містить клас favorites чи ordered то його оновлений варіант записуємо в масив marked
  if (product.classList.contains('favorites') || product.classList.contains('ordered')) {
    marked.push(product.outerHTML);
  }

  window.localStorage.setItem('marked', JSON.stringify(marked));
}
