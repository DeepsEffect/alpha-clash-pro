function getId (idName){
    return document.getElementById(idName);
}

function randomAlphabet () {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('')
    const random = Math.floor(Math.random() * alphabet.length);
    return alphabet[random];
}

function keyboardHighlighter (elementId){
    getId(elementId).classList.add('bg-orange-400');
}
function keyboardNonHighlighter (elementId){
    getId(elementId).classList.remove('bg-orange-400');
}