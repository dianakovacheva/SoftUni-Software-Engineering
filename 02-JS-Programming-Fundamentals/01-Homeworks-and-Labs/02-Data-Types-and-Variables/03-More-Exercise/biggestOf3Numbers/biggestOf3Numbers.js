function biggestOf3Numbers(firstNumber, secondNumber, thirdNumber) {

    let myArray = [firstNumber, secondNumber, thirdNumber];
    let biggestNumber = firstNumber;

    for (let i = 1; i < myArray.length; i++) {
        let currentNumber = myArray[i];

        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        }
    }
    console.log(biggestNumber);
}

biggestOf3Numbers(-7, -2, -10);