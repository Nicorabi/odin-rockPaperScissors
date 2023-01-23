function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log('The computer chose: ' + choice);
}
getComputerChoice()

function playRound(playerSelection, computerSelection) {
    let playerChoices = prompt("Rock, paper or scissors? ")
    return playerChoices = playerChoices.toUpperCase();
}
playRound();
