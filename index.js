function playRound() {
    let playerChoices = prompt("Rock, Paper or Scissor? ");
    let result = playerChoices.toUpperCase();
    let choices = ["Rock", "Paper", "Scissor"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chose: " + choice);
    
    if (result === "Rock".toUpperCase() && choice === "Rock") {
        console.log("It's a tie!");
    } else if (result === "Rock".toUpperCase() && choice === "Scissor") {
        userScore++;
        console.log("You win!");
    } else if (result === "Rock".toUpperCase() && choice === "Paper") {
        computerScore++;
        console.log("You lose!");
    } else if (result === "Paper".toUpperCase() && choice === "Paper") {
        console.log("It's a tie!");
    } else if (result === "Paper".toUpperCase() && choice === "Rock") {
        userScore++;
        console.log("You win!");
    } else if (result === "Paper".toUpperCase() && choice === "Scissor") {
        computerScore++;
        console.log("You lose!");
    } else if (result === "Scissor".toUpperCase() && choice === "Scissor") {
        console.log("It's a tie!");
    } else if (result === "Scissor".toUpperCase() && choice === "Rock") {
        computerScore++;
        console.log("You lose!");
    } else if (result === "Scissor".toUpperCase() && choice === "Paper") {
        userScore++;
        console.log("You win!");
    } else {
        console.log("Invalid input by player, try again.");
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

for (let i = 0; i < 5; i++) {
    playRound();
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
}

if (userScore > computerScore) {
    console.log("Player wins");
} else {
    console.log("Computer wins");
}
