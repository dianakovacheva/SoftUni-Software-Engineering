function equalArrays(array1, array2) {
    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < array1.length; i++) {

        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += Number(array1[i]);
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);