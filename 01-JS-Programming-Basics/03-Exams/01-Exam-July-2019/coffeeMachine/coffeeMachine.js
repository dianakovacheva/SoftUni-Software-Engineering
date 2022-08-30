function coffeeMachine(input) {
    let beverageType = input[0];
    let sugar = input[1];
    let beverageCount = Number(input[2]);
    let price = 0;

    switch (beverageType) {
        case "Espresso":
            if (sugar === "Without") {
                price = 0.90 * 0.65;
            } else if (sugar === "Normal") {
                price = 1.00;
            } else {
                price = 1.20;
            }

            if (beverageType === "Espresso" && beverageCount >= 5) {
                price = price * 0.75;
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = 1.00 * 0.65;
            } else if (sugar === "Normal") {
                price = 1.20;
            } else {
                price = 1.60;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                price = 0.50 * 0.65;
            } else if (sugar === "Normal") {
                price = 0.60;
            } else {
                price = 0.70;
            }
            break;
    }

    let totalPrice = beverageCount * price;

    if (totalPrice > 15) {
        totalPrice = totalPrice * 0.80;
    }
    console.log(`You bought ${beverageCount} cups of ${beverageType} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Tea", "Extra", "3",])