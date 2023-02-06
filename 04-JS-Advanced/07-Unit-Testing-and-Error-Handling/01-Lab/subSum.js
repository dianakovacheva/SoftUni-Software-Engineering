function subSum(inputArray, startIndex, endIndex) {
    let sum = 0;
    // if the first element is not an array, return NaN
    if (!Array.isArray(inputArray)) {
        return NaN;
    }
    // if the start index is less than zero, consider its value to be a zero
    startIndex = Math.max(startIndex, 0);
    // if the end index is outside the bounds of the array, assume it points to the last index of the array
    endIndex = Math.min(endIndex, inputArray.length - 1);
    // take all elements from the array that are in the range of the startIndex and endIndex (both indexes are inclusive)
    let finalArray = inputArray.slice(startIndex, endIndex + 1);
    sum = finalArray.reduce((a, x) => a + Number(x), 0);
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300); // 150
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1); // 3.3
subSum([10, 'twenty', 30, 40], 0, 2); // NaN
subSum([], 1, 2); // 0
subSum('text', 0, 2); // NaN