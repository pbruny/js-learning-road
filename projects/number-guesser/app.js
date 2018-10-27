let min = 1,
    max = 10,
    winningNum,
    guessesLeft = 3;

const UIgame = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-value'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

UIgame.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again'){
        console.log('Clicou');
        
        window.location.reload();
    }
})

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    winningNum = setNumber();
    if (guess < min || guess > max || isNaN(guess)) {
        setMessage(`Please, enter a value between ${min} and ${max}`, 'red');
    } else {
        if (guess === winningNum) {
            gameOver(true, `Congratulations! You have guessed the number ${winningNum}!`)
        } else {
            guessesLeft--;
            if (guessesLeft > 0) {
                setMessage(`The number you have entered is not correct, you have ${guessesLeft} guesses left! Try again!`, 'red');
                guessInput.value = '';
            } else {
                gameOver(false, `Game Over! You have used ${guessesLeft + 3} guesses! The correct number was ${winningNum}`);
            }
        }
    }
})

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function setNumber() {
    let num = Math.floor(Math.random() * 10 + 1);
    return num;
}