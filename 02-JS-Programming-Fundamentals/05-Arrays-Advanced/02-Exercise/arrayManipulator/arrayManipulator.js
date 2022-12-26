function arrayManipulator(numberArray, stringArray) {

    let resultArray = numberArray.splice(0);

    for (let currentElement of stringArray) {
        let splitedArray = currentElement.split(' ');
        let command = splitedArray[0];
        let index = splitedArray[1];
        let element = Number(splitedArray[2]);

        if (command === "add") {
            resultArray.splice(index, 0, element);
        }

        if (command === "print") {
            console.log(resultArray);
            break;
        }
    }





}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);