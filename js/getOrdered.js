getOrdered();
getPrewOrders();

function getOrdered() {
  const cart = document.getElementById('cart');

  cart.innerHTML = JSON.parse(window.localStorage.getItem('cartList'));
  cart.innerHTML = cart.innerHTML.split('</li>,').join('</li> ');
}

function getPrewOrders() {
  let orders = document.getElementById('orders');

  const prewOrdersList = window.localStorage.getItem('ordersList');
  orders.innerHTML = JSON.parse(prewOrdersList);
  // console.log('orders.innerHTML', orders.innerHTML);
  orders.innerHTML = orders.innerHTML.split('</ul>,').join('</ul> ');
}

function setOrders() {
  // const order = window.localStorage.getItem('cartList');
  // order = Array.from(order);

  const order = document.getElementById('cart');

  let ordersList = JSON.parse(window.localStorage.getItem('ordersList')) || [];
  console.log(typeof ordersList);

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
