const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const userName = document.querySelector('#name-output');

inputEl.addEventListener('input', handlerInput);

function handlerInput(e) {
  //   console.log(e.currentTarget.value);
  // e.currentTarget.value = userName.textContent;
  if (e.currentTarget.value.trim() === '') {
    userName.textContent = 'Anonymous';
  } else {
    userName.textContent = e.currentTarget.value;
  }
}
