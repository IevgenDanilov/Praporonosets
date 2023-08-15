getOrdered();
getPrices();
setOrderedLetter();
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
      // console.log('item.children', item.children);
      if (!item.querySelector('.sum')) {
        item.innerHTML +=
          '<input name="number" onChange="getPrices(this.parentNode), setOrderedLetter()" type="number" min="1" max="100" class="num" value="1" style="width: 80px; text-align: center; border: none">' +
          'шт' +
          '<input readonly name="sum" type="number" class="sum" style="width: 80px; text-align: center; border: none">' +
          'грн';
      }
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
  const totalQuantity = document.querySelector('#totalQuantity');
  const cartBox = document.querySelector('.cart-box');
  const allSumArr = cartBox.querySelectorAll('.sum');
  const allNumArr = cartBox.querySelectorAll('.num');

  let total = 0;
  let totalQ = 0;

  for (let index = 0; index < allSumArr.length; index++) {
    total += Number(allSumArr[index].value);
  }

  for (let index = 0; index < allNumArr.length; index++) {
    totalQ += Number(allNumArr[index].value);
  }

  totalPrice.setAttribute('value', total + ' ₴');
  totalQuantity.setAttribute('value', totalQ);
}

function setOrderedLetter() {
  const order = document.querySelector('#cart');
  const orderLetter = document.querySelector('#orderLetter');
  let orderedProductsArr = Array.from(order.querySelectorAll('.products__item'));

  orderLetter.value = '\n';

  orderedProductsArr.length &&
    orderedProductsArr.map(item => {
      orderLetter.value +=
        item.id +
        ' | ' +
        item.querySelector('h4').innerHTML.replace('<br>', '') +
        ' - ' +
        item.querySelector('.price').innerHTML +
        ' х ' +
        item.querySelector('.num').value +
        ' шт' +
        ' = ' +
        item.querySelector('.sum').value +
        ' грн' +
        '\n\n';
    });

  orderLetter.value +=
    'Загальна сума замовлення: ' +
    document.querySelector('#totalPrice').value.replace(/[^\d\.]*/g, '') +
    ' грн';
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
  let prewOrdersListArr = JSON.parse(prewOrdersList)?.reverse() || [];

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

  window.alarm('Наш менеджер зателефонує Вам для підтвердження замовлення!');

  window.location.reload();
}
