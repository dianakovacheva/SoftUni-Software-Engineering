function storage(arrayOfProducts) {

    let map = new Map();

    for (let currentProduct of arrayOfProducts) {
        let splittedProductInfo = currentProduct.split(' ');
        let product = splittedProductInfo[0];
        let quantity = Number(splittedProductInfo[1]);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let keyValuePair of map) {
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);