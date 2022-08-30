function cinema(input) {

    let projectionType = input[0];
    let rowCount = Number(input[1]);
    let columnCount = Number(input[2]);
    let ticketPrice = 0;
    let totalIncome = 0;

    switch (projectionType) {
        case "Premiere":
            ticketPrice = 12.00;
            break;
        case "Normal":
            ticketPrice = 7.50;
            break;
        case "Discount":
            ticketPrice = 5.00;
            break;
        
    }

    totalIncome = rowCount * columnCount * ticketPrice;

console.log(`${totalIncome.toFixed(2)} leva`);

}

cinema(["Normal",
"21",
"13"])
