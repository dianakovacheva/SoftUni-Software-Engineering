function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let priceProNight = Number(input[2]);
    let percentExtraCosts = Number(input[3]);

    if(nightsCount > 7) {
        priceProNight = priceProNight * 0.95;
    }

    let hotelCosts = nightsCount * priceProNight;
    let extraCosts = percentExtraCosts / 100 * budget;
    let totalCosts = hotelCosts + extraCosts;
    let difference = Math.abs(budget - totalCosts);

    if(totalCosts <= budget) {
        console.log(`Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${difference.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", "7",
    "66",
    "15"])