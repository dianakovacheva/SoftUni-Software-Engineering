function processOddNumbers(arrayOfNumbers) {

    let resultArray = [];

    // Print the elements at odd positions from the array
    // Double the elements at odd positions from the array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (i % 2 !== 0) {
            resultArray.push(arrayOfNumbers[i] * 2);
        }
    }

    // Print the result in reversed order
    resultArray.reverse();
    console.log(resultArray.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);