class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    changeVegetableInfo(indexVegetable, quantityToAdd, priceToChange) {
        let [type, quantity, price] = this.availableProducts[indexVegetable].split(' ');
        quantity = Number(quantity);
        price = Number(price);
        let newQuantity = quantity + quantityToAdd;
        if (priceToChange > price) {
            price = priceToChange;
        }
        this.availableProducts[indexVegetable] = `${type} ${newQuantity} ${price}`;
    }
    loadingVegetables(vegetables) {
        let uniqueVegetables = [];

        vegetables.forEach(vegetableInfo => {
            let [type, quantity, price] = vegetableInfo.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let indexFoundProduct = this.availableProducts.findIndex(veg => type === veg.split(' ')[0]);
            if (indexFoundProduct !== -1) {
                this.changeVegetableInfo(indexFoundProduct, quantity, price);
            } else {
                this.availableProducts.push(`${type} ${quantity} ${price}`);
            }
            if (!uniqueVegetables.includes(type)) {
                uniqueVegetables.push(type);
            }
        });
        let returnStr = 'Successfully added ' + uniqueVegetables.join(', ').trim();
        return returnStr;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(vegetableInfo => {
            let [type, quantity] = vegetableInfo.split(' ');
            quantity = Number(quantity);
            let indexFoundProduct = this.availableProducts.findIndex(veg => type === veg.split(' ')[0]);
            if (indexFoundProduct !== -1) {
                if (quantity > this.availableProducts[indexFoundProduct].split(' ')[1]) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                this.changeVegetableInfo(indexFoundProduct, -quantity, 0);
                totalPrice += Number(this.availableProducts[indexFoundProduct].split(' ')[2]) * quantity;
            } else {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let indexFoundProduct = this.availableProducts.findIndex(veg => type === veg.split(' ')[0]);
        if (indexFoundProduct !== -1) {
            let [currType, currQuantity, currPrice] = this.availableProducts[indexFoundProduct].split(' ');
            if (quantity > currQuantity) {
                this.changeVegetableInfo(indexFoundProduct, -currQuantity, currPrice);
                this.availableProducts[indexFoundProduct] = `${currType} 0 ${currPrice}`;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                this.changeVegetableInfo(indexFoundProduct, -quantity, currPrice);
                return `Some quantity of the ${type} has been removed.`;
            }
        } else {
            throw new Error(`${type} is not available in the store.`);
        }
    }
    revision() {
        let result = 'Available vegetables:\n';
        let sortedByPrice = this.availableProducts.sort((a, b) => Number(a.split(' ')[2]) - Number(b.split(' ')[2]));
        sortedByPrice.forEach(el => {
            result += `${el.split(' ')[0]}-${el.split(' ')[1]}-$${el.split(' ')[2]}\n`;
        });
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return result.trim();
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
