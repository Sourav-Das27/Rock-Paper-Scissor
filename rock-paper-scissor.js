function computerMove(){
    let randomNum = Math.random();
    let cMove = '';
    if(randomNum > 0 && randomNum < 1/3){
        cMove = 'rock';
    } else if(randomNum > 1/3 && randomNum < 2/3){
        cMove = 'paper';
    } else if(randomNum > 2/3 && randomNum < 1){
        cMove = 'scissor';
    }
    return cMove;
}
let score = {
    won: 0,
    lose: 0,
    tie: 0,
    round: 0
}

function playerMove(pMove){
    let comMove = computerMove();
    let result = '';

    if(comMove === 'rock'){
        if(pMove === 'rock'){
            result = 'Tie.';
        } else if(pMove === 'paper'){
            result = 'You Won.';
        } else if(pMove === 'scissor'){
            result = 'You Lose.';
        }
    } else if(comMove === 'paper'){
        if(pMove === 'rock'){
            result = 'You Lose.';
        } else if(pMove === 'paper'){
            result = 'Tie.';
        } else if(pMove === 'scissor'){
            result = 'You Won.';
        }
    } else if(comMove === 'scissor'){
        if(pMove === 'rock'){
            result = 'You Won.';
        } else if(pMove === 'paper'){
            result = 'You Lose.';
        } else if(pMove === 'scissor'){
            result = 'Tie.';
        }
    }

    const showMoves = document.getElementById('moves');
    showMoves.innerHTML = `<img src="images/${pMove}.png" class="result-pic"> <img src="images/${comMove}.png" class="result-pic">`;

    if(result === 'You Won.'){
        score.won += 1;
    } else if(result === 'You Lose.'){
        score.lose += 1;
    } else if(result === 'Tie.'){
        score.tie += 1;
    }

    score.round += 1;

    document.getElementById('won').innerHTML = score.won;
    document.getElementById('lose').innerHTML = score.lose;
    document.getElementById('tie').innerHTML = score.tie;
    document.getElementById('round').innerHTML = score.round;

    document.getElementById('resShow').innerHTML = result;

}

function resetScore(){
    score.won = 0;
    score.lose = 0;
    score.tie = 0;
    score.round = 0;

    document.getElementById('won').innerHTML = score.won;
    document.getElementById('lose').innerHTML = score.lose;
    document.getElementById('tie').innerHTML = score.tie;
    document.getElementById('round').innerHTML = score.round;

    document.getElementById('resShow').innerHTML = 'Play Again.';

    const showMoves = document.getElementById('moves');
    showMoves.innerHTML = null;
}