function starsAlignedToRight(input) {
    let n = Number(input[0]);
    let numSpaces = n - 1;
    let numSymbols = 1;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "*".repeat(numSymbols));
        numSymbols++;
        numSpaces--;
    }

}

starsAlignedToRight(["4"]);