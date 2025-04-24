let computerScore = 0;
let humanScore = 0;


// Make a random choice for the computer's play
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random()*3);
    return choices[number];
}


// Display the result of the individual round
function displayResults(result) {
    const text = document.querySelector("#results");
    text.textContent = result;
}


// Update and display the running total scores
function updateScores(winner) {
    const text = document.querySelector("#scores");
    if (winner == 'computer') {
        computerScore++;
    } else {
        humanScore++;
    }
    text.textContent = `Human: ${humanScore}    Computer: ${computerScore}`
}


// Play a round given the player and computer choices
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            displayResults('You tie!');
        } else if (computerChoice === 'paper') {
            displayResults('You lose! Paper beats rock');
            updateScores('computer');
        } else {
            displayResults('You win! Rock beats scissors');
            updateScores('human');
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            displayResults('You win! Paper beats rock');
            updateScores('human');
        } else if (computerChoice === 'paper') {
            displayResults('You tie!');
        } else {
            displayResults('You lose! Scissors beats paper');
            updateScores('computer');
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            displayResults('You lose! Rock beats scissors');
            updateScores('computer');
        } else if (computerChoice === 'paper') {
            displayResults('You win! Scissors beats paper');
            updateScores('human');
        } else {
            displayResults('You tie!');
        }
    }
}


// Add event listeners to buttons
let buttonList = document.querySelector("#buttonList");
buttonList.addEventListener("click", (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    switch(target.id) {
        case "rockButton":
            playRound("rock", computerChoice);
            break;
        case "paperButton":
            playRound("paper", computerChoice);
            break;
        case "scissorsButton":
            playRound("scissors", computerChoice);
            break;
    }
});