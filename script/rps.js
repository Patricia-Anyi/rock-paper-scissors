//console.log("hello world!");

const humanScore = 0;
const computerScore = 0;

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
function getHumanCHoice(userInput){
    //let userInput = "rock, paper, scissors?";
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
            return "comgrats, you won!";
        }
    }

    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            return "oops, computer wins";
        }else{
            return "congrats, you won";
        }
    }

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            return "oops, computer wins";
        }else{
            return "congrats, you won";
        }
    }

}

function playgame(){
    const humanChoice = getHumanCHoice('paper');
    const computerChoice = getComputerChoice();

    console.log('you threw ' + humanChoice);
    console.log('computer threw ' + computerChoice);

    console.log(playground(humanChoice, computerChoice));
}

playgame();



