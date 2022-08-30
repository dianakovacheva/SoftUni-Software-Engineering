function divisionWithoutRemainder(input) {
    let totalNumberCount = Number(input[0]);
    let countNumbersDividedByTwo = 0;
    let countNumbersDividedByThree = 0;
    let countNumbersDividedByFour = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            countNumbersDividedByTwo++;
        }
    }

    for (let j = 1; j < input.length; j++) {
        if (input[j] % 3 === 0) {
            countNumbersDividedByThree++;
        }
    }

    for (let k = 1; k < input.length; k++) {
        if (input[k] % 4 === 0) {
            countNumbersDividedByFour++;
        }
    }

    let p1 = countNumbersDividedByTwo / totalNumberCount * 100;
    let p2 = countNumbersDividedByThree / totalNumberCount * 100;
    let p3 = countNumbersDividedByFour / totalNumberCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divisionWithoutRemainder(["3",
    "3",
    "6",
    "9"])

