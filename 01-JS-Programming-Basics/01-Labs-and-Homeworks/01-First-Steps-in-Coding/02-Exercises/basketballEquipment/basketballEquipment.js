function basketballEquipment(input) {

    const SUBSCRIPTION_PRICE = Number(input[0]);

    let basketballShoePrice = SUBSCRIPTION_PRICE - SUBSCRIPTION_PRICE * 0.4;
    let basketballClothesPrice = basketballShoePrice - basketballShoePrice * 0.2;
    let basketballBallPrice = basketballClothesPrice * 1/4;
    let basketballAccessoriesPrice = basketballBallPrice * 1/5;

    let totalCost = SUBSCRIPTION_PRICE + basketballShoePrice + basketballClothesPrice + basketballBallPrice + basketballAccessoriesPrice;
    
    console.log(totalCost);
}

basketballEquipment(["550"]);