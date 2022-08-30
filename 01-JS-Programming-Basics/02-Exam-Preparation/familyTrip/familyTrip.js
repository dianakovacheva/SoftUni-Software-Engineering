function familyTrip(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentExtraCosts = Number(input[3]);

    if (nightsCount > 7) {
        pricePerNight = pricePerNight * 0.95;
    }

    let totalAllNights = nightsCount * pricePerNight;
    let extraCosts = budget * (percentExtraCosts / 100);

    let totalCost = totalAllNights + extraCosts;
    let diff = Math.abs(budget - totalCost);

    if(budget >= totalCost) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}

familyTrip(["500", "7", "66", "15"])