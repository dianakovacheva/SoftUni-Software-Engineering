function vegetableMarket(input) {
    let vegetablePriceProKG = Number(input[0]);
    let fruitPriceProKG = Number(input[1]);
    let quantityVegetableInKG = Number(input[2]);
    let quantityFruitInKG = Number(input[3]);

    let totalPriceVegetableInEUR = vegetablePriceProKG * quantityVegetableInKG / 1.94;
    let totalPriceFruitInEUR = fruitPriceProKG * quantityFruitInKG / 1.94;
    let totalExpencesInEUR = totalPriceVegetableInEUR + totalPriceFruitInEUR;

    console.log(totalExpencesInEUR.toFixed(2));

}

vegetableMarket(["1.5", "2.5", "10", "10"]);