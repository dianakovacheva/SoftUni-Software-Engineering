function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trackType = input[2];

    if (trackType === "trail") {
        juniorsTicketPrice = 5.50;
        seniorTicketPrice = 7.00;
    } else if (trackType === "cross-country") {
        juniorsTicketPrice = 8.00;
        seniorTicketPrice = 9.50;
    } else if (trackType === "downhill") {
        juniorsTicketPrice = 12.25;
        seniorTicketPrice = 13.75;
    } else if (trackType === "road") {
        juniorsTicketPrice = 20;
        seniorTicketPrice = 21.50;
    }

    let totalMoneyFromJuniorTickets = juniorsTicketPrice * juniorsCount;
    let totalMoneyFromSeniorTickets = seniorTicketPrice * seniorsCount;
    let totalMoneyFromAllTickets = totalMoneyFromJuniorTickets + totalMoneyFromSeniorTickets;

    if (trackType === "cross-country" && juniorsCount + seniorsCount >= 50) {
        totalMoneyFromAllTickets *= 0.75;
    }

    let otherExpences = totalMoneyFromAllTickets * 0.05;
    let moneyToDonate = totalMoneyFromAllTickets - otherExpences;

    console.log(moneyToDonate.toFixed(2));
}

bikeRace(["3", "40", "road"])