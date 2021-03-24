let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates a number between 0 to 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Compares the guess and returns the winner
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
};


// Updates the Score of the winner 
const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
};


// Creates a new Round
const advanceRound = () => currentRoundNumber++;