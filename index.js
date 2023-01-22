function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log('The computer chose: ' + choice);
}
getComputerChoice()
