function aluminumJoinery(input) {
    let joineryCount = Number(input[0]);
    let joinerySize = input[1];
    let deliveryOption = input[2];
    let deliveryExpences = 60.00;
    let itemPrice = 0;

    switch (joinerySize) {
        case "90X130":
            itemPrice = 110.00;
            if (joineryCount > 30 && joineryCount <= 60) {
                itemPrice *= 0.95;
            } else if (joineryCount > 60) {
                itemPrice *= 0.92;
            }
            break;
        case "100X150":
            itemPrice = 140.00;
            if (joineryCount > 40 && joineryCount <= 80) {
                itemPrice *= 0.94;
            } else if (joineryCount > 80) {
                itemPrice *= 0.90;
            }
            break;
        case "130X180":
            itemPrice = 190.00;
            if (joineryCount > 20 && joineryCount <= 50) {
                itemPrice *= 0.93;
            } else if (joineryCount > 50) {
                itemPrice *= 0.88;
            }
            break;
        case "200X300":
            itemPrice = 250.00;
            if (joineryCount > 25 && joineryCount <= 50) {
                itemPrice *= 0.91;
            } else if (joineryCount > 50) {
                itemPrice *= 0.86;
            }
            break;
    }

    let totalPrice = joineryCount * itemPrice;
    let totalPriceWithDelivery = totalPrice + deliveryExpences;

    if (joineryCount > 99) {
        totalPrice *= 0.96;
        totalPriceWithDelivery *= 0.96;
    }

    if (joineryCount < 10) {
        console.log("Invalid order");
    } else if (deliveryOption === "With delivery") {
        console.log(`${totalPriceWithDelivery.toFixed(2)} BGN`);
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);

    }
}

aluminumJoinery(["2",
    "130X180",
    "With delivery"])




