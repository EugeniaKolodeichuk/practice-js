// Define initial variable values
let score = 0;
let level = 1;
let levelThreshold = [5, 15, 30, 50, 75];

// Get the elements
const scoreText = document.getElementById('score');
const healthText = document.getElementById('health');
const levelText = document.querySelector('#level p');
const heroImg = document.getElementById('level-image');
const modalContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');
const congratulation = document.getElementById('congratulation');
const congratulationText = document.querySelector('#congratulation p');

// Render initial health value
healthText.innerText = `Health: ${levelThreshold[level - 1] - score}`;

// Add a click event listener to hero image
heroImg.addEventListener('click', increaseScore);

// Add a click event listener to the button of modal window
modalCloseBtn.addEventListener('click', hideModal);

// Define the increase score function
function increaseScore() {
  score++;
  scoreText.innerText = `Score: ${score}`;

  checkLevel();
  updateHealth();
}

// Define the check level function
function checkLevel() {
  if (score >= levelThreshold[level - 1] && score < levelThreshold[levelThreshold.length - 1]) {
    level++;
    levelText.innerText = `Level: ${level}`;
    heroImg.src = './assets/level' + level + '.png';
    showModal();
  } else if (score === levelThreshold[levelThreshold.length - 1]) {
    heroImg.removeEventListener('click', increaseScore);
    game.style.display = 'none';
    congratulation.style.display = 'flex';
    congratulationText.innerText = `You win! Total clicks ${score}!`;
    localStorage.clear();
  }
}

// Define the function that updates health level
function updateHealth() {
  healthText.innerText = `Health: ${levelThreshold[level - 1] - score}`;
}

//Define functions for show and hide modal window
function showModal() {
  modalContainer.style.display = 'flex';
}

function hideModal() {
  modalContainer.style.display = 'none';
}
