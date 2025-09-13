//get random computer choice using 
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
