function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);
    let costPerDay = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Summer":
                    costPerDay = 40000;
                    break;
                case "Winter":
                    costPerDay = 45000;
                    break;
            }
            break;
        case "Sofia":
            switch (season) {
                case "Summer":
                    costPerDay = 12500;
                    break;
                case "Winter":
                    costPerDay = 17000;
                    break;
            }
            break;
        case "London":
            switch (season) {
                case "Summer":
                    costPerDay = 20250;
                    break;
                case "Winter":
                    costPerDay = 24000;
                    break;
            }
            break;
    }

    let totalCost = costPerDay * daysCount;
    if (destination === "Dubai") {
        totalCost = totalCost * 0.70;
    } else if (destination === "Sofia") {
        totalCost = totalCost * 1.25;
    }

    let diff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

movieDestination(["200000",
"London",
"Summer",
"7"])


