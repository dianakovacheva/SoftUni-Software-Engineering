function matchTickets(input) {
    let budget = Number(input[0]);
    let ticketsType = input[1];
    let peopleCount = Number(input[2]);
    let ticketPrice = 0;
    let transportExpences = 0;

    switch (ticketsType) {
        case "VIP":
            ticketPrice = 499.99;
            break;
        case "Normal":
            ticketPrice = 249.99;
            break;
    }

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportExpences = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 24) {
        transportExpences = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportExpences = budget * 0.40;
    } else if (peopleCount >= 50) {
        transportExpences = budget * 0.25;
    }

    let totalExpences = ticketPrice * peopleCount + transportExpences;

    let diff = Math.abs(budget - totalExpences);

    if (budget >= totalExpences) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

matchTickets(["30000", "VIP", "49"])