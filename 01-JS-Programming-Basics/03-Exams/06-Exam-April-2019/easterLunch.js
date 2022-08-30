function easterLunch(input) {
    let easterBreadCount = Number(input[0]);
    let eggsBoxCount = Number(input[1]);
    let biscuitsQuantity = Number(input[2]);

    let easterBreadPrice = 3.20;
    let eggsBoxPrice = 4.35;
    let biscuitsPricePerKilogram = 5.40;
    let eggsPaintPrice = 0.15;

    let totalExpences = easterBreadCount * easterBreadPrice + eggsBoxCount * eggsBoxPrice
        + biscuitsQuantity * biscuitsPricePerKilogram + eggsBoxCount * 12 * eggsPaintPrice;

    console.log(totalExpences.toFixed(2));
}

easterLunch(["4",
    "4",
    "3"])
