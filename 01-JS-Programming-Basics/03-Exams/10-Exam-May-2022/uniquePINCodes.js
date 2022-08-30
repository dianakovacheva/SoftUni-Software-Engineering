function uniquePINCodes(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    let printLine = "";

    for (let i = firstNumber; i < 9; i++) {
        for(let j = secondNumber; j < 9; j++) {
            for(let k = thirdNumber; k < 9; k++) {
                if(firstNumber % 2 === 0 && thirdNumber % 2 === 0 && secondNumber) {
                    printLine += `${i}${j}${k}`
                }
            }
        }
    }

    console.log(printLine);
}

uniquePINCodes(["3",
"5",
"5"]);