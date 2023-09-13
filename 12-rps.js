let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

updateScoreElement();



  function playGame(playerMove) {
    const computerMove = generateComputerMove();
    result = "";

    if (playerMove === "scissors") {
      if (computerMove === "scissors") {
        result = "Tie.";
      } else if (computerMove === "rock") {
        result = "You lose.";
      } else {
        result = "You win!";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      } else {
        result = "You win!";
      }
    } else {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else {
        result = "You win!";
      }
      
    }

    if (result === "You win!") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));
    updateScoreElement();

    
  document.querySelector(
    ".js-moves"
    ).innerHTML = `  You
    <img src="rps-assets/${playerMove}-emoji.png" alt="" class="emoji">
    <img src="rps-assets/${computerMove}-emoji.png" alt="" class="emoji">
    Computer`;
  

  document.querySelector(
    ".js-result"
    ).innerHTML = result;
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  function generateComputerMove() {
    randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }

    return computerMove;
  }
let isAutoPlaying = false;
let intervalID = ""
  function autoPlay(){
    if(!isAutoPlaying){
    intervalID = setInterval(function (){
      const playerMove = generateComputerMove();
      playGame(playerMove);
    },1000)
 isAutoPlaying = true;
  } else {
clearInterval(intervalID);
isAutoPlaying = false;
  }
}
 