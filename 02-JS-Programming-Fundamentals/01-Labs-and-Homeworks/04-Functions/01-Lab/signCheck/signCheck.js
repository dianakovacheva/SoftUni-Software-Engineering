function signCheck(firstNumber, secondNumer, thirdNumber) {

    let product = firstNumber * secondNumer * thirdNumber;
    let isPositive = true;

    if (product < 0) {
        isPositive = false;
    }

    if (isPositive) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5,
    12,
    -15
);