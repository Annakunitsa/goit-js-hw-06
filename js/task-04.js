const valueEl = document.querySelector('#value');
// console.log(valueEl);

let counterValue = 0;

const decrementButton = document.querySelector('button[data-action=decrement]');

// console.log(decrementButton);

const incrementButton = document.querySelector('button[data-action=increment]');

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
