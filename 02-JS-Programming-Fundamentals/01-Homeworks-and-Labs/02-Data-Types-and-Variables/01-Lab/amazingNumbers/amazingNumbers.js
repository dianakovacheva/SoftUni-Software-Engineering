function amazingNumbers(number) {

    let sum = 0;
    let numberToString = String(number);
    let isAmazingNumber = false;

    for (let i = 0; i < numberToString.length; i++) {
        let currentNumber = numberToString[i];
        sum += Number(currentNumber);
    }

    let sumToString = String(sum);

    for (let i = 0; i < String(sum).length; i++) {
        let currentChar = sumToString[i];

        if (currentChar === "9") {
            isAmazingNumber = true;
        }
    }

    console.log(`${number} Amazing? ${isAmazingNumber === true ? "True" : "False"}`);
}

amazingNumbers(583472);