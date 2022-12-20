function secretChat(input) {
    let message = input.shift();
    let currentLine = input.shift();
    // Modify the message, until the 'Reveal' command is given
    while (currentLine !== 'Reveal') {
        let splittedLine = currentLine.split(':|:')
        let command = splittedLine[0];
        switch (command) {
            case "InsertSpace":
                let index = Number(splittedLine[1]);
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + ' ' + secondPart;
                console.log(message);
                break;
            case "Reverse":
                let substringToReverse = splittedLine[1];
                // Check if the message contains the given substring
                if (message.includes(substringToReverse)) {
                    // Start and end indexes of the substring, which has to be cutted out and reversed
                    let startIndex = message.indexOf(substringToReverse);
                    let endIndex = startIndex + substringToReverse.length;
                    // Cut out the substring
                    let stringCuttedPart = message.substring(startIndex, endIndex);
                    // Reverse the cutted substring
                    let reversedSubstring = stringCuttedPart.split("").reverse().join("");
                    // Add the cutted and reversed substring at the end of the message
                    let messageFirstPart = message.slice(0, startIndex);
                    let messageSecondPart = message.slice(endIndex);
                    message = messageFirstPart + messageSecondPart + reversedSubstring;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case "ChangeAll":
                // Changes all occurrences of the given substring with the replacement text
                let substringToChange = splittedLine[1];
                let replacement = splittedLine[2];
                let regExp = new RegExp(substringToChange, 'g');
                message = message.replace(regExp, replacement);
                console.log(message);
                break;
        }
        currentLine = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);