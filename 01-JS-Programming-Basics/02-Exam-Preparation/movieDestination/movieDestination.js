function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);
    let price = 0;

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                price = 45000;
            } else if (season === "Summer") {
                price = 40000;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                price = 17000;
            } else if (season === "Summer") {
                price = 12500;
            }
            break;
        case "London":
            if (season === "Winter") {
                price = 24000;
            } else if (season === "Summer") {
                price = 20250;
            }
            break;
    }

    let sumAllDays = daysCount * price;

    // write it with switch

    if (destination === "Dubai") {
        sumAllDays = sumAllDays * 0.70;
    } else if (destination === "Sofia") {
        sumAllDays = sumAllDays * 1.25;
    }

    

    let diff = Math.abs(budget - sumAllDays);

    if (budget >= sumAllDays) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }

}

movieDestination(["1000000", "Dubai", "Summer", "5"])