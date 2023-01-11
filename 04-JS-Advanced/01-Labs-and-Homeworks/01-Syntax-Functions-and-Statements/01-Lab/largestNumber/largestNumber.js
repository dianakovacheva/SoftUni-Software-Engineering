function findLargestNumber(firstNum, secondNum, thirdNum) {
    let largestNum = thirdNum;

    if (firstNum > secondNum && firstNum > thirdNum) {
        largestNum = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        largestNum = secondNum;
    }

    console.log(`The largest number is ${largestNum}.`);
}

findLargestNumber(5, -3, 16);
findLargestNumber(-3, -5, -22.5);