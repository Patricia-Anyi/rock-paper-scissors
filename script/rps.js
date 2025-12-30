//console.log("hello world!");

// fuction defined to get computer choice
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return "rock";
    }
    else if(randomNumber === 1){
        return "paper";
    }
    else if(randomNumber === 2){
        return "scissors";
    }
}

// function defined to get human (player) choice
function getHumanCHoice(){
    let userInput = prompt("rock, paper, scissors?");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
       return userInput;
    }
    else{
        console.log("please enter rock, paper, or scissors");
    }
}

// logic for playground between the user and computer
function playground(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "wooo, it's a tie!";
    }

    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            return "oops, computer wins";
        }else{
            return "comgrats, you win!";
        }
    }

    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            return "oops, computer wins";
        }else{
            return "congrats, you win";
        }
    }

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            return "oops, computer wins";
        }else{
            return "congrats, you win";
        }
    }

}

function playgame(){
let rounds = 1;
let humanScore = 0;
let computerScore =0;

for (i = 0; i < 5; i++){
    const humanChoice =getHumanCHoice();
    const computerChoice = getComputerChoice();
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    const result = playground(humanChoice, computerChoice);

    if (result === "congrats, you win"){
        humanScore++
    }else if (result === "oops, computer wins"){
        computerScore++
    }

    console.log("Total: You: " + humanScore, "computer: " + computerScore);
}


if(humanScore === computerScore){
   console.log("Game over: is a draw");
}else if(humanScore > computerScore){
    console.log("Congrats, you win!");
}else{
    console.log("You lose! Try again");
}
    
}
playgame();



