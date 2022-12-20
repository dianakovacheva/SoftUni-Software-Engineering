function printPlantDiscovery(arr) {
    const numberOfPlants = Number(arr.shift());
    let currentLine = arr.shift();
    let discoveredPlantsObject = {};
    // Store the information about all disvovered plants
    for (let i = 0; i < numberOfPlants; i++) {
        const currentPlantInfo = currentLine.split('<->');
        let plantName = currentPlantInfo[0];
        let rarity = Number(currentPlantInfo[1]);
        discoveredPlantsObject[plantName] = { rarity: rarity, ratings: { count: 0, sum: 0 } };
        currentLine = arr.shift();
    }
    // Until you receive the command "Exhibition", you will be given some commands
    while (currentLine !== 'Exhibition') {
        let splittedLine = currentLine.split(': ');
        let command = splittedLine[0];
        let plantInfo = splittedLine[1].split(' - ');
        let plantName = plantInfo[0];
        switch (command) {
            case "Rate":
                let rating = Number(plantInfo[1]);
                if (!discoveredPlantsObject.hasOwnProperty(plantName)) {
                    console.log('error');
                } else {
                    discoveredPlantsObject[plantName].ratings.sum += rating;
                    discoveredPlantsObject[plantName].ratings.count++;
                }
                break;
            case "Update":
                let newRarity = Number(plantInfo[1]);
                if (!discoveredPlantsObject.hasOwnProperty(plantName)) {
                    console.log('error');
                } else {
                    discoveredPlantsObject[plantName].rarity = newRarity;
                }
                break;
            case "Reset":
                if (!discoveredPlantsObject.hasOwnProperty(plantName)) {
                    console.log('error');
                } else {
                    discoveredPlantsObject[plantName].ratings.sum = 0;
                    discoveredPlantsObject[plantName].ratings.count = 0;
                }
                break;
        }
        currentLine = arr.shift();
    }
    let averageRating = 0;
    // Print the information about all plants
    console.log('Plants for the exhibition:');
    for (const key in discoveredPlantsObject) {
        // Calculate the average rating of each plant
        if (discoveredPlantsObject[key].ratings.sum === 0) {
            averageRating = 0;
            console.log(`- ${key}; Rarity: ${discoveredPlantsObject[key].rarity}; Rating: ${averageRating.toFixed(2)} `);
        } else {
            averageRating = discoveredPlantsObject[key].ratings.sum / discoveredPlantsObject[key].ratings.count;
            console.log(`- ${key}; Rarity: ${discoveredPlantsObject[key].rarity}; Rating: ${averageRating.toFixed(2)} `);
        }
    }
}

printPlantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);