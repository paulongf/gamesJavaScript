const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibelChoices = document.querySelectorAll('button');

let userChoice
let computerChoice
let result

possibelChoices.forEach(possibelChoice => possibelChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 + 1) // or we can use possibleChoices.lenght
    console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "its a draw!"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "you lost!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Great! You Win!"
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "You lose!"
    }
    if(computerChoice === 'rock' && userChoice === "scissors"){
        result = "You Lose!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You Win!"
    }
    if(computerChoice == 'scissors' && userChoice === 'paper' ){
         result = "You Lose!"
    }

    resultDisplay.innerHTML = result; 

}
