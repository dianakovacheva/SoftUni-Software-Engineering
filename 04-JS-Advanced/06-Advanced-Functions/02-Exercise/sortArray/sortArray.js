function sortArray(numArray, sortType) {
    if (sortType === 'asc') {
        numArray.sort((a, b) => a - b);
    } else {
        numArray.sort((a, b) => b - a);
    }
    return numArray;
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');