getPrices();
convertPrices();

function getPrices() {
  const prices = document.querySelectorAll('.price');
  const pricesArr = [];

  for (let i = 0; i < prices.length; i++) {
    pricesArr[i] = prices[i].innerHTML.replace(/[^\d\.]*/g, '');
  }
  window.localStorage.setItem('pricesArr', JSON.stringify(pricesArr));
}

function convertPrices(currency = 'UAH') {
  const prices = document.querySelectorAll('.price');
  const pricesArr = JSON.parse(window.localStorage.getItem('pricesArr'));

  for (let i = 0; i < prices.length; i++) {
    const uahCourse = 42;
    const usdCourse = 42 / 38;
    const eurCourse = 1;

    if (currency === 'UAH') {
      prices[i].innerHTML = pricesArr[i] * uahCourse + ' ₴';
    } else if (currency === 'USD') {
      prices[i].innerHTML = Math.ceil(pricesArr[i] * usdCourse * 100) / 100 + ' $';
    } else {
      prices[i].innerHTML = pricesArr[i] * eurCourse + ' €';
    }
  }
}
