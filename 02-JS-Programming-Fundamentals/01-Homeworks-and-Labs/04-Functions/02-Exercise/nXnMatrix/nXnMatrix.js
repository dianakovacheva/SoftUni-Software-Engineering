function nXnMatrix(number) {

    let printLine = "";

    for (let j = 0; j < number; j++) {
        printLine += `${number} `;
    }

    for (let i = 0; i < number; i++) {
        console.log(printLine);
    }
}

nXnMatrix(3);