function calculatediagonalSums(arr) {
    const numArr = arr.slice();
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let sum = [];
    // Sum all numbers from main diagonal
    for (let i = 0; i < numArr.length; i++) {
        const currentNum = numArr[i][i];
        sumMainDiagonal += currentNum;
    }
    // Reverse numArr, secondary diagonal becomes first
    numArr.reverse();
    for (let i = 0; i < numArr.length; i++) {
        const currentNum = numArr[i][i];
        sumSecondaryDiagonal += currentNum;
    }
    sum.push(sumMainDiagonal, sumSecondaryDiagonal);
    // Print the output, on a single line separated by space
    console.log(sum.join(' '));
}

calculatediagonalSums([
    [20, 40],
    [10, 60]
]);
console.log('--------');
calculatediagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);