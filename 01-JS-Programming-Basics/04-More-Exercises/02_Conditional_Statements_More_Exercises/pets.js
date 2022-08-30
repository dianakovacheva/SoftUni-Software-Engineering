function pets(input) {
    let daysCount = Number(input[0]);
    let leftPetsFoodInKG = Number(input[1]);
    let dogFoodQuantityPerDay = Number(input[2]);
    let catFoodQuantityPerDay = Number(input[3]);
    let turtleFoodQuantityPerDay = Number(input[4]);
    let turtleFoodQuantityPerDayInKG = turtleFoodQuantityPerDay / 1000;
    let neededDogFoodQuantity = daysCount * dogFoodQuantityPerDay;
    let neededCatFoodQuantity = daysCount * catFoodQuantityPerDay;
    let neededTurtleFoodQuantity = daysCount * turtleFoodQuantityPerDayInKG;
    let totalNeededFoodQuantityAllPets = neededDogFoodQuantity + neededCatFoodQuantity + neededTurtleFoodQuantity;
    let diff = Math.abs(leftPetsFoodInKG - totalNeededFoodQuantityAllPets);

    if (leftPetsFoodInKG >= totalNeededFoodQuantityAllPets) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200"])