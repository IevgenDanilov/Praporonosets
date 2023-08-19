getPrices();
setOrderedLetter();
getPrewOrders();

function getPrices(object = document) {
  const priceArr = object.querySelectorAll('.price');
  const numArr = object.querySelectorAll('.num');
  const sumArr = object.querySelectorAll('.sum');

  for (let i = 0; i < priceArr.length; i++) {
    numArr[i].setAttribute('value', numArr[i].value);
    const currentSum = numArr[i].value * priceArr[i].innerHTML.replace(/[^\d\.]*/g, '');
    sumArr[i].setAttribute('value', currentSum);
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

  totalQuantity.setAttribute('value', totalQ);
  totalPrice.setAttribute('value', total + ' ₴');
}

function setOrderedLetter() {
  const order = document.querySelector('#cart');
  const orderLetter = document.querySelector('#orderLetter');
  let orderedProductsArr = Array.from(order.querySelectorAll('.products__item'));

  orderLetter.value = '';

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
        .replaceAll('chosen-heart', '')
        .replaceAll('<input', '<input hidden="hidden"')
        .replaceAll('<span', '<span hidden="hidden"');
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
      '<h4 class="cart__title"><time>' +
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
