function aggregateElements(array) {
    // Sum numbers
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    // Sum of the inverse values of all elements from the array
    let sumInverseNum = 0;
    array.forEach(num => {
        sumInverseNum += 1 / num;
    })
    // Concatenates the string representations of all elements from the array
    let resultString = '';
    array.forEach(num => {
        resultString += num.toString();
    })
    console.log(sum);
    console.log(sumInverseNum);
    console.log(resultString);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);