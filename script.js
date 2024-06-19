let options = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    return options[parseInt(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Make your move! Rock, paper or scissors?").toLowerCase();
    if (!options.includes(choice)) {
        alert("Error! Player must type rock, paper or scissors");
        return getHumanChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        displayResult("It is a TIE! No one wins.");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    if (humanScore > computerScore) {
        alert("Human wins with " + humanScore + " points!");
    } else if (computerScore > humanScore) {
        alert("Computer wins with " + computerScore + " points!");
    } else {
        alert("It is a tie! Both players got " + humanScore);
    }
}

function displayResult(string) {
    const resultList = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerText = string;
    resultList.appendChild(li);
}