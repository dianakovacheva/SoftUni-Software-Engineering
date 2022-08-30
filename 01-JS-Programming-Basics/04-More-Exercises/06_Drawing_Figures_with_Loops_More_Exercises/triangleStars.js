function triangleStars(input) {
    let n = Number(input[0]);
    let numSpaces = n - 1;
    let numStars = 1;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
        numSpaces--;
        numStars += 2;
    }
}

triangleStars(["4"]);