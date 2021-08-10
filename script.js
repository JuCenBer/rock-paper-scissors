//Script for Rock Paper Scissors game
let playerScore=0;
let computerScore=0;
let roundCounter=0;

function computerPlay(){
    sel = Math.floor(Math.random()*3);
    sel= sel===0? "rock"
        :sel===1 ? "paper"
        :"scissors";
    return sel;
}

function playRound(playerSelection){
    computerSelection=computerPlay();
    
    
    if(playerSelection === computerSelection)
        sign.textContent = "Draw";
    else{
        switch(playerSelection){
            case "rock": 
                if (computerSelection === "paper"){
                    sign.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
                    computerScore++;
                }
                else {
                    sign.textContent = "You win! " + playerSelection + " beats " + computerSelection;
                    playerScore++;
                }
                break;
            case "paper":
                if (computerSelection === "scissors"){
                    sign.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
                    computerScore++;
                }
                else {
                    sign.textContent = "You win! " + playerSelection + " beats " + computerSelection;
                    playerScore++;
                }
                break;
            case "scissors":
                if (computerSelection === "rock"){
                    sign.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
                    computerScore++;
                }
                else {
                    sign.textContent = "You win! " + playerSelection + " beats " + computerSelection;
                    playerScore++;
                }
                break;
            default:

                break;
                
    }
    }
    scoreboard.textContent= playerScore + " - " + computerScore;
}
function win(){
    if(playerScore>computerScore){
        winner.textContent="YOU WON!";
    }
    else if(playerScore<computerScore){
        winner.textContent="YOU LOSE!";
    }
    else{
        winner.textContent="TIED GAME";
    }
}

//MAIN
const rock= document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const scoreboard= document.querySelector('#scoreboard');
const sign= document.querySelector('#sign');
const winner= document.querySelector('#winner');
scoreboard.textContent= playerScore + " - " + computerScore;
rock.addEventListener('click', ()=>{
    if (roundCounter!=5){
        roundCounter++;
        console.log(1);
        playRound('rock');
    }
    else{
        win();
    }
})
paper.addEventListener('click', ()=>{
    if (roundCounter!=5){
        roundCounter++;
        console.log(2);
        playRound('paper');
    }
    else{
        win();
    }
})
scissors.addEventListener('click', ()=>{
    if (roundCounter!=5){
        console.log(3);
        roundCounter++;
        playRound('scissors');
    }
    else{
        win();
    }
})