function printStorage(arr) {
    let storageObj = {};
    // Iterating through the properties of the array
    // Creating two variables (product, quantity), using destructuring
    for (const currentLine of arr) {
        let [product, quantity] = currentLine.split(' ');
        // Check if you receive the same product twice. If so add the quantity to the existing one
        if (!storageObj.hasOwnProperty(product)) {
            storageObj[product] = Number(quantity);
        } else {
            storageObj[product] += Number(quantity);
        }
    }
    for (const key in storageObj) {
        console.log(`${key} -> ${storageObj[key]}`);
    }
}

printStorage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);