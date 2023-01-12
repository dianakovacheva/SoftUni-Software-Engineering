function calculateTotalExpences(fruitType, weightInGR, pricePerKG) {
    let weightInKG = weightInGR / 1000;
    let totalMoney = weightInKG * pricePerKG;
    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitType}.`);
}

calculateTotalExpences('orange', 2500, 1.80);
calculateTotalExpences('apple', 1563, 2.35);