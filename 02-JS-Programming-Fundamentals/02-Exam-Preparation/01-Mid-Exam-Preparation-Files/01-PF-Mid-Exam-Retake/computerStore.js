function computerStore(pricesOfTheParts) {

    let taxPercentage = 0.20;
    let sumWithoutTaxes = 0;
    let isSpecialCustomer = false;

    for (let i = 0; i < pricesOfTheParts.length; i++) {
        let currentInput = pricesOfTheParts[i];

        if (currentInput !== "special" && currentInput !== "regular") {
            if (Number(currentInput) < 0) {
                console.log("Invalid price!");
            } else {
                sumWithoutTaxes += Number(currentInput);
            }
        }

        if (currentInput === "special") {
            isSpecialCustomer = true;
        }
    }

    let taxes = sumWithoutTaxes * taxPercentage;
    let totalPriceWithTaxes = sumWithoutTaxes + taxes;

    if (isSpecialCustomer) {
        totalPriceWithTaxes *= 0.90;
    }

    if (totalPriceWithTaxes === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
    ;
