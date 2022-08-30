function diamond(input) {
    let n = Number(input[0]);
    let leftRightSideStrokes = (n - 1) / 2;
    let middel = Math.floor((n - 1) / 2);
    let midStrokes = n - 2 * leftRightSideStrokes - 2;

    if (n % 2 === 0) {
        console.log("-".repeat(leftRightSideStrokes) + "**" + "-".repeat(leftRightSideStrokes));
    } else {
        console.log("-".repeat(leftRightSideStrokes) + "*" + "-".repeat(leftRightSideStrokes));
    }

    leftRightSideStrokes--;

    for (let i = 1; i < middel; i++) {
        if (midStrokes >= 0) {
            console.log("-".repeat(midStrokes) + "*" + "-".repeat(midStrokes) + "*" + "-".repeat(leftRightSideStrokes));
        } else {
            console.log("-".repeat(midStrokes) + "*" + "-".repeat(leftRightSideStrokes));
        }
    }

    leftRightSideStrokes++;

    for (let i = middel - 1; i < n; i++) {
        if (midStrokes >= 0) {
            console.log("-".repeat(leftRightSideStrokes) + "*" + "-".repeat(midStrokes) + "*" + "-".repeat(leftRightSideStrokes));
        } else {
            console.log("-".repeat(leftRightSideStrokes) + "*" + "-".repeat(leftRightSideStrokes));
        }
    }
}

diamond("9");