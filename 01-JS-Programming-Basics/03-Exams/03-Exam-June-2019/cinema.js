function cinema(input) {
    let hallCapacity = Number(input[0]);
    let peopleCount = 0;
    let ticketPrice = 5.00;
    let totalTicketsCost = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Movie time!") {
            console.log(`There are ${Math.abs(hallCapacity)} seats left in the cinema.`);
            break;
        }
        let tempPeopleCount = Number(input[i]);
        peopleCount = tempPeopleCount;
        let tempEarnedMoney = peopleCount * ticketPrice;
        if (hallCapacity - peopleCount >= 0) {
            if (peopleCount % 3 === 0) {
                tempEarnedMoney -= 5;
            }
            hallCapacity -= peopleCount;
            totalTicketsCost += tempEarnedMoney;
        } else {
            console.log("The cinema is full.");
            break;
        }
    }

    console.log(`Cinema income - ${totalTicketsCost} lv.`);
}

cinema(["100",
    "15",
    "15",
    "15",
    "15",
    "15",
    "15",
    "15"])



