function fitnessCard(input) {
    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sportType = input[3];
    let monthlyCardPrice = 0;

    switch (sex) {
        case "m":
            switch (sportType) {
                case "Gym":
                    monthlyCardPrice = 42.00;
                    break;
                case "Boxing":
                    monthlyCardPrice = 41.00;
                    break;
                case "Yoga":
                    monthlyCardPrice = 45.00;
                    break;
                case "Zumba":
                    monthlyCardPrice = 34.00;
                    break;
                case "Dances":
                    monthlyCardPrice = 51.00;
                    break;
                case "Pilates":
                    monthlyCardPrice = 39.00;
                    break;
            }
            break;
        case "f":
            switch (sportType) {
                case "Gym":
                    monthlyCardPrice = 35.00;
                    break;
                case "Boxing":
                    monthlyCardPrice = 37.00;
                    break;
                case "Yoga":
                    monthlyCardPrice = 42.00;
                    break;
                case "Zumba":
                    monthlyCardPrice = 31.00;
                    break;
                case "Dances":
                    monthlyCardPrice = 53.00;
                    break;
                case "Pilates":
                    monthlyCardPrice = 37.00;
                    break;
            }
            break;
    }

    if(age <= 19) {
        monthlyCardPrice *= 0.80;
    }

    let diff = Math.abs(budget - monthlyCardPrice);
    
    if(budget >= monthlyCardPrice) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}

fitnessCard(["10",
"m",
"50",
"Pilates"])

