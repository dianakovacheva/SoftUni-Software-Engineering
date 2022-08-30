function foodForPets(input) {
    let daysCount = Number(input[0]);
    let foodQuantity = Number(input[1]);

    let totalEatenFood = 0;
    let dogFood = 0;
    let catFood = 0;
    let percentDogFood = 0;
    let percentCatFood = 0;
    let biscuitsCount = 0;
    let index = 2;
    let entireFood = 0;

    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {
        let foodForDay = 0;
        let dogFoodQuantity = Number(input[index]);
        index++
        let catFoodQuantity = Number(input[index]);
        index++;

        dogFood += dogFoodQuantity;
        catFood += catFoodQuantity;

        foodForDay = dogFoodQuantity + catFoodQuantity;
        totalFood = dogFood + catFood;

        if (currentDay % 3 === 0) {
            biscuitsCount += foodForDay * 0.10;
        }
    }
    entireFood = totalFood / foodQuantity * 100;
    percentDogFood = dogFood / totalFood * 100;
    percentCatFood = catFood / totalFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsCount)}gr.`);
    console.log(`${entireFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"])