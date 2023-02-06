// function will randomely return rock, paper or scissors.
function getComputerChoice() {

    //random number between 0-2.
    let no = Math.floor(Math.random() * 3);

    if(no === 0){
        return "rock";
    }
    else if(no === 1){
        return "paper";
    } 
    else if(no === 2) {
        return "scissor";
    }
}

//show result on the screen
function printOnScreen(e){
    let p = document.createElement('p');
    p.innerText = e;
    document.getElementById('div-result').appendChild(p);
}

//play single round of Rock Paper Scissors. 
//that takes two parameters - the playerSelection and computerSelection. 
//return 1 if user wins. return -1 if computer wins. return 0 if match draws.
function playRound(playerSelection){

let computerSelection = getComputerChoice();

// Make playerSelection parameter case-insensitive
playerSelection = playerSelection.toLowerCase();

if(playerSelection === "rock" && computerSelection === "rock"){
    printOnScreen("Match Draw! Both select Rock");
    return 0;
}
else if(playerSelection === "rock" && computerSelection === "paper"){
    printOnScreen("You Lose! Paper beats Rock");
    return -1;
}
else if(playerSelection === "rock" && computerSelection === "scissor"){
    printOnScreen("You Win! Rock beats Scissor");
    return 1;
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    printOnScreen("You Win! Paper beats Rock");
    return 1;
}
else if(playerSelection === "paper" && computerSelection === "paper"){
    printOnScreen("Match Draw! Both select Paper");
    return 0;
}
else if(playerSelection === "paper" && computerSelection === "scissor"){
    printOnScreen("You Lose! Scissor beats Paper");
    return -1;
}

else if(playerSelection === "scissor" && computerSelection === "rock"){
    printOnScreen("You Lose! Rock beats Scissor");
    return -1;
}
else if(playerSelection === "scissor" && computerSelection === "paper"){
    printOnScreen("You Win! Scissor beats Paper");
    return 1;
}
else if(playerSelection === "scissor" && computerSelection === "scissor"){
    printOnScreen("Match Draw! Both select Scissor");
    return 0;
}
else {
    printOnScreen("error! please input the right value");
}
}


function game(){
    let computerScore = 0;
    let userScore = 0;
    for(let i = 1; i < 6; i++){
        let thisRound = playRound(getPlayerSelection(), getComputerChoice());

        if(thisRound === 1){
            userScore++;
        }else if(thisRound === -1){
            computerScore++;
        }
    }

    if(userScore > computerScore){
        printOnScreen(`your score is ${userScore}`);
        printOnScreen(`computer's score is ${computerScore}`);
        printOnScreen("congrulations! you won the touranment");
    } else if(userScore < computerScore){
        printOnScreen(`your score is ${userScore}`);
        printOnScreen(`computer's score is ${computerScore}`);
        printOnScreen("you lose the touranment");
    } else if(userScore === computerScore){
        printOnScreen(`your score is ${userScore}`);
        printOnScreen(`computer's score is ${computerScore}`);
        printOnScreen("touranment is draw");
    }

}

const btnRock = document.getElementById('btn-rock');
let btnPaper = document.getElementById('btn-paper');
let btnScissor = document.getElementById('btn-scissor');

btnRock.addEventListener("click", () => {playRound('rock')});
btnPaper.addEventListener("click", () => {playRound('paper')});
btnScissor.addEventListener("click", () => {playRound('scissor')});

