const options = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(humanSelection, computerSelection);
    winners.push(winner);
    logRound(humanSelection, computerSelection, winner, round);
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

function validateInput(option) {
    return options.includes(option)
}


function checkWinner(humanSelection, computerSelection) {
    if(humanSelection === computerSelection) {
        return "Tie";
    } else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ) { 
        return "Player";
    } else{
        return "Computer";
    }
}

function logWins() {
    let humanWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("------------------------------------");
    console.log("Results:");
    console.log("Player Wins:", humanWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(getHumanChoice, getComputerChoice, winner, round) {
    console.log("Round:",round);
    console.log("Player Chose:",getHumanChoice);
    console.log("Computer Chose:",getComputerChoice);
    console.log(winner,"won the round");
    console.log("------------------------------------");
} 

// game();