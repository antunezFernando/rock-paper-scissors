let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    switch(rand) {
        case 0:
            return rock;
        case 1:
            return paper;
        default:
            return scissors;
    }
}

function getResult(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return "It's a tie";
    }

    if(playerChoice === rock && computerChoice === scissors ||
        playerChoice === scissors && computerChoice === paper ||
        playerChoice === paper && computerChoice === rock) {
            return "You've won"
    }

    return "You've lost"
}

let playerChoice = prompt("What is your choice?")
let computerChoice = getComputerChoice()
console.log(getResult(playerChoice, computerChoice))