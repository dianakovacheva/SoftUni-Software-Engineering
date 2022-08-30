function squareFrame(input) {
    let n = Number(input[0]);
    let rowBegin = "+ ";
    let rowEnd = "+";
    let rowMiddel = "";
    let secondRowBegin = "| ";
    let secondRowEnd = "|";

    for (let i = 1; i <= n - 2; i++) {
        rowMiddel += "- ";
    }

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            console.log(`${rowBegin}${rowMiddel}${rowEnd}`);
        } else if (i === n) {
            console.log(`${rowBegin}${rowMiddel}${rowEnd}`);
        } else {
            console.log(`${secondRowBegin}${rowMiddel}${secondRowEnd}`);
        }
    }
}

squareFrame([9]);