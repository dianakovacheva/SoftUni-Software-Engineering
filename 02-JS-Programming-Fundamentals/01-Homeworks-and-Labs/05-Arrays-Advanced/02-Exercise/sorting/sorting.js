function sorting(arrayOfNumbers) {

    let ascendingOrderedArray = arrayOfNumbers.sort((a, b) => a - b);
    let resultArray = [];

    for (let i = 0; i < ascendingOrderedArray.length; i++) {

        let biggestNumber = ascendingOrderedArray.pop();
        let smallestNumber = ascendingOrderedArray.shift();

        resultArray.push(biggestNumber, smallestNumber);
    }

    resultArray.push(ascendingOrderedArray.pop());
    resultArray.push(ascendingOrderedArray.shift());

    console.log(resultArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
