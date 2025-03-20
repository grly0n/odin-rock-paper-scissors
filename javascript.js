function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random()*3);
    return choices[number];
}

function getHumanChoice() {
    return prompt('Enter your move (rock, paper, or scissors)');
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === 'rock') {
            if (computerChoice === 'rock') {
                console.log('You tie!');
            } else if (computerChoice === 'paper') {
                console.log('You lose! Paper beats rock');
                computerScore++;
            } else {
                console.log('You win! Rock beats scissors');
                humanScore++;
            }
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log('You win! Paper beats rock');
                humanScore++;
            } else if (computerChoice === 'paper') {
                console.log('You tie!');
            } else {
                console.log('You lose! Scissors beats paper');
                computerScore++;
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                console.log('You lose! Rock beats scissors');
                computerScore++;
            } else if (computerChoice === 'paper') {
                console.log('You win! Scissors beats paper');
                humanScore++;
            } else {
                console.log('You tie!');
            }
        }
    }

    for (let round = 0; round < 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();