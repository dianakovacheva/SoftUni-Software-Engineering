function pirates(arr) {
    let currentLine = arr.shift();
    let townsObject = {}
    // Receiving town information until the "Sail" command
    while (currentLine !== "Sail") {
        let splittedLine = currentLine.split('||')
        let currentTown = splittedLine[0];
        let population = Number(splittedLine[1]);
        let gold = Number(splittedLine[2]);
        // Give key and values to the townsObject
        if (!townsObject.hasOwnProperty(currentTown)) {
            townsObject[currentTown] = { population, gold };
        } else {
            // If you receive a city that has already been received 
            // you have to increase the population and gold with the given values
            townsObject[currentTown].population += population;
            townsObject[currentTown].gold += gold;
        }
        currentLine = arr.shift();
    }
    // Receiving differet actions until the "End" command
    while (currentLine !== "End") {
        let splittedLine = currentLine.split('=>');
        let command = splittedLine[0];
        let currentTownName = splittedLine[1];
        switch (command) {
            case "Plunder":
                let numberKilledPeople = Number(splittedLine[2]);
                let stolenGold = Number(splittedLine[3]);
                // Add the stolen gold and reduce the population of the plundered town
                if (townsObject.hasOwnProperty(currentTownName)) {
                    townsObject[currentTownName].population -= numberKilledPeople;
                    townsObject[currentTownName].gold -= stolenGold;
                    console.log(`${currentTownName} plundered! ${stolenGold} gold stolen, ${numberKilledPeople} citizens killed.`);
                }
                if (townsObject[currentTownName].population <= 0 || townsObject[currentTownName].gold <= 0) {
                    console.log(`${currentTownName} has been wiped off the map!`);
                    delete townsObject[currentTownName];
                }
                break;
            case "Prosper":
                let goldAmountToAdd = Number(splittedLine[2]);
                if (goldAmountToAdd < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    if (townsObject.hasOwnProperty(currentTownName)) {
                        townsObject[currentTownName].gold += goldAmountToAdd;
                        console.log(`${goldAmountToAdd} gold added to the city treasury. ${currentTownName} now has ${townsObject[currentTownName].gold} gold.`);
                    }
                    break;
                }
        }
        currentLine = arr.shift();
    }
    // After receiving the "End" command, if there are any existing settlements on your list of targets,
    // you need to print all of them
    let townsObjectLength = Object.keys(townsObject).length;
    if (townsObjectLength > 0) {
        console.log(`Ahoy, Captain! There are ${townsObjectLength} wealthy settlements to go to:`);
        for (const currentTown in townsObject) {
            console.log(`${currentTown} -> Population: ${townsObject[currentTown].population} citizens, Gold: ${townsObject[currentTown].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
