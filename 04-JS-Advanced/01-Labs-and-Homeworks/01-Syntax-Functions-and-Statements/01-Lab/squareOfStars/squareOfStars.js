function printSquareOfStars(input) {
    let printLine = '';

    if (typeof input !== 'number') {
        printLine = '* '.repeat(5);
        console.log(printLine);
    } else {
        for (let i = 0; i < input; i++) {
            printLine += '* ';
        }
    }
    for (let i = 0; i < input; i++) {
        console.log(printLine);
    }
}


// printSquareOfStars(1);
// printSquareOfStars(2);
printSquareOfStars(5);
// printSquareOfStars(7);
// printSquareOfStars('i');