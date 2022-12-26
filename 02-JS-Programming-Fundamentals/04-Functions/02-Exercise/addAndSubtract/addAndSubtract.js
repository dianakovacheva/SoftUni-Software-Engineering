function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    function sumNumbers(a, b) {
        return a + b;
    }

    function subtractNumbers(a, b) {
        return a - b;
    }

    let sum = sumNumbers(firstNumber, secondNumber);
    let subtract = subtractNumbers(sum, thirdNumber);

    return subtract;

}

console.log(addAndSubtract(1,
    17,
    30
));