function addBags(input) {
    let largeLaguagePrice = Number(input[0]);
    let laguageWeight = Number(input[1]);
    let daysCount = Number(input[2]);
    let laguageCount = Number(input[3]);
    let laguagePrice = 0;

    if (laguageWeight <= 10) {
        laguagePrice = largeLaguagePrice * 0.20;
    } else if (laguageWeight > 10 && laguageWeight <= 20) {
        laguagePrice = largeLaguagePrice * 0.50;
    } else {
        laguagePrice = largeLaguagePrice;
    }

    if (daysCount > 30) {
        laguagePrice *= 1.10;
    } else if (daysCount >= 7 && daysCount <= 30) {
        laguagePrice *= 1.15;
    } else if (daysCount < 7) {
        laguagePrice *= 1.40;
    }

    let totalExpences = laguageCount * laguagePrice;

    console.log(`The total price of bags is: ${totalExpences.toFixed(2)} lv. `);

}

addBags(["63.80",
    "23",
    "3",
    "1"])

