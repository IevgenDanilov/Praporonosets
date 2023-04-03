getFavorites();

function getFavorites() {
  const wishList = document.getElementById('wishList');

  const markup = window.localStorage.getItem('wishList');
  wishList.innerHTML = JSON.parse(markup);
  wishList.innerHTML = wishList.innerHTML.split('</li>,').join('</li> ');
}
