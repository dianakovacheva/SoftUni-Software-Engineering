function fuelTank(input) {
    let fuelType = input[0];
    let litersFuel = Number(input[1]);
    let discountCard = input[2];
    let gasolinePriceProLiter = 2.22;
    let dieselPriceProLiter = 2.33;
    let gasPriceProLiter = 0.93;
    let fuelExpences = 0;

    if (discountCard === "Yes") {
        gasolinePriceProLiter -= 0.18;
        dieselPriceProLiter -= 0.12;
        gasPriceProLiter -= 0.08;
    }

    let gasolineExpences = litersFuel * gasolinePriceProLiter;
    let dieselExpences = litersFuel * dieselPriceProLiter;
    let gasExpences = litersFuel * gasPriceProLiter;

    if (litersFuel >= 20 && litersFuel <= 25) {
        if (fuelType === "Gasoline") {
            gasolineExpences *= 0.92;
            console.log(`${gasolineExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
            dieselExpences *= 0.92;
            console.log(`${dieselExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
            gasExpences *= 0.92;
            console.log(`${gasExpences.toFixed(2)} lv.`);
        }
    } else if (litersFuel > 25) {
        if (fuelType === "Gasoline") {
            gasolineExpences *= 0.90;
            console.log(`${gasolineExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
            dieselExpences *= 0.90;
            console.log(`${dieselExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
            gasExpences *= 0.90;
            console.log(`${gasExpences.toFixed(2)} lv.`);
        }
    } else {
        if (fuelType === "Gasoline") {
            console.log(`${gasolineExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
            console.log(`${dieselExpences.toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
            console.log(`${gasExpences.toFixed(2)} lv.`);
        }
    }
}

fuelTank(["Diesel", "19", "No"])