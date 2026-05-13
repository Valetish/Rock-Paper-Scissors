console.log("Hello, World!");

//Step 2: Write the logic to get the computer choice
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());


//Step 3: Write the logic to get the human choice
function getHumanChoice(){
    return prompt("choose: rock scissors paper");
}

console.log(getHumanChoice());


//Step 4: Declare the players score variables
let humanScore = 0, computerScore = 0;


//Step 5: Write the logic to play a single round
function playRound(humanScore, computerScore){
    humanScore = humanScore.toLowerCase();

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);