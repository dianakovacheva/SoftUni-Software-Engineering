function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let boatRentCosts = 0;

    switch (season) {
        case "Spring":
            boatRentCosts = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRentCosts = 4200;
            break;
        case "Winter":
            boatRentCosts = 2600;
            break;
    }

    if(fisherman <= 6) {
        boatRentCosts = boatRentCosts * 0.90;
    } else if(fisherman >= 7 && fisherman <= 11) {
        boatRentCosts = boatRentCosts * 0.85;
    } else {
        boatRentCosts = boatRentCosts * 0.75;
    }

    if(fisherman % 2 === 0  &&  season !== "Autumn") {
        boatRentCosts = boatRentCosts * 0.95;
    }

    let difference = Math.abs(budget - boatRentCosts);

    if(budget >= boatRentCosts) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

fishingBoat(["3600",
"Autumn",
"6"])


