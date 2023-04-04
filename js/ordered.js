markOrdered();

function markOrdered() {
  let cartList = JSON.parse(window.localStorage.getItem('cartList')) || [];

  const cartListDom = document.createElement('ul');
  cartListDom.innerHTML = cartList;

  let orderedCartsArr = cartListDom.querySelectorAll('.cart');
  orderedCartsArr = Array.from(orderedCartsArr);

  orderedCartsArr.map(item => {
    let cartBtn = document.getElementById(item.id);
    cartBtn.classList.add('chosen-cart');
    cartBtn.parentElement.parentElement.classList.add('ordered');
  });
}

function toggleOrdered(id) {
  const cart = document.getElementById(id);
  const product = cart.parentElement.parentElement;
  const productHTML = product.outerHTML;

  cart.classList.toggle('chosen-cart');
  product.classList.toggle('ordered');

  let cartList = JSON.parse(window.localStorage.getItem('cartList')) || [];
  cartList = Array.from(cartList);

  if (product.classList.contains('ordered')) {
    cartList.push(product.outerHTML);
  } else {
    cartList = cartList.filter(item => item !== productHTML);
  }

  window.localStorage.setItem('cartList', JSON.stringify(cartList));
}
