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

function getPlayerChoice() {
    let playerChoice = "";

    let keepGoing = true;
    while(keepGoing) {
        let rawPlayerChoice = prompt("What is your choice?", "")

        playerChoice = normalizeString(rawPlayerChoice)
        if(playerChoice !== rock && playerChoice !== paper &&
            playerChoice !== scissors) {
                alert("The possible choices are Rock, Paper or Scissors")
            } else {
                keepGoing = false;
            }
    }

    return playerChoice;
}

function getResult(rawPlayerChoice, computerChoice) {
    let playerChoice = normalizeString(rawPlayerChoice)
    if(playerChoice === computerChoice) {
        return `${playerChoice} against ${computerChoice}! It's a tie...`;
    }

    if(playerChoice === rock && computerChoice === scissors ||
        playerChoice === scissors && computerChoice === paper ||
        playerChoice === paper && computerChoice === rock) {
            return `${playerChoice} against ${computerChoice}! You've won!`;
    }

    return `${playerChoice} against ${computerChoice}! You've lost :(`;
}

function normalizeString(string) {
    if(string !== "") {
        let firstLetter = string[0].toUpperCase();
        let rest = string.slice(1);
        return firstLetter + rest;
    }

    return string;
}

alert(getResult(getPlayerChoice(), getComputerChoice()))

