function lowestPricesInCities(arrayOfStrings) {
    const resultObj = {};

    for (const row of arrayOfStrings) {
        let [townName, product, price] = row.split(' | ');
        price = Number(price);
        if (!resultObj.hasOwnProperty(product)) {
            resultObj[product] = price, townName;
        }
    }
    console.log(resultObj);
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)