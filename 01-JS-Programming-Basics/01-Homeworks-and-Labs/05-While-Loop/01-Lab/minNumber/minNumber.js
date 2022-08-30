function minNumber(input) {
    let index = 0;
    let currentElement = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while(currentElement !== "Stop") {
        let currentNumber = Number(currentElement);

        if( currentNumber <= minNumber) {
            minNumber = currentElement;
        }

        currentElement = input[index];
        index++;
    }
    console.log(minNumber);
}

minNumber(["999",
"Stop"])
;