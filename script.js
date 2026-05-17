console.log("Hello, World!");

//Step 2: Write the logic to get the computer choice
function computerChoice(){
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
function humanChoice(){
    return prompt("choose: rock scissors paper");
}


//Step 4: Declare the players score variables
let humanScore = 0, computerScore = 0;


function playRound(playerSelection, computerSelection){
    const human = String(playerSelection).toLowerCase();
    const computer = String(computerSelection).toLowerCase();

    if (human === computer) {
        console.log("It's a draw!");
        return;
    }

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}

const humanSelection = humanChoice();
const computerSelection = computerChoice();

playRound(humanSelection, computerSelection);