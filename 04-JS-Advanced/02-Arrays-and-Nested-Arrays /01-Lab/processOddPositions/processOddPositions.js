function processOddPositions(arr) {
    const numArr = arr.slice();
    let resultArr = [];
    // Push the elements at odd positions
    for (let i = 0; i < numArr.length; i++) {
        if (i % 2 !== 0) {
            resultArr.push(numArr[i]);
        }
    }
    // Double each element from the resultArr
    resultArr = resultArr.map(x => x * 2);
    // Reverse the order of all elements and
    resultArr.reverse();
    // Return the output on the console on a single line, separated by space
    return resultArr.join(' ');
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);