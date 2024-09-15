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

let playerScore = 0
let computerScore = 0

let resultElement = document.getElementById("result")
result.innerHTML = ""
let playerScoreElement = document.getElementById("player-score")
let computerScoreElement = document.getElementById("computer-score")
playerScoreElement.innerHTML = playerScore
computerScoreElement.innerHTML = computerScore

let playAgainButton = document.getElementById("play-again-button")
playAgainButton.disabled = true
playAgainButton.onclick = handlePlayAgainButton

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
    removeClassFromButtons()

    button.classList.add("selected-button")
}

function handleConfirmButtonClick() {
    let playerChoice = getPlayerChoice()
    if(playerChoice !== undefined) {
        let computerChoice = getComputerChoice()
        rockButton.disabled = paperButton.disabled = scissorsButton.disabled = confirmButton.disabled = true
        playAgainButton.disabled = false

        document.getElementById("player").setAttribute("src", playerChoice.imagePath)
        document.getElementById("computer").setAttribute("src", computerChoice.imagePath)

        document.getElementById("player-choice-name").innerHTML = playerChoice.name
        document.getElementById("computer-choice-name").innerHTML = computerChoice.name

        result(playerChoice, computerChoice)
    }
}

function result(playerChoice, computerChoice) {
    if(playerChoice.name === computerChoice.name) {
        resultElement.innerHTML = "It's a tie..."
    } else if(playerChoice.name === rock.name && computerChoice.name === scissors.name ||
        playerChoice.name === scissors.name && computerChoice.name === paper.name ||
        playerChoice.name === paper.name && computerChoice.name === rock.name) {
            resultElement.innerHTML = "You've won!"
            playerScore++
    } else {
        resultElement.innerHTML = "You've lost :("
        computerScore++
    }

    playerScoreElement.innerHTML = playerScore
    computerScoreElement.innerHTML = computerScore
}

function handlePlayAgainButton() {
    removeClassFromButtons()
    rockButton.disabled = paperButton.disabled = scissorsButton.disabled = confirmButton.disabled = false
    playAgainButton.disabled = true

    document.getElementById("player").setAttribute("src", "./images/white.png")
    document.getElementById("computer").setAttribute("src", "./images/white.png")

    document.getElementById("player-choice-name").innerHTML = ""
    document.getElementById("computer-choice-name").innerHTML = ""

    resultElement.innerHTML = ""
}

function removeClassFromButtons() {
    rockButton.classList.remove("selected-button")
    paperButton.classList.remove("selected-button")
    scissorsButton.classList.remove("selected-button")
}