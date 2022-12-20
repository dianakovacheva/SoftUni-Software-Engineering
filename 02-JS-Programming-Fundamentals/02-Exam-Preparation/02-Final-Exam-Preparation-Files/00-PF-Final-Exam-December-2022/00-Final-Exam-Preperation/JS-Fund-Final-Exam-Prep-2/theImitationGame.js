function theImitationGame(arr) {
    let message = arr.shift().split('');
    let currentLine = arr.shift();
    while (currentLine !== "Decode") {
        let splittedLine = currentLine.split('|');
        let command = splittedLine[0];
        switch (command) {
            case "Move":
                let numberOfLettersToMove = Number(splittedLine[1]);
                for (let i = 0; i < numberOfLettersToMove; i++) {
                    let firstLetter = message.shift();
                    message.push(firstLetter);
                }
                break;
            case "Insert":
                let index = Number(splittedLine[1]);
                let value = splittedLine[2];
                message.splice(index, 0, value);
                break;
            case "ChangeAll":
                let substring = splittedLine[1];
                let replacement = splittedLine[2];
                while (message.includes(substring)) {
                    let index = message.indexOf(substring);
                    message.splice(index, 1, replacement);
                }
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message.join('')}`);
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);