getOrdered();

function getOrdered() {
  const cart = document.querySelector('#cart');

  const marked = window.localStorage.getItem('marked');
  let markedListArr = JSON.parse(marked);

  markedListArr &&
    markedListArr.map(item => {
      if (item.includes('ordered')) {
        const itemUpd = item
          .replaceAll('<input hidden="hidden"', '<input')
          .replaceAll('<span class="quantity"></span>', '<span class="quantity">шт</span>')
          .replaceAll('<span class="UAH"></span>', '<span class="UAH">грн</span>');

        cart.innerHTML += itemUpd;
      }
    });

  let cartArr = Array.from(cart.querySelectorAll('.products__item'));
  // const orderBox = document.querySelector('#order-box');
  // !cartArr.length && (orderBox.innerHTML = '');
  cartArr.length &&
    cartArr.map(item => {
      if (!item.querySelector('.sum')) {
        item.innerHTML +=
          '<input name="number" class="num" onChange="getPrices(this.parentElement), setOrderedLetter(), saveValues()" type="number" min="1" max="100" value="1" style="width: 80px; text-align: center; border: none">' +
          '<span class="quantity">шт</span>' +
          '<input readonly name="sum" class="sum" type="number" style="width: 80px; text-align: center; border: none">' +
          '<span class="uah">грн</span>';
      }
    });
}
