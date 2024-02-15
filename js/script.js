function playNow () {
    getId('play-game').classList.remove('hidden');
    getId('play-now').classList.add('hidden')
    continueGame()
}

function continueGame() {
    const randomAlpha = randomAlphabet();
    getId('alpha-screen').innerText = randomAlpha;
    keyboardHighlighter(randomAlpha);

}



