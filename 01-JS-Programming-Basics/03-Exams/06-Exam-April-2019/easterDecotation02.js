function easterDecotation(input) {
    let customerCount = Number(input.shift());
    let isFinished = false;
    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7.00;

    let boughtBasketsCount = 0;
    let boughtWreathCount = 0;
    let boughtChocolateBunnyCount = 0;

    while (input.length > 0) {
        let boughtProductType = input.shift();

        if (boughtProductType === "Finish") {
            isFinished = true;
            break;
        }
        switch (boughtProductType) {
            case "basket":
                boughtBasketsCount++;
                break;
            case "wreath":
                boughtWreathCount++;
                break;
            case "chocolate bunny":
                boughtChocolateBunnyCount++;
                break;
        }
    }

    let totalBoughtProductsCount = boughtBasketsCount + boughtWreathCount + boughtChocolateBunnyCount;
    let totalExpences = boughtBasketsCount * basketPrice + boughtWreathCount * wreathPrice + boughtChocolateBunnyCount * chocolateBunnyPrice;
    if (totalBoughtProductsCount % 2 === 0) {
        totalExpences *= 0.80;
    }

    if (isFinished) {
        console.log(`You purchased ${totalBoughtProductsCount} items for ${totalExpences.toFixed(2)} leva.`);
    }

    let averageBillPerClient = totalExpences / customerCount;
    console.log(`Average bill per client is: ${averageBillPerClient.toFixed(2)} leva.`);

}

easterDecotation(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
