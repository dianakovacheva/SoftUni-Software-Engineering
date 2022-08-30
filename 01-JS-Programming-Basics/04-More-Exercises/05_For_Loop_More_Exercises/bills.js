function bills(input) {
    let monthsCount = Number(input[0]);
    let waterCost = 20.00;
    let internetCost = 15.00;
    let electricityCost = 0;


    for (let i = 1; i < input.length; i++) {
        let currentElectricityExpences = Number(input[i]);
        electricityCost += currentElectricityExpences;
    }

    let totalWaterExpences = waterCost * monthsCount;
    let totalInternetExpences = internetCost * monthsCount;
    let otherExpences = (electricityCost + totalWaterExpences + totalInternetExpences) * 1.20;
    let averageMonthlyExpences = (electricityCost + totalWaterExpences + totalInternetExpences + otherExpences) / monthsCount;

    console.log(`Electricity: ${electricityCost.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterExpences.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetExpences.toFixed(2)} lv`);
    console.log(`Other: ${otherExpences.toFixed(2)} lv`);
    console.log(`Average: ${averageMonthlyExpences.toFixed(2)} lv`);
}

bills(["8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.40",
    "430",
    "178.52",
    "64.20"
]);