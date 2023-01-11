function evenAndOddSubtraction(array) {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for (let currentNumber of array) {

        if (currentNumber % 2 === 0) {
            sumEvenNumbers += currentNumber;
        } else {
            sumOddNumbers += currentNumber;
        }
    }

    let total = sumEvenNumbers - sumOddNumbers;

    console.log(total);

}

evenAndOddSubtraction([2, 4, 6, 8, 10]);