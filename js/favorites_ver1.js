markFavorites();

function markFavorites() {
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];

  const wishListDom = document.createElement('ul');
  wishListDom.innerHTML = wishList;

  let favoritesHeartsArr = wishListDom.getElementsByClassName('heart');
  favoritesHeartsArr = Array.from(favoritesHeartsArr);

  favoritesHeartsArr.map(item => {
    let heartBtn = document.getElementById(item.id);
    heartBtn.classList.add('chosen');
    heartBtn.parentElement.parentElement.classList.add('favorites');
  });
}

function toggleFavorites(id) {
  const heart = document.getElementById(id);
  const product = heart.parentElement.parentElement;

  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];
  wishList = Array.from(wishList);

  wishList = wishList.filter(item => {
    item !== product.outerHTML;
  });

  heart.classList.toggle('chosen');
  product.classList.toggle('favorites');

  let favorites = document.getElementsByClassName('favorites');
  favorites = Array.from(favorites);

  favorites.map(item => {
    if (wishList.indexOf(item.outerHTML) === -1) {
      wishList.push(item.outerHTML);
    }
  });

  window.localStorage.setItem('wishList', JSON.stringify(wishList));
}
