function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return "It's a tie!";
    } if (playerSelection === 'rock' && computerSelection === 'Scissor') {
        userScore += 1;
        return 'You win!';
    } if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return "It's a tie!";
    } if (playerSelection === 'paper' && computerSelection === 'Rock') {
        userScore += 1;
        return 'You win!';
    } if (playerSelection === 'paper' && computerSelection === 'Scissor') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'scissor' && computerSelection === 'Scissor') {
        return "It's a tie!";
    } if (playerSelection === 'scissor' && computerSelection === 'Rock') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'scissor' && computerSelection === 'Paper') {
        userScore += 1;
        return 'You win!';
    }
    return 'Invalid input by player, try again.';
}

let userScore = parseInt(0, 10);
let computerScore = parseInt(0, 10);

function game() {
    for (let i = 0; i < 5; i += 1) {
        const playerSelection = prompt('rock, paper or scissor? ').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score = ${userScore}`);
        console.log(`Computer's score = ${computerScore}`);
    }

    if (userScore > computerScore) {
        return 'Player wins!';
    } else if (userScore < computerScore) {
        return 'Computer wins!';
    } else {
        return "It's a tie or n/a.";
    }
}
game();