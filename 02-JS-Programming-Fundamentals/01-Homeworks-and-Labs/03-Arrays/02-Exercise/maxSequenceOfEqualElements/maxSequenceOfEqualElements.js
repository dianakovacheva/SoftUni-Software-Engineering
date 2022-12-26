function maxSequenceOfEqualElements(arrayOfNumbers) {
    let maxSequenceArray = [];


    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNumber = arrayOfNumbers[i];
        let isEqual = true;

        for (let j = i + 1; j < arrayOfNumbers.length; j++) {
            let nextNumber = arrayOfNumbers[j];

            if (currentNumber !== nextNumber) {
                isEqual = false;
                break;
            }

            if (isEqual) {
                maxSequenceArray.push(currentNumber);
            }
        }
    }

    console.log(maxSequenceArray);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);