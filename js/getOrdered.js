getOrdered();
// getPrices();
getPrewOrders();

function getOrdered() {
  const cart = document.querySelector('#cart');

  cart.innerHTML = JSON.parse(window.localStorage.getItem('cartList'));
  cart.innerHTML = cart.innerHTML.split('</li>,').join('</li> ');

  // let cartArr = Array.from(cart.querySelectorAll('.products__item'));
  // cartArr.length &&
  //   cartArr.map(item => {
  //     item.innerHTML =
  //       item.innerHTML +
  //       '<input onChange="getPrices(this.parentNode)" type="number" min="1" max="100" class="num" value="1" style="width: 80px; text-align: center; border: none">' +
  //       'шт' +
  //       '<input readonly type="number" class="sum" style="width: 80px; text-align: center; border: none">' +
  //       'грн';
  //   });
}

function getPrices(object = document) {
  const priceArr = object.querySelectorAll('.price');
  const numArr = object.querySelectorAll('.num');
  const sumArr = object.querySelectorAll('.sum');

  for (let i = 0; i < priceArr.length; i++) {
    sumArr[i].value = numArr[i].value * priceArr[i].innerHTML.replace(/[^\d\.]*/g, '');
    // console.log('sumArr[i].value', sumArr[i].value);
    // console.log('numArr[i].value', numArr[i].value);
    // console.log('priceArr[i].value', priceArr[i].innerHTML.replace(/[^\d\.]*/g, ''));
  }
}

function getPrewOrders() {
  let orders = document.querySelector('#orders');

  const prewOrdersList = window.localStorage.getItem('ordersList');
  orders.innerHTML = JSON.parse(prewOrdersList);
  orders.innerHTML = orders.innerHTML.split('</ul>,').join('</ul> ');
}

function setOrders() {
  const order = document.querySelector('#cart');

  let ordersList = JSON.parse(window.localStorage.getItem('ordersList')) || [];

  if (order.innerHTML.length) {
    ordersList.unshift(
      '</br>' +
        '<h4><time>' +
        new Date(Date.now()).toLocaleString() +
        '</time></h4>' +
        '</br>' +
        order.outerHTML,
    );
  }

  window.localStorage.setItem('ordersList', JSON.stringify(ordersList));
  window.localStorage.setItem('cartList', JSON.stringify([]));

  window.location.reload();
}
