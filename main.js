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