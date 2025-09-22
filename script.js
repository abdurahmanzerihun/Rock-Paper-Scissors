let round=0;
let maxRound=5;
let humanSelections=document.querySelectorAll('.choices button');
let gameResult=document.getElementById('gameResult');
let humanScore=0;
let computerScore=0;
let choiceResult=document.getElementById('choiceResult');
let humanScoreV=document.getElementById('humanScore');
let computerScoreV=document.getElementById('computerScore');
let reset=document.getElementById('reset');
let anounce=document.getElementById('anounce');

humanSelections.forEach(button => {
    button.addEventListener('click', (e) => {
        const humanSelection = e.target.id;
        playRound(humanSelection);
    });
});
function getComputerChoice(){
        //get random computer choice 
const max=3;
const randomNumber=Math.floor(Math.random()*max)
if(randomNumber===0){
      return "Rock";
       }
else if(randomNumber===1){
        return "Paper";
        }
  else if(randomNumber===2) {
        return "Scissor";
        }   
}

function playRound(humanSelection){
        if(round>=maxRound){
                return;
        }
        const computerSelection=getComputerChoice();
if(humanSelection===computerSelection)
{
       choiceResult.textContent= `Your choice: ${humanSelection} | Computer Choice:${computerSelection}`
       gameResult.textContent= `Round:${round+1} | Draw`;
        humanScore++;
        computerScore++;
        
}
else if((humanSelection==="Rock")&&(computerSelection==="Scissor")||
(humanSelection==="Scissor")&&(computerSelection==="Paper") ||
(humanSelection==="Paper")&&(computerSelection==="Rock"))
{
       choiceResult.textContent=`Your choice: ${humanSelection} | Computer Choice:${computerSelection}`
       gameResult.textContent=`Round:${round+1}| You win! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
}
  
else if ((computerSelection==="Rock")&&(humanSelection==="Scissor")||
(computerSelection==="Scissor")&&(humanSelection==="Paper") ||
(computerSelection==="Paper")&&(humanSelection==="Rock"))
{
        choiceResult.textContent=`Your choice: ${humanSelection} | Computer Choice:${computerSelection}`;
        gameResult.textContent=`Round:${round+1} | You lose ${computerSelection} beats ${humanSelection}`;
        computerScore++;
}
else
{
         gameResult.textContent="Invalid Choice";
}
      round++;
        humanScoreV.textContent=`Your Score:${humanScore}`;
        computerScoreV.textContent=`Computer Score:${computerScore}`;
        if(round===maxRound){
                anounceWinner();
        }

}
function anounceWinner(){
  
  if(humanScore>computerScore)
        {
        anounce.textContent="Overall:Congratulation! You won the game!"; 
         }
 else if(computerScore>humanScore)
        {
        anounce.textContent="Overall:Sorry! You failed the game!";
        } 
        else
        {
        anounce.textContent="Overall: It's a tie";
        }
}
reset.addEventListener('click',(event)=>{
        humanScore=0;
        computerScore=0;
        round=0;
         humanScoreV.textContent=`Your Score:${humanScore}`;
        computerScoreV.textContent=`Computer Score:${computerScore}`;
         gameResult.textContent=`Round:${round}`;

});

