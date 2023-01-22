function cityTaxes(name, population, treasury) {
    const resultObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            // Increase treasury by  population * taxRate
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            // Increase population by given percentage
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            // Decrease treasury by given percentage
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };
    return resultObj;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(15);
console.log(city.treasury);

