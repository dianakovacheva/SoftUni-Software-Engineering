function worldSnookerChampionship(input) {
    let championshipStage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let photoWithTrophy = input[3];
    let ticketPrice = 0;

    switch (championshipStage) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard":
                    ticketPrice = 55.50;
                    break;
                case "Premium":
                    ticketPrice = 105.20;
                    break;
                case "VIP":
                    ticketPrice = 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch (ticketType) {
                case "Standard":
                    ticketPrice = 75.88;
                    break;
                case "Premium":
                    ticketPrice = 125.22;
                    break;
                case "VIP":
                    ticketPrice = 300.40;
                    break;
            }
            break;
        case "Final":
            switch (ticketType) {
                case "Standard":
                    ticketPrice = 110.10;
                    break;
                case "Premium":
                    ticketPrice = 160.66;
                    break;
                case "VIP":
                    ticketPrice = 400;
                    break;
            }
            break;
    }

    let totalTicketPrice = ticketCount * ticketPrice;

    if (totalTicketPrice >= 4000 && photoWithTrophy === "Y") {
        totalTicketPrice *= 0.75;
        console.log(totalTicketPrice.toFixed(2));
    } else if (totalTicketPrice > 2500) {
        totalTicketPrice *= 0.90;
        totalTicketPrice += (ticketCount * 40),
            console.log(totalTicketPrice.toFixed(2));
    } else {
        console.log(totalTicketPrice.toFixed(2));

    }
}

worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"])


