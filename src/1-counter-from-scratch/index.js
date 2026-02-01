let count = 0;
let gameActive = false;
let timeoutId = null;
let highScores = [];

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const statusText = document.getElementById('status');
const highScoreList = document.getElementById('high-scores');

const startGame = () => {
  gameActive = true;
  statusText.textContent = "Go!";

  timeoutId = setTimeout(() => {
    gameActive = false;
    incrementButton.disabled = true;
    statusText.textContent = "Time's up!";

    saveHighScores();
  }, 10000);
};

const saveHighScores = () => {
  highScores.push(count);
  highScores.sort((a, b) => b - a);
  highScores = highScores.slice(0, 5);

  renderHighScores();
};

const renderHighScores = () => {
  highScoreList.innerHTML = "";

  highScores.forEach((score, index) => {
    const li = document.createElement("li");
    li.textContent = `#${index + 1}: ${score}`;
    highScoreList.appendChild(li);
  });
};

incrementButton.addEventListener('click', () => {
  if (!gameActive) {
    startGame();
  }

  if (gameActive) {
    count++;
    countDisplay.textContent = count;
  }
});

resetButton.addEventListener('click', () => {
  count = 0;
  gameActive = false;

  countDisplay.textContent = 0;
  statusText.textContent = "Click to start!";
  incrementButton.disabled = false;

  clearTimeout(timeoutId);
});
