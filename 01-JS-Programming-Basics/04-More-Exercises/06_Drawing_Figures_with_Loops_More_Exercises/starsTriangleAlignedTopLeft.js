function starsTriangleAlignedTopLeft(input) {
    let n = Number(input[0]);
    let numSpaces = 0;
    let numStars = n;

    for(let i = 0; i < n; i++) {
        console.log("*".repeat(numStars) + " ".repeat(numSpaces));
        numSpaces++;
        numStars--;
    }
}

starsTriangleAlignedTopLeft(["4"]);