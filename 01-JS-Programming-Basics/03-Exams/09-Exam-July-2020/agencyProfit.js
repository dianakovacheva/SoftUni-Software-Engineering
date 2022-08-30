function agencyProfit(input) {
    let agencyName = input[0];
    let adultsTicketsCount = Number(input[1]);
    let kidsTicketsCount = Number(input[2]);
    let nettoPriceAdultsTicket = Number(input[3]);
    let administrationFee = Number(input[4]);

    let adultsTicketPricesInclAdministrationFee = nettoPriceAdultsTicket + administrationFee;
    let nettPriceKidsTicket = nettoPriceAdultsTicket * 0.30;
    let kidsTicketPriceInclAdministrationFee = nettPriceKidsTicket + administrationFee;
    let totalMoney = kidsTicketsCount * kidsTicketPriceInclAdministrationFee + adultsTicketsCount * adultsTicketPricesInclAdministrationFee;

    let win = totalMoney * 0.20;
    console.log(`The profit of your agency from ${agencyName} tickets is ${win.toFixed(2)} lv.`);

}

agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])

