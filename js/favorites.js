markFavorites();

function markFavorites() {
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];

  const wishListDom = document.createElement('ul');
  wishListDom.innerHTML = wishList;

  let favoritesHeartsArr = wishListDom.querySelectorAll('.heart');
  favoritesHeartsArr = Array.from(favoritesHeartsArr);

  favoritesHeartsArr.map(item => {
    let heartBtn = document.getElementById(item.id);
    if (heartBtn) {
      heartBtn.classList.add('chosen-heart');
      heartBtn.parentElement.parentElement.classList.add('favorites');
    }
  });
}

function toggleFavorites(id) {
  const heart = document.getElementById(id);
  const product = heart.parentElement.parentElement;
  const productHTML = product.outerHTML;

  heart.classList.toggle('chosen-heart');
  product.classList.toggle('favorites');

  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || [];
  wishList = Array.from(wishList);

  if (product.classList.contains('favorites')) {
    wishList.push(product.outerHTML);
  } else {
    wishList = wishList.filter(item => item !== productHTML);
  }

  window.localStorage.setItem('wishList', JSON.stringify(wishList));
}