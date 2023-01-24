function playRound() {
    let playerChoices = prompt("Rock, Paper or Scissor? ");
    let result = playerChoices.toUpperCase();
    let choices = ["Rock", "Paper", "Scissor"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chose: " + choice);
    
    if (result === "Rock".toUpperCase() && choice === "Rock") {
        console.log("Draw!");
    } else if (result === "Rock".toUpperCase() && choice === "Scissor") {
        console.log("Player wins!");
    } else if (result === "Rock".toUpperCase() && choice === "Paper") {
        console.log("Computer wins!");
    } else if (result === "Paper".toUpperCase() && choice === "Paper") {
        console.log("Draw!");
    } else if (result === "Paper".toUpperCase() && choice === "Rock") {
        console.log("Player wins!");
    } else if (result === "Paper".toUpperCase() && choice === "Scissor") {
        console.log("Computer wins!");
    } else if (result === "Scissor".toUpperCase() && choice === "Scissor") {
        console.log("Draw!");
    } else if (result === "Scissor".toUpperCase() && choice === "Rock") {
        console.log("Computer wins!");
    } else if (result === "Scissor".toUpperCase() && choice === "Paper") {
        console.log("Player wins!");
    } else {
        console.log("Invalid input by player, try again.");
    }
}

for (let i = 0; i < 5; i++) {
    playRound();
}
