 const buttons = document.querySelectorAll(".row button");
 const myScoreDisplay = document.querySelector(".score1");
 const herScoreDisplay = document.querySelector(".score2");
  const textDisplay = document.getElementById("textdisplay");

 let myScore = 0;
 let herScore = 0;


 buttons.forEach(button => {
   button.addEventListener("click", () => {
     const myChoice = button.classList[0];
     const herChoice = computerChoice();
     const result = playround(myChoice, herChoice);
    updateDisplay(result);
    updateScores();
   });
 });


 function computerChoice(){
   const choices = ["row1" , "row2" , "row3"];
   const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex];
 }
 function playround(myChoice, herChoice){
    if (myChoice === herChoice){
     return "It's a tie";
    } else if ((myChoice === "row1" && herChoice === "row3")||
       ( myChoice === "row2" &&  herChoice === "row1")||
       (myChoice  === "row3" && herChoice === "row2"))
   {
        myScore ++;
        return "You win";

       } else {
        herScore ++;
          return "You lose";
      }
     }
      function updateDisplay(result) {
       textDisplay.textContent = result; 
 }
function updateScores (){
  myScoreDisplay.textContent = myScore;
  herScoreDisplay.textContent = herScore;
}
