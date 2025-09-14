let humanScore=0;
let computerScore=0;
//get random computer choice 
function getComputerChoice(){
const max=3;
const randomNumber=Math.floor(Math.random()*max)
if(randomNumber===0){
      return "Rock";
        //console.log("Rock")
}
else if(randomNumber===1){
        return "Paper";
        //console.log("Paper")
}
  else if(randomNumber===2) {
        return "Scissor";
   //console.log("Scissor")     
  }   

        

}
//getComputerChoice();

//get human choice
function getHumanChoice(){
console.log("Enter a valid data between 1-3"); 
 console.log( "1.Rock")    ;
console.log("2. Paper")   ;
 console.log("3.Scissor") ;
 let choice=parseInt(prompt("Enter your choice:",''));
 if(choice===1){
        return "Rock";
        //console.log("Rock")
 }
 else if(choice===2){
        return "Paper";
       // console.log("Paper")
 }
 else if(choice===3){
        return "Scissor";
        //console.log("Scisssor")
 }
else {
      //  console.log("Invalid data")
}
}
//getHumanChoice();
function playRound(humanSelection,computerSelection){
if(humanSelection===computerSelection)
{
        console.log("Draw");
        
}
else if((humanSelection==="Rock")&&(computerSelection==="Scissor"))
{
        console.log("You win! Rock beats Scissor  ");
        humanScore++;
}

else if((humanSelection==="Rock")&&(computerSelection==="Paper"))
{
        console.log("You lose! Paper beats Rock ");
        computerScore++;
}
else if((humanSelection==="Paper")&&(computerSelection==="Rock"))
{
        console.log("You win! Paper beats Rock ");
        humanScore++;
}
else if((humanSelection==="Paper")&&(computerSelection==="Scissor"))
{
        console.log("You lose! Scissor beats Paper ");
        computerScore++;
}
else if((humanSelection==="Scissor")&&(computerSelection==="Rock"))
{
        console.log("You lose! Rock beats Scissor ");
        computerScore++;
}
else if((humanSelection==="Scissor")&&(computerSelection==="Paper"))
{
        console.log("You win! Scissor beats Paper ");
        humanScore++;
}
else{
        console.log("Invalid Choice")
}
console.log(`Your Score:${humanScore} | Computer Score:${computerScore}`)
}
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);