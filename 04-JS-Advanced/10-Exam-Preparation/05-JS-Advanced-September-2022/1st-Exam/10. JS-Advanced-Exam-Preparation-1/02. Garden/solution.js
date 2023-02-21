class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (typeof plantName === 'string' && typeof spaceRequired === 'number') {
            if (this.spaceAvailable < spaceRequired) {
                throw new Error('Not enough space in the garden.');
            } else {
                this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
                this.spaceAvailable -= spaceRequired;
                return `The ${plantName} has been successfully planted in the garden.`;
            }
        }
    }
    ripenPlant(plantName, quantity) {
        if (typeof quantity === 'number') {
            let currentPlant = this.plants.find(plant => plant.plantName === plantName);
            if (!currentPlant) {
                throw new Error(`There is no ${plantName} in the garden.`);
            };
            if (currentPlant.ripe) {
                throw new Error(`The ${plantName} is already ripe.`);
            };
            if (quantity <= 0) {
                throw new Error('The quantity cannot be zero or negative.');
            };
            currentPlant.ripe = true;
            currentPlant.quantity += quantity;
            if (quantity === 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            };
            if (quantity > 1) {
                return `${quantity} ${plantName}s have successfully ripened.`;
            };
        }
    }
    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };
        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        };
        this.plants = this.plants.filter(availablePlant => availablePlant.plantName !== currentPlant.plantName);
        this.spaceAvailable += currentPlant.spaceRequired;
        this.storage.push({
            'plantName': currentPlant.plantName,
            'quantity': currentPlant.quantity,
        });
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsInTheGarden = [];
        let storageSentance;
        sortedPlants.forEach(p => {
            plantsInTheGarden.push(p.plantName);
        })
        plantsInTheGarden = plantsInTheGarden.join(', ');
        let plantsInStorage = [];
        if (this.storage) {
            for (const key in this.storage) {
                const currentPlantName = this.storage[key].plantName;
                const currentPlantQuantity = this.storage[key].quantity;
                plantsInStorage.push(
                    `${currentPlantName} (${currentPlantQuantity})`)
            }
        }
        if (this.storage.length === 0) {
            storageSentance = 'Plants in storage: The storage is empty.';
        }
        else {
            storageSentance = `Plants in storage: ${plantsInStorage.join(', ')}`
        }
        return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsInTheGarden}\n${storageSentance}`;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.generateReport());
