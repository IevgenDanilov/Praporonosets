getFavorites();

function getFavorites() {
  const wishList = document.getElementById('wishList');

  let marked = window.localStorage.getItem('marked');
  let markedDom = JSON.parse(marked);
  console.log('markedDom', markedDom);
  // let markedArr = Array.from(markedDom);
  // console.log('markedArr', markedArr);
  // let wishListArr = markedArr.filter(item => item.classList.contains('favorites'));
  // console.log('wishListArr', wishListArr);

  // wishList.innerHTML = wishListArr;

  // wishList.innerHTML = wishList.innerHTML.split('</li>,').join('</li> ');
}
