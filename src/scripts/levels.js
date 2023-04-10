let score = 0;
let level = 1;
let levelThreshold = [5, 10, 15, 20, 25];
let userName = 'User';
const maxLevel = 5;

// Get the elements
const clickBtn = document.querySelector('#clickBtn');
const scoreText = document.querySelector('#score');
const levelText = document.querySelector('#level p');
const greeting = document.querySelector('#greeting');
const clicker = document.querySelector('#clicker');
const heroImg = document.querySelector('#level-image');

const modalContainer = document.getElementById('modal-container');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');

const savedData = JSON.parse(localStorage.getItem('userData'));
console.log('userData', savedData);
if (savedData.name) {
  userName = savedData.name;
  greeting.innerHTML = `Hi, ${userName}`;
}

hideModal();

// Add a click event listener to the button and the form
heroImg.addEventListener('click', increaseScore);

// Define the click event listener function
function increaseScore() {
  score++;
  scoreText.innerHTML = `Score: ${score}`;
  checkLevel();
}

function checkLevel() {
  if (score >= levelThreshold[level - 1] && score < levelThreshold[levelThreshold.length - 1]) {
    console.log(levelThreshold[levelThreshold.length - 1]);
    level++;
    levelText.innerHTML = `Level: ${level}`;
    document.getElementById('level-image').src = './assets/level' + level + '.png';
    console.log('level', level);
    console.log('maxlevel', maxLevel);
    showModal();
  } else if (score === levelThreshold[levelThreshold.length - 1]) {
    levelText.innerHTML = `You win!`;
    document.getElementById('level-image').src = './assets/win' + '.png';
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
