function easterGuests(input) {
    let easterBreadPrice = 4.00;
    let oneEggPrice = 0.45;
    let guestCount = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadCount = Math.ceil(guestCount / 3);
    let eggsCount = guestCount * 2;
    let totalExpences = easterBreadCount * easterBreadPrice + eggsCount * oneEggPrice;
    let diff = Math.abs(budget - totalExpences);
    if (budget >= totalExpences) {
        console.log(`Lyubo bought ${easterBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);

    }
}

easterGuests(["9",
    "12"])
