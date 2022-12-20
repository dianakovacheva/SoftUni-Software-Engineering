function burgerBus(arr) {

    let numberOfCities = Number(arr.shift());
    let ownersIncome = 0;
    let ownersExpenses = 0;
    let totalProfit = 0;

    for (let i = 1; i <= numberOfCities; i++) {
        let cityName = arr.shift();
        ownersIncome = Number(arr.shift());
        ownersExpenses = Number(arr.shift());

        if (i % 3 === 0 && i % 5 !== 0) {
            ownersExpenses += ownersExpenses * 0.5;
        }

        if (i % 5 === 0) {
            ownersIncome -= 0.10 * ownersIncome;
        }

        let profitEachCity = ownersIncome - ownersExpenses;

        console.log(`In ${cityName} Burger Bus earned ${profitEachCity.toFixed(2)} leva.`);

        totalProfit += profitEachCity;
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
    ;