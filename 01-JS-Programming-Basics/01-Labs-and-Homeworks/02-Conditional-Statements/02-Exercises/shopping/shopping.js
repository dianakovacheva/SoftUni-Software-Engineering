function shopping(input) {

    let budget = Number(input[0]);
    let videoCardsQuantity = Number(input[1]);
    let processorQuantity = Number(input[2]);
    let ramMemoryQuantity = Number(input[3]);

    let videoCardsPrice = 250;
    let processorPrice = 0.35 * (videoCardsQuantity * videoCardsPrice);
    let ramMemoryPrice = 0.10 * (videoCardsQuantity * videoCardsPrice);

    let totalPrice = videoCardsQuantity * videoCardsPrice + processorQuantity * processorPrice + ramMemoryQuantity * ramMemoryPrice;

    if (videoCardsQuantity > processorQuantity) {
        totalPrice = totalPrice * 0.85;
    }

    let moneyLeft = Math.abs(budget - totalPrice);
    let neededMoney = Math.abs(totalPrice - budget);

    if (budget >= totalPrice) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"]);