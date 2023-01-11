function sortNumbers(firstNumber, secondNumber, thirdNumber) {
    let biggestNumber = firstNumber;
    let smallestNumber = firstNumber;
    let middelNumber = firstNumber;

    // Find smallest number
    if (firstNumber < secondNumber && firstNumber < thirdNumber) {
        smallestNumber = firstNumber;
    } else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
        smallestNumber = secondNumber;
    } else {
        smallestNumber = thirdNumber;
    }

    // Find biggest number
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        biggestNumber = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        biggestNumber = secondNumber;
    } else {
        biggestNumber = thirdNumber;
    }

    // Find middelNumber
    if (firstNumber !== biggestNumber && firstNumber !== smallestNumber) {
        middelNumber = firstNumber;
    } else if (secondNumber !== biggestNumber && secondNumber !== smallestNumber) {
        middelNumber = secondNumber;
    } else {
        middelNumber = thirdNumber;
    }

    console.log(biggestNumber);
    console.log(middelNumber);
    console.log(smallestNumber);
}

sortNumbers(2, 0, 0);