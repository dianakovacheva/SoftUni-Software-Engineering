function starsTriangleAlignedToLeft(input) {
    let n = Number(input[0]);
    let numStars = 1;
    let numSpaces = n - 1;

    /* let stars = "";
    
    for (let i = 0; i < n; i++) {
        stars += "*";
        console.log(stars);
    } */

    for (let i = 0; i < n; i++) {
        console.log("*".repeat(numStars) + " ".repeat(numSpaces));
        numStars++;
        numSpaces--;
    }

}

starsTriangleAlignedToLeft(["4"]);