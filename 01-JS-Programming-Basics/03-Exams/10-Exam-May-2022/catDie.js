function catDiet(input) {
    let percentageFet = Number(input[0]);
    let percentageProtein = Number(input[1]);
    let percentageKolhydtrathen = Number(input[2]);
    let totalCalory = Number(input[3]);
    let percentageWater = Number(input[4]);

    let totalGramFet = (percentageFet * totalCalory) / 9;
    let totalGramProtein = (percentageProtein * totalCalory) / 4;
    let totalGramKolhydrathen = (percentageKolhydtrathen * totalCalory) / 4;

    let totalFoodWeight = totalGramFet + totalGramProtein + totalGramKolhydrathen;

    let caloryForOneGramFood = totalCalory / totalFoodWeight;

    let caloryForOneGramFoodNoWater = (1 - percentageWater / 100) * caloryForOneGramFood * 100;

    console.log(caloryForOneGramFoodNoWater.toFixed(4));

}

catDiet(["40",
    "40",
    "20",
    "3000",
    "40"])
