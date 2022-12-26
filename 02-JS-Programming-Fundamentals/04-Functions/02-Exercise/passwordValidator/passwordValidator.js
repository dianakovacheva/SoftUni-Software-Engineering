function passwordValidator(password) {

    let digitsCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;
    for (let i = 0; i < passwordLength; i++) {
        let currentElement = password[i].charCodeAt();
        //Password must consist only letters and digits
        let isSmallLetter = currentElement >= 97 && currentElement <= 122;
        let isCapitalLetter = currentElement >= 65 && currentElement <= 90;
        let isDigit = currentElement >= 48 && currentElement <= 57;
        // Increase the digitsCounter
        if (isDigit) {
            digitsCounter++;
        }
        // Check for symbol
        if (!isSmallLetter && !isCapitalLetter && !isDigit) {
            isSymbol = true;
            break;
        }
    }

    if (passwordLength < 6 || passwordLength > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (isSymbol) {
        console.log("Password must consist only of letters and digits");
    }

    if (digitsCounter < 2) {
        console.log("Password must have at least 2 digits");
    }

    if ((passwordLength >= 6 || passwordLength <= 10) && digitsCounter >= 2 && !isSymbol) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
console.log('--------------------');
passwordValidator('MyPass123');
console.log('--------------------');
passwordValidator('Pa$s$s');