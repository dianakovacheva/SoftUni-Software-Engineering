function printNthElement(array) {
    let newArray = [];
    let step = Number(array.pop());

    for (let i = 0; i < array.length; i += step) {
        newArray.push(array[i]);
    }

    console.log(newArray.join(" "));
}

printNthElement(['1', '2', '3', '4', '5', '6']);