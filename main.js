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
function PlayRound(userSelection, computerSelection) {
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

// Function: Calls PlayRound Function and Counts Scores
// Returns Array Format: Winner | User's Score | Computer's Score
function Game() {
// Initialise Variables
    let rounds = 5; // Holds the amount of rounds to play
    let userScore = 0; // Will hold the score of the user
    let computerScore = 0; // Will hold the score of the computer

/* Play the Game */
    // Get Choices
    let userChoice = UserPlay();
    let computerChoice = ComputerPlay();

    // Play Round
    let winner = PlayRound(userChoice, computerChoice);

    // Output Results
    console.log(`---------------------------`);
    console.log(`Round: ${i}`)
    console.log(`--------`)
    console.log(`User's Choice: ${userChoice}`);
    console.log(`Computer's Choice: ${computerChoice}`);
    console.log(`Winner: ${winner}`);

    // Add Score
    switch (winner) {
        case "Computer":
            computerScore++;
            break;
        case "User": 
            userScore++;
            break;
    }

// Declare the Overall Winner
    if(userScore == computerScore)
        return ["Draw", userScore, computerScore];
    else if (userScore > computerScore)
        return ["User", userScore, computerScore];
    else if (computerScore > userScore)
        return ["Computer", userScore, computerScore];
}