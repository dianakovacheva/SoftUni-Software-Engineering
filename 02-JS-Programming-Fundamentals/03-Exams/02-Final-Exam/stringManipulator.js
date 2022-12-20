function stringManipulator(arr) {
    let string = arr.shift();
    let currentLine = arr.shift();
    // Commands
    while (currentLine !== 'End') {
        let splittedLine = currentLine.split(' ');
        let command = splittedLine[0];
        switch (command) {
            case "Translate":
                let charToReplace = splittedLine[1];
                let replacement = splittedLine[2];
                let pattern = new RegExp(charToReplace, 'g');
                string = string.replace(pattern, replacement);
                console.log(string);
                break;
            case "Includes":
                let substringToCheck = splittedLine[1];
                if (string.includes(substringToCheck)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case "Start":
                let startSubstring = splittedLine[1];
                if (string.startsWith(startSubstring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case "Lowercase":
                string = stringToLowerCase = string.toLowerCase();
                console.log(stringToLowerCase);
                break;
            case "FindIndex":
                let char = splittedLine[1];
                let index = Number(string.lastIndexOf(char));
                console.log(index);
                break;
            case "Remove":
                let startIndex = Number(splittedLine[1]);
                let count = Number(splittedLine[2]);
                let fistPart = string.slice(0, startIndex);
                let toRemove = (startIndex + count);
                let lastPart = string.slice(toRemove);
                string = fistPart + lastPart;
                console.log(string);
                break;
        }
        currentLine = arr.shift();
    }
}

stringManipulator(['*S0ftUni is the B3St Plac3**',
    'Translate 2 o',
    'Includes best',
    'Start the',
    'Lowercase',
    'FindIndex p',
    'Remove 2 7',
    'End']);