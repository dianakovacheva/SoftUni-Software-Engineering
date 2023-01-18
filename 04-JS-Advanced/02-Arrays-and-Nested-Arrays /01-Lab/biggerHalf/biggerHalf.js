function biggerHalf(arr) {
    // Sort the array in ascending order 
    const sortedArr = arr.sort((a, b) => a - b);
    // Calculate the bigger half of the array
    const biggerHalf = Math.floor(sortedArr.length / 2);
    // Take the bigger half of the array
    const resultArr = sortedArr.slice(biggerHalf);
    return resultArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);