let humanScore = 0;
let computerScore = 0;

buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(event){
        let humanChoice = event.target.textContent.toLowerCase();
        playRound(humanChoice, getComputerChoice());
        if (humanScore + computerScore === 5){
            winner = humanScore > computerScore ? "You" : 
            computerScore > humanScore ? "Computer" : "Nobody lol";
            para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
            winnerPara = document.createElement("p");
            winnerPara.textContent += `And the winner is ${winner}`;
            div.appendChild(winnerPara);
            humanScore = 0;
            computerScore = 0;
            playAgain = document.createElement("button");
            playAgain.textContent = "Play Again";
            playAgain.style['background-color'] = 'hotpink';
            playAgain.style.color = 'red';
            div.appendChild(playAgain);
            playAgain.addEventListener('click',(event) =>{
                div.removeChild(winnerPara);
                para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
                event.target.parentNode.removeChild(playAgain);
            })
        }
    })
})

div = document.querySelector('#scorekeeper');
para = document.createElement('p');
para.textContent = "";
div.appendChild(para);


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        para.textContent = `Computer Score: ${computerScore}\nYour Score: ${humanScore}`;
    } else {
        console.log("Some error occurred");
    }
        
}

function getComputerChoice(){
    choice = Math.ceil(Math.random() * 3);
    choice = choice === 1 ? "rock" : 
             choice === 2 ? "paper" : "scissor"
    return choice;
}
