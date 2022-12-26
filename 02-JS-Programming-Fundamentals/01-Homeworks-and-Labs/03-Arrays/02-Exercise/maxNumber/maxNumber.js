function maxNumber(arrayOfNumbers) {
    let newArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let isBigger = true;
        let currentNumber = arrayOfNumbers[i];
        for (let j = i + 1; j < arrayOfNumbers.length; j++) {
            let nextNumber = arrayOfNumbers[j];

            if (currentNumber <= nextNumber) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArray.push(currentNumber);
        }
    }
    console.log(newArray.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);