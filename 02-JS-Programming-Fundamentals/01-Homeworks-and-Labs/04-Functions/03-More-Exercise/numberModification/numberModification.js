function numberModification(number) {

    let numberToString = number.toString();
    let average = 0;

    while (average <= 5) {
        let sum = 0;
        for (let i = 0; i < numberToString.length; i++) {
            let currentDigit = Number(numberToString[i]);
            sum += currentDigit;
        }

        average = sum / numberToString.length;

        if (average <= 5) {
            numberToString += `9`;
        }
    }

    console.log(numberToString);
}

numberModification(5835);