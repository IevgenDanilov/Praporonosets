getOrdered();
getPrewOrders();

function getOrdered() {
  const cart = document.querySelector('#cart');

  cart.innerHTML = JSON.parse(window.localStorage.getItem('cartList'));
  cart.innerHTML = cart.innerHTML.split('</li>,').join('</li> ');

  let cartArr = Array.from(cart.querySelectorAll('.products-item'));
  cartArr.length &&
    cartArr.map(item => {
      item.innerHTML =
        item.innerHTML +
        '<input type="number" min="1" max="100" name="num" value="1" style="width: 80px; text-align: center; border: none">' +
        'шт' +
        '<input type="number" name="sum" value="0.00" style="width: 80px; text-align: center; border: none">' +
        'грн';
      // sum.value=num.value*Number(price.value)
    });
}

function getPrewOrders() {
  let orders = document.querySelector('#orders');

  const prewOrdersList = window.localStorage.getItem('ordersList');
  orders.innerHTML = JSON.parse(prewOrdersList);
  // console.log('orders.innerHTML', orders.innerHTML);
  orders.innerHTML = orders.innerHTML.split('</ul>,').join('</ul> ');
}

function setOrders() {
  // const order = window.localStorage.getItem('cartList');
  // order = Array.from(order);

  const order = document.querySelector('#cart');

  let ordersList = JSON.parse(window.localStorage.getItem('ordersList')) || [];

  order.innerHTML.length &&
    ordersList.unshift(
      '</br>' +
        '<h4>' +
        new Date(Date.now()).toLocaleString() +
        '</h4>' +
        '</br>' +
        order.outerHTML,
    );

  window.localStorage.setItem('ordersList', JSON.stringify(ordersList));
  window.localStorage.setItem('cartList', JSON.stringify([]));

  window.location.reload();
}
