function mobileOperator(input) {
    let contractDuration = input[0];
    let contractType = input[1];
    let internet = input[2];
    let monthsCount = Number(input[3]);
    let price = 0;

    switch (contractDuration) {
        case "one":
            switch (contractType) {
                case "Small":
                    price = 9.98;
                    break;
                case "Middle":
                    price = 18.99;
                    break;
                case "Large":
                    price = 25.98;
                    break;
                case "ExtraLarge":
                    price = 35.99;
                    break;
            }
            break;
        case "two":
            switch (contractType) {
                case "Small":
                    price = 8.58;
                    break;
                case "Middle":
                    price = 17.09;
                    break;
                case "Large":
                    price = 23.59;
                    break;
                case "ExtraLarge":
                    price = 31.79;
                    break;
            }
            break;
    }

    if (internet === "yes") {
        if (price <= 10.00) {
            price += 5.50;
        } else if (price <= 30.00) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }

    let totalPrice = price * monthsCount;

    if (contractDuration === "two") {
        totalPrice = totalPrice * 96.25 / 100;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

mobileOperator(["two",
"Small",
"yes",
"20"])



