function flowers(input) {
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let decorationPrice = 2.00;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }

    let chrysanthemumsSales = chrysanthemumsCount * chrysanthemumsPrice;
    let rosesSales = rosesCount * rosesPrice;
    let tulipsSales = tulipsCount * tulipsPrice;
    let totalSales = chrysanthemumsSales + rosesSales + tulipsSales;

    if (isHoliday === "Y") {
        totalSales *= 1.15;
    }

    if (tulipsCount > 7 && season === "Spring") {
        totalSales *= 0.95;
    } else if (rosesCount >= 10 && season === "Winter") {
        totalSales *= 0.90;
    }

    if (chrysanthemumsCount + rosesCount + tulipsCount > 20) {
        totalSales *= 0.80;
    }

    console.log(`${(totalSales + decorationPrice).toFixed(2)}`);

}

flowers(["10", "10", "10", "Autumn", "N"])