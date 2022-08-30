function uniquePINCodes(input) {
    let maxFirstNumber = Number(input[0]);
    let maxSecondNumber = Number(input[1]);
    let maxThirdNumber = Number(input[2]);
    let printLine = "";

    for (let i = 1; i <= 9; i++) {
        if (i <= maxFirstNumber && i % 2 === 0) {
            console.log(i);;
        }
    }

    if (maxSecondNumber >= 2 && maxSecondNumber <= 7) {
        if (maxSecondNumber % 1 === 0) {
            printLine += ``;
        }
    }

    /* for (let i = 1; i <= maxFirstNumber; i++) {
        for (let j = 2; j <= maxSecondNumber; j++) {
            for (let k = 1; k <= maxThirdNumber; k++) {
                if (maxFirstNumber % 2 === 0) {
                }

                if (maxSecondNumber % 1 === 0) {
                    printLine += `${i}${j}${k}`
                }

                if (maxThirdNumber % 2 === 0) {
                    printLine += `${i}${j}${k}`
                }
            }
        }
    } */

    console.log(printLine);
}

uniquePINCodes(["3", "5", "5"]);