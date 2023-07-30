getFavorites();

function getFavorites() {
  const wishList = document.querySelector('#wishList');

  const marked = window.localStorage.getItem('marked');
  let markedListArr = JSON.parse(marked);

  markedListArr &&
    markedListArr.map(item => {
      if (item.includes('favorite')) {
        wishList.innerHTML += item;
      }
    });
}
