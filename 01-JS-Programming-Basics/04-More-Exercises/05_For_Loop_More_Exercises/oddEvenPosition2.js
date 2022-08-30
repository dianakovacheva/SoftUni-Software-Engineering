function oddEvenPosition(input) {

    let number = Number(input[0]);
    let oddSum = 0;
    let oddMin = 0;
    let oddMax = 0;
    let evenSum = 0;
    let evenMin = 0;
    let evenMax = 0;


    if (number === 0) {
        oddSum += number;
        evenSum += number;
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }

    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber % 2 === 0) {
            if (currentNumber < 0) {
                evenSum -= currentNumber;
            } else {
                evenSum += currentNumber;
            } if (evenMax < currentNumber) {
                evenMax = currentNumber;
            } else {
                evenMin = currentNumber;
            }
        } else {
            if (currentNumber < 0) {
                oddSum -= currentNumber;
            } else {
                oddSum += currentNumber;
            }
            if (oddMax < currentNumber) {
                oddMax = currentNumber;
            } else {
                oddMin = currentNumber;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);

}

oddEvenPosition(["5",
    "3",
    "-2",
    "8",
    "11",
    "-3"
]);