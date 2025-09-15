let humanScore=0;
let computerScore=0;
let roundNumber=1;
let maxRound=5;
//get random computer choice 
function getComputerChoice(){
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

function getHumanChoice(){
console.log("Enter a valid data between 1-3"); 
console.log( "1.Rock")    ;
console.log( "2. Paper")   ;
console.log( "3.Scissor") ;
 let choice=parseInt(prompt("Enter your choice:",''));
 if(choice===1){
        return "Rock";
       
 }
 else if(choice===2){
        return "Paper";
    
 }
 else if(choice===3){
        return "Scissor";

}

}
/*Here the two functions are called inside the playRound() 
 so that they are looped for the desired amount of time in the playGame()*/

function playRound(){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
if(humanSelection===computerSelection)
{
        console.log(`Your choice: ${humanSelection} | Computer Choice:${computerSelection}`)
        console.log("Draw");
        humanScore++;
        computerScore++;
        
}
else if((humanSelection==="Rock")&&(computerSelection==="Scissor")||
(humanSelection==="Scissor")&&(computerSelection==="Paper") ||
(humanSelection==="Paper")&&(computerSelection==="Rock"))
{
        console.log(`Your choice: ${humanSelection} | Computer Choice:${computerSelection}`)
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
}
  
else if ((computerSelection==="Rock")&&(humanSelection==="Scissor")||
(computerSelection==="Scissor")&&(humanSelection==="Paper") ||
(computerSelection==="Paper")&&(humanSelection==="Rock"))
{
        console.log(`Your choice: ${humanSelection} | Computer Choice:${computerSelection}`);
        console.log(`You lose ${computerSelection} beats ${humanSelection}`);
        computerScore++;
}
else
{
        console.log("Invalid Choice");
}
        console.log(`Your Score:${humanScore} | Computer Score:${computerScore}`);

}
function playGame(){
  for(let i=0;i<5;i++ )
        {
        playRound();
        roundNumber++;   
         }   
  if(humanScore>computerScore)
        {
        console.log("Overall:Congratulation! You won the game!") 
         }
 else if(computerScore>humanScore)
        {
         console.log("Overall:Sorry! You failed the game!")
        } 
        else
        {
        console.log("Overall: It's a tie")
        }
}
playGame();