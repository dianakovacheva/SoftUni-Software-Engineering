function triangleWithStars(input) {
    let n = Number(input[0]);
    let numStars = 1;
    let numSpaces = n - 1;
    let numsStarsSecondTriangle = 2 * n - 1;
    let numSpacesSecondTriangle = 0;

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
        numStars += 2;
        numSpaces--;
    }

    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(numSpacesSecondTriangle) + "*".repeat(numsStarsSecondTriangle));
        numsStarsSecondTriangle -= 2;
        numSpacesSecondTriangle++;
    }
}
triangleWithStars(["4"]);