function findEvenPositionedElements(arr) {
    let resultArr = [];
    // Find the elements at even positions in the arr
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            resultArr.push(arr[i]);
        }
    }
    // Print the result, separated by space
    console.log(resultArr.join(' '));
}

findEvenPositionedElements(['20', '30', '40', '50', '60']);
findEvenPositionedElements(['5', '10']);