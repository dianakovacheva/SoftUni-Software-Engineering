function averageNumber(input) {
    let i = 1;
    let sum = 0;
    let numbersCount = 0;

    while (i < input.length) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
        numbersCount++;
        i++;
    }

    let averageNumber = sum / numbersCount;
    console.log(averageNumber.toFixed(2));
}

averageNumber(["2", "6", "4"])