const sortBy = key => {
  let items = document.querySelectorAll('.products__item');

  items = Array.from(items);

  key === 'Найменуванню' &&
    items.sort((a, b) =>
      a.querySelector('h4').textContent.localeCompare(b.querySelector('h4').textContent),
    );
  key === 'by type' &&
    items.sort((a, b) =>
      a
        .querySelector('.materials')
        .textContent.localeCompare(b.querySelector('.materials').textContent),
    );
  key === 'min-price' &&
    items.sort(
      (a, b) =>
        parseFloat(a.querySelector('.price').innerHTML) -
        parseFloat(b.querySelector('.price').innerHTML),
    );
  key === 'max-price' &&
    items.sort(
      (a, b) =>
        parseFloat(b.querySelector('.price').innerHTML) -
        parseFloat(a.querySelector('.price').innerHTML),
    );

  for (let i = 0, len = items.length; i < len; i++) {
    let parent = items[i].parentNode;
    let detatchedItem = parent.removeChild(items[i]);
    parent.appendChild(detatchedItem);
  }
};
