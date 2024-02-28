function guessingGame() {
    let secretNumber = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guesses = 0;

    return function (guess) {
        guesses++;

        if (gameOver) {
            return 'The game is over, you already won!';
        }

        if (guess === secretNumber) {
            gameOver = true;
            return `You win! You found ${guess} in ${guesses} guesses.`;
        }

        if (guess < secretNumber) {
            return `${guess} is too low!`;
        }

        if (guess > secretNumber) {
            return `${guess} is too high!`;
        }
    }
}

module.exports = { guessingGame };
