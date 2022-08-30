function addBags(input) {
    let laguagePriceAbove20Kilograms = Number(input[0]);
    let laguageWeight = Number(input[1]);
    let leftDaysBeforeTrip = Number(input[2]);
    let laguageCount = Number(input[3]);
    let price = 0;

    if (laguageWeight < 10) {
        price = laguagePriceAbove20Kilograms * 0.20;
    } else if (laguageWeight >= 10 && laguageWeight <= 20) {
        price = laguagePriceAbove20Kilograms * 0.50;
    } else {
        price = laguagePriceAbove20Kilograms;
    }

    if (leftDaysBeforeTrip > 30) {
        price *= 1.10;
    } else if (leftDaysBeforeTrip >= 7 && leftDaysBeforeTrip <= 30) {
        price *= 1.15;
    } else {
        price *= 1.40;
    }

    let totalPrice = laguageCount * price;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["30",
    "18",
    "15",
    "2"])






