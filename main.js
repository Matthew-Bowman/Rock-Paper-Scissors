// Initialisation
const winningScore = 5;

// Function: Generates Either Rock/Paper/Scissors Randomly
function ComputerPlay() {
    // Generate Random Number
    const number = Math.floor(Math.random() * (4 - 1) + 1);

    // Set Random Number to a Choice
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Error - Incorrect number generated";
    }
}

function UserPlay() {
    // Get and return the users decision
    let choice = prompt("Please enter either Rock, Paper or Scissors.").toLocaleLowerCase();
    return choice;
}

// Function: Takes Both Selections and Declares a Winner
function PlayRound(pUserSelection) {
    // Get Choices
    let userSelection = pUserSelection;
    let computerSelection = ComputerPlay();

    // Make both selections lowercase
    userSelection = userSelection.toLocaleLowerCase();
    computerSelection = computerSelection.toLocaleLowerCase();

    // Other Variable Initialisation
    let results = {
        winner: null,
        user: userSelection,
        computer: computerSelection,
    }

    // Decide the winner
    // Check for a Draw
    if (userSelection === computerSelection)
        results.winner = "Draw";
    // User Chose Rock
    else if (userSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                results.winner = "Computer";
                break;
            case "scissors":
                results.winner = "User";
                break;
        }
    }
    // User Chose Paper
    else if (userSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                results.winner = "User";
                break;
            case "scissors":
                results.winner = "Computer";
                break;
        }
    }
    // User Chose Scissors
    else if (userSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                results.winner = "Computer";
                break;
            case "paper":
                results.winner = "User";
                break;
        }

    }

    // Return Round Results
    return results;
}

// Class: Creates a game for the user to play with a computer
//        Usually instantiated when the page is loaded.
class Game {
    // Constructor: Called when class instantiated
    constructor() {
        // Variable initialisation
        this.userScore = 0;
        this.computerScore = 0;
        this.roundCounter = 0;
    }

    // Method: Plays a round
    Play = function (pUserSelection) {
        // Dont play a round if someone wins
        if (!(this.userScore >= winningScore || this.computerScore >= winningScore)) {
            // Increment Counter
            this.roundCounter++;
            // Play the round and work out winner
            let results = PlayRound(pUserSelection);
            this.OutputResults(results);
            this.AddScore(results.winner);
            // Return the winner
            return results.winner;
        } else {
            return false;
        }
    }

    // Method: Increments the winners score when a round is played
    AddScore = function (pWinner) {
        // Add Score
        switch (pWinner) {
            case "Computer":
                this.computerScore++;
                break;
            case "User":
                this.userScore++;
                break;
        }
    }

    // Method: Outputs the results in a formatted way
    OutputResults = function (pResults) {
        // Variable Initialisation
        let results = pResults;
        // Output Results
        console.log(`---------------------------`);
        console.log(`Round: ${this.roundCounter}`)
        console.log(`--------`)
        console.log(`User's Choice: ${results.user}`);
        console.log(`Computer's Choice: ${results.computer}`);
        console.log(`Winner: ${results.winner}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialisation
    const game = new Game();
    const options = document.querySelectorAll(".option");
    const winner = document.querySelector(".results .winner .description")

    // Event Listeners
    // Event Listener: Checks for one of the three buttons being clicked
    //                 and plays a game if true & updates score
    options.forEach(option => {
        option.addEventListener("click", () => {
            game.Play(option.id);
            UpdateScore(game);

            if (game.userScore === winningScore)
                winner.textContent = "You have won the game!";
            else if (game.computerScore === winningScore)
                winner.textContent = "Computer has won the game!";
        })
    })
})

// Function: Updates the score display
function UpdateScore(pGame) {
    // Initialisation
    let game = pGame;
    let userScoreDisplay = document.querySelector(".score-container .user .score");
    let computerScoreDisplay = document.querySelector(".score-container .computer .score");

    // Write Scores
    userScoreDisplay.textContent = game.userScore;
    computerScoreDisplay.textContent = game.computerScore;
}