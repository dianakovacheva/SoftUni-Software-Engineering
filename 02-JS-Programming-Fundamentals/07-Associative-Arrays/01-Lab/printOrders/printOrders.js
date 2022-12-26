function printOrders(stockProducts, orderedProducts) {

    let readyToShipProducts = {};
    let objStockProducts = {};
    let productsToOrder = [];
    let isSoldOut = false;
    let isNotAvailable = false;

    for (let currentProduct of stockProducts) {
        objStockProducts[currentProduct[0]] = currentProduct[1];
    }

    // Adjust the quantity of each ordered product in the stockProducts
    // Delete products that are equal to 0 and less than 0
    for (let currentProduct of orderedProducts) {
        if (objStockProducts.hasOwnProperty(currentProduct[0])) {
            if (objStockProducts[currentProduct[0]] <= currentProduct[1]) {
                readyToShipProducts[currentProduct[0]] = objStockProducts[currentProduct[0]];
                delete objStockProducts[currentProduct[0]];
                isSoldOut = true;
                // Stock products to order
                productsToOrder.push(currentProduct[0]);
            } else {
                readyToShipProducts[currentProduct[0]] = currentProduct[1];
                objStockProducts[currentProduct[0]] -= currentProduct[1];
            }
        } else {
            // If ordered product is not in stock, console.log (`Sorry, we have no ${currentProduct[0]} on stock.`)
            isNotAvailable = true;
            console.log(`Sorry, we have no ${currentProduct[0]} on stock.`);
            // Add the current product to the list of products to order
            productsToOrder.push(currentProduct[0]);
        }
    }

    for (let key in readyToShipProducts) {
        console.log(`Shipping: ${readyToShipProducts[key]} ${key}.`);
    }

    if (Object.keys(objStockProducts).length > 0) {
        console.log("Left on stock:");
    } else {
        console.log("Everything is sold out!");
    }

    for (let key in objStockProducts) {
        console.log(`${key} -> ${objStockProducts[key]}`);
    }

    if (isSoldOut && isNotAvailable) {
        console.log(`Products to order: ${productsToOrder.join(', ')}`);
    }

}

let stockArr = [['apples', 30], ['bananas', 80], ['ananas', 30], ['grapes', 100]];
let orderedProductsArr = [['apples', 20], ['strawberries', 25], ['lemons', 40], ['grapes', 100]];

printOrders(stockArr, orderedProductsArr);