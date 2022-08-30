function agencyProfit(input) {
    let name = input[0];
    let adultsTicketCount = Number(input[1]);
    let kidsTicketCount = Number(input[2]);
    let netTicketPriceAdults = Number(input[3]);
    let administrationFee = Number(input[4]);

    let kidsTicketNetPrice = netTicketPriceAdults * 0.30;
    let adultsTicketPriceAfterFree = netTicketPriceAdults + administrationFee;
    let kidsTicketPriceAfterFree = kidsTicketNetPrice + administrationFee;

    let totalExpences = adultsTicketCount * adultsTicketPriceAfterFree + kidsTicketCount * kidsTicketPriceAfterFree;

    let profit = totalExpences * 0.20;
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])
