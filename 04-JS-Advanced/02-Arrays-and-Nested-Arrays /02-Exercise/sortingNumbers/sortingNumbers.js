function sortingNumbers(arrOfNumbers) {
    let sortedNumbers = arrOfNumbers.sort((a, b) => a - b);
    let resultArr = [];
    while (sortedNumbers.length > 0) {
        let firstElement = sortedNumbers.shift();
        let lastElement = sortedNumbers.pop();
        resultArr.push(firstElement, lastElement);
    }
    return resultArr;
};

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);