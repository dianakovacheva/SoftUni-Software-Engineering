function maidenParty(input) {
    let partyPrice = Number(input[0]);
    let loveNotesCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyChainCount = Number(input[3]);
    let drawingCount = Number(input[4]);
    let luckSurpriceCount = Number(input[5]);

    let loverNotesPrice = 0.60;
    let rosesPrice = 7.20;
    let keyChainPrice = 3.60;
    let drawingPrice = 18.20;
    let luckSurpricePrice = 22.00;

    let totalLoveNote = loveNotesCount * loverNotesPrice;
    let totalRose = rosesCount * rosesPrice;
    let totalKeyChain = keyChainCount * keyChainPrice;
    let totalDrawing = drawingCount * drawingPrice;
    let totalLuckSurprice = luckSurpriceCount * luckSurpricePrice;

    let totalOrder = totalLoveNote + totalRose + totalKeyChain + totalDrawing + totalLuckSurprice;

    let totalOrderCount = loveNotesCount + rosesCount + keyChainCount + drawingCount + luckSurpriceCount;

    if (totalOrderCount >= 25) {
        totalOrder = totalOrder * 0.65;
    }

    let hostingCost = totalOrder * 0.10;

    let diff = totalOrder - hostingCost - partyPrice;



    if (leftMoney >= partyPrice) {
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
    }
}

maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])

