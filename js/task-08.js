const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);

  if (email.value === '' || password.value === '') {
    return alert('Заповніть будь ласка усі поля форми');
  }

  event.currentTarget.reset();
}
