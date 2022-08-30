function movieStars(input) {
    let budget = Number(input.shift());
    let actorName = input.shift();
    let actorExpences = 0;
    while (actorName !== "ACTION") {

        if (actorName.length > 15) {
            actorExpences += (budget-actorExpences) * 0.20;
        } else {
            let actorFee = Number(input.shift());
            actorExpences += actorFee;
        }

        if (actorExpences > budget) {
            break;
        }
        actorName = input.shift();
    }

    let diff = Math.abs(budget - actorExpences);

    if (budget >= actorExpences) {
        console.log(`We are left with ${diff.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
    }

}

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
