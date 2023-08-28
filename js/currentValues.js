getValues();

function saveValues() {
  const cart = document.querySelector('#cart');
  const currentOrder = Array.from(cart.querySelectorAll('.products__item'));
  const currentValues = [];

  currentOrder.map(product => {
    // console.log('product', product);
    const number = product.querySelector('.num').value;
    currentValues.push({
      id: product.id,
      quantity: number || 1,
    });
  });

  window.localStorage.setItem('savedValues', JSON.stringify(currentValues));
}

function getValues() {
  const cart = document.querySelector('#cart');

  if (cart.innerHTML.length) {
    const currentValues = window.localStorage.getItem('savedValues');

    let currentValuesArr = [];

    if (currentValues) {
      currentValuesArr = JSON.parse(currentValues);
    }

    currentValuesArr.length &&
      currentValuesArr.map(item => {
        const product = document.getElementById(item.id);
        if (product) {
          const number = product.querySelector('.num');
          number.setAttribute('value', item.quantity);
        }
      });
  }
}
