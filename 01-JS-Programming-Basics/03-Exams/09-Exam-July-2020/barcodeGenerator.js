function barcodeGenerator(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let printLine = "";

    let startDigit1 = Math.floor((startNumber / 1000) % 10);
    let startDigit2 = Math.floor((startNumber / 100) % 10);
    let startDigit3 = Math.floor((startNumber / 10) % 10);
    let startDigit4 = Math.floor((startNumber % 10));

    let endDigit1 = Math.floor((endNumber / 1000) % 10);
    let endDigit2 = Math.floor((endNumber / 100) % 10);
    let endDigit3 = Math.floor((endNumber / 10) % 10);
    let endDigit4 = Math.floor((endNumber % 10));

    for (let i = startDigit1; i <= endDigit1; i++) {
        for (let j = startDigit2; j <= endDigit2; j++) {
            for (let k = startDigit3; k <= endDigit3; k++) {
                for (let l = startDigit4; l <= endDigit4; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        printLine += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(printLine);
}

barcodeGenerator(["1365",
    "5877"])


