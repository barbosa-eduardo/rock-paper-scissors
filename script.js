const buttons = document.querySelectorAll(".player_choice_button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.innerText, getComputerChoice());
    });
});

let options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    return options[parseInt(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice) {
        displayResult("It is a TIE! No one wins.");
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
        displayResult(`You win! ${playerChoice} beats ${computerChoice}`);
        updateScore();
    } else {
        computerScore++;
        displayResult(`You lose! ${computerChoice} beats ${playerChoice}`);
        updateScore();
    }

    checkWinner();
}

function playGame() {
    if (playerScore > computerScore) {
        alert("Human wins with " + playerScore + " points!");
    } else if (computerScore > playerScore) {
        alert("Computer wins with " + computerScore + " points!");
    } else {
        alert("It is a tie! Both players got " + playerScore);
    }
}

function displayResult(string) {
    const resultList = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerText = string;
    resultList.appendChild(li);
}

function updateScore() {
    const player = document.querySelector(".player_score");
    const computer = document.querySelector(".computer_score");

    player.innerText = playerScore;
    computer.innerText = computerScore;
}

function checkWinner() {
    if (playerScore >= 5) {
        alert("Player won the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Computer won the game!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();

    const resultList = document.querySelector("ul").childNodes;

    for (let i = resultList.length - 1; i >= 0; i--) {
        resultList[i].remove();
    }
}