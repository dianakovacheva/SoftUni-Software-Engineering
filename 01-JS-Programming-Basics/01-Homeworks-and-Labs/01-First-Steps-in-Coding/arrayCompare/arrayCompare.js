let arrayOne = [1, 6, 8];
let arrayTwo = [1, 5, 8];

function arrayCompare(firstArray, secondArray) {

    if (firstArray.length != secondArray.length) {
        return false;
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] != secondArray[i]) {
            return false;
        }
    }
    return true;
}

console.log(arrayCompare([2, 5, 3], [2, 5, 8]));