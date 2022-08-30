function safari(input) {
    let budget = Number(input[0]);
    let neededLitersFuel = Number(input[1]);
    let day = input[2];
    let fuelCost = neededLitersFuel * 2.10;
    let holidayCost = 100.00;
    let totalCost = fuelCost + holidayCost;

    switch (day) {
        case "Saturday":
            totalCost = totalCost * 0.90;
            break;
        case "Sunday":
            totalCost = totalCost * 0.80;
            break;
    }

    let diff = Math.abs(budget - totalCost);

    if (budget >= totalCost) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }

}

safari(["120",
    "30",
    "Saturday"])

