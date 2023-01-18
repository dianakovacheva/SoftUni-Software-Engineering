function findBiggestElement(arr) {
    let numArr = arr.slice();
    let biggestNum = numArr[0][0];
    // Find the biggest number
    for (const currentArray of numArr) {
        for (const num of currentArray) {
            if (num > biggestNum) {
                biggestNum = num;
            }
        }
    }
    // Return the biggest number
    return biggestNum;
}

findBiggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
console.log('-------');
findBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);
