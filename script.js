// Function to play the entire game
function playGame() {
    // Local score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Function to get human player's choice
    function getHumanChoice() {
        let userChoice = prompt("Enter rock, paper, or scissors:"); // Ask user for input
        return userChoice.toLowerCase(); // Convert to lowercase to avoid case sensitivity
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Normalize input to lowercase
        humanChoice = humanChoice.toLowerCase();
        
        // Check for a tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return;
        }

        // Define winning conditions for the human player
        let humanWins = 
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper");

        // Determine the winner and update the score
        if (humanWins) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        // Display updated scores
        console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    // Loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);
        let humanChoice = getHumanChoice(); // Get new human choice
        let computerChoice = getComputerChoice(); // Get new computer choice
        playRound(humanChoice, computerChoice); // Play the round
    }

    // Announce the final winner
    console.log("\n--- Final Result ---");
    if (humanScore > computerScore) {
        console.log(`🎉 You win the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 The computer wins! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else {
        console.log(`🤝 It's a tie! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }
}

// Start the game
playGame();
