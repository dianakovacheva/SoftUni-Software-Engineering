function starsTriangleAlignedTopRight(input) {
    let n = Number(input[0]);
    let numStars = n;
    let numSpaces = 0;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
        numStars--;
        numSpaces++;
    }

}

starsTriangleAlignedTopRight(["4"]);