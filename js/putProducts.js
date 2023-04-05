const DATA = {
  flagpolesForAutomobile: [
    {
      id: 'fpa01',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
    {
      id: 'fpa02',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
    {
      id: 'fpa03',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
  ],
  flagpolesForCabinet: [
    {
      id: 'fpa01',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
    {
      id: 'fpa02',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
    {
      id: 'fpa03',
      categotiesClassList: '',
      imgSrc: '???',
      imgAlt: '???',
      name: 'Флагшток автомобильний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
  ],
};

let list = document.querySelector('.products-list');
let category = list.id;

console.log(DATA[category]);

listMarkup = '';

DATA[category].map(({ id, imgSrc, imgAlt, name, material, size, price }) => {
  listMarkup =
    listMarkup +
    `<li key="` +
    id +
    `" id="` +
    id +
    `" class="products-item sets">
    <div style="display: flex; justify-content:space-between; font-size: 20px;">
      <button
        id="heart` +
    id +
    `"
        class="heart"
        style="background: transparent; border: none;"
        onclick="toggleFavorites(this.id)"
      >
        <svg width="24" height="24">
          <use href="../../images/icons.svg#icon-heart"></use>
        </svg>
      </button>
      <a href="#vinder" style="color:grey">
        <b
          onmouseover="this.style=' font-size: larger; font-weight: 900; color: var(--accent-color)'"
          onmouseleave="this.style='color: inherit'"
        >
          i
        </b>
      </a>
      <button
        id="cart` +
    id +
    `"
        class="cart"
        style="background: transparent; border: none;"
        onclick="toggleOrdered(this.id)"
      >
        <svg width="24" height="24">
          <use href="../../images/icons.svg#icon-cart"></use>
        </svg>
      </button>
    </div>
    <img
      src="` +
    imgSrc +
    `"
      alt="` +
    imgAlt +
    `"
      style="width: 150px; cursor: zoom-in;"
      ondblclick="this.src='../../images/products/flagpoles/mobile/sets/vinder-parus.jpg'; this.style='cursor: zoom-out; position: fixed; top:50%; left:50%; margin: -350px 0 0 -350px; width: 700px; height: 700px; border-radius: 6px; box-shadow: 0px 200px 600px rgba(0, 0, 0, 0.36), 0px 200px 200px rgba(0, 0, 0, 0.42), 0px 400px 200px rgba(0, 0, 0, 0.6);'"
      onclick="this.src='../../images/products/flagpoles/mobile/sets/icons/vinder-parus.jpg'; this.style='width: 150px; cursor: zoom-in;'"
    />
    <div class="products-item-description">
      <h4>` +
    name +
    `</h4>
      <p>` +
    material +
    `</p>
      <p>` +
    size +
    `</p>
      <H5 class="price">` +
    price +
    ` ₴</H5>
    </div>
  </li>`;
});

list.innerHTML = listMarkup;
