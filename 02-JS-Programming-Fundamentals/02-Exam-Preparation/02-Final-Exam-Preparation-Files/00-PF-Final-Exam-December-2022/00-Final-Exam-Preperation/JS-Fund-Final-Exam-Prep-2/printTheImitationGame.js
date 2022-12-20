function theImitationGame(arr) {
    let message = arr.shift();
    let currentLine = arr.shift();
    while (currentLine !== "Decode") {
        let splittedLine = currentLine.split('|');
        let command = splittedLine[0];
        switch (command) {
            case "Move":
                let numberOfLettersToMove = Number(splittedLine[1]);
                // for (let i = 0; i < numberOfLettersToMove; i++) {
                //     let firstLetter = message[0];
                //     message = message.slice(1) + firstLetter;
                // }
                let firstLettersToMove = message.substring(0, numberOfLettersToMove);
                let lastLetters = message.substring(numberOfLettersToMove);
                message = lastLetters + firstLettersToMove;
                break;
            case "Insert":
                let index = Number(splittedLine[1]);
                let value = splittedLine[2];
                // message = message.slice(0, index) + value + message.slice(index);
                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                message = firstPart + value + secondPart;
                break;
            case "ChangeAll":
                let substring = splittedLine[1];
                let replacement = splittedLine[2];
                // console.table(message.split(substring))
                // message = message.replaceAll(substring, replacement);
                message = message.split(substring).join(replacement);
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)