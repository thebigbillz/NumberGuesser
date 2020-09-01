// Game Value
let min = 1,
  max = 20,
  winningNumber = 2,
  guessesLeft = 3;

// UI Elements

const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.getElementById("guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

message.style.display = "none";

//Listen for Guess

guessBtn.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  if (!guess || guess < min || guess > max)
    setMessage(`Please enter a number between ${min} and ${max}`, "red");

  // Check if won
  if (guess === winningNumber) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNumber} is correct! YOU WIN!!!`, "green");
  }
});

//Set Message
function setMessage(msg, color) {
  message.innerText = msg;
  message.style.display = "block";
  message.style.color = "white";
  message.style.backgroundColor = color;
  message.style.border = `1px solid ${color}`;
}
