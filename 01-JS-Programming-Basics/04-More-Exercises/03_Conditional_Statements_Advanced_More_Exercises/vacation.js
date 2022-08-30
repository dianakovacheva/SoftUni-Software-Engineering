function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = "";
    let accommodationType = "";

    if (budget <= 1000) {
        accommodationType = "Camp";
        if (season === "Summer") {
            destination = "Alaska";
            price = 0.65 * budget;
        } else {
            destination = "Morocco";
            price = 0.45 * budget;
        }
    } else if (budget > 1000 && budget <= 3000) {
        accommodationType = "Hut";
        if (season === "Summer") {
            destination = "Alaska";
            price = 0.80 * budget;
        } else {
            destination = "Morocco";
            price = 0.60 * budget;
        }
    } else {
        accommodationType = "Hotel";
        if (season === "Summer") {
            destination = "Alaska";
            price = 0.90 * budget;
        } else {
            destination = "Morocco";
            price = 0.90 * budget;
        }
    }

    console.log(`${destination} - ${accommodationType} - ${price.toFixed(2)}`);
}

vacation(["2543.99", "Winter"]);