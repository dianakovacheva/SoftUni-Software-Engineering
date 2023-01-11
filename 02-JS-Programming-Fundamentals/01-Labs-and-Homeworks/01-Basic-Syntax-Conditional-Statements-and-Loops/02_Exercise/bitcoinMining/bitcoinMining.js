function bitcoinMining(dailyShift) {
    const priceOneBitcoinInLV = 11949.16;
    const priceOneGramGoldInLV = 67.51;
    let boughtBitcoins = 0;
    let dayOfPurchase = 0;
    let isBought = false;
    let earnedMoney = 0;

    for (let i = 0; i < dailyShift.length; i++) {
        let currentDay = i + 1;
        let currentAmountOfGold = dailyShift[i];
        if (currentDay % 3 === 0) {
            currentAmountOfGold *= 0.70;
        }
        earnedMoney += Number((currentAmountOfGold * priceOneGramGoldInLV).toFixed(2));

        if (earnedMoney >= priceOneBitcoinInLV) {
            isBought = true;
            if (boughtBitcoins === 0) {
                dayOfPurchase = currentDay;
            }
            let currentBuyAmount = Math.floor(earnedMoney / priceOneBitcoinInLV);
            boughtBitcoins += currentBuyAmount;
            earnedMoney -= currentBuyAmount * priceOneBitcoinInLV;
        }
    }

    if (isBought) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
        console.log(`Left money: ${earnedMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Left money: ${earnedMoney.toFixed(2)} lv.`);
    }
}

bitcoinMining([100, 200, 300]);