// Get the elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const registerForm = document.getElementById('form');
const registrationPage = document.getElementById('register');
const gamePage = document.getElementById('game');
const greeting = document.getElementById('greeting');

// Add submit event listener to the form
registerForm.addEventListener('submit', register);

// Define the register event listener function
function register(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  nameInput.value = '';
  emailInput.value = '';
  localStorage.setItem('userData', JSON.stringify({ name: name, email: email }));
  registrationPage.style.display = 'none';
  gamePage.style.display = 'flex';
  registerForm.removeEventListener('submit', register);

  renderGreeting();
}

// Define the function that renders greeting with user name
function renderGreeting() {
  const savedData = fetchSavedData();
  if (savedData) {
    const userName = savedData.name;
    greeting.innerText = `Hi, ${userName}!`;
  }
}

// Define the function that gets user data from local storage

function fetchSavedData() {
  const savedData = JSON.parse(localStorage.getItem('userData'));
  return savedData;
}
