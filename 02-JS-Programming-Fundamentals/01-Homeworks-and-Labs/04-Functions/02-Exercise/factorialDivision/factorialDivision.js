function factorialDivision(firstNumber, secondNumber) {
    let factorFirstNumber = 1;
    let factorSecondNumber = 1;
    let sumBothFactors = 0;

    for (let i = firstNumber; i > 0; i--) {
        factorFirstNumber *= i;
    }

    for (let i = secondNumber; i > 0; i--) {
        factorSecondNumber *= i;
    }

    sumBothFactors = factorFirstNumber / factorSecondNumber;

    console.log(sumBothFactors.toFixed(2));

}

factorialDivision(6, 2);