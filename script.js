// create a function for computerChioice that will randomely return rock, paper or scissors.
function getComputerChoice() {

    // use the built-in function to return a random number between 0-2.
    let no = Math.floor(Math.random() * 3);

    // if it returns 0. function will return rock
    if(no === 0){
        return "rock";
    }
    // if it returns 1. function will return paper
    else if(no === 1){
        return "paper";
    } 
    // if it returns 2. function will return scissor
    else {
        return "scissor";
    }
}


// a function plays a single round of Rock Paper Scissors. that takes two parameters - the playerSelection and computerSelection. 
//return 1 if user wins. return -1 if computer wins. return 0 if match draws.
function playRound(playerSelection, computerSelection){
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
playerSelection = playerSelection.toLowerCase();

//if playerSelection is Rock & computerSelection is Rock then return 0 and print "Match Draw! Both select Rock"
if(playerSelection === "rock" && computerSelection === "rock"){
    console.log("Match Draw! Both select Rock");
    return 0;
}
//if playerSelection is Rock & computerSelection is Paper then return -1 and the string: "You Lose! Paper beats Rock"
else if(playerSelection === "rock" && computerSelection === "paper"){
    return "You Lose! Paper beats Rock";
}
//if playerSelection is Rock & computerSelection is Scissor then return the string: "You Win! Rock beats Scissor"
else if(playerSelection === "rock" && computerSelection === "scissor"){
    console.log("You Win! Rock beats Scissor");
    return 1;
}
//if playerSelection is Paper & computerSelection is Rock then return 1 and print the string: "You Win! Paper beats Rock"
else if(playerSelection === "paper" && computerSelection === "rock"){
    console.log("You Win! Paper beats Rock");
    return 1;
}
//if playerSelection is Paper & computerSelection is Paper then return 0 and print the string: "Match Draw! Both select Paper"
else if(playerSelection === "paper" && computerSelection === "paper"){
    console.log("Match Draw! Both select Paper");
    return 0;
}
//if playerSelection is Paper & computerSelection is Scissor then return -1 and print the string: "You Lose! Scissor beats Paper"
else if(playerSelection === "paper" && computerSelection === "scissor"){
    console.log("You Lose! Scissor beats Paper");
    return -1;
}

//if playerSelection is Scissor & computerSelection is Rock then return -1 and print the string: "You Lose! Rock beats Scissor"
else if(playerSelection === "scissor" && computerSelection === "rock"){
    console.log("You Lose! Rock beats Scissor");
    return -1;
}
//if playerSelection is Scissor & computerSelection is Paper then return 1 and print the string: "You Win! Scissor beats Paper"
else if(playerSelection === "scissor" && computerSelection === "paper"){
    console.log("You Win! Scissor beats Paper");
    return 1;
}
//if playerSelection is Scissor & computerSelection is Scissor then return 0 and print the string: "Match Draw! Both select Scissor"
else if(playerSelection === "scissor" && computerSelection === "scissor"){
    console.log("Match Draw! Both select Scissor");
    return 0;
}
//if no condition matched then print "error!"
else {
    console.log("error! please input the right value");
}
}

//create a function named playerSelection() that gets input from user through prompt() and return it as a string
function getPlayerSelection(){
    return prompt("Write Rock, Paper or Scissor");
}

//create a function called game(). 
//Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//At this point you should be using console.log() to display the results of each round and the winner at the end.
//Use prompt() to get input from the user.
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
        console.log(`your score is ${userScore}`);
        console.log(`computer's score is ${computerScore}`);
        console.log("congrulations! you won the touranment");
    } else if(userScore < computerScore){
        console.log(`your score is ${userScore}`);
        console.log(`computer's score is ${computerScore}`);
        console.log("you lose the touranment");
    } else if(userScore === computerScore){
        console.log(`your score is ${userScore}`);
        console.log(`computer's score is ${computerScore}`);
        console.log("touranment is draw");
    }

}

game();