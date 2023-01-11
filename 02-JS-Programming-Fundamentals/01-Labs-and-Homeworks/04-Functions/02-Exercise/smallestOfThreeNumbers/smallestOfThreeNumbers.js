function findSmallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    let smallestNumber = 0;

    if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
        smallestNumber = firstNumber;
    } else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
        smallestNumber = secondNumber;
    } else {
        smallestNumber = thirdNumber;
    }

    return smallestNumber;
}


console.log(findSmallestOfThreeNumbers(600,
    342,
    123
));