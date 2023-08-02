getOrdered();
getPrices();
getPrewOrders();

function getOrdered() {
  const cart = document.querySelector('#cart');

  const marked = window.localStorage.getItem('marked');
  let markedListArr = JSON.parse(marked);

  markedListArr &&
    markedListArr.map(item => {
      if (item.includes('ordered')) {
        cart.innerHTML += item;
      }
    });

  let cartArr = Array.from(cart.querySelectorAll('.products__item'));
  cartArr.length &&
    cartArr.map(item => {
      item.innerHTML +=
        '<input onChange="getPrices(this.parentNode)" type="number" min="1" max="100" class="num" value="1" style="width: 80px; text-align: center; border: none">' +
        'шт' +
        '<input readonly type="number" class="sum" style="width: 80px; text-align: center; border: none">' +
        'грн';
    });
}

function getPrices(object = document) {
  const priceArr = object.querySelectorAll('.price');
  const numArr = object.querySelectorAll('.num');
  const sumArr = object.querySelectorAll('.sum');

  for (let i = 0; i < priceArr.length; i++) {
    numArr[i].setAttribute('value', numArr[i].value);
    sumArr[i].setAttribute(
      'value',
      numArr[i].value * priceArr[i].innerHTML.replace(/[^\d\.]*/g, ''),
    );
  }

  const totalPrice = document.querySelector('#totalPrice');
  const cartBox = document.querySelector('.cart-box');
  const allSumArr = cartBox.querySelectorAll('.sum');

  let total = 0;

  for (let index = 0; index < allSumArr.length; index++) {
    total += Number(allSumArr[index].value);
  }

  totalPrice.setAttribute('value', total + ' ₴');
}

function getPrewOrders() {
  let prewProducts = document.querySelector('#prewProducts');
  const prewProductsList = window.localStorage.getItem('marked');
  let prewProductsListArr = JSON.parse(prewProductsList);

  prewProductsListArr &&
    prewProductsListArr.map(item => {
      prewProducts.innerHTML += item
        .replaceAll('li', 'div')
        .replaceAll('ordered', '')
        .replaceAll('chosen-cart', '')
        .replaceAll('favorites', '')
        .replaceAll('chosen-heart', '');
    });

  let orders = document.querySelector('#orders');

  const prewOrdersList = window.localStorage.getItem('ordersList');
  let prewOrdersListArr = JSON.parse(prewOrdersList).reverse();

  prewOrdersListArr &&
    prewOrdersListArr.map(item => {
      orders.innerHTML += item
        .replaceAll('ordered', '')
        .replaceAll('chosen-cart', '')
        .replaceAll('favorites', '')
        .replaceAll('chosen-heart', '');
    });
}

function setOrders() {
  const order = document.querySelector('#cart');
  const totalPrice = document.querySelector('#totalPrice');

  let ordersList = JSON.parse(window.localStorage.getItem('ordersList')) || [];

  if (order.innerHTML.length) {
    ordersList.push(
      '</br>' +
        '<h4><time>' +
        new Date(Date.now()).toLocaleString() +
        '</time>, сума замовлення: ' +
        totalPrice.value +
        '</h4>' +
        '</br>' +
        order.outerHTML,
    );
  }

  window.localStorage.setItem('ordersList', JSON.stringify(ordersList));

  const markedString = window.localStorage.getItem('marked');
  let marked = markedString.replaceAll('ordered', '').replaceAll('chosen-cart', '');

  window.localStorage.setItem('marked', marked);

  window.location.reload();
}
