function easterBakery(input) {
    let flourPricePerKilogram = Number(input[0]);
    let flourQuantityInKilograms = Number(input[1]);
    let sugarQuantityInKilograms = Number(input[2]);
    let eggsBoxesCount = Number(input[3]);
    let yeastPackageCount = Number(input[4]);

    let sugarPricePerKilogram = flourPricePerKilogram * 0.75;
    let eggsPricePerBox = flourPricePerKilogram * 1.10;
    let yeastPricePerPackage = sugarPricePerKilogram * 0.20;

    let totalExpences = flourPricePerKilogram * flourQuantityInKilograms + sugarPricePerKilogram * sugarQuantityInKilograms
        + eggsPricePerBox * eggsBoxesCount + yeastPricePerPackage * yeastPackageCount;

    console.log(totalExpences.toFixed(2));
}

easterBakery(["63.44",
    "3.57",
    "6.35",
    "8",
    "2"])

