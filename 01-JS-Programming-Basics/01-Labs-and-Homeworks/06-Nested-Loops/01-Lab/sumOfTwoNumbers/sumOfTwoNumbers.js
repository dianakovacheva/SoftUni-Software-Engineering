function sumOfTwoNumbers(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);
    let numberOfTries = 0;
    let isFound = false;
    let numOne;
    let numTwo;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        for (let j = intervalStart; j <= intervalEnd; j++) {
            numberOfTries++;
            if (i + j === magicNumber) {
                numOne = i;
                numTwo = j;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${numberOfTries} (${numOne} + ${numTwo} = ${magicNumber})`);
    } else {
        console.log(`${numberOfTries} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["23",
"24",
"20"])


