////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    return move || getInput(); 
}

function getComputerMove(move) {

    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    switch(playerMove) {      
        case 'Rock': 
                switch(computerMove) { 
                case 'Rock':
                        winner = 'tie';
                        break;
                case 'Scissors':
                        winner = 'player';
                        break;
                case 'paper':
                        winner = 'computer';
                        break;
                default:
                        alert('wrong move');
                }
        break;
        case 'Scissors': 
                switch(computerMove) {
                case 'Rock':
                        winner = 'computer';
                        break;
                case 'Scissors':
                        winner = 'tie';
                        break;
                case 'paper':
                        winner = 'player';
                        break;
                default:
                        alert('wrong move');
                }
        break;
        case 'Paper': 
                switch(computerMove) {
                case 'Rock':
                        winner = 'player';
                        break;
                case 'Scissors':
                        winner = 'computer';
                        break;
                case 'paper':
                        winner = 'tie';
                        break;
                default:
                        alert('wrong move');
                }
            break;
        default:
                alert('wrong move');
 }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    
    while (playerWins<5 && computerWins<5) {
        
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
    
        winner = getWinner(playerMove,computerMove);
    
        if (winner == 'player') {
        
            playerWins++;
        
        }
        else {
         
             computerWins++;
         
        }
    
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
 
    
    }

    return [playerWins, computerWins];
}



