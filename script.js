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
    scoreboard.textContent= "YOU " + playerScore + " - " + computerScore + " BOT";
    if (roundCounter === 5){
        win();
    }
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
    buttons.style.visibility = 'collapse';
    resetButton.style.visibility = 'visible';
}

//MAIN
const rock= document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const buttons=document.querySelector('#buttons');
const resetButton=document.querySelector('#reset-button');
const scoreboard= document.querySelector('#scoreboard');
const sign= document.querySelector('#sign');
const winner= document.querySelector('#winner');
scoreboard.textContent= "YOU " + playerScore + " - " + computerScore + " BOT";

resetButton.style.visibility= 'hidden';

rock.addEventListener('click', ()=>{
    if (roundCounter!=5){
        roundCounter++;
        playRound('rock');
    }
})
paper.addEventListener('click', ()=>{
    if (roundCounter!=5){
        roundCounter++;
        playRound('paper');
    }
})
scissors.addEventListener('click', ()=>{
    if (roundCounter!=5){
        roundCounter++;
        playRound('scissors');
    }
})
resetButton.addEventListener('click', ()=>{
    playerScore=0;
    computerScore=0;
    roundCounter=0;
    scoreboard.textContent= "YOU " + playerScore + " - " + computerScore + " BOT";
    winner.textContent= " ";
    sign.textContent= " ";
    buttons.style.visibility= 'visible';
    resetButton.style.visibility = 'collapse';
} )