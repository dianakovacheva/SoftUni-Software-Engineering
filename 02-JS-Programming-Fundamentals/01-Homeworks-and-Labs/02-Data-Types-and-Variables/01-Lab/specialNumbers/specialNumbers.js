function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let currentNumber = i;
        let numToString = String(currentNumber);
        let sumOfDigits = 0;

        for (let j = 0; j < numToString.length; j++) {
            let currentChar = numToString[j];
            sumOfDigits += Number(currentChar);
        }

        console.log(`${currentNumber} -> ${sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11 ? "True" : "False"}`);
    }
}

specialNumbers(20);