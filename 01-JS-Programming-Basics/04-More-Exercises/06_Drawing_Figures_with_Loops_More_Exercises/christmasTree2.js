function christmasTree(input) {
    let n = Number(input[0]);
    let numStarsLeftSide = 0;
    let numSpacesLeftSide = n + 1;
    let numStarsRightSide = 0;
    let numSpacesRightSide = n;

    for (let i = 0; i < 0; i++) {
        console.log(" ".repeat(numSpacesLeftSide) + "|" + " ".repeat(numStarsRightSide));
    }

    for (let i = 0; i <= n; i++) {
        console.log(" ".repeat(numSpacesLeftSide - 1) + "*".repeat(numStarsLeftSide) + " | " + "*".repeat(numStarsRightSide) + " ".repeat(numSpacesRightSide));
        numSpacesLeftSide--;
        numStarsLeftSide++;
        numStarsRightSide++;
    }
}

christmasTree(["6"]);