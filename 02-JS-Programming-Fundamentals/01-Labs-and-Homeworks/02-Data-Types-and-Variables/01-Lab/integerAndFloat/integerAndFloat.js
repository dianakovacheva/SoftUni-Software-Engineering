function integerAndFloat(firstNumber, secondNumber, thirdNumber) {

    let sum = firstNumber + secondNumber + thirdNumber;
    let sumToString = String(sum);
    let isFloat = false;

    for (let i = 0; i < sumToString.length; i++) {
        let currentChar = sumToString[i];

        if (currentChar === ".") {
            isFloat = true;
        }
    }
    
    console.log(`${sum} - ${isFloat === true ? "Float" : "Integer"}`);
}

integerAndFloat(100, 200, 303);