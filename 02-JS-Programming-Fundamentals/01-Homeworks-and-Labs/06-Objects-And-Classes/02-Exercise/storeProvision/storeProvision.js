function storeProvision(stock, delivery) {

    const storedProducts = {};

    for(let i = 0; i < stock.length; i += 2) {
        let currentProduct = stock[i];
        let currentProductQuantity = Number(stock[i + 1]);

        storedProducts[currentProduct] = currentProductQuantity;
    };


    for(let j = 0; j < delivery.length; j += 2) {
        let currentProduct = delivery[j];
        let currentProductQuantity = Number(delivery[j + 1]);

        if(!storedProducts.hasOwnProperty(currentProduct)){
            storedProducts[currentProduct] = currentProductQuantity;
        }else {
            storedProducts[currentProduct] += currentProductQuantity;
        }
    };

    for (let product in storedProducts) {
            console.log(`${product} -> ${storedProducts[product]}`);
            
        }
    }

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );