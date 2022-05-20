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

    // Decide the winner
    // Check for a Draw
    if (userSelection === computerSelection)
        return "Draw";
    // User Chose Rock
    else if (userSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                return "Computer";
            case "scissors":
                return "User";
        }
    }
    // User Chose Paper
    else if (userSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "User";
            case "scissors":
                return "Computer";
        }
    }
    // User Chose Scissors
    else if (userSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "Computer";
            case "paper":
                return "User";
        }

    }
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
        // Increment Counter
        this.roundCounter++;
        // Play the round and work out winner
        let winner = PlayRound(pUserSelection);
        this.AddScore(winner);
        // Return the winner
        return winner;
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
    OutputResults = function () {
        
    }
}