const box = document.querySelector("#box");
const start = document.querySelector("#start");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let isClicked = false;
let pScore = 0;
let cScore = 0;

function randomLeft() {
  return Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
}
function randomTop() {
  return Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
}

function updateScore() {
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
}

function hideBox(box) {
  box.style.display = "none";
  if (isClicked === false) {
    cScore++;
  }
  isClicked = false;
  updateScore();
}

function showBox(box) {
  box.style.left = randomLeft();
  box.style.top = randomTop();
  box.style.display = "block";
  box.addEventListener("click", () => {
    if (isClicked === false) {
      isClicked = true;
      pScore++;
    }
  });
  setTimeout(() => {
    hideBox(box);
  }, 500);
}

function startGame() {
  setInterval(() => {
    showBox(box);
  }, 2000);
}

start.addEventListener("click", () => {
  start.remove();
  startGame();
});
