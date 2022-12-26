function distinctArray(arrayOfIntegers) {

    let result = [];

    for (let i = 0; i < arrayOfIntegers.length; i++) {
        let currentNumber = arrayOfIntegers[i];

        if (!result.includes(currentNumber)) {
            result.push(currentNumber);
        }
    }
    console.log(result.join(' '));
}

distinctArray([1, 2, 3, 4]);