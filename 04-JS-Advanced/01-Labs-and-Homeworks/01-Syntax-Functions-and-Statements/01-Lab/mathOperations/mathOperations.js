function mathOperations(firstNum, secondNum, operator) {
    // Create an operators library
    const operators = {
        // key: value (arrow function as value)
        '+': (firstNum, secondNum) => firstNum + secondNum,
        '-': (firstNum, secondNum) => firstNum - secondNum,
        '*': (firstNum, secondNum) => firstNum * secondNum,
        '/': (firstNum, secondNum) => firstNum / secondNum,
        '%': (firstNum, secondNum) => firstNum % secondNum,
        '**': (firstNum, secondNum) => Math.pow(firstNum, secondNum),
    }
    console.log(operators[operator](firstNum, secondNum));
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');