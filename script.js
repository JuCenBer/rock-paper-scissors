//Script for Rock Paper Scissors game
let playerScore=0;
let computerScore=0;

function computerPlay(){
    sel = Math.floor(Math.random()*3);
    sel= sel===0? "rock"
        :sel===1 ? "paper"
        :"scissors";
    return sel;
}

function playerPlay(){
    let sel = (window.prompt("Rock, Paper or Scissors?: ")).toLowerCase();
    while (!((sel ==="rock") || (sel ==="paper") || (sel ==="scissors"))){
        sel = (window.prompt("Dude, I didn't get the fuck you just have entered: Rock, Paper or Scissors?: ")).toLowerCase();
    }
    return sel;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
        console.log("Draw");
    else{
        switch(playerSelection){
            case "rock": 
                if (computerSelection === "paper"){
                    console.log("You lose! " + computerSelection + " beats " + playerSelection)
                    computerScore++;
                }
                else {
                    console.log("You win! " + playerSelection + " beats " + computerSelection)
                    playerScore++;
                }
                break;
            case "paper":
                if (computerSelection === "scissors"){
                    console.log("You lose! " + computerSelection + " beats " + playerSelection)
                    computerScore++;
                }
                else {
                    console.log("You win! " + playerSelection + " beats " + computerSelection)
                    playerScore++;
                }
                break;
            case "scissors":
                if (computerSelection === "rock"){
                    console.log("You lose! " + computerSelection + " beats " + playerSelection)
                    computerScore++;
                }
                else {
                    console.log("You win! " + playerSelection + " beats " + computerSelection)
                    playerScore++;
                }
                break;
            default:

                break;
    }
    }
}

//MAIN
function game(){
    let i;
    let playerSelection;
    let computerSelection;
    for(i=1; i<=5; i++){
        let playerSelection = playerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore)
        console.log("Nice match! You won");
    else if(playerScore < computerScore)
        console.log("Really? I didn't expect nothing and you still disapointed me...");
    else
        console.log("DRAW... Damn, what a match!");
    console.log("The match has came to its end");
}