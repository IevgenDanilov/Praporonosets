getOrdered();
// getPrices();
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

  // const prewOrdersList = window.localStorage.getItem('ordersList');
  // orders.innerHTML = JSON.parse(prewOrdersList);
  // orders.innerHTML = orders.innerHTML.split('</ul>,').join('</ul> ');

  const prewOrdersList = window.localStorage.getItem('ordersList');
  let prewOrdersListArr = JSON.parse(prewOrdersList);

  prewOrdersListArr &&
    prewOrdersListArr.map(item => {
      // if (item.includes('ordered')) {
      orders.innerHTML += item;
      // }
    });
}

function setOrders() {
  const order = document.querySelector('#cart');

  // const markedString = window.localStorage.getItem('marked');
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

  // let marked = markedString.split('ordered').join('');
  // window.localStorage.setItem('marked', marked);

  // Отримуємо зі сховища масив позначених товарів
  let marked = JSON.parse(window.localStorage.getItem('marked')) || [];
  marked = marked.split('ordered').join('');
  marked = Array.from(marked);

  // попередній варіант продукту (при наявності) прибираємо з масиву marked
  // marked = marked.filter(item => !item.includes("ordered"));

  // якщо продукт містить клас favorites чи ordered то його оновлений варіант записуємо в масив marked
  if (product.classList.contains('favorites') || product.classList.contains('ordered')) {
    marked.push(product.outerHTML);
  }

  window.localStorage.setItem('marked', JSON.stringify(marked));

  // marked.filter(item => {
  //   item.includes('ordered');
  // });

  // window.localStorage.setItem('cartList', JSON.stringify([]));

  window.location.reload();
}
