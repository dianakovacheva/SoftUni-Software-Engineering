function maxNumber(input) {

    let index = 0;
    let currentElement = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (currentElement !== "Stop") {
        let currentNumber = Number(currentElement);

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
        currentElement = input[index];
        index++;
    }

    console.log(maxNumber);
}

maxNumber(["-10",
"20",
"-30",
"Stop"])
