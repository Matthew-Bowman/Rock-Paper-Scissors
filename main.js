// Function: Generates Either Rock/Paper/Scissors Randomly
function ComputerPlay() {
    // Generate Random Number
    const number = Math.floor(Math.random() * (4 - 1) + 1);

    // Set Random Number to a Choice
    switch(number) {
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

// Function: Gets Players Choice
function UserPlay() {
    let choice = prompt("Please enter either Rock, Paper or Scissors");
    return choice.toLocaleLowerCase();
}