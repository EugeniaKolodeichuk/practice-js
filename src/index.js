let score = 0;
let level = 1;
let levelThreshold = [10, 20, 30, 40, 50];

// Get the elements
const clickBtn = document.querySelector('#clickBtn');
const scoreText = document.querySelector('#score');
const levelText = document.querySelector('#level p');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const registrationBtn = document.querySelector('button');
const registerForm = document.querySelector('form');

// Add a click event listener to the button and the form
clickBtn.addEventListener('click', function () {
  score++;
  scoreText.innerHTML = `Score: ${score}`;
  checkLevel();

  if (score === 5) {
  }
});

registerForm?.addEventListener('submit', register);

function checkLevel() {
  if (score >= levelThreshold[level - 1]) {
    level++;
    levelText.innerHTML = `Level: ${level}`;
  }
}

function register(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  console.log(`Name: ${name}, Email: ${email}`);
  nameInput.value = '';
  emailInput.value = '';
  window.location = 'levels.html';
}
