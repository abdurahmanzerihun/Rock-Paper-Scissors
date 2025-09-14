let humanScore=0;
let computerScore=0;
//get random computer choice 
function getComputerChoice(){
const max=3;
const randomNumber=Math.floor(Math.random()*max)
if(randomNumber===0){
       
        console.log("Rock")
}
else if(randomNumber===1){
        
        console.log("Paper")
}
  else if(randomNumber===2) {
   console.log("Scissor")     
  }   

        

}
getComputerChoice();

//get human choice
function getHumanChoice(){
console.log("Enter a valid data between 1-3"); 
 console.log( "1.Rock")    ;
console.log("2. Paper")   ;
 console.log("3.Scissor") ;
 let choice=parseInt(prompt("Enter your choice:",''));
 if(choice===1){
        console.log("Rock")
 }
 else if(choice===2){
        console.log("Paper")
 }
 else if(choice===3){
        console.log("Scisssor")
 }
else {
        console.log("Invalid data")
}
}
getHumanChoice();