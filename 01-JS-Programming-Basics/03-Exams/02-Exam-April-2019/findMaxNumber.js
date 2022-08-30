function findMax(input) {
    let tempMaxNumber = input[0]
    for (let i = 1; i < input.length; i++) {
        if (tempMaxNumber < input[i]) {
            tempMaxNumber = input[i];
        }

    }
    console.log(tempMaxNumber);
}

findMax([2, 5, 4, 17, 15, 13, 11])