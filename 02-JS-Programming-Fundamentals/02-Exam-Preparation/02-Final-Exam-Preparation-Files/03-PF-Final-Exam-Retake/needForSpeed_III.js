function needForSpeed_III(input) {
    let carsCount = Number(input.shift());
    let currentLine = input.shift();
    let carsInfoObject = {};
    // Take the n car models
    for (let i = 0; i < carsCount; i++) {
        let splittedLine = currentLine.split('|');
        let carModel = splittedLine[0];
        let mileage = Number(splittedLine[1]);
        let fuel = Number(splittedLine[2]);
        carsInfoObject[carModel] = ({ mileage, fuel });
        currentLine = input.shift();
    }
    // Receiving different commands, until the "Stop" command
    while (currentLine != "Stop") {
        let splittedLine = currentLine.split(' : ');
        let command = splittedLine[0];
        let currentCarModel = splittedLine[1];
        switch (command) {
            case "Drive":
                let drivenDistantace = Number(splittedLine[2]);
                let consumedFuel = Number(splittedLine[3]);
                if (carsInfoObject.hasOwnProperty(currentCarModel)) {
                    if (consumedFuel > carsInfoObject[currentCarModel].fuel) {
                        console.log("Not enough fuel to make that ride");
                    } else {
                        carsInfoObject[currentCarModel].mileage += drivenDistantace;
                        carsInfoObject[currentCarModel].fuel -= consumedFuel;
                        console.log(`${currentCarModel} driven for ${drivenDistantace} kilometers. ${consumedFuel} liters of fuel consumed.`);
                    }
                    // If a car's mileage reaches 100 000 km, remove it from the collection(s)
                    if (carsInfoObject[currentCarModel].mileage >= 100000) {
                        console.log(`Time to sell the ${currentCarModel}!`);
                        delete carsInfoObject[currentCarModel];
                    }
                }
                break;
            case "Refuel":
                let fuelToRefill = Number(splittedLine[2]);
                let tankCapacity = 75;
                // If the given amount of fuelToRefill is more than you can fit in the tank (max 75 liters), take only what is required to fill it up
                if ((carsInfoObject[currentCarModel].fuel + fuelToRefill) > tankCapacity) {
                    let refueledFuel = Math.abs(tankCapacity - carsInfoObject[currentCarModel].fuel);
                    carsInfoObject[currentCarModel].fuel = tankCapacity;
                    console.log(`${currentCarModel} refueled with ${refueledFuel} liters`);
                } else {
                    carsInfoObject[currentCarModel].fuel += fuelToRefill;
                    console.log(`${currentCarModel} refueled with ${fuelToRefill} liters`);
                }
                break;
            case "Revert":
                let kilometersToDecrease = Number(splittedLine[2]);
                // If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km
                if ((carsInfoObject[currentCarModel].mileage - kilometersToDecrease) < 10000) {
                    carsInfoObject[currentCarModel].mileage = 10000;
                } else {
                    carsInfoObject[currentCarModel].mileage -= kilometersToDecrease;
                    console.log(`${currentCarModel} mileage decreased by ${kilometersToDecrease} kilometers`);
                }
                break;
        }
        currentLine = input.shift();
    }
    // For in loop through carsInfoObject
    for (const currentCarModel in carsInfoObject) {
        console.log(`${currentCarModel} -> Mileage: ${carsInfoObject[currentCarModel].mileage} kms, Fuel in the tank: ${carsInfoObject[currentCarModel].fuel} lt.`);
    }
}

needForSpeed_III([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);