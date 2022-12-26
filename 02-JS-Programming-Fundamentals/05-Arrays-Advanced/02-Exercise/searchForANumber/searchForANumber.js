function searchForANumber(firstArray, secondArray) {

    let counter = 0;
    let numOfElementsToTake = secondArray[0];
    let numOfElementsToDelete = secondArray[1];
    let searchedNumber = secondArray[2];

    // Number of elements to take
    let arrayToWorkOn = firstArray.slice(0, numOfElementsToTake);

    // Number of elements to delete
    arrayToWorkOn.splice(0, numOfElementsToDelete);

    for (let number of arrayToWorkOn) {
        if (number === searchedNumber) {
            counter++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}


searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);