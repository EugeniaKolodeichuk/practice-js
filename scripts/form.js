const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const registerForm = document.getElementById('form');
const registrationPage = document.getElementById('register');
const gamePage = document.getElementById('game');
const greeting = document.getElementById('greeting');

registerForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  nameInput.value = '';
  emailInput.value = '';
  localStorage.setItem('userData', JSON.stringify({ name: name, email: email }));
  registrationPage.style.display = 'none';
  gamePage.style.display = 'flex';

  renderGreeting();
}

function renderGreeting() {
  const savedData = fetchSavedData();
  if (savedData) {
    const userName = savedData.name;
    greeting.innerText = `Hi, ${userName}!`;
  }
}

function fetchSavedData() {
  const savedData = JSON.parse(localStorage.getItem('userData'));
  return savedData;
}
