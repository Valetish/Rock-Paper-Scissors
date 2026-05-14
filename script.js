console.log("Hello, World!");

//Step 2: Write the logic to get the computer choice
function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}


//Step 3: Write the logic to get the human choice
function getHumanChoice(){
    return prompt("choose: rock scissors paper");
}


//Step 4: Declare the players score variables
let humanScore = 0, computerScore = 0;


function playRound(playerSelection, computerSelection){

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);