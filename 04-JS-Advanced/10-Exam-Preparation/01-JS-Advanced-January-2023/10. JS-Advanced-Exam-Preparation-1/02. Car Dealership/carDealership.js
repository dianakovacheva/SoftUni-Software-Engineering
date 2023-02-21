class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage,
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(car => car.model === model);
        const match = this.availableCars[index];
        if (match === undefined) {
            throw new TypeError(`${model} was not found!`);
        }
        const mileageDifference = match.mileage - desiredMileage;
        const sold = {
            model: match.model,
            horsepower: match.horsepower,
        };
        if (mileageDifference <= 0) {
            sold.soldPrice = match.price;
        } else if (mileageDifference <= 40000) {
            sold.soldPrice = match.price * 0.95;
        } else {
            sold.soldPrice = match.price * 0.90;
        }
        // add the car to the soldCars array
        this.soldCars.push(sold);
        // remove the car from the availableCars array
        this.availableCars.splice(index, 1);
        // add the soldPrice to the totalIncome
        this.totalIncome += sold.soldPrice;
        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        let result;
        if (this.availableCars.length === 0) {
            result = 'There are no available cars';
        } else {
            result = '-Available cars:\n';
            for (const carInfo of this.availableCars) {
                result += `---${carInfo.model} - ${carInfo.horsepower} HP - ${carInfo.mileage.toFixed(2)} km - ${carInfo.price.toFixed(2)}$\n`;
            }
        }
        return result.trim();
    }
    salesReport(criteria) {
        let sortedCars;
        switch (criteria) {
            case 'horsepower': sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                break;
            case 'model': sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                break;
            default: throw new Error('Invalid criteria!');
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`;
        for (const carInfo of sortedCars) {
            result += `---${carInfo.model} - ${carInfo.horsepower} HP - ${carInfo.soldPrice.toFixed(2)}$\n`;
        }
        return result.trim();
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());





