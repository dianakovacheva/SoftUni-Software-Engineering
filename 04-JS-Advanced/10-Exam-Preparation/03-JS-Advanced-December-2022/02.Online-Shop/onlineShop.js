class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }
        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
    quantityCheck(product, minimalQuantity) {
        for (const productInfo of this.products) {
            if (productInfo.product === product) {
                if (minimalQuantity <= 0) {
                    throw new Error('The quantity cannot be zero or negative.');
                }
                if (minimalQuantity <= productInfo.quantity) {
                    return `You have enough from product ${product}.`;
                } else {
                    let difference = minimalQuantity - productInfo.quantity;
                    productInfo.quantity = minimalQuantity;
                    return `You added ${difference} more from the ${product} products.`;
                }
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`);
    }
    sellProduct(product) {
        for (const productInfo of this.products) {
            if (productInfo.product === product) {
                productInfo.quantity--;
                this.sales.push({ product, quantity: 1 });
                return `The ${product} has been successfully sold.`;
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`);
    }
    revision() {
        let result = `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`;
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }
        this.products.forEach(info => {
            result += `${info.product}-${info.quantity} more left\n`;
        });
        return result.trim();
    }
};


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

