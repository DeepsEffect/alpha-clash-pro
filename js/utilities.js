function getId (idName){
    return document.getElementById(idName);
}

function randomAlphabet () {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('')
    const random = Math.floor(Math.random() * alphabet.length);
    return alphabet[random];
}