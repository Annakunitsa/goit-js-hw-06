const input = document.querySelector('#validation-input');
console.log(input);

const inputDataLength = Number(input.dataset.length);
console.log(inputDataLength);

input.addEventListener('blur', inputCheck);

function inputCheck() {
  // event.preventDefault();
  if (input.value.length === inputDataLength) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    return input.classList.add('invalid');
  }
}
