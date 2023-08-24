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

function convertPrices(currency = 'UAH', elem) {
  if (elem) {
    elem.parentElement.querySelector('.current').classList.remove('current');
    elem.classList.add('current');
  }

  const prices = document.querySelectorAll('.price');
  const pricesArr = JSON.parse(window.localStorage.getItem('pricesArr'));

  for (let i = 0; i < prices.length; i++) {
    const eurCourse = 1;
    const uahCourse = 42 * eurCourse;
    const usdCourse = (42 / 38) * eurCourse;

    if (currency === 'UAH') {
      prices[i].innerHTML = pricesArr[i] * uahCourse + ' ₴';
    } else if (currency === 'USD') {
      prices[i].innerHTML = Math.round(pricesArr[i] * usdCourse * 100) / 100 + ' $';
    } else {
      prices[i].innerHTML = Math.round(pricesArr[i] * eurCourse * 100) / 100 + ' €';
    }
  }
}
