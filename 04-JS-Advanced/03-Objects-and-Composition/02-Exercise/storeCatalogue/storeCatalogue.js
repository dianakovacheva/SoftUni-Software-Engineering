function storeCatalogue(arrayOfProducts) {
    groupsArr = [];
    productsObj = {};
    // Sort the products alphabeticaly
    const sortedArr = arrayOfProducts.sort((a, b) => a.localeCompare(b));
    for (const row of arrayOfProducts) {
        const [product, price] = row.split(' : ');
        // Get the first letter of the first element in the sorted array
        let currentFirstLetter = row[0];
        // Set keys and values to the productsObj
        productsObj[product] = Number(price);
        // Add first letter only if it's not included in the groupsArr
        if (!groupsArr.includes(currentFirstLetter)) {
            groupsArr.push(currentFirstLetter);
        }
    }
    for (const groupLetter of groupsArr) {
        console.log(groupLetter);
        for (const key in productsObj) {
            if (key.startsWith(groupLetter)) {
                // Print the products with 2 spaces before their names
                console.log(`  ${key}: ${productsObj[key]}`);
            }
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);