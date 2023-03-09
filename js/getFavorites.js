getFavorites();

function getFavorites() {
  var cart = document.getElementById('cart');
  cart.innerHTML = JSON.parse(window.localStorage.getItem('favorites'));
}
