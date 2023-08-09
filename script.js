const submit = document.getElementById("guessButton")
const Myinput = document.getElementById("guessInput")
const playAgain = document.getElementById("againBtn");
let message = document.querySelector(".outMsg")
let score = document.querySelector(".scoreCount");
let turns = document.querySelector(".turnCount")

let secretNumber= Math.floor(Math.random()*20)+1
console.log("secret number is: ", secretNumber)
let scoreCount = 0;
let turnsCount = 3;
submit.addEventListener('click', ()=>{
    inputValue = Number(Myinput.value);
    if(inputValue === secretNumber){
        message.textContent = "You win."
        scoreCount++;
        score.innerHTML=`${scoreCount}`
    }else if(inputValue > secretNumber){
        if(turnsCount>0){
            message.textContent="Too High"
            turnsCount--;
            turns.innerHTML=`${turnsCount}`
        }
    }else if(inputValue < secretNumber){
        if(turnsCount>0){
            message.textContent="Too Low"
            turnsCount--;
            turns.innerHTML=`${turnsCount}`
        }
    }
    if(turnsCount === 0){
        message.textContent ="Game Over";
    }
})
playAgain.addEventListener('click',()=>{
    location.reload();
})