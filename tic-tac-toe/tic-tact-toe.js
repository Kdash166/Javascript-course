// Variables to keep track of game state
let isPlaying = false;
let playerMove = "";
let computerWins = 0;
let PlayerWins = 0;

const boxes = document.querySelectorAll(".box");

function isDraw() {
  return Array.from(boxes).every(box => box.innerHTML !== '');
}

// Check if a player has won the game
function checkWin(player) {
  // Define all possible winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boxes[a].innerHTML === player && boxes[b].innerHTML === player && boxes[c].innerHTML === player) {
      return true; // Player has won
    }
  }

  return false; // No win in any combination
}

function computerRandomMove() {
  const emptyBoxes = Array.from(boxes).filter(box => box.innerHTML === '');
  if (emptyBoxes.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    return emptyBoxes[randomIndex];
  }
  return null;
}

// Function to handle player move
function playerMoveHandler(event) {
  if (isPlaying && playerMove !== "") {
    const box = event.target;

    // Check if the box is empty before inserting the player's move
    if (box.innerHTML === "") {
      box.innerHTML = playerMove;

      // Check if the game is over (e.g., win or draw) here...
      if (checkWin(playerMove)) {
        // Display a "Player X or Player O wins" message or take other actions
        document.querySelector('.js-result').innerHTML = `Player ${playerMove} wins`;
        PlayerWins++;
        document.querySelector('.js-score-tracking').innerHTML = `computer ${computerWins} : ${PlayerWins} player`;
        isPlaying = false;
        // You can also reset the game or perform other actions here
      } else if (isDraw()) {
        // Display a "Game Over - Draw" message or take other actions
        document.querySelector('.js-result').innerHTML = "It's a draw";
        isPlaying = false;
        // You can also reset the game or perform other actions here
      } else {
        // Computer's move
        const computerBox = computerRandomMove();
        if (computerBox) {
          computerBox.innerHTML = playerMove === "X" ? "O" : "X";
          
          // Check if the game is over after the computer's move...
          if (checkWin(playerMove === "X" ? "O" : "X")) {
            // Display a "Computer wins" message or take other actions
            document.querySelector('.js-result').innerHTML = "Computer wins";
            computerWins++;
            document.querySelector('.js-score-tracking').innerHTML = `computer ${computerWins} : ${PlayerWins} player`;
            isPlaying = false;
          }
        }
      }
    }
  }
}

// Function to reset the game
function resetGame() {
    // Clear all the boxes
    boxes.forEach(box => {
      box.innerHTML = '';
      const naughtElement = document.querySelector('.js-naughts');
  naughtElement.classList.remove('js-grey-out');
  const crossesElement = document.querySelector('.js-crosses');
  crossesElement.classList.remove('js-grey-out');
    });
  
    // Clear the result message
    document.querySelector('.js-result').innerHTML = '';
  
    // Enable the player move selection buttons
    document.querySelector(".js-crosses").addEventListener("click", () => pickHandler("X"));
    document.querySelector(".js-naughts").addEventListener("click", () => pickHandler("O"));
  
    // Re-enable the starting message
    document.querySelector(".js-starting-msg").innerHTML = "Pick a piece!";
  }
  
  // Add an event listener to the reset button
  document.querySelector(".reset").addEventListener("click", resetGame);
  

// Add event listeners to the boxes for player move
boxes.forEach(box => {
  box.addEventListener("click", playerMoveHandler);
});

// Function for starting the game as "X" or "O"
function pickHandler(symbol) {
  isPlaying = true;
  playerMove = symbol;
  document.querySelector(".js-crosses").removeEventListener('click', () => pickHandler("X"));
  document.querySelector(".js-naughts").removeEventListener('click', () => pickHandler("O"));
  const naughtElement = document.querySelector('.js-naughts');
  naughtElement.classList.add('js-grey-out');
  const crossesElement = document.querySelector('.js-crosses');
  crossesElement.classList.add('js-grey-out');
  document.querySelector(".js-starting-msg").innerHTML = "";

}

// Add event listeners to the buttons for player move selection
document.querySelector(".js-crosses").addEventListener("click", () => pickHandler("X"));
document.querySelector(".js-naughts").addEventListener("click", () => pickHandler("O"));
