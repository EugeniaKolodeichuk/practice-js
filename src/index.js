const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  console.log(`Name: ${name}, Email: ${email}`);
  nameInput.value = '';
  emailInput.value = '';
  localStorage.setItem('userData', JSON.stringify({ name: name, email: email }));
  window.location = 'levels.html';
}
