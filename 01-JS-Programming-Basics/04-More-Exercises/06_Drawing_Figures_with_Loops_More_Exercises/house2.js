function house(input) {

    let n = Number(input[0]);
    let numStars = 2;
    let numSpaces = Math.floor((n - 1) / 2);

    // House Roof
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        if (n % 2 === 0) {
            console.log("-".repeat(numSpaces) + "*".repeat(numStars) + "-".repeat(numSpaces));
        } else {
            console.log("-".repeat(numSpaces) + "*".repeat(numStars - 1) + "-".repeat(numSpaces));
        }
        numStars += 2;
        numSpaces--;
    }

    // Rest of the house
    for (let i = 0; i < Math.floor(n / 2); i++) {
        console.log("|" + "*".repeat(n - 2) + "|");
    }
}

house(["6"])