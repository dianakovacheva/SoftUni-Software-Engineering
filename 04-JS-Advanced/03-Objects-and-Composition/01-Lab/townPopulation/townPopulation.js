function createRegistry(arrOfStrings) {
    const townsData = arrOfStrings.slice();
    const townsDataObj = {};
    for (let currentRow of townsData) {
        let [townName, population] = currentRow.split(' <-> ');
        population = Number(population);
        if (!townsDataObj.hasOwnProperty(townName)) {
            townsDataObj[townName] = 0;
        }
        // If you receive the same town twice, add the given population to the current one
        townsDataObj[townName] += population;
    }
    // Print all the towns and their population
    for (const key in townsDataObj) {
        console.log(`${key} : ${townsDataObj[key]}`);
    }
}

createRegistry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);