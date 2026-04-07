let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Point to computer");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log("Point to you");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Point to you");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        console.log("Point to computer");
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        console.log("Point to computer");
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        console.log("Point to you");
        humanScore++;
    } else {
        console.log("Some error occurred");
    }
        
}

function getHumanChoice(){
    choice = prompt("Enter your choice (Rock/Paper/Scissor)");
    return choice.toLowerCase();
}

function getComputerChoice(){
    choice = Math.ceil(Math.random() * 3);
    choice = choice === 1 ? "rock" : 
             choice === 2 ? "paper" : "scissor"
    return choice;
}

function playGame(){
    for (let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    winner = humanScore > computerScore ? "You" : 
             computerScore > humanScore ? "Computer" : "Nobody lol";
    console.log("The winner is " + winner);

}

playGame();