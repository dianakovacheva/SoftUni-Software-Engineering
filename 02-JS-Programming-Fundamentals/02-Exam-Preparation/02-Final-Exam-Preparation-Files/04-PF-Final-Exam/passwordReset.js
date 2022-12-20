function passwordReset(arr) {
    let password = arr.shift();
    let currentLine = arr.shift();
    while (currentLine !== 'Done') {
        let splittedLine = currentLine.split(' ');
        let command = splittedLine[0];
        switch (command) {
            case "TakeOdd":
            let tempArr = [];    
            // Takes only the characters at odd indices and concatenates them to obtain the new raw password
                for (let i = 0; i < password.length; i++) {
                    const currentChar = password[i];
                    if (i % 2 !== 0) {
                        tempArr.push(currentChar);
                    }
                }
                password = tempArr.join("")
                // Print the password
                console.log(password);
                break;
            case "Cut":
                let index = Number(splittedLine[1]);
                let length = Number(splittedLine[2]);
                // Get the substring with the given length starting from the given index from the password and remove its first occurrence
                const substringToCut = password.substr(index, length);
                password = password.replace(substringToCut, '');
                // Print the password
                console.log(password);
                break;
            case "Substitute":
                let substringToReplace = splittedLine[1];
                let substitute = splittedLine[2];
                if (password.includes(substringToReplace)) {
                    let pattern = new RegExp(substringToReplace, 'g');
                    password = password.replace(pattern, substitute);
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);