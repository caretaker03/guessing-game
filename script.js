"use static";

const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆️ Too high!" : "͏⬇️ Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("͏🤯 You lost the game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();

  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
});
