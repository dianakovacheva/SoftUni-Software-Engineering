function theImitationGame(arrData) {
    let message = arrData.shift();
    let currentLine = arrData.shift();
    while (currentLine !== 'Decode') {
        let splittedLine = currentLine.split('|');
        let command = splittedLine[0];
        switch (command) {
            case "Move":
                // Moves the first n letters to the back of the string
                let lettersCount = Number(splittedLine[1]);
                let lettersToMove = message.substring(0, lettersCount);
                let leftLetters = message.substring(lettersCount);
                message = leftLetters + lettersToMove;
                break;
            case "Insert":
                // Inserts the given value before the given index in the string
                let index = Number(splittedLine[1]);
                let value = splittedLine[2];
                let messageFirstPart = message.substring(0, index);
                let messageLastPart = message.substring(index);
                message = messageFirstPart + value + messageLastPart;
                break;
            case "ChangeAll":
                // Changes all occurrences of the given substring with the replacement text
                let substringToChange = splittedLine[1];
                let replacement = splittedLine[2];
                substringToChange = escapeRegExp(substringToChange);
                let pattern = new RegExp(substringToChange, 'g');
                message = message.replace(pattern, replacement);
                break;
        }
        currentLine = arrData.shift();
    }
    // After the "Decode" command is received, print this message:
    console.log(`The decrypted message is: ${message}`);
    // Escape symbols with RegExp
    function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
}

theImitationGame([
    'Hello?',
    'ChangeAll|?|!',
    'Decode',
]);