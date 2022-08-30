function travelAgency(input) {
    let cityName = input[0];
    let packageType = input[1];
    let discountVIP = input[2];
    let stayingDaysCount = Number(input[3]);
    let price = 0;

    switch (cityName) {
        case "Bansko":
        case "Borovets":
            switch (packageType) {
                case "withEquipment":
                    price = 100.00;
                    if (discountVIP === "yes") {
                        price = price * 0.90;
                    }
                    break;
                case "noEquipment":
                    price = 80.00;
                    if (discountVIP === "yes") {
                        price = price * 0.95;
                    }
                    break;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (packageType) {
                case "withBreakfast":
                    price = 130.00;
                    if (discountVIP === "yes") {
                        price = price * 0.88;
                    }
                    break;
                case "noBreakfast":
                    price = 100.00;
                    if (discountVIP === "yes") {
                        price = price * 0.93;
                    }
            }
            break;
    }

    let totalCost = stayingDaysCount * price;

    if (stayingDaysCount > 7) {
        stayingDaysCount = stayingDaysCount - 1 * price;
    }
    
    if (stayingDaysCount < 1) {
        console.log("Days must be positive number!");
    } else if (cityName !== "Bansko" && cityName !== "Borovets" && cityName !== "Varna"
        && cityName !== "Burgas") {
        console.log("Invalid input!");
    } else if (packageType !== "noEquipment" && packageType !== "withEquipment"
        && packageType !== "noBreakfast" && packageType !== "withBreakfast") {
        console.log("Invalid input!");
    } else {
        console.log(`The price is ${totalCost.toFixed(2)}lv! Have a nice time!`);
    }

}

travelAgency(["Bansko", "withEquipment", "no", "2",])