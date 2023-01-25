const computerChoices = document.getElementById('computer-choice')
const userChoices = document.getElementById('user-choice')
const results =  document.getElementById('result')

const choices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

// Click Event
choices.forEach(choices => choices.addEventListener('click',(e)=>{
    // getting the clicked button ID
     userChoice = e.target.id
    // adding the image that corresponds to the choice
     userChoices.innerHTML = `<img src="./images/${userChoice}.png">`
     generateComputerChoice()
}))

// function generateComputerChoice
function generateComputerChoice(){
    
    // generate numbers between 1 and 3
    random = Math.floor(Math.random()*3)+1 
    
    // if random = 1
    if(random === 1){
        computerChoice = "rock"
    }
     // if random = 2
     if(random === 2){
        computerChoice = "paper"
    }
     // if random = 3
     if(random === 3){
        computerChoice = "scissors"
    }
    // adding the image that corresponds to the choice
    computerChoices.innerHTML = `<img src="./images/${computerChoice}.png">`
}

// checking if the player has won
function verification(){
    if(userChoice == computerChoice){
        result = "null !"
    }
    // loss cases
    if(userChoice == "rock" && computerChoice == "paper" ){
        result = "Lost !"
    }
    if(userChoice == "paper" && computerChoice == "scissors" ){
        result = "Lost !"
    }
    if(userChoice == "scissors" && computerChoice == "rock" ){
        result = "Lost !"
    }
    // winning cases
    if(userChoice == "paper" && computerChoice == "rock" ){
        result = "Winner !"
    }
    if(userChoice == "scissors" && computerChoice == "paper" ){
        result = "Winner !"
    }
    if(userChoice == "rock" && computerChoice == "scissors" ){
        result = "Winner !"
    }
    results.innerHTML = result;
}