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

console.log(getComputerChoice());