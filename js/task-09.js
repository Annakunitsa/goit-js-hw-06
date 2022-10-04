function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const btn = document.querySelector('.change-color');

const colorName = document.querySelector('.color');

btn.addEventListener('click', onChangeColor);

function onChangeColor(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}
