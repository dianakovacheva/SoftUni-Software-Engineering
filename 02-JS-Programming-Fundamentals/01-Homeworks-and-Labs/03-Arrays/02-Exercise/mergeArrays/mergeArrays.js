function mergeArrays(firstArray, secondArray) {

    let mergedArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            mergedArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            mergedArray.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(mergedArray.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);