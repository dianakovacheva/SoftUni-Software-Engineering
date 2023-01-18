function checkIfMagicalMatrix(nestedArr) {
    let rowSum = 0;
    let colSum = 0;
    // Calculate the sum of the first row and the first column
    for (let i = 0; i < nestedArr.length; i++) {
        const currentArr = nestedArr[i];
        for (let j = 0; j < currentArr.length; j++) {
            const rowNum = currentArr[j];
            rowSum += rowNum;
            const colNum = nestedArr[i][0];
            colSum += colNum;
        }
    }
    // Check if the sum of the first row and first column are equal
    if (rowSum === colSum) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkIfMagicalMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
checkIfMagicalMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
checkIfMagicalMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
