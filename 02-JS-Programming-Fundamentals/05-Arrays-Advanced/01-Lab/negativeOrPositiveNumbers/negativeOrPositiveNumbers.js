function negativeOrPositiveNumbers(array) {

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i]);

        if (currentElement < 0) {
            resultArray.unshift(currentElement);
        } else {
            resultArray.push(currentElement);
        }
    }

    console.log(resultArray.join('\n'));
}

negativeOrPositiveNumbers(['3', '-2', '0', '-1']);