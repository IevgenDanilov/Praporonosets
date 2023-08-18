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

  console.log('currentValues', currentValues);

  window.localStorage.setItem('savedValues', JSON.stringify(currentValues));
}

function getValues() {
  const cart = document.querySelector('#cart');

  const currentValues = window.localStorage.getItem('savedValues');
  const currentValuesArr = JSON.parse(currentValues) || [];

  currentValuesArr.map(item => {
    const product = cart.querySelector('#' + item.id.toString());
    const number = product.querySelector('.num');
    number.setAttribute('value', item.quantity);
  });
}
