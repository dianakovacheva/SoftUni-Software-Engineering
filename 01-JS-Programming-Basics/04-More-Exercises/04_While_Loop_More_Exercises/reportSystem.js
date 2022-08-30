function reportSystem(input) {
    let targetMoney = Number(input[0]);
    let i = 1;
    let sum = 0;
    let cashSales = 0;
    let casheSalesCount = 0;
    let cardSales = 0;
    let cardSalesCount = 0;

    while (input !== "End" || sum >= targetMoney) {
        let currentMoney = Number(input[i]);

        if (input[i] === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }

        // Cash Sales
        if (i % 2 !== 0) {
            if (currentMoney >= 100) {
                console.log("Error in transaction!");
            } else if (currentMoney < 100) {
                cashSales += currentMoney;
                sum += currentMoney;
                casheSalesCount++;
                console.log("Product sold!");
            }
        }
        // Card Sales
        else {
            if (currentMoney <= 10) {
                console.log("Error in transaction!");
            } else if (currentMoney > 10) {
                cardSales += currentMoney;
                sum += currentMoney;
                cardSalesCount++;
                console.log("Product sold!");
            }
        }

        if (sum >= targetMoney) {
            console.log(`Average CS: ${(cashSales / cardSalesCount).toFixed(2)}`);
            console.log(`Average CC: ${(cardSales / cardSalesCount).toFixed(2)}`);
            break;
        }
        i++;
    }
}

reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
])