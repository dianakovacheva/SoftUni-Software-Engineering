function movieProfit(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForTheKino = Number(input[4]);

    let ticketPricePerDay = ticketPrice * ticketsCount;
    let totalEarnedMoney = ticketPricePerDay * daysCount;
    percentForTheKino = percentForTheKino / 100 * totalEarnedMoney;

    let win = totalEarnedMoney - percentForTheKino;
    console.log(`The profit from the movie ${movieName} is ${win.toFixed(2)} lv.`);
}

movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])