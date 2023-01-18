function negativePositiveNumbers(arr) {
    const arrayOfNumbers = arr.slice();
    let resultArr = [];
    arrayOfNumbers.forEach(currentNumber => {
        // If the current element is a negative number, add it to the front of the array
        if (currentNumber < 0) {
            resultArr.unshift(currentNumber);
        } else {
            // If the current element is a positive number (or 0), add it to the end of the array
            resultArr.push(currentNumber);
        }
    });
    // Print the output on the console, each element on a new line
    console.log(resultArr.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);