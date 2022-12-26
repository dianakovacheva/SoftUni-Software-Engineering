function oddAndEvenSum(number) {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    let numberToString = number.toString();
    let lineToPrint = "";

    for (let i = 0; i < numberToString.length; i++) {
        let currentNumber = Number(numberToString[i]);

        if (currentNumber % 2 === 0) {
            sumEvenNumbers += currentNumber;
        } else {
            sumOddNumbers += currentNumber;
        }
    }

    lineToPrint += `Odd sum = ${sumOddNumbers}, Even sum = ${sumEvenNumbers}`;

    console.log(lineToPrint);
}

oddAndEvenSum(3495892137259234);