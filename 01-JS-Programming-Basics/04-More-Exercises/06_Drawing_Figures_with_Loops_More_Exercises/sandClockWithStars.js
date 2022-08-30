function sandClockWithStars(input) {
    let numOfStars = Number(input[0]);
    let numRowSpaces = numOfStars - 1;
    let numRows = (2 * numOfStars) - 1;
    let rowMaxStars = Math.ceil(numRows / 2) - 1;

    for (let i = 0; i < numRows; i++) {
        console.log(" ".repeat(numRowSpaces) + "* ".repeat(numOfStars));
        if (i < rowMaxStars) {
            numOfStars--;
            numRowSpaces++;
        } else {
            numOfStars++;
            numRowSpaces--;
        }
    }
}

sandClockWithStars(["4"]);