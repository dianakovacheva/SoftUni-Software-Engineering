function sunglasses(input) {
    let n = Number(input[0]);
    let rowStartingStar = "*";
    let rowEndingStar = "*";
    let rowStars = "";
    let numRowStars = 2 * n;
    let rowSpace = "";
    let numRowSpace = n;
    let dashedLines = "";
    let numDashedLines = 2 * n - 2;
    let straightLines = "";
    let numStraightLines = n;

    // First Row
    for (let i = 0; i < numRowStars; i++) {
        rowStars += "*";
    }
    for (let i = 0; i < numRowSpace; i++) {
        rowSpace += " ";
    }
    console.log(`${rowStars}${rowSpace}${rowStars}`);

    // Next Rows
    // Dashed Lines
    for (let i = 1; i <= numDashedLines; i++) {
        dashedLines += "/";
    }
    // Straight Lines
    for (let i = 1; i <= numStraightLines; i++) {
        straightLines += "|";
    }

    for (let i = 0; i < n - 2; i++) {
        if (i === (Math.floor((n - 1) / 2 - 1))) {
            console.log(`${rowStartingStar}${dashedLines}${rowEndingStar}${straightLines}${rowStartingStar}${dashedLines}${rowEndingStar}`);
        } else {
            console.log(`${rowStartingStar}${dashedLines}${rowEndingStar}${rowSpace}${rowStartingStar}${dashedLines}${rowEndingStar}`);
        }
    }

    // Last Row
    console.log(`${rowStars}${rowSpace}${rowStars}`);
}

sunglasses(["3"]);