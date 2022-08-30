function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let holidayType;
    let accommodationCosts = 0;


    switch (season) {
        case "summer":
            holidayType = "Camp";
            if(budget <= 100) {
                destination = "Bulgaria";
                accommodationCosts = budget * 0.30;
            } else if(budget <= 1000) {
                destination = "Balkans";
                accommodationCosts = budget * 0.40;
            } else {
                destination = "Europe";
                accommodationCosts = budget * 0.90;
                holidayType = "Hotel";
            }
            break;
        case "winter":
            holidayType = "Hotel";
            if(budget <= 100) {
                destination = "Bulgaria";
                accommodationCosts = budget * 0.70;
            } else if(budget <= 1000) {
                destination = "Balkans";
                accommodationCosts = budget * 0.80;
            } else {
                destination = "Europe";
                accommodationCosts = budget * 0.90;
            }
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${accommodationCosts.toFixed(2)}`);
}

journey(["50", "summer"]);