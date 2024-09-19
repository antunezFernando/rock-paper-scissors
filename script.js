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

let playerScore = 0
let computerScore = 0

let resultElement = document.getElementById("result")
let playerSelectionName = document.getElementById("player-choice-name")
let computerSelectionName = document.getElementById("computer-choice-name")
let playerScoreElement = document.getElementById("player-score")
let computerScoreElement = document.getElementById("computer-score")
playerScoreElement.innerHTML = playerScore
computerScoreElement.innerHTML = computerScore

let playAgainButton = document.getElementById("play-again-button")
playAgainButton.disabled = true
playAgainButton.onclick = handlePlayAgainButton

window.setInterval(changeWaitingText, 1500)

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

function getPlayerChoice(button) {
    switch(button.getAttribute("id")) {
        case "rock-button":
            return rock
        case "paper-button":
            return paper
        case "scissors-button":
            return scissors
    }
}

function handleChoiceButtonClick(button) {
    let playerChoice = getPlayerChoice(button)
    if(playerChoice !== undefined) {
        let computerChoice = getComputerChoice()

        document.getElementById("player").setAttribute("src", playerChoice.imagePath)
        document.getElementById("computer").setAttribute("src", computerChoice.imagePath)

        document.getElementById("player-choice-name").innerHTML = playerChoice.name
        document.getElementById("computer-choice-name").innerHTML = computerChoice.name

        result(playerChoice, computerChoice)
    }
}

function result(playerChoice, computerChoice) {
    if(playerChoice.name === computerChoice.name) {
        resultElement.innerHTML = "It's a tie, better try again..."
    } else if(playerChoice.name === rock.name && computerChoice.name === scissors.name ||
        playerChoice.name === scissors.name && computerChoice.name === paper.name ||
        playerChoice.name === paper.name && computerChoice.name === rock.name) {
            playerScore++
            if(playerScore === 5) {
                resultElement.innerHTML = `You've won!
                Congratulations!`
                rockButton.disabled = paperButton.disabled = scissorsButton.disabled = true
                playAgainButton.disabled = false
            } else {
                resultElement.innerHTML = `${playerChoice.name} beats ${computerChoice.name}`
            }
    } else {
        computerScore++
        if(computerScore === 5) {
            resultElement.innerHTML = `You've lost :(
            Bummer...`
            rockButton.disabled = paperButton.disabled = scissorsButton.disabled = true
            playAgainButton.disabled = false
        } else {
            resultElement.innerHTML = `${computerChoice.name} beats ${playerChoice.name}`
        }
    }

    updateScore()
}

function handlePlayAgainButton() {
    rockButton.disabled = paperButton.disabled = scissorsButton.disabled = false
    playAgainButton.disabled = true

    document.getElementById("player").setAttribute("src", "./images/white.png")
    document.getElementById("computer").setAttribute("src", "./images/white.png")

    document.getElementById("player-choice-name").innerHTML = "None"
    document.getElementById("computer-choice-name").innerHTML = "None"

    resultElement.innerHTML = "Waiting for selection..."

    if(playerScore === 5 || computerScore === 5) {
        playerScore = 0
        computerScore = 0
        updateScore()
    }
}

function changeWaitingText() {
    if(resultElement.innerHTML.length === 24) {
        resultElement.innerHTML = resultElement.innerHTML.slice(0, 22)
    } else if(resultElement.innerHTML.length === 22 || resultElement.innerHTML.length === 23) {
        resultElement.innerHTML = resultElement.innerHTML + "."
    }
}

function updateScore() {
    playerScoreElement.innerHTML = playerScore
    computerScoreElement.innerHTML = computerScore
}