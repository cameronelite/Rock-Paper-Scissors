document.addEventListener('DOMContentLoaded', () => {
    // Get the result display and score display divs
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');

    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Function to get the computer's choice
    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
        if (randomNumber === 0) return "rock";
        if (randomNumber === 1) return "paper";
        return "scissors";
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Normalize input

        // Check for a tie
        if (humanChoice === computerChoice) {
            resultDisplay.textContent = `It's a tie! You both chose ${humanChoice}.`;
        }

        // Define winning conditions for the human player
        let humanWins =
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper");

        // Update scores and display results
        if (humanWins) {
            humanScore++;
            resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        } else if (humanChoice !== computerChoice) {
            computerScore++;
            resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        }

        // Update the score display
        scoreDisplay.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;

        // Check if someone won the game (score reaches 5)
        if (humanScore === 5) {
            resultDisplay.textContent = '🎉 You win the game!';
            resetGame();
        } else if (computerScore === 5) {
            resultDisplay.textContent = '💻 The computer wins the game!';
            resetGame();
        }
    }

    // Function to reset the game
    function resetGame() {
        // Reset scores
        humanScore = 0;
        computerScore = 0;

        // Update the score display
        scoreDisplay.textContent = `Score: Human - 0, Computer - 0`;
    }

    // Add event listeners to buttons
    document.getElementById('rockButton').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
    });

    document.getElementById('paperButton').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    });

    document.getElementById('scissorsButton').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    });
});
