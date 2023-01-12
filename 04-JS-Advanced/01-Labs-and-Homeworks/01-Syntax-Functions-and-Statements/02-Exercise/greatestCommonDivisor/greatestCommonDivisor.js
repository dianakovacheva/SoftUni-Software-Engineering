function findTheGreatestCommonDivisor(firstNum, secondNum) {
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}

findTheGreatestCommonDivisor(15, 5);
findTheGreatestCommonDivisor(2154, 458);