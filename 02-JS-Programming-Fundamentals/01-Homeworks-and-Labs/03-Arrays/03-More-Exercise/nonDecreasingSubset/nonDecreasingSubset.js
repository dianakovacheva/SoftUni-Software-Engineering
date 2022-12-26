function nonDecreasingSubset(arrayOfNumbers) {

    let resultArray = [];
    let biggestNumber = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentBiggestNumber = arrayOfNumbers[i];

        if (currentBiggestNumber >= biggestNumber) {
            biggestNumber = currentBiggestNumber;
        } else {
            continue;
        }

        resultArray.push(biggestNumber);
    }

    console.log(resultArray.join(" "));
}

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);