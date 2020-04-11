let user_score = 0;
let computer_score = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const result_section = document.getElementById('result');
const rock_img = document.getElementById('rock');
const paper_img = document.getElementById('paper');
const scissors_img = document.getElementById('scissors');

// GETTING COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function userWins(userChoice, computerChoice) {
  user_score++;
  userScore_span.innerHTML = user_score;
  result_section.innerHTML = `${userChoice} beats ${computerChoice}, You win!`;  
}

function computerWins(userChoice, computerChoice) {
    computer_score++;
    computerScore_span.innerHTML = computer_score;
    result_section.innerHTML = `${computerChoice} beats ${userChoice}, You lose!`;
}

function draw(userChoice, computerChoice) {
    result_section.innerHTML = 'Draw!';
}

//cOMPARING OUTCOMES
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            userWins(userChoice, computerChoice);
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            computerWins(userChoice, computerChoice);
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_img.addEventListener('click', function() {
        game('rock');
    });

    paper_img.addEventListener('click', function() {
        game('paper');
    });

    scissors_img.addEventListener('click', function() {
        game('scissors');
    });
}

main();