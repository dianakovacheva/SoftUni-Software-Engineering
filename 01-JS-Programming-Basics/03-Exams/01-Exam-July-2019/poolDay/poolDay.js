function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entryPrice = Number(input[1]);
    let loungePrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEntryCosts = peopleCount * entryPrice;
    let totalUmberllaCosts = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let totalLoungeCosts = Math.ceil(peopleCount * 0.75) * loungePrice;

    let totalCost = totalEntryCosts + totalUmberllaCosts + totalLoungeCosts;

    console.log(`${totalCost.toFixed(2)} lv.`);
}

poolDay(["50","6","8","4",])

