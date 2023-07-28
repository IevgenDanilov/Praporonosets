// import data from './data.js';

const data = {
  flagpolesForAutomobile: [
    {
      id: 'fpa01',
      isFavorite: true,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/automobile/flagpole-diplomat-premium.jpg',
      imgIconSrc: '../../images/products/flagpoles/automobile/icons/flagpole-diplomat-premium.jpg',
      imgAlt: 'флагшток автомобільний',
      name: 'Флагшток автомобільний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '25000',
    },
    {
      id: 'fpa02',
      isFavorite: false,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/automobile/flagpole-diplomat-premium.jpg',
      imgIconSrc: '../../images/products/flagpoles/automobile/icons/flagpole-diplomat-premium.jpg',
      imgAlt: 'флагшток автомобільний',
      name: 'Флагшток автомобільний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '26000',
    },
    {
      id: 'fpa03',
      isFavorite: false,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/automobile/flagpole-diplomat-premium.jpg',
      imgIconSrc: '../../images/products/flagpoles/automobile/icons/flagpole-diplomat-premium.jpg',
      imgAlt: 'флагшток автомобільний',
      name: 'Флагшток автомобільний ДИПЛОМАТ',
      material: 'титан',
      size: 'ДхШхВ: 25х650х3500',
      price: '27000',
    },
  ],
  flagpolesForStreet: [
    {
      id: 'fps01',
      isFavorite: false,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/street/flagpole_street_alum.jpg',
      imgIconSrc: '../../images/products/flagpoles/street/icons/flagpole_street_alum.jpg',
      imgAlt: 'флагшток вуличний',
      name: 'Флагшток для вулиці',
      material: 'алюміній',
      size: 'ДхШхВ: 25х650х3500',
      price: '15000',
    },
    {
      id: 'fps02',
      isFavorite: false,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/street/flagpole_street_alum.jpg',
      imgIconSrc: '../../images/products/flagpoles/street/icons/flagpole_street_alum.jpg',
      imgAlt: 'флагшток вуличний',
      name: 'Флагшток для вулиці',
      material: 'алюміній',
      size: 'ДхШхВ: 25х650х3500',
      price: '16000',
    },
    {
      id: 'fps03',
      isFavorite: false,
      isOrdered: false,
      categoriesClassList: '',
      imgSrc: '../../images/products/flagpoles/street/flagpole_street_alum.jpg',
      imgIconSrc: '../../images/products/flagpoles/street/icons/flagpole_street_alum.jpg',
      imgAlt: 'флагшток вуличний',
      name: 'Флагшток для вулиці',
      material: 'алюміній',
      size: 'ДхШхВ: 25х650х3500',
      price: '14000',
    },
  ],
};

let list = document.querySelector('.products__list');
let category = list.id;

let listMarkup = '';

data[category].map(
  ({ id, isFavorite, isOrdered, imgSrc, imgIconSrc, imgAlt, name, material, size, price }) => {
    listMarkup =
      listMarkup +
      `<li key="` +
      id +
      `" id="` +
      id +
      `" class="products__item` +
      (isFavorite ? ` favorite` : ``) +
      `">
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
      imgIconSrc +
      `"
      alt="` +
      imgAlt +
      `"
      title = 'click+click'
      style="width: 150px; cursor: zoom-in;"
      ondblclick="this.src='` +
      imgSrc +
      `'; this.title = 'click'; this.style='cursor: zoom-out; position: fixed; top:50%; left:50%; margin: -350px 0 0 -350px; width: 700px; height: 700px; border-radius: 6px; box-shadow: 0px 200px 600px rgba(0, 0, 0, 0.36), 0px 200px 200px rgba(0, 0, 0, 0.42), 0px 400px 200px rgba(0, 0, 0, 0.6);'"
      onclick="this.src='` +
      imgIconSrc +
      `'; this.title = 'click+click'; this.style='width: 150px; cursor: zoom-in;'"
    />
    <div class="products__item-description">
      <h4>` +
      name +
      `</h4>
      <p>` +
      material +
      `</p>
      <p>` +
      size +
      `</p>
      <p class="price">` +
      price +
      ` ₴</p>
    </div>
  </li>`;
  },
);

list.innerHTML = listMarkup;

// console.log('list', list);
