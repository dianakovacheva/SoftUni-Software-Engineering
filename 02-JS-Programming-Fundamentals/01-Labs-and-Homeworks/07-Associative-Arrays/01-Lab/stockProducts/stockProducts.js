function printStockProducts(stockArray, deliveryArray) {

    let allStockProducts = {};

    for (let currentProduct of stockArray) {
        allStockProducts[currentProduct[0]] = currentProduct[1];
    }

    for (let currentProduct of deliveryArray) {
        if (allStockProducts.hasOwnProperty(currentProduct[0])) {
            allStockProducts[currentProduct[0]] += currentProduct[1];
        } else {
            allStockProducts[currentProduct[0]] = currentProduct[1];
        }
    }

    console.log(allStockProducts);
}

let stockArr = [['apples', 50], ['bananas', 80], ['ananas', 30], ['grapes', 100]];
let deliveryArr = [['apples', 20], ['strawberries', 25], ['lemons', 40], ['grapes', 100]];


printStockProducts(stockArr, deliveryArr);
