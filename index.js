function playRound(playerSelection, computerSelection) {
    let playerChoices = prompt("Rock, Paper or Scissor? ");
    let choices = ["Rock", "Paper", "Scissor"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chose: " + choice);
    
    if (playerChoices === "Rock" && choice === "Rock") {
        console.log("Draw!");
    } else if (playerChoices === "Rock" && choice === "Scissor") {
        console.log("Player wins!");
    } else if (playerChoices === "Rock" && choice === "Paper") {
        console.log("Player loses!");
    } else if (playerChoices === "Paper" && choice === "Paper") {
        console.log("Draw!");
    } else if (playerChoices === "Paper" && choice === "Rock") {
        console.log("Player wins!");
    } else if (playerChoices === "Paper" && choice === "Scissor") {
        console.log("Player loses!");
    } else if (playerChoices === "Scissor" && choice === "Scissor") {
        console.log("Draw!");
    } else if (playerChoices === "Scissor" && choice === "Rock") {
        console.log("Player loses!");
    } else if (playerChoices === "Scissor" && choice === "Paper") {
        console.log("Player wins!");
    } else {
        console.log("Invalid input by player, try again.");
    }
}
playRound();

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}
