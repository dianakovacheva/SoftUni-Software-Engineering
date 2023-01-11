function addAndSubtract(array) {

    let newArray = [];
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumOriginalArray += array[i];
        if (array[i] % 2 === 0) {
            newArray.push(array[i] + i);
            sumModifiedArray += (array[i] + i);
        } else {
            newArray.push(array[i] - i);
            sumModifiedArray += (newArray[i]);
        }
    }

    console.log(newArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

addAndSubtract([-5, 11, 3, 0, 2]);