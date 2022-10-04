const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const inputDataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', inputCheck);

function inputCheck(event) {
  event.preventDefault();
  if (inputEl.value.length === inputDataLength) {
    inputEl.classList.toggle('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
