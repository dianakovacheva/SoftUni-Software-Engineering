function listOfProducts(array) {

    array.sort();
    let number = 1;

    while (number < array.length) {
        for (let i = 0; i < array.length; i++) {
            let currentElement = array[i];
            console.log(`${number}.${currentElement}`);
            number++;
        }
    }
}

listOfProducts(['Watermelon', 'Banana', 'Apples']);