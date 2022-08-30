function squareOfStars(input) {

    let n = Number(input[0]);
    let row = "";

    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            row += "*";
        } else {
            row += "* ";
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}

squareOfStars([4]);