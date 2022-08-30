function truckDriver(input) {
    let season = input[0];
    let kilometersProMonth = Number(input[1]);
    let moneyProKilometer = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kilometersProMonth <= 5000) {
                moneyProKilometer = 0.75;
            } else if (kilometersProMonth > 5000 && kilometersProMonth <= 10000) {
                moneyProKilometer = 0.95;
            } else if (kilometersProMonth > 10000 && kilometersProMonth <= 20000) {
                moneyProKilometer = 1.45;
            }
            break;
        case "Summer":
            if (kilometersProMonth <= 5000) {
                moneyProKilometer = 0.90;
            } else if (kilometersProMonth > 5000 && kilometersProMonth <= 10000) {
                moneyProKilometer = 1.10;
            } else if (kilometersProMonth > 10000 && kilometersProMonth <= 20000) {
                moneyProKilometer = 1.45;
            }
            break;
        case "Winter":
            if (kilometersProMonth <= 5000) {
                moneyProKilometer = 1.05;
            } else if (kilometersProMonth > 5000 && kilometersProMonth <= 10000) {
                moneyProKilometer = 1.25;
            } else if (kilometersProMonth > 10000 && kilometersProMonth <= 20000) {
                moneyProKilometer = 1.45;
            }
            break;
    }

    let totalMoney = kilometersProMonth * moneyProKilometer * 4;
    let taxToPay = 0.10 * totalMoney;
    let truckDriverSalary = totalMoney - taxToPay;

    console.log(truckDriverSalary.toFixed(2));
}

truckDriver(["Autumn", "8600"]);