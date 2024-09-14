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
    let playerChoice = getPlayerChoice()
    if(playerChoice !== undefined) {
        let computerChoice = getComputerChoice()
        rockButton.disabled = paperButton.disabled = scissorsButton.disabled = confirmButton.disabled = true

        document.getElementById("player").setAttribute("src", playerChoice.imagePath)
        document.getElementById("computer").setAttribute("src", computerChoice.imagePath)

        document.getElementById("player-choice-name").innerHTML = playerChoice.name
        document.getElementById("computer-choice-name").innerHTML = computerChoice.name

        result(playerChoice, computerChoice)
    }
}

function result(playerChoice, computerChoice) {
    if(playerChoice.name === computerChoice.name) {
        
    }

    if(playerChoice.name === rock && computerChoice.name === scissors ||
        playerChoice.name === scissors && computerChoice.name === paper ||
        playerChoice.name === paper && computerChoice.name === rock) {
            
    }

    
}