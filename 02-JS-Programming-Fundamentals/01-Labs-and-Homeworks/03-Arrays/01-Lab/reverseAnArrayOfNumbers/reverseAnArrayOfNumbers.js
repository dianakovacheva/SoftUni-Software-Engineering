function reverseAnArrayOfNumbers(number, array) {
    let newArray = [];

    for (let i = number; i > 0; i--) {
        let currentNumber = array[i - 1];

        if (i > 1) {
            newArray += `${currentNumber} `;
        } else {
            newArray += `${currentNumber}`;
        }
    }

    console.log(newArray);

}

reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);