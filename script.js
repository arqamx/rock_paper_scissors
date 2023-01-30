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
    return -1;
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



console.log(`computer's choice is: ${getComputerChoice()}`);
console.log(playRound("Scissor", getComputerChoice()));