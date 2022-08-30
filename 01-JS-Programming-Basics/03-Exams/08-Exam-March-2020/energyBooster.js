function energyBooster(input) {
    let fruit = input[0];
    let boxSize = input[1];
    let orderedBoxes = Number(input[2]);
    let price = 0;
    let quantity = 0;

    switch (fruit) {
        case "Watermelon":
            switch (boxSize) {
                case "small":
                    price = 56.00;
                    quantity = 2.00;
                    break;
                case "big":
                    price = 28.70;
                    quantity = 5.00;
                    break;
            }
            break;
        case "Mango":
            switch (boxSize) {
                case "small":
                    price = 36.66;
                    quantity = 2.00;
                    break;
                case "big":
                    price = 19.60;
                    quantity = 5.00;
                    break;
            }
            break;
        case "Pineapple":
            switch (boxSize) {
                case "small":
                    price = 42.10;
                    quantity = 2.00;
                    break;
                case "big":
                    price = 24.80;
                    quantity = 5.00;
                    break;
            }
            break;
        case "Raspberry":
            switch (boxSize) {
                case "small":
                    price = 20.00;
                    quantity = 2.00;
                    break;
                case "big":
                    price = 15.20;
                    quantity = 5.00;
                    break;
            }
            break;
    }

    let totalPrice = quantity * price * orderedBoxes;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.50;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster(["Mango",
    "big",
    "8"])


