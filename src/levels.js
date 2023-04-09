let score = 0;
let level = 1;
let levelThreshold = [10, 20, 30, 40, 50];

// Get the elements
const clickBtn = document.querySelector('#clickBtn');
const scoreText = document.querySelector('#score');
const levelText = document.querySelector('#level p');

// Add a click event listener to the button and the form
clickBtn.addEventListener('click', function () {
  score++;
  scoreText.innerHTML = `Score: ${score}`;
  checkLevel();

  if (score === 5) {
  }
});

function checkLevel() {
  if (score >= levelThreshold[level - 1]) {
    level++;
    levelText.innerHTML = `Level: ${level}`;
  }
}
