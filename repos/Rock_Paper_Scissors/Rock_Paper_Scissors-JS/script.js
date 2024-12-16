const options = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const winner = checkWinner(humanSelection, computerSelection);
    winners.push(winner);
}

function getHumanChoice() {
    let input = prompt("What will you choose: Rock, Paper or Scissors?");
    while(input == null) { 
        input = prompt("What will you choose: Rock, Paper or Scissors?");
    }; 
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "You need to spell it exactly as: Rock or Paper or Scissors"
        );
        while (input == null) {
        input = prompt("Type either: Rock or Paper or Scissors?");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function getComputerChoice() { 
    return options[Math.floor(Math.random() * options.length)];
}
console.log(options[Math.floor(Math.random() * options.length)]);

function validateInput(option) {
    return options.includes(option)
}


function checkWinner(humanSelection, computerSelection) {
    if(humanSelection === computerSelection) {
        return "Tie!";
    } 
    else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ) { 
        return "Player";
    } 
    else{
        return "Computer";
    }
}

// function playRound(humanSelection, computerSelection) {
//     const winner = checkWinner(humanSelection, computerSelection);
//     if(winner == "Tie!") {
//         return "It is a Tie!"
//     } 
//     else if(winner == "User") {
//         return `You win! ${humanSelection} beats ${computerSelection}!`
//     } 
//     else {
//         return `You loose! ${computerSelection} beats ${humanSelection}!`
//     }
// }

// function logWins() {
//     console.log(winners);
//     let humanWins = winners.filter((item) => item == "User").length;
//     let computerWins = winners.filter((item) => item == "Computer").length;
//     let ties = winners.filter((item) => item == "Tie").length;
//     console.log("Results:");
//     console.log("Player Wins:", humanWins);
//     console.log("Computer Wins:", computerWins);
//     console.log("Ties:", ties);
// }

// function logRound(getHumanChoice, getComputerChoice, checkWinner){
//     console.log("Round:",round)
//     console.log("Player Chose:",getHumanChoice)
//     console.log("Computer Chose:",getComputerChoice)
//     console.log(checkWinner, "won the round")
// } 

game();