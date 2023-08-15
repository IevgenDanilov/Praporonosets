getFavorites();

function getFavorites() {
  const wishList = document.querySelector('#wishList');

  const marked = window.localStorage.getItem('marked');
  let markedListArr = JSON.parse(marked);

  markedListArr &&
    markedListArr.map(item => {
      if (item.includes('favorite')) {
        console.log('item', item);
        // let inputsArr = item.querySelectorAll('input');
        // inputsArr.map(input => {
        //   input.hidden = 'true';
        // });

        item.replaceAll('<input', '<input style="display: none"');

        wishList.innerHTML += item;
      }
    });
}
