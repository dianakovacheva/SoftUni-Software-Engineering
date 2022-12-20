function memoryGame(arr) {

    let sequenceOfElements = arr.shift().split(' ');
    let nextRow = arr.shift();
    let numberOfMoves = 0;
    let hadWon = false;

    while (nextRow !== 'end') {

        numberOfMoves++;
        let splitedArr = nextRow.split(' ');
        let firstIndex = Number(splitedArr[0]);
        let secondIndex = Number(splitedArr[1]);


        // if (firstIndex === secondIndex || (firstIndex < 0 && firstIndex > sequenceOfElements.length && secondIndex < 0 && secondIndex > sequenceOfElements.length) {
        //     console.log();
        // }

        if (sequenceOfElements[firstIndex] === sequenceOfElements[secondIndex]) {
            sequenceOfElements.splice(sequenceOfElements[firstIndex], 1);
            sequenceOfElements.splice(sequenceOfElements[secondIndex], 1);
            hadWon = true;
            console.log(`Congrats! You have found matching elements - ${sequenceOfElements[sequenceOfElements[firstIndex]]}!`);
            break;
        } else if (sequenceOfElements[firstIndex] !== sequenceOfElements[secondIndex]) {
            console.log("Try again!");
        }


        nextRow = arr.shift();
    }

    if (hadWon) {
        console.log(`You have won in ${numberOfMoves} turns!`);
    }

    if (nextRow === "end") {
        console.log(`Sorry you lose :(\n${sequenceOfElements.join(' ')}`);
    }
}

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]

);