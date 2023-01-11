function depositCalculator(input) {

    let depositedSum = Number(input[0]);
    let monthsDeposit = Number(input[1]);
    let yearInterest = Number(input[2]);

    let sum = depositedSum + monthsDeposit * ((depositedSum * yearInterest / 100) / 12);

    console.log(sum);
}

depositCalculator(["2350", "6", "7"]);