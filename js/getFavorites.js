getFavorites();

function getFavorites() {
  const wishList = document.querySelector('#wishList');

  const marked = window.localStorage.getItem('marked');
  let markedListArr = JSON.parse(marked);

  markedListArr &&
    markedListArr.map(item => {
      if (item.includes('favorite')) {
        console.log('item', item);
        const itemUpd = item
          .replaceAll('<input', '<input hidden="hidden"')
          .replaceAll('шт', '')
          .replaceAll('грн', '');

        wishList.innerHTML += itemUpd;
      }
    });
}
