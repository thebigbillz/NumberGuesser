// Game Value
let min = 1,
  max = 5,
  winningNumber = getRandNum(min, max),
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

//Play Again

//Listen for Guess

guessBtn.addEventListener("click", function (e) {
  const guess = parseInt(guessInput.value);

  if (!guess || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
    return;
  }

  // Check if won
  if (guess === winningNumber) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNumber} is correct! YOU WIN!!!`, "green");
    playAgain();
    return;
  } else {
    guessesLeft--;

    if (guess !== winningNumber && guessesLeft > 0) {
      guessInput.style.borderColor = "red";
      setMessage(
        `Wrong Guess! | Try Again! | Guesses Left : ${guessesLeft}`,
        "red"
      );
    } else {
      setMessage(
        `Wrong Guess! | Game Over! | Correct Answer : ${winningNumber}`,
        "red"
      );
      playAgain();
    }
  }

  e.preventDefault();
});
// Play Again Listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
// Play Again
function playAgain() {
  guessBtn.value = "Play Again";
  guessBtn.classList.add("play-again");
  message.style.width = "330px";
}

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Set Message
function setMessage(msg, color) {
  message.innerText = msg;
  message.style.display = "block";
  message.style.color = "white";
  message.style.backgroundColor = color;
  message.style.border = `1px solid ${color}`;
}

// let x = 4;

// function dec(x) {
//   x--;
//   console.log(x);
// }

// console.log(x);
// dec(x);
// dec(x);
// console.log(x);
