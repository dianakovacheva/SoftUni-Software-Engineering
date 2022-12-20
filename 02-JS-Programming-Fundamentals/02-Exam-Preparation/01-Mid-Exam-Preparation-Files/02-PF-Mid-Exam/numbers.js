function numbers(numbers) {

    let sequenceOfIntegers = numbers.split(' ').map(x => Number(x));
    let averageNumber = 0;
    let resultArray = [];

    // Find the average number
    for (let currentNumber of sequenceOfIntegers) {
        averageNumber += currentNumber / sequenceOfIntegers.length;
    }

    // Find the numbers greater than the average number
    for (let currentNumber of sequenceOfIntegers) {

        if (currentNumber > averageNumber) {
            resultArray.push(currentNumber);
        }
    }

    // Sort the result array descending
    resultArray.sort(function (a, b) { return b - a });;

    // Print on the console only the top 5 numbers among the greatest numbers
    if (resultArray.length < 1) {
        console.log('No');
    } else if (resultArray.length > 5) {
        resultArray.splice(5);
    }

    console.log(resultArray.join(' '));
}

numbers('10 20 30 40 50');