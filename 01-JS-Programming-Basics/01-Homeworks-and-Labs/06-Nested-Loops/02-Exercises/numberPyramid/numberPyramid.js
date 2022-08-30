function numberPyramid(input) {
    let n = Number(input[0]);
    let currentInput = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentInput > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentInput + " ";
            currentInput++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["15"])