function paintingEggs(input) {
    let eggsSize = input[0];
    let color = input[1];
    let eggBoxesCount = Number(input[2]);
    let price = 0;

    switch (eggsSize) {
        case "Large":
            switch (color) {
                case "Red":
                    price = 16.00;
                    break;
                case "Green":
                    price = 12.00;
                    break;
                case "Yellow":
                    price = 9.00;
                    break;
            }
            break;
        case "Medium":
            switch (color) {
                case "Red":
                    price = 13.00;
                    break;
                case "Green":
                    price = 9.00;
                    break;
                case "Yellow":
                    price = 7.00;
                    break;
            }
            break;
        case "Small":
            switch (color) {
                case "Red":
                    price = 9.00;
                    break;
                case "Green":
                    price = 8.00;
                    break;
                case "Yellow":
                    price = 5.00;
                    break;
            }
            break;
    }

    let totalPrice = eggBoxesCount * price;
    let manufacturingExpences = totalPrice * 0.35;
    let nettPrice = totalPrice - manufacturingExpences;

    console.log(`${nettPrice.toFixed(2)} leva.`);
}

paintingEggs(["Small",
    "Yellow",
    "3"])


