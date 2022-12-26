function equalSums(array) {

    let foundIndex = "no";
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftSide = 0; leftSide < i; leftSide++) {
            leftSum += array[leftSide];
        }

        for (let rightSide = i + 1; rightSide < arrayLength; rightSide++) {
            rightSum += array[rightSide];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
            break;
        }
    }
    console.log(foundIndex);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);