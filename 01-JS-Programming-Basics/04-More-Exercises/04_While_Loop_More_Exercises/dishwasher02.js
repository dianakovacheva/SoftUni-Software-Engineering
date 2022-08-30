function dishwasher(input) {
    let detergentBottlesCount = Number(input[0]);
    let totalQuantityOfDetergentInML = detergentBottlesCount * 750;
    let neededDetergentForOneDishInML = 5;
    let neededDetergentForOnePotInML = 15;
    let i = 1;
    let washedDishesCount = 0;
    let washedPotsCount = 0;

    while (input !== "End" || totalQuantityOfDetergentInML !== 0) {
        let currentInput = Number(input[i]);

        if (input[i] === "End") {
            break;
        }

        if (totalQuantityOfDetergentInML < 0) {
            console.log(`Not enough detergent, ${Math.abs(totalQuantityOfDetergentInML)} ml. more necessary!`);
            break;
        }

        if (i % 3 === 0) {
            washedPotsCount += currentInput;
            totalQuantityOfDetergentInML -= currentInput * neededDetergentForOnePotInML;
        } else {
            washedDishesCount += currentInput;
            totalQuantityOfDetergentInML -= currentInput * neededDetergentForOneDishInML;
        }
        i++;
    }

    if ( totalQuantityOfDetergentInML >= 0) {
        console.log("Detergent was enough!");
        console.log(`${washedDishesCount} dishes and ${washedPotsCount} pots were washed.`);
        console.log(`Leftover detergent ${totalQuantityOfDetergentInML} ml.`);
    }
}

dishwasher(["2",
    "53",
    "65",
    "55",
    "End",
])