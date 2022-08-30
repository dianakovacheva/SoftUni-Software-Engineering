function rhombusOfStars(input) {
    let n = Number(input[0]);
    let numStars = 1;
    let numSpaces = n - 1;
    let numStarsSecondTriangle = n - 1;
    let numSpacesSecondTriangle = 1;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "* ".repeat(numStars));
        numStars++;
        numSpaces--;
    }

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpacesSecondTriangle) + "* ".repeat(numStarsSecondTriangle));
        numStarsSecondTriangle--;
        numSpacesSecondTriangle++;
    }
}

rhombusOfStars(["4"]);