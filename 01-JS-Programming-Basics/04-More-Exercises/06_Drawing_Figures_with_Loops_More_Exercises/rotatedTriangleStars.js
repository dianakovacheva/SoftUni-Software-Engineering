function rotatedTriangleStars(input) {
    let n = Number(input[0]);
    let numStars = 2 * n - 1;
    let numSpaces = 0;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
        numStars -= 2;
        numSpaces++;
    }
}

rotatedTriangleStars(["4"]);