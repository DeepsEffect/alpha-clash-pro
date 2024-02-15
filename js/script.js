function playNow () {
    getId('play-game').classList.remove('hidden');
    getId('play-now').classList.add('hidden')
    continueGame()
}

function continueGame() {
    getId('alpha-screen').innerText = randomAlphabet();
}



