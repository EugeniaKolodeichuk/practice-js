let score = 0;
let level = 1;
let levelThreshold = [5, 10, 15, 20, 25];
let userName = 'User';

// Get the elements
const clickBtn = document.getElementById('clickBtn');
const scoreText = document.getElementById('score');
const healthText = document.getElementById('health');
const levelText = document.querySelector('#level p');
const greeting = document.getElementById('greeting');
const clicker = document.getElementById('clicker');
const heroImg = document.getElementById('level-image');

const modalContainer = document.getElementById('modal-container');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');

const savedData = JSON.parse(localStorage.getItem('userData'));
console.log('userData', savedData);
if (savedData?.name) {
  userName = savedData.name;
}
greeting.innerText = `Hi, ${userName}`;
healthText.innerText = `Health: ${levelThreshold[level - 1] - score}`;

// Add a click event listener to the button and the form
heroImg.addEventListener('click', increaseScore);

// Define the click event listener function
function increaseScore() {
  score++;
  scoreText.innerText = `Score: ${score}`;
  checkLevel();
  updateHealth();
}

function updateHealth() {
  healthText.innerText = `Health: ${levelThreshold[level - 1] - score}`;
}

function checkLevel() {
  if (score >= levelThreshold[level - 1] && score < levelThreshold[levelThreshold.length - 1]) {
    console.log(levelThreshold[levelThreshold.length - 1]);
    level++;
    levelText.innerText = `Level: ${level}`;
    heroImg.src = './assets/level' + level + '.png';
    showModal();
  } else if (score === levelThreshold[levelThreshold.length - 1]) {
    levelText.style.display = 'none';
    healthText.style.display = 'none';
    scoreText.innerText = `You win! Total clicks ${score}`;
    heroImg.src = './assets/win' + '.png';
    heroImg.removeEventListener('click', increaseScore);
    return;
  }
}

function showModal() {
  modalContainer.style.display = 'flex';
}

function hideModal() {
  modalContainer.style.display = 'none';
}

modalCloseBtn.addEventListener('click', hideModal);
