'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent  = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function displayMessage (message) {
    return document.querySelector('.message').textContent = message;
}

function displayNumber (number) {
    return document.querySelector('.number').textContent = number;
}

function displayScore (score) {
    return document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        
        displayMessage('⛔️ No number!');
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        displayNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            displayScore('0');
        }
    }  
})

document.querySelector('.again').addEventListener('click', function() {
    // document.querySelector('.number') = secretNumber;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    displayScore('20');
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})