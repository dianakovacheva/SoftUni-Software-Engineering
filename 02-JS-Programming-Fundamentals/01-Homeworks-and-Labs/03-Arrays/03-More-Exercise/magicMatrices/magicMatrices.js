function magicMatrices(input) {

    let isMagic = true;

    for (let i = 0; i < input.length; i++) {

        let rowSum = 0;
        let columeSum = 0;

        // Calculate Row Sum
        for (let j = 0; j < input.length; j++) {
            rowSum += input[j][i];
        }

        // Calculate Column Sum
        for (let k = 0; k < input[i].length; k++) {
            columeSum += input[i][k];
        }

        if (rowSum !== columeSum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);