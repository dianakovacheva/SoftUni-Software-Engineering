function bombNumbers(numbersArray, specialNumber) {

    let arrayToWorkOn = numbersArray.splice(0);
    let bombNumber = specialNumber[0];
    let powerOfTheBomb = specialNumber[1];
    let sum = 0;

    while (arrayToWorkOn.indexOf(bombNumber) !== -1) {
        let bombPosition = arrayToWorkOn.indexOf(bombNumber);

        // Remove from right to left
        arrayToWorkOn.splice(bombPosition + 1, powerOfTheBomb); // right numbers
        arrayToWorkOn.splice(bombPosition, 1); // bomb numbers
        arrayToWorkOn.splice(Math.max(bombPosition - powerOfTheBomb, 0), powerOfTheBomb); // left numbers
    }

    for (let number of arrayToWorkOn) {
        sum += number;
    }

    // arrayToWorkOn.forEach(sumNumbers);
    // function sumNumbers(number) {
    //     sum += number
    // }

    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);