function programmingBook(input) {
    let onePagePrice = Number(input[0]);
    let oneCoverPrice = Number(input[1]);
    let percentageDiscount = Number(input[2]);
    let designExpences = Number(input[3]);
    let percentagePaidByTeam = Number(input[4]);

    let pagesExpences = 899 * onePagePrice;
    let coverExpences = 2 * oneCoverPrice;
    let firstTotalExpencesBook = pagesExpences + coverExpences;

    let expencesAfterDiscount = firstTotalExpencesBook - firstTotalExpencesBook * percentageDiscount / 100;
    let expencesWithDesign = expencesAfterDiscount + designExpences;

    let totalCost = expencesWithDesign;
    let endPrice = expencesWithDesign - expencesWithDesign * percentagePaidByTeam / 100;


    console.log(`Avtonom should pay ${endPrice.toFixed(2)} BGN.`);

}

programmingBook(["0.02",
    "0.50",
    "18",
    "21",
    "50"])


