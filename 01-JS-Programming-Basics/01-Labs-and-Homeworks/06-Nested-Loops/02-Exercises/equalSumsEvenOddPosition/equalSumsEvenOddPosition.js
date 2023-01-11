function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let toPrintLine = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentInput = "" + i;
        let sumOddNumbers = 0;
        let sumEvenNumbers = 0;
        for (let j = 0; j <= currentInput.length; j++) {
            let currentDigit = Number(currentInput.charAt(j));
            if (j % 2 === 0) {
                sumEvenNumbers += currentDigit;
            } else {
                sumOddNumbers += currentDigit;
            }
        }
        if (sumEvenNumbers === sumOddNumbers) {
            toPrintLine += ` ${i}`;
        }
    }
    console.log(toPrintLine);
}

equalSumsEvenOddPosition(["100000",
"100050"])


