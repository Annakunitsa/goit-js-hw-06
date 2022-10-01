const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
console.log(ul);

const markup = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join('');

console.log(markup);

ul.insertAdjacentHTML('beforeend', markup);
