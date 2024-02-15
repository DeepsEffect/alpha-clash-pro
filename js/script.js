document.addEventListener('keyup', keyPress)

function playNow(event) {
    getId('play-game').classList.remove('hidden');
    getId('play-now').classList.add('hidden');
    getId('score-board').classList.add('hidden');
    getId('score-card').innerText = '0'
    getId('life-bar').innerText = '3'
    continueGame();

}

function continueGame() {
    const randomAlpha = randomAlphabet();
    getId('alpha-screen').innerText = randomAlpha;
    keyboardHighlighter(randomAlpha);

}

function keyPress(event) {
    if (event.key === 'Escape') {
        gameOver();
    }
    const pressedKey = event.key;
    const currentKey = getId('alpha-screen').innerText;
    if (currentKey === pressedKey) {
        getId('score-card').innerText++;
        keyboardNonHighlighter(pressedKey);
        continueGame();
    }
    else {
        const lifeBar = getId('life-bar').innerText--;
        if (lifeBar === 1) {
            gameOver();
        }

    }

}

function gameOver() {
    getId('play-game').classList.add('hidden');
    getId('score-board').classList.remove('hidden');
    Score();
    playAgain();
}

function Score() {
    getId('score').innerText = getId('score-card').innerText;
}

function playAgain() {
    getId('play-again').addEventListener('click', playNow);
    const currentKey = getId('alpha-screen').innerText;
    keyboardNonHighlighter(currentKey);

}




