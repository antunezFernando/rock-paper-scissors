let rock = {
    name: "Rock",
    imagePath: "./images/rock.png"
}
let paper = {
    name: "Paper",
    imagePath: "./images/paper.png"
}
let scissors = {
    name: "Scissors",
    imagePath: "./images/scissors.png"
}

let rockButton = document.getElementById("rock-button")

let paperButton = document.getElementById("paper-button")

let scissorsButton = document.getElementById("scissors-button")

let playerChoice = null
let computerChoice = null

rockButton.onclick = () => {
    handleChoiceButtonClick(rockButton)
}

paperButton.onclick = () => {
    handleChoiceButtonClick(paperButton)
}

scissorsButton.onclick = () => {
    handleChoiceButtonClick(scissorsButton)
}

let confirmButton = document.getElementById("confirm-button")
confirmButton.onclick = handleConfirmButtonClick

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)

    switch(rand) {
        case 0:
            return rock
        case 1:
            return paper
        default:
            return scissors
    }
}

function getPlayerChoice() {
    let choice = document.getElementsByClassName("selected-button")[0]
    if(choice !== null && choice !== undefined) {
        let choiceId = choice.getAttribute("id")
        switch(choiceId) {
            case "rock-button":
                return rock
            case "paper-button":
                return paper
            case "scissors-button":
                return scissors
        }
    } else {
        alert("Select one option")
    }
}

function handleChoiceButtonClick(button) {
    rockButton.classList.remove("selected-button")
    paperButton.classList.remove("selected-button")
    scissorsButton.classList.remove("selected-button")

    button.classList.add("selected-button")
}

function handleConfirmButtonClick() {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
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
        let firstLetter = string[0].toUpperCase()
        let rest = string.slice(1)
        return firstLetter + rest
    }

    return string
}

