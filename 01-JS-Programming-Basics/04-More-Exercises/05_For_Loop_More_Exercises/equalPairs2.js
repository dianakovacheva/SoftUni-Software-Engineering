function equalPairs(input) {

    let n = Number(input[0]);
    let sum = 0;
    let currentSum = 0;

    for (let i = 1; i < input.length; i += 2) {
        let firstCurrentNumber = Number(input[i]);
        let secondCurrentNumber = Number(input[i + 1]);
        currentSum = firstCurrentNumber + secondCurrentNumber;

        if (sum < Math.abs(currentSum)) {
            let maxDiff = currentSum - sum;
            sum = currentSum;
        }
    }

    if (currentSum !== sum) {
        console.log(`No, maxdiff=${maxDiff}`)
    } else {
        console.log(`Yes, value=${sum}`);
    }
}



equalPairs(["2",
    "1",
    "2",
    "2",
    "2"
]);