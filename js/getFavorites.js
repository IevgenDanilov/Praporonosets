getFavorites();

function getFavorites() {
  const cart = document.getElementById('cart');

  const markup = window.localStorage.getItem('wishList');
  cart.innerHTML = JSON.parse(markup);
  cart.innerHTML = cart.innerHTML.split('</li>,').join('</li> ');
}
