function flowerShop(input) {
    let priceFlower1 = 3.25;
    let priceFlower2 = 4.00;
    let priceFlower3 = 3.50;
    let priceFlower4 = 8.00;

    let countFlower1 = Number(input[0]);
    let countFlower2 = Number(input[1]);
    let countFlower3 = Number(input[2]);
    let countFlower4 = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalExpencesForFlowers = priceFlower1 * countFlower1 + priceFlower2 * countFlower2
        + priceFlower3 * countFlower3 + priceFlower4 * countFlower4;

    let taxToPay = totalExpencesForFlowers * 0.05;
    let wonMoney = totalExpencesForFlowers - taxToPay;
    let moneyLeftAfterBuyingGift = Math.abs(wonMoney - giftPrice);

    if (wonMoney >= giftPrice) {
        console.log(`She is left with ${Math.floor(moneyLeftAfterBuyingGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(moneyLeftAfterBuyingGift)} leva.`);
    }
}

flowerShop(["15", "7", "5", "10", "100"])