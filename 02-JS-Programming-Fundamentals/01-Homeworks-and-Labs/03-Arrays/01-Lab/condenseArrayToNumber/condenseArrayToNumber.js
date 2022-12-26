function condenseArrayToNumber(arrayOfNumbers) {

    while (arrayOfNumbers.length > 1) {
        let condensedArray = [];
        for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
            let currentNumber = arrayOfNumbers[i];
            let nextNumber = arrayOfNumbers[i + 1];
            let currentSum = currentNumber + nextNumber;
            condensedArray.push(currentSum);
        }
        arrayOfNumbers = condensedArray;
    }
    console.log(arrayOfNumbers[0]);
}

condenseArrayToNumber([2, 10, 3]);