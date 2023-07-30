markFavorites();
markOrdered();

function markFavorites() {
  let wishList = JSON.parse(window.localStorage.getItem('marked')) || [];

  // const wishListDom = document.createElement('ul');
  // wishListDom.innerHTML = wishList;

  // console.log('wishList', wishList);
  let favoritesHeartsArr = wishList.querySelectorAll('.chosen-heart');
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
  // const productHTML = product.outerHTML;

  heart.classList.toggle('chosen-heart');
  product.classList.toggle('favorites');

  let wishList = JSON.parse(window.localStorage.getItem('marked')) || [];
  wishList = Array.from(wishList);

  if (product.classList.contains('favorites')) {
    wishList.push(product);
  } else {
    wishList = wishList.filter(item => item !== product);
  }

  console.log('wishList', wishList);

  window.localStorage.setItem('marked', JSON.stringify(wishList));
}

// function markOrdered() {
//   let cartList = JSON.parse(window.localStorage.getItem('marked')) || [];

//   const cartListDom = document.createElement('ul');
//   cartListDom.innerHTML = cartList;

//   let orderedCartsArr = cartListDom.querySelectorAll('.chosen-cart');
//   orderedCartsArr = Array.from(orderedCartsArr);

//   orderedCartsArr.map(item => {
//     let cartBtn = document.getElementById(item.id);
//     cartBtn.classList.add('chosen-cart');
//     cartBtn.parentElement.parentElement.classList.add('ordered');
//   });
// }

// function toggleOrdered(id) {
//   const cart = document.getElementById(id);
//   const product = cart.parentElement.parentElement;
//   const productHTML = product.outerHTML;

//   cart.classList.toggle('chosen-cart');
//   product.classList.toggle('ordered');

//   let cartList = JSON.parse(window.localStorage.getItem('marked')) || [];
//   cartList = Array.from(cartList);

//   if (product.classList.contains('ordered')) {
//     cartList.push(product.outerHTML);
//   } else {
//     cartList = cartList.filter(item => item !== productHTML);
//   }

//   window.localStorage.setItem('marked', JSON.stringify(cartList));
// }
