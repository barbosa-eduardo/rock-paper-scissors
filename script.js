let options = ["rock", "paper", "scissors"];

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
